import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Lazy load icons
const Telegram = dynamic(() => import('./icons/Telegram').then(mod => mod.Telegram));
const Twitter = dynamic(() => import('./icons/Twitter').then(mod => mod.Twitter));
const Discord = dynamic(() => import('./icons/Discord').then(mod => mod.Discord));

const Footer: FC = () => {
  const contractAddress = "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN";
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://t.me/mcgasolana"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800/50 p-2.5 rounded-lg text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-105 hover:bg-gray-700"
            aria-label="Telegram"
          >
            <Telegram className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com/mcgasolana"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800/50 p-2.5 rounded-lg text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-105 hover:bg-gray-700"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://discord.gg/mcgasolana"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800/50 p-2.5 rounded-lg text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-105 hover:bg-gray-700"
            aria-label="Discord"
          >
            <Discord className="h-5 w-5" />
          </a>
          <a
            href="mailto:info@getmcgatoken.com"
            className="bg-gray-800/50 p-2.5 rounded-lg text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-105 hover:bg-gray-700"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>

        {/* Contract Address */}
        <p className="text-sm text-gray-400 font-mono bg-gray-800/30 px-4 py-2 rounded-lg inline-block">
          Contract Address: {contractAddress}
        </p>

        {/* Links */}
        <div className="flex justify-center mt-4 space-x-6 text-sm">
          <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/howtobuy" className="text-gray-400 hover:text-white transition-colors">
            How to Buy
          </Link>
          <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
            Terms & Conditions
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-4">
          {new Date().getFullYear()} MCGA Token. All Rights Reserved.
        </p>
      </div>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-colors duration-200 z-50"
          aria-label="Scroll to top"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </footer>
  );
};

export default Footer;
