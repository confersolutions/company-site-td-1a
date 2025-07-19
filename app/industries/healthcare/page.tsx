import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ConsultationButton } from "@/components/consultation-button"
import Link from "next/link"
import Image from "next/image"
import {
  Brain,
  Activity,
  FileText,
  MessageSquare,
  BarChart3,
  Stethoscope,
  Pill,
  Calendar,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Globe,
  Lock,
  Award,
  Database,
  Network,
  Eye,
  Smartphone,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Healthcare AI Solutions | Confer Solutions",
  description:
    "AI-Powered Healthcare Transformation. Advancing patient care through intelligent automation, predictive diagnostics, and autonomous healthcare operations.",
}

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-50/30 dark:to-purple-950/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-500/5 to-transparent"></div>
        {/* Decorative dot-grid */}
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
                  className="px-4 py-2 text-sm font-medium bg-purple-50/50 dark:bg-purple-950/50 border-purple-200 dark:border-purple-800"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Healthcare AI
                </Badge>

                <div className="space-y-6">
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-purple-800 dark:from-purple-400 dark:via-pink-400 dark:to-purple-600">
                      AI-Powered
                    </span>
                    <br />
                    <span className="text-foreground">Healthcare</span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600">
                      Transformation
                    </span>
                  </h1>

                  <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    Advancing patient care through intelligent automation, predictive diagnostics, and autonomous
                    healthcare operations. Our AI solutions are revolutionizing how healthcare providers deliver care,
                    manage operations, and improve outcomes.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <ConsultationButton
                    size="lg"
                    className="px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    Explore Healthcare AI
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
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">98%</div>
                    <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">50%</div>
                    <div className="text-sm text-muted-foreground">Time Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
                    <div className="text-sm text-muted-foreground">Monitoring</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-8 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50">
                  <Image
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="AI Healthcare Dashboard"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">Patient Monitoring</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-purple-500" />
                      <span className="text-sm font-medium">AI Diagnostics</span>
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
              className="mb-4 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950"
            >
              Medical Innovation
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                Cutting-Edge AI Technologies
              </span>
              <br />
              We're Implementing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our healthcare-first approach drives breakthrough innovations in medical AI, creating the future of
              patient care through intelligent automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Clinical Decision Support Systems */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/30 dark:to-pink-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                  Clinical Decision Support Systems
                </CardTitle>
                <CardDescription className="text-purple-600/80 dark:text-purple-400/80">
                  AI-powered diagnostic assistance and treatment recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Large language models trained on medical literature</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Real-time diagnostic assistance with evidence-based recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Drug interaction analysis and personalized treatment protocols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Clinical pathway optimization and outcome prediction</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Autonomous Administrative Agents */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-pink-50/50 to-blue-50/50 dark:from-pink-950/30 dark:to-blue-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-blue-500/5 group-hover:from-pink-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-pink-700 dark:text-pink-300">
                  Autonomous Administrative Agents
                </CardTitle>
                <CardDescription className="text-pink-600/80 dark:text-pink-400/80">
                  Intelligent automation for healthcare administration and operations
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Insurance pre-authorization automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Claims processing with natural language understanding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Regulatory compliance monitoring (HIPAA, FDA)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Automated documentation and reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Predictive Health Analytics */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/30 dark:to-cyan-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                  Predictive Health Analytics
                </CardTitle>
                <CardDescription className="text-blue-600/80 dark:text-blue-400/80">
                  Advanced analytics for population health and patient outcomes
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Early warning systems using multimodal patient data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Population health management with federated learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Clinical trial optimization and patient matching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Risk stratification and preventive care recommendations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Conversational Health AI */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/30 dark:to-teal-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                  Conversational Health AI
                </CardTitle>
                <CardDescription className="text-emerald-600/80 dark:text-emerald-400/80">
                  HIPAA-compliant AI for patient engagement and support
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">HIPAA-compliant patient interaction systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Mental health support with empathetic AI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Medication adherence monitoring through natural conversations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Symptom tracking and health coaching</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation Frontiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50/30 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Innovation Frontiers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pioneering the future of healthcare with breakthrough AI innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group text-center p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Pill className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">Digital Therapeutics</h3>
              <p className="text-sm text-muted-foreground mb-4">
                AI-powered treatment protocols and personalized therapy recommendations
              </p>
              <Badge variant="outline" className="text-xs">
                Personalized Medicine
              </Badge>
            </Card>

            <Card className="group text-center p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-pink-700 dark:text-pink-300">Precision Medicine</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Genomic analysis integration for personalized treatment plans
              </p>
              <Badge variant="outline" className="text-xs">
                Genomic AI
              </Badge>
            </Card>

            <Card className="group text-center p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">Remote Patient Monitoring</h3>
              <p className="text-sm text-muted-foreground mb-4">
                IoT and wearable device intelligence for continuous health monitoring
              </p>
              <Badge variant="outline" className="text-xs">
                IoT Integration
              </Badge>
            </Card>

            <Card className="group text-center p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-emerald-700 dark:text-emerald-300">Healthcare Operations</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Autonomous scheduling and resource optimization for healthcare facilities
              </p>
              <Badge variant="outline" className="text-xs">
                Operational AI
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
              className="mb-4 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950"
            >
              Technology Stack
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                Healthcare-Grade AI Infrastructure
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on cutting-edge technology stack optimized for healthcare compliance, security, and patient safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-6 w-6 text-purple-600" />
                <h3 className="font-semibold text-purple-700 dark:text-purple-300">Foundation Models</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Medical LLMs & BioBERT</li>
                <li>• Clinical Decision Models</li>
                <li>• Multi-modal Transformers</li>
                <li>• Healthcare Embeddings</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-pink-50 to-blue-50 dark:from-pink-950/50 dark:to-blue-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <Network className="h-6 w-6 text-pink-600" />
                <h3 className="font-semibold text-pink-700 dark:text-pink-300">AI Frameworks</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• LangChain & LlamaIndex</li>
                <li>• Hugging Face Transformers</li>
                <li>• PyTorch & TensorFlow</li>
                <li>• Medical AI Pipelines</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-blue-700 dark:text-blue-300">Infrastructure</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• HIPAA-Compliant Cloud</li>
                <li>• Secure GPU Clusters</li>
                <li>• Edge Computing</li>
                <li>• Federated Learning</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-emerald-600" />
                <h3 className="font-semibold text-emerald-700 dark:text-emerald-300">Integration</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• HL7 FHIR APIs</li>
                <li>• EHR Integration</li>
                <li>• Real-time Monitoring</li>
                <li>• Secure Messaging</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50/30 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive methodology that ensures successful AI implementation and measurable healthcare outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Research-First</h3>
              <p className="text-muted-foreground">
                Continuous exploration of emerging AI technologies and their practical applications in healthcare
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Production-Ready</h3>
              <p className="text-muted-foreground">
                Battle-tested solutions deployed at enterprise scale with proven reliability and patient safety
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Open Source</h3>
              <p className="text-muted-foreground">
                Contributing to the AI community through shared innovation and collaborative healthcare development
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-6">
                <Lock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ethical AI</h3>
              <p className="text-muted-foreground">
                Responsible development with bias detection, fairness monitoring, and transparent medical
                decision-making
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 dark:from-purple-700 dark:via-pink-700 dark:to-purple-800 relative overflow-hidden">
        {/* Decorative dot-grid */}
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
              Ready to Transform Your Healthcare Operations?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Discover how our AI-powered healthcare solutions can enhance patient care, streamline operations, and
              improve clinical outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <ConsultationButton size="lg" className="px-8 py-4 text-lg bg-white text-purple-600 hover:bg-purple-50">
                Explore Healthcare AI
                <ArrowRight className="ml-2 h-5 w-5" />
              </ConsultationButton>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
                asChild
              >
                <Link href="/solutions">View Solutions</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
                asChild
              >
                <Link href="/newsletter">Join Innovation Journey</Link>
              </Button>
            </div>

            {/* Interactive Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-white mb-2">1M+</div>
                <div className="text-purple-100">Patients Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-purple-100">Accuracy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-white mb-2">50%</div>
                <div className="text-purple-100">Time Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
