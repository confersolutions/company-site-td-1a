import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Clock, Users, DollarSign } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Success Stories & Case Studies | Confer Solutions AI",
  description:
    "Real-world AI implementations delivering measurable results. See how we reduced copywriting teams by 85% and automated production support 24/7.",
  keywords: [
    "AI case studies",
    "automation success stories",
    "AI implementation",
    "business transformation",
    "ROI results",
  ],
  openGraph: {
    title: "AI Success Stories & Case Studies | Confer Solutions AI",
    description:
      "Real-world AI implementations delivering measurable results. See how we reduced copywriting teams by 85% and automated production support 24/7.",
    type: "website",
  },
}

const caseStudies = [
  {
    id: "ai-content-generation",
    title: "AI Content Generation Platform",
    company: "Major E-commerce Retailer",
    industry: "Retail & E-commerce",
    challenge: "Manual content creation bottleneck affecting product launches",
    solution: "Deployed autonomous AI content generation system",
    results: [
      { metric: "Team Reduction", value: "85%", icon: Users },
      { metric: "Content Speed", value: "10x Faster", icon: Clock },
      { metric: "Cost Savings", value: "$2.4M/year", icon: DollarSign },
      { metric: "Quality Score", value: "98.5%", icon: TrendingUp },
    ],
    description:
      "Transformed content operations with AI-powered generation, reducing manual workload while maintaining quality standards.",
    tags: ["Content AI", "Automation", "E-commerce"],
    link: "/case-studies/ai-content-generation",
  },
  {
    id: "autonomous-production-support",
    title: "Autonomous Production Support",
    company: "Technology Services Provider",
    industry: "Technology",
    challenge: "24/7 production support requirements with high operational costs",
    solution: "Implemented autonomous AI support system with self-healing capabilities",
    results: [
      { metric: "Uptime", value: "99.9%", icon: TrendingUp },
      { metric: "Response Time", value: "<30 seconds", icon: Clock },
      { metric: "Cost Reduction", value: "75%", icon: DollarSign },
      { metric: "Issue Resolution", value: "95% Automated", icon: Users },
    ],
    description:
      "Achieved round-the-clock production support with autonomous monitoring, alerting, and self-healing systems.",
    tags: ["DevOps AI", "Monitoring", "Automation"],
    link: "/case-studies/autonomous-production-support",
  },
  {
    id: "dynamic-seo-optimization",
    title: "Dynamic SEO Optimization",
    company: "Digital Marketing Agency",
    industry: "Marketing & Advertising",
    challenge: "Manual SEO optimization across hundreds of client websites",
    solution: "AI-driven dynamic SEO optimization and content strategy platform",
    results: [
      { metric: "Traffic Increase", value: "340%", icon: TrendingUp },
      { metric: "Ranking Improvement", value: "85% Top 10", icon: TrendingUp },
      { metric: "Time Savings", value: "90%", icon: Clock },
      { metric: "Client Retention", value: "98%", icon: Users },
    ],
    description:
      "Revolutionized SEO workflows with AI-powered optimization, delivering exceptional results across client portfolios.",
    tags: ["SEO AI", "Marketing", "Analytics"],
    link: "/case-studies/dynamic-seo-optimization",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fintech-950 via-fintech-900 to-fintech-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Proven Results
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">AI Success Stories</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real-world implementations delivering measurable business impact. See how our AI solutions transform
              operations and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl group-hover:text-fintech-600 transition-colors">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {study.company} • {study.industry}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{study.description}</p>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {study.results.map((result, index) => {
                      const IconComponent = result.icon
                      return (
                        <div key={index} className="bg-muted/50 rounded-lg p-3 text-center">
                          <IconComponent className="w-4 h-4 mx-auto mb-1 text-fintech-600" />
                          <div className="font-bold text-sm text-fintech-700">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.metric}</div>
                        </div>
                      )
                    })}
                  </div>

                  <Link href={study.link}>
                    <Button className="w-full group/btn">
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the companies already benefiting from AI-powered automation and intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-fintech-600 hover:bg-fintech-700">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline">
                Explore Solutions
              </Button>
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
