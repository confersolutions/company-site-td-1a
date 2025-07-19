import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ConsultationButton } from "@/components/consultation-button"
import {
  Building2,
  Users,
  Target,
  Lightbulb,
  Shield,
  Heart,
  Github,
  ExternalLink,
  CheckCircle,
  Zap,
  Clock,
  TrendingUp,
  Award,
  Globe,
  Code,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Pioneering Autonomous Mortgage Banking",
  description:
    "Founded by industry veterans with decades of FinTech expertise, building open-source AI solutions that transform mortgage operations.",
}

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Expertise",
      description: "Leveraging decades of industry knowledge and proven experience in mortgage banking operations.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with AI while respecting traditional banking principles.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Transparency",
      description: "Open-source commitment and clear communication foster trust and collaboration.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Reliability",
      description: "Production-proven solutions you can trust, with unwavering commitment to regulatory standards.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Compliance",
      description: "Maintaining the highest standards of regulatory compliance and institutional-grade accuracy.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion",
      description: "Genuine enthusiasm for transforming the mortgage industry through innovative AI solutions.",
      gradient: "from-pink-500 to-rose-500",
    },
  ]

  const techFeatures = [
    {
      title: "Institutional Memory",
      description: "Combined with real-time intelligence for comprehensive decision-making",
    },
    {
      title: "Advanced NLP",
      description: "Natural language processing specifically trained for mortgage documentation",
    },
    {
      title: "ML Models",
      description: "Machine learning algorithms trained on mortgage-specific scenarios",
    },
    {
      title: "24/7 Operations",
      description: "Continuous operational capability with human-level expertise",
    },
  ]

  const deploymentStats = [
    {
      title: "Live Operations",
      description: "Multiple AI agents currently serving mortgage operations",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Proven Reliability",
      description: "Tested in high-stakes financial environments",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Continuous Learning",
      description: "Real-world usage drives constant improvement",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      title: "Enterprise Scale",
      description: "Architecture supporting large-scale deployments",
      icon: <Building2 className="h-6 w-6" />,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950 py-24">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 bg-[size:50px_50px] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-4 py-2">
              Founded in 2021 • Industry Veterans • Open Source Leaders
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Pioneering the Future of Autonomous Mortgage Banking
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Founded by industry veterans with decades of FinTech expertise, building open-source AI solutions that
              transform mortgage operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationButton
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Explore Our Solutions
              </ConsultationButton>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950 bg-transparent"
              >
                <Github className="mr-2 h-5 w-5" />
                View Open Source
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-xl text-muted-foreground">
                A journey from traditional banking to AI-powered innovation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-6 w-6 text-blue-500" />
                      Our Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Creating autonomous AI agents that handle complex mortgage operations with institutional-grade
                      accuracy, revolutionizing how financial institutions process and manage mortgage workflows.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-6 w-6 text-purple-500" />
                      Our Journey
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Started in 2021 with a vision to bridge traditional banking expertise with cutting-edge AI
                      innovation. Today, we're deploying production-ready solutions at scale, transforming mortgage
                      operations worldwide.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                      2021
                    </div>
                    <p className="text-lg font-semibold text-muted-foreground">Founded with a Vision</p>
                    <p className="text-sm text-muted-foreground mt-2">Revolutionizing mortgage banking through AI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Leadership & Expertise</h2>
              <p className="text-xl text-muted-foreground">
                Industry veterans bridging traditional banking with AI innovation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Founder Profile */}
              <Card className="overflow-hidden">
                <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">Founder & CEO</h3>
                    <p className="text-blue-100">Visionary Leader</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-blue-500" />
                      <span className="font-semibold">Former Senior Vice President at Wells Fargo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-purple-500" />
                      <span>20+ years in FinTech and mortgage technology</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-emerald-500" />
                      <span>Deep expertise in regulatory compliance and operations</span>
                    </div>
                    <p className="text-muted-foreground mt-4">
                      Bridging traditional banking expertise with cutting-edge AI innovation, bringing institutional
                      knowledge to revolutionary technology solutions.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Team Credentials */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-blue-500" />
                    Team Credentials
                  </CardTitle>
                  <CardDescription>Combined decades of experience in FinTech innovation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Industry Experts</p>
                      <p className="text-sm text-muted-foreground">
                        Finance, mortgage operations, and technology specialists
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Proven Experience</p>
                      <p className="text-sm text-muted-foreground">
                        Decades of combined experience in FinTech innovation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Regulatory Expertise</p>
                      <p className="text-sm text-muted-foreground">Deep understanding of compliance requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Operational Excellence</p>
                      <p className="text-sm text-muted-foreground">
                        Proven track record in mortgage banking operations
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Technology</h2>
              <p className="text-xl text-muted-foreground">AI-first approach with institutional-grade reliability</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Code className="h-6 w-6 text-blue-500" />
                  AI-First Approach
                </h3>
                <div className="space-y-4">
                  {techFeatures.map((feature, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-500">
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-purple-500" />
                  Production Deployments
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {deploymentStats.map((stat, index) => (
                    <Card key={index} className="text-center p-6">
                      <div className="flex justify-center mb-3">
                        <div className="p-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                          {stat.icon}
                        </div>
                      </div>
                      <h4 className="font-semibold mb-2">{stat.title}</h4>
                      <p className="text-sm text-muted-foreground">{stat.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Source Commitment</h2>
              <p className="text-xl text-muted-foreground">
                Community-driven innovation advancing the entire mortgage industry
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="border-2 border-emerald-200 dark:border-emerald-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Github className="h-6 w-6 text-emerald-500" />
                      MCP Mortgage Server
                    </CardTitle>
                    <CardDescription>Our flagship open-source project</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      A comprehensive Model Context Protocol server designed specifically for mortgage operations,
                      enabling seamless AI integration in financial workflows.
                    </p>
                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Button>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="text-center p-4">
                    <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">Standardization</h4>
                    <p className="text-sm text-muted-foreground mt-2">Industry best practices</p>
                  </Card>
                  <Card className="text-center p-4">
                    <h4 className="font-semibold text-teal-600 dark:text-teal-400">Security</h4>
                    <p className="text-sm text-muted-foreground mt-2">Community-driven improvements</p>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Why Open Source?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Industry Advancement</p>
                      <p className="text-sm text-muted-foreground">
                        Promotes standardization and best practices across the mortgage industry
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Community Innovation</p>
                      <p className="text-sm text-muted-foreground">
                        Enables collaborative improvements and enhanced security
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Technology Confidence</p>
                      <p className="text-sm text-muted-foreground">
                        Demonstrates our confidence in our technology and approach
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Ecosystem Growth</p>
                      <p className="text-sm text-muted-foreground">Fosters broader ecosystem growth and adoption</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl text-muted-foreground">
                Building the world's first fully autonomous AI-powered mortgage bank
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="border-2 border-blue-200 dark:border-blue-800">
                  <CardHeader>
                    <CardTitle className="text-2xl">The Autonomous Mortgage Bank</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-blue-500 mt-0.5" />
                      <p className="text-sm">End-to-end mortgage processing without human intervention</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-blue-500 mt-0.5" />
                      <p className="text-sm">Maintaining the highest standards of compliance and accuracy</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-blue-500 mt-0.5" />
                      <p className="text-sm">Democratizing access to mortgage services through technology</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
                  <Clock className="h-8 w-8 mx-auto mb-3 text-blue-500" />
                  <h4 className="font-bold text-2xl mb-2">Hours</h4>
                  <p className="text-sm text-muted-foreground">Processing time reduction from weeks</p>
                </Card>
                <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                  <CheckCircle className="h-8 w-8 mx-auto mb-3 text-purple-500" />
                  <h4 className="font-bold text-2xl mb-2">Zero</h4>
                  <p className="text-sm text-muted-foreground">Human error in calculations</p>
                </Card>
                <Card className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950">
                  <Globe className="h-8 w-8 mx-auto mb-3 text-emerald-500" />
                  <h4 className="font-bold text-2xl mb-2">24/7</h4>
                  <p className="text-sm text-muted-foreground">Global mortgage services</p>
                </Card>
                <Card className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
                  <TrendingUp className="h-8 w-8 mx-auto mb-3 text-orange-500" />
                  <h4 className="font-bold text-2xl mb-2">Lower</h4>
                  <p className="text-sm text-muted-foreground">Costs, higher quality</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${value.gradient} mb-4`}>
                      <div className="text-white">{value.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Mortgage Operations?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join the future of autonomous mortgage banking with industry-proven AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationButton size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Get Started Today
              </ConsultationButton>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Explore Our Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
