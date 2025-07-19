import type { Metadata } from "next"
import {
  Building2,
  FileText,
  Shield,
  Zap,
  Brain,
  BarChart3,
  CheckCircle,
  TrendingUp,
  Globe,
  Package,
  Heart,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ConsultationButton } from "@/components/consultation-button"

export const metadata: Metadata = {
  title: "Solutions | Confer Solutions",
  description: "Explore Confer's AI-powered solutions across finance, retail, and healthcare industries.",
}

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Solutions for Every Challenge</h1>
            <p className="text-xl text-muted-foreground mb-8">
              AI Powered Solutions are the key to unlocking automation, intelligence, and business growth. We help
              businesses design, develop, and deploy AI solutions that enhance efficiency, automate processes, and drive
              measurable impact.
            </p>
            <div className="space-x-4">
              <ConsultationButton size="lg">Explore Solutions</ConsultationButton>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Solutions</h2>
              <p className="text-xl text-muted-foreground">Empowering businesses with cutting-edge AI technologies.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-6 mx-auto">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-blue-600 dark:text-blue-400">
                    Intelligent Automation
                  </h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Automate repetitive tasks and streamline workflows with our AI-powered automation solutions.
                  </p>
                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-emerald-200 dark:border-emerald-800">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mb-6 mx-auto">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-emerald-600 dark:text-emerald-400">
                    Document Processing
                  </h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Extract valuable insights from documents with our advanced document processing technology.
                  </p>
                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 dark:border-purple-800">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-6 mx-auto">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-purple-600 dark:text-purple-400">
                    Predictive Analytics
                  </h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Make data-driven decisions with our predictive analytics solutions.
                  </p>
                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
              <p className="text-xl text-muted-foreground">
                Coloring the gamut of industries with AI-powered solutions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Finance Industry */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-6 mx-auto">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-blue-600 dark:text-blue-400">Finance</h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Our flagship expertise in mortgage banking, lending operations, and financial services automation.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Mortgage Processing Automation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Risk Assessment & Compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Document Processing & Verification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Fraud Detection & Prevention</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Customer Service Automation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Retail Industry */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-emerald-200 dark:border-emerald-800">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mb-6 mx-auto">
                    <Package className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-emerald-600 dark:text-emerald-400">
                    Retail & Logistics
                  </h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Streamlining supply chain operations, inventory management, and customer experience optimization.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm">Supply Chain Optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm">Inventory Management AI</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm">Demand Forecasting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm">Customer Behavior Analytics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm">Automated Order Processing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Healthcare Industry */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-purple-200 dark:border-purple-800">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-6 mx-auto">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-purple-600 dark:text-purple-400">
                    Healthcare
                  </h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Enhancing patient care through intelligent automation, data analysis, and operational efficiency.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-500" />
                      <span className="text-sm">Patient Data Management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-500" />
                      <span className="text-sm">Medical Document Processing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-500" />
                      <span className="text-sm">Appointment Scheduling AI</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-500" />
                      <span className="text-sm">Clinical Decision Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-500" />
                      <span className="text-sm">Compliance & Reporting</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Industry Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  3+
                </div>
                <p className="text-muted-foreground">Industries Served</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <p className="text-muted-foreground">AI Solutions Deployed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <p className="text-muted-foreground">Operational Capability</p>
              </div>
            </div>

            {/* Cross-Industry Benefits */}
            <div className="mt-16">
              <Card className="bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 dark:from-blue-950 dark:via-purple-950 dark:to-emerald-950 border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-center mb-6">Cross-Industry AI Excellence</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <Zap className="h-8 w-8 mx-auto mb-3 text-blue-500" />
                      <h4 className="font-semibold mb-2">Automation</h4>
                      <p className="text-sm text-muted-foreground">Streamline operations across all industries</p>
                    </div>
                    <div className="text-center">
                      <Shield className="h-8 w-8 mx-auto mb-3 text-emerald-500" />
                      <h4 className="font-semibold mb-2">Compliance</h4>
                      <p className="text-sm text-muted-foreground">Industry-specific regulatory adherence</p>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="h-8 w-8 mx-auto mb-3 text-purple-500" />
                      <h4 className="font-semibold mb-2">Efficiency</h4>
                      <p className="text-sm text-muted-foreground">Measurable performance improvements</p>
                    </div>
                    <div className="text-center">
                      <Globe className="h-8 w-8 mx-auto mb-3 text-orange-500" />
                      <h4 className="font-semibold mb-2">Scalability</h4>
                      <p className="text-sm text-muted-foreground">Solutions that grow with your business</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today to learn more about our AI solutions and how we can help you achieve your business goals.
            </p>
            <ConsultationButton size="lg">Get Started</ConsultationButton>
          </div>
        </div>
      </section>
    </>
  )
}
