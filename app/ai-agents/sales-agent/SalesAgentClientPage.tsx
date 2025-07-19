"use client"

import type React from "react"

import { ConsultationButton } from "@/components/consultation-button"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Shield,
  Brain,
  MessageSquare,
  TrendingUp,
  CheckCircle,
  Clock,
  Users,
  BarChart3,
  Zap,
  Target,
  Database,
  CreditCard,
  FileText,
  Settings,
  Phone,
  Mail,
  MessageCircle,
  Activity,
} from "lucide-react"
import { useState } from "react"

export default function SalesAgentClientPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/10 blur-xl animate-float" />
          <div
            className="absolute top-40 right-20 w-24 h-24 rounded-full bg-teal-300/20 blur-xl animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-blue-300/15 blur-xl animate-float"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  The AI Mortgage Sales Agent That <span className="text-teal-300">Never Misses a Deal</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                  Revolutionize your mortgage sales with AI that ensures 100% compliance, maximizes conversion rates,
                  and operates 24/7 across every communication channel
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <ConsultationButton
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
                  >
                    Schedule Demo
                  </ConsultationButton>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold bg-transparent"
                  >
                    View ROI Calculator
                  </Button>
                </div>
              </div>

              {/* Interactive Sales Dashboard Overlay */}
              <div className="relative">
                <div
                  className="w-full h-[500px] bg-cover bg-center rounded-xl shadow-2xl relative overflow-hidden"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center')",
                  }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-teal-800/80" />

                  {/* Sales Dashboard Interface */}
                  <div className="absolute inset-4 flex flex-col">
                    {/* Header */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 mb-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-900">AI Sales Agent Dashboard</h3>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-sm text-gray-600">Live</span>
                        </div>
                      </div>
                    </div>

                    {/* Lead Pipeline */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 mb-3 flex-1">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <Target className="w-4 h-4 mr-2 text-blue-600" />
                        Lead Conversion Pipeline
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">New Leads</span>
                          <div className="flex items-center">
                            <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }} />
                            </div>
                            <span className="text-sm font-medium">24</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Qualified</span>
                          <div className="flex items-center">
                            <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                              <div className="bg-green-600 h-2 rounded-full" style={{ width: "72%" }} />
                            </div>
                            <span className="text-sm font-medium">18</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Applications</span>
                          <div className="flex items-center">
                            <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                              <div className="bg-teal-600 h-2 rounded-full" style={{ width: "60%" }} />
                            </div>
                            <span className="text-sm font-medium">15</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Communication Channels */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 mb-3">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <MessageSquare className="w-4 h-4 mr-2 text-green-600" />
                        Active Communications
                      </h4>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="text-center">
                          <Phone className="w-6 h-6 mx-auto text-blue-600 mb-1" />
                          <div className="text-xs font-medium">Voice</div>
                          <div className="text-xs text-gray-500">8 active</div>
                        </div>
                        <div className="text-center">
                          <Mail className="w-6 h-6 mx-auto text-green-600 mb-1" />
                          <div className="text-xs font-medium">Email</div>
                          <div className="text-xs text-gray-500">15 sent</div>
                        </div>
                        <div className="text-center">
                          <MessageCircle className="w-6 h-6 mx-auto text-purple-600 mb-1" />
                          <div className="text-xs font-medium">SMS</div>
                          <div className="text-xs text-gray-500">12 active</div>
                        </div>
                        <div className="text-center">
                          <MessageSquare className="w-6 h-6 mx-auto text-orange-600 mb-1" />
                          <div className="text-xs font-medium">Chat</div>
                          <div className="text-xs text-gray-500">5 live</div>
                        </div>
                      </div>
                    </div>

                    {/* Compliance Status */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Shield className="w-4 h-4 text-green-600 mr-2" />
                          <span className="font-semibold text-gray-800">Compliance Status</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-1" />
                            <span className="text-xs text-gray-600">TRID</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-1" />
                            <span className="text-xs text-gray-600">RESPA</span>
                          </div>
                          <div className="flex items-center">
                            <Activity className="w-4 h-4 text-blue-600" />
                            <span className="text-xs text-gray-600 ml-1">100%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Powered by Advanced AI Technology</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI mortgage sales agent combines cutting-edge technology with deep industry expertise to deliver
              unprecedented results for your mortgage business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-50 to-teal-50 border-0 shadow-lg hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Regulatory Compliance Mastery</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Always current with TRID, RESPA, state regulations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Automatic APR disclosure and risk mitigation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    100% audit-ready documentation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-teal-50 to-blue-50 border-0 shadow-lg hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Dynamic Product Intelligence</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Real-time credit policy updates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Optimal rate, product, and points matching
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Instant qualification and application routing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-50 to-teal-50 border-0 shadow-lg hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Omnichannel Communication</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Email, SMS, voice calls, live chat, messenger
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Seamless inbound and outbound interactions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Context preservation across all channels
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-teal-50 to-blue-50 border-0 shadow-lg hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Performance Analytics</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Real-time conversion tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Lead quality scoring and prioritization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Automated follow-up sequences
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points Solved Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Eliminating Every Mortgage Sales Challenge
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your biggest pain points into competitive advantages with AI-powered solutions designed
              specifically for the mortgage industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border border-red-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-red-700 mb-2">Compliance Violations</h3>
                  <p className="text-sm text-red-600 mb-3">Manual processes lead to costly regulatory mistakes</p>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Automated regulatory adherence</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-xl border border-yellow-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-yellow-700 mb-2">Missed Leads</h3>
                  <p className="text-sm text-yellow-600 mb-3">Slow response times lose qualified prospects</p>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">24/7 instant response capability</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-purple-700 mb-2">Outdated Product Knowledge</h3>
                  <p className="text-sm text-purple-600 mb-3">Rate changes and policy updates cause confusion</p>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Real-time policy integration</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-700 mb-2">Inconsistent Follow-up</h3>
                  <p className="text-sm text-blue-600 mb-3">Manual tracking leads to missed opportunities</p>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Intelligent automation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl border border-green-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-green-700 mb-2">Manual Application Processing</h3>
                  <p className="text-sm text-green-600 mb-3">Time-consuming paperwork slows conversions</p>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Streamlined digital workflows</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-indigo-700 mb-2">Poor Lead Qualification</h3>
                  <p className="text-sm text-indigo-600 mb-3">Wasted time on unqualified prospects</p>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">AI-powered lead scoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Proven Results That Transform Your Business</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our AI mortgage sales agent delivers measurable improvements across every key performance indicator.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl font-bold text-teal-300 mb-2">300%</div>
              <div className="text-lg font-semibold mb-2">Faster Response Times</div>
              <div className="text-sm text-blue-200">Instant lead engagement vs. industry average</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl font-bold text-teal-300 mb-2">95%</div>
              <div className="text-lg font-semibold mb-2">Compliance Rate</div>
              <div className="text-sm text-blue-200">Improvement in regulatory adherence</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl font-bold text-teal-300 mb-2">60%</div>
              <div className="text-lg font-semibold mb-2">More Qualified Applications</div>
              <div className="text-sm text-blue-200">Increase in conversion rates</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl font-bold text-teal-300 mb-2">24/7</div>
              <div className="text-lg font-semibold mb-2">Availability</div>
              <div className="text-sm text-blue-200">Never miss another lead opportunity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Seamless Integration with Your Existing Systems
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI sales agent connects effortlessly with your current technology stack, enhancing your workflow
              without disruption.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:scale-105 transition-all duration-300 bg-white shadow-lg hover:shadow-xl border-0">
              <CardContent className="p-0 text-center">
                <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">LOS Systems</h3>
                <p className="text-gray-600 mb-4">
                  Direct integration with Encompass, Calyx Point, BytePro, and other leading loan origination systems.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Encompass</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Calyx Point</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">BytePro</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:scale-105 transition-all duration-300 bg-white shadow-lg hover:shadow-xl border-0">
              <CardContent className="p-0 text-center">
                <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">CRM Platforms</h3>
                <p className="text-gray-600 mb-4">
                  Sync with Salesforce, HubSpot, Velocify, and other customer relationship management tools.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Salesforce</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">HubSpot</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Velocify</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:scale-105 transition-all duration-300 bg-white shadow-lg hover:shadow-xl border-0">
              <CardContent className="p-0 text-center">
                <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Document Processing</h3>
                <p className="text-gray-600 mb-4">
                  Automated document collection and verification through eSign platforms and document portals.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">DocuSign</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Adobe Sign</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Blend</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:scale-105 transition-all duration-300 bg-white shadow-lg hover:shadow-xl border-0">
              <CardContent className="p-0 text-center">
                <CreditCard className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Credit Reporting</h3>
                <p className="text-gray-600 mb-4">
                  Real-time credit pulls and monitoring through major credit bureaus and reporting services.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Experian</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Equifax</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">TransUnion</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:scale-105 transition-all duration-300 bg-white shadow-lg hover:shadow-xl border-0">
              <CardContent className="p-0 text-center">
                <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Rate Engines</h3>
                <p className="text-gray-600 mb-4">
                  Live pricing feeds from Optimal Blue, LenderPrice, and other rate engine providers.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Optimal Blue</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">LenderPrice</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">MBS Highway</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:scale-105 transition-all duration-300 bg-white shadow-lg hover:shadow-xl border-0">
              <CardContent className="p-0 text-center">
                <Settings className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Communication Tools</h3>
                <p className="text-gray-600 mb-4">
                  Multi-channel integration with phone systems, email platforms, and messaging services.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Twilio</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">RingCentral</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs">Slack</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Mortgage Sales?</h2>
            <p className="text-xl text-blue-100 mb-8">
              See how our AI agent eliminates compliance risk while maximizing your conversion potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    required
                  />
                  <Input
                    placeholder="Company Email"
                    type="email"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    required
                  />
                  <Input
                    placeholder="Phone Number"
                    type="tel"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    required
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Schedule Demo Now"}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-blue-200">We'll contact you within 24 hours to schedule your demo.</p>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Instant ROI Analysis</h4>
                  <p className="text-blue-200">See your potential savings and revenue increase</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Compliance Assessment</h4>
                  <p className="text-blue-200">Identify and eliminate regulatory risks</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Custom Implementation Plan</h4>
                  <p className="text-blue-200">Tailored integration strategy for your business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
