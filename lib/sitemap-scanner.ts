import fs from 'fs'
import path from 'path'
import { Metadata } from 'next'

export interface PageMetadata {
  title?: string
  description?: string
  keywords?: string | string[]
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterTitle?: string
  twitterDescription?: string
  robots?: string
  lastModified?: string
  fileSize?: string
  routeType: "static" | "dynamic" | "catch-all"
  hasCompleteMetadata: boolean
  hasKeywords: boolean
  hasCanonical: boolean
  hasOpenGraph: boolean
  hasTwitterCard: boolean
  hasRobots: boolean
  verification?: string
}

export interface PageInfo {
  title: string
  path: string
  type: "static" | "dynamic" | "api"
  lastModified?: string
  description?: string
  category: string
  metadata?: PageMetadata
  exists: boolean
}

export interface SitemapCategory {
  name: string
  icon: string
  pages: PageInfo[]
  expanded: boolean
}

// Function to recursively scan the app directory for page files
export function scanAppDirectory(appDir: string = 'app'): string[] {
  const pages: string[] = []
  
  function scanDir(dir: string, basePath: string = '') {
    try {
      const items = fs.readdirSync(dir, { withFileTypes: true })
      
      for (const item of items) {
        const fullPath = path.join(dir, item.name)
        const routePath = path.join(basePath, item.name).replace(/\\/g, '/')
        
        if (item.isDirectory()) {
          // Skip certain directories
          if (['api', 'globals.css'].includes(item.name)) continue
          
          // Check if this directory has a page.tsx or page.js
          const pageFiles = ['page.tsx', 'page.js', 'page.ts']
          const hasPage = pageFiles.some(pageFile => {
            try {
              return fs.existsSync(path.join(fullPath, pageFile))
            } catch {
              return false
            }
          })
          
          if (hasPage) {
            const route = basePath === '' ? '/' : `/${routePath}`
            pages.push(route)
          }
          
          // Recursively scan subdirectories
          scanDir(fullPath, routePath)
        }
      }
    } catch (error) {
      console.warn(`Could not scan directory ${dir}:`, error)
    }
  }
  
  // Scan all directories (including root which will add '/' if it has a page file)
  scanDir(appDir)
  
  // Remove duplicates and sort
  const uniquePages = [...new Set(pages)]
  return uniquePages.sort()
}

// Function to extract metadata from a page file
export async function extractPageMetadata(pagePath: string): Promise<PageMetadata> {
  const defaultMetadata: PageMetadata = {
    lastModified: new Date().toISOString().split('T')[0],
    fileSize: "0 KB",
    routeType: "static",
    hasCompleteMetadata: false,
    hasKeywords: false,
    hasCanonical: false,
    hasOpenGraph: false,
    hasTwitterCard: false,
    hasRobots: false,
  }

  try {
    // Determine the file path
    let filePath: string
    if (pagePath === '/') {
      filePath = path.join(process.cwd(), 'app', 'page.tsx')
    } else {
      filePath = path.join(process.cwd(), 'app', pagePath, 'page.tsx')
    }
    
    // Check if file exists, try .js if .tsx doesn't exist
    if (!fs.existsSync(filePath)) {
      filePath = filePath.replace('.tsx', '.js')
      if (!fs.existsSync(filePath)) {
        filePath = filePath.replace('.js', '.ts')
        if (!fs.existsSync(filePath)) {
          return defaultMetadata
        }
      }
    }

    // Get file stats
    const stats = fs.statSync(filePath)
    const fileSizeInBytes = stats.size
    const fileSizeInKB = (fileSizeInBytes / 1024).toFixed(1)
    const lastModified = stats.mtime.toISOString().split('T')[0]

    // Read file content
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    // Extract metadata using proper TypeScript parsing
    let metadata: any = {}
    try {
      // Find the metadata export block with better boundary detection
      const metadataRegex = /export\s+const\s+metadata\s*[:\s]*Metadata\s*=\s*(\{[\s\S]*?\n\})/m
      const metadataMatch = fileContent.match(metadataRegex) || 
                           fileContent.match(/export\s+const\s+metadata\s*[:=]\s*(\{[\s\S]*?\n\})/m)
      
      if (metadataMatch) {
        let metadataBlock = metadataMatch[1]
        
        // Handle nested braces properly by counting brace depth
        const startPos = fileContent.indexOf(metadataMatch[0]) + metadataMatch[0].indexOf('{')
        let braceCount = 0
        let endPos = startPos
        
        for (let i = startPos; i < fileContent.length; i++) {
          if (fileContent[i] === '{') braceCount++
          if (fileContent[i] === '}') {
            braceCount--
            if (braceCount === 0) {
              endPos = i + 1
              break
            }
          }
        }
        
        metadataBlock = fileContent.slice(startPos, endPos)
        
        // Extract title - handle multiline strings with proper quote matching
        const titleRegex = /title\s*:\s*["'`]((?:[^"'`\\]|\\.)*)["'`]/s
        const titleMatch = metadataBlock.match(titleRegex)
        if (titleMatch) {
          metadata.title = titleMatch[1].replace(/\\(.)/g, '$1').trim()
        }
        
        // Extract description - handle multiline with escaped quotes
        const descRegex = /description\s*:\s*["'`]((?:[^"'`\\]|\\.)*)["'`]/s
        const descMatch = metadataBlock.match(descRegex)
        if (descMatch) {
          metadata.description = descMatch[1]
            .replace(/\\(.)/g, '$1')
            .replace(/\s+/g, ' ')
            .trim()
        }
        
        // Extract keywords
        const keywordsRegex = /keywords\s*:\s*(?:["'`]((?:[^"'`\\]|\\.)*)["'`]|\[([^\]]*)\])/s
        const keywordsMatch = metadataBlock.match(keywordsRegex)
        if (keywordsMatch) {
          metadata.keywords = (keywordsMatch[1] || keywordsMatch[2])?.replace(/\\(.)/g, '$1').trim()
        }
        
        // Check for canonical URL in alternates section
        const canonicalRegex = /canonical\s*:\s*["'`]([^"'`]*)["'`]/s
        const alternatesRegex = /alternates\s*:\s*\{[^}]*canonical\s*:\s*["'`]([^"'`]*)["'`]/s
        const canonicalMatch = metadataBlock.match(canonicalRegex)
        const alternatesMatch = metadataBlock.match(alternatesRegex)
        
        // Check for comprehensive SEO features
        const hasOpenGraph = /openGraph\s*:\s*\{/.test(metadataBlock)
        const hasTwitterCard = /twitter\s*:\s*\{/.test(metadataBlock)
        const hasRobots = /robots\s*:\s*/.test(metadataBlock)
        const hasVerification = /verification\s*:\s*\{/.test(metadataBlock)
        
        const result: PageMetadata = {
          title: metadata.title,
          description: metadata.description,
          keywords: metadata.keywords,
          canonical: canonicalMatch?.[1] || alternatesMatch?.[1],
          lastModified,
          fileSize: `${fileSizeInKB} KB`,
          routeType: "static",
          hasKeywords: !!metadata.keywords,
          hasCanonical: !!(canonicalMatch || alternatesMatch),
          hasOpenGraph,
          hasTwitterCard,
          hasRobots,
          verification: hasVerification ? 'configured' : undefined,
          hasCompleteMetadata: false
        }

        // Determine if metadata is complete (all 7 criteria)
        result.hasCompleteMetadata = !!(
          result.title &&
          result.description &&
          result.hasKeywords &&
          result.hasCanonical &&
          result.hasOpenGraph &&
          result.hasTwitterCard &&
          result.hasRobots
        )

        return result
      }
    } catch (error) {
      console.warn(`Could not extract metadata from ${filePath}:`, error)
    }

    // Fallback: extract basic info from file content
    const titleMatch = fileContent.match(/<h1[^>]*>([^<]*)<\/h1>/i) || 
                      fileContent.match(/title.*?["`']([^"`']*)["`']/i)
    const title = titleMatch?.[1] || `Page ${pagePath}`

    return {
      title,
      lastModified,
      fileSize: `${fileSizeInKB} KB`,
      routeType: "static",
      hasCompleteMetadata: false,
      hasKeywords: false,
      hasCanonical: false,
      hasOpenGraph: false,
      hasTwitterCard: false,
      hasRobots: false,
    }

  } catch (error) {
    console.warn(`Error processing ${pagePath}:`, error)
    return defaultMetadata
  }
}

// Function to categorize pages
export function categorizePages(pages: string[]): SitemapCategory[] {
  const categories: { [key: string]: PageInfo[] } = {
    'Main Pages': [],
    'AI Agents': [],
    'Industries': [],
    'Solutions': [],
    'Case Studies': [],
    'Blog': [],
    'Landing Pages': [],
    'About Pages': [],
    'Resources': [],
    'Other': []
  }

  for (const pagePath of pages) {
    const pageInfo: PageInfo = {
      title: getPageTitle(pagePath),
      path: pagePath,
      type: "static",
      category: getCategoryFromPath(pagePath),
      description: getPageDescription(pagePath),
      exists: true
    }

    const category = getCategoryFromPath(pagePath)
    if (categories[category]) {
      categories[category].push(pageInfo)
    } else {
      categories['Other'].push(pageInfo)
    }
  }

  return Object.entries(categories)
    .filter(([_, pages]) => pages.length > 0)
    .map(([name, pages]) => ({
      name,
      icon: getCategoryIcon(name),
      pages,
      expanded: true
    }))
}

function getPageTitle(path: string): string {
  if (path === '/') return 'Home'
  
  const segments = path.split('/').filter(Boolean)
  const lastSegment = segments[segments.length - 1]
  
  // Convert kebab-case to Title Case
  return lastSegment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function getCategoryFromPath(path: string): string {
  if (path === '/' || path === '/about' || path === '/login') {
    return 'Main Pages'
  }
  
  if (path.startsWith('/ai-agents')) return 'AI Agents'
  if (path.startsWith('/industries')) return 'Industries'
  if (path.startsWith('/solutions')) return 'Solutions'
  if (path.startsWith('/case-studies')) return 'Case Studies'
  if (path.startsWith('/blog/')) return 'Blog'
  if (path.startsWith('/landing/')) return 'Landing Pages'
  if (path.startsWith('/about/')) return 'About Pages'
  if (path === '/sitemap' || path === '/ai-news') return 'Resources'
  
  return 'Other'
}

function getPageDescription(path: string): string {
  const descriptions: { [key: string]: string } = {
    '/': 'AI-powered mortgage and financial solutions homepage',
    '/about': 'Learn about Confer Solutions AI and our mission',
    '/login': 'User authentication and account access',
    '/sitemap': 'Complete website navigation and page directory',
    '/blog': 'Latest insights on AI and mortgage technology',
    '/ai-news': 'Latest AI industry news and updates'
  }

  return descriptions[path] || `${getPageTitle(path)} page`
}

function getCategoryIcon(categoryName: string): string {
  const icons: { [key: string]: string } = {
    'Main Pages': 'Home',
    'AI Agents': 'Bot',
    'Industries': 'Building2',
    'Solutions': 'Wrench',
    'Case Studies': 'FileText',
    'Blog': 'FileText',
    'Landing Pages': 'Target',
    'About Pages': 'Globe',
    'Resources': 'BookOpen',
    'Other': 'FolderOpen'
  }

  return icons[categoryName] || 'FolderOpen'
}

// API function to get complete sitemap data
export async function generateDynamicSitemap(): Promise<SitemapCategory[]> {
  const pagePaths = scanAppDirectory()
  
  // Deduplicate page paths
  const uniquePaths = [...new Set(pagePaths)]
  
  // Convert paths to PageInfo objects and categorize them
  const categorizedPages = categorizePages(uniquePaths)
  
  // Add metadata to each page
  for (const category of categorizedPages) {
    for (const page of category.pages) {
      page.metadata = await extractPageMetadata(page.path)
    }
  }
  
  return categorizedPages
}
