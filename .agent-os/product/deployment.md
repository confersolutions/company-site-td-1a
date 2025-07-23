# Project-Specific Deployment Configuration

> **Note**: This file contains project-specific deployment details. For general development and deployment guidance, see `.agent-os/standards/development-deployment.md`.

## Repository Setup
- **GitHub Repository**: [confersolutions/company-site-td-1a](https://github.com/confersolutions/company-site-td-1a.git)
- **Branch**: `main`
- **Public Repository**: Yes (required for Coolify deployment)

## Coolify Deployment (Project-Specific)

### Platform Configuration
- **Platform**: Coolify on VPS
- **Deployment Method**: Git repository integration
- **Container**: Docker with Next.js standalone output
- **Environment**: Production

### Project-Specific Environment Variables
Configure these in Coolify dashboard:

```env
# Email Configuration (Required)
RESEND_API_KEY=your_resend_api_key

# Optional: Analytics and Tracking
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_GTM_ID=your_google_tag_manager_id

# Optional: Flowise Chat Integration
NEXT_PUBLIC_FLOWISE_URL=your_flowise_chat_url

# Performance Settings
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

### Build Configuration (Project-Specific)
- **Build Command**: `npm run build`
- **Output Directory**: `.next/standalone`
- **Node Version**: 20 (specified in .nvmrc)
- **Port**: 3000 (default Next.js port)

### Docker Configuration (Project-Specific)
- **Base Image**: Node.js 20
- **Multi-stage Build**: Optimized for production
- **Security**: Non-root user (nextjs:nodejs)
- **Health Check**: Built-in Next.js health endpoints

### Deployment Process (Project-Specific)
1. Code changes pushed to GitHub repository
2. Coolify detects changes via webhook
3. Automatic build and deployment to VPS
4. Health checks ensure successful deployment
5. Zero-downtime deployments with Docker

### Monitoring (Project-Specific)
- **Logs**: Available through Coolify dashboard
- **Health Checks**: Automatic monitoring of application health
- **Performance**: Built-in Next.js performance monitoring
- **Uptime**: Coolify provides uptime monitoring

### Backup & Recovery (Project-Specific)
- **Code**: Backed up in GitHub repository
- **Database**: No database required (static site)
- **Environment**: Configuration backed up in Coolify
- **Recovery**: Quick rollback through Coolify interface

## Project-Specific Notes

### Known Issues & Solutions
- **API Route Build Issues**: Resolved by moving Resend client initialization to runtime
- **Dependency Conflicts**: Resolved with package overrides for React 19 compatibility
- **Flowise Integration**: Fully implemented with custom styling

### Performance Optimizations
- **Bundle Size**: Optimized with Next.js standalone output
- **Image Optimization**: Unoptimized images for container deployment
- **Caching**: Leverages Next.js built-in caching strategies

### Security Considerations
- **API Keys**: Stored securely in Coolify environment variables
- **HTTPS**: Enabled through Coolify configuration
- **Dependencies**: Regular security audits with `npm audit`

---

*For general development and deployment guidance, see `.agent-os/standards/development-deployment.md`* 