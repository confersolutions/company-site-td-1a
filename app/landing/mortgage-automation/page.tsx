import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Zap, Shield, Users, TrendingUp, FileText, Clock, AlertTriangle, Target } from "lucide-react"
import { ConsultationButton } from "@/components/consultation-button"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Complete Mortgage Automation Suite | 5 AI Agents Transform Lending | Confer Solutions AI",
  description:
    "Deploy 5 intelligent AI agents to automate your entire mortgage process from lead to post-closing. Eliminate staffing bottlenecks, reduce cycle times by 80%, and ensure compliance at scale.",
  keywords: [
    "mortgage automation suite",
    "AI mortgage agents",
    "automated mortgage processing",
    "mortgage AI platform",
    "lending automation software",
    "mortgage workflow automation",
    "AI underwriting agent",
    "mortgage closing automation",
    "post-closing automation",
    "mortgage sales automation",
    "lending process automation",
    "mortgage compliance automation",
    "AI mortgage technology",
    "automated loan processing",
    "mortgage efficiency platform",
    "lending AI solutions",
    "mortgage bank automation",
    "credit union automation",
    "mortgage cycle time reduction",
    "mortgage staffing solutions",
  ],
  authors: [{ name: "Confer Solutions" }],
  creator: "Confer Solutions",
  publisher: "Confer Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://confersolutions.ai"),
  alternates: {
    canonical: "/landing/mortgage-automation",
  },
  openGraph: {
    title: "Complete Mortgage Automation Suite | 5 AI Agents Transform Lending | Confer Solutions AI",
    description:
      "Deploy 5 intelligent AI agents to automate your entire mortgage process from lead to post-closing. Eliminate staffing bottlenecks, reduce cycle times by 80%, and ensure compliance at scale.",
    url: "https://confersolutions.ai/landing/mortgage-automation",
    siteName: "Confer Solutions",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "Complete Mortgage Automation Suite - 5 AI Agents",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Mortgage Automation Suite | 5 AI Agents Transform Lending | Confer Solutions AI",
    description:
      "Deploy 5 intelligent AI agents to automate your entire mortgage process from lead to post-closing. Eliminate staffing bottlenecks, reduce cycle times by 80%, and ensure compliance at scale.",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
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

export default function MortgageAutomationLanding() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Complete Mortgage Automation Suite",
    description:
      "5 intelligent AI agents that automate the entire mortgage process from lead generation to post-closing, reducing cycle times by 80% and eliminating staffing bottlenecks",
    url: "https://confersolutions.ai/landing/mortgage-automation",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free consultation and demo available",
    },
    provider: {
      "@type": "Organization",
      name: "Confer Solutions",
      url: "https://confersolutions.ai",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "150",
    },
  }

  const painPoints = [
    {
      icon: Users,
      title: "Staffing Bottlenecks",
      description: "Chronic understaffing and high turnover create processing delays and capacity constraints",
    },
    {
      icon: Clock,
      title: "Long Cycle Times",
      description: "Manual processes and handoffs extend loan timelines, frustrating borrowers and losing deals",
    },
    {
      icon: AlertTriangle,
      title: "Manual Errors",
      description: "Human mistakes in data entry, document review, and calculations create costly rework",
    },
    {
      icon: Shield,
      title: "Compliance Risk",
      description: "Inconsistent processes and oversight gaps expose your institution to regulatory penalties",
    },
    {
      icon: TrendingUp,
      title: "Scalability Limits",
      description: "Growth requires proportional staff increases, limiting profitability and market expansion",
    },
  ]

  const agents = [
    {
      name: "Sales Agent",
      icon: Target,
      color: "from-blue-500 to-blue-600",
      description: "Intelligent lead engagement and pre-qualification",
      capabilities: [
        "Engages leads across web, email, and SMS channels",
        "Captures borrower intent using natural language processing",
        "Pre-qualifies applicants with dynamic questioning",
        "Routes qualified leads to appropriate loan officers",
        "Maintains 24/7 availability for prospect engagement",
      ],
      impact: "3x lead conversion rate, 24/7 availability",
    },
    {
      name: "Processing Agent",
      icon: FileText,
      color: "from-green-500 to-green-600",
      description: "Automated document management and borrower coordination",
      capabilities: [
        "Automates document intake and validation",
        "Manages borrower follow-ups and communications",
        "Completes processing checklists with minimal oversight",
        "Tracks document status and missing items",
        "Escalates exceptions to human processors",
      ],
      impact: "75% reduction in processing time, 90% fewer manual tasks",
    },
    {
      name: "Underwriting Agent",
      icon: Shield,
      color: "from-purple-500 to-purple-600",
      description: "Dynamic risk assessment and compliance validation",
      capabilities: [
        "Evaluates borrower eligibility using dynamic guidelines",
        "Runs comprehensive compliance checks automatically",
        "Flags edge cases and exceptions for human review",
        "Generates detailed underwriting summaries",
        "Maintains audit trails for all decisions",
      ],
      impact: "60% faster underwriting decisions, 99.5% compliance accuracy",
    },
    {
      name: "Closing Agent",
      icon: Check,
      color: "from-orange-500 to-orange-600",
      description: "Seamless closing coordination and documentation",
      capabilities: [
        "Coordinates closing disclosures and documentation",
        "Manages eSign packages and borrower scheduling",
        "Ensures compliance with timeline requirements",
        "Tracks funding conditions and clearances",
        "Automates post-closing document distribution",
      ],
      impact: "50% faster closings, 95% on-time delivery",
    },
    {
      name: "Post-Closing Agent",
      icon: TrendingUp,
      color: "from-red-500 to-red-600",
      description: "Comprehensive post-closing management and delivery",
      capabilities: [
        "Manages trailing document collection",
        "Automates investor delivery packages",
        "Conducts QC review and exception handling",
        "Ensures audit readiness and compliance",
        "Tracks loan performance and early payment defaults",
      ],
      impact: "80% reduction in post-closing defects, automated investor delivery",
    },
  ]

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-fintech-500 to-fintech-600 text-white text-lg px-6 py-2">
                <Zap className="mr-2 h-5 w-5" />
                Complete Mortgage Automation Suite
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
                5 AI Agents. One Complete Solution.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
                Deploy intelligent AI agents across your entire mortgage workflow. From lead engagement to post-closing
                delivery, eliminate staffing bottlenecks and reduce cycle times by 80%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <ConsultationButton
                  source="mortgage-automation-hero"
                  showArrow={false}
                  className="bg-gradient-to-r from-fintech-500 to-fintech-600 hover:from-fintech-600 hover:to-fintech-700 text-white px-8 py-4 text-lg font-semibold"
                >
                  Get Your Custom Demo
                </ConsultationButton>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 bg-transparent">
                  View ROI Calculator
                </Button>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="text-center border-0 bg-gradient-to-br from-fintech-50 to-fintech-100 dark:from-fintech-900/20 dark:to-fintech-800/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-fintech-600 mb-2">80%</div>
                    <div className="text-sm text-muted-foreground">Faster Cycle Times</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-0 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
                    <div className="text-sm text-muted-foreground">Fewer Manual Tasks</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">99.5%</div>
                    <div className="text-sm text-muted-foreground">Compliance Accuracy</div>
                  </CardContent>
                </Card>
                <Card className="text-center border-0 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Automated Processing</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Challenges Holding Your Institution Back</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Traditional mortgage operations face critical bottlenecks that limit growth and profitability. Our AI
                agents solve these fundamental challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {painPoints.map((point, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                      <point.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Agents Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-background">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Your Complete Mortgage Automation Suite</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Five specialized AI agents work together seamlessly, handling every aspect of your mortgage process with
                precision and intelligence.
              </p>
            </div>

            <div className="space-y-12">
              {agents.map((agent, index) => (
                <Card
                  key={index}
                  className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={`lg:flex ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <div className="lg:w-1/3 p-8 bg-gradient-to-br from-background to-muted/20 flex flex-col justify-center">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${agent.color} rounded-2xl flex items-center justify-center mb-6`}
                      >
                        <agent.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{agent.name}</h3>
                      <p className="text-lg text-muted-foreground mb-4">{agent.description}</p>
                      <Badge className={`bg-gradient-to-r ${agent.color} text-white w-fit`}>{agent.impact}</Badge>
                    </div>
                    <div className="lg:w-2/3 p-8">
                      <h4 className="text-xl font-semibold mb-4">Key Capabilities:</h4>
                      <ul className="space-y-3">
                        {agent.capabilities.map((capability, capIndex) => (
                          <li key={capIndex} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Mortgage Operations</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real-world results from mortgage banks and credit unions using our complete automation suite.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-fintech-500 to-fintech-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Faster Processing</h3>
                  <p className="text-3xl font-bold text-fintech-600 mb-2">21 Days → 6 Days</p>
                  <p className="text-muted-foreground">Average loan cycle time reduction</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Staffing Efficiency</h3>
                  <p className="text-3xl font-bold text-green-600 mb-2">3x</p>
                  <p className="text-muted-foreground">Loan volume per processor</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Compliance Score</h3>
                  <p className="text-3xl font-bold text-purple-600 mb-2">99.5%</p>
                  <p className="text-muted-foreground">Automated compliance accuracy</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-fintech-600 to-fintech-800 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Deploy Your AI Mortgage Team?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join forward-thinking mortgage banks and credit unions who have already transformed their operations with
              our complete automation suite. See how 5 AI agents can revolutionize your lending process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationButton
                source="mortgage-automation-cta"
                showArrow={false}
                className="bg-white text-fintech-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                Schedule Your Demo
              </ConsultationButton>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-fintech-600 px-8 py-4 text-lg bg-transparent"
              >
                Download Case Study
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-6">
              Implementation typically takes 30-60 days. ROI realized within 90 days.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
