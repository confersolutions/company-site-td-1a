import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ConsultationButton } from "@/components/consultation-button"
import Link from "next/link"
import Image from "next/image"
import {
  Brain,
  TrendingUp,
  Users,
  Eye,
  Target,
  Globe,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Activity,
  BarChart3,
  MessageSquare,
  Database,
  Network,
  Lock,
  Award,
  Heart,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Retail & E-commerce AI Solutions | Confer Solutions",
  description:
    "AI-Native Commerce Intelligence. Transforming retail experiences with autonomous agents, predictive analytics, and personalized customer journeys.",
}

export default function RetailEcommercePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-emerald-50/30 dark:to-emerald-950/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-teal-500/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23000 fillOpacity=0.02%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm font-medium bg-emerald-50/50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Commerce Intelligence
                </Badge>

                <div className="space-y-6">
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-800 dark:from-emerald-400 dark:via-teal-400 dark:to-emerald-600">
                      AI-Native
                    </span>
                    <br />
                    <span className="text-foreground">Commerce</span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-600">
                      Intelligence
                    </span>
                  </h1>

                  <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    Transforming retail experiences with autonomous agents, predictive analytics, and personalized
                    customer journeys. Our AI solutions are revolutionizing how brands connect with customers and
                    optimize operations.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <ConsultationButton
                    size="lg"
                    className="px-8 py-4 text-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                  >
                    Explore Commerce AI
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </ConsultationButton>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-4 text-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
                    asChild
                  >
                    <Link href="/solutions">View Solutions</Link>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">40%</div>
                    <div className="text-sm text-muted-foreground">Sales Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">60%</div>
                    <div className="text-sm text-muted-foreground">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">95%</div>
                    <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 p-8 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50">
                  <Image
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="AI E-commerce Dashboard"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent rounded-2xl"></div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">Real-time Analytics</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-emerald-500" />
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
              className="mb-4 px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950"
            >
              Innovation Lab
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">
                Cutting-Edge AI Technologies
              </span>
              <br />
              We're Developing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our innovation-first approach drives breakthrough solutions in retail AI, creating the future of commerce
              through intelligent automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Autonomous Customer Service Agents */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/30 dark:to-teal-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                  Autonomous Customer Service Agents
                </CardTitle>
                <CardDescription className="text-emerald-600/80 dark:text-emerald-400/80">
                  Next-generation conversational AI for seamless customer experiences
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">GPT-4 powered conversational commerce</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Real-time sentiment analysis and emotion detection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Multi-channel experience continuity (web, mobile, voice, AR)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Proactive customer engagement and support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Predictive Commerce AI */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-teal-50/50 to-cyan-50/50 dark:from-teal-950/30 dark:to-cyan-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-teal-700 dark:text-teal-300">
                  Predictive Commerce AI
                </CardTitle>
                <CardDescription className="text-teal-600/80 dark:text-teal-400/80">
                  Advanced forecasting and optimization for retail operations
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Demand forecasting with transformer-based time series models</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Dynamic pricing optimization using reinforcement learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Supply chain intelligence with graph neural networks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Market trend prediction and competitive analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Personalization Engines */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/30 dark:to-blue-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-cyan-700 dark:text-cyan-300">
                  Personalization Engines
                </CardTitle>
                <CardDescription className="text-cyan-600/80 dark:text-cyan-400/80">
                  Hyper-personalized experiences with privacy-first AI
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Real-time behavioral analysis with edge computing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Cross-platform identity resolution using federated learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Privacy-preserving recommendation systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Dynamic content optimization and A/B testing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Computer Vision Applications */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/30 dark:to-pink-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                  Computer Vision Applications
                </CardTitle>
                <CardDescription className="text-purple-600/80 dark:text-purple-400/80">
                  Visual AI for enhanced shopping and inventory management
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Visual search and product discovery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Automated inventory management with real-time tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">AR/VR integration for immersive shopping experiences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Quality control and defect detection automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation Focus Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50/30 to-teal-50/30 dark:from-emerald-950/20 dark:to-teal-950/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Innovation Focus Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pioneering the future of retail with breakthrough AI innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group text-center p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-emerald-700 dark:text-emerald-300">Conversational Commerce</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Voice and chat-first shopping experiences with natural language understanding
              </p>
              <Badge variant="outline" className="text-xs">
                Next-Gen Interface
              </Badge>
            </Card>

            <Card className="group text-center p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-teal-700 dark:text-teal-300">Social Commerce AI</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Influencer matching and viral prediction for social media commerce
              </p>
              <Badge variant="outline" className="text-xs">
                Viral Intelligence
              </Badge>
            </Card>

            <Card className="group text-center p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-cyan-700 dark:text-cyan-300">Sustainability Intelligence</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Carbon footprint optimization and sustainable commerce solutions
              </p>
              <Badge variant="outline" className="text-xs">
                Green Commerce
              </Badge>
            </Card>

            <Card className="group text-center p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">Metaverse Retail</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Virtual shopping environments with AI avatars and immersive experiences
              </p>
              <Badge variant="outline" className="text-xs">
                Virtual Commerce
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
              className="mb-4 px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950"
            >
              Technology Stack
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">
                Commerce-Grade AI Infrastructure
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on cutting-edge technology stack optimized for retail performance, scalability, and customer
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-6 w-6 text-emerald-600" />
                <h3 className="font-semibold text-emerald-700 dark:text-emerald-300">Foundation Models</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• GPT-4 & Claude Integration</li>
                <li>• Custom Commerce LLMs</li>
                <li>• Multi-modal Transformers</li>
                <li>• Specialized Embeddings</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/50 dark:to-cyan-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <Network className="h-6 w-6 text-teal-600" />
                <h3 className="font-semibold text-teal-700 dark:text-teal-300">AI Frameworks</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• LangChain & LlamaIndex</li>
                <li>• Hugging Face Transformers</li>
                <li>• PyTorch & TensorFlow</li>
                <li>• AutoML Pipelines</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/50 dark:to-blue-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-cyan-600" />
                <h3 className="font-semibold text-cyan-700 dark:text-cyan-300">Infrastructure</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Vector Databases</li>
                <li>• GPU Clusters</li>
                <li>• Edge Computing</li>
                <li>• Kubernetes Orchestration</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-purple-600" />
                <h3 className="font-semibold text-purple-700 dark:text-purple-300">Integration</h3>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50/30 to-teal-50/30 dark:from-emerald-950/20 dark:to-teal-950/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive methodology that ensures successful AI implementation and measurable business impact in
              retail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Research-First</h3>
              <p className="text-muted-foreground">
                Continuous exploration of emerging AI technologies and their practical applications in retail
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Production-Ready</h3>
              <p className="text-muted-foreground">
                Battle-tested solutions deployed at enterprise scale with proven reliability and performance
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Open Source</h3>
              <p className="text-muted-foreground">
                Contributing to the AI community through shared innovation and collaborative development
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 dark:from-emerald-700 dark:via-teal-700 dark:to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23fff fillOpacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Retail Operations?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Discover how our AI-native commerce solutions can revolutionize your customer experience, optimize
              operations, and drive unprecedented growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <ConsultationButton size="lg" className="px-8 py-4 text-lg bg-white text-emerald-600 hover:bg-emerald-50">
                Explore Commerce AI
                <ArrowRight className="ml-2 h-5 w-5" />
              </ConsultationButton>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
                asChild
              >
                <Link href="/solutions">View Solutions</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
                asChild
              >
                <Link href="/newsletter">Join Innovation Journey</Link>
              </Button>
            </div>

            {/* Interactive Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-white mb-2">$500M+</div>
                <div className="text-emerald-100">Revenue Processed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-white mb-2">40%</div>
                <div className="text-emerald-100">Sales Increase</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-white mb-2">60%</div>
                <div className="text-emerald-100">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
