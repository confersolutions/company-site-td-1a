# Technical Specification

This is the technical specification for the spec detailed in @.agent-os-active/specs/2025-07-22-expand-automated-testing-coverage/spec.md

> Created: 2025-07-22
> Version: 1.0.0

## Technical Requirements

- Audit all components, hooks, and utilities for existing test coverage
- Write/expand unit tests for all major React components in `/components`
- Write/expand unit tests for all hooks in `/hooks`
- Write/expand unit tests for utility functions in `/lib/utils.ts`
- Identify key user flows for integration testing (e.g., form submissions, navigation)
- Write integration tests for forms, navigation, and API calls
- Set up or expand E2E testing with Playwright or Cypress
- Write E2E tests for homepage to contact flow, blog reading, and consultation booking
- Integrate test suite with CI (GitHub Actions, Coolify)
- Document test strategy and how to run tests

## Approach Options

**Option A:** Use Jest for unit/integration, Playwright for E2E (Selected)
- Pros: Modern, widely supported, good community
- Cons: Requires maintaining two test runners

**Option B:** Use Cypress for all integration/E2E
- Pros: Unified runner for integration/E2E
- Cons: May require more setup for React unit tests

**Rationale:** Playwright is already supported in many Next.js projects and integrates well with CI. Jest is standard for unit/integration.

## External Dependencies

- **jest** - Unit/integration testing
- **@testing-library/react** - React component testing
- **playwright** or **cypress** - E2E testing
- **@testing-library/jest-dom** - Custom matchers for DOM assertions
- **Justification:** These are industry-standard tools for React/Next.js projects and provide comprehensive coverage.
