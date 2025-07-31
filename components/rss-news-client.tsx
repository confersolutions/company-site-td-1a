"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, Clock, ExternalLink, Rss, Loader2, AlertCircle, Sparkles } from "lucide-react"

// Define the RSS item type
interface RSSItem {
  title: string
  link: string
  pubDate: string
  description: string
  content?: string
  guid?: string
  enclosure?: {
    url: string
    type: string
  } | null
}

interface RSSResponse {
  success: boolean
  articles: RSSItem[]
  lastUpdated: string
  error?: string
}

// Format date helper
function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) {
      return dateString
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  } catch {
    return dateString
  }
}

// Calculate reading time
function calculateReadingTime(content: string): string {
  if (!content) return "1 min read"
  const wordsPerMinute = 200
  const words = content.split(" ").length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${Math.max(1, minutes)} min read`
}

// Clean HTML from description
function cleanHTML(html: string): string {
  if (!html) return ""
  return (
    html
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .trim()
      .substring(0, 200) + (html.length > 200 ? "..." : "")
  )
}

// Extract image from HTML content or enclosure
function getArticleImage(article: RSSItem): string | null {
  // First try enclosure
  if (article.enclosure?.url && article.enclosure.type.startsWith("image/")) {
    return article.enclosure.url
  }

  // Then try to extract from description
  if (article.description) {
    const imgRegex = /<img[^>]+src="([^">]+)"/i
    const match = article.description.match(imgRegex)
    if (match) return match[1]
  }

  return null
}

// Get gradient colors for cards
function getCardGradient(index: number): string {
  const gradients = [
    "from-fintech-500/10 to-fintech-600/5",
    "from-purple-500/10 to-purple-600/5",
    "from-blue-500/10 to-blue-600/5",
    "from-emerald-500/10 to-emerald-600/5",
    "from-orange-500/10 to-orange-600/5",
    "from-pink-500/10 to-pink-600/5",
  ]
  return gradients[index % gradients.length]
}

// Get accent colors for cards
function getAccentColor(index: number): string {
  const colors = ["fintech-500", "purple-500", "blue-500", "emerald-500", "orange-500", "pink-500"]
  return colors[index % colors.length]
}

export function RSSNewsClient() {
  const [rssData, setRssData] = useState<RSSResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchRSSData = async () => {
    try {
      setLoading(true)
      setError(null)

      console.log("Fetching RSS data from API...")

      const response = await fetch("/api/rss-feed", {
        cache: "no-store",
        headers: {
          Accept: "application/json",
        },
      })

      console.log("API Response status:", response.status)

      if (!response.ok) {
        const errorText = await response.text()
        console.error("API Error response:", errorText)
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: RSSResponse = await response.json()
      console.log("RSS Data received:", data)

      setRssData(data)

      if (!data.success) {
        setError(data.error || "Failed to fetch RSS feed")
      }
    } catch (err: any) {
      console.error("Error fetching RSS data:", err)
      setError(err.message || "Failed to load news articles")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRSSData()
  }, [])

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-fintech-500 via-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
          <Loader2 className="h-10 w-10 text-white animate-spin" />
        </div>
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-fintech-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
          Loading Latest AI News
        </h3>
        <p className="text-lg text-muted-foreground">Fetching the freshest articles from Smol AI RSS feed</p>
        <div className="flex justify-center mt-6">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-fintech-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !rssData || !rssData.success) {
    return (
      <div className="text-center py-20">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
          <AlertCircle className="h-10 w-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-red-600 dark:text-red-400">Unable to Load Articles</h3>
        <p className="text-lg text-muted-foreground mb-6">{error || "Unable to fetch the latest news at this time."}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={fetchRSSData}
            className="bg-gradient-to-r from-fintech-500 to-fintech-600 hover:from-fintech-600 hover:to-fintech-700 text-white shadow-lg"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button variant="outline" asChild className="border-2 bg-transparent">
            <Link href="https://news.smol.ai" target="_blank" rel="noopener noreferrer">
              Visit Smol AI Directly
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  if (rssData.articles.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-fintech-500 via-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
          <Rss className="h-10 w-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-fintech-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
          No Articles Found
        </h3>
        <p className="text-lg text-muted-foreground mb-6">The RSS feed appears to be empty at the moment.</p>
        <Button
          onClick={fetchRSSData}
          className="bg-gradient-to-r from-fintech-500 to-fintech-600 hover:from-fintech-600 hover:to-fintech-700 text-white shadow-lg"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          Refresh Feed
        </Button>
      </div>
    )
  }

  // Display the first 6 articles from the RSS feed
  const displayArticles = rssData.articles.slice(0, 6)

  return (
    <div className="space-y-12">
      {/* Feed Status */}
      <div className="text-center">
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900 border border-emerald-200 dark:border-emerald-800 mb-4">
          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
          <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
            Last updated: {new Date(rssData.lastUpdated).toLocaleString()}
          </span>
        </div>
        <Button
          onClick={fetchRSSData}
          disabled={loading}
          className="bg-gradient-to-r from-fintech-500 to-purple-600 hover:from-fintech-600 hover:to-purple-700 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Refreshing...
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4 mr-2" />
              Refresh Articles
            </>
          )}
        </Button>
      </div>

      {/* Articles Grid - 2 rows of 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayArticles.map((article, index) => {
          const imageUrl = getArticleImage(article)
          const cleanDescription = cleanHTML(article.description)
          const readingTime = calculateReadingTime(article.description)
          const cardGradient = getCardGradient(index)
          const accentColor = getAccentColor(index)

          return (
            <Card
              key={article.guid || article.link || index}
              className={`border-0 bg-gradient-to-br ${cardGradient} backdrop-blur-sm group hover:shadow-2xl transition-all duration-500 hover:scale-105 flex flex-col overflow-hidden relative`}
            >
              {/* Accent Border */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-${accentColor} to-${accentColor}/60`}
              ></div>

              {/* Featured Badge for first article */}
              {index === 0 && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              )}

              {/* Article Image */}
              {imageUrl && (
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
                  <img
                    src={imageUrl || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              )}

              <CardHeader className="flex-grow pb-2">
                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="font-medium">{formatDate(article.pubDate)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="font-medium">{readingTime}</span>
                  </div>
                </div>

                {/* Article Title */}
                <CardTitle
                  className={`text-lg font-bold group-hover:text-${accentColor} transition-colors line-clamp-3 leading-tight`}
                >
                  {article.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Article Description */}
                {cleanDescription && (
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">{cleanDescription}</p>
                )}

                {/* Read More Button */}
                <Button
                  variant="outline"
                  className={`w-full bg-transparent group-hover:bg-${accentColor}/10 border-2 border-${accentColor}/20 group-hover:border-${accentColor}/40 transition-all duration-300 hover:shadow-lg`}
                  asChild
                >
                  <Link
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center font-semibold"
                  >
                    Read Full Article
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Show More Articles Hint */}
      {rssData.articles.length > 6 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground mb-4">Showing 6 of {rssData.articles.length} available articles</p>
          <Button
            onClick={fetchRSSData}
            variant="outline"
            className="border-2 border-fintech-200 dark:border-fintech-800 hover:bg-fintech-50 dark:hover:bg-fintech-950 bg-transparent"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Refresh for Latest Updates
          </Button>
        </div>
      )}
    </div>
  )
}
