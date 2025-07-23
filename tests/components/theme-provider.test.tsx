import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../components/theme-provider';

// Mock window.matchMedia for Jest environment
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('ThemeProvider', () => {
  it('provides theme context to children', () => {
    render(
      <ThemeProvider>
        <div data-testid="child">Test Child</div>
      </ThemeProvider>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(
      <ThemeProvider>
        <div>Theme Provider Test</div>
      </ThemeProvider>
    );
    expect(screen.getByText('Theme Provider Test')).toBeInTheDocument();
  });
}); 