import { NextResponse } from "next/server"

// Define the RSS item type
interface RSSItem {
  title: string
  link: string
  pubDate: string
  description: string
  content?: string
  guid?: string
  enclosure?: {
    url: string
    type: string
  } | null
}

// Parse XML RSS feed manually
function parseRSSXML(xmlText: string): RSSItem[] {
  try {
    // Extract items from RSS XML
    const itemRegex = /<item[^>]*>([\s\S]*?)<\/item>/gi
    const items: RSSItem[] = []
    let match

    while ((match = itemRegex.exec(xmlText)) !== null) {
      const itemXML = match[1]

      // Extract individual fields
      const title = extractXMLContent(itemXML, "title") || "Untitled"
      const link = extractXMLContent(itemXML, "link") || "#"
      const pubDate = extractXMLContent(itemXML, "pubDate") || new Date().toISOString()
      const description = extractXMLContent(itemXML, "description") || ""
      const guid = extractXMLContent(itemXML, "guid") || link

      // Extract enclosure if present
      const enclosureMatch = itemXML.match(/<enclosure[^>]*url="([^"]*)"[^>]*type="([^"]*)"/)
      const enclosure = enclosureMatch
        ? {
            url: enclosureMatch[1],
            type: enclosureMatch[2],
          }
        : null

      items.push({
        title: cleanText(title),
        link: link.trim(),
        pubDate: pubDate.trim(),
        description: cleanText(description),
        guid: guid.trim(),
        enclosure,
      })
    }

    return items
  } catch (error) {
    console.error("Error parsing RSS XML:", error)
    return []
  }
}

// Extract content from XML tags
function extractXMLContent(xml: string, tagName: string): string | null {
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i")
  const match = xml.match(regex)
  if (match) {
    // Handle CDATA sections
    let content = match[1]
    const cdataMatch = content.match(/<!\[CDATA\[([\s\S]*?)\]\]>/)
    if (cdataMatch) {
      content = cdataMatch[1]
    }
    return content.trim()
  }
  return null
}

// Clean text content
function cleanText(text: string): string {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]*>/g, "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim()
}

export async function GET() {
  try {
    console.log("Fetching RSS feed from Smol AI...")

    // Fetch the RSS feed with timeout
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

    const response = await fetch("https://news.smol.ai/rss.xml", {
      headers: {
        "User-Agent": "Confer Solutions AI News Reader/1.0",
        Accept: "application/rss+xml, application/xml, text/xml",
      },
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const xmlText = await response.text()
    console.log("RSS XML fetched successfully, length:", xmlText.length)

    // Parse the RSS XML
    const allItems = parseRSSXML(xmlText)
    console.log("Parsed items:", allItems.length)

    // Sort by date (most recent first) and limit to 5
    const sortedItems = allItems
      .sort((a, b) => {
        const dateA = new Date(a.pubDate).getTime()
        const dateB = new Date(b.pubDate).getTime()
        return dateB - dateA // Most recent first
      })
      .slice(0, 5)

    console.log("Returning", sortedItems.length, "articles")

    return NextResponse.json({
      success: true,
      articles: sortedItems,
      lastUpdated: new Date().toISOString(),
    })
  } catch (error: any) {
    console.error("RSS API Error:", error)

    // Handle different types of errors
    let errorMessage = "Failed to fetch RSS feed"
    if (error.name === "AbortError") {
      errorMessage = "Request timeout - RSS feed took too long to respond"
    } else if (error.message.includes("HTTP error")) {
      errorMessage = `RSS feed returned error: ${error.message}`
    } else if (error.message.includes("fetch")) {
      errorMessage = "Network error - unable to reach RSS feed"
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        articles: [],
      },
      { status: 500 },
    )
  }
}
