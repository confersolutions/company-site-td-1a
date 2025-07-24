import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ConsultationButton } from "@/components/consultation-button"
import Link from "next/link"
import Image from "next/image"
import {
  Brain,
  Target,
  Globe,
  ArrowRight,
  Activity,
  BarChart3,
  Database,
  Network,
  ShoppingCart,
  FileText,
  Cog,
  Search,
  AlertTriangle,
  Zap,
  Clock,
  Star,
  TrendingDown,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI-Driven Retail & E-commerce Solutions | Confer Solutions AI",
  description:
    "Transform retail operations with AI-powered content generation, production support, and vendor intelligence. Reduce costs by 85% with 24/7 automation.",
  keywords: [
    "retail AI",
    "e-commerce automation",
    "AI content generation",
    "vendor intelligence",
    "retail automation",
    "marketplace AI",
  ],
  openGraph: {
    title: "AI-Driven Retail & E-commerce Solutions | Confer Solutions AI",
    description:
      "Transform retail operations with AI-powered content generation, production support, and vendor intelligence. Reduce costs by 85% with 24/7 automation.",
    type: "website",
  },
}

export default function RetailEcommercePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50/30 dark:to-blue-950/30">
      {/* Hero Section */}
      <section className="relative pt-16 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-transparent"></div>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000' fillOpacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm font-medium bg-blue-50/50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Retail Intelligence
                </Badge>

                <div className="space-y-6">
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-800 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-600">
                      AI-Driven
                    </span>
                    <br />
                    <span className="text-foreground">Retail &</span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600">
                      E-commerce
                    </span>
                  </h1>

                  <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    Revolutionizing customer experiences with intelligent automation and personalized commerce. Our AI
                    solutions transform how retailers operate, engage customers, and drive growth.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <ConsultationButton
                    size="lg"
                    className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                  >
                    Schedule Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </ConsultationButton>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-4 text-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
                    asChild
                  >
                    <Link href="/solutions">View Solutions</Link>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">85%</div>
                    <div className="text-sm text-muted-foreground">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">24/7</div>
                    <div className="text-sm text-muted-foreground">Automation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">40%</div>
                    <div className="text-sm text-muted-foreground">Sales Increase</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 p-8 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=E-commerce+Dashboard"
                    alt="AI E-commerce Dashboard"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">Real-time Analytics</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium">AI Powered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950"
            >
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                Proven Success Stories
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world implementations delivering measurable results for retail and e-commerce businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* AI-Powered Content Generation */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/30 dark:to-cyan-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                  AI-Powered Content Generation
                </CardTitle>
                <CardDescription className="text-blue-600/80 dark:text-blue-400/80">
                  Automated product description creation following brand guidelines
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                    <TrendingDown className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium">Reduced copywriting team from 13 to 2 writers</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium">Saves thousands of hours for marketplace vendors</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                    <Star className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium">Consistent, high-quality product content at scale</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Autonomous Production Support */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-cyan-50/50 to-indigo-50/50 dark:from-cyan-950/30 dark:to-indigo-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 group-hover:from-cyan-500/10 group-hover:to-indigo-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Cog className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-cyan-700 dark:text-cyan-300">
                  Autonomous Production Support
                </CardTitle>
                <CardDescription className="text-cyan-600/80 dark:text-cyan-400/80">
                  MCP server-powered agents handle production tickets automatically
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg">
                    <Network className="h-5 w-5 text-cyan-600" />
                    <span className="text-sm font-medium">Integrates with JIRA, Confluence, Slack, and ServiceNow</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg">
                    <Brain className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm font-medium">
                      Analyzes past resolutions and applies solutions instantly
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                    <Zap className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium">24/7 support without human intervention</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dynamic SEO Optimization */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/30 dark:to-purple-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">
                  Dynamic SEO Optimization
                </CardTitle>
                <CardDescription className="text-indigo-600/80 dark:text-indigo-400/80">
                  AI agents automatically generate meta tags and keywords for seasonal URLs
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg">
                    <Globe className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm font-medium">
                      Ensures Google indexing persists beyond promotional periods
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                    <Search className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium">
                      Customers can find previous seasonal pages through search
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                    <Database className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium">URL canonicalization with persistent metadata schema</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vendor Intelligence Platform */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/30 dark:to-pink-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                  Vendor Intelligence Platform
                </CardTitle>
                <CardDescription className="text-purple-600/80 dark:text-purple-400/80">
                  AI agents identify product listing issues preventing sales
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium">
                      Detects data errors like incorrect weight specifications
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-pink-50 dark:bg-pink-950/30 rounded-lg">
                    <Target className="h-5 w-5 text-pink-600" />
                    <span className="text-sm font-medium">Provides actionable insights to marketplace vendors</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
                    <Activity className="h-5 w-5 text-orange-600" />
                    <span className="text-sm font-medium">Real-time alerts for listing optimization opportunities</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/30 to-cyan-50/30 dark:from-blue-950/20 dark:to-cyan-950/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950"
            >
              Technology Stack
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                Advanced AI Infrastructure
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on cutting-edge technology stack optimized for retail performance, scalability, and customer
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-blue-700 dark:text-blue-300">Natural Language Generation</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Custom models for brand-compliant content</li>
                <li>• Multi-language support</li>
                <li>• Style consistency enforcement</li>
                <li>• Real-time content optimization</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-cyan-50 to-indigo-50 dark:from-cyan-950/50 dark:to-indigo-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <Network className="h-6 w-6 text-cyan-600" />
                <h3 className="font-semibold text-cyan-700 dark:text-cyan-300">MCP Server Architecture</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Multi-system integration</li>
                <li>• Automated workflow orchestration</li>
                <li>• Real-time data synchronization</li>
                <li>• Scalable microservices</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <Search className="h-6 w-6 text-indigo-600" />
                <h3 className="font-semibold text-indigo-700 dark:text-indigo-300">SEO Intelligence</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Dynamic metadata generation</li>
                <li>• URL management automation</li>
                <li>• Search performance optimization</li>
                <li>• Structured data implementation</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-6 w-6 text-purple-600" />
                <h3 className="font-semibold text-purple-700 dark:text-purple-300">Data Analytics</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Real-time product performance</li>
                <li>• Error detection and alerting</li>
                <li>• Predictive analytics</li>
                <li>• Business intelligence dashboards</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Integrations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Platform Integrations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seamless connectivity with your existing tools and platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                <Cog className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Enterprise Tools</h3>
              <p className="text-muted-foreground mb-4">
                JIRA, Confluence, Slack, ServiceNow integration for seamless workflow automation
              </p>
              <Badge variant="outline" className="text-xs">
                Workflow Automation
              </Badge>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">E-commerce Systems</h3>
              <p className="text-muted-foreground mb-4">
                Marketplace APIs, inventory management, and order processing systems
              </p>
              <Badge variant="outline" className="text-xs">
                Commerce Integration
              </Badge>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
                <Search className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Search Optimization</h3>
              <p className="text-muted-foreground mb-4">
                Google Search Console, structured data, and SEO performance monitoring
              </p>
              <Badge variant="outline" className="text-xs">
                SEO Intelligence
              </Badge>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Vendor Portals</h3>
              <p className="text-muted-foreground mb-4">
                Real-time dashboards and notification systems for marketplace vendors
              </p>
              <Badge variant="outline" className="text-xs">
                Vendor Intelligence
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 dark:from-blue-700 dark:via-cyan-700 dark:to-blue-800 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23fff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Retail Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Discover how our AI-driven solutions can revolutionize your e-commerce operations, reduce costs by 85%,
              and provide 24/7 automated support for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <ConsultationButton size="lg" className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-blue-50">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </ConsultationButton>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link href="/ai-agents">Explore AI Agents</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>

            {/* Interactive Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-white mb-2">$2.5B+</div>
                <div className="text-blue-100">Revenue Processed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-white mb-2">85%</div>
                <div className="text-blue-100">Cost Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-100">Automated Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Confer Solutions AI",
            description:
              "AI-powered business solutions specializing in autonomous mortgage banking and business automation",
            url: "https://confersolutions.ai",
          }),
        }}
      />
    </div>
  )
}
