import { FileText, CheckCircle, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function DocumentProcessingDetail() {
  const features = [
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "LE Document Processing",
      description:
        "Automatically extract and validate data from Loan Estimate documents with 99.5% accuracy, ensuring compliance with TRID requirements.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "CD Document Analysis",
      description:
        "Process Closing Disclosure documents to verify loan terms, fees, and ensure accuracy before closing, reducing errors by 85%.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Compliance Verification",
      description:
        "Automated compliance checking for both LE and CD documents against CFPB regulations and internal lending policies.",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Real-time Processing",
      description:
        "Process documents in seconds rather than hours, enabling faster loan processing and improved customer experience.",
    },
  ]

  const documentTypes = [
    "Loan Estimate (LE) Documents",
    "Closing Disclosure (CD) Documents",
    "Income Verification Documents",
    "Asset Statements",
    "Property Appraisals",
    "Insurance Documents",
    "Title Documents",
    "Tax Returns and W-2s",
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Document Processing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Streamline your mortgage workflow with intelligent document processing that handles LE and CD documents
              with unprecedented accuracy and speed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Transform Your Document Workflow</h3>
              <p className="text-muted-foreground mb-6">
                Our AI-powered document processing solution revolutionizes how financial institutions handle critical
                mortgage documents. With specialized focus on Loan Estimate (LE) and Closing Disclosure (CD) documents,
                our technology ensures accuracy, compliance, and speed throughout the mortgage process.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Document processing workflow"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fintech-900/70 to-transparent"></div>

                {/* Floating document preview */}
                <div className="absolute top-4 right-4 w-32 h-40 bg-white rounded-lg shadow-lg p-3 transform rotate-3">
                  <div className="w-full h-2 bg-primary rounded-full mb-2"></div>
                  <div className="w-3/4 h-1 bg-gray-300 rounded-full mb-1"></div>
                  <div className="w-full h-1 bg-gray-300 rounded-full mb-1"></div>
                  <div className="w-2/3 h-1 bg-gray-300 rounded-full mb-3"></div>
                  <div className="text-xs font-semibold text-primary">LE Document</div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
            <h3 className="text-2xl font-semibold mb-6 text-center">Supported Document Types</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {documentTypes.map((docType, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{docType}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg">Schedule a Demo</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
