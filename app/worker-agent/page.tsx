import type { Metadata } from "next"
import { ConsultationButton } from "@/components/consultation-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Zap, Target, Clock, Brain, FileText, TrendingUp, Shield, BarChart3, Settings } from "lucide-react"

export const metadata: Metadata = {
  title: "Worker Agent | Task Automation & Workflow Optimization | Confer Solutions AI",
  description:
    "Handle any repetitive task that requires instant access to institutional knowledge, freeing human staff to focus on high-value activities.",
}

export default function WorkerAgentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
                Worker Agent
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Handle any repetitive task that requires instant access to institutional knowledge, freeing human staff
                to focus on high-value activities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationButton size="lg">Schedule Demo</ConsultationButton>
                <ConsultationButton variant="outline" size="lg">
                  View Task Library
                </ConsultationButton>
              </div>
            </div>
            {/* Interactive Worker Agent Dashboard */}
            <div className="relative">
              <div
                className="w-full h-[500px] bg-cover bg-center rounded-xl shadow-2xl relative overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center')",
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-blue-800/75 to-fintech-800/85" />

                {/* Worker Agent Dashboard Interface */}
                <div className="absolute inset-4 flex flex-col">
                  {/* Header */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 mb-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-900">AI Task Automation Engine</h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm text-gray-600">247 Tasks Active</span>
                      </div>
                    </div>
                  </div>

                  {/* Task Categories */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 mb-3">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-fintech-600" />
                      Active Task Categories
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-2 bg-blue-100 rounded">
                        <div className="text-sm font-bold text-blue-800">89</div>
                        <div className="text-xs text-blue-600">Data Entry Tasks</div>
                      </div>
                      <div className="text-center p-2 bg-green-100 rounded">
                        <div className="text-sm font-bold text-green-800">45</div>
                        <div className="text-xs text-green-600">Document Processing</div>
                      </div>
                      <div className="text-center p-2 bg-purple-100 rounded">
                        <div className="text-sm font-bold text-purple-800">67</div>
                        <div className="text-xs text-purple-600">System Sync</div>
                      </div>
                      <div className="text-center p-2 bg-orange-100 rounded">
                        <div className="text-sm font-bold text-orange-800">46</div>
                        <div className="text-xs text-orange-600">Report Generation</div>
                      </div>
                    </div>
                  </div>

                  {/* Workflow Optimization */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 mb-3 flex-1">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-purple-600" />
                      Workflow Optimization
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <div className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-600 mr-2" />
                          <span className="text-xs font-medium">LOS Data Synchronization</span>
                        </div>
                        <span className="text-xs text-green-600 font-bold">95% Faster</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                        <div className="flex items-center">
                          <FileText className="w-3 h-3 text-blue-600 mr-2" />
                          <span className="text-xs font-medium">Document Standardization</span>
                        </div>
                        <span className="text-xs text-blue-600 font-bold">100% Consistent</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-purple-50 rounded">
                        <div className="flex items-center">
                          <BarChart3 className="w-3 h-3 text-purple-600 mr-2" />
                          <span className="text-xs font-medium">Performance Analytics</span>
                        </div>
                        <span className="text-xs text-purple-600 font-bold">Real-time</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-orange-50 rounded">
                        <div className="flex items-center">
                          <Settings className="w-3 h-3 text-orange-600 mr-2" />
                          <span className="text-xs font-medium">System Maintenance</span>
                        </div>
                        <span className="text-xs text-orange-600 font-bold">Automated</span>
                      </div>
                    </div>
                  </div>

                  {/* Efficiency Metrics */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 text-fintech-600 mr-2" />
                        <span className="font-semibold text-gray-800">Efficiency Gains</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-xs font-bold text-green-600">99.9%</div>
                          <div className="text-xs text-gray-600">Accuracy</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs font-bold text-blue-600">90%</div>
                          <div className="text-xs text-gray-600">Time Saved</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs font-bold text-purple-600">24/7</div>
                          <div className="text-xs text-gray-600">Operations</div>
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

      {/* Core Function */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Task Automation & Workflow Optimization</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transform your operations with AI that handles repetitive tasks with the precision and knowledge of your
              most experienced staff members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Zap className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Task Automation</h3>
                <p className="text-sm text-muted-foreground">
                  Automate repetitive tasks with intelligent decision-making capabilities
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Brain className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Knowledge Retrieval</h3>
                <p className="text-sm text-muted-foreground">
                  Instant access to institutional knowledge and best practices
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Target className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Data Synchronization</h3>
                <p className="text-sm text-muted-foreground">
                  Cross-system data synchronization and consistency management
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <TrendingUp className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Performance Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous performance monitoring and workflow optimization
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Institutional Knowledge at Machine Speed</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-fintech-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">24/7 Operations</h3>
                    <p className="text-muted-foreground">
                      Never stop working. Handle tasks continuously without breaks, ensuring consistent productivity and
                      faster turnaround times.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Brain className="h-6 w-6 text-fintech-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Instant Knowledge Access</h3>
                    <p className="text-muted-foreground">
                      Access decades of institutional knowledge instantly, applying best practices and lessons learned
                      to every task.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-fintech-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Perfect Consistency</h3>
                    <p className="text-muted-foreground">
                      Eliminate human error and inconsistency. Every task is performed to the same high standard, every
                      time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-fintech-50 dark:bg-fintech-950/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Core Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Intelligent task prioritization and scheduling</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Multi-system data integration and validation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Custom workflow creation and optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Exception handling and escalation protocols</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Performance analytics and reporting</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Compliance verification and audit trails</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-fintech-600 mr-3" />
                  <span>Continuous learning and improvement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mortgage Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mortgage-Specific Applications</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Worker Agent transforms mortgage operations by automating the countless repetitive tasks that consume
              valuable staff time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <FileText className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Data Entry Automation</h3>
                <p className="text-muted-foreground">
                  Automatically extract and enter data across multiple systems, ensuring accuracy and eliminating manual
                  data entry errors.
                </p>
                <div className="mt-4 text-sm text-fintech-600 font-medium">
                  ✓ LOS to POS synchronization
                  <br />✓ Investor portal updates
                  <br />✓ Compliance system entries
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <Target className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Document Standardization</h3>
                <p className="text-muted-foreground">
                  Format and standardize documents according to investor requirements and internal guidelines with
                  perfect consistency.
                </p>
                <div className="mt-4 text-sm text-fintech-600 font-medium">
                  ✓ Loan file organization
                  <br />✓ Document naming conventions
                  <br />✓ Quality control formatting
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <Shield className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Compliance Management</h3>
                <p className="text-muted-foreground">
                  Maintain compliance checklists, track regulatory requirements, and ensure all loans meet current
                  guidelines.
                </p>
                <div className="mt-4 text-sm text-fintech-600 font-medium">
                  ✓ TRID compliance tracking
                  <br />✓ QM verification
                  <br />✓ State-specific requirements
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <TrendingUp className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Report Generation</h3>
                <p className="text-muted-foreground">
                  Generate comprehensive reports for management, investors, and regulatory bodies with real-time data
                  and insights.
                </p>
                <div className="mt-4 text-sm text-fintech-600 font-medium">
                  ✓ Pipeline reports
                  <br />✓ Compliance dashboards
                  <br />✓ Performance analytics
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <Zap className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">System Maintenance</h3>
                <p className="text-muted-foreground">
                  Perform routine system maintenance, updates, and optimizations to ensure peak performance across all
                  platforms.
                </p>
                <div className="mt-4 text-sm text-fintech-600 font-medium">
                  ✓ Database optimization
                  <br />✓ System health monitoring
                  <br />✓ Automated backups
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <Brain className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Workflow Optimization</h3>
                <p className="text-muted-foreground">
                  Continuously analyze and optimize workflows, identifying bottlenecks and implementing efficiency
                  improvements.
                </p>
                <div className="mt-4 text-sm text-fintech-600 font-medium">
                  ✓ Process analysis
                  <br />✓ Bottleneck identification
                  <br />✓ Efficiency recommendations
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Impact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Measurable Performance Impact</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Efficiency Gains</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <span className="font-medium">Data Entry Tasks</span>
                  <span className="text-green-600 font-bold">95% Faster</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <span className="font-medium">Document Processing</span>
                  <span className="text-blue-600 font-bold">80% Reduction</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <span className="font-medium">Report Generation</span>
                  <span className="text-purple-600 font-bold">90% Faster</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <span className="font-medium">System Maintenance</span>
                  <span className="text-orange-600 font-bold">100% Automated</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Quality Improvements</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-fintech-600 mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fintech-600 mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Consistency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fintech-600 mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fintech-600 mb-2">0</div>
                  <div className="text-sm text-muted-foreground">Human Errors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Workflow Creation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom Workflow Creation</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Worker Agent adapts to your unique processes, creating custom workflows that match your organization's
              specific needs and requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-fintech-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-bold mb-2">Analyze</h3>
              <p className="text-sm text-muted-foreground">
                Study existing workflows and identify optimization opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-fintech-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-bold mb-2">Design</h3>
              <p className="text-sm text-muted-foreground">
                Create optimized workflows tailored to your specific requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-fintech-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-bold mb-2">Implement</h3>
              <p className="text-sm text-muted-foreground">Deploy automated workflows with comprehensive testing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-fintech-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-bold mb-2">Monitor</h3>
              <p className="text-sm text-muted-foreground">
                Continuously monitor performance and identify improvements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-fintech-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                5
              </div>
              <h3 className="font-bold mb-2">Optimize</h3>
              <p className="text-sm text-muted-foreground">Continuously refine and improve workflow efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-fintech-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Eliminate Repetitive Tasks?</h2>
          <p className="text-xl mb-8 opacity-90">
            See how Worker Agent can free your staff to focus on high-value activities while automating routine
            operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationButton size="lg" variant="secondary">
              Schedule Automation Demo
            </ConsultationButton>
            <ConsultationButton
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-fintech-600"
            >
              Download Task Library
            </ConsultationButton>
          </div>
        </div>
      </section>
    </div>
  )
}
