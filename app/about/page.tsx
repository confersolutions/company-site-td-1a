import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ConsultationButton } from "@/components/consultation-button"
import Link from "next/link"
import {
  Building2,
  Users,
  Award,
  Target,
  Lightbulb,
  Shield,
  Heart,
  Zap,
  Scale,
  Eye,
  TrendingUp,
  Clock,
  Globe,
  CheckCircle,
  Github,
  Code,
  BookOpen,
  Handshake,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Confer Solutions AI",
  description:
    "Founded by industry veterans with decades of FinTech expertise, building open-source AI solutions that transform mortgage operations and business processes.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
              Founded in 2021
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Pioneering the Future of Autonomous Mortgage Banking
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Founded by industry veterans with decades of FinTech expertise, building open-source AI solutions that
              transform mortgage operations with institutional-grade accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationButton size="lg" className="px-8 py-3">
                Get in Touch
              </ConsultationButton>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
                Our Story
              </h2>
              <p className="text-xl text-muted-foreground">
                A journey of innovation, expertise, and transformation in the financial technology landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-fintech-500 to-fintech-600 flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Founded with Vision</h3>
                      <p className="text-muted-foreground">
                        Founded in 2021 with a vision to revolutionize mortgage banking through AI, combining
                        traditional banking expertise with cutting-edge technology innovation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-fintech-500 to-fintech-600 flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Mission-Driven</h3>
                      <p className="text-muted-foreground">
                        Creating autonomous AI agents that handle complex mortgage operations with institutional-grade
                        accuracy, transforming how financial services operate.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-fintech-500 to-fintech-600 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Scaling Impact</h3>
                      <p className="text-muted-foreground">
                        Started building AI agents for mortgage processes, now deploying production-ready solutions at
                        scale across multiple industries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-fintech-50 to-fintech-100 dark:from-fintech-950/50 dark:to-fintech-900/50 rounded-2xl p-8 border">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-fintech-600 dark:text-fintech-400 mb-2">2021</div>
                    <div className="text-lg font-semibold mb-4">Company Founded</div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        AI-first approach established
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Industry expertise assembled
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Open-source commitment made
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Led by industry veterans with unparalleled expertise in financial technology and mortgage operations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Founder & CEO Profile */}
            <Card className="mb-12 border-0 bg-gradient-to-br from-background to-secondary/20">
              <CardHeader className="text-center pb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-fintech-500 to-fintech-600 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Founder & CEO</CardTitle>
                <CardDescription className="text-lg">
                  Bridging traditional banking expertise with cutting-edge AI innovation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Building2 className="h-5 w-5 mr-2 text-fintech-600 dark:text-fintech-400" />
                      Background
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Former Senior Vice President at Wells Fargo with deep understanding of mortgage operations,
                      regulatory compliance, and financial technology systems.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        20+ years in FinTech and mortgage technology
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Expert in regulatory compliance
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Proven track record in financial operations
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Eye className="h-5 w-5 mr-2 text-fintech-600 dark:text-fintech-400" />
                      Vision
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Transforming the mortgage industry through autonomous AI systems that maintain the highest
                      standards of accuracy and compliance while dramatically improving efficiency.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Institutional-grade AI solutions
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Open-source innovation leadership
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Industry transformation focus
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Credentials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 bg-gradient-to-br from-background to-secondary/20">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Industry Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      Combined decades of experience in FinTech innovation
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      Deep understanding of regulatory requirements
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      Proven track record in mortgage banking operations
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-background to-secondary/20">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-4">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Technical Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      Industry experts in finance and technology
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      Advanced AI and machine learning capabilities
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      Production-ready enterprise solutions
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technology Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Our Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on cutting-edge AI technology with institutional memory and real-time intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* AI-First Approach */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Zap className="h-6 w-6 mr-3 text-fintech-600 dark:text-fintech-400" />
                AI-First Approach
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Institutional Memory</div>
                    <div className="text-sm text-muted-foreground">
                      Combined with real-time intelligence for superior decision-making
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Advanced NLP</div>
                    <div className="text-sm text-muted-foreground">
                      Natural language processing for mortgage documentation
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Machine Learning Models</div>
                    <div className="text-sm text-muted-foreground">
                      Trained on mortgage-specific scenarios and regulations
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">24/7 Operations</div>
                    <div className="text-sm text-muted-foreground">
                      Operational capability with human-level expertise
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Production Deployments */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Globe className="h-6 w-6 mr-3 text-fintech-600 dark:text-fintech-400" />
                Production Deployments
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Live Operations</div>
                    <div className="text-sm text-muted-foreground">
                      Multiple AI agents currently serving live mortgage operations
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Proven Reliability</div>
                    <div className="text-sm text-muted-foreground">
                      Demonstrated reliability in high-stakes financial environments
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Continuous Learning</div>
                    <div className="text-sm text-muted-foreground">Improvement from real-world usage and feedback</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Enterprise Scale</div>
                    <div className="text-sm text-muted-foreground">
                      Scalable architecture supporting enterprise-level deployment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-background to-secondary/20 border">
              <div className="text-3xl font-bold text-fintech-600 dark:text-fintech-400 mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-background to-secondary/20 border">
              <div className="text-3xl font-bold text-fintech-600 dark:text-fintech-400 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Operations</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-background to-secondary/20 border">
              <div className="text-3xl font-bold text-fintech-600 dark:text-fintech-400 mb-2">10+</div>
              <div className="text-sm text-muted-foreground">AI Agents</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-background to-secondary/20 border">
              <div className="text-3xl font-bold text-fintech-600 dark:text-fintech-400 mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Commitment Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Open Source Commitment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advancing the entire mortgage industry through transparent, community-driven innovation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Handshake className="h-6 w-6 mr-3 text-fintech-600 dark:text-fintech-400" />
                  Community-Driven Innovation
                </h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We believe that shared innovation accelerates industry transformation. Our commitment to open-source
                    development fosters trust, collaboration, and collective advancement.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Transparent development processes</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Community-driven improvements</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Industry standardization focus</span>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-0 bg-gradient-to-br from-background to-secondary/20">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Github className="h-8 w-8 text-fintech-600 dark:text-fintech-400" />
                    <div>
                      <CardTitle className="text-xl">MCP Mortgage Server</CardTitle>
                      <CardDescription>Our flagship open-source project</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    A comprehensive Model Context Protocol server for mortgage document processing and analysis.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link
                      href="https://github.com/confersolutions/mcp-mortgage-server.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View on GitHub
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-fintech-600 dark:text-fintech-400" />
                  Why Open Source?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Promotes industry standardization and best practices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Enables community-driven improvements and security</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Demonstrates confidence in our technology and approach</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Fosters ecosystem growth and adoption</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-fintech-600 dark:text-fintech-400" />
                  Our Philosophy
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We believe that the future of financial technology lies in collaborative innovation. By sharing our
                  tools and knowledge, we accelerate the entire industry's transformation toward more efficient,
                  accurate, and accessible financial services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Our Vision
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building the world's first fully autonomous AI-powered mortgage bank that transforms the industry.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-12 border-0 bg-gradient-to-br from-fintech-50 to-fintech-100 dark:from-fintech-950/50 dark:to-fintech-900/50">
              <CardHeader className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-fintech-500 to-fintech-600 flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-fintech-700 dark:text-fintech-300">
                  The Autonomous Mortgage Bank
                </CardTitle>
                <CardDescription className="text-lg text-fintech-600 dark:text-fintech-400">
                  Revolutionizing mortgage services through complete AI automation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        End-to-end mortgage processing without human intervention
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Highest standards of compliance and accuracy
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Democratized access to mortgage services
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Technology-driven cost reduction
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Impact Goals</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-fintech-600 dark:text-fintech-400 mt-0.5" />
                        <div>
                          <div className="font-medium text-sm">Reduce Processing Time</div>
                          <div className="text-xs text-muted-foreground">From weeks to hours</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Shield className="h-5 w-5 text-fintech-600 dark:text-fintech-400 mt-0.5" />
                        <div>
                          <div className="font-medium text-sm">Eliminate Human Error</div>
                          <div className="text-xs text-muted-foreground">In complex financial calculations</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Globe className="h-5 w-5 text-fintech-600 dark:text-fintech-400 mt-0.5" />
                        <div>
                          <div className="font-medium text-sm">24/7 Availability</div>
                          <div className="text-xs text-muted-foreground">Regardless of geography</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <TrendingUp className="h-5 w-5 text-fintech-600 dark:text-fintech-400 mt-0.5" />
                        <div>
                          <div className="font-medium text-sm">Improve Service Quality</div>
                          <div className="text-xs text-muted-foreground">While lowering costs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our innovation and shape our commitment to transforming financial services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 bg-gradient-to-br from-background to-secondary/20 text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Leveraging decades of industry knowledge to build solutions that truly understand financial services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-background to-secondary/20 text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Pushing the boundaries of what's possible with AI while maintaining practical, real-world
                  applications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-background to-secondary/20 text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Open-source commitment and clear communication build trust with our clients and community.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-background to-secondary/20 text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Production-proven solutions you can trust with your most critical business operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-background to-secondary/20 text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Unwavering commitment to regulatory standards and industry best practices in all our solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-background to-secondary/20 text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-fintech-500 to-fintech-600 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Passion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Genuine enthusiasm for transforming the industry and making financial services more accessible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-700 dark:to-fintech-900">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-fintech-100 mb-8">
              Discover how our AI solutions can revolutionize your business processes and drive unprecedented
              efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationButton size="lg" className="px-8 py-3 bg-white text-fintech-600 hover:bg-fintech-50">
                Schedule a Consultation
              </ConsultationButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
