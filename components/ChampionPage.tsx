import React from 'react';

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
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">{name}</h1>
        <h2 className="text-2xl text-gray-700">{title}</h2>
      </div>

      <div className="mb-8">
        <h3 className="text-3xl font-semibold text-gray-900 mb-4">Biography</h3>
        <p className="text-lg text-gray-700">{biography}</p>
      </div>

      <div className="mb-8">
        <h3 className="text-3xl font-semibold text-gray-900 mb-4">Abilities</h3>
        <div className="space-y-4">
          {abilities.map((ability, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg">
              <h4 className="text-2xl font-semibold text-gray-900 mb-2">{ability.name}</h4>
              <p className="text-lg text-gray-700">{ability.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-semibold text-gray-900 mb-4">Skins</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skins.map((skin, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
              <img src={skin.image} alt={skin.name} className="w-full h-auto" />
              <h4 className="text-xl font-semibold text-gray-900 text-center p-2">{skin.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChampionPage;
