import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TelegramIcon from './icons/Telegram';

const NavButtons = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-20 h-20">
              <Image 
                src="/images/logo.png"
                alt="$MCGA Logo"
                width={250}
                height={250}
                className="object-contain w-20 h-20"
                priority
                quality={100}
              />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              <span className="text-red-600">$</span>MCGA
            </span>
          </Link>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="#contract-address" className="nav-link">
              Contract Address
            </Link>
            <Link href="#how-to-buy" className="nav-link">
              How to Buy
            </Link>
            <div className="relative">
              <button 
                className="nav-link flex items-center"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                More
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100">
                  <Link href="#about" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    About
                  </Link>
                  <Link href="#allocation" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Allocation
                  </Link>
                  <Link href="#faqs" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    FAQs
                  </Link>
                  <Link href="#contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Contact Us
                  </Link>
                  <Link href="/privacy" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Privacy
                  </Link>
                  <Link href="/terms" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Terms
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Social Icons & Buy Button */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              {/* X (Twitter) Icon */}
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Telegram Icon */}
              <a href="#" className="social-icon" aria-label="Telegram">
                <TelegramIcon className="w-6 h-6" />
              </a>
              {/* Discord Icon */}
              <a href="#" className="social-icon" aria-label="Discord">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.118.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>
            <a
              href="https://raydium.io/swap"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavButtons;
