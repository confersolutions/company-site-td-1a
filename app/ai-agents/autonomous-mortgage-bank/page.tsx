import type { Metadata } from "next"
import { ConsultationButton } from "@/components/consultation-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Shield, TrendingUp, Zap, Target, Brain, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Autonomous Mortgage Bank | Confer Solutions AI",
  description:
    "Zero Ops Staff. Zero Compliance Analysts. Zero Offshore Support. Turn on five AI agents, and you're in business.",
  keywords: "autonomous mortgage bank, AI mortgage automation, zero ops staff, mortgage compliance automation, AI agents, mortgage technology, automated lending, mortgage software",
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
    canonical: "/ai-agents/autonomous-mortgage-bank",
  },
  openGraph: {
    title: "Autonomous Mortgage Bank | Confer Solutions AI",
    description: "Zero Ops Staff. Zero Compliance Analysts. Zero Offshore Support. Turn on five AI agents, and you're in business.",
    url: "https://confersolutions.ai/ai-agents/autonomous-mortgage-bank",
    siteName: "Confer Solutions AI",
    images: [
      {
        url: "https://confersolutions.ai/og-autonomous-mortgage-bank.jpg",
        width: 1200,
        height: 630,
        alt: "Autonomous Mortgage Bank Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autonomous Mortgage Bank | Confer Solutions AI",
    description: "Zero Ops Staff. Zero Compliance Analysts. Zero Offshore Support. Turn on five AI agents, and you're in business.",
    images: ["https://confersolutions.ai/og-autonomous-mortgage-bank.jpg"],
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

export default function AutonomousMortgageBankPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Zero Ops Staff. Zero Compliance Analysts. Zero Offshore Support.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Turn on five AI agents, and you're in business.
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-5xl mx-auto">
              The mortgage industry's real barrier isn't finding capital—it's the human infrastructure behind compliant
              operations. Our fully modular, agentic system replaces or augments every core function in the mortgage
              lifecycle, from initial sales through post-closing compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationButton size="lg" className="text-lg px-8 py-4" showArrow={false}>
                Schedule Demo
              </ConsultationButton>
              <ConsultationButton variant="outline" size="lg" className="text-lg px-8 py-4">
                Get Implementation Plan
              </ConsultationButton>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">The Real Barriers to Mortgage Success</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <Users className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Startups Can't Break In</h3>
                <p className="text-muted-foreground">
                  Licensing is just the beginning; running compliant workflows requires full-time ops teams, audits,
                  processors, and underwriters.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <Shield className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Credit Unions Getting Squeezed</h3>
                <p className="text-muted-foreground">
                  No automation, can't afford offshore teams, and every new loan type means new operational risk.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <TrendingUp className="h-12 w-12 text-fintech-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">Top Banks Struggle with Expansion</h3>
                <p className="text-muted-foreground">
                  Adding USDA/RD or construction-to-perm loans isn't about capital—it's coordination costs: tools,
                  training, teams, and timelines.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Complete Autonomous Mortgage Bank</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Each agent replicates a specific mortgage function and is trained on proprietary knowledge sources:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <Zap className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Sales Agent</h3>
                <p className="text-sm text-muted-foreground">24/7 lead conversion with mortgage expertise</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <Target className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Processing Agent</h3>
                <p className="text-sm text-muted-foreground">Automated loan processing and verification</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <Brain className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Underwriting Agent</h3>
                <p className="text-sm text-muted-foreground">Intelligent decisions with institutional memory</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <Phone className="h-12 w-12 text-fintech-600 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Voice Agent</h3>
                <p className="text-sm text-muted-foreground">AI that directs human action</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-fintech-50 dark:bg-fintech-950/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Proprietary Knowledge Sources</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4">Training Data</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-fintech-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Thousands of anonymized Loan Estimates and Closing Disclosures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-fintech-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>RESPA/TILA and state-specific overlays</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-fintech-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Vectorized "shadow processor memory" from 20+ years of Wells Fargo operations</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Competitive Advantages</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-fintech-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Learn each lender's operations and adjust logic accordingly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-fintech-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Enforce custom overlays and exceptions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-fintech-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Generate structured audit trails with step-by-step justifications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-fintech-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Self-improving operational intelligence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-fintech-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Autonomous Mortgage Bank?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the mortgage lenders who are already operating with zero ops staff and full compliance automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cal.com/yatin-karnik/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-lg px-8 py-4 rounded-md bg-white text-fintech-600 font-semibold border border-white hover:bg-fintech-50 transition-colors"
            >
              Schedule Implementation Call
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
