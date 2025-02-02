import React from 'react';

const HowToBuySection = () => {
  const buySteps = [
    { 
      number: "01", 
      title: "Create Wallet", 
      description: "Download Phantom or your preferred crypto wallet",
      icon: "💳",
      color: "text-[#2ecc71]"
    },
    { 
      number: "02", 
      title: "Add Funds", 
      description: "Fund your wallet with SOL or preferred cryptocurrency",
      icon: "💰",
      color: "text-[#3498db]"
    },
    { 
      number: "03", 
      title: "Connect Exchange", 
      description: "Link your wallet to a supported decentralized exchange",
      icon: "🔗",
      color: "text-[#e74c3c]"
    },
    { 
      number: "04", 
      title: "Swap & Buy", 
      description: "Exchange your crypto for our token with a single click",
      icon: "🚀",
      color: "text-[#f39c12]"
    }
  ];

  return (
    <section className="container py-16 md:py-24">
      <h2 className="text-center mb-12 text-[#1a1a1a]">
        How to Buy Our Token
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {buySteps.map((step, index) => (
          <div 
            key={index} 
            className="glass-card p-6 text-center space-y-4 transform transition-all hover:scale-105 animate-subtle-float relative"
          >
            <div className="absolute top-4 left-4 text-2xl font-bold text-opacity-20 text-gray-300">
              {step.number}
            </div>
            
            <div className={`text-4xl mb-4 ${step.color}`}>
              {step.icon}
            </div>
            
            <h3 className={`text-xl font-semibold ${step.color}`}>
              {step.title}
            </h3>
            
            <p className="text-[#4a4a4a] text-sm">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToBuySection;
