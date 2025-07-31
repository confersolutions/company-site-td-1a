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
  FileText,
  Zap,
  CheckCircle,
  ArrowRight,
  Network,
  BarChart3,
  Target,
  Award,
  Globe,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI-Powered Finance & Mortgage Solutions | Confer Solutions AI",
  description:
    "Revolutionize mortgage banking with AI agents for underwriting, compliance, and document processing. LP/DU/GUS integration, TRID compliance, 99.7% accuracy.",
  keywords: [
    "mortgage AI",
    "automated underwriting",
    "TRID compliance",
    "LP DU GUS integration",
    "mortgage automation",
    "financial AI",
  ],
  openGraph: {
    title: "AI-Powered Finance & Mortgage Solutions | Confer Solutions AI",
    description:
      "Revolutionize mortgage banking with AI agents for underwriting, compliance, and document processing. LP/DU/GUS integration, TRID compliance, 99.7% accuracy.",
    type: "website",
  },
}

export default function FinanceMortgagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50/30 dark:to-blue-950/30">
      {/* Hero Section */}
      <section className="relative pt-16 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
                  <Brain className="w-4 h-4 mr-2" />
                  Finance & Mortgage AI
                </Badge>

                <div className="space-y-6">
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-800 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-600">
                      AI-Powered
                    </span>
                    <br />
                    <span className="text-foreground">Finance &</span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600">
                      Mortgage Solutions
                    </span>
                  </h1>

                  <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    Transforming mortgage banking with cutting-edge AI agents and autonomous processing. Our intelligent
                    systems revolutionize underwriting, compliance, and customer service operations.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <ConsultationButton
                    size="lg"
                    className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                  >
                    Schedule Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </ConsultationButton>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-4 text-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
                    asChild
                  >
                    <Link href="/ai-agents/autonomous-mortgage-bank">Explore AI Agents</Link>
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
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
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

      {/* Key Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950"
            >
              Key Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                Revolutionary AI Solutions
              </span>
              <br />
              for Modern Mortgage Banking
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our cutting-edge AI technology transforms every aspect of mortgage operations, from initial application to
              final closing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Autonomous Underwriting */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/30 dark:to-cyan-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                  Autonomous Underwriting
                </CardTitle>
                <CardDescription className="text-blue-600/80 dark:text-blue-400/80">
                  AI agents that handle complex loan decisions with unprecedented accuracy
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Intelligent risk assessment using machine learning models</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Automated decision-making with explainable AI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Continuous learning from market trends and regulations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Reduced processing time from days to minutes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Regulatory Compliance */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/30 dark:to-teal-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                  Regulatory Compliance
                </CardTitle>
                <CardDescription className="text-emerald-600/80 dark:text-emerald-400/80">
                  Automated TRID, RESPA, and state compliance monitoring
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Real-time regulatory updates and compliance checking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Automated TRID disclosure generation and timing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">RESPA compliance monitoring and violation prevention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">State-specific regulation adherence across all jurisdictions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Document Intelligence */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/30 dark:to-pink-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                  Document Intelligence
                </CardTitle>
                <CardDescription className="text-purple-600/80 dark:text-purple-400/80">
                  Advanced processing of financial documents with AI-powered extraction
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">OCR and intelligent data extraction from any document format</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Automated verification of income, assets, and employment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Fraud detection through document analysis and cross-referencing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Instant document classification and routing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Real-time Integration */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-orange-950/30 dark:to-red-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 group-hover:from-orange-500/10 group-hover:to-red-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-orange-700 dark:text-orange-300">
                  Real-time Integration
                </CardTitle>
                <CardDescription className="text-orange-600/80 dark:text-orange-400/80">
                  LP, DU, GUS connectivity with instant decisions and seamless workflow
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Direct API integration with Fannie Mae Desktop Underwriter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Freddie Mac Loan Prospector real-time connectivity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">FHA TOTAL Scorecard and GUS integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Instant AUS responses with automated condition management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/30 to-cyan-50/30 dark:from-blue-950/20 dark:to-cyan-950/20">
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
              Built on cutting-edge technology for maximum performance, security, and scalability in mortgage operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-blue-700 dark:text-blue-300">AI Models</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Custom LLMs trained on mortgage data</li>
                <li>• GPT-4 integration for complex reasoning</li>
                <li>• Specialized financial language models</li>
                <li>• Continuous model fine-tuning</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <Network className="h-6 w-6 text-emerald-600" />
                <h3 className="font-semibold text-emerald-700 dark:text-emerald-300">Integration</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Real-time AUS connectivity</li>
                <li>• RESTful API architecture</li>
                <li>• Webhook-based notifications</li>
                <li>• Secure data transmission</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
                <h3 className="font-semibold text-purple-700 dark:text-purple-300">Compliance</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Automated regulatory monitoring</li>
                <li>• TRID compliance engine</li>
                <li>• RESPA violation prevention</li>
                <li>• State regulation tracking</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/50 dark:to-red-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-6 w-6 text-orange-600" />
                <h3 className="font-semibold text-orange-700 dark:text-orange-300">Analytics</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Predictive risk assessment</li>
                <li>• Market trend analysis</li>
                <li>• Performance dashboards</li>
                <li>• Real-time reporting</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Our AI Solutions?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your mortgage operations with proven AI technology that delivers measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">99.7% Accuracy</h3>
              <p className="text-muted-foreground">
                Industry-leading precision in underwriting decisions and document processing
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">85% Faster</h3>
              <p className="text-muted-foreground">
                Dramatically reduce processing times from days to minutes with AI automation
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">100% Compliant</h3>
              <p className="text-muted-foreground">
                Ensure full regulatory compliance with automated monitoring and updates
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">24/7 Operations</h3>
              <p className="text-muted-foreground">
                Continuous processing capabilities that never sleep, ensuring faster customer service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 dark:from-blue-700 dark:via-cyan-700 dark:to-blue-800 relative overflow-hidden">
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
              Ready to Transform Your Mortgage Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Discover how our AI-powered solutions can revolutionize your underwriting, compliance, and customer
              service operations. Schedule a personalized demo today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <ConsultationButton size="lg" source="demo" className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-blue-50">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </ConsultationButton>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link href="/ai-agents/autonomous-mortgage-bank">Explore AI Agents</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>

            {/* Interactive Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-white mb-2">$2.5B+</div>
                <div className="text-blue-100">Loans Processed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-100">Lenders Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-blue-100">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Confer Solutions AI",
            description:
              "AI-powered business solutions specializing in autonomous mortgage banking and business automation",
            url: "https://confersolutions.ai",
          }),
        }}
      />
    </div>
  )
}
