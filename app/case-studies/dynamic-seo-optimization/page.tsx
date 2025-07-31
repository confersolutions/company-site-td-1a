"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ConsultationModal } from "@/components/consultation-modal"
import {
  Search,
  TrendingUp,
  Link,
  Globe,
  BarChart3,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Download,
  RefreshCw,
  Eye,
  Users,
  DollarSign,
  Clock,
  Shield,
  Cpu,
  Database,
  Settings,
  Activity,
} from "lucide-react"

export default function DynamicSEOCaseStudy() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  const [animatedStats, setAnimatedStats] = useState({
    traffic: 0,
    rankings: 0,
    ctr: 0,
    revenue: 0,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        traffic: 45,
        rankings: 23,
        ctr: 38,
        revenue: 1.8,
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const challenges = [
    {
      icon: Link,
      title: "Disappearing Seasonal URLs",
      description: "Customers bookmarking seasonal pages that became inaccessible after campaigns",
      impact: "Lost customer trust and repeat visits",
    },
    {
      icon: Search,
      title: "Lost Google Indexing",
      description: "Valuable promotional content losing search visibility after seasonal events",
      impact: "Decreased organic search traffic",
    },
    {
      icon: Users,
      title: "Customer Frustration",
      description: "Returning customers finding 'Page Not Found' errors on bookmarked pages",
      impact: "67% drop in returning customer success rate",
    },
    {
      icon: Settings,
      title: "Manual SEO Work",
      description: "Marketing teams manually creating meta tags for thousands of seasonal products",
      impact: "$280K annual operational costs",
    },
  ]

  const solutions = [
    {
      icon: Zap,
      title: "Dynamic Metadata Generation",
      features: [
        "Real-time meta tag creation for seasonal URLs",
        "Contextual understanding of product data and trends",
        "Brand consistency across all generated content",
        "Multi-variant testing for optimal performance",
      ],
    },
    {
      icon: Link,
      title: "URL Canonicalization Strategy",
      features: [
        "Persistent URL mapping with redirect chains",
        "SEO-friendly URL patterns that persist beyond campaigns",
        "Dynamic routing preserving user intent",
        "Historical URL preservation for reactivation",
      ],
    },
    {
      icon: RefreshCw,
      title: "Intelligent Content Bridging",
      features: [
        "Automatic content migration to permanent pages",
        "Search intent preservation during transitions",
        "User journey continuity for returning customers",
        "Cross-reference linking between seasonal and permanent content",
      ],
    },
    {
      icon: TrendingUp,
      title: "Search Engine Optimization",
      features: [
        "Schema markup automation for enhanced visibility",
        "Dynamic sitemap updates including archived URLs",
        "Robot.txt optimization for seasonal content lifecycle",
        "PageSpeed optimization for better rankings",
      ],
    },
  ]

  const results = [
    {
      category: "Search Visibility",
      metrics: [
        { label: "Organic Traffic Increase", value: "45%", icon: TrendingUp },
        { label: "Keyword Position Improvement", value: "23%", icon: Target },
        { label: "Click-Through Rate Boost", value: "38%", icon: Eye },
        { label: "Index Coverage", value: "100%", icon: CheckCircle },
      ],
    },
    {
      category: "Customer Experience",
      metrics: [
        { label: "Returning Customer Success", value: "67%", icon: Users },
        { label: "Bounce Rate Reduction", value: "31%", icon: Activity },
        { label: "User Satisfaction", value: "89%", icon: CheckCircle },
        { label: "Revenue Recovery", value: "$1.8M", icon: DollarSign },
      ],
    },
    {
      category: "Operational Efficiency",
      metrics: [
        { label: "Automation Rate", value: "94%", icon: Cpu },
        { label: "Time Savings", value: "78%", icon: Clock },
        { label: "URL Handling Capacity", value: "50K+", icon: Database },
        { label: "Error Reduction", value: "92%", icon: Shield },
      ],
    },
  ]

  const technicalComponents = [
    {
      title: "URL Intelligence Engine",
      description: "Machine learning models for pattern recognition and semantic mapping",
      features: ["Pattern Recognition", "Semantic Mapping", "Redirect Management", "Performance Monitoring"],
    },
    {
      title: "Metadata Generation Pipeline",
      description: "AI-powered content analysis and keyword optimization",
      features: ["Content Analysis", "Keyword Research", "Meta Tag Creation", "A/B Testing"],
    },
    {
      title: "Search Engine Integration",
      description: "Automated submission and performance tracking",
      features: ["Google Search Console API", "Analytics Integration", "Schema.org Compliance", "Core Web Vitals"],
    },
  ]

  const implementationSteps = [
    {
      step: 1,
      title: "URL Audit",
      description: "AI analyzes existing seasonal URL patterns and traffic data",
      duration: "Week 1",
    },
    {
      step: 2,
      title: "Canonicalization Strategy",
      description: "Develops permanent URL structure and redirect mapping",
      duration: "Week 2",
    },
    {
      step: 3,
      title: "Metadata Training",
      description: "AI models learn from high-performing seasonal content",
      duration: "Week 3",
    },
    {
      step: 4,
      title: "Pilot Testing",
      description: "Limited deployment on select seasonal campaigns",
      duration: "Week 4",
    },
    {
      step: 5,
      title: "Performance Optimization",
      description: "Fine-tuning based on search performance data",
      duration: "Week 5",
    },
    {
      step: 6,
      title: "Full Rollout",
      description: "System-wide deployment with continuous monitoring",
      duration: "Week 6",
    },
    {
      step: 7,
      title: "Ongoing Optimization",
      description: "Regular updates based on search algorithm changes",
      duration: "Ongoing",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000' fillOpacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 py-2 text-sm font-medium">
              67% Increase in Returning Customer Success Rate
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              AI-Powered Dynamic SEO: Making Seasonal URLs Permanent
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto mb-8">
              How we solved the disappearing seasonal page problem with intelligent metadata generation and URL
              canonicalization
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3"
                onClick={() => setIsConsultationOpen(true)}
              >
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-3 bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Technical Whitepaper
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{animatedStats.traffic}%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Organic Traffic Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">{animatedStats.rankings}%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Ranking Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{animatedStats.ctr}%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">CTR Boost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">${animatedStats.revenue}M</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Revenue Recovery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              The Challenge: Disappearing Seasonal Value
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A major e-commerce retailer was losing millions in potential revenue due to seasonal URL management issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <Card
                key={index}
                className="border-red-200 bg-red-50/50 dark:bg-red-900/10 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center mb-4">
                    <challenge.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg text-red-800 dark:text-red-300">{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-3">{challenge.description}</p>
                  <p className="text-sm font-medium text-red-600 dark:text-red-400">{challenge.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Problem Statistics */}
          <div className="mt-16 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">67%</div>
                <div className="text-slate-600 dark:text-slate-300">Drop in returning customer success rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">$280K</div>
                <div className="text-slate-600 dark:text-slate-300">Annual manual SEO operational costs</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">50K+</div>
                <div className="text-slate-600 dark:text-slate-300">Seasonal URLs requiring manual management</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Our AI-Driven SEO Intelligence Solution
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A comprehensive approach combining dynamic metadata generation, URL canonicalization, and intelligent
              content bridging
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-blue-200 dark:border-slate-600 hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900 dark:text-white">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Technical Architecture & Implementation
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Advanced AI systems working together to preserve and optimize seasonal content value
            </p>
          </div>

          <Tabs defaultValue="architecture" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="architecture">System Architecture</TabsTrigger>
              <TabsTrigger value="process">URL Transformation Process</TabsTrigger>
              <TabsTrigger value="implementation">Implementation Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="architecture" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {technicalComponents.map((component, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 border-slate-200 dark:border-slate-600"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg text-slate-900 dark:text-white">{component.title}</CardTitle>
                      <CardDescription className="text-slate-600 dark:text-slate-300">
                        {component.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {component.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">AI Model Capabilities</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Semantic Understanding</h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      Processes product descriptions, seasonal context, and search trends to maintain relevance across
                      URL transitions.
                    </p>

                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Keyword Optimization</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Generates relevant keywords based on product data and search volume analysis.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Trend Analysis</h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      Adapts metadata based on seasonal shopping patterns and market trends.
                    </p>

                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Performance Learning</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Continuously improves based on click-through rates and search performance data.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="process" className="space-y-8">
              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                  URL Transformation Flow
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <div>
                      <div className="font-semibold text-red-800 dark:text-red-300">Original Seasonal URL</div>
                      <div className="text-sm text-red-600 dark:text-red-400 font-mono">
                        /black-friday-2024/electronics-deals
                      </div>
                    </div>
                    <ArrowRight className="h-6 w-6 text-red-600" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <div>
                      <div className="font-semibold text-yellow-800 dark:text-yellow-300">Canonical URL</div>
                      <div className="text-sm text-yellow-600 dark:text-yellow-400 font-mono">
                        /electronics/seasonal-promotions
                      </div>
                    </div>
                    <ArrowRight className="h-6 w-6 text-yellow-600" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div>
                      <div className="font-semibold text-green-800 dark:text-green-300">Permanent URL</div>
                      <div className="text-sm text-green-600 dark:text-green-400 font-mono">
                        /electronics/special-offers
                      </div>
                    </div>
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                </div>

                <div className="mt-8 grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="font-semibold text-blue-800 dark:text-blue-300 mb-2">301 Redirect</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Preserves SEO value</div>
                  </div>
                  <div className="text-center p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                    <div className="font-semibold text-cyan-800 dark:text-cyan-300 mb-2">Metadata Transfer</div>
                    <div className="text-sm text-cyan-600 dark:text-cyan-400">Maintains search relevance</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Content Bridge</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Seamless user experience</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="implementation" className="space-y-8">
              <div className="space-y-6">
                {implementationSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {step.duration}
                        </Badge>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Measurable SEO Performance Transformation
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Comprehensive improvements across search visibility, customer experience, and operational efficiency
            </p>
          </div>

          <div className="space-y-12">
            {results.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.metrics.map((metric, metricIndex) => (
                    <Card
                      key={metricIndex}
                      className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-green-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300"
                    >
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <metric.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-green-600 mb-2">{metric.value}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">{metric.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ROI Analysis */}
          <div className="mt-16 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Financial Impact & ROI
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">$1.8M</div>
                <div className="text-slate-600 dark:text-slate-300">Revenue Recovery</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">340%</div>
                <div className="text-slate-600 dark:text-slate-300">ROI from SEO Investment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-600 mb-2">$280K</div>
                <div className="text-slate-600 dark:text-slate-300">Annual Operational Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">28%</div>
                <div className="text-slate-600 dark:text-slate-300">Customer Lifetime Value Increase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Advanced AI Capabilities & Integration
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Cutting-edge features that set our SEO intelligence apart from traditional solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Intelligent Capabilities</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Predictive SEO</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Anticipates seasonal trends and pre-optimizes content for maximum search visibility.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Multi-Language Support</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Generates localized metadata for international markets with cultural context understanding.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Search className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Voice Search Optimization</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Adapts content for voice search queries and featured snippets optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Integration Excellence</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">CMS Integration</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Seamless integration with existing content management systems and workflows.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Analytics Platforms</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Comprehensive reporting through Google Analytics and custom performance dashboards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Marketing Tools</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Integration with email marketing and social media promotion platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make Your Seasonal Content Permanently Valuable?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Transform your SEO strategy with AI that preserves and optimizes every seasonal campaign for long-term value
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">67%</div>
              <div className="text-blue-100">Increase in Returning Customer Success</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$1.8M</div>
              <div className="text-blue-100">Revenue Recovery from SEO Optimization</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">340%</div>
              <div className="text-blue-100">ROI from AI-Powered SEO Investment</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 font-semibold"
              onClick={() => setIsConsultationOpen(true)}
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-3 bg-transparent"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Technical Whitepaper
            </Button>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} source="demo" />
    </div>
  )
}
