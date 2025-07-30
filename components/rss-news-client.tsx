"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, ExternalLink, Rss, Loader2 } from "lucide-react"

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
  const wordsPerMinute = 200
  const words = content.split(" ").length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

// Clean HTML from description
function cleanHTML(html: string): string {
  if (!html) return ""
  return html.replace(/<[^>]*>/g, "").substring(0, 200) + "..."
}

// Extract image from HTML content
function extractImageFromHTML(html: string): string | null {
  if (!html) return null
  const imgRegex = /<img[^>]+src="([^">]+)"/i
  const match = html.match(imgRegex)
  return match ? match[1] : null
}

export function RSSNewsClient() {
  const [rssData, setRssData] = useState<RSSResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchRSSData = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/rss-feed", {
        cache: "no-store",
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: RSSResponse = await response.json()
      setRssData(data)

      if (!data.success) {
        setError(data.error || "Failed to fetch RSS feed")
      }
    } catch (err) {
      console.error("Error fetching RSS data:", err)
      setError("Failed to load news articles")
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
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-fintech-500 to-fintech-600 flex items-center justify-center mx-auto mb-4">
          <Loader2 className="h-8 w-8 text-white animate-spin" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Loading latest AI news...</h3>
        <p className="text-muted-foreground">Fetching articles from Smol AI RSS feed</p>
      </div>
    )
  }

  if (error || !rssData || !rssData.success || rssData.articles.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-fintech-500 to-fintech-600 flex items-center justify-center mx-auto mb-4">
          <Rss className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Unable to load articles</h3>
        <p className="text-muted-foreground mb-4">{error || "Unable to fetch the latest news at this time."}</p>
        <Button onClick={fetchRSSData} variant="outline">
          Try Again
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
        <Button onClick={fetchRSSData} variant="outline" size="sm">
          <ExternalLink className="h-4 w-4 mr-2" />
          Refresh Articles
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rssData.articles.map((article, index) => {
          const imageUrl = article.enclosure?.url || extractImageFromHTML(article.content || article.description)
          const cleanDescription = cleanHTML(article.description)
          const readingTime = calculateReadingTime(article.description || article.content || "")

          return (
            <Card
              key={article.guid || article.link || index}
              className="border-0 bg-gradient-to-br from-background to-secondary/20 group hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {imageUrl && (
                <div className="aspect-video bg-gradient-to-br from-fintech-100 to-fintech-200 dark:from-fintech-900 dark:to-fintech-800 relative overflow-hidden">
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
                <CardTitle className="text-lg font-bold group-hover:text-fintech-600 dark:group-hover:text-fintech-400 transition-colors line-clamp-3">
                  {article.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                {cleanDescription && (
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{cleanDescription}</p>
                )}
                <Button
                  variant="outline"
                  className="w-full bg-transparent group-hover:bg-fintech-50 dark:group-hover:bg-fintech-950"
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
