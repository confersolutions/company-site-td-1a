import type { Metadata } from "next"
import { AlertTriangle, TrendingDown, Shield, BarChart3, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConsultationButton } from "@/components/consultation-button"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Risk Agent | AI Risk Assessment | Confer Solutions AI",
  description:
    "Advanced risk assessment with our AI Risk Agent. Real-time risk scoring, fraud detection, and predictive analytics for financial services.",
}

export default function RiskAgentPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-fintech-600 to-fintech-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AI Risk Agent</h1>
              <p className="text-xl text-white/90 mb-8">
                Advanced risk assessment powered by machine learning. Real-time risk scoring, fraud detection, and
                predictive analytics that protect your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationButton size="lg" className="bg-white text-fintech-600 hover:bg-white/90">
                  Get a Demo
                </ConsultationButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-fintech-600"
                >
                  Risk Assessment
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AI Risk Assessment Dashboard - Financial Risk Analytics"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Risk Agent Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive risk management powered by advanced machine learning and predictive analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <AlertTriangle className="h-8 w-8 text-fintech-600" />,
                title: "Real-time Risk Scoring",
                description:
                  "Instant risk assessment with dynamic scoring based on multiple data sources and behavioral patterns.",
              },
              {
                icon: <TrendingDown className="h-8 w-8 text-fintech-600" />,
                title: "Fraud Detection",
                description:
                  "Advanced fraud detection using machine learning to identify suspicious patterns and anomalies.",
              },
              {
                icon: <Shield className="h-8 w-8 text-fintech-600" />,
                title: "Credit Risk Assessment",
                description:
                  "Comprehensive credit risk evaluation with alternative data sources and predictive modeling.",
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-fintech-600" />,
                title: "Portfolio Risk Analysis",
                description: "Portfolio-level risk monitoring with stress testing and scenario analysis capabilities.",
              },
              {
                icon: <Target className="h-8 w-8 text-fintech-600" />,
                title: "Predictive Analytics",
                description: "Forward-looking risk predictions using historical data and market trends.",
              },
              {
                icon: <Zap className="h-8 w-8 text-fintech-600" />,
                title: "Automated Decisions",
                description: "Automated risk-based decision making with configurable rules and thresholds.",
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

      {/* Risk Types Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Risk Assessment Types</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive risk evaluation across all aspects of financial services operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Credit Risk",
                description:
                  "Assess borrower creditworthiness and default probability using traditional and alternative data.",
                metrics: ["FICO scores", "Debt-to-income ratios", "Payment history", "Alternative data"],
              },
              {
                title: "Fraud Risk",
                description:
                  "Detect fraudulent applications and transactions using behavioral analysis and pattern recognition.",
                metrics: ["Identity verification", "Behavioral patterns", "Device fingerprinting", "Network analysis"],
              },
              {
                title: "Market Risk",
                description: "Monitor market volatility and its impact on portfolio performance and asset values.",
                metrics: ["Price volatility", "Correlation analysis", "VaR calculations", "Stress testing"],
              },
              {
                title: "Operational Risk",
                description: "Identify operational risks from process failures, system outages, and human errors.",
                metrics: ["Process monitoring", "System uptime", "Error rates", "Compliance violations"],
              },
              {
                title: "Liquidity Risk",
                description: "Assess liquidity needs and availability across different market conditions.",
                metrics: ["Cash flow analysis", "Funding sources", "Market liquidity", "Stress scenarios"],
              },
              {
                title: "Regulatory Risk",
                description: "Monitor compliance risks and regulatory changes that could impact operations.",
                metrics: ["Compliance scores", "Regulatory changes", "Audit findings", "Violation history"],
              },
            ].map((riskType, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm border-l-4 border-fintech-600">
                <h3 className="text-lg font-semibold mb-2">{riskType.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{riskType.description}</p>
                <div className="space-y-1">
                  {riskType.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-xs">
                      <div className="w-2 h-2 bg-fintech-600 rounded-full mr-2"></div>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Risk Management Performance</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proven results in risk reduction and improved decision-making accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "85%", label: "Fraud Detection Accuracy" },
              { metric: "40%", label: "Reduction in Default Rates" },
              { metric: "< 100ms", label: "Real-time Risk Scoring" },
              { metric: "99.9%", label: "System Uptime" },
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Risk Agent Applications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive risk management solutions for every financial services scenario.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Mortgage Lending",
                description:
                  "Comprehensive risk assessment for mortgage applications including credit, fraud, and compliance risks.",
                benefits: [
                  "Automated underwriting",
                  "Fraud prevention",
                  "Regulatory compliance",
                  "Portfolio risk management",
                ],
              },
              {
                title: "Commercial Banking",
                description: "Enterprise risk management for commercial loans, deposits, and treasury operations.",
                benefits: [
                  "Credit risk modeling",
                  "Operational risk monitoring",
                  "Liquidity management",
                  "Stress testing",
                ],
              },
              {
                title: "Investment Management",
                description: "Portfolio risk analysis and management for investment funds and wealth management.",
                benefits: [
                  "Market risk analysis",
                  "Performance attribution",
                  "Risk-adjusted returns",
                  "Compliance monitoring",
                ],
              },
              {
                title: "Insurance Underwriting",
                description: "Risk assessment for insurance applications and claims processing automation.",
                benefits: [
                  "Automated underwriting",
                  "Claims fraud detection",
                  "Risk pricing",
                  "Portfolio optimization",
                ],
              },
            ].map((useCase, index) => (
              <div key={index} className="bg-card p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-muted-foreground mb-6">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-fintech-600 rounded-full mr-3"></div>
                      {benefit}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Risk Management?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Reduce risk exposure and improve decision-making with AI-powered risk assessment and monitoring.
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
              Risk Assessment
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
