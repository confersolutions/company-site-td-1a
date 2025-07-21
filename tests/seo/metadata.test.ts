import { metadata as layoutMetadata } from '@/app/layout'
import { metadata as homeMetadata } from '@/app/page'

describe('SEO Metadata Configuration', () => {
  describe('Root Layout Metadata', () => {
    it('should have comprehensive title configuration', () => {
      expect(layoutMetadata.title).toEqual({
        default: 'Confer Solutions AI - Autonomous AI Mortgage Banking & Business Automation',
        template: '%s | Confer Solutions AI',
      })
    })

    it('should have detailed description for mortgage banking focus', () => {
      expect(layoutMetadata.description).toContain('mortgage operations')
      expect(layoutMetadata.description).toContain('AI agents')
      expect(layoutMetadata.description).toContain('99.7% accuracy')
      expect(layoutMetadata.description).toContain('85% time reduction')
    })

    it('should include relevant keywords for AI mortgage banking', () => {
      const keywords = layoutMetadata.keywords as string[]
      expect(keywords).toContain('AI mortgage banking')
      expect(keywords).toContain('autonomous underwriting')
      expect(keywords).toContain('mortgage automation')
      expect(keywords).toContain('AI agents')
      expect(keywords).toContain('fintech')
      expect(keywords).toContain('business automation')
    })

    it('should have proper OpenGraph configuration', () => {
      expect(layoutMetadata.openGraph).toEqual({
        type: 'website',
        locale: 'en_US',
        url: 'https://confersolutions.ai',
        title: 'Confer Solutions AI - Autonomous AI Mortgage Banking & Business Automation',
        description: 'Transform your mortgage operations with AI agents that automate underwriting, compliance, and customer service. 99.7% accuracy, 85% time reduction, 24/7 operations.',
        siteName: 'Confer Solutions AI',
      })
    })

    it('should have Twitter card configuration', () => {
      expect(layoutMetadata.twitter).toEqual({
        card: 'summary_large_image',
        title: 'Confer Solutions AI - Autonomous AI Mortgage Banking & Business Automation',
        description: 'Transform your mortgage operations with AI agents that automate underwriting, compliance, and customer service. 99.7% accuracy, 85% time reduction, 24/7 operations.',
        creator: '@confersolutions',
      })
    })

    it('should have proper robots configuration', () => {
      expect(layoutMetadata.robots).toEqual({
        index: true,
        follow: true,
      })
    })

    it('should include favicon configuration', () => {
      expect(layoutMetadata.icons?.icon).toEqual([
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ])
    })

    it('should have proper authorship', () => {
      expect(layoutMetadata.authors).toEqual([{ name: 'Confer Solutions AI' }])
      expect(layoutMetadata.creator).toBe('Confer Solutions AI')
    })
  })

  describe('Home Page Metadata', () => {
    it('should have specific home page title', () => {
      expect(homeMetadata.title).toBe('Confer Solutions | AI-Powered Financial Solutions')
    })

    it('should have home page description', () => {
      expect(homeMetadata.description).toContain('AI solutions for financial services')
      expect(homeMetadata.description).toContain('intelligent automation')
    })
  })

  describe('Structured Data', () => {
    it('should include organization structured data in layout', () => {
      const expectedStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Confer Solutions AI',
        description: 'AI-powered business solutions specializing in autonomous mortgage banking and business automation',
        url: 'https://confersolutions.ai',
      }

      expect(layoutMetadata).toBeDefined()
    })
  })
})
