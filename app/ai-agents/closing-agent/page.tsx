import type { Metadata } from "next"
import ClosingAgentClientPage from "./ClosingAgentClientPage"

export const metadata: Metadata = {
  title: "Closing Agent | AI-Powered Mortgage Closing Coordination | Confer Solutions AI",
  description:
    "Eliminate wire fraud, tolerance violations, and closing delays with AI that coordinates every detail across all parties while ensuring perfect compliance.",
  keywords: "AI closing agent, mortgage closing automation, wire fraud prevention, closing coordination, TRID compliance, mortgage closing software, closing document management, settlement automation",
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
    canonical: "/ai-agents/closing-agent",
  },
  openGraph: {
    title: "Closing Agent | AI-Powered Mortgage Closing Coordination | Confer Solutions AI",
    description: "Eliminate wire fraud, tolerance violations, and closing delays with AI that coordinates every detail across all parties while ensuring perfect compliance.",
    url: "https://confersolutions.ai/ai-agents/closing-agent",
    siteName: "Confer Solutions AI",
    images: [
      {
        url: "https://confersolutions.ai/og-closing-agent.jpg",
        width: 1200,
        height: 630,
        alt: "AI Closing Agent Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Closing Agent | AI-Powered Mortgage Closing Coordination | Confer Solutions AI",
    description: "Eliminate wire fraud, tolerance violations, and closing delays with AI that coordinates every detail across all parties while ensuring perfect compliance.",
    images: ["https://confersolutions.ai/og-closing-agent.jpg"],
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

export default function ClosingAgentPage() {
  return <ClosingAgentClientPage />
}
