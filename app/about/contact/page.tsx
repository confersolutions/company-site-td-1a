import type { Metadata } from "next"
import { ContactClient } from "./client"

export const metadata: Metadata = {
  title: "Contact Us | Confer Solutions AI",
  description: "Get in touch with Confer Solutions AI team. Contact us for AI-powered financial solutions, mortgage automation, and custom AI development services.",
  keywords: [
    "contact Confer Solutions",
    "AI consulting contact",
    "mortgage automation contact",
    "AI development contact",
    "financial AI support",
    "AI solutions contact",
    "contact AI company",
    "AI services inquiry",
    "custom AI development",
    "AI mortgage technology",
    "financial technology contact",
    "AI automation consulting",
    "mortgage AI solutions",
    "AI business solutions",
    "contact financial AI"
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
    canonical: "/about/contact",
  },
  openGraph: {
    title: "Contact Us | Confer Solutions AI",
    description:
      "Get in touch with Confer Solutions AI team. Contact us for AI-powered financial solutions, mortgage automation, and custom AI development services.",
    url: "https://confersolutions.ai/about/contact",
    siteName: "Confer Solutions",
    images: [
      {
        url: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "Contact Us - Get in Touch with Confer Solutions AI Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Confer Solutions AI",
    description:
      "Get in touch with Confer Solutions AI team. Contact us for AI-powered financial solutions, mortgage automation, and custom AI development services.",
    images: [
      "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
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

export default function ContactPage() {
  return (
    <ContactClient />
  )
}