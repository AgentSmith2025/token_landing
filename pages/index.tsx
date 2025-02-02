import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-white">
      <Head>
        <title>MCGA Token - Make Crypto Great Again</title>
        <meta name="description" content="Join the $MCGA Movement and Invest Small, Dream Big" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="py-32 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Make Crypto Great Again—Starting at the Price of a Cup of Coffee
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12">
              Join the $MCGA Movement and Invest Small, Dream Big.
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href="https://raydium.io/swap"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Buy Now
              </a>
              <a 
                href="#mission"
                className="px-8 py-3 bg-white/80 text-gray-900 rounded-full font-medium hover:bg-white transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-24 bg-white/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              Our Mission: Together, We Can Make Crypto Great Again.
            </h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                At MCGA, we believe you can join the meme revolution for less than the cost of your morning latte. 
                This token is a lighthearted way to bring excitement back to crypto—without breaking the bank.
              </p>
              <p>
                Buy a few tokens, share a laugh, and let's reshape the future of crypto—one coffee-cup investment at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section id="disclaimer" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Disclaimer</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              MCGA is a parody meme token, not endorsed by any political figure or campaign. 
              This is not financial advice. Cryptocurrency is risky—please do your own research.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
