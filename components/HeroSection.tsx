import { FC } from 'react';
import Image from 'next/image';

const HeroSection: FC = () => {
  return (
    <div className="bg-white">
      {/* Main Hero */}
      <div className="container-custom py-24">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h1 className="heading-xl mb-6">
            Make Crypto Great Again.
            <br />
            No hassle.
          </h1>
          <p className="subtitle mb-8">
            Join the revolution with the most patriotic token on the blockchain. 
            Simple, secure, and built for true believers.
          </p>
          <button className="btn btn-primary">
            Get Started
          </button>
        </div>

        {/* Phone Mockup */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-red-500/30 to-blue-500/30 blur-3xl" />
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 flex items-center justify-center">
              <div className="text-white text-xl">App Preview Coming Soon</div>
            </div>
          </div>
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
