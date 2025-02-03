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
    <>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#howtobuy" className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
                    How to Buy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contract */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Contract</h3>
              <div className="mt-4">
                <p className="text-gray-400 break-all text-sm">
                  {contractAddress}
                </p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
              <div className="mt-4">
                <a 
                  href="mailto:info@getmcgatoken.com"
                  className="text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm"
                >
                  info@getmcgatoken.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect With Us</h3>
              <div className="flex space-x-6">
                <a
                  href="https://t.me/mcgasolana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition-all duration-200 transform hover:scale-105"
                  aria-label="Visit our Telegram channel"
                >
                  <Telegram className="h-6 w-6" aria-hidden="true" />
                </a>
                <a
                  href="https://twitter.com/mcgasolana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition-all duration-200 transform hover:scale-105"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="h-6 w-6" aria-hidden="true" />
                </a>
                <a
                  href="https://discord.gg/mcgasolana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition-all duration-200 transform hover:scale-105"
                  aria-label="Join our Discord server"
                >
                  <Discord className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm text-center">
              {new Date().getFullYear()} MCGA Token. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

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
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
};

export default Footer;
