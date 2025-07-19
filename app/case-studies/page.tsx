import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ConsultationButton } from "@/components/consultation-button"
import Link from "next/link"
import {
  Search,
  Filter,
  TrendingUp,
  Users,
  DollarSign,
  Zap,
  ShoppingCart,
  Building2,
  Heart,
  CreditCard,
  BarChart3,
  ArrowRight,
  Clock,
  Target,
  Award,
  Sparkles,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Case Studies | Confer Solutions AI - Real Results, Real Impact",
  description:
    "Discover how our AI solutions have transformed businesses across industries, delivering measurable outcomes and operational excellence. 50+ successful deployments, $10M+ cost savings.",
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "ai-content-generation",
      title: "From 13 Copywriters to 2: AI Content at Scale",
      industry: "Retail & E-commerce",
      industryColor: "bg-blue-500",
      keyMetric: "92% Reduction in Manual Work",
      description:
        "How we automated product description creation for a major marketplace, saving thousands of hours while maintaining brand consistency",
      resultsHighlight: "78% cost reduction, $2.3M revenue increase",
      link: "/case-studies/ai-content-generation",
      icon: <ShoppingCart className="h-6 w-6" />,
      tags: ["Cost Reduction", "Automation Success", "Revenue Growth"],
      completionDate: "2024",
      clientSize: "Enterprise",
    },
    {
      id: "autonomous-production-support",
      title: "24/7 Autonomous Production Support",
      industry: "Enterprise Operations",
      industryColor: "bg-green-500",
      keyMetric: "95% Tickets Resolved Automatically",
      description:
        "MCP server-powered AI agents transformed production support using JIRA, Confluence, Slack, and ServiceNow integration",
      resultsHighlight: "8-minute resolution vs. 4-6 hours, 99.8% uptime",
      link: "/case-studies/autonomous-production-support",
      icon: <Building2 className="h-6 w-6" />,
      tags: ["Operational Efficiency", "Automation Success"],
      completionDate: "2024",
      clientSize: "Enterprise",
      comingSoon: true,
    },
    {
      id: "dynamic-seo-optimization",
      title: "Making Seasonal URLs Permanently Valuable",
      industry: "E-commerce & Marketing",
      industryColor: "bg-purple-500",
      keyMetric: "67% Increase in Customer Return Success",
      description:
        "AI-powered URL canonicalization and metadata generation that preserves SEO value beyond seasonal campaigns",
      resultsHighlight: "$1.8M revenue recovery, 45% organic traffic increase",
      link: "/case-studies/dynamic-seo-optimization",
      icon: <BarChart3 className="h-6 w-6" />,
      tags: ["Revenue Growth", "Automation Success"],
      completionDate: "2024",
      clientSize: "Enterprise",
    },
  ]

  const comingSoonStudies = [
    {
      id: "vendor-intelligence",
      title: "AI-Powered Marketplace Optimization",
      industry: "Retail & E-commerce",
      industryColor: "bg-blue-500",
      description: "Intelligent vendor performance analysis and optimization recommendations",
      icon: <Target className="h-6 w-6" />,
    },
    {
      id: "healthcare-operations",
      title: "Autonomous Clinical Support",
      industry: "Healthcare",
      industryColor: "bg-red-500",
      description: "AI-powered patient care coordination and clinical decision support",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      id: "financial-compliance",
      title: "Real-Time Compliance Monitoring",
      industry: "Financial Services",
      industryColor: "bg-yellow-500",
      description: "Automated regulatory compliance and risk assessment for financial institutions",
      icon: <CreditCard className="h-6 w-6" />,
    },
  ]

  const overallMetrics = [
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      value: "$8.5M+",
      label: "Total Savings",
      description: "Across all client implementations",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
      value: "85%",
      label: "Process Improvement",
      description: "Average efficiency gains",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
      value: "$12M+",
      label: "Revenue Generated",
      description: "Additional revenue for clients",
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      value: "92%",
      label: "Task Automation",
      description: "Average automation rate",
    },
  ]

  const industryOverview = [
    {
      industry: "Retail",
      icon: <ShoppingCart className="h-6 w-6" />,
      color: "bg-blue-500",
      solutions: ["Content automation", "SEO optimization", "Vendor intelligence"],
    },
    {
      industry: "Enterprise",
      icon: <Building2 className="h-6 w-6" />,
      color: "bg-green-500",
      solutions: ["Production support", "System integration", "Workflow automation"],
    },
    {
      industry: "Healthcare",
      icon: <Heart className="h-6 w-6" />,
      color: "bg-red-500",
      solutions: ["Clinical support", "Compliance monitoring", "Patient care"],
    },
    {
      industry: "Finance",
      icon: <CreditCard className="h-6 w-6" />,
      color: "bg-yellow-500",
      solutions: ["Risk assessment", "Regulatory compliance", "Document processing"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
              Proven Success Stories
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Real Results, Real Impact
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover how our AI solutions have transformed businesses across industries, delivering measurable
              outcomes and operational excellence
            </p>

            {/* Statistics Bar */}
            <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm font-medium">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-fintech-500" />
                <span>50+ Successful Deployments</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-green-500" />
                <span>$10M+ Cost Savings</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-500" />
                <span>95% Client Satisfaction</span>
              </div>
            </div>

            <ConsultationButton size="lg" className="px-8 py-3">
              Schedule Consultation
            </ConsultationButton>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search case studies..." className="pl-10 bg-background/50 backdrop-blur-sm" />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="bg-background/50 backdrop-blur-sm">
                  <Filter className="h-4 w-4 mr-2" />
                  All Studies
                </Button>
                <Button variant="ghost" size="sm">
                  Retail
                </Button>
                <Button variant="ghost" size="sm">
                  Enterprise
                </Button>
                <Button variant="ghost" size="sm">
                  Healthcare
                </Button>
                <Button variant="ghost" size="sm">
                  Finance
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Real transformations from real businesses across different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((study) => (
              <Card
                key={study.id}
                className="group border-0 bg-gradient-to-br from-background to-secondary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-full ${study.industryColor} flex items-center justify-center text-white`}
                    >
                      {study.icon}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {study.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold leading-tight group-hover:text-fintech-600 transition-colors">
                    {study.title}
                  </CardTitle>
                  <div className="text-2xl font-bold text-fintech-600 dark:text-fintech-400 mb-2">
                    {study.keyMetric}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{study.description}</p>

                  <div className="bg-gradient-to-r from-fintech-50 to-fintech-100 dark:from-fintech-950/50 dark:to-fintech-900/50 rounded-lg p-3 border">
                    <div className="text-sm font-semibold text-fintech-700 dark:text-fintech-300">Key Results:</div>
                    <div className="text-sm text-fintech-600 dark:text-fintech-400">{study.resultsHighlight}</div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="w-full group-hover:bg-fintech-600 group-hover:text-white transition-colors bg-transparent"
                    variant="outline"
                    disabled={study.comingSoon}
                  >
                    {study.comingSoon ? (
                      <span>Coming Soon</span>
                    ) : (
                      <Link href={study.link}>
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Coming Soon</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {comingSoonStudies.map((study) => (
                <Card key={study.id} className="border-0 bg-gradient-to-br from-background to-secondary/20 opacity-75">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-full ${study.industryColor} flex items-center justify-center text-white opacity-60`}
                      >
                        {study.icon}
                      </div>
                      <Badge variant="outline" className="text-xs opacity-60">
                        {study.industry}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold leading-tight opacity-75">{study.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed opacity-75">{study.description}</p>
                    <Button disabled className="w-full bg-transparent" variant="outline">
                      <Clock className="mr-2 h-4 w-4" />
                      Coming Soon
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Summary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Overall Impact
            </h2>
            <p className="text-xl text-muted-foreground">Measurable results across all our client implementations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {overallMetrics.map((metric, index) => (
              <Card key={index} className="text-center border-0 bg-gradient-to-br from-background to-secondary/20">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{metric.icon}</div>
                  <div className="text-3xl font-bold text-fintech-600 dark:text-fintech-400 mb-2">{metric.value}</div>
                  <div className="font-semibold mb-1">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Success by Industry
            </h2>
            <p className="text-xl text-muted-foreground">Quick overview of our impact across different sectors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryOverview.map((industry, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-background to-secondary/20">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 rounded-full ${industry.color} flex items-center justify-center mx-auto mb-4 text-white`}
                  >
                    {industry.icon}
                  </div>
                  <CardTitle className="text-xl">{industry.industry}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="text-sm text-muted-foreground flex items-center">
                        <Sparkles className="h-3 w-3 mr-2 text-fintech-500" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-700 dark:to-fintech-900">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Create Your Own Success Story?</h2>
            <p className="text-xl text-fintech-100 mb-8">
              Join leading companies who have transformed their operations with our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationButton size="lg" className="px-8 py-3 bg-white text-fintech-600 hover:bg-fintech-50">
                Schedule Consultation
              </ConsultationButton>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 border-white text-white hover:bg-white hover:text-fintech-600 bg-transparent"
              >
                Download Case Study Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
