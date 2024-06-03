import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg fixed w-full z-20">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex space-x-8 text-2xl">
          <Link href="/" legacyBehavior>
            <a className="text-gray-300 hover:text-white mr-4 transition duration-300 ease-in-out">Home</a>
          </Link>
          <Link href="/gameplay" legacyBehavior>
            <a className="text-gray-300 hover:text-white mr-4 transition duration-300 ease-in-out">Gameplay</a>
          </Link>
          <Link href="/bio" legacyBehavior>
            <a className="text-gray-300 hover:text-white mr-4 transition duration-300 ease-in-out">Bio</a>
          </Link>
          <Link href="/story" legacyBehavior>
            <a className="text-gray-300 hover:text-white mr-4 transition duration-300 ease-in-out">Story</a>
          </Link>
        </div>
        <div className="flex items-center">
          <img src="/images/league-of-legends-logo.png" alt="League of Legends" className="h-16" />
        </div>
      </div>
    </header>
  );
};

export default Header;

