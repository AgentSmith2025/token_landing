import React from 'react';

const FightFactsSection = () => {
  const fightFacts = [
    { 
      title: "Community Power", 
      description: "Driven by a passionate and engaged global community",
      icon: "🌍",
      color: "text-[#2ecc71]"
    },
    { 
      title: "Transparent Governance", 
      description: "Decentralized decision-making with full community involvement",
      icon: "🤝",
      color: "text-[#3498db]"
    },
    { 
      title: "Innovative Technology", 
      description: "Cutting-edge blockchain solutions that push the boundaries",
      icon: "🚀",
      color: "text-[#e74c3c]"
    }
  ];

  return (
    <section className="container py-16 md:py-24">
      <h2 className="text-center mb-12 text-[#1a1a1a]">
        Why Our Token Stands Out
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {fightFacts.map((fact, index) => (
          <div 
            key={index} 
            className="glass-card p-6 text-center space-y-4 transform transition-all hover:scale-105 animate-subtle-float"
          >
            <div className={`text-4xl mb-4 ${fact.color}`}>
              {fact.icon}
            </div>
            <h3 className={`text-xl font-semibold ${fact.color}`}>
              {fact.title}
            </h3>
            <p className="text-[#4a4a4a]">
              {fact.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FightFactsSection;
