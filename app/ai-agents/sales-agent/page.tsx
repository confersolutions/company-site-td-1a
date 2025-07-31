import type { Metadata } from "next"
import SalesAgentClientPage from "./SalesAgentClientPage"

export const metadata: Metadata = {
  title: "AI Mortgage Sales Agent | Never Miss a Deal | Confer Solutions AI",
  description:
    "Revolutionize your mortgage sales with AI that ensures 100% compliance, maximizes conversion rates, and operates 24/7 across every communication channel.",
  keywords: "AI mortgage sales agent, mortgage automation, sales compliance, lead qualification, mortgage technology, AI sales automation, mortgage CRM, sales conversion, mortgage software",
  authors: [{ name: "Confer Solutions AI" }],
  creator: "Confer Solutions AI",
  publisher: "Confer Solutions AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://confersolutions.ai"),
  alternates: {
    canonical: "/ai-agents/sales-agent",
  },
  openGraph: {
    title: "AI Mortgage Sales Agent | Never Miss a Deal | Confer Solutions AI",
    description: "Revolutionize your mortgage sales with AI that ensures 100% compliance, maximizes conversion rates, and operates 24/7 across every communication channel.",
    url: "https://confersolutions.ai/ai-agents/sales-agent",
    siteName: "Confer Solutions AI",
    images: [
      {
        url: "https://confersolutions.ai/og-sales-agent.jpg",
        width: 1200,
        height: 630,
        alt: "AI Mortgage Sales Agent Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Mortgage Sales Agent | Never Miss a Deal | Confer Solutions AI",
    description: "Revolutionize your mortgage sales with AI that ensures 100% compliance, maximizes conversion rates, and operates 24/7 across every communication channel.",
    images: ["https://confersolutions.ai/og-sales-agent.jpg"],
    creator: "@confersolutions",
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

export default function SalesAgentPage() {
  return <SalesAgentClientPage />
}
