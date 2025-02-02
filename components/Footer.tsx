import { FC } from 'react';
import Link from 'next/link';
import { Discord, Telegram, Twitter } from './icons';

const Footer: FC = () => {
  const contractAddress = "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contract Address */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Contract Address</h3>
          <div className="bg-white p-4 rounded-lg flex items-center justify-between border border-gray-200">
            <code className="text-sm text-gray-600">{contractAddress}</code>
            <button 
              onClick={handleCopyAddress}
              className="ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Copy Address
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Links Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
              <li><Link href="/how-to-buy" className="text-gray-600 hover:text-gray-900">How to Buy</Link></li>
              <li><Link href="/tokenomics" className="text-gray-600 hover:text-gray-900">Tokenomics</Link></li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500">Join our communities:</p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://t.me/mcgasolana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Telegram</span>
                <Telegram className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/mcgasolana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://discord.gg/mcgasolana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Discord</span>
                <Discord className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://raydium.io/swap" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Buy on Raydium
                </a>
              </li>
              <li>
                <a 
                  href="https://solscan.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  View on Solscan
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/terms" className="text-gray-600 hover:text-gray-900">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600 text-center mb-4">
            MCGA Token is a parody meme token not endorsed by any political figure or official entity. 
            This is not financial advice. Cryptocurrency investments are risky - please do your own research.
          </p>
          <p className="text-sm text-gray-600 text-center">
            {new Date().getFullYear()} MCGA Token. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
