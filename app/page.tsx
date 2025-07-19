import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { WhyConferSection } from "@/components/why-confer-section"
import { SolutionsSection } from "@/components/solutions-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { CTASection } from "@/components/cta-section"
import { AsSeenOnSection } from "@/components/as-seen-on-section"
import { AIWorkflowSection } from "@/components/ai-workflow-section"

export const metadata: Metadata = {
  title: "Confer Solutions AI - Autonomous AI Mortgage Banking & Business Automation",
  description:
    "Transform your mortgage operations with AI agents that automate underwriting, compliance, and customer service. 99.7% accuracy, 85% time reduction, 24/7 operations.",
  keywords: [
    "AI mortgage banking",
    "autonomous underwriting",
    "mortgage automation",
    "AI agents",
    "fintech",
    "business automation",
  ],
  openGraph: {
    title: "Confer Solutions AI - Autonomous AI Mortgage Banking & Business Automation",
    description:
      "Transform your mortgage operations with AI agents that automate underwriting, compliance, and customer service. 99.7% accuracy, 85% time reduction, 24/7 operations.",
    type: "website",
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AsSeenOnSection />
      <WhyConferSection />
      <SolutionsSection />
      <HowItWorksSection />
      <AIWorkflowSection />
      <CaseStudiesSection />
      <CTASection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Confer Solutions AI",
            description:
              "AI-powered business solutions specializing in autonomous mortgage banking and business automation",
            url: "https://confersolutions.ai",
          }),
        }}
      />
    </>
  )
}
