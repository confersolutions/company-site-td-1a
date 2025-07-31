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
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-fintech-500/5 via-purple-500/5 to-blue-500/5"></div>
        <div className="absolute inset-0 bg-grid-white opacity-20"></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-fintech-500 to-purple-600 text-white text-sm font-medium mb-6 shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
              Live AI News Feed
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-fintech-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              Latest AI News from Smol AI
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Stay informed with the latest developments in artificial intelligence, curated from Smol AI's
              comprehensive news feed.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-fintech-50 to-fintech-100 dark:from-fintech-950 dark:to-fintech-900 rounded-2xl p-4 border border-fintech-200 dark:border-fintech-800">
                <div className="text-2xl font-bold text-fintech-600 dark:text-fintech-400">Real-time</div>
                <div className="text-sm text-muted-foreground">Updates</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-2xl p-4 border border-purple-200 dark:border-purple-800">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Curated</div>
                <div className="text-sm text-muted-foreground">Content</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-2xl p-4 border border-blue-200 dark:border-blue-800">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Expert</div>
                <div className="text-sm text-muted-foreground">Analysis</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-fintech-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Breaking AI Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The most important AI developments and insights from industry leaders
            </p>
          </div>

          {/* RSS News Content */}
          <RSSNewsClient />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-fintech-50/50 via-purple-50/50 to-blue-50/50 dark:from-fintech-950/20 dark:via-purple-950/20 dark:to-blue-950/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-background/80 to-secondary/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/50 shadow-xl">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-fintech-500 via-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-fintech-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                About Smol AI News
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Smol AI provides curated artificial intelligence news, insights, and analysis from across the industry.
                Their RSS feed delivers the latest developments in AI research, applications, and market trends to keep
                professionals and enthusiasts informed about this rapidly evolving field.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-fintech-500 to-fintech-600 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-fintech-600 dark:text-fintech-400 mb-1">Industry Insights</h3>
                  <p className="text-sm text-muted-foreground">Deep analysis of AI trends and market movements</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-1">Real-time Updates</h3>
                  <p className="text-sm text-muted-foreground">Breaking news as it happens in the AI world</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">Expert Curation</h3>
                  <p className="text-sm text-muted-foreground">Hand-picked stories from trusted AI sources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
