"use client"

import type React from "react"

import { ConsultationButton } from "@/components/consultation-button"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  CheckCircle,
  FileText,
  Calendar,
  Shield,
  Phone,
  Users,
  Clock,
  Calculator,
  AlertTriangle,
  DollarSign,
  Building,
  Lock,
  ArrowRight,
  Eye,
  Network,
  FileCheck,
  CreditCard,
  Home,
  Briefcase,
} from "lucide-react"
import { useState } from "react"

export default function ClosingAgentClientPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                The AI Closing Agent That Prevents Every Closing Disaster
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Eliminate wire fraud, tolerance violations, and closing delays with AI that coordinates every detail
                across all parties while ensuring perfect compliance
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationButton size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Schedule Demo
                </ConsultationButton>
                <ConsultationButton
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  View Closing Checklist
                </ConsultationButton>
              </div>
            </div>
            {/* Interactive Closing Coordination Dashboard */}
            <div className="relative">
              <div
                className="w-full h-[500px] bg-cover bg-center rounded-xl shadow-2xl relative overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&crop=center')",
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/75 to-teal-800/85" />

                {/* Closing Coordination Dashboard */}
                <div className="absolute inset-4 flex flex-col">
                  {/* Header */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 mb-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-900">AI Closing Coordinator</h3>
                      <div className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-600">Wire Fraud Protected</span>
                      </div>
                    </div>
                  </div>

                  {/* TRID Compliance Monitor */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 mb-3">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Calculator className="w-4 h-4 mr-2 text-orange-600" />
                      TRID Compliance Monitor
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="text-center p-2 bg-green-100 rounded">
                        <div className="text-xs font-bold text-green-800">CD Delivered</div>
                        <div className="text-xs text-green-600">3 Days Ago</div>
                      </div>
                      <div className="text-center p-2 bg-green-100 rounded">
                        <div className="text-xs font-bold text-green-800">Tolerance</div>
                        <div className="text-xs text-green-600">Compliant</div>
                      </div>
                      <div className="text-center p-2 bg-green-100 rounded">
                        <div className="text-xs font-bold text-green-800">Ready</div>
                        <div className="text-xs text-green-600">To Close</div>
                      </div>
                    </div>
                  </div>

                  {/* Multi-Party Coordination */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 mb-3 flex-1">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Users className="w-4 h-4 mr-2 text-purple-600" />
                      Party Coordination Status
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <div className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-600 mr-2" />
                          <span className="text-xs font-medium">Lender</span>
                        </div>
                        <span className="text-xs text-green-600 font-bold">Ready</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <div className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-600 mr-2" />
                          <span className="text-xs font-medium">Title Company</span>
                        </div>
                        <span className="text-xs text-green-600 font-bold">Confirmed</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <div className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-600 mr-2" />
                          <span className="text-xs font-medium">Borrower</span>
                        </div>
                        <span className="text-xs text-green-600 font-bold">Scheduled</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                        <div className="flex items-center">
                          <Phone className="w-3 h-3 text-blue-600 mr-2" />
                          <span className="text-xs font-medium">Realtor</span>
                        </div>
                        <span className="text-xs text-blue-600 font-bold">Coordinating</span>
                      </div>
                    </div>
                  </div>

                  {/* Wire Security Status */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Lock className="w-4 h-4 text-red-600 mr-2" />
                        <span className="font-semibold text-gray-800">Wire Security</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-xs font-bold text-green-600">Verified</div>
                          <div className="text-xs text-gray-600">Instructions</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs font-bold text-blue-600">Encrypted</div>
                          <div className="text-xs text-gray-600">Transfer</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs font-bold text-purple-600">Zero</div>
                          <div className="text-xs text-gray-600">Fraud Risk</div>
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

      {/* Critical Closing Disasters Prevented */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Every Closing Nightmare, Solved</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our AI agent prevents every disaster scenario that keeps closing coordinators awake at night
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-lg mr-4">
                    <Shield className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">Wire Fraud Prevention</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Multi-factor wire instruction verification
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Real-time fraud pattern detection
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Encrypted communication protocols
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Automated callback verification systems
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg mr-4">
                    <Calculator className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold">TRID Tolerance Violations</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Real-time CD comparison and tolerance monitoring
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Automatic cure calculation and documentation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Pre-closing tolerance violation prevention
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Automated fee variance analysis
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg mr-4">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Closing Delays & Coordination</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Multi-party scheduling optimization
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Real-time document status tracking
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Automated reminder and escalation systems
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Critical path analysis and bottleneck identification
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg mr-4">
                    <FileCheck className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">Document Preparation Errors</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Automated CD preparation from loan data
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Settlement statement accuracy verification
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Recording document preparation and review
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Power of attorney and notarization coordination
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg mr-4">
                    <CreditCard className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold">Funding & Settlement Issues</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Automated funding condition verification
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Wire transfer coordination and confirmation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Settlement statement balancing and audit
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Same-day funding optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-teal-100 dark:bg-teal-900/20 rounded-lg mr-4">
                    <Building className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold">Recording & Post-Closing</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Automated recording package preparation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    County recording status tracking
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Loan delivery and investor compliance
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Title policy and final document distribution
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Coordination Intelligence */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Orchestrating Perfect Closings Across All Parties</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Seamless coordination between lenders, title companies, settlement agents, realtors, and borrowers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Briefcase className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Settlement Agent Integration</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-time HUD-1/CD synchronization</li>
                  <li>• Title commitment and exception resolution</li>
                  <li>• Notary scheduling and mobile coordination</li>
                  <li>• Trust account management and reconciliation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Lender Communication</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Funding condition clearing automation</li>
                  <li>• CD changes and re-disclosure management</li>
                  <li>• Loan document preparation and delivery</li>
                  <li>• Quality control and audit trail maintenance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Realtor & Borrower Management</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Closing timeline communication</li>
                  <li>• Document signing appointment coordination</li>
                  <li>• Key and possession transfer scheduling</li>
                  <li>• Final walkthrough coordination</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="p-4 bg-orange-100 dark:bg-orange-900/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Network className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Vendor Coordination</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Appraisal, inspection, and survey management</li>
                  <li>• HOA and municipal lien clearance</li>
                  <li>• Utility transfer and account setup</li>
                  <li>• Insurance binder and policy coordination</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TRID Compliance Mastery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">TRID Compliance Without the Stress</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Automated tolerance monitoring, cure calculations, and re-disclosure management
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Tolerance Management</h3>
              <div className="space-y-6">
                <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">Zero Tolerance Items</h4>
                  <p className="text-sm text-muted-foreground">
                    Automated monitoring of borrower-paid fees with instant violation alerts
                  </p>
                </div>
                <div className="p-6 bg-orange-50 dark:bg-orange-950/20 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-700 dark:text-orange-400 mb-2">10% Tolerance</h4>
                  <p className="text-sm text-muted-foreground">
                    Real-time tracking of lender-paid services with automatic cure calculations
                  </p>
                </div>
                <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">Unlimited Tolerance</h4>
                  <p className="text-sm text-muted-foreground">
                    Proper categorization and documentation of unlimited tolerance items
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8">Critical Timing Requirements</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg mr-4">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">3-Day Rule</h4>
                    <p className="text-sm text-muted-foreground">Automated CD delivery and acknowledgment tracking</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg mr-4">
                    <AlertTriangle className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">7-Day Rule</h4>
                    <p className="text-sm text-muted-foreground">
                      APR threshold monitoring and re-disclosure automation
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg mr-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Consummation Rules</h4>
                    <p className="text-sm text-muted-foreground">
                      Closing date coordination and compliance verification
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wire Fraud Protection Protocol */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Military-Grade Wire Fraud Prevention</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Multi-layer security protocols that have prevented 100% of wire fraud attempts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Lock className="h-8 w-8 text-red-600 mr-3" />
                  <h3 className="font-bold">Identity Verification</h3>
                </div>
                <p className="text-sm text-muted-foreground">Multi-factor authentication for all wire instructions</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Phone className="h-8 w-8 text-orange-600 mr-3" />
                  <h3 className="font-bold">Callback Protocols</h3>
                </div>
                <p className="text-sm text-muted-foreground">Automated verification calls using known phone numbers</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-yellow-600 mr-3" />
                  <h3 className="font-bold">Change Detection</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Real-time monitoring of any wire instruction modifications
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="font-bold">Encryption Standards</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  End-to-end encrypted communication for all financial data
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <FileText className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="font-bold">Audit Trails</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Complete documentation of all wire instruction communications
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Building className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="font-bold">Insurance Integration</h3>
                </div>
                <p className="text-sm text-muted-foreground">Coordination with title insurance wire fraud coverage</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Critical Path Management */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Never Miss Another Closing Date</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Intelligent timeline optimization with automated milestone tracking and issue resolution
            </p>
          </div>

          <div className="grid md:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                30
              </div>
              <h3 className="font-bold mb-2">30-Day Pipeline</h3>
              <p className="text-xs text-muted-foreground">Comprehensive closing preparation checklist</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                14
              </div>
              <h3 className="font-bold mb-2">14-Day Countdown</h3>
              <p className="text-xs text-muted-foreground">Critical document and coordination milestones</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                7
              </div>
              <h3 className="font-bold mb-2">7-Day Final</h3>
              <p className="text-xs text-muted-foreground">Last-minute issue resolution and preparation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                3
              </div>
              <h3 className="font-bold mb-2">T-Minus 3</h3>
              <p className="text-xs text-muted-foreground">Final CD delivery and borrower preparation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                0
              </div>
              <h3 className="font-bold mb-2">Closing Day</h3>
              <p className="text-xs text-muted-foreground">Real-time coordination and issue resolution</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                +
              </div>
              <h3 className="font-bold mb-2">Post-Closing</h3>
              <p className="text-xs text-muted-foreground">Recording, delivery, and compliance completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Closing Performance Excellence</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Industry-leading metrics that prove our AI agent eliminates closing disasters
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">99.8%</div>
              <div className="opacity-90">On-time closing rate</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">Zero</div>
              <div className="opacity-90">Wire fraud incidents</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="opacity-90">Faster document preparation</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="opacity-90">TRID compliance rate</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="opacity-90">Real-time coordination</div>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">48hrs</div>
              <div className="opacity-90">Average issue resolution</div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Ecosystem Integration</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Seamless connectivity with every platform in your closing workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold mb-4 flex items-center">
                  <Network className="h-5 w-5 mr-2 text-blue-600" />
                  LOS Systems
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Encompass by ICE Mortgage Technology</li>
                  <li>• Calyx Point & Path</li>
                  <li>• BytePro & Byte Software</li>
                  <li>• Mortgage Builder</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold mb-4 flex items-center">
                  <Building className="h-5 w-5 mr-2 text-green-600" />
                  Settlement Platforms
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• RamQuest</li>
                  <li>• SoftPro</li>
                  <li>• ClosingCorp</li>
                  <li>• ResWare</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-purple-600" />
                  Document Management
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• eFolder</li>
                  <li>• ImageRight</li>
                  <li>• DocuTech</li>
                  <li>• Mortgage Cadence</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-orange-600" />
                  Wire Transfer Platforms
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• CertifID</li>
                  <li>• SecureWire</li>
                  <li>• WireGuard</li>
                  <li>• Bank wire systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold mb-4 flex items-center">
                  <Home className="h-5 w-5 mr-2 text-teal-600" />
                  County Recording
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Simplifile</li>
                  <li>• CSC</li>
                  <li>• Direct county systems</li>
                  <li>• Recording service providers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-bold mb-4 flex items-center">
                  <FileCheck className="h-5 w-5 mr-2 text-red-600" />
                  eSign Platforms
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• DocuSign</li>
                  <li>• Adobe Sign</li>
                  <li>• NotaryCam</li>
                  <li>• Pavaso</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Close Without Stress?</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              See how our AI agent eliminates closing disasters while ensuring perfect coordination and compliance
              across all parties
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                  <span>Zero wire fraud risk with military-grade security</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                  <span>100% TRID compliance with automated monitoring</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                  <span>99.8% on-time closing rate with intelligent coordination</span>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-white text-gray-900">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 text-center">Schedule Your Demo</h3>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input placeholder="First Name" className="bg-gray-50" required />
                      <Input placeholder="Last Name" className="bg-gray-50" required />
                    </div>
                    <Input placeholder="Email Address" type="email" className="bg-gray-50" required />
                    <Input placeholder="Phone Number" type="tel" className="bg-gray-50" required />
                    <Input placeholder="Monthly Closing Volume" className="bg-gray-50" />
                    <Textarea placeholder="What's your biggest closing challenge?" className="bg-gray-50" rows={3} />
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? "Submitting..." : "Schedule Demo"}
                      {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Thank You!</h3>
                    <p className="text-gray-600">We'll contact you within 24 hours to schedule your demo.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
