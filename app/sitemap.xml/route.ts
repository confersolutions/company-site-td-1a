import { NextResponse } from 'next/server'
import { generateDynamicSitemap } from '@/lib/sitemap-scanner'

export async function GET() {
  try {
    const sitemapData = await generateDynamicSitemap()
    
    // Convert to XML format
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapData.map(page => `  <url>
    <loc>https://confersolutions.ai${page.path}</loc>
    <lastmod>${page.lastModified || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return new NextResponse('Error generating sitemap', { status: 500 })
  }
} 