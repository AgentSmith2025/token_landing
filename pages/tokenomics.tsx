import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Tokenomics: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tokenomics - MCGA Token</title>
        <meta name="description" content="MCGA Token distribution and supply details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <section>
          <h1>MCGA Tokenomics</h1>

          <div>
            <h2>Token Details</h2>
            <p>
              MCGA Token operates on a carefully planned tokenomics model designed for long-term sustainability 
              and fair distribution. Our token is deployed on the Solana blockchain with a total supply of 1 billion tokens, 
              released over 36 months.
            </p>
          </div>

          <div>
            <h2>Supply Information</h2>
            <ul>
              <li>Max Supply: 1,000,000,000 tokens</li>
              <li>Circulating Supply: 200,000,000 tokens</li>
              <li>Emission Duration: 36 months</li>
            </ul>
          </div>

          <div>
            <h2>Distribution</h2>
            <ul>
              <li>Team: 30%</li>
              <li>Liquidity Pool: 30%</li>
              <li>Public Sale: 40%</li>
            </ul>
          </div>

          <div>
            <p>
              Note: These details are subject to change—follow our official channels for the latest updates.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tokenomics;
