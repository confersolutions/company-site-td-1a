import type { Metadata } from "next"
import { Shield, FileCheck, AlertTriangle, CheckCircle, BarChart3, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConsultationButton } from "@/components/consultation-button"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Compliance Agent | AI Regulatory Compliance | Confer Solutions AI",
  description:
    "Ensure regulatory compliance with our AI Compliance Agent. Automated monitoring, risk assessment, and reporting for financial services.",
  keywords: [
    "AI compliance agent",
    "regulatory compliance automation",
    "financial compliance monitoring",
    "risk assessment AI",
    "compliance reporting software",
    "regulatory technology",
    "automated compliance checks",
    "financial services compliance",
    "compliance risk management",
    "regulatory monitoring AI",
    "compliance automation platform",
    "AI regulatory oversight",
    "compliance audit automation",
    "regtech solutions",
    "AI compliance monitoring"
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
    canonical: "/ai-agents/compliance-agent",
  },
  openGraph: {
    title: "Compliance Agent | AI Regulatory Compliance | Confer Solutions AI",
    description:
      "Ensure regulatory compliance with our AI Compliance Agent. Automated monitoring, risk assessment, and reporting for financial services.",
    url: "https://confersolutions.ai/ai-agents/compliance-agent",
    siteName: "Confer Solutions",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "AI Compliance Agent - Automated Regulatory Monitoring and Risk Assessment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compliance Agent | AI Regulatory Compliance | Confer Solutions AI",
    description:
      "Ensure regulatory compliance with our AI Compliance Agent. Automated monitoring, risk assessment, and reporting for financial services.",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
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

export default function ComplianceAgentPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-fintech-600 to-fintech-800 pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AI Compliance Agent</h1>
              <p className="text-xl text-white/90 mb-8">
                Stay ahead of regulatory requirements with intelligent compliance monitoring. Automated risk assessment,
                real-time alerts, and comprehensive reporting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationButton size="lg" className="bg-white text-fintech-600 hover:bg-white/90" source="demo" showArrow={false}>
                  Get a Demo
                </ConsultationButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-fintech-600"
                >
                  Compliance Guide
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AI Compliance Monitoring - Regulatory Technology Dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compliance Agent Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive compliance monitoring powered by AI that understands regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-fintech-600" />,
                title: "Regulatory Monitoring",
                description: "Continuous monitoring of regulatory changes and automatic updates to compliance rules.",
              },
              {
                icon: <FileCheck className="h-8 w-8 text-fintech-600" />,
                title: "Document Compliance",
                description: "Automated review of documents for regulatory compliance and missing information.",
              },
              {
                icon: <AlertTriangle className="h-8 w-8 text-fintech-600" />,
                title: "Risk Assessment",
                description: "Real-time risk scoring and identification of potential compliance violations.",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-fintech-600" />,
                title: "Audit Trail",
                description: "Comprehensive audit trails with detailed logging of all compliance activities.",
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-fintech-600" />,
                title: "Compliance Reporting",
                description: "Automated generation of compliance reports for regulators and internal stakeholders.",
              },
              {
                icon: <Clock className="h-8 w-8 text-fintech-600" />,
                title: "Real-time Alerts",
                description: "Instant notifications for compliance violations and regulatory deadline reminders.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Coverage */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Regulatory Coverage</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coverage of financial services regulations and compliance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "TRID/RESPA",
                description:
                  "Truth in Lending Act and Real Estate Settlement Procedures Act compliance for mortgage lending.",
                coverage: [
                  "LE/CD timing requirements",
                  "Fee tolerance monitoring",
                  "Disclosure accuracy",
                  "Consumer protection",
                ],
              },
              {
                title: "BSA/AML",
                description: "Bank Secrecy Act and Anti-Money Laundering compliance monitoring and reporting.",
                coverage: [
                  "Suspicious activity detection",
                  "CTR/SAR reporting",
                  "Customer due diligence",
                  "Risk assessment",
                ],
              },
              {
                title: "GDPR/CCPA",
                description: "Data privacy and protection compliance for customer information handling.",
                coverage: [
                  "Data consent tracking",
                  "Right to deletion",
                  "Data breach notification",
                  "Privacy impact assessment",
                ],
              },
              {
                title: "SOX Compliance",
                description: "Sarbanes-Oxley Act compliance for financial reporting and internal controls.",
                coverage: [
                  "Internal control testing",
                  "Financial reporting accuracy",
                  "Audit documentation",
                  "Executive certification",
                ],
              },
              {
                title: "FAIR Lending",
                description: "Fair lending practices monitoring and discrimination prevention.",
                coverage: [
                  "Disparate impact analysis",
                  "Pricing fairness",
                  "Marketing compliance",
                  "Redlining prevention",
                ],
              },
              {
                title: "CFPB Regulations",
                description: "Consumer Financial Protection Bureau rules and examination requirements.",
                coverage: [
                  "Consumer complaint handling",
                  "Examination preparation",
                  "Regulatory guidance",
                  "Enforcement actions",
                ],
              },
            ].map((regulation, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm border-l-4 border-fintech-600">
                <h3 className="text-lg font-semibold mb-2">{regulation.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{regulation.description}</p>
                <ul className="space-y-1">
                  {regulation.coverage.map((item, idx) => (
                    <li key={idx} className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-fintech-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compliance Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Reduce compliance costs while improving accuracy and reducing regulatory risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "75%", label: "Reduction in Compliance Costs" },
              { metric: "99.5%", label: "Regulatory Accuracy Rate" },
              { metric: "24/7", label: "Continuous Monitoring" },
              { metric: "< 1hr", label: "Violation Detection Time" },
            ].map((stat, index) => (
              <div key={index} className="text-center bg-card p-6 rounded-lg shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-fintech-600 mb-2">{stat.metric}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compliance Applications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive compliance solutions for every aspect of financial services operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Mortgage Lending Compliance",
                description: "End-to-end compliance monitoring for mortgage origination, processing, and closing.",
                features: [
                  "TRID compliance monitoring",
                  "QM/ATR verification",
                  "Fair lending analysis",
                  "Audit preparation",
                ],
              },
              {
                title: "Banking Operations",
                description: "Comprehensive compliance for deposit accounts, lending, and customer interactions.",
                features: ["BSA/AML monitoring", "CRA compliance", "Consumer protection", "Regulatory reporting"],
              },
              {
                title: "Investment Services",
                description: "Regulatory compliance for investment advisory and brokerage operations.",
                features: [
                  "Fiduciary duty monitoring",
                  "Suitability analysis",
                  "Disclosure requirements",
                  "Risk management",
                ],
              },
              {
                title: "Insurance Operations",
                description: "Compliance monitoring for insurance underwriting, claims, and customer service.",
                features: [
                  "State regulation compliance",
                  "Claims handling standards",
                  "Marketing compliance",
                  "Privacy protection",
                ],
              },
            ].map((useCase, index) => (
              <div key={index} className="bg-card p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-muted-foreground mb-6">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {useCase.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-fintech-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-fintech-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Automate Compliance?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Reduce compliance risk and costs with AI-powered regulatory monitoring and reporting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationButton size="lg" className="bg-white text-fintech-600 hover:bg-white/90">
              Schedule a Demo
            </ConsultationButton>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-fintech-600"
            >
              Compliance Assessment
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
