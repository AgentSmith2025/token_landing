import { FC } from 'react';
import Link from 'next/link';
import { Discord, Telegram, Twitter, EmailIcon } from './icons';
import ScrollToTopButton from './ScrollToTopButton';

const Footer: FC = () => {
  const contractAddress = "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN";

  return (
    <footer className="relative bg-red-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex justify-center gap-4 mb-8">
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
              aria-label="Email us"
            >
              <EmailIcon />
            </a>
          </div>

          <div className="flex justify-center space-x-6 text-sm mb-8">
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

          <p className="text-sm text-gray-400 font-mono bg-gray-800/30 px-4 py-2 rounded-lg inline-block mb-8">
            Contract Address: {contractAddress}
          </p>

          <p className="text-xs text-gray-500">
            {new Date().getFullYear()} MCGA Token. All Rights Reserved.
          </p>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
