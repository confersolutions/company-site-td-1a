# Deployment Fix Instructions - Company Site

## Issue Summary
**Problem**: Build failing with API route errors during Next.js build phase, even though the code works perfectly locally and on Vercel deployments.

**Root Causes**:
1. **API Key Issue**: Resend client initialized at module level during build time
2. **Environment Differences**: Docker/Nixpacks environments handle dependencies differently than local/Vercel

## Solution 1: Direct GitHub to Coolify Deployment (RECOMMENDED ✅)

### Quick Fix Steps
1. **Fix API Route Build Issue**:
   ```typescript
   // In app/api/send-email/route.ts
   // MOVE Resend initialization INSIDE the POST handler:
   export async function POST(request: NextRequest) {
     // Check API key first
     if (!process.env.RESEND_API_KEY) {
       throw new Error("RESEND_API_KEY is not configured")
     }
     
     // Initialize client at runtime, not module level
     const resend = new Resend(process.env.RESEND_API_KEY)
     // ... rest of handler
   }
   ```

2. **Coolify Environment Variables**:
   ```bash
   NIXPACKS_NODE_VERSION=20
   NODE_ENV=production
   NEXT_TELEMETRY_DISABLED=1
   RESEND_API_KEY=your_actual_api_key
   ```

3. **Required Files**:
   - `.nvmrc` with `20` (forces Node.js 20)
   - `next.config.mjs` with `output: 'standalone'`
   - Remove any `nixpacks.toml` files (causes syntax errors)

### Success Indicators
- ✅ Nixpacks auto-detects Node.js 20
- ✅ npm used instead of pnpm
- ✅ Build completes without API key errors
- ✅ No Docker complexity needed

## Solution 2: Docker Build Method (FALLBACK)

### When to Use Docker
- Direct deployment fails repeatedly
- Need more control over build environment
- Custom dependencies or build steps required

### Docker Configuration
1. **Use Node.js 20 (not Alpine)**:
   ```dockerfile
   FROM node:20 AS base
   ```

2. **Handle Build-Time Environment**:
   ```dockerfile
   # Build phase - API key not needed during build anymore
   ENV NODE_ENV=production
   ENV NEXT_TELEMETRY_DISABLED=1
   ```

3. **Explicit File Copying**:
   ```dockerfile
   COPY package*.json ./
   RUN npm ci --omit=dev
   COPY . .
   RUN npm run build
   ```

### Docker Build Commands
```bash
# Clear cache and build
docker system prune -f
docker build -t confer-website . --no-cache

# Test container
docker run -d -p 3001:3000 --name confer-test confer-website
curl http://localhost:3001
docker stop confer-test && docker rm confer-test
```

## Key Lessons Learned

### ✅ **What Fixed It**
1. **API Route Fix**: Move Resend client initialization from module level to runtime
2. **Environment Variables**: Use Coolify environment variables instead of nixpacks.toml
3. **Node.js Version**: Force Node.js 20 via .nvmrc and environment variables
4. **Package Manager**: Let Nixpacks auto-detect npm (remove pnpm files)

### ❌ **What Didn't Work**
1. Module-level API client initialization (fails during build)
2. nixpacks.toml configuration (syntax errors)
3. Complex Dockerfile workarounds (unnecessary complexity)
4. Modifying working app code for deployment issues

## Files to Maintain

### Required Files
- `.nvmrc` → `20`
- `next.config.mjs` → `output: 'standalone'`
- `.env.local` → Local development API keys
- `package.json` → Node/npm version specifications

### Files to Avoid
- `nixpacks.toml` (causes syntax errors)
- `pnpm-lock.yaml` (if using npm)
- Module-level API client initialization

## Deployment Strategy

### Primary: GitHub → Coolify Direct
1. Fix API routes (runtime initialization)
2. Set environment variables in Coolify
3. Let Nixpacks auto-detect everything
4. Deploy directly from GitHub

### Fallback: Custom Dockerfile
1. Use when direct deployment consistently fails
2. Switch build method in Coolify to Dockerfile
3. More control but added complexity

## Environment Variables Reference

### Production (Coolify)
```bash
NIXPACKS_NODE_VERSION=20
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
RESEND_API_KEY=re_eGqjWKQh_LjshaPK9gFxaHuT7FJAe44Js
```

### Local Development (.env.local)
```bash
RESEND_API_KEY=re_eGqjWKQh_LjshaPK9gFxaHuT7FJAe44Js
NEXT_TELEMETRY_DISABLED=1
```

## Success Indicators
- ✅ Build completes without "Failed to collect page data" errors
- ✅ Container/deployment starts and responds on correct port
- ✅ API routes work properly (email sending)
- ✅ Local development unaffected
- ✅ No need to modify working application code

**Remember**: The goal is deployment without changing working application code. Environment and configuration issues should be solved at the deployment layer, not the application layer. 