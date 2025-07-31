import { NextResponse } from 'next/server'
import { generateDynamicSitemap } from '@/lib/sitemap-scanner'

export async function GET() {
  try {
    const sitemapData = await generateDynamicSitemap()
    
    return NextResponse.json({
      success: true,
      data: sitemapData,
      lastUpdated: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error generating sitemap data:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to generate sitemap data',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

export async function POST() {
  // Force refresh the sitemap data
  return GET()
}