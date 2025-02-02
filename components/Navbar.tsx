'use client';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Contract', href: '#contract' },
    { label: 'How to Buy', href: '#how-to-buy' },
    { label: 'Allocation', href: '#allocation' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-red-600 border-b-4 border-yellow-400 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-2xl font-bold text-white hover:text-yellow-300 transition-colors"
            onClick={() => setActiveSection('home')}
          >
            MCGA
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-lg font-semibold ${
                  activeSection === item.href ? 'text-yellow-400' : 'text-white'
                } hover:text-yellow-300 transition-all transform hover:scale-105`}
                onClick={() => setActiveSection(item.href)}
              >
                {item.label}
              </a>
            ))}
            <button className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-full 
              hover:bg-blue-700 border-2 border-yellow-400 animate-pulse">
              BUY NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          <div className="px-4 py-2 space-y-4 bg-red-600 border-t-4 border-yellow-400">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-white text-lg hover:text-yellow-300"
                onClick={() => {
                  setActiveSection(item.href);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-2 bg-blue-600 text-white rounded-full 
              hover:bg-blue-700 border-2 border-yellow-400">
              BUY NOW
            </button>
          </div>
        </MobileMenu>
      </div>
    </nav>
  );
}
