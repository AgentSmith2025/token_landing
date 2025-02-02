import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HowToBuy: NextPage = () => {
  const contractAddress = "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
  };

  return (
    <div>
      <Head>
        <title>How to Buy MCGA Token</title>
        <meta name="description" content="Learn how to buy MCGA Token in minutes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <section>
          <h1>How to Buy MCGA (In Minutes)</h1>
          <p>If you can buy a coffee, you can buy MCGA! Follow these quick steps:</p>

          <ol>
            <li>
              <h3>Set Up a Solana Wallet</h3>
              <p>Download and install Phantom wallet from <a href="https://phantom.app" target="_blank" rel="noopener noreferrer">phantom.app</a></p>
            </li>

            <li>
              <h3>Send USDC to your wallet</h3>
              <p>Transfer USDC from your exchange to your new Solana wallet</p>
            </li>

            <li>
              <h3>Visit a DEX</h3>
              <p>Go to <a href="https://raydium.io/swap" target="_blank" rel="noopener noreferrer">Raydium</a> or <a href="https://jup.ag" target="_blank" rel="noopener noreferrer">Jupiter</a></p>
            </li>

            <li>
              <h3>Search for $MCGA</h3>
              <div>
                <p>Use our contract address:</p>
                <code>{contractAddress}</code>
                <button onClick={handleCopyAddress}>Copy Address</button>
              </div>
            </li>

            <li>
              <h3>Swap USDC for $MCGA</h3>
              <p>Connect your wallet and make the swap</p>
            </li>

            <li>
              <h3>Celebrate</h3>
              <p>You've officially joined the movement!</p>
            </li>
          </ol>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowToBuy;
