import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ConsultationButton } from "@/components/consultation-button"
import Link from "next/link"
import {
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  ArrowRight,
  Building2,
  ShoppingCart,
  Heart,
  FileText,
  BarChart3,
  Zap,
  Target,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Case Studies | Confer Solutions AI",
  description:
    "Discover how our AI solutions have transformed businesses across finance, retail, and healthcare industries with measurable results and proven ROI.",
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "regional-mortgage-lender",
      title: "Regional Mortgage Lender Transformation",
      industry: "Finance & Mortgage",
      icon: <Building2 className="h-8 w-8" />,
      gradient: "from-blue-500 to-cyan-500",
      challenge: "Manual processing causing 3-week loan approval times and high error rates",
      solution: "Deployed AI Mortgage Agent with automated underwriting and document processing",
      results: [
        { metric: "Processing Time", improvement: "85% reduction", detail: "From 3 weeks to 3 days" },
        { metric: "Error Rate", improvement: "92% reduction", detail: "Near-zero calculation errors" },
        { metric: "Cost Savings", improvement: "$2.4M annually", detail: "Reduced operational overhead" },
        { metric: "Customer Satisfaction", improvement: "40% increase", detail: "Faster, more accurate service" },
      ],
      testimonial: {
        quote:
          "The AI transformation exceeded our expectations. We're now processing loans faster than ever with unprecedented accuracy.",
        author: "Sarah Johnson",
        title: "VP of Operations",
        company: "Mountain View Lending",
      },
    },
    {
      id: "ecommerce-retailer",
      title: "E-commerce Retailer Optimization",
      industry: "Retail & E-commerce",
      icon: <ShoppingCart className="h-8 w-8" />,
      gradient: "from-purple-500 to-pink-500",
      challenge: "Inventory management inefficiencies and poor customer service response times",
      solution: "Implemented AI-powered inventory optimization and customer service automation",
      results: [
        { metric: "Inventory Efficiency", improvement: "60% improvement", detail: "Reduced overstock by 45%" },
        { metric: "Response Time", improvement: "90% faster", detail: "From hours to minutes" },
        { metric: "Revenue Growth", improvement: "35% increase", detail: "Better product availability" },
        { metric: "Customer Retention", improvement: "28% improvement", detail: "Enhanced service quality" },
      ],
      testimonial: {
        quote:
          "Our AI implementation transformed how we manage inventory and serve customers. The ROI was immediate and substantial.",
        author: "Michael Chen",
        title: "Chief Technology Officer",
        company: "TechStyle Commerce",
      },
    },
    {
      id: "healthcare-provider",
      title: "Healthcare Provider Efficiency",
      industry: "Healthcare",
      icon: <Heart className="h-8 w-8" />,
      gradient: "from-emerald-500 to-teal-500",
      challenge: "Administrative burden reducing patient care time and increasing operational costs",
      solution: "Deployed AI agents for patient scheduling, documentation, and administrative tasks",
      results: [
        { metric: "Admin Time", improvement: "70% reduction", detail: "More time for patient care" },
        { metric: "Scheduling Efficiency", improvement: "95% automation", detail: "Reduced no-shows by 30%" },
        { metric: "Documentation Speed", improvement: "80% faster", detail: "Real-time clinical notes" },
        { metric: "Patient Satisfaction", improvement: "45% increase", detail: "Improved care quality" },
      ],
      testimonial: {
        quote:
          "AI automation gave us back what matters most - time with our patients. The efficiency gains are remarkable.",
        author: "Dr. Emily Rodriguez",
        title: "Chief Medical Officer",
        company: "Riverside Health System",
      },
    },
  ]

  const metrics = [
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      value: "150%",
      label: "Average ROI",
      description: "Within first 12 months",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      value: "75%",
      label: "Time Savings",
      description: "On average across implementations",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-purple-500" />,
      value: "$5.2M",
      label: "Total Savings",
      description: "Achieved by our clients",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      value: "98%",
      label: "Client Satisfaction",
      description: "Would recommend our solutions",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
              Proven Results Across Industries
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Case Studies
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover how our AI solutions have transformed businesses across finance, retail, and healthcare
              industries with measurable results and proven ROI.
            </p>
            <ConsultationButton size="lg" className="px-8 py-3">
              Discuss Your Use Case
            </ConsultationButton>
          </div>
        </div>
      </section>

      {/* Metrics Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Impact at a Glance
            </h2>
            <p className="text-xl text-muted-foreground">Measurable results across all our client implementations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
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

      {/* Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real transformations from real businesses across different industries
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="max-w-6xl mx-auto">
                <Card className="border-0 bg-gradient-to-br from-background to-secondary/20 overflow-hidden">
                  <CardHeader className="pb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-16 h-16 rounded-full bg-gradient-to-r ${study.gradient} flex items-center justify-center text-white`}
                        >
                          {study.icon}
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2">
                            {study.industry}
                          </Badge>
                          <CardTitle className="text-2xl font-bold">{study.title}</CardTitle>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-8">
                    {/* Challenge & Solution */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center">
                          <Target className="h-5 w-5 mr-2 text-red-500" />
                          Challenge
                        </h3>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center">
                          <Zap className="h-5 w-5 mr-2 text-blue-500" />
                          Solution
                        </h3>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-lg font-semibold mb-6 flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2 text-green-500" />
                        Results Achieved
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {study.results.map((result, resultIndex) => (
                          <Card
                            key={resultIndex}
                            className="text-center p-4 bg-gradient-to-br from-background to-secondary/10"
                          >
                            <div className="text-2xl font-bold text-fintech-600 dark:text-fintech-400 mb-2">
                              {result.improvement}
                            </div>
                            <div className="font-semibold text-sm mb-1">{result.metric}</div>
                            <div className="text-xs text-muted-foreground">{result.detail}</div>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gradient-to-r from-fintech-50 to-fintech-100 dark:from-fintech-950/50 dark:to-fintech-900/50 rounded-lg p-6 border">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-fintech-500 to-fintech-600 flex items-center justify-center flex-shrink-0">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <blockquote className="text-lg italic text-fintech-700 dark:text-fintech-300 mb-4">
                            "{study.testimonial.quote}"
                          </blockquote>
                          <div className="text-sm">
                            <div className="font-semibold">{study.testimonial.author}</div>
                            <div className="text-muted-foreground">
                              {study.testimonial.title}, {study.testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Our Implementation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful AI transformation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-0 bg-gradient-to-br from-background to-secondary/20">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">1. Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive analysis of your current processes, pain points, and optimization opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-gradient-to-br from-background to-secondary/20">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">2. Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Rapid deployment of AI solutions with minimal disruption to your existing operations.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 bg-gradient-to-br from-background to-secondary/20">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">3. Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Continuous monitoring and refinement to maximize performance and ROI over time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-700 dark:to-fintech-900">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-fintech-100 mb-8">
              Join the growing list of businesses transforming their operations with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationButton size="lg" className="px-8 py-3 bg-white text-fintech-600 hover:bg-fintech-50">
                Start Your Transformation
              </ConsultationButton>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 border-white text-white hover:bg-white hover:text-fintech-600 bg-transparent"
                asChild
              >
                <Link href="/about/contact">
                  Contact Our Team
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
