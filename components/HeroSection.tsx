import { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <div className="min-h-screen bg-red-600 bg-stripes">
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="mb-8 border-8 border-yellow-400 bg-blue-900 p-8 shadow-[0_0_40px_10px_rgba(255,255,255,0.3)]">
          <h1 className="text-6xl md:text-8xl font-black uppercase mb-4 text-white 
            [text-shadow:_4px_4px_0_#000] animate-bounce">
            MAKE CRYPTO<br/>GREAT AGAIN
          </h1>
          <div className="inline-block bg-white p-4 rounded-full">
            <p className="text-2xl md:text-3xl font-bold text-red-600">
              1000X POTENTIAL | FAIR LAUNCH | MADE IN AMERICA
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl border-4 border-black">
            <h2 className="text-3xl font-bold mb-6 text-red-600">BUY $MCGA NOW!</h2>
            <div className="space-y-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white 
                text-2xl p-4 rounded-lg border-4 border-yellow-400 flex items-center 
                justify-center gap-3 transition-all">
                INSTANT CARD BUY
              </button>
              <button className="w-full bg-black hover:bg-gray-900 text-yellow-400 
                text-2xl p-4 rounded-lg border-4 border-white flex items-center 
                justify-center gap-3 transition-all">
                CRYPTO SWAP
              </button>
            </div>
            <div className="mt-8 bg-gray-100 p-4 rounded-lg text-left">
              <p className="font-mono text-sm break-all">
                CONTRACT: 0xMG4...C0IN
              </p>
              <p className="text-red-600 font-bold mt-2">
                ONLY BUY THROUGH OFFICIAL LINKS
              </p>
            </div>
          </div>

          <div className="bg-yellow-400 p-8 rounded-xl border-4 border-black">
            <div className="bg-white p-6 rounded-lg mb-6">
              <h3 className="text-3xl font-black text-red-600 mb-4">
                AMERICA FIRST CRYPTO
              </h3>
              <p className="text-lg font-bold mb-4">
                "We're gonna build the wall around shitcoins and make Ethereum pay for it!"
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '', value: '1B MCGA', label: 'Total Supply' },
                { icon: '', value: '36 MO', label: 'Locked' },
                { icon: '', value: '1000X', label: 'Potential' },
                { icon: '', value: '100%', label: 'American' }
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border-2 border-black">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-bold text-xl">{item.value}</div>
                  <div className="text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl border-4 border-black text-left">
          <h2 className="text-3xl font-black text-red-600 mb-6">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="space-y-4">
            {[
              { question: 'IS THIS OFFICIAL?', answer: 'THE ONLY OFFICIAL MCGA TOKEN!' },
              { question: 'WHY NO KYC?', answer: 'TRUE FREEDOM NEEDS NO PERMISSION' },
              { question: 'WHICH CHAIN?', answer: 'PATRIOT CHAIN (ERC-20)' }
            ].map((item, index) => (
              <div key={index} className="border-2 border-black p-4 rounded-lg">
                <div className="font-bold text-red-600 text-xl"> {item.question}</div>
                <div className="font-semibold mt-2">{item.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
