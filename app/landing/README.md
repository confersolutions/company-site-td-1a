# Landing Pages

This directory contains dedicated landing pages for specific marketing campaigns, products, or services.

## Structure

```
app/landing/
├── README.md
├── mortgage-automation/
│   └── page.tsx
├── ai-consulting/
│   └── page.tsx
└── chatbot-solutions/
    └── page.tsx
```

## URL Structure

- `/landing/mortgage-automation` - Mortgage automation landing page
- `/landing/ai-consulting` - AI consulting services landing page
- `/landing/chatbot-solutions` - Chatbot solutions landing page

## Best Practices

### 1. SEO Optimization
- Include comprehensive metadata (title, description, keywords)
- Use canonical URLs
- Add Open Graph and Twitter Card metadata
- Include structured data when applicable

### 2. Landing Page Structure
- **Hero Section**: Clear value proposition with strong CTA
- **Key Metrics**: Social proof and statistics
- **Features/Benefits**: What the solution offers
- **Social Proof**: Testimonials, case studies, logos
- **Multiple CTAs**: Throughout the page
- **Contact Form**: Easy way to convert

### 3. Design Guidelines
- Use consistent branding with main site
- Focus on conversion optimization
- Mobile-responsive design
- Fast loading times
- Clear visual hierarchy

### 4. Components to Use
- `ConsultationButton` with `source="demo"` for demo requests
- `ConsultationButton` with `source="consultation"` for consultations
- Existing UI components from `@/components/ui/`
- Lucide React icons for consistency

### 5. Content Guidelines
- Focus on specific pain points
- Use benefit-driven headlines
- Include specific metrics and results
- Clear call-to-actions
- Address objections

## Creating a New Landing Page

1. Create a new folder: `app/landing/[page-name]/`
2. Create `page.tsx` with proper metadata
3. Follow the established structure and patterns
4. Test the page thoroughly
5. Update this README if needed

## Example Template

```tsx
import type { Metadata } from "next"
import { ConsultationButton } from "@/components/consultation-button"

export const metadata: Metadata = {
  title: "Page Title | Confer Solutions AI",
  description: "Page description...",
  // ... other metadata
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Hero content */}
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        {/* Features content */}
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-fintech-600 to-fintech-800 text-white">
        {/* CTA content */}
      </section>
    </div>
  )
}
``` 