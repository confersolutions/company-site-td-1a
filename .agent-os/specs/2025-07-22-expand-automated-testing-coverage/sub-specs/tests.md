# Tests Specification

This is the tests coverage details for the spec detailed in @.agent-os/specs/2025-07-22-expand-automated-testing-coverage/spec.md

> Created: 2025-07-22
> Version: 1.0.0

## Test Coverage

### Unit Tests

**Components**
- Render and interaction tests for all major UI components in `/components`
- Edge case and error state tests

**Hooks**
- Tests for all custom hooks in `/hooks`
- Mocking of dependencies as needed

**Utilities**
- Tests for all utility functions in `/lib/utils.ts`

### Integration Tests

**User Flows**
- Newsletter signup form submission
- Consultation form submission
- Navigation between major pages
- API call integration (mocked as needed)

### Feature (E2E) Tests

**Critical Journeys**
- Homepage to contact flow
- Blog reading flow
- Consultation booking flow

### Mocking Requirements

- **Resend API:** Mock email sending
- **External APIs:** Mock responses for integration/E2E
- **Time-based tests:** Use fake timers for date/time logic
