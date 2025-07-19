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
  title: "Confer Solutions | AI-Powered Financial Solutions",
  description:
    "Cutting-edge AI solutions for financial services, empowering businesses with intelligent automation and data-driven insights.",
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
    </>
  )
}
