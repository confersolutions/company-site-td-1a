import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ConsultationButton } from "@/components/consultation-button"
import Link from "next/link"
import Image from "next/image"
import {
  Brain,
  Shield,
  TrendingUp,
  FileText,
  MessageSquare,
  BarChart3,
  Eye,
  Globe,
  CheckCircle,
  ArrowRight,
  Cpu,
  Database,
  Network,
  Lock,
  Target,
  Sparkles,
  Activity,
  Award,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Finance & Mortgage AI Solutions | Confer Solutions",
  description:
    "Revolutionizing finance with autonomous AI. Leading the frontier of AI-powered mortgage banking, regulatory compliance, and financial intelligence.",
}

export default function FinanceMortgagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50/30 dark:to-blue-950/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-transparent"></div>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000' fillOpacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm font-medium bg-blue-50/50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI-Powered Finance
                </Badge>

                <div className="space-y-6">
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-800 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-600">
                      Revolutionizing
                    </span>
                    <br />
                    <span className="text-foreground">Finance with</span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600">
                      Autonomous AI
                    </span>
                  </h1>

                  <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    Leading the frontier of AI-powered mortgage banking, regulatory compliance, and financial
                    intelligence. Our autonomous systems are reshaping how financial institutions operate, comply, and
                    serve customers.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <ConsultationButton
                    size="lg"
                    className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                  >
                    Schedule AI Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </ConsultationButton>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-4 text-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
                    asChild
                  >
                    <Link href="/ai-agents">Explore AI Agents</Link>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">99.7%</div>
                    <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">85%</div>
                    <div className="text-sm text-muted-foreground">Time Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
                    <div className="text-sm text-muted-foreground">Operations</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 p-8 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="AI Financial Dashboard"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">Live Processing</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium">AI Powered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cutting-Edge AI Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950"
            >
              Innovation Frontier
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                Cutting-Edge AI Technologies
              </span>
              <br />
              We're Pioneering
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our research-first approach drives breakthrough innovations in financial AI, setting new industry
              standards for automation and intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Autonomous Underwriting Agents */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/30 dark:to-cyan-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                  Autonomous Underwriting Agents
                </CardTitle>
                <CardDescription className="text-blue-600/80 dark:text-blue-400/80">
                  Next-generation AI agents that revolutionize mortgage underwriting
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Real-time LP/DU/GUS integration with predictive modeling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Multi-modal document understanding with vision transformers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Continuous learning from regulatory updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Explainable AI decisions for compliance transparency</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Advanced LLM Integration */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/30 dark:to-blue-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-cyan-700 dark:text-cyan-300">
                  Advanced LLM Integration
                </CardTitle>
                <CardDescription className="text-cyan-600/80 dark:text-cyan-400/80">
                  Custom-trained language models for financial intelligence
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Custom-trained models on mortgage-specific datasets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">RAG systems with institutional knowledge graphs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Real-time compliance monitoring with GPT-4 level accuracy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Multi-language regulatory interpretation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Predictive Risk Analytics */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-purple-950/30 dark:to-blue-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                  Predictive Risk Analytics
                </CardTitle>
                <CardDescription className="text-purple-600/80 dark:text-purple-400/80">
                  Advanced risk modeling with graph neural networks
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Graph neural networks for borrower risk assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Federated learning across mortgage portfolios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Real-time market sentiment analysis integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Dynamic risk scoring with continuous model updates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Conversational AI Interfaces */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-emerald-50/50 to-cyan-50/50 dark:from-emerald-950/30 dark:to-cyan-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 group-hover:from-emerald-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                  Conversational AI Interfaces
                </CardTitle>
                <CardDescription className="text-emerald-600/80 dark:text-emerald-400/80">
                  Natural language processing for seamless customer interactions
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Voice-enabled mortgage applications with natural speech processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Multi-language support with cultural context understanding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Emotional intelligence in customer interactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Omnichannel conversation continuity</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Innovation Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/30 to-cyan-50/30 dark:from-blue-950/20 dark:to-cyan-950/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Key Innovation Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Breakthrough innovations that are reshaping the financial services landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group text-center p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">Regulatory AI</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Automated TRID, RESPA, and state compliance monitoring with real-time regulatory updates
              </p>
              <Badge variant="outline" className="text-xs">
                99.9% Compliance Rate
              </Badge>
            </Card>

            <Card className="group text-center p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-red-700 dark:text-red-300">Fraud Detection</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Advanced pattern recognition with explainable AI for transparent fraud prevention
              </p>
              <Badge variant="outline" className="text-xs">
                Real-time Detection
              </Badge>
            </Card>

            <Card className="group text-center p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-emerald-700 dark:text-emerald-300">Document Intelligence</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Computer vision for complex financial documents with multi-modal understanding
              </p>
              <Badge variant="outline" className="text-xs">
                99.7% Accuracy
              </Badge>
            </Card>

            <Card className="group text-center p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">Market Prediction</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Economic indicator analysis with transformer models for market intelligence
              </p>
              <Badge variant="outline" className="text-xs">
                Predictive Analytics
              </Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950"
            >
              Technology Stack
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                Enterprise-Grade AI Infrastructure
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on cutting-edge technology stack for maximum performance, security, and scalability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-blue-700 dark:text-blue-300">Foundation Models</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• GPT-4 & Claude Integration</li>
                <li>• Custom Financial LLMs</li>
                <li>• Multi-modal Transformers</li>
                <li>• Specialized Embeddings</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/50 dark:to-blue-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <Network className="h-6 w-6 text-cyan-600" />
                <h3 className="font-semibold text-cyan-700 dark:text-cyan-300">AI Frameworks</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• LangChain & LlamaIndex</li>
                <li>• Hugging Face Transformers</li>
                <li>• PyTorch & TensorFlow</li>
                <li>• AutoML Pipelines</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/50 dark:to-blue-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-purple-600" />
                <h3 className="font-semibold text-purple-700 dark:text-purple-300">Infrastructure</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Vector Databases</li>
                <li>• GPU Clusters</li>
                <li>• Edge Computing</li>
                <li>• Kubernetes Orchestration</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-emerald-950/50 dark:to-cyan-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-emerald-600" />
                <h3 className="font-semibold text-emerald-700 dark:text-emerald-300">Integration</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• RESTful APIs</li>
                <li>• GraphQL Endpoints</li>
                <li>• Real-time WebSockets</li>
                <li>• Microservices Architecture</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/30 to-cyan-50/30 dark:from-blue-950/20 dark:to-cyan-950/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive methodology that ensures successful AI implementation and measurable business impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Research-First</h3>
              <p className="text-muted-foreground">
                Continuous exploration of emerging AI technologies and their practical applications in finance
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Production-Ready</h3>
              <p className="text-muted-foreground">
                Battle-tested solutions deployed at enterprise scale with proven reliability and performance
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Open Source</h3>
              <p className="text-muted-foreground">
                Contributing to the AI community through shared innovation and collaborative development
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                <Lock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ethical AI</h3>
              <p className="text-muted-foreground">
                Responsible development with bias detection, fairness monitoring, and transparent decision-making
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 dark:from-blue-700 dark:via-cyan-700 dark:to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 dark:from-blue-700 dark:via-cyan-700 dark:to-blue-800 relative overflow-hidden"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23fff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Finance Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Discover how our autonomous AI agents can revolutionize your mortgage banking, compliance, and customer
              service operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <ConsultationButton size="lg" className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-blue-50">
                Schedule AI Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </ConsultationButton>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link href="/ai-agents">Explore AI Agents</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link href="/newsletter">Join Innovation Journey</Link>
              </Button>
            </div>

            {/* Interactive Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-white mb-2">$2.5B+</div>
                <div className="text-blue-100">Loans Processed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-white mb-2">99.7%</div>
                <div className="text-blue-100">Accuracy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-white mb-2">85%</div>
                <div className="text-blue-100">Time Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
