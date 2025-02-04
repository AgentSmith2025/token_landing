import { FC, useState, MouseEvent } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NavButtons from '../components/NavButtons';
import ContractAddress from '../components/ContractAddress';
import Footer from '../components/Footer';

const Home: FC = () => {
  const tokenInfo = {
    supply: "1,000,000,000,000",
    network: "Solana",
    initialPrice: "$0.0000001",
    contractAddress: "6p5xgrFyF7AeE6TZkSmFsko444wqoPt5tcUSqi2jfGiPN",
  };

  const [faqOpen, setFaqOpen] = useState<{ [key: string]: boolean }>({});

  const toggleFAQ = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const faqId = target.parentElement?.id;
    if (faqId) {
      setFaqOpen((prevFaqOpen) => {
        return { ...prevFaqOpen, [faqId]: !prevFaqOpen[faqId] };
      });
    }
  };

  const features = [
    {
      icon: <svg viewBox="0 0 24 24" className="w-8 h-8 mx-auto mb-4 text-red-600"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.51 3.67-.52.36-.99.53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.99-1.73 6.65-2.87 7.97-3.43 3.78-1.6 4.57-1.88 5.08-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.03.25z" /></svg>,
      title: 'Meme Token',
      description: 'A fun and community-driven approach to crypto assets',
    },
    {
      icon: <svg viewBox="0 0 24 24" className="w-8 h-8 mx-auto mb-4 text-red-600"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.51 3.67-.52.36-.99.53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.99-1.73 6.65-2.87 7.97-3.43 3.78-1.6 4.57-1.88 5.08-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.03.25z" /></svg>,
      title: 'Solana Blockchain',
      description: 'Fast and secure transactions with low fees',
    },
    {
      icon: <svg viewBox="0 0 24 24" className="w-8 h-8 mx-auto mb-4 text-red-600"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.51 3.67-.52.36-.99.53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.99-1.73 6.65-2.87 7.97-3.43 3.78-1.6 4.57-1.88 5.08-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.03.25z" /></svg>,
      title: 'Community Driven',
      description: 'Join our community and be part of the movement',
    },
  ];

  const tokenomics = [
    {
      percentage: '40%',
      title: 'Presale',
      description: 'Tokens allocated for presale',
    },
    {
      percentage: '30%',
      title: 'Liquidity Pool',
      description: 'Tokens allocated for liquidity pool',
    },
    {
      percentage: '20%',
      title: 'Marketing',
      description: 'Tokens allocated for marketing',
    },
    {
      percentage: '10%',
      title: 'Team',
      description: 'Tokens allocated for team',
    },
  ];

  const roadmap = [
    {
      phase: 'Phase 1',
      title: 'Token Creation',
      items: [
        'Create token on Solana blockchain',
        'Set up tokenomics and distribution',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Presale',
      items: [
        'Conduct presale on Raydium',
        'Allocate tokens to presale participants',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Listing',
      items: [
        'List token on Raydium and other exchanges',
        'Enable trading and liquidity',
      ],
    },
  ];

  const faqs = [
    {
      question: 'What is MCGA Token?',
      answer: 'MCGA Token is a community-driven meme token on the Solana blockchain.',
    },
    {
      question: 'How can I buy MCGA Token?',
      answer: 'You can buy MCGA Token on Raydium and other exchanges.',
    },
    {
      question: 'What is the total supply of MCGA Token?',
      answer: 'The total supply of MCGA Token is 1,000,000,000,000.',
    },
  ];

  const buySteps = [
    {
      title: 'Step 1: Create a Solana Wallet',
      description: 'Create a Solana wallet using Phantom or other wallets.',
    },
    {
      title: 'Step 2: Buy SOL',
      description: 'Buy SOL from any major exchange and send it to your wallet.',
    },
    {
      title: 'Step 3: Swap SOL for MCGA',
      description: 'Swap SOL for MCGA on Raydium or other exchanges.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>MCGA – Make Crypto Great Again | Affordable Meme Token on Solana</title>
        <meta name="description" content="Join the movement to restore fun in crypto with MCGA, a low-cost Solana-based meme token. Invest for less than the price of a coffee." />
        <meta property="og:title" content="MCGA – Make Crypto Great Again | Affordable Meme Token on Solana" />
        <meta property="og:description" content="Join the movement to restore fun in crypto with MCGA, a low-cost Solana-based meme token. Invest for less than the price of a coffee." />
        <meta property="og:url" content="https://www.getmcgatoken.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MCGA – Make Crypto Great Again" />
        <meta name="twitter:description" content="Join the movement to restore fun in crypto with MCGA, a low-cost Solana-based meme token." />
        <link rel="canonical" href="https://www.getmcgatoken.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow">
        {/* Navigation */}
        <NavButtons />
        
        {/* Hero Section */}
        <section className="relative pt-16 md:pt-24 lg:pt-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Make Crypto Great Again
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Join the movement to restore fun in crypto with MCGA, a low-cost Solana-based meme token.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <a
                  href="#buy"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition duration-150 ease-in-out"
                >
                  Buy Now
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition duration-150 ease-in-out"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-red-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose MCGA?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the perfect blend of meme culture and serious tokenomics
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="text-red-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Tokenomics</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transparent and fair distribution for sustainable growth
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tokenomics.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">{item.percentage}</div>
                  <div className="text-gray-900 font-medium mb-2">{item.title}</div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-16 md:py-24 bg-red-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Roadmap</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our journey to make crypto great again
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {roadmap.map((phase, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="text-red-600 font-semibold mb-3">{phase.phase}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{phase.title}</h3>
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">FAQ</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Common questions about MCGA Token
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <span className="text-left font-medium text-gray-900">{faq.question}</span>
                    <span className={`transform transition-transform duration-200 ${faqOpen[index] ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  {faqOpen[index] && (
                    <div className="mt-2 p-4 bg-white rounded-lg">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Buy Section */}
        <section id="buy" className="py-16 md:py-24 bg-red-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How to Buy</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Follow these simple steps to get your MCGA tokens
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {buySteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Join the Movement</h2>
            <p className="text-xl text-gray-600 mb-8">
              Be part of the next big meme token on Solana
            </p>
            <a
              href="https://raydium.io/swap"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xl px-12 py-4"
            >
              Buy $MCGA Now
            </a>
          </div>
        </section>

        {/* Allocation Section */}
        <section id="allocation" className="section bg-red-50">
          <div className="section-container">
            <h2 className="section-title">Token Allocation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Initial Distribution</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span>Public Sale</span>
                    <span className="font-mono text-red-600">40%</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Liquidity Pool</span>
                    <span className="font-mono text-red-600">30%</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Marketing</span>
                    <span className="font-mono text-red-600">20%</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Team</span>
                    <span className="font-mono text-red-600">10%</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Vesting Schedule</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span>Public Sale Tokens</span>
                    <span className="text-gray-600">No Lock</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Liquidity Pool</span>
                    <span className="text-gray-600">Locked 1 Year</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Marketing</span>
                    <span className="text-gray-600">6 Month Linear</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Team</span>
                    <span className="text-gray-600">1 Year Linear</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="section bg-white">
          <div className="section-container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <div className="faq-item">
                  <button id="faq-1" className="faq-button" onClick={(e) => toggleFAQ(e)}>
                    <span>Is this an official MCGA product?</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`faq-answer ${faqOpen['faq-1'] ? 'block' : 'hidden'}`}>
                    <p>No, this is a community-driven meme token project. We are not affiliated with any political campaign or individual.</p>
                  </div>
                </div>

                <div className="faq-item">
                  <button id="faq-2" className="faq-button" onClick={(e) => toggleFAQ(e)}>
                    <span>What is the official contract address and symbol?</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`faq-answer ${faqOpen['faq-2'] ? 'block' : 'hidden'}`}>
                    <p>Symbol: $MCGA</p>
                    <p>Contract Address: Coming Soon</p>
                  </div>
                </div>

                <div className="faq-item">
                  <button id="faq-3" className="faq-button" onClick={(e) => toggleFAQ(e)}>
                    <span>How can I get $MCGA tokens?</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`faq-answer ${faqOpen['faq-3'] ? 'block' : 'hidden'}`}>
                    <p>You can buy $MCGA on Raydium DEX. Simply connect your Phantom wallet, swap SOL for $MCGA, and you&apos;ll receive your tokens instantly in your wallet.</p>
                  </div>
                </div>

                <div className="faq-item">
                  <button id="faq-4" className="faq-button" onClick={(e) => toggleFAQ(e)}>
                    <span>What is a meme token?</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`faq-answer ${faqOpen['faq-4'] ? 'block' : 'hidden'}`}>
                    <p>A meme token is a cryptocurrency that typically originates from internet memes or cultural phenomena. They represent a fun and community-driven approach to crypto assets.</p>
                  </div>
                </div>

                <div className="faq-item">
                  <button id="faq-5" className="faq-button" onClick={(e) => toggleFAQ(e)}>
                    <span>Which blockchain network is $MCGA minted on?</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`faq-answer ${faqOpen['faq-5'] ? 'block' : 'hidden'}`}>
                    <p>$MCGA is minted on the Solana blockchain, known for its high speed and low transaction costs.</p>
                  </div>
                </div>

                <div className="faq-item">
                  <button id="faq-6" className="faq-button" onClick={(e) => toggleFAQ(e)}>
                    <span>What are $MCGA tokens?</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`faq-answer ${faqOpen['faq-6'] ? 'block' : 'hidden'}`}>
                    <p>$MCGA tokens are fungible crypto assets created and tracked on the Solana blockchain. They represent a fun, community-driven meme token project.</p>
                  </div>
                </div>

                <div className="faq-item">
                  <button id="faq-7" className="faq-button" onClick={(e) => toggleFAQ(e)}>
                    <span>What else should I know?</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`faq-answer ${faqOpen['faq-7'] ? 'block' : 'hidden'}`}>
                    <p>Please note that cryptocurrency investments carry risks. Always do your own research (DYOR) and never invest more than you can afford to lose. For important disclosures about $MCGA, please refer to our Terms page.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section bg-red-50">
          <div className="section-container">
            <h2 className="section-title">Contact Us</h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl mb-8">Join our community and stay updated!</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="#" className="contact-card">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 mx-auto mb-4 text-red-600">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <h3 className="font-semibold mb-2">Twitter</h3>
                  <p className="text-gray-600">Follow for updates</p>
                </a>
                <a href="#" className="contact-card">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 mx-auto mb-4 text-red-600">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.118.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  <h3 className="font-semibold mb-2">Discord</h3>
                  <p className="text-gray-600">Join the discussion</p>
                </a>
                <a href="#" className="contact-card">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 mx-auto mb-4 text-red-600">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.51 3.67-.52.36-.99.53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.99-1.73 6.65-2.87 7.97-3.43 3.78-1.6 4.57-1.88 5.08-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.03.25z" />
                  </svg>
                  <h3 className="font-semibold mb-2">Telegram</h3>
                  <p className="text-gray-600">Get instant updates</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
