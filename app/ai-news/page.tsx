import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ConsultationButton } from "@/components/consultation-button"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, ExternalLink, RefreshCw, Rss } from "lucide-react"

// RSS Parser import
const Parser = require("rss-parser")

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
  contentSnippet?: string
  content?: string
  enclosure?: {
    url: string
    type: string
  }
  guid?: string
}

// Server component to fetch RSS data
async function fetchRSSFeed(): Promise<RSSItem[]> {
  try {
    const parser = new Parser({
      timeout: 10000,
      headers: {
        "User-Agent": "Confer Solutions AI News Reader",
      },
    })

    const feed = await parser.parseURL("https://news.smol.ai/rss.xml")

    // Sort by most recent first
    const sortedItems = feed.items.sort((a: any, b: any) => {
      return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    })

    return sortedItems.slice(0, 20) // Limit to 20 most recent articles
  } catch (error) {
    console.error("Error fetching RSS feed:", error)
    return []
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

// Extract image from content
function extractImageFromContent(content: string): string | null {
  if (!content) return null

  const imgRegex = /<img[^>]+src="([^">]+)"/i
  const match = content.match(imgRegex)
  return match ? match[1] : null
}

export default async function AINewsPage() {
  const articles = await fetchRSSFeed()
  const lastUpdated = new Date().toLocaleString()

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
          {articles.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-fintech-500 to-fintech-600 flex items-center justify-center mx-auto mb-4">
                <Rss className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No articles available</h3>
              <p className="text-muted-foreground">
                Unable to fetch the latest news at this time. Please try again later.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => {
                const imageUrl = article.enclosure?.url || extractImageFromContent(article.content || "")
                const snippet =
                  article.contentSnippet || article.content?.replace(/<[^>]*>/g, "").substring(0, 150) + "..." || ""
                const readingTime = article.content ? calculateReadingTime(article.content) : "2 min read"

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
                      {snippet && <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{snippet}</p>}
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
          )}
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent" asChild>
                <Link href="https://news.smol.ai" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Smol AI
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent" asChild>
                <Link href="/blog">
                  Read Our AI Blog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
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
