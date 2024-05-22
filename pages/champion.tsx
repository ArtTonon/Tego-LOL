import React from 'react';
import ChampionPage from '../components/ChampionPage';

const championData = {
  name: 'Ahri',
  title: 'the Nine-Tailed Fox',
  biography: `Innately connected to the latent power of Runeterra, Ahri is a vastaya who can reshape magic into orbs of raw energy. She revels in toying with her prey by manipulating their emotions before devouring their life essence. Despite her predatory nature, Ahri retains a sense of empathy as she receives flashes of memory from each soul she consumes.`,
  abilities: [
    { name: 'Orb of Deception', description: 'Ahri sends out and pulls back her orb, dealing magic damage on the way out and true damage on the way back.' },
    { name: 'Fox-Fire', description: 'Ahri releases three fox-fires, that lock onto and attack nearby enemies.' },
    { name: 'Charm', description: 'Ahri blows a kiss that damages and charms an enemy it encounters, causing them to walk harmlessly towards her.' },
    { name: 'Spirit Rush', description: 'Ahri dashes forward and fires essence bolts, damaging nearby enemies. Spirit Rush can be cast up to three times before going on cooldown.' },
  ],
  skins: [
    { name: 'Classic Ahri', image: '/images/ahri/classic.jpg' },
    { name: 'Dynasty Ahri', image: '/images/ahri/dynasty.jpg' },
    { name: 'Midnight Ahri', image: '/images/ahri/midnight.jpg' },
  ],
};

const Champion = () => {
  return <ChampionPage {...championData} />;
};

export default Champion;
