// components/ChampionPage.tsx
import React from 'react';
import Header from './Header';

interface Ability {
  name: string;
  description: string;
}

interface Skin {
  name: string;
  image: string;
}

interface ChampionProps {
  name: string;
  title: string;
  biography: string;
  abilities: Ability[];
  skins: Skin[];
}

const ChampionPage: React.FC<ChampionProps> = ({ name, title, biography, abilities, skins }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12 pt-24">
        {/* Champion Info */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-2">{name}</h1>
          <h2 className="text-2xl text-gray-400">{title}</h2>
        </div>

        {/* Biography */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-3xl font-semibold mb-4">Biography</h3>
          <p className="text-lg text-gray-300 leading-relaxed">{biography}</p>
        </div>

        {/* Abilities */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-6">Abilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {abilities.map((ability, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <h4 className="text-xl font-semibold mb-2">{ability.name}</h4>
                <p className="text-lg text-gray-300">{ability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skins */}
        <div>
          <h3 className="text-3xl font-semibold mb-6">Skins</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skins.map((skin, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <img src={skin.image} alt={skin.name} className="w-full h-64 object-cover rounded-t-lg" />
                <div className="p-4 bg-gray-900 rounded-b-lg">
                  <h4 className="text-xl font-semibold text-center">{skin.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionPage;
