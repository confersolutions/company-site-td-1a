"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ConsultationButton } from "@/components/consultation-button"
import { CheckCircle, Zap, Shield, TrendingUp, ArrowRight, Clock, Users, BarChart3, Sparkles } from "lucide-react"
import Image from "next/image"

export function WhyConferSection() {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Lightning Fast Automation",
      description: "Reduce processing time by up to 85% with intelligent automation that works 24/7.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Unmatched Accuracy",
      description: "Achieve 99.7% accuracy rates with AI models trained on millions of financial documents.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Enterprise-Grade Security",
      description: "Bank-level security with SOC 2 compliance and end-to-end encryption.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Measurable ROI",
      description: "See immediate returns with reduced operational costs and increased efficiency.",
    },
  ]

  const successMetrics = [
    { value: "$8.5M+", label: "Cost Savings", description: "Delivered to clients" },
    { value: "95%", label: "Automation Rate", description: "Average across projects" },
    { value: "50+", label: "Successful Deployments", description: "Enterprise implementations" },
    { value: "99.8%", label: "Uptime", description: "System reliability" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
            Why Choose Confer Solutions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The AI Advantage That Transforms Business</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We don't just build AI solutions—we architect intelligent systems that revolutionize how your business
            operates, delivering measurable results from day one.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {successMetrics.map((metric, index) => (
            <Card
              key={index}
              className="text-center border-0 bg-gradient-to-br from-background to-fintech-50/50 dark:to-fintech-950/50"
            >
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-fintech-600 dark:text-fintech-400 mb-2">{metric.value}</div>
                <div className="font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group border-0 bg-gradient-to-br from-background to-fintech-50/30 dark:to-fintech-950/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-fintech-100 dark:bg-fintech-900 rounded-2xl flex items-center justify-center group-hover:bg-fintech-500 group-hover:text-white transition-colors">
                    {benefit.icon}
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-fintech-100 text-fintech-700 dark:bg-fintech-900 dark:text-fintech-300"
                  >
                    {/* Placeholder for metrics, as they are not present in the updated code */}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold mb-3 group-hover:text-fintech-600 dark:group-hover:text-fintech-400 transition-colors">
                  {benefit.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/placeholder.jpg"
                    alt={benefit.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="flex items-center text-fintech-600 dark:text-fintech-400 font-medium group-hover:text-fintech-700 dark:group-hover:text-fintech-300 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-0 bg-gradient-to-r from-fintech-50 to-fintech-100 dark:from-fintech-950/50 dark:to-fintech-900/50 mb-16">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-fintech-700 dark:text-fintech-300">What Sets Us Apart</h3>
              <p className="text-muted-foreground">
                Our unique approach combines cutting-edge AI with deep industry expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-fintech-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Rapid Deployment</h4>
                <p className="text-sm text-muted-foreground">From concept to production in weeks, not months</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-fintech-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Expert Team</h4>
                <p className="text-sm text-muted-foreground">AI specialists with deep domain knowledge</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-fintech-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Proven Results</h4>
                <p className="text-sm text-muted-foreground">Track record of measurable business impact</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
            Our Proven Process
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            From discovery to deployment, we ensure success at every step
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            {
              step: "01",
              title: "Discovery",
              description: "Deep dive into your business challenges and opportunities",
            },
            { step: "02", title: "Design", description: "Custom AI architecture tailored to your specific needs" },
            { step: "03", title: "Deploy", description: "Rapid implementation with minimal business disruption" },
            { step: "04", title: "Optimize", description: "Continuous improvement and performance monitoring" },
          ].map((phase, index) => (
            <Card
              key={index}
              className="text-center border-0 bg-gradient-to-br from-background to-fintech-50/30 dark:to-fintech-950/30"
            >
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-fintech-500 mb-3">{phase.step}</div>
                <h4 className="font-semibold mb-2">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
            <p className="text-muted-foreground mb-8">
              Join industry leaders who have already revolutionized their operations with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationButton size="lg" className="px-8 py-3">
                <Sparkles className="mr-2 h-5 w-5" />
                Get Started Today
              </ConsultationButton>
              <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent">
                View Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
