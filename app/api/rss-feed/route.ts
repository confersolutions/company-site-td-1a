import { NextResponse } from "next/server"

// RSS Parser - using dynamic import to avoid edge runtime issues
async function parseRSSFeed() {
  try {
    // Dynamic import to avoid build issues
    const Parser = (await import("rss-parser")).default
    const parser = new Parser({
      timeout: 10000,
      headers: {
        "User-Agent": "Confer Solutions AI News Reader/1.0",
      },
    })

    const feed = await parser.parseURL("https://news.smol.ai/rss.xml")

    // Sort by most recent first and limit to 5
    const sortedItems = feed.items
      .sort((a: any, b: any) => {
        return new Date(b.pubDate || b.isoDate).getTime() - new Date(a.pubDate || a.isoDate).getTime()
      })
      .slice(0, 5)

    // Transform the data to ensure consistent structure
    const articles = sortedItems.map((item: any) => ({
      title: item.title || "Untitled",
      link: item.link || "#",
      pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
      description: item.contentSnippet || item.content || item.summary || "",
      content: item.content || "",
      guid: item.guid || item.id || item.link,
      enclosure: item.enclosure || null,
    }))

    return articles
  } catch (error) {
    console.error("Error fetching RSS feed:", error)
    throw error
  }
}

export async function GET() {
  try {
    const articles = await parseRSSFeed()

    return NextResponse.json({
      success: true,
      articles,
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    console.error("RSS API Error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch RSS feed",
        articles: [],
      },
      { status: 500 },
    )
  }
}
