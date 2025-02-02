import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
  it('renders hero section with default content', () => {
    render(<HeroSection />);
    
    const heroTitle = screen.getByText(/Revolutionize Your Crypto Journey/i);
    const buyButton = screen.getByText(/Buy Now/i);
    const whitepaperButton = screen.getByText(/Whitepaper/i);

    expect(heroTitle).toBeInTheDocument();
    expect(buyButton).toBeInTheDocument();
    expect(whitepaperButton).toBeInTheDocument();
  });

  it('renders hero section with custom props', () => {
    const customTitle = 'Custom Token Title';
    const customDescription = 'Custom token description';

    render(
      <HeroSection 
        title={customTitle} 
        description={customDescription} 
      />
    );
    
    const heroTitle = screen.getByText(customTitle);
    const heroDescription = screen.getByText(customDescription);

    expect(heroTitle).toBeInTheDocument();
    expect(heroDescription).toBeInTheDocument();
  });
});
