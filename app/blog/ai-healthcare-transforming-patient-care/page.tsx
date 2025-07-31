import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Share2,
  Heart,
  Brain,
  Shield,
  Stethoscope,
  Activity,
  FileText,
  Eye,
  MessageSquare,
  Database,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "AI in Healthcare: Transforming Patient Care with Intelligent Automation | Confer Solutions",
  description:
    "Explore how AI is reshaping healthcare — from diagnostics and documentation to virtual agents and personalized treatment plans. Comprehensive guide to healthcare AI implementation.",
  keywords: [
    "AI in healthcare",
    "healthcare AI transformation",
    "AI patient care",
    "medical AI technology",
    "healthcare automation",
    "AI medical diagnosis",
    "healthcare AI solutions",
    "digital health AI",
    "AI medical records",
    "healthcare process automation",
    "AI virtual health assistants",
    "medical AI applications",
    "healthcare technology innovation",
    "AI telemedicine",
    "smart healthcare systems"
  ],
  authors: [{ name: "Yatin Karnik" }, { name: "Confer Solutions" }],
  creator: "Confer Solutions",
  publisher: "Confer Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://confersolutions.ai"),
  alternates: {
    canonical: "/blog/ai-healthcare-transforming-patient-care",
  },
  openGraph: {
    title: "AI in Healthcare: Transforming Patient Care with Intelligent Automation",
    description:
      "Explore how AI is reshaping healthcare — from diagnostics and documentation to virtual agents and personalized treatment plans. Comprehensive guide to healthcare AI implementation.",
    url: "https://confersolutions.ai/blog/ai-healthcare-transforming-patient-care",
    siteName: "Confer Solutions",
    images: [
      {
        url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "AI in Healthcare - Transforming Patient Care with Intelligent Technology",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2024-12-05T09:15:00.000Z",
    authors: ["Yatin Karnik"],
    tags: ["AI Healthcare", "Patient Care", "Medical Technology", "Healthcare Innovation", "Digital Health"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI in Healthcare: Transforming Patient Care with Intelligent Automation",
    description:
      "Explore how AI is reshaping healthcare — from diagnostics and documentation to virtual agents and personalized treatment plans. Comprehensive guide to healthcare AI implementation.",
    images: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
    ],
    creator: "@confer_inc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function BlogPost() {
  const backgroundPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: backgroundPattern }}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mb-6">
                <div className="flex items-center bg-white/10 rounded-full px-3 py-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  December 5, 2024
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-3 py-1">
                  <User className="h-4 w-4 mr-1" />
                  Yatin Karnik
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-3 py-1">
                  <Clock className="h-4 w-4 mr-1" />8 min read
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI in Healthcare:
                <span className="block bg-gradient-to-r from-cyan-200 to-emerald-200 bg-clip-text text-transparent">
                  Transforming Patient Care
                </span>
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Explore how AI is reshaping healthcare — from diagnostics and documentation to virtual agents and
                personalized treatment plans.
              </p>

              {/* Social Sharing */}
              <div className="flex items-center gap-4">
                <span className="text-white/80 text-sm">Share:</span>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-white/20 to-white/5">
                  <Image
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="AI Healthcare Assistant - Medical tablet with AI symbols and stethoscope"
                    fill
                    className="object-cover"
                  />
                  {/* Floating AI Status */}
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    AI Active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Opening Section */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-3xl p-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500 rounded-full p-3">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-emerald-900 dark:text-emerald-100">
                      Healthcare Isn't Just Healing. It's Information.
                    </h2>
                    <p className="text-lg text-emerald-800 dark:text-emerald-200 leading-relaxed">
                      Today's medical providers don't just care for patients — they manage overwhelming volumes of data,
                      documentation, regulations, and decisions. That's where AI becomes not just useful — but vital.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* From Automation to Intelligence */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-teal-600 to-cyan-700 rounded-3xl p-8 text-white mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <Brain className="h-8 w-8" />
                  <h2 className="text-3xl font-bold">From Automation to Intelligence</h2>
                </div>
                <p className="text-xl mb-6 text-teal-100">
                  While automation handles scheduling and reminders, true AI in healthcare means systems that:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Read and summarize physician notes",
                    "Extract key vitals from unstructured input",
                    "Detect early warning signs in imaging",
                    "Predict readmission or treatment risks",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                      <CheckCircle className="h-5 w-5 text-cyan-200 flex-shrink-0" />
                      <span className="text-cyan-100">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-teal-200 mt-6 font-medium">
                  This is not future vision — it's live in hospitals and clinics today.
                </p>
              </div>
            </div>

            {/* Real Use Cases */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Real Use Cases in Patient-Centered AI
              </h2>

              {/* Use Case 1 */}
              <div className="mb-8">
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 rounded-3xl p-8 border border-emerald-200 dark:border-emerald-800">
                  <div className="flex items-start gap-6">
                    <div className="bg-emerald-500 rounded-2xl p-4 flex-shrink-0">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-emerald-900 dark:text-emerald-100">
                        1. Clinical Documentation Assistants
                      </h3>
                      <p className="text-emerald-800 dark:text-emerald-200 mb-4">
                        Doctors spend 30–50% of their time writing notes. LLM-powered agents now assist in:
                      </p>
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        {["Summarizing patient conversations", "Suggesting ICD codes", "Drafting SOAP notes"].map(
                          (item, index) => (
                            <div key={index} className="bg-white/60 dark:bg-emerald-900/20 rounded-lg p-3 text-center">
                              <span className="text-emerald-700 dark:text-emerald-300 font-medium">{item}</span>
                            </div>
                          ),
                        )}
                      </div>
                      <div className="bg-emerald-600 text-white rounded-lg p-4">
                        <strong>Result:</strong> More facetime with patients. Fewer hours in the EHR.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Case 2 */}
              <div className="mb-8">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-3xl p-8 border border-teal-200 dark:border-teal-800">
                  <div className="flex items-start gap-6">
                    <div className="bg-teal-500 rounded-2xl p-4 flex-shrink-0">
                      <Eye className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-teal-900 dark:text-teal-100">
                        2. Radiology + Imaging Support
                      </h3>
                      <p className="text-teal-800 dark:text-teal-200 mb-4">
                        AI is now a second set of eyes — not to replace radiologists, but to:
                      </p>
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        {[
                          "Highlight abnormalities",
                          "Prioritize urgent scans",
                          "Reduce false negatives in detection",
                        ].map((item, index) => (
                          <div key={index} className="bg-white/60 dark:bg-teal-900/20 rounded-lg p-3 text-center">
                            <span className="text-teal-700 dark:text-teal-300 font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-teal-600 text-white rounded-lg p-4">
                        <strong>Result:</strong> This lowers burnout while improving diagnostic precision.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Case 3 */}
              <div className="mb-8">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-3xl p-8 border border-cyan-200 dark:border-cyan-800">
                  <div className="flex items-start gap-6">
                    <div className="bg-cyan-500 rounded-2xl p-4 flex-shrink-0">
                      <MessageSquare className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-cyan-900 dark:text-cyan-100">
                        3. Virtual Triage + Support Agents
                      </h3>
                      <p className="text-cyan-800 dark:text-cyan-200 mb-4">Patients interact with AI agents to:</p>
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        {["Check symptoms", "Refill prescriptions", "Get post-op care instructions"].map(
                          (item, index) => (
                            <div key={index} className="bg-white/60 dark:bg-cyan-900/20 rounded-lg p-3 text-center">
                              <span className="text-cyan-700 dark:text-cyan-300 font-medium">{item}</span>
                            </div>
                          ),
                        )}
                      </div>
                      <div className="bg-cyan-600 text-white rounded-lg p-4">
                        <strong>Result:</strong> This frees up frontline staff while delivering 24/7 responsiveness.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why It Works Section */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="h-8 w-8 text-emerald-400" />
                  <h2 className="text-3xl font-bold">Why It Works: The Right Stack + Design</h2>
                </div>
                <p className="text-xl mb-6 text-slate-300">Effective AI in healthcare combines:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: Brain, title: "LLMs", desc: "GPT-4, MedPaLM, BioGPT" },
                    { icon: Database, title: "Vector Search", desc: "For case lookups" },
                    { icon: Activity, title: "EHR Integration", desc: "Via FHIR or API bridges" },
                    { icon: Shield, title: "Guardrails", desc: "Explainability + compliance" },
                  ].map((item, index) => (
                    <div key={index} className="bg-white/10 rounded-xl p-6 border border-white/20">
                      <div className="flex items-center gap-3 mb-3">
                        <item.icon className="h-6 w-6 text-emerald-400" />
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-slate-300">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-emerald-600/20 rounded-xl border border-emerald-500/30">
                  <p className="text-emerald-200 font-medium">
                    The goal is not magic — it's clarity, context, and compassion at scale.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-center text-white">
                <blockquote className="text-3xl md:text-4xl font-bold mb-6 leading-relaxed">
                  {"AI doesn't replace your doctor. It helps your doctor see, remember, and respond better."}
                </blockquote>
                <div className="w-24 h-1 bg-white/30 mx-auto"></div>
              </div>
            </div>

            {/* Getting Started Section */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Zap className="h-8 w-8 text-emerald-600" />
                  <h2 className="text-3xl font-bold text-emerald-900 dark:text-emerald-100">
                    Getting Started the Right Way
                  </h2>
                </div>
                <p className="text-lg text-emerald-800 dark:text-emerald-200 mb-6">Start with:</p>
                <div className="space-y-4 mb-6">
                  {[
                    "A consented pilot use case",
                    "Explainable, auditable outputs",
                    "Integration into existing tools (Slack, Epic, Twilio, etc.)",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-emerald-500 rounded-full p-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-emerald-800 dark:text-emerald-200">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-emerald-600 text-white rounded-xl p-6">
                  <p className="font-medium">Move from task automation → decision support → intelligent agents.</p>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-16 p-6 bg-muted/50 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  YK
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Yatin Karnik</h3>
                  <p className="text-muted-foreground mb-2">CEO & Founder, Confer Solutions AI</p>
                  <p className="text-sm">
                    Yatin has extensive experience implementing AI solutions in healthcare settings, helping
                    organizations improve patient outcomes while maintaining the highest standards of privacy and
                    security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: backgroundPattern }}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <Stethoscope className="h-16 w-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to explore AI in your healthcare organization?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                We've implemented virtual agents, diagnostic support, and predictive analytics for regulated industries.
                Let's talk about what's possible.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle className="h-5 w-5" />
                  <span>HIPAA Compliant Solutions</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle className="h-5 w-5" />
                  <span>Proven Healthcare Experience</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle className="h-5 w-5" />
                  <span>Free Strategy Session</span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-white/90 font-semibold px-8 py-4 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
