"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { ConsultationButton } from "@/components/consultation-button"
import {
  Users,
  Clock,
  DollarSign,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Zap,
  Target,
  Globe,
  Brain,
  FileText,
  Shield,
  Database,
  Cpu,
  LineChart,
} from "lucide-react"

export default function AIContentGenerationCaseStudy() {
  const [animatedStats, setAnimatedStats] = useState({
    teamReduction: 0,
    timeSavings: 0,
    costReduction: 0,
    consistencyScore: 0,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        teamReduction: 85,
        timeSavings: 85,
        costReduction: 78,
        consistencyScore: 94,
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-3xl"></div>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000' fillOpacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-4 py-2 text-lg font-semibold">
            92% Reduction in Manual Content Creation
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            From 13 Copywriters to 2
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            How we transformed product content creation for a major marketplace, saving thousands of hours and
            maintaining brand consistency
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <ConsultationButton className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Schedule Demo
            </ConsultationButton>
            <Button
              variant="outline"
              className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 dark:border-blue-800 dark:hover:border-blue-700 dark:hover:bg-blue-900/20 bg-transparent"
            >
              Download Case Study
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Time Reduction</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">78%</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Cost Savings</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">94%</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Brand Compliance</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">10x</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Scaling Capability</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-6">The Challenge</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A major e-commerce marketplace was drowning in content creation bottlenecks
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-600 dark:text-red-400 flex items-center gap-3">
                    <Users className="h-8 w-8" />
                    The Problem
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600 dark:text-slate-300">
                      <strong>13 copywriters</strong> manually creating product descriptions for thousands of vendors
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600 dark:text-slate-300">
                      <strong>Inconsistent brand voice</strong> and formatting across product listings
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600 dark:text-slate-300">
                      <strong>Vendors waiting weeks</strong> for content approval and publication
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600 dark:text-slate-300">
                      <strong>Quality control issues</strong> with varying writing standards
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600 dark:text-slate-300">
                      <strong>High operational costs</strong> and scalability limitations
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-200 dark:border-red-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Clock className="h-8 w-8 text-red-600" />
                    <div>
                      <div className="text-2xl font-bold text-red-600">2 weeks</div>
                      <div className="text-sm text-red-500">Average content delivery time</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-200 dark:border-red-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <DollarSign className="h-8 w-8 text-red-600" />
                    <div>
                      <div className="text-2xl font-bold text-red-600">$2.1M</div>
                      <div className="text-sm text-red-500">Annual content operations cost</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-200 dark:border-red-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <TrendingUp className="h-8 w-8 text-red-600" />
                    <div>
                      <div className="text-2xl font-bold text-red-600">47%</div>
                      <div className="text-sm text-red-500">Brand inconsistency rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-6">
              Our AI-Powered Solution
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A comprehensive AI system that transforms content creation from manual to automated
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600 dark:text-blue-400 flex items-center gap-3">
                  <Brain className="h-6 w-6" />
                  Brand Guidelines Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">
                    Custom LLM trained on company's style guide and brand voice
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">
                    Automated tone, format, and messaging consistency
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">
                    Multi-language support with cultural localization
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">
                    Category-specific writing templates and requirements
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-indigo-600 dark:text-indigo-400 flex items-center gap-3">
                  <FileText className="h-6 w-6" />
                  Intelligent Content Generation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">
                    Product data ingestion from vendor feeds and specifications
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">Feature extraction and benefit articulation</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">SEO optimization with keyword integration</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">Compliance checking for industry regulations</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600 dark:text-purple-400 flex items-center gap-3">
                  <Shield className="h-6 w-6" />
                  Quality Assurance Workflow
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">AI-powered content review and scoring</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">
                    Automated fact-checking against product specifications
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">Brand compliance verification before publication</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">
                    Human oversight for final approval on flagged content
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-teal-600 dark:text-teal-400 flex items-center gap-3">
                  <Globe className="h-6 w-6" />
                  Vendor Self-Service Platform
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">Real-time content generation for vendor uploads</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">Instant preview and editing capabilities</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">Automated publishing upon quality approval</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-600 dark:text-slate-300">
                    Performance analytics and optimization suggestions
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Deep Dive */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-6">
              Technology Deep Dive
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Advanced AI architecture powering intelligent content generation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600 dark:text-blue-400 flex items-center gap-3">
                    <Cpu className="h-8 w-8" />
                    Technical Implementation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Foundation Model</span>
                      <span className="text-sm text-blue-600 dark:text-blue-400">Fine-tuned GPT-4</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Training Data</span>
                      <span className="text-sm text-blue-600 dark:text-blue-400">50,000+ descriptions</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                        Processing Pipeline
                      </span>
                      <span className="text-sm text-blue-600 dark:text-blue-400">4-stage automation</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Integration</span>
                      <span className="text-sm text-blue-600 dark:text-blue-400">RESTful APIs</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Performance</span>
                      <span className="text-sm text-blue-600 dark:text-blue-400">{"<"}5 seconds</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800 dark:text-slate-200 flex items-center gap-3">
                    <Database className="h-6 w-6 text-indigo-600" />
                    AI Model Capabilities
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600 dark:text-slate-300">
                      Natural language understanding of product specifications
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600 dark:text-slate-300">
                      Brand voice consistency across all generated content
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600 dark:text-slate-300">
                      Dynamic length optimization based on product category
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600 dark:text-slate-300">
                      Automatic SEO keyword integration and optimization
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600 dark:text-slate-300">Multi-variant generation for A/B testing</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-6">
              Measurable Impact
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Transformational results across operations, quality, and business growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Operational Efficiency */}
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-green-600 dark:text-green-400 flex items-center gap-3">
                  <Zap className="h-6 w-6" />
                  Operational Efficiency
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Team Reduction</span>
                    <span className="text-lg font-bold text-green-600">{animatedStats.teamReduction}%</span>
                  </div>
                  <Progress value={animatedStats.teamReduction} className="h-2" />
                  <p className="text-xs text-slate-500">From 13 copywriters to 2 content managers</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Time Savings</span>
                    <span className="text-lg font-bold text-green-600">{animatedStats.timeSavings}%</span>
                  </div>
                  <Progress value={animatedStats.timeSavings} className="h-2" />
                  <p className="text-xs text-slate-500">Reduction in content creation time</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Cost Reduction</span>
                    <span className="text-lg font-bold text-green-600">{animatedStats.costReduction}%</span>
                  </div>
                  <Progress value={animatedStats.costReduction} className="h-2" />
                  <p className="text-xs text-slate-500">Decrease in content operations costs</p>
                </div>

                <Separator />
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">Same Day</div>
                  <div className="text-sm text-slate-500">Content delivery vs. 2-week delays</div>
                </div>
              </CardContent>
            </Card>

            {/* Quality Improvements */}
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600 dark:text-blue-400 flex items-center gap-3">
                  <Target className="h-6 w-6" />
                  Quality Improvements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Brand Compliance</span>
                    <span className="text-lg font-bold text-blue-600">{animatedStats.consistencyScore}%</span>
                  </div>
                  <Progress value={animatedStats.consistencyScore} className="h-2" />
                  <p className="text-xs text-slate-500">Consistency score across all content</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">SEO Performance</span>
                    <span className="text-lg font-bold text-blue-600">23%</span>
                  </div>
                  <Progress value={23} className="h-2" />
                  <p className="text-xs text-slate-500">Increase in organic product discovery</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Conversion Rate</span>
                    <span className="text-lg font-bold text-blue-600">15%</span>
                  </div>
                  <Progress value={15} className="h-2" />
                  <p className="text-xs text-slate-500">Improvement in product page conversions</p>
                </div>

                <Separator />
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">89%</div>
                  <div className="text-sm text-slate-500">Fewer content-related complaints</div>
                </div>
              </CardContent>
            </Card>

            {/* Business Growth */}
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600 dark:text-purple-400 flex items-center gap-3">
                  <LineChart className="h-6 w-6" />
                  Business Growth
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Vendor Satisfaction</span>
                    <span className="text-lg font-bold text-purple-600">91%</span>
                  </div>
                  <Progress value={91} className="h-2" />
                  <p className="text-xs text-slate-500">Positive feedback on content quality</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Scaling Capability</span>
                    <span className="text-lg font-bold text-purple-600">10x</span>
                  </div>
                  <Progress value={100} className="h-2" />
                  <p className="text-xs text-slate-500">Support for more product uploads</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Market Expansion</span>
                    <span className="text-lg font-bold text-purple-600">5</span>
                  </div>
                  <Progress value={100} className="h-2" />
                  <p className="text-xs text-slate-500">New product categories enabled</p>
                </div>

                <Separator />
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">$2.3M</div>
                  <div className="text-sm text-slate-500">Additional revenue from improved visibility</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Workflow */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-6">Process Workflow</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Step-by-step implementation from data ingestion to publication
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-4">
            {[
              { icon: Database, title: "Data Ingestion", desc: "Vendor uploads product specs and images" },
              { icon: Brain, title: "AI Analysis", desc: "System extracts key features and benefits" },
              { icon: FileText, title: "Content Generation", desc: "AI creates optimized descriptions" },
              { icon: Shield, title: "Quality Check", desc: "Automated compliance verification" },
              { icon: Users, title: "Human Review", desc: "Content managers review flagged items" },
              { icon: Globe, title: "Publication", desc: "Approved content goes live instantly" },
              { icon: BarChart3, title: "Monitoring", desc: "Continuous optimization based on metrics" },
            ].map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{step.desc}</p>
                  </CardContent>
                </Card>
                {index < 6 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-4 w-4 text-blue-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900/50 dark:to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-6">
              Implementation Timeline
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              From setup to full deployment in just 8 weeks
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                week: "Week 1-2",
                title: "System Setup",
                desc: "System setup and brand guideline training",
                color: "blue",
              },
              { week: "Week 3-4", title: "AI Training", desc: "AI model fine-tuning and testing", color: "indigo" },
              {
                week: "Week 5-6",
                title: "Pilot Program",
                desc: "Pilot program with select product categories",
                color: "purple",
              },
              { week: "Week 7-8", title: "Full Rollout", desc: "Full rollout and team training", color: "teal" },
            ].map((phase, index) => (
              <Card key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r from-${phase.color}-500 to-${phase.color}-600 rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-1">
                            {phase.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-300">{phase.desc}</p>
                        </div>
                        <Badge
                          className={`bg-${phase.color}-100 text-${phase.color}-800 dark:bg-${phase.color}-900 dark:text-${phase.color}-200 mt-2 md:mt-0`}
                        >
                          {phase.week}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800 inline-block">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="text-lg font-semibold text-green-800 dark:text-green-200">Ongoing</div>
                    <div className="text-sm text-green-600 dark:text-green-400">
                      Continuous optimization and performance monitoring
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Content Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            See how AI-powered content generation can scale your business while maintaining quality
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <ConsultationButton className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Schedule Demo
            </ConsultationButton>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent"
            >
              Download Case Study
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$2.5B+</div>
              <div className="text-blue-100">Content Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">85%</div>
              <div className="text-blue-100">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Automated Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
