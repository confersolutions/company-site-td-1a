import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ConsultationButton } from "@/components/consultation-button"
import Link from "next/link"
import {
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  Zap,
  Brain,
  Building2,
  ShoppingCart,
  Heart,
  Globe,
  BookOpen,
  ExternalLink,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI News | Confer Solutions AI",
  description:
    "Stay updated with the latest AI developments, industry insights, and technological breakthroughs in artificial intelligence and machine learning.",
}

export default function AINewsPage() {
  const featuredNews = [
    {
      id: "autonomous-banking-breakthrough",
      title: "Breakthrough in Autonomous Banking: AI Agents Now Handle Complex Financial Decisions",
      excerpt:
        "Latest developments in AI-powered financial services show unprecedented accuracy in mortgage underwriting and risk assessment.",
      category: "Industry Innovation",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
    },
    {
      id: "regulatory-compliance-ai",
      title: "New Regulatory Framework for AI in Financial Services",
      excerpt:
        "Understanding the latest compliance requirements and how AI solutions can maintain regulatory standards.",
      category: "Regulation",
      date: "2024-01-12",
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
    },
  ]

  const newsArticles = [
    {
      id: "machine-learning-mortgage",
      title: "Machine Learning Transforms Mortgage Processing Speed",
      excerpt: "How advanced ML algorithms are reducing loan processing times from weeks to hours.",
      category: "Technology",
      date: "2024-01-10",
      readTime: "4 min read",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      id: "ai-retail-automation",
      title: "AI-Powered Retail Automation Reaches New Heights",
      excerpt: "Exploring the latest developments in intelligent inventory management and customer service automation.",
      category: "Retail Tech",
      date: "2024-01-08",
      readTime: "6 min read",
      icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
      id: "healthcare-ai-breakthrough",
      title: "Healthcare AI Shows Promise in Administrative Efficiency",
      excerpt: "New studies reveal significant improvements in healthcare operations through AI implementation.",
      category: "Healthcare",
      date: "2024-01-05",
      readTime: "5 min read",
      icon: <Heart className="h-5 w-5" />,
    },
    {
      id: "open-source-ai-tools",
      title: "Open Source AI Tools Democratize Financial Technology",
      excerpt:
        "How open-source AI frameworks are making advanced financial technology accessible to smaller institutions.",
      category: "Open Source",
      date: "2024-01-03",
      readTime: "8 min read",
      icon: <Globe className="h-5 w-5" />,
    },
    {
      id: "neural-networks-finance",
      title: "Neural Networks Revolutionize Risk Assessment",
      excerpt: "Deep learning models show unprecedented accuracy in financial risk prediction and management.",
      category: "Deep Learning",
      date: "2023-12-28",
      readTime: "6 min read",
      icon: <Brain className="h-5 w-5" />,
    },
    {
      id: "enterprise-ai-adoption",
      title: "Enterprise AI Adoption Accelerates Across Industries",
      excerpt: "Survey reveals rapid growth in AI implementation across finance, retail, and healthcare sectors.",
      category: "Industry Trends",
      date: "2023-12-25",
      readTime: "7 min read",
      icon: <Building2 className="h-5 w-5" />,
    },
  ]

  const categories = [
    "All",
    "Industry Innovation",
    "Technology",
    "Regulation",
    "Open Source",
    "Healthcare",
    "Retail Tech",
    "Deep Learning",
    "Industry Trends",
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
              Latest AI Developments
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              AI News & Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Stay updated with the latest AI developments, industry insights, and technological breakthroughs in
              artificial intelligence and machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationButton size="lg" className="px-8 py-3">
                Subscribe to Updates
              </ConsultationButton>
              <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent" asChild>
                <Link href="/blog">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Visit Our Blog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Featured Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              The most important AI developments shaping the future of business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredNews.map((article) => (
              <Card
                key={article.id}
                className="border-0 bg-gradient-to-br from-background to-secondary/20 overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-fintech-100 to-fintech-200 dark:from-fintech-900 dark:to-fintech-800 relative overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-fintech-600 text-white">{article.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(article.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-fintech-600 dark:group-hover:text-fintech-400 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent group-hover:bg-fintech-50 dark:group-hover:bg-fintech-950"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-fintech-600 hover:bg-fintech-700" : "bg-transparent"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In-depth analysis and insights on AI developments across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Card
                key={article.id}
                className="border-0 bg-gradient-to-br from-background to-secondary/20 group hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-fintech-500 to-fintech-600 flex items-center justify-center text-white">
                      {article.icon}
                    </div>
                    <Badge variant="outline">{article.category}</Badge>
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-fintech-600 dark:group-hover:text-fintech-400 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(article.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between p-0 h-auto text-fintech-600 dark:text-fintech-400 hover:bg-transparent"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Stay Informed
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest AI news and insights delivered directly to your inbox
            </p>
            <Card className="border-0 bg-gradient-to-br from-background to-secondary/20 p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-fintech-500"
                />
                <Button className="bg-fintech-600 hover:bg-fintech-700 px-6">Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Additional Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore more AI insights and industry analysis from trusted sources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 bg-gradient-to-br from-background to-secondary/20 text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Industry Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Comprehensive analysis of AI trends and market developments
                </p>
                <Button variant="outline" size="sm" className="bg-transparent">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Reports
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-background to-secondary/20 text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Research Papers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Latest academic research in AI and machine learning applications
                </p>
                <Button variant="outline" size="sm" className="bg-transparent">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Browse Papers
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-background to-secondary/20 text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Community Forums</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Join discussions with AI professionals and industry experts
                </p>
                <Button variant="outline" size="sm" className="bg-transparent">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-700 dark:to-fintech-900">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Implement AI in Your Business?</h2>
            <p className="text-xl text-fintech-100 mb-8">
              Transform your operations with cutting-edge AI solutions backed by industry expertise.
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
                  Explore Solutions
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
