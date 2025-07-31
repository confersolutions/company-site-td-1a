import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ConsultationButton } from "@/components/consultation-button"
import Link from "next/link"
import {
  Bot,
  MessageSquare,
  FileText,
  Shield,
  BarChart3,
  AlertTriangle,
  Building2,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Gauge,
  Scale,
  ShoppingCart,
  Heart,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Solutions | Confer Solutions AI",
  description:
    "Comprehensive AI-powered solutions for finance, retail, and healthcare industries. Automate workflows, enhance decision-making, and drive measurable impact.",
  keywords: "AI solutions, artificial intelligence, business automation, workflow optimization, decision making, finance AI, retail AI, healthcare AI, AI technology, business intelligence",
  authors: [{ name: "Confer Solutions AI" }],
  creator: "Confer Solutions AI",
  publisher: "Confer Solutions AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://confersolutions.ai"),
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "AI Solutions | Confer Solutions AI",
    description: "Comprehensive AI-powered solutions for finance, retail, and healthcare industries. Automate workflows, enhance decision-making, and drive measurable impact.",
    url: "https://confersolutions.ai/solutions",
    siteName: "Confer Solutions AI",
    images: [
      {
        url: "https://confersolutions.ai/og-solutions.jpg",
        width: 1200,
        height: 630,
        alt: "AI Solutions Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions | Confer Solutions AI",
    description: "Comprehensive AI-powered solutions for finance, retail, and healthcare industries. Automate workflows, enhance decision-making, and drive measurable impact.",
    images: ["https://confersolutions.ai/og-solutions.jpg"],
    creator: "@confersolutions",
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

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
              AI-Powered Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Transform Your Business with AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive AI solutions designed to automate workflows, enhance decision-making, and drive measurable
              impact across multiple industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationButton size="lg" className="px-8 py-3">
                Get Started Today
              </ConsultationButton>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We color the gamut of industries with our AI expertise, delivering specialized solutions that understand
              your unique challenges and opportunities.
            </p>
          </div>

          {/* Industry Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-fintech-600 dark:text-fintech-400 mb-2">3+</div>
              <div className="text-muted-foreground">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-fintech-600 dark:text-fintech-400 mb-2">50+</div>
              <div className="text-muted-foreground">AI Solutions Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-fintech-600 dark:text-fintech-400 mb-2">24/7</div>
              <div className="text-muted-foreground">Operational Capability</div>
            </div>
          </div>

          {/* Industry Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Finance Industry */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-700 dark:text-blue-300">Finance</CardTitle>
                <CardDescription className="text-blue-600 dark:text-blue-400">
                  Comprehensive financial services automation and compliance solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                    Mortgage Processing Automation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                    Risk Assessment & Compliance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                    Document Processing & Verification
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                    Fraud Detection & Prevention
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                    Customer Service Automation
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 bg-transparent"
                  asChild
                >
                  <Link href="/industries/finance-mortgage">
                    Explore Finance Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Retail & Logistics Industry */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/50 dark:to-emerald-900/50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                  Retail & Logistics
                </CardTitle>
                <CardDescription className="text-emerald-600 dark:text-emerald-400">
                  Supply chain optimization and customer experience enhancement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                    Supply Chain Optimization
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                    Inventory Management AI
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                    Demand Forecasting
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                    Customer Behavior Analytics
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                    Automated Order Processing
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20 bg-transparent"
                  asChild
                >
                  <Link href="/industries/retail-ecommerce">
                    Explore Retail Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Healthcare Industry */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-purple-700 dark:text-purple-300">Healthcare</CardTitle>
                <CardDescription className="text-purple-600 dark:text-purple-400">
                  Patient care optimization and healthcare administration automation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                    Patient Data Management
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                    Medical Document Processing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                    Appointment Scheduling AI
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                    Clinical Decision Support
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                    Compliance & Reporting
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 bg-transparent"
                  asChild
                >
                  <Link href="/industries/healthcare">
                    Explore Healthcare Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Cross-Industry Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-background to-secondary/20 border">
              <Zap className="h-12 w-12 text-fintech-600 dark:text-fintech-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Automation</h3>
              <p className="text-sm text-muted-foreground">Streamline operations across all industries</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-background to-secondary/20 border">
              <Scale className="h-12 w-12 text-fintech-600 dark:text-fintech-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Compliance</h3>
              <p className="text-sm text-muted-foreground">Industry-specific regulatory adherence</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-background to-secondary/20 border">
              <Gauge className="h-12 w-12 text-fintech-600 dark:text-fintech-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Efficiency</h3>
              <p className="text-sm text-muted-foreground">Measurable performance improvements</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-background to-secondary/20 border">
              <Target className="h-12 w-12 text-fintech-600 dark:text-fintech-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Scalability</h3>
              <p className="text-sm text-muted-foreground">Solutions that grow with your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Our Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI-powered solutions designed to transform your business operations and drive measurable
              results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Mortgage Agent */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-fintech-500 to-fintech-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">AI Mortgage Agent</CardTitle>
                <CardDescription>
                  Intelligent mortgage processing with automated underwriting and compliance checks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Automated application processing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Real-time compliance validation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Intelligent document analysis
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/solutions/ai-mortgage-agent">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* RAG Chatbot */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">RAG Chatbot</CardTitle>
                <CardDescription>
                  Advanced conversational AI with retrieval-augmented generation for accurate responses.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Context-aware conversations
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Knowledge base integration
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Multi-language support
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/solutions/rag-chatbot">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Document Processing */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">Document Processing</CardTitle>
                <CardDescription>
                  Intelligent document extraction, classification, and validation with high accuracy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    OCR and data extraction
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Document classification
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Automated validation
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/solutions/document-processing">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Risk Assessment */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">Risk Assessment</CardTitle>
                <CardDescription>
                  Advanced risk modeling and assessment with real-time monitoring and alerts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Predictive risk modeling
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Real-time monitoring
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Automated alerts
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/solutions/risk-assessment">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Data Analytics */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">Data Analytics</CardTitle>
                <CardDescription>
                  Comprehensive data analysis and insights with interactive dashboards and reporting.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Interactive dashboards
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Predictive analytics
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Custom reporting
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/solutions/data-analytics">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Fraud Detection */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">Fraud Detection</CardTitle>
                <CardDescription>
                  Advanced fraud detection and prevention with machine learning algorithms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Real-time fraud detection
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Pattern recognition
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Automated prevention
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/solutions/fraud-detection">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Why Choose Our Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with industry expertise and cutting-edge technology to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-fintech-500 to-fintech-600 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-muted-foreground">
                Our solutions deliver measurable improvements in efficiency, accuracy, and cost reduction.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-fintech-500 to-fintech-600 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-muted-foreground">
                Dedicated support team with deep industry knowledge and technical expertise.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-fintech-500 to-fintech-600 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rapid Deployment</h3>
              <p className="text-muted-foreground">
                Quick implementation with minimal disruption to your existing operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-700 dark:to-fintech-900">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-fintech-100 mb-8">
              Discover how our AI solutions can revolutionize your operations and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationButton size="lg" className="px-8 py-3 bg-white text-fintech-600 hover:bg-fintech-50">
                Schedule a Consultation
              </ConsultationButton>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 border-white text-white hover:bg-white hover:text-fintech-600 bg-transparent"
                asChild
              >
                <Link href="/about/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
