import { FC } from 'react';
import { Discord, Telegram, Twitter } from './icons';

const SocialIcons: FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <a
        href="https://t.me/mcgasolana"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-500"
      >
        <span className="sr-only">Telegram</span>
        <Telegram className="h-6 w-6" />
      </a>
      <a
        href="https://twitter.com/mcgasolana"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-500"
      >
        <span className="sr-only">Twitter</span>
        <Twitter className="h-6 w-6" />
      </a>
      <a
        href="https://discord.gg/mcgasolana"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-500"
      >
        <span className="sr-only">Discord</span>
        <Discord className="h-6 w-6" />
      </a>
    </div>
  );
};

export default SocialIcons;
