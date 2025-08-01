import type { Metadata } from "next"
import { AIContentGenerationClient } from "./client"

export const metadata: Metadata = {
  title: "From 13 Copywriters to 2 | AI Content Generation Case Study | Confer Solutions",
  description:
    "Discover how AI automation reduced copywriting team from 13 to 2 people while achieving 85% time savings and 78% cost reduction. Real-world marketplace transformation case study.",
  keywords: [
    "AI content generation",
    "automated copywriting",
    "content automation case study",
    "AI copywriting",
    "content creation automation",
    "AI content marketing",
    "automated content writing",
    "AI content strategy",
    "content automation ROI",
    "AI writing tools",
    "content generation platform",
    "automated content creation",
    "AI content optimization",
    "content automation success",
    "AI marketing automation"
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
    canonical: "/case-studies/ai-content-generation",
  },
  openGraph: {
    title: "From 13 Copywriters to 2 | AI Content Generation Case Study | Confer Solutions",
    description:
      "Discover how AI automation reduced copywriting team from 13 to 2 people while achieving 85% time savings and 78% cost reduction. Real-world marketplace transformation case study.",
    url: "https://confersolutions.ai/case-studies/ai-content-generation",
    siteName: "Confer Solutions",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "AI Content Generation Case Study - From 13 Copywriters to 2 with Automation",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "From 13 Copywriters to 2 | AI Content Generation Case Study | Confer Solutions",
    description:
      "Discover how AI automation reduced copywriting team from 13 to 2 people while achieving 85% time savings and 78% cost reduction. Real-world marketplace transformation case study.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
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

export default function AIContentGenerationCaseStudy() {
  return (
    <AIContentGenerationClient />
  )
}
