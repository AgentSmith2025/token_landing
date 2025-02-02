import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

const Home: NextPage = () => {
  return (
    <div className="bg-black text-white">
      <Head>
        <title>MCGA - Make Crypto Great Again</title>
        <meta name="description" content="Decentralized, Patriotic Cryptocurrency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Home;
