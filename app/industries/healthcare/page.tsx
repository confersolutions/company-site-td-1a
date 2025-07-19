import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ConsultationButton } from "@/components/consultation-button"
import Link from "next/link"
import Image from "next/image"
import {
  Brain,
  FileText,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Award,
  Database,
  BookOpen,
  Microscope,
  Heart,
  ClipboardCheck,
  TrendingUp,
  Lock,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Healthcare Solutions | Confer Solutions AI",
  description:
    "AI-Powered Healthcare Innovation. Advancing patient care through intelligent automation, research collaboration, and clinical decision support.",
  keywords: [
    "healthcare AI",
    "clinical decision support",
    "medical research AI",
    "healthcare automation",
    "HIPAA compliant AI",
  ],
  openGraph: {
    title: "AI Healthcare Solutions | Confer Solutions AI",
    description:
      "AI-Powered Healthcare Innovation. Advancing patient care through intelligent automation, research collaboration, and clinical decision support.",
    type: "website",
  },
}

export default function HealthcarePage() {
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
                  Healthcare AI
                </Badge>

                <div className="space-y-6">
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-800 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-600">
                      AI-Powered
                    </span>
                    <br />
                    <span className="text-foreground">Healthcare</span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-600">
                      Innovation
                    </span>
                  </h1>

                  <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    Advancing patient care through intelligent automation, research collaboration, and clinical decision
                    support. Partnering with leading academic medical institutions to transform healthcare delivery and
                    research outcomes.
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
                    <Link href="/solutions">View Solutions</Link>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">40%</div>
                    <div className="text-sm text-muted-foreground">Grant Approval Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">100%</div>
                    <div className="text-sm text-muted-foreground">HIPAA Compliant</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">24/7</div>
                    <div className="text-sm text-muted-foreground">Research Support</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 p-8 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Healthcare Research and AI"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span className="text-sm font-medium">Patient Care</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Microscope className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium">Research AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic & Research Partnerships */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950"
            >
              Academic Partnerships
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                Research & Clinical
              </span>
              <br />
              Innovation Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Collaborating with leading academic medical institutions to advance healthcare research, improve patient
              outcomes, and accelerate medical innovation through AI-powered solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Grant Writing Automation */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/30 dark:to-cyan-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                  Grant Writing Automation
                </CardTitle>
                <CardDescription className="text-blue-600/80 dark:text-blue-400/80">
                  AI-powered assistance for NIH and NSF grant applications
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      AI agents assist major university medical centers with NIH and NSF grant applications
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Automated literature review synthesis and hypothesis generation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Compliance checking for federal funding requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      40% improvement in grant approval rates through AI-assisted submission
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Clinical Research Intelligence */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-cyan-50/50 to-teal-50/50 dark:from-cyan-950/30 dark:to-teal-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 group-hover:from-cyan-500/10 group-hover:to-teal-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-cyan-700 dark:text-cyan-300">
                  Clinical Research Intelligence
                </CardTitle>
                <CardDescription className="text-cyan-600/80 dark:text-cyan-400/80">
                  Advanced AI for clinical trials and research collaboration
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      Partner with leading academic medical institutions on AI research initiatives
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Automated patient cohort identification for clinical trials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Real-time adverse event monitoring and reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Publication-ready statistical analysis and manuscript generation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Electronic Health Record Optimization */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-teal-50/50 to-emerald-50/50 dark:from-teal-950/30 dark:to-emerald-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 group-hover:from-teal-500/10 group-hover:to-emerald-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ClipboardCheck className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-teal-700 dark:text-teal-300">
                  Electronic Health Record Optimization
                </CardTitle>
                <CardDescription className="text-teal-600/80 dark:text-teal-400/80">
                  Streamlined EHR workflows and clinical decision support
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">AI agents streamline documentation workflows for hospital systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      Automated coding and billing compliance for academic medical centers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Clinical decision support integration with existing EHR systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">HIPAA-compliant natural language processing for patient data</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Regulatory Compliance Automation */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-emerald-50/50 to-blue-50/50 dark:from-emerald-950/30 dark:to-blue-950/30 border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 group-hover:from-emerald-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                  Regulatory Compliance Automation
                </CardTitle>
                <CardDescription className="text-emerald-600/80 dark:text-emerald-400/80">
                  Automated FDA, IRB, and HITECH Act compliance management
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Automated FDA submission preparation for medical device research</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">IRB (Institutional Review Board) application processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">HITECH Act compliance monitoring and reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Real-time audit trail generation for regulatory inspections</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/30 to-cyan-50/30 dark:from-blue-950/20 dark:to-cyan-950/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950"
            >
              Technology Stack
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Advanced Healthcare AI Applications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge AI technologies specifically designed for healthcare research, clinical applications, and
              regulatory compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group text-center p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">Clinical NLP</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Medical terminology processing and understanding for clinical documentation
              </p>
              <Badge variant="outline" className="text-xs">
                Natural Language
              </Badge>
            </Card>

            <Card className="group text-center p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-cyan-700 dark:text-cyan-300">Research Analytics</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Population health data analysis and clinical research insights
              </p>
              <Badge variant="outline" className="text-xs">
                Data Science
              </Badge>
            </Card>

            <Card className="group text-center p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-teal-700 dark:text-teal-300">Compliance AI</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Automated regulatory requirement tracking and compliance monitoring
              </p>
              <Badge variant="outline" className="text-xs">
                Regulatory
              </Badge>
            </Card>

            <Card className="group text-center p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-emerald-700 dark:text-emerald-300">Grant Intelligence</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Funding opportunity matching and proposal optimization
              </p>
              <Badge variant="outline" className="text-xs">
                Research Funding
              </Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Collaboration Focus */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Research Collaboration Focus</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building strategic partnerships with leading academic institutions to advance healthcare innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Academic Partnerships</h3>
              <p className="text-muted-foreground">
                Working with top-tier university medical centers and research institutions
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Federal Compliance</h3>
              <p className="text-muted-foreground">
                NIH, NSF, FDA, and HIPAA adherence with automated compliance monitoring
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Publication Support</h3>
              <p className="text-muted-foreground">
                Manuscript preparation and peer review assistance for research publications
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation Pipeline</h3>
              <p className="text-muted-foreground">
                Translating research breakthroughs into practical clinical applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory & Ethical Framework */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/30 to-cyan-50/30 dark:from-blue-950/20 dark:to-cyan-950/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Regulatory & Ethical Framework</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive compliance and governance framework ensuring the highest standards of healthcare data
              security and regulatory adherence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold text-blue-700 dark:text-blue-300">HIPAA Compliance</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• End-to-end privacy protection</li>
                <li>• Comprehensive audit trails</li>
                <li>• Encrypted data transmission</li>
                <li>• Access control management</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/50 dark:to-teal-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-cyan-600" />
                <h3 className="font-semibold text-cyan-700 dark:text-cyan-300">FDA Validation</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Software as Medical Device (SaMD)</li>
                <li>• Pathway compliance</li>
                <li>• Quality management systems</li>
                <li>• Clinical validation protocols</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950/50 dark:to-emerald-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <ClipboardCheck className="h-6 w-6 text-teal-600" />
                <h3 className="font-semibold text-teal-700 dark:text-teal-300">IRB Coordination</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Streamlined review processes</li>
                <li>• Automated documentation</li>
                <li>• Ethics compliance monitoring</li>
                <li>• Multi-site coordination</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-950/50 dark:to-blue-950/50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-emerald-600" />
                <h3 className="font-semibold text-emerald-700 dark:text-emerald-300">Data Governance</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Secure data management</li>
                <li>• Auditable processes</li>
                <li>• Data lineage tracking</li>
                <li>• Privacy by design</li>
              </ul>
            </Card>
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
              Ready to Advance Your Healthcare Research?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Partner with us to transform your healthcare research capabilities through AI-powered automation,
              compliance management, and clinical decision support.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <ConsultationButton size="lg" className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-blue-50">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </ConsultationButton>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link href="/solutions">View Solutions</Link>
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
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-100">Academic Partners</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-white mb-2">40%</div>
                <div className="text-blue-100">Grant Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-blue-100">HIPAA Compliant</div>
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
