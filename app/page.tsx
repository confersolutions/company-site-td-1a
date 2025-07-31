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
  title: "Confer Solutions | AI-Powered Financial Solutions & Mortgage Automation",
  description:
    "Transform your financial operations with AI-powered mortgage automation, intelligent document processing, and autonomous banking solutions. Leading provider of AI agents for finance, mortgage, and business automation.",
  keywords: [
    "AI financial solutions",
    "mortgage automation",
    "AI mortgage agents",
    "financial AI technology",
    "automated underwriting",
    "document processing AI",
    "autonomous banking",
    "fintech AI solutions",
    "mortgage technology",
    "AI business automation",
    "intelligent financial services",
    "AI-powered lending",
    "mortgage AI platform",
    "financial automation software",
    "AI agents finance"
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
    canonical: "/",
  },
  openGraph: {
    title: "Confer Solutions | AI-Powered Financial Solutions & Mortgage Automation",
    description:
      "Transform your financial operations with AI-powered mortgage automation, intelligent document processing, and autonomous banking solutions. Leading provider of AI agents for finance, mortgage, and business automation.",
    url: "https://confersolutions.ai",
    siteName: "Confer Solutions",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&h=630&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "AI-Powered Financial Solutions and Mortgage Automation by Confer Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Confer Solutions | AI-Powered Financial Solutions & Mortgage Automation",
    description:
      "Transform your financial operations with AI-powered mortgage automation, intelligent document processing, and autonomous banking solutions.",
    images: [
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&h=630&auto=format&fit=crop",
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
