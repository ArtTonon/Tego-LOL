import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-white font-sans">
      <div className="w-full bg-gray-100 flex flex-col items-center mb-8">
        <nav className="flex space-x-6 mb-4 mt-4 text-min">
          <Link legacyBehavior href="#home">
            <a className="text-gray-300 hover:text-white transition duration-300 ease-in-out">ABOUT LEAGUE OF LEGENDS</a>
          </Link>
          <Link legacyBehavior href="#gameplay">
            <a className="text-gray-300 hover:text-white transition duration-300 ease-in-out">HELP US IMPROVE</a>
          </Link>
          <Link legacyBehavior href="#bio">
            <a className="text-gray-300 hover:text-white transition duration-300 ease-in-out">SERVER STATUS</a>
          </Link>
          <Link legacyBehavior href="#shortstory">
            <a className="text-gray-300 hover:text-white transition duration-300 ease-in-out">SUPPORT</a>
          </Link>
          <Link legacyBehavior href="#related-champions">
            <a className="text-gray-300 hover:text-white transition duration-300 ease-in-out">ESPORTS PRO SITE</a>
          </Link>
        </nav>
      </div>
      <div className="container mx-auto flex flex-col items-center mb-20">
            <p className="text-gray-400">&copy; 2024 Fanmade Project. All rights reserved.</p>
            <p className="text-gray-400 mb-16">This project is fanmade and has no affiliation with Riot Games or League of Legends.</p>  
      </div>
    </footer>
  );
};

export default Footer;
