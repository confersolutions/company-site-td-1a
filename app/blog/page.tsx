import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, User, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - Confer Solutions AI",
  description: "Insights and perspectives on AI innovation in financial services by Yatin Karnik.",
}

export default function BlogPage() {
  const featuredPost = {
    title: "MCP-Compliant Server for Parsing Loan Estimates (LE) and Closing Disclosures (CD)",
    excerpt:
      "Transform Loan Estimate and Closing Disclosure PDFs into MISMO-compliant, LLM-ready JSON using an open MCP server built for the mortgage industry. Open-source, reliable, and built for banks, bots, and compliance tools.",
    date: "Nov 12, 2025",
    author: "Yatin Karnik",
    slug: "mcp-compliant-server-parsing-loan-estimates-closing-disclosures",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Technical Implementation",
    readTime: "8 min read",
  }

  const allPosts = [
    {
      title: "AI Virtual Assistant for Small Business: Real-World Case Studies That Deliver",
      excerpt:
        "Discover how AI virtual assistants are transforming small businesses through real case studies. Learn implementation strategies, ROI metrics, and success stories from companies achieving 40% efficiency gains.",
      date: "Dec 15, 2024",
      author: "Yatin Karnik",
      slug: "ai-virtual-assistant-small-business",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Case Studies",
      readTime: "8 min read",
    },
    {
      title: "Unlocking Agentic AI: A Step-by-Step Guide to Smarter Business Automation",
      excerpt:
        "Master agentic AI implementation with our comprehensive guide. Learn how autonomous AI agents can transform your business operations, reduce costs by 35%, and drive intelligent decision-making.",
      date: "Dec 10, 2024",
      author: "Yatin Karnik",
      slug: "unlocking-agentic-ai-step-by-step-guide",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "AI Innovation",
      readTime: "10 min read",
    },
    {
      title: "AI in Healthcare: Transforming Patient Care",
      excerpt:
        "Explore how AI is revolutionizing healthcare delivery, improving patient outcomes by 45%, and reducing diagnostic errors. Learn about implementation strategies and real-world applications.",
      date: "Dec 5, 2024",
      author: "Yatin Karnik",
      slug: "ai-healthcare-transforming-patient-care",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Healthcare Innovation",
      readTime: "9 min read",
    },
    {
      title: "Integrating AI for Predictive Analytics in Finance",
      excerpt:
        "Discover how AI-powered predictive analytics is transforming financial services. Learn implementation strategies, risk management techniques, and achieve 60% improvement in forecasting accuracy.",
      date: "Nov 30, 2024",
      author: "Yatin Karnik",
      slug: "integrating-ai-predictive-analytics-finance",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Financial Technology",
      readTime: "11 min read",
    },
    {
      title: "Developing Custom AI Solutions for Small Businesses",
      excerpt:
        "Learn how to develop tailored AI solutions for small businesses. Discover cost-effective strategies, implementation frameworks, and achieve 50% operational efficiency improvements.",
      date: "Nov 25, 2024",
      author: "Yatin Karnik",
      slug: "developing-custom-ai-solutions-small-businesses",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Custom Development",
      readTime: "12 min read",
    },
    {
      title: "AI-Powered Process Automation: Effortlessly Revolutionizing Your Business Efficiency",
      excerpt:
        "Discover how AI-powered process automation can transform your business operations. Learn implementation strategies, best practices, and achieve up to 70% efficiency improvements.",
      date: "Nov 20, 2024",
      author: "Yatin Karnik",
      slug: "ai-powered-process-automation-revolutionizing-business-efficiency",
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Process Automation",
      readTime: "10 min read",
    },
    {
      title: "Leveraging AI Agents to Enhance Customer Support",
      excerpt:
        "Learn how AI agents are transforming customer support operations. Discover implementation strategies, best practices, and achieve 80% faster response times with improved satisfaction.",
      date: "Nov 15, 2024",
      author: "Yatin Karnik",
      slug: "leveraging-ai-agents-enhance-customer-support",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Customer Experience",
      readTime: "9 min read",
    },
    {
      title: "Self-Healing AI in Mortgage Automation: Transforming Document Processing",
      excerpt:
        "Discover how Self-Healing AI is transforming mortgage automation by correcting OCR errors, reducing manual review, and continuously learning from feedback.",
      date: "Oct 28, 2025",
      author: "Yatin Karnik",
      slug: "self-healing-ai-mortgage-automation-transforming-document-processing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "AI Innovation",
      readTime: "6 min read",
    },
    {
      title: "How AI Virtual Assistants Help Small Businesses Save Time and Scale",
      excerpt:
        "See an AI agent useful case study in lending, support, and forecasting. Learn how Agentic AI is transforming operations with goal-driven intelligence.",
      date: "Oct 15, 2025",
      author: "Yatin Karnik",
      slug: "how-ai-virtual-assistants-help-small-businesses-save-time-scale",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Business Intelligence",
      readTime: "5 min read",
    },
    {
      title: "The Future of RAG Chatbots in Financial Services",
      excerpt:
        "Explore how Retrieval-Augmented Generation is revolutionizing customer service in banking and lending with context-aware, intelligent responses that understand complex financial queries.",
      date: "Sep 22, 2025",
      author: "Yatin Karnik",
      slug: "future-rag-chatbots-financial-services",
      image:
        "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "AI Innovation",
      readTime: "7 min read",
    },
    {
      title: "Risk Assessment Revolution: AI-Powered Decision Making",
      excerpt:
        "Learn how machine learning models are helping financial institutions identify and mitigate risks more effectively, reducing losses by up to 40% while improving compliance.",
      date: "Sep 8, 2025",
      author: "Yatin Karnik",
      slug: "risk-assessment-revolution-ai-powered-decision-making",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Risk Management",
      readTime: "6 min read",
    },
    {
      title: "Automating Mortgage Workflows: From Application to Closing",
      excerpt:
        "Discover how end-to-end automation is transforming the mortgage industry, reducing processing time from weeks to days while maintaining accuracy and compliance.",
      date: "Aug 25, 2025",
      author: "Yatin Karnik",
      slug: "automating-mortgage-workflows-application-to-closing",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Process Automation",
      readTime: "9 min read",
    },
  ]

  const categories = [
    "All",
    "AI Innovation",
    "Technical Implementation",
    "Business Intelligence",
    "Risk Management",
    "Process Automation",
    "Case Studies",
    "Healthcare Innovation",
    "Financial Technology",
    "Custom Development",
    "Customer Experience",
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">AI Insights & Innovation</h1>
            <p className="text-xl text-white/90 mb-4">
              Expert analysis and thought leadership on AI innovation in financial services
            </p>
            <div className="flex items-center justify-center space-x-2 text-white/80">
              <User className="h-5 w-5" />
              <span>By Yatin Karnik, CEO & Founder</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">Featured Article</h2>
            <p className="text-muted-foreground">Our latest insights on AI in financial services</p>
          </div>

          <Link href={`/blog/${featuredPost.slug}`} className="group">
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border card-hover">
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20"></div>
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Tag className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-primary font-medium">
                    <span>Read Full Article</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-white"
                    : "bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">Latest Articles</h2>
            <p className="text-muted-foreground">Stay updated with our latest insights and analysis</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="group">
                <article className="bg-card rounded-xl overflow-hidden shadow-lg border border-border card-hover h-full flex flex-col">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Tag className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center text-primary font-medium text-sm">
                      <span>Read More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest insights on AI innovation in financial services delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
