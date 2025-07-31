import type { Metadata } from "next"
import { ConsultationButton } from "@/components/consultation-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  FileText,
  Shield,
  Clock,
  Phone,
  Users,
  Target,
  Zap,
  TrendingUp,
  BarChart3,
  Activity,
  Workflow,
  Database,
  Brain,
  Sparkles,
  ArrowRight,
  Star,
  Rocket,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Processing Agent | Automated Loan Processing | Confer Solutions AI",
  description:
    "Process loans with the precision of a senior processor while maintaining complete audit trails and regulatory compliance.",
}

export default function ProcessingAgentPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 text-slate-900 dark:text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-40 right-1/3 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 px-4 py-2">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI Processing Revolution
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Lightning-Fast Loan Processing
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Transform your loan processing timeline from <span className="text-red-500 font-bold">30 days</span> to
                just <span className="text-green-500 font-bold">7 days</span> with our AI-powered Processing Agent that
                works with the precision of a senior processor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <ConsultationButton
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 shadow-lg shadow-cyan-500/25"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Schedule Demo
                </ConsultationButton>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl border border-cyan-200 dark:border-cyan-800 shadow-lg shadow-cyan-500/10">
                  <div className="text-2xl font-bold text-cyan-600">75%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Faster Processing</div>
                </div>
                <div className="text-center p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl border border-purple-200 dark:border-purple-800 shadow-lg shadow-purple-500/10">
                  <div className="text-2xl font-bold text-purple-600">99.8%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Accuracy Rate</div>
                </div>
                <div className="text-center p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl border border-green-200 dark:border-green-800 shadow-lg shadow-green-500/10">
                  <div className="text-2xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Processing</div>
                </div>
              </div>
            </div>

            {/* Interactive Processing Dashboard */}
            <div className="relative z-10">
              <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-blue-200 dark:border-blue-800 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm">
                {/* Dashboard Content */}
                <div className="absolute inset-4 flex flex-col">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-lg p-4 mb-4 border border-cyan-200 dark:border-cyan-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                          <Brain className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 dark:text-slate-100">AI Processing Engine</h3>
                          <p className="text-xs text-slate-600 dark:text-slate-400">Real-time loan processing</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm text-green-600 font-medium">Active</span>
                      </div>
                    </div>
                  </div>

                  {/* Processing Timeline */}
                  <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg p-4 mb-4 border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-purple-600" />
                      7-Day Processing Timeline
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                            ✓
                          </div>
                          <span className="text-sm text-slate-700 dark:text-slate-300">Application Received</span>
                        </div>
                        <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800">
                          Complete
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                            3
                          </div>
                          <span className="text-sm text-slate-700 dark:text-slate-300">Document Processing</span>
                        </div>
                        <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                          In Progress
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                            7
                          </div>
                          <span className="text-sm text-slate-700 dark:text-slate-300">Underwriting Ready</span>
                        </div>
                        <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800">
                          Scheduled
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Document Status Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-lg p-3 border border-green-200 dark:border-green-800">
                      <div className="flex items-center justify-between mb-2">
                        <FileText className="w-4 h-4 text-green-600" />
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="text-sm font-medium text-slate-900 dark:text-slate-100">Income Docs</div>
                      <div className="text-xs text-green-600">Verified</div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-lg p-3 border border-yellow-200 dark:border-yellow-800">
                      <div className="flex items-center justify-between mb-2">
                        <Database className="w-4 h-4 text-yellow-600" />
                        <Activity className="w-4 h-4 text-yellow-600" />
                      </div>
                      <div className="text-sm font-medium text-slate-900 dark:text-slate-100">Assets</div>
                      <div className="text-xs text-yellow-600">Processing</div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg p-4 border border-indigo-200 dark:border-indigo-800 flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <BarChart3 className="w-4 h-4 text-indigo-600 mr-2" />
                        <span className="font-semibold text-slate-900 dark:text-slate-100">Live Performance</span>
                      </div>
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-cyan-600">85%</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">Efficiency</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">12</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">Active Loans</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">2.3d</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">Avg Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Functions */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-0 px-4 py-2 mb-6">
              <Workflow className="w-4 h-4 mr-2" />
              AI-Powered Processing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Complete Loan Processing Automation
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Our Processing Agent automates every step of the loan process, from document collection to underwriting
              package preparation with unprecedented speed and accuracy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-cyan-200 dark:border-cyan-800 hover:border-cyan-400 dark:hover:border-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold mb-3 text-slate-900 dark:text-slate-100 text-lg">Smart Document Collection</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Automated document collection and verification with intelligent follow-up and real-time status
                  tracking
                </p>
                <div className="mt-4 flex items-center justify-center text-cyan-600 group-hover:text-cyan-700 transition-colors">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="group p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold mb-3 text-slate-900 dark:text-slate-100 text-lg">Income Validation</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Comprehensive income, asset, and employment validation with advanced fraud detection algorithms
                </p>
                <div className="mt-4 flex items-center justify-center text-purple-600 group-hover:text-purple-700 transition-colors">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="group p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold mb-3 text-slate-900 dark:text-slate-100 text-lg">Condition Clearing</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Automated condition clearing with intelligent exception handling and priority-based workflows
                </p>
                <div className="mt-4 flex items-center justify-center text-green-600 group-hover:text-green-700 transition-colors">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="group p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-orange-200 dark:border-orange-800 hover:border-orange-400 dark:hover:border-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold mb-3 text-slate-900 dark:text-slate-100 text-lg">Vendor Coordination</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Seamless third-party vendor coordination with automated communication and status monitoring
                </p>
                <div className="mt-4 flex items-center justify-center text-orange-600 group-hover:text-orange-700 transition-colors">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 px-4 py-2 mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Senior Processor Precision
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                AI Speed Meets Human Expertise
              </h2>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-slate-900 dark:text-slate-100 text-xl">24/7 Processing Power</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Never stop processing loans. Our AI works around the clock, ensuring faster turn times, improved
                      borrower satisfaction, and continuous productivity that never sleeps.
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-slate-900 dark:text-slate-100 text-xl">Complete Audit Trails</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Every decision and action is documented with detailed reasoning, creating comprehensive audit
                      trails for compliance, quality assurance, and regulatory requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-slate-900 dark:text-slate-100 text-xl">
                      Intelligent Exception Handling
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Advanced escalation workflows ensure complex scenarios are handled appropriately while maintaining
                      processing momentum and decision quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200 dark:border-blue-800 shadow-lg shadow-blue-500/10">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100 flex items-center">
                <Workflow className="w-6 h-6 mr-3 text-cyan-600" />
                Processing Capabilities
              </h3>
              <div className="space-y-4">
                {[
                  "Automated document stacking and organization",
                  "Income calculation and verification",
                  "Asset sourcing and seasoning analysis",
                  "Employment verification coordination",
                  "Appraisal review and condition management",
                  "Title and insurance coordination",
                  "Underwriting package preparation",
                ].map((capability, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
                      {capability}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Agent Integration */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 px-4 py-2 mb-6">
              <Phone className="w-4 h-4 mr-2" />
              Seamless Integration
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Voice Agent Integration
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Processing Agent coordinates with Voice Agent to handle all human interactions required during the loan
              processing workflow, maintaining the personal touch while automating the process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">Borrower Follow-Up</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Voice Agent calls borrowers for missing documents, clarifications, and status updates, maintaining
                  personal touch throughout the entire processing journey.
                </p>
              </CardContent>
            </Card>

            <Card className="group p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">Employer Coordination</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Automated follow-up with employers for VOE completion, ensuring timely verification without manual
                  intervention or delays.
                </p>
              </CardContent>
            </Card>

            <Card className="group p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100">
                  Real Estate Agent Communication
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Coordinate with real estate agents for required disclosures, contract amendments, and closing timeline
                  updates seamlessly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/50 dark:to-blue-900/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-4 py-2 mb-6">
              <BarChart3 className="w-4 h-4 mr-2" />
              Proven Results
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Processing Performance That Delivers
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/20">
                <div className="text-3xl font-bold text-white">75%</div>
              </div>
              <div className="text-slate-700 dark:text-slate-300 font-medium">Faster Processing Time</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">vs Traditional Methods</div>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/20">
                <div className="text-3xl font-bold text-white">99.8%</div>
              </div>
              <div className="text-slate-700 dark:text-slate-300 font-medium">Accuracy Rate</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">Error-Free Processing</div>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/20">
                <div className="text-3xl font-bold text-white">24/7</div>
              </div>
              <div className="text-slate-700 dark:text-slate-300 font-medium">Processing Availability</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">Never Stops Working</div>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/20">
                <div className="text-3xl font-bold text-white">100%</div>
              </div>
              <div className="text-slate-700 dark:text-slate-300 font-medium">Audit Trail Compliance</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">Full Documentation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section with Form */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-600/90 via-blue-600/90 to-purple-600/90"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                Transform Your Processing Today
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Ready to{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Revolutionize
                </span>{" "}
                Your Processing?
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Join the AI revolution and transform your loan processing operations with unprecedented speed, accuracy,
                and efficiency. See results in just 7 days.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center space-x-3 text-white/90">
                  <div className="flex -space-x-1">
                    <Star className="w-4 h-4 text-yellow-300 fill-current" />
                    <Star className="w-4 h-4 text-yellow-300 fill-current" />
                    <Star className="w-4 h-4 text-yellow-300 fill-current" />
                    <Star className="w-4 h-4 text-yellow-300 fill-current" />
                    <Star className="w-4 h-4 text-yellow-300 fill-current" />
                  </div>
                  <span className="font-medium text-sm">5-Star Processing</span>
                </div>
                <div className="flex items-center space-x-3 text-white/90">
                  <Shield className="w-4 h-4 text-green-300" />
                  <span className="font-medium text-sm">Bank-Grade Security</span>
                </div>
                <div className="flex items-center space-x-3 text-white/90">
                  <Zap className="w-4 h-4 text-yellow-300" />
                  <span className="font-medium text-sm">Instant Setup</span>
                </div>
              </div>

              {/* Additional Info */}
              <div className="text-white/80 text-sm">
                <p>✓ No setup fees • ✓ 30-day money-back guarantee • ✓ 24/7 support included</p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl shadow-black/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Get Your Processing Demo</h3>
                <p className="text-slate-600">See how AI can transform your loan processing in just 15 minutes</p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="w-full border-slate-300 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="w-full border-slate-300 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Work Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    className="w-full border-slate-300 focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                    Company
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your Company"
                    className="w-full border-slate-300 focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full border-slate-300 focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label htmlFor="loanVolume" className="block text-sm font-medium text-slate-700 mb-1">
                    Monthly Loan Volume
                  </label>
                  <select
                    id="loanVolume"
                    className="w-full border border-slate-300 rounded-md px-3 py-2 focus:border-cyan-500 focus:ring-cyan-500 bg-white"
                  >
                    <option value="">Select volume</option>
                    <option value="1-10">1-10 loans</option>
                    <option value="11-50">11-50 loans</option>
                    <option value="51-100">51-100 loans</option>
                    <option value="100+">100+ loans</option>
                  </select>
                </div>

                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 shadow-lg shadow-cyan-500/25 py-3 text-lg font-semibold">
                  <Brain className="w-5 h-5 mr-2" />
                  Schedule My Processing Demo
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  By submitting this form, you agree to our{" "}
                                  <Link href="/about/privacy" className="text-cyan-600 hover:underline">
                  Privacy Policy
                </Link>{" "}
                  and{" "}
                                  <Link href="/about/terms" className="text-cyan-600 hover:underline">
                  Terms of Service
                </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
