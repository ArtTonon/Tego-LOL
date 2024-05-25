// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <img src="/images/league-of-legends-logo.png" alt="League of Legends" className="h-20 mr-4" />
        </div>
        <div>
          <Link legacyBehavior href="/">
            <a className="text-gray-300 hover:text-white transition duration-300 ease-in-out">Back to Home</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

