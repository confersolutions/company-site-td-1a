# Tasks: Enhance Accessibility and SEO Optimization

## Accessibility Audit
- [x] Run automated accessibility audit (Lighthouse, axe) - COMPLETED: Initial audit complete via Lighthouse
- [ ] Fix color contrast issues - PENDING: Need to run color contrast audit
- [x] Add/verify ARIA labels and roles - COMPLETED: Added to key interactive elements and forms
- [x] Ensure all interactive elements are keyboard accessible - COMPLETED: Verified tab navigation and focus states
- [x] Add/verify alt text for all images - COMPLETED: Audited and improved across all components

## Semantic HTML
- [ ] Refactor components for semantic tags (header, nav, main, footer, etc.)
- [ ] Ensure proper heading hierarchy

## SEO Optimization
- [x] Add/optimize meta tags (title, description, canonical) - COMPLETED: All pages have comprehensive meta tags
- [x] Add Open Graph and Twitter Card tags (add `twitter` property to Next.js metadata) - COMPLETED: All pages have OG and Twitter tags
- [x] Add canonical URLs to all pages using metadata.alternates.canonical - COMPLETED: All pages have canonical URLs
- [x] Ensure robots.txt exists in /public and references sitemap.xml - COMPLETED: Created robots.txt with sitemap reference
- [x] Validate sitemap.xml output (custom route or next-sitemap) and ensure it is up-to-date and referenced in robots.txt - COMPLETED: Created dynamic sitemap.xml route
- [x] Ensure favicon and OpenGraph/social preview images are present and referenced in layout and metadata - COMPLETED: confer-logo.png exists and is referenced
- [x] Add meta theme-color to root layout for browser theming - COMPLETED: Added theme-color to metadata
- [x] Add <html lang="en"> to root layout for language/locale - COMPLETED: Already present in layout.tsx
- [x] Review all <Image /> components for meaningful alt text for accessibility and SEO - COMPLETED: Audited and improved alt text across all components
- [x] Add/expand structured data (JSON-LD) for FAQs, breadcrumbs, or other rich snippets where relevant - COMPLETED: Added Organization, LocalBusiness, AggregateRating, FAQ, and BreadcrumbList schemas

## Performance
- [ ] Optimize images and static assets - PENDING: Need to audit and compress images
  - [ ] Convert PNGs to WebP format (e.g., confer-logo.png, residential-specialist-logo.png)
  - [ ] Add proper width/height attributes to images
  - [ ] Implement responsive images with srcset
  - [ ] Add lazy loading for below-the-fold images
- [x] Audit and improve Core Web Vitals (LCP, FID, CLS) - COMPLETED: Audit complete, optimizations needed
  - [x] LCP: 4.1s (needs to be < 2.5s)
  - [x] TBT: 2,930ms (needs to be < 200ms)
  - [x] CLS: 0 (excellent)
  - [ ] Optimizations:
    - [ ] Preload critical resources (LCP image, fonts)
    - [ ] Defer non-critical JavaScript
    - [ ] Minify and compress JavaScript files
    - [ ] Implement code splitting
    - [ ] Optimize font loading

## Documentation
- [ ] Document accessibility and SEO strategy in `.agent-os-active/product/tech-stack.md` - PENDING: Need to create documentation
- [ ] Add "How to test accessibility/SEO" to `README.md` - PENDING: Need to add testing instructions

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
