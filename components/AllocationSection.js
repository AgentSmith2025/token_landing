import React from 'react';

const AllocationSection = () => {
  const allocations = [
    { 
      category: "Community", 
      percentage: 40, 
      amount: "80M Tokens",
      color: "bg-[#2ecc71]"
    },
    { 
      category: "Development", 
      percentage: 25, 
      amount: "50M Tokens",
      color: "bg-[#3498db]"
    },
    { 
      category: "Marketing", 
      percentage: 15, 
      amount: "30M Tokens",
      color: "bg-[#e74c3c]"
    },
    { 
      category: "Liquidity", 
      percentage: 20, 
      amount: "40M Tokens",
      color: "bg-[#f39c12]"
    }
  ];

  return (
    <section className="container py-16 md:py-24">
      <h2 className="text-center mb-12 text-[#1a1a1a]">
        Token Allocation
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {allocations.map((allocation, index) => (
          <div 
            key={index} 
            className="glass-card p-6 space-y-4 transform transition-all hover:scale-105 animate-subtle-float"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-[#1a1a1a]">
                {allocation.category}
              </h3>
              <span className="text-[#4a4a4a]">
                {allocation.percentage}%
              </span>
            </div>
            
            <div className="w-full bg-[#e0e0e0] rounded-full h-2.5">
              <div 
                className={`${allocation.color} h-2.5 rounded-full`}
                style={{width: `${allocation.percentage}%`}}
              ></div>
            </div>
            
            <p className="text-[#4a4a4a] text-sm">
              {allocation.amount}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllocationSection;
