# Tasks: Enhance Accessibility and SEO Optimization

## Accessibility Audit
- [ ] Run automated accessibility audit (Lighthouse, axe)
- [ ] Fix color contrast issues
- [ ] Add/verify ARIA labels and roles
- [ ] Ensure all interactive elements are keyboard accessible
- [ ] Add/verify alt text for all images

## Semantic HTML
- [ ] Refactor components for semantic tags (header, nav, main, footer, etc.)
- [ ] Ensure proper heading hierarchy

## SEO Optimization
- [ ] Add/optimize meta tags (title, description, canonical)
- [ ] Add Open Graph and Twitter Card tags (add `twitter` property to Next.js metadata)
- [ ] Add canonical URLs to all pages using metadata.alternates.canonical
- [ ] Ensure robots.txt exists in /public and references sitemap.xml
- [ ] Validate sitemap.xml output (custom route or next-sitemap) and ensure it is up-to-date and referenced in robots.txt
- [ ] Ensure favicon and OpenGraph/social preview images are present and referenced in layout and metadata
- [ ] Add meta theme-color to root layout for browser theming
- [ ] Add <html lang="en"> to root layout for language/locale
- [ ] Review all <Image /> components for meaningful alt text for accessibility and SEO
- [ ] Add/expand structured data (JSON-LD) for FAQs, breadcrumbs, or other rich snippets where relevant

## Performance
- [ ] Optimize images and static assets
- [ ] Audit and improve Core Web Vitals (LCP, FID, CLS)

## Documentation
- [ ] Document accessibility and SEO strategy in `.agent-os/product/tech-stack.md`
- [ ] Add "How to test accessibility/SEO" to `README.md`

## Manual Testing Issues (Found During Testing)

### Navigation and Link Issues
- [x] Fix 'Explore AI Agents' link on `/industries/finance-mortgage` page - should connect to `/ai-agents/autonomous-mortgage-bank`
- [x] Fix 'Explore AI Agents' link on `/industries/retail-ecommerce` page - should connect to `/ai-agents/autonomous-mortgage-bank`
- [x] Fix 'View Solutions' link on `/industries/healthcare` page - should connect to `/solutions`

### Hero Image Issues
- [x] Fix hero image on `/industries/healthcare` page - should use Upwork images like `/industries/finance-mortgage`
- [x] Fix hero image on `/industries/retail-ecommerce` page - should use Upwork images like `/industries/finance-mortgage`

      ### UI/UX Issues
- [x] Fix 'Schedule demo' popup on `/ai-agents/processing-agent` page - popup appears behind hero image (compare with working `/ai-agents/underwriting-agent`)
- [x] Test and update bottom CTA on `/ai-agents/processing-agent` page

### Email Functionality
- [x] Fix email delivery system - RESEND_API_KEY not configured error in console
- [x] Investigate and fix "Failed to send email" error in `hooks/use-send-email.ts`
