import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ConsultationButton } from "@/components/consultation-button"
import Link from "next/link"
import { ArrowRight, Rss } from "lucide-react"
import { RSSNewsClient } from "@/components/rss-news-client"

export const metadata: Metadata = {
  title: "Latest AI News | Confer Solutions AI",
  description:
    "Stay updated with the latest AI developments and industry insights from Smol AI. Real-time news feed covering artificial intelligence breakthroughs and trends.",
}

export default function AINewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Rss className="h-8 w-8 text-fintech-600 mr-3" />
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
                Live RSS Feed
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              Latest AI News from Smol AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Real-time updates on artificial intelligence developments, breakthroughs, and industry insights directly
              from the Smol AI news feed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ConsultationButton size="lg" className="px-8 py-3">
                Discuss AI Implementation
              </ConsultationButton>
            </div>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <RSSNewsClient />
        </div>
      </section>

      {/* About Smol AI Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-400 dark:to-fintech-600">
              About Smol AI News
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Smol AI provides curated artificial intelligence news, covering the latest developments in machine
              learning, AI research, industry applications, and technological breakthroughs that shape the future of
              business and society.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-fintech-600 to-fintech-800 dark:from-fintech-700 dark:to-fintech-900">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Implement AI in Your Business?</h2>
            <p className="text-xl text-fintech-100 mb-8">
              Stay informed about AI trends and transform your operations with cutting-edge solutions backed by industry
              expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationButton size="lg" className="px-8 py-3 bg-white text-fintech-600 hover:bg-fintech-50">
                Schedule Consultation
              </ConsultationButton>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 border-white text-white hover:bg-white hover:text-fintech-600 bg-transparent"
                asChild
              >
                <Link href="/solutions">
                  Explore AI Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
