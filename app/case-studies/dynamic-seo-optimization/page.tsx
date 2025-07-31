import type { Metadata } from "next"
import { DynamicSEOClient } from "./client"

export const metadata: Metadata = {
  title: "AI-Powered Dynamic SEO | Making Seasonal URLs Permanent | Confer Solutions",
  description:
    "Discover how AI-powered dynamic SEO transformed seasonal campaigns into permanent assets, achieving 45% traffic increase and 23% ranking improvements. Advanced SEO automation case study.",
  keywords: [
    "AI SEO optimization",
    "dynamic SEO automation",
    "SEO case study",
    "AI-powered SEO",
    "seasonal SEO strategy",
    "automated SEO optimization",
    "SEO automation platform",
    "intelligent SEO management",
    "SEO performance improvement",
    "AI SEO tools",
    "dynamic URL optimization",
    "SEO automation success",
    "AI marketing optimization",
    "search engine optimization AI",
    "automated ranking improvement"
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
    canonical: "/case-studies/dynamic-seo-optimization",
  },
  openGraph: {
    title: "AI-Powered Dynamic SEO | Making Seasonal URLs Permanent | Confer Solutions",
    description:
      "Discover how AI-powered dynamic SEO transformed seasonal campaigns into permanent assets, achieving 45% traffic increase and 23% ranking improvements. Advanced SEO automation case study.",
    url: "https://confersolutions.ai/case-studies/dynamic-seo-optimization",
    siteName: "Confer Solutions",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "AI-Powered Dynamic SEO Optimization - Automated Search Engine Performance Enhancement",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Dynamic SEO | Making Seasonal URLs Permanent | Confer Solutions",
    description:
      "Discover how AI-powered dynamic SEO transformed seasonal campaigns into permanent assets, achieving 45% traffic increase and 23% ranking improvements. Advanced SEO automation case study.",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
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

export default function DynamicSEOCaseStudy() {
  return (
    <DynamicSEOClient />
  )
}