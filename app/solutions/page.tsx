import type { Metadata } from "next"
import { SolutionsSection } from "@/components/solutions-section"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Solutions | Confer Solutions",
  description: "Explore Confer's AI-powered solutions for the financial services industry.",
}

export default function SolutionsPage() {
  return (
    <>
      <div className="bg-primary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-6">AI-Powered Solutions for Financial Services</h1>
            <p className="text-xl text-white/90">
              AI Powered Solutions are the key to unlocking automation, intelligence, and business growth. We help
              businesses design, develop, and deploy AI solutions that enhance efficiency, automate processes, and drive
              measurable impact.
            </p>
          </div>
        </div>
      </div>

      <SolutionsSection />
      <CTASection />
    </>
  )
}
