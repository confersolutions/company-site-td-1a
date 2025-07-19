import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  FileText,
  FileSearch,
  FileCheck,
  Zap,
  Shield,
  Code,
  Database,
  RefreshCw,
} from "lucide-react"
import Link from "next/link"
import { ConsultationButton } from "@/components/consultation-button"

export const metadata: Metadata = {
  title: "Document Processing Solutions | Confer Solutions",
  description:
    "AI-powered document processing for mortgage and financial services, featuring advanced LE/CD extraction, self-healing PDF parser, and integration with our MCP Mortgage Server.",
}

export default function DocumentProcessingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-fintech-950 via-fintech-900 to-fintech-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Intelligent Document Processing for Financial Services
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Transform your document workflow with AI-powered extraction, analysis, and processing of complex
                financial documents including Loan Estimates (LE) and Closing Disclosures (CD).
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationButton size="lg" className="bg-white text-fintech-900 hover:bg-white/90">
                  Schedule a Demo
                </ConsultationButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  View Technical Specs
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Document Processing System"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fintech-950/80 to-transparent"></div>

                {/* Document processing overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[80%] h-[80%] bg-white/90 dark:bg-fintech-800/90 backdrop-blur-md rounded-xl shadow-lg p-4 overflow-hidden">
                    <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3 mb-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold mr-2">
                          <FileText className="h-4 w-4" />
                        </div>
                        <span className="font-semibold">Document Analyzer</span>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 h-[calc(100%-50px)]">
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 overflow-hidden relative">
                        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                          LE Document
                        </div>
                        <div className="h-full flex flex-col">
                          <div className="w-full h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                          <div className="w-3/4 h-3 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                          <div className="flex justify-between mb-2">
                            <div className="w-1/3 h-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
                            <div className="w-1/3 h-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
                          </div>
                          <div className="w-full h-0.5 bg-gray-300 dark:bg-gray-600 mb-2"></div>
                          <div className="grid grid-cols-2 gap-2 mb-2">
                            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 overflow-y-auto">
                        <div className="mb-3">
                          <div className="text-xs font-semibold mb-1">Document Type</div>
                          <div className="text-sm bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 py-1 px-2 rounded">
                            Loan Estimate (LE)
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="text-xs font-semibold mb-1">Loan Amount</div>
                          <div className="text-sm">$320,500.00</div>
                        </div>
                        <div className="mb-3">
                          <div className="text-xs font-semibold mb-1">Interest Rate</div>
                          <div className="text-sm">3.125%</div>
                        </div>
                        <div className="mb-3">
                          <div className="text-xs font-semibold mb-1">Monthly Payment</div>
                          <div className="text-sm">$1,372.45</div>
                        </div>
                        <div className="mb-3">
                          <div className="text-xs font-semibold mb-1">Closing Costs</div>
                          <div className="text-sm">$8,430.00</div>
                        </div>
                        <div className="mb-3">
                          <div className="text-xs font-semibold mb-1">Confidence Score</div>
                          <div className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 py-1 px-2 rounded">
                            99.7%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LE/CD Document Processing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">LE/CD Document Processing</h2>
            <p className="text-xl text-muted-foreground">
              Our specialized AI models extract, validate, and analyze critical information from Loan Estimate (LE) and
              Closing Disclosure (CD) documents with unmatched accuracy and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-3">Loan Estimate (LE) Processing</h3>
                  <p className="text-muted-foreground mb-4">
                    Our AI system extracts all critical fields from LE documents, including loan terms, projected
                    payments, closing costs, and loan comparison data with 99.5% accuracy, ensuring TRID compliance.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Loan terms extraction</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Payment schedule analysis</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Closing cost breakdown</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">APR & finance charge validation</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-3">Closing Disclosure (CD) Processing</h3>
                  <p className="text-muted-foreground mb-4">
                    Process complex CD documents to extract final loan terms, closing costs, and cash to close figures,
                    with automatic comparison to LE documents to identify changes and ensure compliance.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Final loan terms verification</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Closing cost reconciliation</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Cash to close calculation</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">LE-CD comparison</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-3">Compliance Verification</h3>
                  <p className="text-muted-foreground mb-4">
                    Automatically verify compliance with TRID, RESPA, and other regulatory requirements, flagging
                    potential issues and providing detailed compliance reports for audit purposes.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">TRID compliance checks</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Tolerance violation detection</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Fee categorization</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Audit trail generation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-8 border border-cyan-200 dark:border-cyan-800">
                <h3 className="text-xl font-semibold mb-6 text-center">Document Processing Workflow</h3>
                <div className="relative h-[400px]">
                  <div className="absolute top-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Document Ingestion</h4>
                        <p className="text-xs text-muted-foreground">Secure upload and initial classification</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[25%] left-0 right-0 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">AI-Powered Extraction</h4>
                        <p className="text-xs text-muted-foreground">
                          Self-healing PDF parser extracts structured data
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[50%] left-0 right-0 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Validation & Enrichment</h4>
                        <p className="text-xs text-muted-foreground">
                          Data validation, error correction, and enrichment
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[75%] left-0 right-0 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-semibold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Integration & Analysis</h4>
                        <p className="text-xs text-muted-foreground">MCP server integration and compliance analysis</p>
                      </div>
                    </div>
                  </div>

                  {/* Connecting lines */}
                  <div className="absolute top-[12%] left-[50%] h-[13%] w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="absolute top-[37%] left-[50%] h-[13%] w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="absolute top-[62%] left-[50%] h-[13%] w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Healing PDF Parser Bot Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Self-Healing PDF Parser Bot</h2>
            <p className="text-xl text-muted-foreground">
              Our revolutionary self-healing PDF parser combines advanced computer vision, machine learning, and
              adaptive template matching to handle even the most challenging document formats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg w-fit mb-6">
                <FileSearch className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Adaptive Template Recognition</h3>
              <p className="text-muted-foreground mb-4">
                Our parser automatically identifies document types and adapts to variations in layout, formatting, and
                structure without requiring pre-defined templates for every document version.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dynamic template matching</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Layout variation handling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Multi-version support</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg w-fit mb-6">
                <RefreshCw className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Self-Healing Capabilities</h3>
              <p className="text-muted-foreground mb-4">
                When encountering errors or anomalies, our parser automatically adjusts its extraction strategy,
                learning from corrections and continuously improving its accuracy over time.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Error detection & recovery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Continuous learning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Adaptive extraction strategies</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg w-fit mb-6">
                <FileCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Data Validation</h3>
              <p className="text-muted-foreground mb-4">
                Multi-layered validation ensures extracted data is accurate, consistent, and compliant with business
                rules and regulatory requirements, flagging anomalies for review.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Cross-field validation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Business rule enforcement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Confidence scoring</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-amber-100 dark:bg-amber-900/20 rounded-lg w-fit mb-6">
                <Zap className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">High-Performance Processing</h3>
              <p className="text-muted-foreground mb-4">
                Process thousands of documents per hour with our scalable, cloud-native architecture, delivering
                extracted data in real-time to downstream systems and workflows.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Parallel processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Sub-second extraction times</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Elastic scaling</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-lg w-fit mb-6">
                <Shield className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-muted-foreground mb-4">
                Bank-grade security with end-to-end encryption, secure document handling, and comprehensive audit
                logging to meet financial industry compliance requirements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">SOC 2 Type II compliant</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">PII data protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Comprehensive audit trails</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg w-fit mb-6">
                <Code className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">API-First Architecture</h3>
              <p className="text-muted-foreground mb-4">
                Seamlessly integrate our document processing capabilities into your existing systems and workflows with
                our comprehensive API and pre-built connectors.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">RESTful API endpoints</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Webhook notifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">SDK support for major languages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MCP Server Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Confer MCP Mortgage Server</h2>
              <p className="text-xl text-muted-foreground">
                Our open-source Mortgage Cloud Platform (MCP) server provides a comprehensive backend for mortgage
                document processing, analysis, and workflow automation.
              </p>
            </div>

            <div className="bg-card rounded-xl overflow-hidden border border-border shadow-md mb-12">
              <div className="bg-gradient-to-r from-fintech-900 to-fintech-700 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                  <Database className="h-6 w-6 text-white mr-3" />
                  <h3 className="text-xl font-semibold text-white">MCP Mortgage Server</h3>
                </div>
                <Link
                  href="https://github.com/confersolutions/mcp-mortgage-server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 transition-colors text-white text-sm py-1 px-3 rounded-md flex items-center"
                >
                  <span>GitHub</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-6">
                  The MCP Mortgage Server is an enterprise-grade, open-source platform that serves as the backbone for
                  mortgage document processing workflows. It integrates seamlessly with our document processing engine
                  and provides a comprehensive API for mortgage-specific operations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Document processing pipeline</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Mortgage-specific data models</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Workflow automation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Compliance rule engine</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Technical Stack</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Node.js / Express backend</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">MongoDB document database</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Redis for caching & queuing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Docker containerization</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-muted px-4 py-2 rounded-md overflow-x-auto mb-6">
                  <pre className="text-sm">
                    <code>
                      {`# Clone the MCP Mortgage Server repository
git clone https://github.com/confersolutions/mcp-mortgage-server.git

# Install dependencies
cd mcp-mortgage-server
npm install

# Configure environment
cp .env.example .env

# Start the server
npm run dev`}
                    </code>
                  </pre>
                </div>

                <div className="flex justify-center">
                  <Link
                    href="https://github.com/confersolutions/mcp-mortgage-server"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>
                      View on GitHub
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-fintech-50 to-blue-50 dark:from-fintech-900/20 dark:to-blue-900/10 rounded-xl p-8 border border-fintech-100 dark:border-fintech-800/30">
              <h3 className="text-xl font-semibold mb-6 text-center">MCP Server Architecture</h3>
              <div className="relative h-[300px]">
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-20 border-2 border-fintech-200 dark:border-fintech-700">
                    <div className="text-center">
                      <Database className="h-8 w-8 text-fintech-600 dark:text-fintech-400 mx-auto" />
                      <div className="text-xs font-semibold mt-1">MCP Core</div>
                    </div>
                  </div>
                </div>

                {/* Surrounding modules */}
                <div className="absolute top-[15%] left-[15%] w-20 h-20 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center z-10 border border-fintech-200 dark:border-fintech-700">
                  <div className="text-center">
                    <FileText className="h-6 w-6 text-fintech-600 dark:text-fintech-400 mx-auto" />
                    <div className="text-xs font-semibold mt-1">Document API</div>
                  </div>
                </div>

                <div className="absolute top-[15%] right-[15%] w-20 h-20 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center z-10 border border-fintech-200 dark:border-fintech-700">
                  <div className="text-center">
                    <Shield className="h-6 w-6 text-fintech-600 dark:text-fintech-400 mx-auto" />
                    <div className="text-xs font-semibold mt-1">Auth Service</div>
                  </div>
                </div>

                <div className="absolute bottom-[15%] left-[15%] w-20 h-20 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center z-10 border border-fintech-200 dark:border-fintech-700">
                  <div className="text-center">
                    <RefreshCw className="h-6 w-6 text-fintech-600 dark:text-fintech-400 mx-auto" />
                    <div className="text-xs font-semibold mt-1">Workflow</div>
                  </div>
                </div>

                <div className="absolute bottom-[15%] right-[15%] w-20 h-20 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center z-10 border border-fintech-200 dark:border-fintech-700">
                  <div className="text-center">
                    <Code className="h-6 w-6 text-fintech-600 dark:text-fintech-400 mx-auto" />
                    <div className="text-xs font-semibold mt-1">API Gateway</div>
                  </div>
                </div>

                {/* Connecting lines */}
                <svg
                  className="absolute inset-0 w-full h-full z-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 400 300"
                >
                  <line
                    x1="200"
                    y1="150"
                    x2="100"
                    y2="75"
                    stroke="currentColor"
                    className="text-fintech-200 dark:text-fintech-700"
                    strokeWidth="2"
                  />
                  <line
                    x1="200"
                    y1="150"
                    x2="300"
                    y2="75"
                    stroke="currentColor"
                    className="text-fintech-200 dark:text-fintech-700"
                    strokeWidth="2"
                  />
                  <line
                    x1="200"
                    y1="150"
                    x2="100"
                    y2="225"
                    stroke="currentColor"
                    className="text-fintech-200 dark:text-fintech-700"
                    strokeWidth="2"
                  />
                  <line
                    x1="200"
                    y1="150"
                    x2="300"
                    y2="225"
                    stroke="currentColor"
                    className="text-fintech-200 dark:text-fintech-700"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Implementation</h2>
              <p className="text-xl text-muted-foreground">
                Our document processing solution leverages cutting-edge AI techniques and a modular architecture for
                maximum accuracy and flexibility.
              </p>
            </div>

            <div className="bg-card rounded-xl overflow-hidden border border-border shadow-md">
              <div className="bg-muted px-4 py-2 border-b border-border flex items-center">
                <div className="flex space-x-1 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm font-mono text-muted-foreground">document_processor.py</span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm">
                <code className="language-python">
                  {`# Confer's Self-Healing PDF Parser Implementation

import os
import numpy as np
import cv2
import pytesseract
from pdf2image import convert_from_path
from typing import Dict, List, Any, Tuple
from dataclasses import dataclass

@dataclass
class DocumentField:
    """Represents a field extracted from a document."""
    name: str
    value: str
    confidence: float
    bounding_box: Tuple[int, int, int, int]
    page_number: int

class SelfHealingPDFParser:
    """Advanced PDF parser with self-healing capabilities for mortgage documents."""
    
    def __init__(
        self,
        model_path: str = "models/mortgage_doc_classifier.pkl",
        template_dir: str = "templates/",
        confidence_threshold: float = 0.75,
        enable_self_healing: bool = True
    ):
        self.model_path = model_path
        self.template_dir = template_dir
        self.confidence_threshold = confidence_threshold
        self.enable_self_healing = enable_self_healing
        self.load_models()
        
    def load_models(self):
        """Load document classification and field extraction models."""
        # Load document classifier model
        # Load field extraction models
        # Initialize OCR engine with optimized parameters
        pass
        
    def process_document(self, file_path: str) -> Dict[str, Any]:
        """Process a document and extract structured data."""
        # Convert PDF to images
        images = self._pdf_to_images(file_path)
        
        # Classify document type
        doc_type, doc_confidence = self._classify_document(images[0])
        
        # Select appropriate extraction strategy based on document type
        if doc_type == "loan_estimate":
            return self._process_loan_estimate(images)
        elif doc_type == "closing_disclosure":
            return self._process_closing_disclosure(images)
        else:
            return self._process_generic_document(images, doc_type)
    
    def _pdf_to_images(self, pdf_path: str) -> List[np.ndarray]:
        """Convert PDF to list of images."""
        pages = convert_from_path(pdf_path, 300)
        return [np.array(page) for page in pages]
    
    def _classify_document(self, image: np.ndarray) -> Tuple[str, float]:
        """Classify document type from first page image."""
        # Preprocess image
        # Extract features
        # Apply document classification model
        # Return document type and confidence score
        return "loan_estimate", 0.98  # Placeholder
    
    def _process_loan_estimate(self, images: List[np.ndarray]) -> Dict[str, Any]:
        """Extract data from Loan Estimate document."""
        result = {
            "document_type": "loan_estimate",
            "fields": {},
            "sections": {}
        }
        
        # Process each section of the LE
        result["sections"]["loan_terms"] = self._extract_loan_terms(images[0])
        result["sections"]["projected_payments"] = self._extract_projected_payments(images[0])
        result["sections"]["costs_at_closing"] = self._extract_costs_at_closing(images[0])
        
        # Process page 2 for closing cost details
        if len(images) > 1:
            result["sections"]["closing_cost_details"] = self._extract_closing_cost_details(images[1])
        
        # Apply self-healing if enabled and needed
        if self.enable_self_healing:
            result = self._apply_self_healing(result, "loan_estimate")
        
        # Validate extracted data
        result["validation"] = self._validate_loan_estimate(result)
        
        return result
    
    def _extract_loan_terms(self, image: np.ndarray) -> Dict[str, Any]:
        """Extract loan terms section from LE."""
        # Implementation details for extracting loan terms
        pass
    
    def _apply_self_healing(self, result: Dict[str, Any], doc_type: str) -> Dict[str, Any]:
        """Apply self-healing algorithms to fix extraction errors."""
        # Check for missing required fields
        # Apply business rules to detect inconsistencies
        # Use contextual information to infer missing values
        # Update confidence scores
        return result
    
    def _validate_loan_estimate(self, data: Dict[str, Any]) -> Dict[str, Any]:
        """Validate extracted LE data against business rules."""
        # Implement validation logic
        # Check for required fields
        # Verify calculations
        # Return validation results
        pass`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Financial Services Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our document processing solutions are deployed across various financial service domains, delivering
              measurable business value and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-700 p-6 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Mortgage Processing</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Automate the extraction and validation of critical data from mortgage documents, reducing processing
                  time and ensuring compliance with regulatory requirements.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>LE/CD processing and comparison</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Income verification document analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Automated compliance checking</span>
                  </li>
                </ul>
                <div className="border-t border-border pt-4 text-sm">
                  <strong>Results:</strong> 85% reduction in processing time, 95% accuracy rate
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border">
              <div className="h-48 bg-gradient-to-r from-cyan-600 to-blue-700 p-6 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Commercial Lending</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Process complex commercial loan documents, extracting key terms, conditions, and financial data to
                  accelerate underwriting and approval processes.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Financial statement analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Covenant extraction and tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Collateral documentation processing</span>
                  </li>
                </ul>
                <div className="border-t border-border pt-4 text-sm">
                  <strong>Results:</strong> 70% faster document review, 60% cost reduction
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border">
              <div className="h-48 bg-gradient-to-r from-purple-600 to-indigo-700 p-6 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Regulatory Compliance</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Automate compliance verification across thousands of documents, ensuring adherence to regulatory
                  requirements and reducing the risk of penalties.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>TRID compliance verification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Automated audit trail generation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Regulatory reporting automation</span>
                  </li>
                </ul>
                <div className="border-t border-border pt-4 text-sm">
                  <strong>Results:</strong> 90% reduction in compliance review time, 75% fewer violations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Implementation Process</h2>
            <p className="text-xl text-muted-foreground">
              Our structured implementation methodology ensures successful deployment of document processing solutions
              tailored to your specific business needs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>

              {/* Steps */}
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/30 z-10">
                    <span className="text-lg font-bold text-primary">01</span>
                  </div>

                  <div className="flex-grow pt-2">
                    <h3 className="text-xl font-semibold mb-2">Document Analysis & Requirements Gathering</h3>
                    <p className="text-muted-foreground mb-4">
                      We analyze your document types, volumes, and processing requirements to define clear extraction
                      needs and success metrics.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Document sample collection</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Field extraction requirements</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Workflow integration planning</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Success metrics definition</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/30 z-10">
                    <span className="text-lg font-bold text-primary">02</span>
                  </div>

                  <div className="flex-grow pt-2">
                    <h3 className="text-xl font-semibold mb-2">Model Training & Configuration</h3>
                    <p className="text-muted-foreground mb-4">
                      We train and configure our document processing models specifically for your document types,
                      ensuring optimal extraction accuracy and performance.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Document classifier training</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Field extractor configuration</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Validation rule setup</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Self-healing optimization</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/30 z-10">
                    <span className="text-lg font-bold text-primary">03</span>
                  </div>

                  <div className="flex-grow pt-2">
                    <h3 className="text-xl font-semibold mb-2">Integration & Deployment</h3>
                    <p className="text-muted-foreground mb-4">
                      We integrate our document processing solution with your existing systems and deploy the MCP server
                      in your environment or our secure cloud.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">API integration</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">MCP server deployment</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Workflow configuration</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Security implementation</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/30 z-10">
                    <span className="text-lg font-bold text-primary">04</span>
                  </div>

                  <div className="flex-grow pt-2">
                    <h3 className="text-xl font-semibold mb-2">Testing, Optimization & Continuous Improvement</h3>
                    <p className="text-muted-foreground mb-4">
                      We conduct rigorous testing, optimize performance, and establish feedback loops for continuous
                      improvement of extraction accuracy and processing efficiency.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Accuracy validation</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Performance optimization</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Feedback loop implementation</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Continuous model improvement</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <ConsultationButton size="lg">Schedule a Consultation</ConsultationButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our document processing solutions for financial services
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-2">What types of documents can your system process?</h3>
                <p className="text-muted-foreground">
                  Our system can process a wide range of financial documents, with specialized capabilities for mortgage
                  documents including Loan Estimates (LE), Closing Disclosures (CD), income verification documents, bank
                  statements, tax returns, property appraisals, and more. Our self-healing PDF parser can adapt to
                  various document layouts and formats, even handling non-standard or poorly scanned documents.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-2">What makes your "self-healing" PDF parser different?</h3>
                <p className="text-muted-foreground">Traditional PDF</p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-2">What makes your "self-healing" PDF parser different?</h3>
                <p className="text-muted-foreground">
                  Traditional PDF parsers rely on fixed templates and break when document formats change. Our
                  self-healing parser uses AI to dynamically adapt to different document layouts, versions, and quality
                  issues. It learns from corrections, automatically adjusts extraction strategies when it encounters
                  errors, and continuously improves its accuracy over time. This means it can handle document variations
                  without requiring constant template updates.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-2">How accurate is your document processing solution?</h3>
                <p className="text-muted-foreground">
                  Our document processing solution achieves 99.5% accuracy for standard fields in LE/CD documents and
                  95%+ accuracy for complex fields. The self-healing capabilities further improve accuracy over time as
                  the system learns from corrections. We provide confidence scores for all extracted data, allowing you
                  to set thresholds for manual review when needed.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-2">What is the MCP Mortgage Server and how does it work?</h3>
                <p className="text-muted-foreground">
                  The MCP (Mortgage Cloud Platform) Server is our open-source backend platform specifically designed for
                  mortgage document processing workflows. It provides the infrastructure for document ingestion,
                  processing, validation, and integration with your existing systems. The MCP Server includes
                  mortgage-specific data models, workflow automation capabilities, and a comprehensive API for seamless
                  integration. It can be deployed in your environment or hosted in our secure cloud.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-2">How do you ensure data security and compliance?</h3>
                <p className="text-muted-foreground">
                  We implement bank-grade security measures including end-to-end encryption, secure document handling,
                  and comprehensive audit logging. Our solution is SOC 2 Type II compliant and designed to meet
                  financial industry regulatory requirements. We can deploy in your secure environment or VPC, and our
                  data handling practices are designed to comply with GDPR, CCPA, and other relevant standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-fintech-900/80 backdrop-blur-sm"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Document Processing?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a demo today and discover how our AI-powered document processing solutions can drive efficiency,
              accuracy, and compliance for your organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <ConsultationButton size="lg" variant="default" className="bg-white text-fintech-900 hover:bg-white/90">
                Get a Demo
              </ConsultationButton>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white/30 hover:bg-white/10"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
