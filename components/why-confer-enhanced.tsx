"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ConsultationButton } from "@/components/consultation-button"
import {
  Zap,
  Target,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Users,
  BarChart3,
  Sparkles,
  Award,
  Lightbulb,
  Rocket,
  Star,
} from "lucide-react"
import Image from "next/image"

export function WhyConferEnhanced() {
  const coreValues = [
    {
      icon: <Zap className="h-10 w-10 text-fintech-500" />,
      title: "Lightning-Fast Automation",
      description:
        "Deploy AI solutions that work 24/7, processing thousands of tasks in minutes instead of hours. Our automation reduces manual work by up to 95%.",
      metrics: "95% faster processing",
      features: ["24/7 operation", "Instant scalability", "Zero downtime", "Real-time processing"],
      image: "/placeholder.jpg",
      color: "from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30",
    },
    {
      icon: <Target className="h-10 w-10 text-fintech-500" />,
      title: "Precision Accuracy",
      description:
        "Machine learning models trained on your specific data deliver consistent, error-free results every time with continuous improvement.",
      metrics: "99.7% accuracy rate",
      features: ["ML-powered precision", "Continuous learning", "Error reduction", "Quality assurance"],
      image: "/placeholder.jpg",
      color: "from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30",
    },
    {
      icon: <Shield className="h-10 w-10 text-fintech-500" />,
      title: "Enterprise-Grade Compliance",
      description:
        "Built-in regulatory compliance and comprehensive audit trails ensure your operations meet the highest industry standards.",
      metrics: "100% compliance record",
      features: ["Regulatory compliance", "Audit trails", "Security protocols", "Data protection"],
      image: "/placeholder.jpg",
      color: "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-fintech-500" />,
      title: "Exponential Speed Gains",
      description:
        "Transform weeks of manual work into minutes of automated processing with intelligent workflows and smart optimization.",
      metrics: "10x productivity boost",
      features: ["Workflow automation", "Smart optimization", "Process acceleration", "Efficiency gains"],
      image: "/placeholder.jpg",
      color: "from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30",
    },
  ]

  const successMetrics = [
    {
      value: "$8.5M+",
      label: "Cost Savings",
      description: "Delivered to clients",
      icon: <BarChart3 className="h-6 w-6 text-green-500" />,
      progress: 85,
    },
    {
      value: "95%",
      label: "Automation Rate",
      description: "Average across projects",
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      progress: 95,
    },
    {
      value: "50+",
      label: "Successful Deployments",
      description: "Enterprise implementations",
      icon: <Award className="h-6 w-6 text-purple-500" />,
      progress: 100,
    },
    {
      value: "99.8%",
      label: "System Uptime",
      description: "Reliability guarantee",
      icon: <Shield className="h-6 w-6 text-orange-500" />,
      progress: 99.8,
    },
  ]

  const differentiators = [
    {
      icon: <Rocket className="h-8 w-8 text-fintech-500" />,
      title: "Rapid Deployment",
      description: "From concept to production in weeks, not months, with our proven methodology",
      highlight: "8-week average",
    },
    {
      icon: <Users className="h-8 w-8 text-fintech-500" />,
      title: "Expert Team",
      description: "AI specialists with deep domain knowledge and proven track records",
      highlight: "50+ experts",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-fintech-500" />,
      title: "Innovation Focus",
      description: "Cutting-edge AI research applied to real-world business challenges",
      highlight: "Latest tech",
    },
    {
      icon: <Star className="h-8 w-8 text-fintech-500" />,
      title: "Proven Results",
      description: "Track record of measurable business impact across industries",
      highlight: "95% success rate",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Deep dive into your business challenges, data landscape, and strategic objectives",
      duration: "1-2 weeks",
      deliverables: ["Business assessment", "Technical audit", "ROI projections"],
    },
    {
      step: "02",
      title: "AI Architecture Design",
      description: "Custom AI solution architecture tailored to your specific needs and constraints",
      duration: "2-3 weeks",
      deliverables: ["System design", "Integration plan", "Security framework"],
    },
    {
      step: "03",
      title: "Rapid Deployment",
      description: "Agile implementation with minimal business disruption and continuous feedback",
      duration: "3-4 weeks",
      deliverables: ["MVP deployment", "Testing results", "Performance metrics"],
    },
    {
      step: "04",
      title: "Optimize & Scale",
      description: "Continuous improvement, performance monitoring, and strategic expansion",
      duration: "Ongoing",
      deliverables: ["Performance reports", "Optimization updates", "Scale planning"],
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-fintech-50/20 dark:to-fintech-950/20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge
            variant="outline"
            className="mb-6 px-6 py-3 text-sm font-medium bg-fintech-50 text-fintech-700 border-fintech-200"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Why Choose Confer Solutions
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
            The AI Advantage That Transforms Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We don't just build AI solutions—we architect intelligent systems that revolutionize how your business
            operates, delivering measurable results from day one with enterprise-grade reliability.
          </p>
        </div>

        {/* Success Metrics with Progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {successMetrics.map((metric, index) => (
            <Card
              key={index}
              className="text-center border-0 bg-gradient-to-br from-background to-fintech-50/50 dark:to-fintech-950/50 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">{metric.icon}</div>
                <div className="text-4xl font-bold text-fintech-600 dark:text-fintech-400 mb-3">{metric.value}</div>
                <div className="font-semibold mb-2">{metric.label}</div>
                <div className="text-sm text-muted-foreground mb-4">{metric.description}</div>
                <Progress value={metric.progress} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Values - Enhanced */}
        <div className="space-y-12 mb-20">
          {coreValues.map((value, index) => (
            <Card
              key={index}
              className={`group border-0 bg-gradient-to-br ${value.color} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
            >
              <CardContent className="p-0">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Content */}
                  <div className="p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-20 h-20 bg-fintech-100 dark:bg-fintech-900 rounded-3xl flex items-center justify-center group-hover:bg-fintech-500 group-hover:text-white transition-all duration-300">
                        {value.icon}
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-fintech-100 text-fintech-700 dark:bg-fintech-900 dark:text-fintech-300 px-4 py-2"
                      >
                        {value.metrics}
                      </Badge>
                    </div>

                    <h3 className="text-3xl font-bold mb-4 group-hover:text-fintech-600 dark:group-hover:text-fintech-400 transition-colors">
                      {value.title}
                    </h3>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">{value.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {value.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-fintech-500" />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-fit group-hover:bg-fintech-500 group-hover:text-white group-hover:border-fintech-500 transition-colors bg-transparent"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Image */}
                  <div className={`relative h-80 lg:h-full ${index % 2 === 1 ? "lg:order-first" : ""}`}>
                    <Image
                      src={value.image || "/placeholder.svg"}
                      alt={value.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Differentiators */}
        <Card className="border-0 bg-gradient-to-r from-fintech-50 to-fintech-100 dark:from-fintech-950/50 dark:to-fintech-900/50 mb-20">
          <CardContent className="p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-6 text-fintech-700 dark:text-fintech-300">What Sets Us Apart</h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our unique approach combines cutting-edge AI with deep industry expertise and proven methodologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {differentiators.map((diff, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-fintech-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-fintech-600 transition-colors">
                    {diff.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-3">{diff.title}</h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{diff.description}</p>
                  <Badge variant="outline" className="bg-fintech-100 text-fintech-700 border-fintech-200">
                    {diff.highlight}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Process Overview - Enhanced */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Our Proven Process
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From discovery to deployment, we ensure success at every step with our battle-tested methodology
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((phase, index) => (
              <Card
                key={index}
                className="border-0 bg-gradient-to-r from-background to-fintech-50/30 dark:to-fintech-950/30 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                    <div className="text-center lg:text-left">
                      <div className="text-4xl font-bold text-fintech-500 mb-2">{phase.step}</div>
                      <Badge variant="outline" className="bg-fintech-50 text-fintech-700 border-fintech-200">
                        {phase.duration}
                      </Badge>
                    </div>

                    <div className="lg:col-span-2">
                      <h4 className="font-bold text-xl mb-3">{phase.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-3">Key Deliverables:</h5>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, delIndex) => (
                          <li key={delIndex} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-fintech-500" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="border-0 bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-700 dark:to-fintech-900 text-white">
          <CardContent className="p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h3>
              <p className="text-xl text-fintech-100 mb-8 leading-relaxed">
                Join industry leaders who have already revolutionized their operations with our AI solutions. Start your
                transformation journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ConsultationButton size="lg" className="px-8 py-4 bg-white text-fintech-600 hover:bg-fintech-50">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Get Started Today
                </ConsultationButton>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 border-white text-white hover:bg-white hover:text-fintech-600 bg-transparent"
                >
                  View Case Studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default WhyConferEnhanced;
