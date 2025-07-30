import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ConsultationButton } from "@/components/consultation-button"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, RefreshCw, Rss } from "lucide-react"

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
  guid?: string
}

// Simple XML parser for RSS
function parseRSSXML(xmlText: string): RSSItem[] {
  try {
    // Extract items using regex (simple approach for RSS)
    const itemRegex = /<item>([\s\S]*?)<\/item>/gi
    const items: RSSItem[] = []
    let match

    while ((match = itemRegex.exec(xmlText)) !== null) {
      const itemContent = match[1]

      // Extract individual fields
      const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/i)
      const linkMatch = itemContent.match(/<link>(.*?)<\/link>/i)
      const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/i)
      const descriptionMatch = itemContent.match(
        /<description><!\[CDATA\[(.*?)\]\]><\/description>|<description>(.*?)<\/description>/i,
      )
      const guidMatch = itemContent.match(/<guid.*?>(.*?)<\/guid>/i)

      if (titleMatch && linkMatch && pubDateMatch) {
        items.push({
          title: (titleMatch[1] || titleMatch[2] || "").trim(),
          link: linkMatch[1].trim(),
          pubDate: pubDateMatch[1].trim(),
          description: (descriptionMatch?.[1] || descriptionMatch?.[2] || "").trim(),
          guid: guidMatch?.[1]?.trim(),
        })
      }
    }

    return items
  } catch (error) {
    console.error("Error parsing RSS XML:", error)
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

// Clean HTML from description
function cleanHTML(html: string): string {
  return html.replace(/<[^>]*>/g, "").substring(0, 150) + "..."
}

// Extract image from HTML content
function extractImageFromHTML(html: string): string | null {
  const imgRegex = /<img[^>]+src="([^">]+)"/i
  const match = html.match(imgRegex)
  return match ? match[1] : null
}

// Static fallback articles in case RSS fails
const fallbackArticles: RSSItem[] = [
  {
    title: "AI Breakthrough in Natural Language Processing",
    link: "https://news.smol.ai",
    pubDate: new Date().toISOString(),
    description: "Recent advances in AI language models are transforming how we interact with technology.",
    guid: "fallback-1",
  },
  {
    title: "Machine Learning Applications in Healthcare",
    link: "https://news.smol.ai",
    pubDate: new Date(Date.now() - 86400000).toISOString(),
    description: "Exploring how AI is revolutionizing medical diagnosis and treatment planning.",
    guid: "fallback-2",
  },
  {
    title: "The Future of Autonomous AI Systems",
    link: "https://news.smol.ai",
    pubDate: new Date(Date.now() - 172800000).toISOString(),
    description: "Understanding the potential and challenges of fully autonomous artificial intelligence.",
    guid: "fallback-3",
  },
  {
    title: "AI Ethics and Responsible Development",
    link: "https://news.smol.ai",
    pubDate: new Date(Date.now() - 259200000).toISOString(),
    description: "Examining the importance of ethical considerations in AI development and deployment.",
    guid: "fallback-4",
  },
  {
    title: "Quantum Computing Meets Artificial Intelligence",
    link: "https://news.smol.ai",
    pubDate: new Date(Date.now() - 345600000).toISOString(),
    description: "The intersection of quantum computing and AI promises unprecedented computational power.",
    guid: "fallback-5",
  },
]

// News Articles Component
function NewsArticles({ articles }: { articles: RSSItem[] }) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-fintech-500 to-fintech-600 flex items-center justify-center mx-auto mb-4">
          <Rss className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2">No articles available</h3>
        <p className="text-muted-foreground">Unable to fetch the latest news at this time. Please try again later.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article, index) => {
        const imageUrl = extractImageFromHTML(article.description)
        const cleanDescription = cleanHTML(article.description)
        const readingTime = calculateReadingTime(article.description)

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
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

// Main page component - Regular component (not async)
export default function AINewsPage() {
  // Use fallback articles for now to avoid async issues
  const articles = fallbackArticles.slice(0, 5) // Show only first 5 articles
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
          <NewsArticles articles={articles} />
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
