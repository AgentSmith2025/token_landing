import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is our token about?",
      answer: "Our token is a community-driven cryptocurrency with a focus on innovative blockchain solutions and meme culture, empowering users through transparent and decentralized governance.",
      icon: "🚀"
    },
    {
      question: "How can I buy the token?",
      answer: "You can purchase our token through major decentralized exchanges and supported crypto wallets. Check our 'How to Buy' section for detailed step-by-step instructions.",
      icon: "💳"
    },
    {
      question: "What makes our token unique?",
      answer: "We combine cutting-edge blockchain technology with a strong, engaged community, transparent governance, and a commitment to real-world utility and innovation.",
      icon: "✨"
    },
    {
      question: "Are there any transaction fees?",
      answer: "Our token has minimal transaction fees, with a portion allocated to community development, marketing, and continuous platform improvement.",
      icon: "💸"
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="container py-16 md:py-24">
      <h2 className="text-center mb-12 text-[#1a1a1a]">
        Frequently Asked Questions
      </h2>
      
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="glass-card rounded-lg transition-all duration-300 overflow-hidden"
          >
            <div 
              onClick={() => toggleFAQ(index)}
              className="p-6 flex items-center justify-between cursor-pointer hover:bg-[#f9f9f9] transition-colors"
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl">{faq.icon}</span>
                <h3 className="text-xl font-semibold text-[#3498db]">
                  {faq.question}
                </h3>
              </div>
              <span className="text-2xl text-[#4a4a4a]">
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            
            {activeIndex === index && (
              <div className="px-6 pb-6 animate-fade-in">
                <p className="text-[#4a4a4a] border-t pt-4 mt-4 border-[#e0e0e0]">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
