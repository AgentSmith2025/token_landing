import React, { useState } from 'react';

const ContractAddressSection = () => {
  const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE";
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="container py-16 md:py-24">
      <h2 className="text-center mb-12 text-[#1a1a1a]">
        Contract Address
      </h2>
      
      <div className="max-w-2xl mx-auto">
        <div 
          className="glass-card p-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6 transform transition-all hover:scale-105 animate-subtle-float"
        >
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-xl font-semibold text-[#3498db] mb-2">
              Official Token Contract
            </h3>
            <div 
              className="bg-[#f4f4f4] p-3 rounded-lg inline-block"
              title={contractAddress}
            >
              <code className="text-[#4a4a4a] break-all text-sm">
                {contractAddress}
              </code>
            </div>
          </div>
          
          <button 
            onClick={handleCopyAddress}
            className={`btn ${
              copied 
                ? 'bg-[#2ecc71] text-white' 
                : 'btn-secondary'
            } transition-all duration-300 ease-in-out`}
          >
            {copied ? 'Copied!' : 'Copy Address'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContractAddressSection;
