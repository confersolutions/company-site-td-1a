# Development & Deployment Standards

> Version: 1.0.0
> Last Updated: 2025-07-23
> Scope: Global development and deployment standards

## Context

This file is part of the Agent OS standards system. These global development and deployment guidelines are referenced by all product codebases and provide default setup instructions. Individual projects may extend or override these practices in their `.agent-os/product/` files.

## Local Development Setup

### Prerequisites

#### Node.js Environment
- **Node.js Version**: 20.x (LTS) - specified in `.nvmrc`
- **Package Manager**: npm (preferred) or yarn
- **Version Manager**: nvm (recommended) or fnm

#### Development Tools
- **Git**: Latest stable version
- **Code Editor**: VS Code with recommended extensions
- **Terminal**: iTerm2 (macOS) or Windows Terminal
- **Browser**: Chrome/Edge with DevTools

### Initial Setup

#### 1. Clone and Install
\`\`\`bash
# Clone repository
git clone <repository-url>
cd <project-name>

# Install Node.js version (if using nvm)
nvm use

# Install dependencies
npm install

# Verify installation
npm run build
\`\`\`

#### 2. Environment Configuration
Create `.env.local` for local development:
\`\`\`env
# Email Configuration (Required for forms)
RESEND_API_KEY=your_resend_api_key

# Optional: Analytics (Development)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_GTM_ID=your_google_tag_manager_id

# Optional: Chat Integration
NEXT_PUBLIC_FLOWISE_URL=your_flowise_chat_url

# Development Settings
NODE_ENV=development
NEXT_TELEMETRY_DISABLED=1
\`\`\`

#### 3. Development Scripts
\`\`\`bash
# Start development server
npm run dev          # http://localhost:3000

# Build for production
npm run build

# Start production server
npm run start

# Run tests
npm test             # Run all tests
npm run test:watch   # Watch mode
npm run test:coverage # With coverage report

# Lint code
npm run lint
\`\`\`

### Development Workflow

#### 1. Daily Development
\`\`\`bash
# Start development
npm run dev

# In another terminal, run tests
npm run test:watch

# Check for issues
npm run lint
\`\`\`

#### 2. Before Committing
\`\`\`bash
# Run all tests
npm test

# Check linting
npm run lint

# Build to catch any issues
npm run build
\`\`\`

#### 3. Common Development Tasks
\`\`\`bash
# Add new dependency
npm install <package-name>

# Add dev dependency
npm install --save-dev <package-name>

# Update dependencies
npm update

# Check for security issues
npm audit
\`\`\`

## Testing Strategy

### Test Structure
\`\`\`
tests/
├── components/          # Component tests
├── integration/         # Integration tests
├── deployment/          # API route tests
├── seo/                # SEO/metadata tests
└── setup.ts            # Test configuration
\`\`\`

### Testing Commands
\`\`\`bash
# Run all tests
npm test

# Run specific test file
npm test tests/components/marketing.test.ts

# Run tests with coverage
npm run test:coverage

# Watch mode for development
npm run test:watch
\`\`\`

### Test Best Practices
- Write tests for all new functionality
- Use descriptive test names
- Mock external dependencies
- Test both success and error cases
- Maintain good test coverage (>80%)

## Code Quality

### Linting
- **ESLint**: Next.js configuration with TypeScript
- **Prettier**: Code formatting (if configured)
- **TypeScript**: Strict type checking

### Pre-commit Checks
\`\`\`bash
# Run before committing
npm run lint
npm test
npm run build
\`\`\`

### Code Review Checklist
- [ ] Tests pass
- [ ] Linting passes
- [ ] Build succeeds
- [ ] No console errors
- [ ] Responsive design tested
- [ ] Accessibility considered

## Deployment Patterns

### Container Deployment (Recommended)

#### Docker Configuration
\`\`\`dockerfile
# Multi-stage build for optimization
FROM node:20 AS base
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
\`\`\`

#### Docker Commands
\`\`\`bash
# Build image
docker build -t <app-name> .

# Run container
docker run -p 3000:3000 <app-name>

# Test container
docker run -d -p 3001:3000 --name test-container <app-name>
curl http://localhost:3001
docker stop test-container && docker rm test-container
\`\`\`

### Platform-Specific Deployment

#### Vercel (Next.js Optimized)
\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
\`\`\`

#### Netlify
\`\`\`bash
# Build command
npm run build

# Publish directory
.next/standalone
\`\`\`

#### Coolify (Self-hosted)
- **Repository**: Public GitHub repository
- **Build Command**: `npm run build`
- **Output Directory**: `.next/standalone`
- **Port**: 3000
- **Environment Variables**: Configure in Coolify dashboard

### Environment Configuration

#### Production Environment Variables
\`\`\`env
# Required
NODE_ENV=production
RESEND_API_KEY=your_production_api_key

# Optional
NEXT_PUBLIC_GA_ID=your_production_ga_id
NEXT_PUBLIC_GTM_ID=your_production_gtm_id
NEXT_PUBLIC_FLOWISE_URL=your_production_flowise_url

# Performance
NEXT_TELEMETRY_DISABLED=1
\`\`\`

#### Build Configuration
\`\`\`javascript
// next.config.mjs
const nextConfig = {
  output: 'standalone',  // Required for container deployment
  eslint: {
    ignoreDuringBuilds: true,  // For CI/CD
  },
  typescript: {
    ignoreBuildErrors: true,   // For CI/CD
  },
  images: {
    unoptimized: true,         // For static export
  },
}
\`\`\`

## CI/CD Pipeline

### GitHub Actions Example
\`\`\`yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm test
      - run: npm run build
      - name: Deploy to platform
        # Platform-specific deployment step
\`\`\`

### Deployment Checklist
- [ ] All tests pass
- [ ] Build succeeds
- [ ] Environment variables configured
- [ ] Domain/SSL configured
- [ ] Monitoring set up
- [ ] Backup strategy in place

## Monitoring & Maintenance

### Health Checks
\`\`\`bash
# Application health
curl http://your-domain.com/api/health

# Build health
npm run build

# Test health
npm test
\`\`\`

### Performance Monitoring
- **Core Web Vitals**: Monitor LCP, FID, CLS
- **Error Tracking**: Set up error monitoring
- **Uptime Monitoring**: Configure uptime checks
- **Performance Budgets**: Set performance targets

### Maintenance Tasks
\`\`\`bash
# Update dependencies
npm update

# Security audit
npm audit
npm audit fix

# Clean up
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
\`\`\`

## Troubleshooting

### Common Issues

#### Build Failures
\`\`\`bash
# Clear cache
rm -rf .next
npm run build

# Check Node.js version
node --version
nvm use

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
\`\`\`

#### Test Failures
\`\`\`bash
# Clear Jest cache
npm test -- --clearCache

# Run specific failing test
npm test -- --testNamePattern="test name"
\`\`\`

#### Deployment Issues
\`\`\`bash
# Check environment variables
echo $NODE_ENV
echo $RESEND_API_KEY

# Test build locally
npm run build
npm start

# Check container logs
docker logs <container-name>
\`\`\`

### Performance Issues
- **Bundle Size**: Use `npm run build` to check bundle size
- **Memory**: Monitor memory usage in production
- **Database**: Check query performance
- **Images**: Optimize image sizes and formats

## Security Best Practices

### Environment Variables
- Never commit `.env.local` or `.env.production`
- Use different API keys for development and production
- Rotate API keys regularly
- Use environment-specific configurations

### Dependencies
- Regular security audits: `npm audit`
- Keep dependencies updated
- Use lock files (package-lock.json)
- Monitor for security vulnerabilities

### Production Security
- Enable HTTPS everywhere
- Set security headers
- Implement rate limiting
- Regular security scans

## V0 Deployment Considerations

### Platform-Specific Challenges
- **Environment Constraints:** V0 has stricter limitations on npm packages and dependencies
- **Build System Differences:** V0's build process differs from local/VPS environments
- **Module Resolution:** ES modules and dynamic imports may behave differently
- **Runtime Limitations:** Some packages that work locally may fail on V0

### Babel Configuration Management

#### File Naming Convention
The `babel.config.js` file must be managed differently for different deployment environments:

- **Repository State**: File is named `babel.config.jsc` (with `.jsc` extension)
- **V0 Deployment**: File must be renamed to `babel.config.js` for V0 compatibility
- **Coolify/VPS Deployment**: File remains as `babel.config.jsc` to avoid Next.js font loading conflicts

#### Deployment Process
\`\`\`bash
# For V0 deployment
mv babel.config.jsc babel.config.js
# Deploy to V0
# After deployment, rename back for repository consistency
mv babel.config.js babel.config.jsc

# For Coolify/VPS deployment
# File remains as babel.config.jsc (no action needed)
\`\`\`

#### Technical Background
- **V0 Requirement**: V0 requires the file to be named `babel.config.js` for proper module resolution
- **Next.js Conflict**: The babel configuration conflicts with Next.js font loading when named `babel.config.js`
- **Solution**: Use `.jsc` extension in repository to avoid conflicts while maintaining V0 compatibility through renaming

### Flowise Integration Best Practices

#### Recommended Approach: CDN Integration
\`\`\`javascript
// ✅ Preferred: CDN approach for V0 compatibility
const loadFlowise = async () => {
  const script = document.createElement('script')
  script.type = 'module'
  script.innerHTML = `
    import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
    window.FlowiseChatbot = Chatbot
  `
  document.head.appendChild(script)
}
\`\`\`

#### Alternative Approaches
\`\`\`javascript
// ⚠️ May fail on V0: npm package approach
import { BubbleChat } from 'flowise-embed-react'

// ✅ Fallback: iframe approach
<iframe src="https://your-flowise-instance.com/chatbot/chatflow-id" />
\`\`\`

#### V0-Specific Configuration
- **Dynamic Loading:** Use runtime script injection instead of build-time imports
- **Error Handling:** Implement fallback strategies for failed component loads
- **Theme Configuration:** Ensure custom branding works across platforms
- **Testing:** Test on V0 before deploying to production

### Deployment Platform Differences

#### V0 Platform
- **Pros:** Fast deployment, integrated with GitHub
- **Cons:** Limited dependency support, strict environment constraints
- **Best For:** Simple applications, static sites, basic integrations

#### VPS/Coolify Platform
- **Pros:** Full control, all dependencies supported, custom configurations
- **Cons:** More complex setup, requires server management
- **Best For:** Complex applications, custom integrations, full-stack apps

#### Hybrid Approach
- **Development:** Use VPS/Coolify for full feature testing
- **Staging:** Test V0 compatibility before production
- **Production:** Deploy to both platforms with platform-specific configurations

## Documentation Standards

### Required Documentation
- **README.md**: Project overview and setup
- **API Documentation**: For backend services
- **Component Documentation**: For reusable components
- **Deployment Guide**: Project-specific deployment details

### Documentation Best Practices
- Keep documentation up to date
- Include code examples
- Document environment setup
- Provide troubleshooting guides
- Use clear, concise language

---

*Customize this file with your organization's specific development and deployment practices. These guidelines apply to all projects using Agent OS.*
