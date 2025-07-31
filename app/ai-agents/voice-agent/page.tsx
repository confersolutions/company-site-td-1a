import type { Metadata } from "next"
import { ConsultationButton } from "@/components/consultation-button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Users, Zap, Brain, Target, TrendingUp, Shield, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Voice Agent | Revolutionary AI Voice Coordination | Confer Solutions AI",
  description:
    "The paradigm shift: When AI makes humans take action. Revolutionary conversational AI that directs human workflows.",
}

export default function VoiceAgentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-indigo-900 dark:to-purple-900 text-black dark:text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute animate-spin-slow opacity-5 w-80 h-80 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 blur-3xl"
          style={{ top: "20%", left: "20%" }}
        />
        <div
          className="absolute animate-pulse opacity-5 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-3xl"
          style={{ top: "60%", right: "10%" }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-indigo-400 dark:to-purple-500">
                Voice Agent
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Revolutionary conversational AI for customer interactions and human coordination. The paradigm shift:
                When AI makes humans take action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationButton size="lg" source="demo">Schedule Demo</ConsultationButton>
              </div>
            </div>
            {/* Interactive Voice Agent Dashboard */}
            <div className="relative">
              <div
                                  className="w-full h-[600px] bg-cover bg-center rounded-xl shadow-2xl relative overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center')",
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/85 via-purple-800/75 to-indigo-800/85" />

                {/* Voice Agent Dashboard Interface */}
                <div className="absolute inset-4 flex flex-col">
                  {/* Header */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 mb-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-900">AI Voice Coordination Engine</h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm text-gray-600">8 Active Calls</span>
                      </div>
                    </div>
                  </div>

                  {/* Active Communications */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 mb-3">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-indigo-600" />
                      Active Communications
                    </h4>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="text-center p-2 bg-blue-100 rounded">
                        <div className="text-sm font-bold text-blue-800">12</div>
                        <div className="text-xs text-blue-600">Borrower Calls</div>
                      </div>
                      <div className="text-center p-2 bg-green-100 rounded">
                        <div className="text-sm font-bold text-green-800">8</div>
                        <div className="text-xs text-green-600">Appraiser Coord</div>
                      </div>
                      <div className="text-center p-2 bg-purple-100 rounded">
                        <div className="text-sm font-bold text-purple-800">5</div>
                        <div className="text-xs text-purple-600">Title Companies</div>
                      </div>
                      <div className="text-center p-2 bg-orange-100 rounded">
                        <div className="text-sm font-bold text-orange-800">3</div>
                        <div className="text-xs text-orange-600">Vendor Follow-up</div>
                      </div>
                    </div>
                  </div>

                  {/* Conversation Intelligence */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 mb-3 flex-1">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Brain className="w-4 h-4 mr-2 text-purple-600" />
                      Conversation Intelligence
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <div className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-600 mr-2" />
                          <span className="text-xs font-medium">Appraisal Rush Request</span>
                        </div>
                        <span className="text-xs text-green-600 font-bold">Confirmed</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                        <div className="flex items-center">
                          <Phone className="w-3 h-3 text-blue-600 mr-2" />
                          <span className="text-xs font-medium">Borrower Document Follow-up</span>
                        </div>
                        <span className="text-xs text-blue-600 font-bold">In Progress</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                        <div className="flex items-center">
                          <Users className="w-3 h-3 text-yellow-600 mr-2" />
                          <span className="text-xs font-medium">Title Commitment Request</span>
                        </div>
                        <span className="text-xs text-yellow-600 font-bold">Scheduled</span>
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Target className="w-4 h-4 text-indigo-600 mr-2" />
                        <span className="font-semibold text-gray-800">Performance</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-xs font-bold text-green-600">95%</div>
                          <div className="text-xs text-gray-600">Success Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs font-bold text-blue-600">3.2min</div>
                          <div className="text-xs text-gray-600">Avg Duration</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs font-bold text-purple-600">24/7</div>
                          <div className="text-xs text-gray-600">Available</div>
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

      {/* Revolutionary Concept */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Paradigm Shift: When AI Makes Humans Take Action
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              For decades, humans have directed machines and software to execute tasks. Voice Agent represents a
              fundamental reversal—AI that can direct human action to achieve specific objectives. This isn't just
              automation; it's intelligent orchestration of human workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Brain className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-xl font-bold mb-4">Intelligent Direction</h3>
              <p className="opacity-80">
                AI that understands context, priorities, and human capabilities to direct optimal actions
              </p>
            </div>
            <div className="text-center">
              <Users className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-xl font-bold mb-4">Human Orchestration</h3>
              <p className="opacity-80">
                Coordinate complex workflows requiring human participation without human oversight
              </p>
            </div>
            <div className="text-center">
              <Target className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-xl font-bold mb-4">Objective Achievement</h3>
              <p className="opacity-80">
                Focus on outcomes, not processes—AI determines the best path to achieve goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Function */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-indigo-50 dark:bg-indigo-950/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Conversational AI for Customer Interactions & Human Coordination
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transform how your organization communicates with customers and coordinates internal workflows through
              natural language conversations that drive action.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0 text-center">
                <Phone className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Natural Conversations</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Human-like phone conversations with advanced language understanding
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0 text-center">
                <Zap className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Outbound Campaigns</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Automated outbound call campaigns with intelligent follow-up sequences
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0 text-center">
                <Target className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Problem Resolution</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Real-time problem resolution with context-aware decision making
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0 text-center">
                <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Human Coordination</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Direct human task coordination and multi-party conference facilitation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mortgage-Specific Applications */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mortgage-Specific Applications</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Voice Agent transforms mortgage operations by intelligently coordinating all the human touchpoints
              required in complex loan workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <Target className="h-12 w-12 text-indigo-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Appraiser Coordination</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Calls appraisers to expedite reports, clarify property details, or request rush processing.
                  Understands appraisal timelines and can negotiate delivery dates.
                </p>
                <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg">
                  <p className="text-sm font-medium">
                    "Hi John, this is regarding the appraisal for 123 Main Street. The borrower's rate lock expires
                    Friday. Can we expedite this for Wednesday delivery?"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <Shield className="h-12 w-12 text-indigo-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Title Company Management</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Coordinates with title companies for document updates and closing schedules. Tracks title work
                  progress and resolves title issues proactively.
                </p>
                <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg">
                  <p className="text-sm font-medium">
                    "We need the title commitment by tomorrow for underwriting. Are there any outstanding requirements
                    we should address?"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <Users className="h-12 w-12 text-indigo-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Borrower Engagement</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Conducts loan interviews, collects verbal confirmations, and guides borrowers through complex
                  processes with patience and expertise.
                </p>
                <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg">
                  <p className="text-sm font-medium">
                    "I'm calling to review your loan application. I have a few questions about your employment history
                    to ensure accuracy."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <TrendingUp className="h-12 w-12 text-indigo-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Vendor Management</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Follows up with employers, insurance companies, and other third-party vendors to ensure timely
                  completion of required verifications.
                </p>
                <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg">
                  <p className="text-sm font-medium">
                    "This is regarding the employment verification for Sarah Johnson. Can you confirm her current salary
                    and employment status?"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transformational Impact */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-indigo-50 dark:bg-indigo-950/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transformational Impact</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12">
              Voice Agent transforms AI from a reactive tool into a proactive coordinator, enabling autonomous systems
              to manage complex workflows that require human participation—without human oversight.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">24/7 Availability</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Never miss a critical communication. Voice Agent works around the clock to coordinate time-sensitive
                mortgage workflows.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">Context Intelligence</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Understands loan context, borrower situations, and vendor relationships to make intelligent coordination
                decisions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">Outcome Focused</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Focuses on achieving specific outcomes rather than following rigid scripts, adapting approach based on
                conversation dynamics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Voice Agent Performance</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-gray-500 dark:text-gray-400">Call Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">3.2min</div>
              <div className="text-gray-500 dark:text-gray-400">Average Call Duration</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">80%</div>
              <div className="text-gray-500 dark:text-gray-400">First Call Resolution</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-gray-500 dark:text-gray-400">Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-indigo-50 dark:bg-indigo-950/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Seamless Agent Integration</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Voice Agent works seamlessly with all other AI agents to create a complete autonomous mortgage ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <Zap className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Sales Agent</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Warm outbound calls to qualified prospects</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <Target className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Processing Agent</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Borrower follow-up and document collection</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <Brain className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Underwriting Agent</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Complex scenario coordination</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <Shield className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Post-Closing Agent</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Investor and vendor communication</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-indigo-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Future of AI Coordination?</h2>
          <p className="text-xl mb-8 opacity-90">
            See how Voice Agent can transform your mortgage operations through intelligent human coordination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationButton size="lg" variant="secondary">
              Schedule Voice Demo
            </ConsultationButton>
          </div>
        </div>
      </section>
    </div>
  )
}
