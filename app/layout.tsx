import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Confer Solutions | AI-Powered Financial Solutions",
    template: "%s | Confer Solutions",
  },
  description:
    "Cutting-edge AI solutions for financial services, empowering businesses with intelligent automation and data-driven insights.",
  keywords: ["AI", "fintech", "financial services", "automation", "machine learning", "artificial intelligence"],
  authors: [{ name: "Confer Solutions" }],
  creator: "Confer Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://confersolutions.ai",
    title: "Confer Solutions | AI-Powered Financial Solutions",
    description:
      "Cutting-edge AI solutions for financial services, empowering businesses with intelligent automation and data-driven insights.",
    siteName: "Confer Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Confer Solutions | AI-Powered Financial Solutions",
    description:
      "Cutting-edge AI solutions for financial services, empowering businesses with intelligent automation and data-driven insights.",
    creator: "@confersolutions",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <Header />
          <main className="min-h-screen pt-16 md:pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
