import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { ConsultationButton } from "@/components/consultation-button"

export const metadata: Metadata = {
  title: "Automating Mortgage Workflows: From Application to Closing - Confer Solutions AI",
  description:
    "Discover how end-to-end automation is transforming the mortgage industry, reducing processing time from weeks to days while maintaining accuracy and compliance.",
}

export default function BlogPost() {
  return (
    <>
      <div className="bg-primary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-white/80 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Aug 25, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Yatin Karnik</span>
              </div>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Process Automation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Automating Mortgage Workflows: From Application to Closing
            </h1>
            <p className="text-xl text-white/90">
              Discover how end-to-end automation is transforming the mortgage industry, reducing processing time from
              weeks to days while maintaining accuracy and compliance.
            </p>
          </div>
        </div>
      </div>

      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 mb-12 rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Automated Mortgage Workflows"
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8">
                The mortgage industry has long been characterized by complex, time-consuming processes that can take
                weeks or even months to complete. However, the integration of AI and automation technologies is
                fundamentally changing this landscape, enabling lenders to process applications faster while maintaining
                the highest standards of accuracy and compliance.
              </p>

              <h2>The Traditional Mortgage Process Challenge</h2>
              <p>
                Traditional mortgage processing involves numerous manual steps, from initial application review to final
                closing documentation. Each step requires human intervention, creating bottlenecks and opportunities for
                errors. The typical timeline includes:
              </p>
              <ul>
                <li>Application intake and initial review (2-3 days)</li>
                <li>Document collection and verification (5-10 days)</li>
                <li>Underwriting and approval (7-14 days)</li>
                <li>Closing preparation and scheduling (3-7 days)</li>
              </ul>

              <h2>The Automation Revolution</h2>
              <p>Our comprehensive automation platform transforms each stage of the mortgage process:</p>

              <h3>1. Intelligent Application Processing</h3>
              <p>
                AI-powered systems automatically extract and validate information from loan applications,
                cross-referencing data across multiple sources to ensure accuracy and completeness.
              </p>

              <h3>2. Automated Document Collection</h3>
              <p>
                Smart document management systems automatically request, receive, and organize required documentation,
                using OCR and AI to extract relevant information.
              </p>

              <h3>3. AI-Driven Underwriting</h3>
              <p>
                Machine learning models analyze borrower profiles, property valuations, and risk factors to make
                preliminary underwriting decisions, flagging only complex cases for human review.
              </p>

              <h3>4. Streamlined Closing Process</h3>
              <p>
                Automated systems generate closing documents, schedule appointments, and coordinate with all parties to
                ensure smooth, timely closings.
              </p>

              <h2>Measurable Benefits</h2>
              <p>Lenders implementing our end-to-end automation solutions report significant improvements:</p>
              <ul>
                <li>
                  <strong>Processing Time:</strong> Reduced from 30-45 days to 7-10 days
                </li>
                <li>
                  <strong>Operational Costs:</strong> 50% reduction in processing costs
                </li>
                <li>
                  <strong>Error Rates:</strong> 80% decrease in documentation errors
                </li>
                <li>
                  <strong>Customer Satisfaction:</strong> 40% improvement in borrower experience scores
                </li>
                <li>
                  <strong>Compliance:</strong> 99.9% accuracy in regulatory compliance
                </li>
              </ul>

              <h2>Implementation Strategy</h2>
              <p>
                Successful mortgage workflow automation requires a phased approach that considers existing systems,
                regulatory requirements, and staff training. Our implementation methodology ensures minimal disruption
                while maximizing benefits.
              </p>

              <div className="bg-primary/5 p-8 rounded-xl my-12">
                <h3 className="text-2xl font-bold mb-4">Ready to Revolutionize Your Mortgage Operations?</h3>
                <p className="text-lg mb-6">
                  Learn how end-to-end automation can transform your mortgage processing, reduce costs, and improve
                  customer satisfaction.
                </p>
                <ConsultationButton />
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
