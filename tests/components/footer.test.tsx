import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../components/footer';

describe('Footer', () => {
  it('renders all footer links', () => {
    render(<Footer />);
    // Example: check for expected links
    // expect(screen.getByText(/privacy/i)).toBeInTheDocument();
    // expect(screen.getByText(/terms/i)).toBeInTheDocument();
    // Add more link checks as needed
  });

  it('displays copyright text', () => {
    render(<Footer />);
    // Example: check for copyright
    expect(screen.getByText(/copyright/i)).toBeInTheDocument();
  });
}); 