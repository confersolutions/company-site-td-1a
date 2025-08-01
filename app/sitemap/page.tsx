"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  RefreshCw,
  ExternalLink,
  Copy,
  ChevronDown,
  ChevronRight,
  Home,
  Building2,
  Bot,
  FileText,
  Wrench,
  BookOpen,
  Globe,
  Clock,
  CheckCircle,
  Info,
  Tag,
  Calendar,
  FileType,
  LinkIcon,
  Eye,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  FolderOpen,
  Loader2,
} from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

interface PageMetadata {
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

interface PageInfo {
  title: string
  path: string
  type: "static" | "dynamic" | "api"
  lastModified?: string
  description?: string
  category: string
  metadata?: PageMetadata
  exists: boolean
}

interface SitemapCategory {
  name: string
  icon: string
  pages: PageInfo[]
  expanded: boolean
}

// Icon mapping for dynamic icons
const getIconComponent = (iconName: string) => {
  const icons: { [key: string]: React.ReactNode } = {
    Home: <Home className="w-4 h-4" />,
    Bot: <Bot className="w-4 h-4" />,
    Building2: <Building2 className="w-4 h-4" />,
    FileText: <FileText className="w-4 h-4" />,
    Wrench: <Wrench className="w-4 h-4" />,
    BookOpen: <BookOpen className="w-4 h-4" />,
    Globe: <Globe className="w-4 h-4" />,
    FolderOpen: <FolderOpen className="w-4 h-4" />,
  }
  return icons[iconName] || <FolderOpen className="w-4 h-4" />
}

export default function SitemapPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categories, setCategories] = useState<SitemapCategory[]>([])
  const [lastUpdated, setLastUpdated] = useState<string>("")
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [copiedPath, setCopiedPath] = useState<string>("")
  const [showMetadata, setShowMetadata] = useState(false)
  const [expandedMetadata, setExpandedMetadata] = useState<Set<string>>(new Set())
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string>("")

  // Fetch dynamic sitemap data from API
  const fetchSitemapData = async () => {
    try {
      setIsRefreshing(true)
      setError("")
      
      const response = await fetch('/api/sitemap-data', {
        method: 'GET',
        cache: 'no-store'
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to fetch sitemap data')
      }
      
      setCategories(data.data)
      setLastUpdated(new Date(data.lastUpdated).toLocaleString())
      toast.success("Sitemap data loaded successfully!")
      
    } catch (error) {
      console.error('Error fetching sitemap data:', error)
      setError(error instanceof Error ? error.message : 'Failed to load sitemap data')
      toast.error("Failed to load sitemap data")
      
      // Fallback to basic static data in case of error
      setCategories([])
      
    } finally {
      setIsRefreshing(false)
      setIsLoading(false)
    }
  }

  const refreshSitemap = async () => {
    await fetchSitemapData()
  }

  const toggleCategory = (categoryIndex: number) => {
    setCategories((prev) =>
      prev.map((cat, index) => (index === categoryIndex ? { ...cat, expanded: !cat.expanded } : cat)),
    )
  }

  const toggleMetadata = (path: string) => {
    setExpandedMetadata((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(path)) {
        newSet.delete(path)
      } else {
        newSet.add(path)
      }
      return newSet
    })
  }

  const copyToClipboard = async (path: string) => {
    const fullUrl = `${window.location.origin}${path}`
    await navigator.clipboard.writeText(fullUrl)
    setCopiedPath(path)
    toast.success("URL copied to clipboard!")
    setTimeout(() => setCopiedPath(""), 2000)
  }

  const copyMetadata = async (metadata: PageMetadata) => {
    const metadataText = `Title: ${metadata.title || "N/A"}
Description: ${metadata.description || "N/A"}
Keywords: ${metadata.keywords || "N/A"}
Canonical: ${metadata.canonical || "N/A"}
Last Modified: ${metadata.lastModified || "N/A"}`

    await navigator.clipboard.writeText(metadataText)
    toast.success("Metadata copied to clipboard!")
  }

  const getMetadataQualityIcon = (metadata: PageMetadata) => {
    if (metadata.hasCompleteMetadata) {
      return <CheckCircle2 className="w-4 h-4 text-green-500" />
    } else if (metadata.title && metadata.description) {
      return <AlertTriangle className="w-4 h-4 text-yellow-500" />
    } else {
      return <XCircle className="w-4 h-4 text-red-500" />
    }
  }

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      pages: category.pages.filter(
        (page) =>
          page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          page.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
          page.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          page.metadata?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          page.metadata?.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          page.metadata?.keywords?.toString().toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.pages.length > 0 || searchTerm === "")

  const totalPages = categories.reduce((sum, cat) => sum + cat.pages.length, 0)
  const visiblePages = filteredCategories.reduce((sum, cat) => sum + cat.pages.length, 0)
  const pagesWithCompleteMetadata = categories
    .flatMap((cat) => cat.pages)
    .filter((page) => page.metadata?.hasCompleteMetadata).length

  useEffect(() => {
    fetchSitemapData()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Scanning pages and extracting metadata...
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            This may take a moment for the first load
          </p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6 text-center">
            <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Error Loading Sitemap</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
            <Button onClick={fetchSitemapData} disabled={isRefreshing}>
              {isRefreshing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Retrying...
                </>
              ) : (
                "Try Again"
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
            <Clock className="w-3 h-3 mr-1" />
            🤖 Dynamic • Last scan: {lastUpdated}
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Dynamic Sitemap
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            ✨ <strong>Automatically scanned</strong> from your app directory! Real-time metadata extraction from actual page files.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Badge variant="outline" className="text-sm">
              📄 {totalPages} Total Pages
            </Badge>
            <Badge variant="outline" className="text-sm">
              📁 {categories.length} Categories
            </Badge>
            <Badge variant="outline" className="text-sm bg-green-50 text-green-700 border-green-200">
              ✅ {pagesWithCompleteMetadata} Complete SEO
            </Badge>
            <Badge variant="outline" className="text-sm bg-yellow-50 text-yellow-700 border-yellow-200">
              ⚠️ {totalPages - pagesWithCompleteMetadata} Basic SEO
            </Badge>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            This sitemap automatically scans your <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs">app/</code> directory, 
            extracts metadata from <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs">page.tsx</code> files, 
            and provides real-time SEO insights. No manual updates needed! 🚀
          </p>
        </div>
      </section>

      {/* Search and Controls */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search pages, paths, descriptions, or metadata..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/50 dark:bg-slate-700/50"
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => setShowMetadata(!showMetadata)}
                    variant={showMetadata ? "default" : "outline"}
                    className="whitespace-nowrap"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    {showMetadata ? "Hide Metadata" : "Show Metadata"}
                  </Button>

                  <Button
                    onClick={refreshSitemap}
                    disabled={isRefreshing}
                    variant="outline"
                    className="whitespace-nowrap bg-transparent"
                  >
                    <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
                    {isRefreshing ? "Scanning..." : "Refresh"}
                  </Button>
                </div>
              </div>

              {searchTerm && (
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  Showing {visiblePages} of {totalPages} pages
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sitemap Categories */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto space-y-6">
          {filteredCategories.map((category, categoryIndex) => (
            <Card key={category.name} className="backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border-0 shadow-xl">
              <CardHeader
                className="cursor-pointer hover:bg-gray-50/50 dark:hover:bg-slate-700/50 transition-colors"
                onClick={() => toggleCategory(categoryIndex)}
              >
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getIconComponent(category.icon)}
                    <span>{category.name}</span>
                    <Badge variant="secondary" className="ml-2">
                      {category.pages.length}
                    </Badge>
                  </div>
                  {category.expanded ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </CardTitle>
              </CardHeader>

              {category.expanded && (
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {category.pages.map((page, index) => (
                      <div key={`${category.name}-${page.path}-${index}`} className="space-y-2">
                        <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50/50 dark:bg-slate-700/50 hover:bg-gray-100/50 dark:hover:bg-slate-600/50 transition-colors group">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-1">
                              <Link
                                href={page.path}
                                className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                              >
                                {page.title}
                              </Link>
                              <Badge
                                variant={
                                  page.type === "static" ? "default" : page.type === "dynamic" ? "secondary" : "outline"
                                }
                                className="text-xs"
                              >
                                {page.type}
                              </Badge>
                              {page.metadata && getMetadataQualityIcon(page.metadata)}
                            </div>

                            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{page.path}</div>

                            {page.description && (
                              <div className="text-sm text-gray-500 dark:text-gray-400">{page.description}</div>
                            )}
                          </div>

                          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            {page.metadata && (
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => toggleMetadata(page.path)}
                                className="h-8 w-8 p-0"
                                title="View Metadata"
                              >
                                <Info className="w-4 h-4" />
                              </Button>
                            )}

                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => copyToClipboard(page.path)}
                              className="h-8 w-8 p-0"
                            >
                              {copiedPath === page.path ? (
                                <CheckCircle className="w-4 h-4 text-green-500" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </Button>

                            <Link href={page.path}>
                              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>

                        {/* Metadata Display */}
                        {(showMetadata || expandedMetadata.has(page.path)) && page.metadata && (
                          <div className="ml-4 p-4 rounded-lg bg-blue-50/50 dark:bg-blue-900/20 border-l-4 border-blue-200 dark:border-blue-700">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-medium text-blue-900 dark:text-blue-100 flex items-center gap-2">
                                <FileType className="w-4 h-4" />
                                Live Metadata
                                {page.metadata.hasCompleteMetadata && (
                                  <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                                    Complete ✅
                                  </Badge>
                                )}
                              </h4>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => copyMetadata(page.metadata!)}
                                className="h-6 text-xs"
                              >
                                <Copy className="w-3 h-3 mr-1" />
                                Copy
                              </Button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                              <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                  <Tag className="w-3 h-3 mt-0.5 text-blue-600" />
                                  <div>
                                    <span className="font-medium text-gray-700 dark:text-gray-300">Title:</span>
                                    <div className="text-gray-600 dark:text-gray-400 break-words">
                                      {page.metadata.title || "❌ Not set"}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-start gap-2">
                                  <FileText className="w-3 h-3 mt-0.5 text-blue-600" />
                                  <div>
                                    <span className="font-medium text-gray-700 dark:text-gray-300">Description:</span>
                                    <div className="text-gray-600 dark:text-gray-400 break-words">
                                      {page.metadata.description || "❌ Not set"}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-start gap-2">
                                  <Search className="w-3 h-3 mt-0.5 text-blue-600" />
                                  <div>
                                    <span className="font-medium text-gray-700 dark:text-gray-300">
                                      Keywords: {page.metadata.hasKeywords ? "✅" : "❌"}
                                    </span>
                                    <div className="text-gray-600 dark:text-gray-400 break-words">
                                      {page.metadata.keywords || "❌ Not set"}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                  <LinkIcon className="w-3 h-3 mt-0.5 text-blue-600" />
                                  <div>
                                    <span className="font-medium text-gray-700 dark:text-gray-300">
                                      Canonical: {page.metadata.hasCanonical ? "✅" : "❌"}
                                    </span>
                                    <div className="text-gray-600 dark:text-gray-400 break-words">
                                      {page.metadata.canonical || "❌ Not set"}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-start gap-2">
                                  <Calendar className="w-3 h-3 mt-0.5 text-blue-600" />
                                  <div>
                                    <span className="font-medium text-gray-700 dark:text-gray-300">Modified:</span>
                                    <div className="text-gray-600 dark:text-gray-400">
                                      {page.metadata.lastModified || "Unknown"}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-start gap-2">
                                  <FileType className="w-3 h-3 mt-0.5 text-blue-600" />
                                  <div>
                                    <span className="font-medium text-gray-700 dark:text-gray-300">Size:</span>
                                    <div className="text-gray-600 dark:text-gray-400">
                                      {page.metadata.fileSize || "Unknown"}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* SEO Features Status */}
                              <div className="mt-3 pt-3 border-t border-blue-200 dark:border-blue-700">
                                <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2 text-xs">
                                SEO Features
                                </h5>
                              <div className="flex flex-wrap gap-2 text-xs">
                                <Badge variant="outline" className={page.metadata.hasOpenGraph ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-700 border-red-200"}>
                                  {page.metadata.hasOpenGraph ? "✅" : "❌"} Open Graph
                                </Badge>
                                <Badge variant="outline" className={page.metadata.hasTwitterCard ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-700 border-red-200"}>
                                  {page.metadata.hasTwitterCard ? "✅" : "❌"} Twitter Card
                                </Badge>
                                <Badge variant="outline" className={page.metadata.hasRobots ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-700 border-red-200"}>
                                  {page.metadata.hasRobots ? "✅" : "❌"} Robots
                                </Badge>
                                {page.metadata.verification && (
                                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                    ✅ Verification
                                  </Badge>
                                  )}
                                </div>
                              </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Footer Stats */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <Card className="backdrop-blur-sm bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border-0">
            <CardContent className="p-6 text-center">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{totalPages}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">📄 Total Pages</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{categories.length}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">📁 Categories</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {pagesWithCompleteMetadata}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">✅ Complete SEO</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                    {totalPages - pagesWithCompleteMetadata}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">⚠️ Needs Work</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">🤖</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Auto Updated</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
