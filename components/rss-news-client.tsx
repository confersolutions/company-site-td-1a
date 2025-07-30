"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, ExternalLink, Rss, Loader2, AlertCircle } from "lucide-react"

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
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
          <Loader2 className="h-8 w-8 text-white animate-spin" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Loading latest AI news...</h3>
        <p className="text-muted-foreground">Fetching articles from Smol AI RSS feed</p>
      </div>
    )
  }

  if (error || !rssData || !rssData.success) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Unable to load articles</h3>
        <p className="text-muted-foreground mb-4">{error || "Unable to fetch the latest news at this time."}</p>
        <div className="space-x-4">
          <Button onClick={fetchRSSData} variant="outline">
            Try Again
          </Button>
          <Button variant="outline" asChild>
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
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
          <Rss className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2">No articles found</h3>
        <p className="text-muted-foreground mb-4">The RSS feed appears to be empty.</p>
        <Button onClick={fetchRSSData} variant="outline">
          Refresh
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-4">
          Last updated: {new Date(rssData.lastUpdated).toLocaleString()}
        </p>
        <Button onClick={fetchRSSData} variant="outline" size="sm" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Refreshing...
            </>
          ) : (
            <>
              <ExternalLink className="h-4 w-4 mr-2" />
              Refresh Articles
            </>
          )}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rssData.articles.map((article, index) => {
          const imageUrl = getArticleImage(article)
          const cleanDescription = cleanHTML(article.description)
          const readingTime = calculateReadingTime(article.description)

          return (
            <Card
              key={article.guid || article.link || index}
              className="border-0 bg-gradient-to-br from-background to-secondary/20 group hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {imageUrl && (
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 relative overflow-hidden">
                  <img
                    src={imageUrl || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                    }}
                  />
                </div>
              )}

              <CardHeader className="flex-grow">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(article.pubDate)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {readingTime}
                  </div>
                </div>
                <CardTitle className="text-lg font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-3">
                  {article.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                {cleanDescription && (
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{cleanDescription}</p>
                )}
                <Button
                  variant="outline"
                  className="w-full bg-transparent group-hover:bg-blue-50 dark:group-hover:bg-blue-950"
                  asChild
                >
                  <Link
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Read Full Article
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
