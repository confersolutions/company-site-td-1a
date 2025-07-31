import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { FlowiseChat } from "@/components/flowise-chat";
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Confer Solutions AI - Autonomous AI Mortgage Banking & Business Automation",
    template: "%s | Confer Solutions AI",
  },
  description:
    "Transform your mortgage operations with AI agents that automate underwriting, compliance, and customer service. 99.7% accuracy, 85% time reduction, 24/7 operations.",
  keywords: [
    "AI mortgage banking",
    "autonomous underwriting",
    "mortgage automation",
    "AI agents",
    "fintech",
    "business automation",
    "artificial intelligence",
  ],
  authors: [{ name: "Confer Solutions AI" }],
  creator: "Confer Solutions AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://confersolutions.ai",
    title: "Confer Solutions AI - Autonomous AI Mortgage Banking & Business Automation",
    description:
      "Transform your mortgage operations with AI agents that automate underwriting, compliance, and customer service. 99.7% accuracy, 85% time reduction, 24/7 operations.",
    siteName: "Confer Solutions AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Confer Solutions AI - Autonomous AI Mortgage Banking & Business Automation",
    description:
      "Transform your mortgage operations with AI agents that automate underwriting, compliance, and customer service. 99.7% accuracy, 85% time reduction, 24/7 operations.",
    creator: "@confersolutions",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/images/confer-logo.png" },
      { url: "/images/confer-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/confer-logo.png", sizes: "16x16", type: "image/png" },
    ],
  },
  other: {
    "theme-color": "#0f172a", // slate-900 color for dark theme
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/images/confer-logo.png" />
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
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <Header />
          <main className="min-h-screen pt-16 md:pt-20">{children}</main>
          <Footer />
          <FlowiseChat />
        </ThemeProvider>
      </body>
    </html>
  )
}
