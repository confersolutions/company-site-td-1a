# Quick Start Guide

> **For new developers or quick project setup**

## 🚀 Immediate Setup (5 minutes)

### 1. Prerequisites Check
```bash
# Check Node.js version
node --version  # Should be 20.x

# Check if nvm is available
nvm --version   # If not installed, install nvm first
```

### 2. Clone & Setup
```bash
# Clone repository
git clone <repository-url>
cd <project-name>

# Use correct Node.js version
nvm use

# Install dependencies
npm install
```

### 3. Environment Setup
```bash
# Create environment file
cp .env.example .env.local  # If example exists
# OR create manually:
touch .env.local
```

Add to `.env.local`:
```env
RESEND_API_KEY=your_api_key_here
NODE_ENV=development
```

### 4. Start Development
```bash
# Start dev server
npm run dev

# Open browser
open http://localhost:3000
```

## 🔧 Common Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm test             # Run tests
npm run lint         # Check code quality

# Troubleshooting
npm run build        # Check for build issues
npm audit            # Security audit
npm update           # Update dependencies
```

## 📚 Full Documentation

- **Development Guide**: `.agent-os/standards/development-deployment.md`
- **Project Deployment**: `.agent-os/product/deployment.md`
- **Code Standards**: `.agent-os/standards/code-style.md`

## 🆘 Quick Troubleshooting

### Build Fails
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Tests Fail
```bash
npm test -- --clearCache
npm test
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
npm run dev
```

---

*Need more details? Check the full development guide in `.agent-os/standards/development-deployment.md`* 