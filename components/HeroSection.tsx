import { FC } from 'react';
import Image from 'next/image';

const HeroSection: FC = () => {
  return (
    <div className="bg-white" id="home">
      {/* Main Hero Section */}
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen pt-24 pb-12">
        {/* Logo */}
        <div className="relative flex items-center justify-center mb-8">
          <Image
            src="/images/logo.png"
            alt="MCGA Logo"
            width={160}
            height={160}
            className="w-32 h-32 md:w-40 md:h-40 object-contain"
            priority
          />
        </div>

        {/* Title and Subtitle */}
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Make Crypto Great Again
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Join the revolution with the most patriotic token on the blockchain.
            Simple, secure, and built for true believers.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-md px-4">
          <a
            href="https://raydium.io/swap"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full md:w-auto px-8 py-3 text-lg"
          >
            Buy Now
          </a>
          <a
            href="#about"
            className="btn btn-secondary w-full md:w-auto px-8 py-3 text-lg"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Features */}
      <div className="container-custom py-24 bg-gray-50">
        <div className="feature-grid">
          <div className="text-center">
            <div className="mb-4">🚀</div>
            <h3 className="text-xl font-medium mb-2">Limitless Gains</h3>
            <p className="text-gray-600">Reach for the moon with unrestricted growth potential</p>
          </div>
          <div className="text-center">
            <div className="mb-4">🔒</div>
            <h3 className="text-xl font-medium mb-2">Unbreakable Security</h3>
            <p className="text-gray-600">Your freedom is protected by military-grade encryption</p>
          </div>
          <div className="text-center">
            <div className="mb-4">🇺🇸</div>
            <h3 className="text-xl font-medium mb-2">American Made</h3>
            <p className="text-gray-600">Built by patriots, for patriots</p>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="container-custom py-24">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">A US token,<br />with peace of mind.</h2>
          <p className="subtitle">Start your patriotic journey with our simple pricing plan.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="price-card">
            <div className="text-2xl font-medium mb-2">Basic Plan</div>
            <div className="text-4xl font-bold mb-6">$69</div>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>✓ 1,000 MCGA Tokens</li>
              <li>✓ Basic Trading</li>
              <li>✓ Community Access</li>
            </ul>
            <button className="btn btn-primary w-full">Buy Now</button>
          </div>
          <div className="price-card border-2 border-black">
            <div className="text-2xl font-medium mb-2">Patriot Plan</div>
            <div className="text-4xl font-bold mb-6">$420</div>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>✓ 10,000 MCGA Tokens</li>
              <li>✓ Advanced Trading</li>
              <li>✓ VIP Community Access</li>
            </ul>
            <button className="btn btn-primary w-full">Buy Now</button>
          </div>
          <div className="price-card">
            <div className="text-2xl font-medium mb-2">Freedom Plan</div>
            <div className="text-4xl font-bold mb-6">$1776</div>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>✓ 100,000 MCGA Tokens</li>
              <li>✓ Unlimited Trading</li>
              <li>✓ Elite Community Access</li>
            </ul>
            <button className="btn btn-primary w-full">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Coverage */}
      <div className="container-custom py-24 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Our coverage?<br />Glad you asked.</h2>
          <p className="subtitle">Available on all major exchanges and platforms.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
          {/* Add exchange logos here */}
          <div>Exchange 1</div>
          <div>Exchange 2</div>
          <div>Exchange 3</div>
          <div>Exchange 4</div>
          <div>Exchange 5</div>
          <div>Exchange 6</div>
        </div>
      </div>

      {/* CTA */}
      <div className="container-custom py-24">
        <div className="bg-black text-white rounded-3xl p-12 text-center">
          <h2 className="heading-lg mb-4">Get connected<br />in 60 seconds.</h2>
          <p className="subtitle text-gray-400 mb-8">One plan. One token. Infinite possibilities.</p>
          <button className="btn bg-white text-black hover:bg-gray-100">
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
