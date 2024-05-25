// pages/index.tsx
import React from 'react';
import ChampionPage from '../components/ChampionPage';

const championData = {
  name: 'Tego',
  title: 'The guardian of Kalamanda',
  biography: `Tego was a monster. That at least was the opinion of the mages when they chained him down as an infant in a cave near Kalamanda, in the northwest of Shurima. A monster that would only grow larger and stronger as time went on. The perfect way to protect what lay deep down in the cavern. A hidden valley with magical creatures who sought to sleep out the rune wars.`,
  abilities: [
    { name: 'Glow Up', description: 'Tego carries five fireflies around. Through abilities he places them on the map to create Glow-Up fields that grant vision.' },
    { name: 'Into the Unknown', description: 'Tego activates his lantern giving him a speedboost and allowing him to place fireflies for a limited time.' },
    { name: 'Fire-a-Fly', description: 'Tego spins his lantern and throws a firefly to the desired location.If he has a firefly available, a Glow-Up field will be created.' },
    { name: 'Small Leap', description: 'Tego jumps a short distance and slices over the ground knocking enemies aside.' },
    { name: 'LightBringer', description: 'Tego slams his lantern on the ground, dealing damage around him and creating a larger area of effect.' },
  ],
  skins: [
    { name: 'Classic Tego', image: '/images/tego/classic.png' },
    { name: 'Dynasty Tego', image: '/images/tego/classic.png' },
    { name: 'Midnight Tego', image: '/images/tego/classic.png' },
  ],
};

const HomePage = () => {
  return <ChampionPage {...championData} />;
};

export default HomePage;
