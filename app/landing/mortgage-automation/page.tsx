import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, Zap, Shield, Users, TrendingUp } from "lucide-react"
import { ConsultationButton } from "@/components/consultation-button"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Mortgage Automation Solutions | Transform Your Lending Process | Confer Solutions AI",
  description: "Revolutionize your mortgage business with AI-powered automation. Reduce processing time by 80%, improve accuracy to 99.7%, and scale your operations effortlessly with our comprehensive AI platform.",
  keywords: [
    "mortgage automation",
    "AI mortgage processing",
    "automated underwriting",
    "mortgage technology",
    "lending automation",
    "mortgage AI solutions",
    "loan processing automation",
    "mortgage workflow automation",
    "AI lending platform",
    "mortgage efficiency software",
    "mortgage automation software",
    "AI mortgage underwriting",
    "automated loan processing",
    "mortgage process automation",
    "lending technology solutions",
    "mortgage AI platform",
    "automated mortgage approval",
    "mortgage workflow optimization",
    "AI-powered lending",
    "mortgage automation tools"
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
    title: "Mortgage Automation Solutions | Transform Your Lending Process | Confer Solutions AI",
    description: "Revolutionize your mortgage business with AI-powered automation. Reduce processing time by 80%, improve accuracy to 99.7%, and scale your operations effortlessly.",
    url: "https://confersolutions.ai/landing/mortgage-automation",
    siteName: "Confer Solutions",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "Mortgage Automation - AI-Powered Lending Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortgage Automation Solutions | Transform Your Lending Process | Confer Solutions AI",
    description: "Revolutionize your mortgage business with AI-powered automation. Reduce processing time by 80%, improve accuracy to 99.7%, and scale your operations effortlessly.",
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
    "name": "Mortgage Automation Solutions",
    "description": "AI-powered mortgage automation platform that reduces processing time by 80% and improves accuracy to 99.7%",
    "url": "https://confersolutions.ai/landing/mortgage-automation",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free demo available"
    },
    "provider": {
      "@type": "Organization",
      "name": "Confer Solutions",
      "url": "https://confersolutions.ai"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "150"
    }
  }

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
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-fintech-500 to-fintech-600 text-white">
              <Zap className="mr-2 h-4 w-4" />
              AI-Powered Mortgage Automation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Transform Your Mortgage Business with AI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Reduce processing time by 80%, improve accuracy to 99.7%, and scale your operations effortlessly with our AI-powered mortgage automation platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationButton 
                source="demo" 
                showArrow={false}
                className="bg-gradient-to-r from-fintech-500 to-fintech-600 hover:from-fintech-600 hover:to-fintech-700 text-white px-8 py-3 text-lg"
              >
                Get Free Demo
              </ConsultationButton>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                Watch Demo Video
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 bg-gradient-to-br from-fintech-50 to-fintech-100 dark:from-fintech-900/20 dark:to-fintech-800/20">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-fintech-600 mb-2">80%</div>
                <div className="text-muted-foreground">Faster Processing</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 mb-2">99.7%</div>
                <div className="text-muted-foreground">Accuracy Rate</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-muted-foreground">Automated Processing</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Mortgage Automation Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From application to closing, our AI agents handle every step of the mortgage process with precision and speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-fintech-500 to-fintech-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>AI Sales Agent</CardTitle>
                <CardDescription>
                  Intelligent lead qualification and customer engagement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    24/7 lead qualification
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Personalized responses
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    CRM integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>AI Underwriting Agent</CardTitle>
                <CardDescription>
                  Automated risk assessment and loan approval
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Instant credit analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Document verification
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Compliance checking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle>AI Processing Agent</CardTitle>
                <CardDescription>
                  Streamlined document processing and workflow management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Document extraction
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Automated workflows
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Real-time tracking
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-fintech-600 to-fintech-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Mortgage Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of lenders who have already automated their mortgage processes with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationButton 
              source="demo" 
              showArrow={false}
              className="bg-white text-fintech-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            >
              Start Free Trial
            </ConsultationButton>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-fintech-600 px-8 py-3 text-lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
      </div>
    </>
  )
} 