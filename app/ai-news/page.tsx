import type { Metadata } from "next"
import { RSSNewsClient } from "@/components/rss-news-client"

export const metadata: Metadata = {
  title: "Latest AI News from Smol AI | Confer Solutions AI",
  description:
    "Stay updated with the latest AI news and developments from Smol AI. Get insights into artificial intelligence trends, breakthroughs, and industry updates.",
  keywords: ["AI news", "artificial intelligence", "Smol AI", "AI trends", "machine learning news", "AI developments"],
  openGraph: {
    title: "Latest AI News from Smol AI | Confer Solutions AI",
    description:
      "Stay updated with the latest AI news and developments from Smol AI. Get insights into artificial intelligence trends, breakthroughs, and industry updates.",
    type: "website",
  },
}

export default function AINewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
            Latest AI News from Smol AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest developments in artificial intelligence, curated from Smol AI's comprehensive
            news feed.
          </p>
        </div>

        {/* RSS News Content */}
        <RSSNewsClient />

        {/* About Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-secondary/50 to-secondary/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">About Smol AI News</h2>
            <p className="text-muted-foreground leading-relaxed">
              Smol AI provides curated artificial intelligence news, insights, and analysis from across the industry.
              Their RSS feed delivers the latest developments in AI research, applications, and market trends to keep
              professionals and enthusiasts informed about this rapidly evolving field.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
