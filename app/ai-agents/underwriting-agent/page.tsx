import type { Metadata } from "next"
import { ConsultationButton } from "@/components/consultation-button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  FileText,
  Shield,
  Clock,
  Phone,
  Users,
  Target,
  Network,
  PuzzleIcon as PuzzlePiece,
  Calculator,
  ClipboardCheck,
  Brain,
  Database,
  Settings,
  TrendingUp,
  AlertTriangle,
  Award,
  BarChart3,
  FileCheck,
  Workflow,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Underwriting Agent | Automated Mortgage Underwriting | Confer Solutions AI",
  description:
    "Revolutionary mortgage underwriting with institutional memory, real-time AUS integration, and 100% regulatory compliance across all loan programs.",
}

export default function UnderwritingAgentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                The AI Underwriting Agent That Never Makes a Mistake
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Revolutionary mortgage underwriting with institutional memory, real-time AUS integration, and 100%
                regulatory compliance across all loan programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationButton size="lg">Schedule Demo</ConsultationButton>
              </div>
            </div>
            {/* Interactive Underwriting Dashboard Overlay */}
            <div className="relative">
              <div
                className="w-full h-[600px] bg-cover bg-center rounded-xl shadow-2xl relative overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center')",
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/85 via-blue-600/75 to-purple-700/85" />

                {/* Underwriting Dashboard Interface */}
                <div className="absolute inset-4 flex flex-col space-y-3">
                  {/* Header */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-900">AI Underwriting Engine</h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm text-gray-600">Processing 24/7</span>
                      </div>
                    </div>
                  </div>

                  {/* AUS Findings */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Network className="w-4 h-4 mr-2 text-blue-600" />
                      AUS Findings - Real Time
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center p-2 bg-green-50 rounded">
                        <div className="text-xs font-bold text-green-700">LP</div>
                        <div className="text-xs text-green-600">Approve/Eligible</div>
                      </div>
                      <div className="text-center p-2 bg-green-50 rounded">
                        <div className="text-xs font-bold text-green-700">DU</div>
                        <div className="text-xs text-green-600">Approve/Eligible</div>
                      </div>
                      <div className="text-center p-2 bg-yellow-50 rounded">
                        <div className="text-xs font-bold text-yellow-700">GUS</div>
                        <div className="text-xs text-yellow-600">Refer/Eligible</div>
                      </div>
                    </div>
                  </div>

                  {/* Risk Assessment Matrix */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-purple-600" />
                      Risk Assessment Matrix
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <span className="text-xs font-medium">Credit Risk</span>
                        <span className="text-xs text-green-600 font-bold">Low</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <span className="text-xs font-medium">Income Risk</span>
                        <span className="text-xs text-green-600 font-bold">Low</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                        <span className="text-xs font-medium">Asset Risk</span>
                        <span className="text-xs text-yellow-600 font-bold">Moderate</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <span className="text-xs font-medium">Property Risk</span>
                        <span className="text-xs text-green-600 font-bold">Low</span>
                      </div>
                    </div>
                  </div>

                  {/* Document Status */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 flex-1">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-blue-600" />
                      Document Verification Status
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <div className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-600 mr-2" />
                          <span className="text-xs font-medium">1003 Application</span>
                        </div>
                        <span className="text-xs text-green-600 font-bold">Verified</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <div className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-600 mr-2" />
                          <span className="text-xs font-medium">Income Documents</span>
                        </div>
                        <span className="text-xs text-green-600 font-bold">Complete</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 text-yellow-600 mr-2" />
                          <span className="text-xs font-medium">Asset Verification</span>
                        </div>
                        <span className="text-xs text-yellow-600 font-bold">Pending VOD</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                        <div className="flex items-center">
                          <FileText className="w-3 h-3 text-blue-600 mr-2" />
                          <span className="text-xs font-medium">Appraisal</span>
                        </div>
                        <span className="text-xs text-blue-600 font-bold">Ordered</span>
                      </div>
                    </div>
                  </div>

                  {/* Borrower Profile & Decision */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="font-semibold text-gray-800">Decision Status</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-xs font-bold text-green-600">APPROVED</div>
                          <div className="text-xs text-gray-600">Conditional</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs font-bold text-blue-600">DTI: 42%</div>
                          <div className="text-xs text-gray-600">LTV: 80%</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs font-bold text-purple-600">FICO: 745</div>
                          <div className="text-xs text-gray-600">Score</div>
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

      {/* Critical Pain Points Solved */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Eliminating Every Underwriting Challenge</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI agent solves the most critical pain points that slow down mortgage underwriting operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-colors duration-300">
              <CardContent className="p-0">
                <Network className="h-12 w-12 text-white mb-4" />
                <h3 className="font-bold mb-3 text-white">AUS Integration & Interpretation</h3>
                <ul className="text-sm text-white/80 space-y-2">
                  <li>• Real-time LP, DU, GUS integration</li>
                  <li>• Automated findings interpretation</li>
                  <li>• Instant re-submission for improved findings</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition-colors duration-300">
              <CardContent className="p-0">
                <PuzzlePiece className="h-12 w-12 text-white mb-4" />
                <h3 className="font-bold mb-3 text-white">Non-Conforming & Complex Scenarios</h3>
                <ul className="text-sm text-white/80 space-y-2">
                  <li>• Bank statement programs, asset depletion</li>
                  <li>• Self-employed, commission, 1099 analysis</li>
                  <li>• Foreign national and investor expertise</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition-colors duration-300">
              <CardContent className="p-0">
                <Shield className="h-12 w-12 text-white mb-4" />
                <h3 className="font-bold mb-3 text-white">Regulatory Compliance & Certification</h3>
                <ul className="text-sm text-white/80 space-y-2">
                  <li>• QM/Non-QM determination and ATR</li>
                  <li>• HMDA, CRA, and fair lending compliance</li>
                  <li>• Automated certification workflows</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-colors duration-300">
              <CardContent className="p-0">
                <FileCheck className="h-12 w-12 text-white mb-4" />
                <h3 className="font-bold mb-3 text-white">Post-Closing Quality Control</h3>
                <ul className="text-sm text-white/80 space-y-2">
                  <li>• Pre-purchase QC and loan delivery prep</li>
                  <li>• Investor guideline compliance verification</li>
                  <li>• Automated deficiency identification</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 transition-colors duration-300">
              <CardContent className="p-0">
                <Calculator className="h-12 w-12 text-white mb-4" />
                <h3 className="font-bold mb-3 text-white">Income & Asset Verification</h3>
                <ul className="text-sm text-white/80 space-y-2">
                  <li>• VOE, VOD, tax return analysis automation</li>
                  <li>• Bank statement income calculation</li>
                  <li>• Asset sourcing and seasoning verification</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 transition-colors duration-300">
              <CardContent className="p-0">
                <ClipboardCheck className="h-12 w-12 text-white mb-4" />
                <h3 className="font-bold mb-3 text-white">Condition Management</h3>
                <ul className="text-sm text-white/80 space-y-2">
                  <li>• Intelligent condition tracking</li>
                  <li>• Automated document receipt and review</li>
                  <li>• Borrower communication for outstanding items</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Institutional Memory Meets AI Intelligence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced underwriting capabilities that combine decades of institutional knowledge with cutting-edge AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-gradient-to-br from-cyan-100 to-blue-200 border-0">
              <CardContent className="p-0">
                <Brain className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Multi-Program Expertise</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Conventional, FHA, VA, USDA, Non-QM</li>
                  <li>• Jumbo, portfolio, and investor products</li>
                  <li>• Construction and renovation lending</li>
                  <li>• Commercial and investment property</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-100 to-indigo-200 border-0">
              <CardContent className="p-0">
                <TrendingUp className="h-12 w-12 text-purple-600 mb-6" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Advanced Risk Assessment</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Layered risk analysis and compensating factors</li>
                  <li>• Credit event analysis and re-establishment</li>
                  <li>• DTI flex and residual income calculations</li>
                  <li>• Automated risk rating and pricing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-100 to-red-200 border-0">
              <CardContent className="p-0">
                <Database className="h-12 w-12 text-orange-600 mb-6" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Documentation Intelligence</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• OCR and data extraction from any document</li>
                  <li>• Automated stip generation and tracking</li>
                  <li>• Version control and document comparison</li>
                  <li>• Electronic signature workflow integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-emerald-100 to-teal-200 border-0">
              <CardContent className="p-0">
                <Settings className="h-12 w-12 text-emerald-600 mb-6" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Lender-Specific Overlays</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Custom underwriting guidelines implementation</li>
                  <li>• Exception approval workflow automation</li>
                  <li>• Investor-specific requirement mapping</li>
                  <li>• Portfolio retention criteria analysis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Seamless Integration with Your Entire Tech Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with all your existing systems for a unified underwriting workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-cyan-50 to-blue-100 border-0">
              <CardContent className="p-0">
                <Network className="h-12 w-12 text-cyan-600 mb-6" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">LOS & AUS Systems</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Encompass, Calyx, Byte</li>
                  <li>• LP, DU, GUS integration</li>
                  <li>• Real-time data synchronization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-purple-50 to-indigo-100 border-0">
              <CardContent className="p-0">
                <FileText className="h-12 w-12 text-purple-600 mb-6" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Document & Verification</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• eFolder, ImageRight</li>
                  <li>• 4506-C, VOE/VOD providers</li>
                  <li>• Credit reporting and re-score</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-orange-50 to-red-100 border-0">
              <CardContent className="p-0">
                <Workflow className="h-12 w-12 text-orange-600 mb-6" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Closing & Post-Closing</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Closing disclosure preparation</li>
                  <li>• Post-closing audit systems</li>
                  <li>• Investor delivery platforms</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Proven Underwriting Performance</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-lg">
              <div className="text-5xl font-bold text-blue-600 mb-4">98.5%</div>
              <div className="text-gray-700 text-lg">First-time Approval Accuracy</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-lg">
              <div className="text-5xl font-bold text-purple-600 mb-4">75%</div>
              <div className="text-gray-700 text-lg">Faster Underwriting Decisions</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-orange-100 to-red-200 rounded-lg">
              <div className="text-5xl font-bold text-orange-600 mb-4">100%</div>
              <div className="text-gray-700 text-lg">Regulatory Compliance Rate</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-lg">
              <div className="text-5xl font-bold text-emerald-600 mb-4">24/7</div>
              <div className="text-gray-700 text-lg">Decision Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Assessment Matrix */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">AI-Powered Risk Assessment Matrix</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Intelligent risk categorization with automated decision routing and escalation workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600">
              <CardContent className="p-0 text-center">
                <CheckCircle className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-white">Low Risk</h3>
                <p className="text-sm text-white/80 mb-4">Auto-Approve</p>
                <div className="text-xs text-white/70">
                  • FICO 740+
                  <br />• DTI {"<"} 36%
                  <br />• LTV {"<"} 80%
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-yellow-500 to-yellow-600">
              <CardContent className="p-0 text-center">
                <AlertTriangle className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-white">Moderate Risk</h3>
                <p className="text-sm text-white/80 mb-4">Conditional Approval</p>
                <div className="text-xs text-white/70">
                  • FICO 680-739
                  <br />• DTI 36-45%
                  <br />• Standard conditions
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-500 to-orange-600">
              <CardContent className="p-0 text-center">
                <Clock className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-white">High Risk</h3>
                <p className="text-sm text-white/80 mb-4">Manual Review Required</p>
                <div className="text-xs text-white/70">
                  • Complex scenarios
                  <br />• Compensating factors
                  <br />• Senior underwriter review
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-red-500 to-red-600">
              <CardContent className="p-0 text-center">
                <Shield className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="font-bold mb-2 text-white">Unacceptable Risk</h3>
                <p className="text-sm text-white/80 mb-4">Decline</p>
                <div className="text-xs text-white/70">
                  • Policy violations
                  <br />• Fraud indicators
                  <br />• Automatic decline
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Voice Agent Integration */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Coordinated Intelligence Across All Channels
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Underwriting Agent coordinates with Voice Agent to handle all human interactions required during the
              underwriting process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-cyan-100 to-blue-200 border-0">
              <CardContent className="p-0">
                <Phone className="h-12 w-12 text-cyan-600 mb-6" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Borrower Communication</h3>
                <p className="text-gray-700">
                  Status updates, condition requests, document collection, and clarification calls with borrowers
                  throughout the underwriting process.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-purple-100 to-indigo-200 border-0">
              <CardContent className="p-0">
                <Users className="h-12 w-12 text-purple-600 mb-6" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Loan Officer Coordination</h3>
                <p className="text-gray-700">
                  Complex scenario discussion, alternative structuring options, and exception handling coordination with
                  loan officers.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-orange-100 to-red-200 border-0">
              <CardContent className="p-0">
                <BarChart3 className="h-12 w-12 text-orange-600 mb-6" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Management Reporting</h3>
                <p className="text-gray-700">
                  Pipeline analysis, capacity planning, exception reporting, and performance metrics for management
                  oversight.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance & Certification Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Complete Compliance & Certification</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Automated compliance monitoring and certification across all regulatory requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-gradient-to-br from-cyan-50 to-blue-100 border-0">
              <CardContent className="p-0">
                <Award className="h-12 w-12 text-cyan-600 mb-4" />
                <h3 className="font-bold mb-3 text-gray-900">QM/Non-QM Determination</h3>
                <p className="text-sm text-gray-700">Automated ATR analysis and safe harbor compliance verification.</p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-indigo-100 border-0">
              <CardContent className="p-0">
                <FileCheck className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="font-bold mb-3 text-gray-900">TRID Integration</h3>
                <p className="text-sm text-gray-700">
                  CD preparation and tolerance monitoring with automated compliance checks.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-100 border-0">
              <CardContent className="p-0">
                <Shield className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="font-bold mb-3 text-gray-900">Fair Lending</h3>
                <p className="text-sm text-gray-700">
                  Automated pricing review and exception flagging for fair lending compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-emerald-50 to-teal-100 border-0">
              <CardContent className="p-0">
                <Network className="h-12 w-12 text-emerald-600 mb-4" />
                <h3 className="font-bold mb-3 text-gray-900">Investor Compliance</h3>
                <p className="text-sm text-gray-700">
                  Fannie, Freddie, Ginnie, and portfolio investor guideline compliance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Underwriting Operations?</h2>
          <p className="text-xl mb-8 opacity-90">
            See how our AI agent eliminates underwriting bottlenecks while ensuring perfect compliance and
            documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationButton size="lg" variant="secondary">
              Schedule Underwriting Demo
            </ConsultationButton>
            <ConsultationButton
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-purple-600"
            >
              Download Decision Matrix Guide
            </ConsultationButton>
          </div>
        </div>
      </section>
    </div>
  )
}
