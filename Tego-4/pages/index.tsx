import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Ability from '@/components/Ability';
import Image from 'next/image';

const abilities = [
  {
    image: '/images/ability-1.png',
    video: '/videos/ability-1.mp4',
    name: 'Furto de Essência',
    description: 'Passiva'
  },
  {
    image: '/images/ability-2.png',
    video: '/videos/ability-2.mp4',
    name: 'Orbe da Ilusão',
    description: 'Q'
  },
  {
    image: '/images/ability-3.png',
    video: '/videos/ability-3.mp4',
    name: 'Fogo de Raposa',
    description: 'W'
  },
  {
    image: '/images/ability-4.png',
    video: '/videos/ability-4.mp4',
    name: 'Encanto',
    description: 'E'
  },
  {
    image: '/images/ability-5.png',
    video: '/videos/ability-5.mp4',
    name: 'Ímpeto Espiritual',
    description: 'R'
  }
];

const Home = () => {
  return (
    <>
      <Header />
      <main className="bg-dark-blue text-white">
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">Ahri</h1>
          <p className="text-xl mb-4">A Raposa de Nove Caudas</p>
          <div className="container mx-auto">
            <Image
              src="/images/ahri/classic.jpg"
              alt="Ahri"
              width={1600}
              height={900}
            />
          </div>
        </section>
        <section className="container mx-auto py-12">
          <h2 className="text-3xl font-bold mb-8">HABILIDADES</h2>
          {abilities.map((ability, index) => (
            <Ability
              key={index}
              image={ability.image}
              video={ability.video}
              name={ability.name}
              description={ability.description}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
