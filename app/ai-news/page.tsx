import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ConsultationButton } from "@/components/consultation-button"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, RefreshCw, Rss, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Latest AI News | Confer Solutions AI",
  description:
    "Stay updated with the latest AI developments and industry insights from Smol AI. Real-time news feed covering artificial intelligence breakthroughs and trends.",
}

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

// Server-side function to fetch RSS data from our API
async function fetchRSSFeed(): Promise<RSSResponse> {
  try {
    // Use absolute URL for server-side fetch
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://confersolutions.ai"

    const response = await fetch(`${baseUrl}/api/rss-feed`, {
      cache: "no-store", // Always fetch fresh data
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: RSSResponse = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching RSS feed:", error)
    return {
      success: false,
      articles: [],
      lastUpdated: new Date().toISOString(),
      error: "Failed to fetch RSS feed",
    }
  }
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

// News Articles Component
function NewsArticles({ articles, error }: { articles: RSSItem[]; error?: string }) {
  if (error || articles.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-fintech-500 to-fintech-600 flex items-center justify-center mx-auto mb-4">
          <Rss className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{error ? "Unable to load articles" : "No articles available"}</h3>
        <p className="text-muted-foreground">
          {error || "Unable to fetch the latest news at this time. Please try again later."}
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article, index) => {
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
  )
}

// Main page component - Server Component that fetches real RSS data
export default async function AINewsPage() {
  // Fetch real RSS data from our API
  const rssData = await fetchRSSFeed()
  const lastUpdated = new Date(rssData.lastUpdated).toLocaleString()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Rss className="h-8 w-8 text-fintech-600 mr-3" />
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
                Live RSS Feed
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Latest AI News from Smol AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Real-time updates on artificial intelligence developments, breakthroughs, and industry insights directly
              from the Smol AI news feed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-sm text-muted-foreground">
                <RefreshCw className="h-4 w-4 mr-2" />
                Last updated: {lastUpdated}
              </div>
              <ConsultationButton size="lg" className="px-8 py-3">
                Discuss AI Implementation
              </ConsultationButton>
            </div>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <NewsArticles articles={rssData.articles} error={rssData.error} />
        </div>
      </section>

      {/* About Smol AI Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              About Smol AI News
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Smol AI provides curated artificial intelligence news, covering the latest developments in machine
              learning, AI research, industry applications, and technological breakthroughs that shape the future of
              business and society.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-700 dark:to-fintech-900">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Implement AI in Your Business?</h2>
            <p className="text-xl text-fintech-100 mb-8">
              Stay informed about AI trends and transform your operations with cutting-edge solutions backed by industry
              expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationButton size="lg" className="px-8 py-3 bg-white text-fintech-600 hover:bg-fintech-50">
                Schedule Consultation
              </ConsultationButton>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 border-white text-white hover:bg-white hover:text-fintech-600 bg-transparent"
                asChild
              >
                <Link href="/solutions">
                  Explore AI Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
