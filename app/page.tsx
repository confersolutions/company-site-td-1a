import type { Metadata } from "next"
import Script from "next/script"
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Confer Inc.",
    "alternateName": "Confer Solutions AI",
    "url": "https://confersolutions.ai",
    "logo": "https://confersolutions.ai/logo.png",
    "description": "AI-powered business solutions that automate workflows, enhance decision-making, and drive measurable impact",
    "foundingDate": "2021-11",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7540 TX-121 Suite 200",
      "addressLocality": "McKinney",
      "addressRegion": "TX",
      "postalCode": "75070",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-469-945-7357",
      "contactType": "customer service",
      "email": "info@confersolutions.ai"
    },
    "sameAs": [
      "https://www.facebook.com/Confer.today",
      "https://x.com/confer_inc",
      "https://www.linkedin.com/company/80769992/",
      "https://www.instagram.com/mortgage.mentorpro/"
    ]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Confer Inc.",
    "image": "https://confersolutions.ai/logo.png",
    "description": "AI-powered business solutions for mortgage automation and financial services",
    "url": "https://confersolutions.ai",
    "telephone": "+1-469-945-7357",
    "email": "info@confersolutions.ai",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7540 TX-121 Suite 200",
      "addressLocality": "McKinney",
      "addressRegion": "TX",
      "postalCode": "75070",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.1972,
      "longitude": -96.6397
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 33.1972,
        "longitude": -96.6397
      },
      "geoRadius": "50000"
    }
  }

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Confer Inc."
    },
    "ratingValue": "4.9",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does Confer build AI agents for industries beyond finance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. While we have deep expertise in financial services, Confer's AI agents are designed to be domain-agnostic. We've built solutions for healthcare, retail, logistics, and professional services — all tailored to their specific workflows, data, and customer needs."
        }
      },
      {
        "@type": "Question",
        "name": "Can Confer's AI agents initiate real-world actions like emails, texts, or calls?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our AI agents do more than just analyze or summarize — they're designed to nudge humans to act. Whether it's sending a follow-up email, triggering a text notification, or even prompting a scheduled phone call, our agents are built to move tasks forward intelligently and contextually."
        }
      },
      {
        "@type": "Question",
        "name": "I'm new to AI — can you help me understand where to start?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Of course. Many of our clients are just starting their AI journey. We begin with a quick consultation to understand your operations, then provide tailored suggestions — from simple automations to full agentic workflows — based on your business goals and comfort level."
        }
      },
      {
        "@type": "Question",
        "name": "We're not sure how AI fits into our business. Can Confer help us figure that out?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Definitely. You don't need to come in with a perfect plan. We specialize in helping organizations explore practical AI use cases, even if they're new to the space. We'll assess your current tools, data, and goals — and recommend where AI can deliver quick wins and long-term value."
        }
      }
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://confersolutions.ai"
      }
    ]
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="aggregate-rating-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
