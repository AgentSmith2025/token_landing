import { FC } from 'react';

interface ContractAddressProps {
  address: string;
}

const ContractAddress: FC<ContractAddressProps> = ({ address }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Solana Contract Address
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex-1 flex items-center gap-2">
              <span className="text-gray-500 text-sm">CA:</span>
              <span className="text-gray-900 font-mono text-sm md:text-base break-all">
                {address}
              </span>
            </div>
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors duration-200 whitespace-nowrap"
            >
              Copy Address
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractAddress;
