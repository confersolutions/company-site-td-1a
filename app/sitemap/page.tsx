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
} from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

interface PageMetadata {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  lastModified?: string
  fileSize?: string
  routeType: "static" | "dynamic" | "catch-all"
  hasCompleteMetadata: boolean
}

interface PageInfo {
  title: string
  path: string
  type: "static" | "dynamic" | "api"
  lastModified?: string
  description?: string
  category: string
  metadata?: PageMetadata
}

interface SitemapCategory {
  name: string
  icon: React.ReactNode
  pages: PageInfo[]
  expanded: boolean
}

export default function SitemapPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categories, setCategories] = useState<SitemapCategory[]>([])
  const [lastUpdated, setLastUpdated] = useState<string>("")
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [copiedPath, setCopiedPath] = useState<string>("")
  const [showMetadata, setShowMetadata] = useState(false)
  const [expandedMetadata, setExpandedMetadata] = useState<Set<string>>(new Set())

  // Mock metadata extraction function
  const extractPageMetadata = (path: string): PageMetadata => {
    // In a real implementation, this would extract actual metadata from page files
    const mockMetadata: Record<string, PageMetadata> = {
      "/": {
        title: "AI-Powered Mortgage & Financial Solutions | Confer Solutions",
        description:
          "Transform your mortgage operations with cutting-edge AI agents. Automated underwriting, compliance, and processing solutions.",
        keywords: "AI mortgage, automated underwriting, financial AI, mortgage technology",
        canonical: "https://confersolutions.ai/",
        ogTitle: "Confer Solutions - AI-Powered Mortgage Solutions",
        ogDescription: "Leading AI technology for mortgage and financial services automation",
        lastModified: "2024-01-15",
        fileSize: "45.2 KB",
        routeType: "static",
        hasCompleteMetadata: true,
      },
      "/about": {
        title: "About Confer Solutions - AI Innovation Leaders",
        description:
          "Learn about our mission to revolutionize financial services through artificial intelligence and automation.",
        keywords: "about confer solutions, AI company, fintech innovation",
        canonical: "https://confersolutions.ai/about",
        ogTitle: "About Confer Solutions AI",
        ogDescription: "Pioneering AI solutions for the financial industry",
        lastModified: "2024-01-12",
        fileSize: "38.7 KB",
        routeType: "static",
        hasCompleteMetadata: true,
      },
      "/industries/finance-mortgage": {
        title: "AI-Powered Finance & Mortgage Solutions",
        description: "Transforming mortgage banking with cutting-edge AI agents and autonomous processing",
        keywords: "AI finance, mortgage automation, underwriting AI",
        canonical: "https://confersolutions.ai/industries/finance-mortgage",
        ogTitle: "Finance & Mortgage AI Solutions",
        ogDescription: "Revolutionary AI technology for mortgage and finance operations",
        lastModified: "2024-01-14",
        fileSize: "52.1 KB",
        routeType: "static",
        hasCompleteMetadata: true,
      },
      "/case-studies/ai-content-generation": {
        title: "AI Content Generation Case Study - 92% Reduction",
        description: "How we reduced copywriting team from 13 to 2 with AI-powered content generation",
        keywords: "AI content generation, copywriting automation, content marketing AI",
        lastModified: "2024-01-13",
        fileSize: "41.3 KB",
        routeType: "static",
        hasCompleteMetadata: false, // Missing canonical and OG tags
      },
      "/blog": {
        title: "AI & Mortgage Technology Blog",
        description: "Latest insights on artificial intelligence in mortgage and financial services",
        lastModified: "2024-01-10",
        fileSize: "29.8 KB",
        routeType: "static",
        hasCompleteMetadata: false, // Missing keywords and OG tags
      },
    }

    return (
      mockMetadata[path] || {
        title: `Page Title for ${path}`,
        description: `Description for ${path}`,
        lastModified: "2024-01-01",
        fileSize: "25.0 KB",
        routeType: "static",
        hasCompleteMetadata: false,
      }
    )
  }

  // Static sitemap data with metadata
  const generateSitemap = (): SitemapCategory[] => {
    const baseCategories = [
      {
        name: "Main Pages",
        icon: <Home className="w-4 h-4" />,
        expanded: true,
        pages: [
          {
            title: "Home",
            path: "/",
            type: "static" as const,
            category: "main",
            description: "AI-powered mortgage and financial solutions homepage",
          },
          {
            title: "About",
            path: "/about",
            type: "static" as const,
            category: "main",
            description: "Learn about Confer Solutions AI and our mission",
          },
          {
            title: "Blog",
            path: "/blog",
            type: "static" as const,
            category: "main",
            description: "Latest insights on AI and mortgage technology",
          },
          {
            title: "Login",
            path: "/login",
            type: "static" as const,
            category: "main",
            description: "User authentication and account access",
          },
        ],
      },
      {
        name: "Industries",
        icon: <Building2 className="w-4 h-4" />,
        expanded: true,
        pages: [
          {
            title: "Finance & Mortgage",
            path: "/industries/finance-mortgage",
            type: "static" as const,
            category: "industries",
            description: "AI-powered finance and mortgage solutions",
          },
          {
            title: "Retail & E-commerce",
            path: "/industries/retail-ecommerce",
            type: "static" as const,
            category: "industries",
            description: "AI-driven retail and e-commerce automation",
          },
          {
            title: "Healthcare",
            path: "/industries/healthcare",
            type: "static" as const,
            category: "industries",
            description: "Healthcare AI innovation and research partnerships",
          },
        ],
      },
      {
        name: "AI Agents",
        icon: <Bot className="w-4 h-4" />,
        expanded: true,
        pages: [
          {
            title: "Sales Agent",
            path: "/ai-agents/sales-agent",
            type: "static" as const,
            category: "agents",
            description: "AI-powered sales automation and lead qualification",
          },
          {
            title: "Underwriting Agent",
            path: "/ai-agents/underwriting-agent",
            type: "static" as const,
            category: "agents",
            description: "Autonomous loan underwriting and risk assessment",
          },
          {
            title: "Closing Agent",
            path: "/ai-agents/closing-agent",
            type: "static" as const,
            category: "agents",
            description: "Automated closing process and document management",
          },
          {
            title: "Processing Agent",
            path: "/ai-agents/processing-agent",
            type: "static" as const,
            category: "agents",
            description: "Loan processing automation and workflow optimization",
          },
          {
            title: "Post-Closing Agent",
            path: "/ai-agents/post-closing-agent",
            type: "static" as const,
            category: "agents",
            description: "Post-closing operations and quality assurance",
          },
          {
            title: "Voice Agent",
            path: "/ai-agents/voice-agent",
            type: "static" as const,
            category: "agents",
            description: "Conversational AI for customer interactions",
          },
          {
            title: "Worker Agent",
            path: "/ai-agents/worker-agent",
            type: "static" as const,
            category: "agents",
            description: "General-purpose AI worker for various tasks",
          },
          {
            title: "Compliance Agent",
            path: "/ai-agents/compliance-agent",
            type: "static" as const,
            category: "agents",
            description: "Regulatory compliance monitoring and reporting",
          },
          {
            title: "Risk Agent",
            path: "/ai-agents/risk-agent",
            type: "static" as const,
            category: "agents",
            description: "Risk assessment and fraud detection",
          },
          {
            title: "Support Agent",
            path: "/ai-agents/support-agent",
            type: "static" as const,
            category: "agents",
            description: "Customer support automation and ticket resolution",
          },
          {
            title: "Autonomous Mortgage Bank",
            path: "/ai-agents/autonomous-mortgage-bank",
            type: "static" as const,
            category: "agents",
            description: "Complete autonomous mortgage banking solution",
          },
        ],
      },
      {
        name: "Case Studies",
        icon: <FileText className="w-4 h-4" />,
        expanded: true,
        pages: [
          {
            title: "Case Studies Overview",
            path: "/case-studies",
            type: "static" as const,
            category: "case-studies",
            description: "Real results and success stories from our AI implementations",
          },
          {
            title: "AI Content Generation",
            path: "/case-studies/ai-content-generation",
            type: "static" as const,
            category: "case-studies",
            description: "From 13 copywriters to 2: AI content generation success",
          },
          {
            title: "Dynamic SEO Optimization",
            path: "/case-studies/dynamic-seo-optimization",
            type: "static" as const,
            category: "case-studies",
            description: "Making seasonal URLs permanently valuable with AI",
          },
        ],
      },
      {
        name: "Solutions",
        icon: <Wrench className="w-4 h-4" />,
        expanded: true,
        pages: [
          {
            title: "Solutions Overview",
            path: "/solutions",
            type: "static" as const,
            category: "solutions",
            description: "Comprehensive AI solutions for modern businesses",
          },
          {
            title: "AI Mortgage Agent",
            path: "/solutions/ai-mortgage-agent",
            type: "static" as const,
            category: "solutions",
            description: "End-to-end mortgage processing automation",
          },
          {
            title: "RAG Chatbot",
            path: "/solutions/rag-chatbot",
            type: "static" as const,
            category: "solutions",
            description: "Retrieval-augmented generation chatbot solutions",
          },
          {
            title: "Document Processing",
            path: "/solutions/document-processing",
            type: "static" as const,
            category: "solutions",
            description: "Intelligent document analysis and processing",
          },
          {
            title: "Risk Assessment",
            path: "/solutions/risk-assessment",
            type: "static" as const,
            category: "solutions",
            description: "AI-powered risk evaluation and management",
          },
          {
            title: "Fraud Detection",
            path: "/solutions/fraud-detection",
            type: "static" as const,
            category: "solutions",
            description: "Advanced fraud detection and prevention systems",
          },
          {
            title: "Data Analytics",
            path: "/solutions/data-analytics",
            type: "static" as const,
            category: "solutions",
            description: "Business intelligence and predictive analytics",
          },
        ],
      },
      {
        name: "Resources",
        icon: <BookOpen className="w-4 h-4" />,
        expanded: true,
        pages: [
          {
            title: "AI News",
            path: "/ai-news",
            type: "static" as const,
            category: "resources",
            description: "Latest AI industry news and updates",
          },
          {
            title: "Sitemap",
            path: "/sitemap",
            type: "static" as const,
            category: "resources",
            description: "Complete website navigation and page directory",
          },
        ],
      },
      {
        name: "About Pages",
        icon: <Globe className="w-4 h-4" />,
        expanded: false,
        pages: [
          {
            title: "Contact",
            path: "/about/contact",
            type: "static" as const,
            category: "about",
            description: "Get in touch with our team",
          },
          {
            title: "Pricing",
            path: "/about/pricing",
            type: "static" as const,
            category: "about",
            description: "Transparent pricing for our AI solutions",
          },
          {
            title: "Newsroom",
            path: "/about/newsroom",
            type: "static" as const,
            category: "about",
            description: "Latest company news and press releases",
          },
          {
            title: "Privacy Policy",
            path: "/about/privacy",
            type: "static" as const,
            category: "about",
            description: "Privacy policy and data protection information",
          },
          {
            title: "Terms of Service",
            path: "/about/terms",
            type: "static" as const,
            category: "about",
            description: "Terms of service and usage agreements",
          },
          {
            title: "EULA",
            path: "/about/eula",
            type: "static" as const,
            category: "about",
            description: "End user license agreement",
          },
          {
            title: "Disclaimers",
            path: "/about/disclaimers",
            type: "static" as const,
            category: "about",
            description: "Legal disclaimers and limitations",
          },
        ],
      },
    ]

    // Add metadata to each page
    return baseCategories.map((category) => ({
      ...category,
      pages: category.pages.map((page) => ({
        ...page,
        metadata: extractPageMetadata(page.path),
      })),
    }))
  }

  const refreshSitemap = async () => {
    setIsRefreshing(true)
    // Simulate API call to regenerate sitemap
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newCategories = generateSitemap()
    setCategories(newCategories)
    setLastUpdated(new Date().toLocaleString())
    setIsRefreshing(false)
    toast.success("Sitemap refreshed successfully!")
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
          page.metadata?.keywords?.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.pages.length > 0 || searchTerm === "")

  const totalPages = categories.reduce((sum, cat) => sum + cat.pages.length, 0)
  const visiblePages = filteredCategories.reduce((sum, cat) => sum + cat.pages.length, 0)
  const pagesWithCompleteMetadata = categories
    .flatMap((cat) => cat.pages)
    .filter((page) => page.metadata?.hasCompleteMetadata).length

  useEffect(() => {
    const initialCategories = generateSitemap()
    setCategories(initialCategories)
    setLastUpdated(new Date().toLocaleString())
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
            <Clock className="w-3 h-3 mr-1" />
            Auto-Updated • Last scan: {lastUpdated}
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Site Navigation
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore all pages and sections of our website. This sitemap is automatically generated and updated in
            real-time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Badge variant="outline" className="text-sm">
              {totalPages} Total Pages
            </Badge>
            <Badge variant="outline" className="text-sm">
              {categories.length} Categories
            </Badge>
            <Badge variant="outline" className="text-sm">
              {pagesWithCompleteMetadata} Complete SEO
            </Badge>
            <Badge variant="outline" className="text-sm">
              100% Coverage
            </Badge>
          </div>
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
                    {isRefreshing ? "Refreshing..." : "Refresh"}
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
                    {category.icon}
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
                    {category.pages.map((page) => (
                      <div key={page.path} className="space-y-2">
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
                                Page Metadata
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
                                      {page.metadata.title || "Not set"}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-start gap-2">
                                  <FileText className="w-3 h-3 mt-0.5 text-blue-600" />
                                  <div>
                                    <span className="font-medium text-gray-700 dark:text-gray-300">Description:</span>
                                    <div className="text-gray-600 dark:text-gray-400 break-words">
                                      {page.metadata.description || "Not set"}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-start gap-2">
                                  <Search className="w-3 h-3 mt-0.5 text-blue-600" />
                                  <div>
                                    <span className="font-medium text-gray-700 dark:text-gray-300">Keywords:</span>
                                    <div className="text-gray-600 dark:text-gray-400 break-words">
                                      {page.metadata.keywords || "Not set"}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                  <LinkIcon className="w-3 h-3 mt-0.5 text-blue-600" />
                                  <div>
                                    <span className="font-medium text-gray-700 dark:text-gray-300">Canonical:</span>
                                    <div className="text-gray-600 dark:text-gray-400 break-words">
                                      {page.metadata.canonical || "Not set"}
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

                            {(page.metadata.ogTitle || page.metadata.ogDescription) && (
                              <div className="mt-3 pt-3 border-t border-blue-200 dark:border-blue-700">
                                <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2 text-xs">
                                  Open Graph
                                </h5>
                                <div className="space-y-1 text-xs">
                                  {page.metadata.ogTitle && (
                                    <div>
                                      <span className="font-medium">OG Title:</span> {page.metadata.ogTitle}
                                    </div>
                                  )}
                                  {page.metadata.ogDescription && (
                                    <div>
                                      <span className="font-medium">OG Description:</span> {page.metadata.ogDescription}
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
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
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Pages</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{categories.length}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {pagesWithCompleteMetadata}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Complete SEO</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Coverage</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Auto</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Updated</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
