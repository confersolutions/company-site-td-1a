# Architectural Decisions

## Directory Structure
- Uses Next.js app directory structure for routing and modularity
- Components are organized by feature and type (e.g., ui, sections)
- API routes are colocated under /app/api for backend logic
- Custom hooks and utilities are separated into /hooks and /lib
- **Testing:** Comprehensive test structure in /tests with component, integration, and deployment tests

## Styling
- Tailwind CSS is used for utility-first styling
- Component-level CSS and PostCSS for advanced styling needs

## UI/UX
- Radix UI primitives for accessible, consistent UI components
- Custom modal, form, and section components for branding
- **Flowise Chat:** Custom-styled chat widget with Confer branding and AI consultation focus

## Integration
- **✅ Flowise chat** is integrated for real-time customer interaction with custom theming
- Resend is used for email functionality

## Testing Strategy
- **Jest + React Testing Library** for comprehensive component and integration testing
- **jsdom environment** for DOM testing capabilities
- **Coverage reporting** with HTML, LCOV, and text outputs
- **Mock strategy** for Next.js navigation, images, and external services

## TypeScript
- Strict type checking enabled for reliability
- Path aliases set up for cleaner imports

## Build & Deployment
- Standalone Next.js output for flexible deployment (Docker-ready)
- ESLint and TypeScript errors are ignored during build for CI/CD flexibility
- **Repository**: Connected to [GitHub repository](https://github.com/confersolutions/company-site-td-1a.git)
- **Deployment**: Coolify-based deployment on VPS using public Git repository
- **CI/CD**: Automated deployments through Coolify's Git integration

## Dependency Management
- **Package overrides** used to resolve React 19 compatibility issues
- **flowise-embed-react** integrated with custom configuration
- **Testing libraries** properly configured for React 19 compatibility

## V0 Deployment & Flowise Integration Learnings

### V0 Platform Compatibility Challenges
- **JSX Import Errors:** V0's environment has strict constraints on React component imports
- **React Version Conflicts:** `flowise-embed-react` package requires React 18, but project uses React 19
- **Dependency Resolution:** V0's build system rejects packages with peer dependency conflicts
- **Module Resolution:** ES modules and dynamic imports behave differently on V0 vs local/VPS environments

### Flowise Integration Solution
- **CDN Approach:** Using `flowise-embed` web.js from CDN instead of npm package
- **Dynamic Script Loading:** Loading Flowise via `document.createElement('script')` with module type
- **Runtime Initialization:** Initializing chat component after script loads using `window.FlowiseChatbot`
- **Fallback Strategy:** Iframe approach as backup when React components fail

### Implementation Details
```javascript
// CDN Loading Strategy
const script = document.createElement('script')
script.type = 'module'
script.innerHTML = `
  import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
  window.FlowiseChatbot = Chatbot
`
document.head.appendChild(script)

// Runtime Initialization
chatInstanceRef.current = window.FlowiseChatbot.init({
  chatflowid: "5440e748-320e-4b27-8849-bed8e9f924f9",
  apiHost: "https://flowise.confersolutions.ai",
  theme: { /* custom configuration */ }
})
```

### Key Learnings
- **Platform-Specific Solutions:** Different deployment platforms require different integration approaches
- **CDN Reliability:** CDN approach provides better compatibility across platforms
- **Dynamic Loading:** Runtime script injection bypasses build-time dependency issues
- **Branding Consistency:** Custom theme configuration ensures consistent branding across platforms
