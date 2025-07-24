# Agent OS Standards

This directory contains global standards and guidelines that apply to all projects using Agent OS.

## 📚 Documentation Structure

### **Quick Reference**
- **[quick-start.md](./quick-start.md)** - 5-minute setup guide for new developers
- **[development-deployment.md](./development-deployment.md)** - Comprehensive development and deployment guide

### **Code Quality**
- **[best-practices.md](./best-practices.md)** - Coding standards and best practices
- **[code-style.md](./code-style.md)** - Code formatting and style guidelines
- **[tech-stack.md](./tech-stack.md)** - Technology stack standards

## 🚀 Getting Started

1. **New to the project?** Start with [quick-start.md](./quick-start.md)
2. **Need development setup?** See [development-deployment.md](./development-deployment.md)
3. **Writing code?** Follow [best-practices.md](./best-practices.md) and [code-style.md](./code-style.md)

## 📋 Usage

These standards are automatically referenced by Agent OS instructions:

- **execute-tasks.md** - References development setup guides
- **plan-product.md** - Includes standards in project documentation
- **create-spec.md** - Uses standards for new feature development
- **analyze-product.md** - Checks against standards during analysis

## 🔄 Project-Specific Overrides

Individual projects can override these standards in their `.agent-os/product/` directory:

- Project-specific deployment: `.agent-os/product/deployment.md`
- Project-specific tech stack: `.agent-os/product/tech-stack.md`
- Project-specific decisions: `.agent-os/product/decisions.md`

## 📝 Contributing

When updating these standards:

1. Consider impact on all existing projects
2. Maintain backward compatibility where possible
3. Update references in instruction files
4. Test with multiple project types

---

*These standards ensure consistency across all Agent OS projects while allowing for project-specific customization.* 