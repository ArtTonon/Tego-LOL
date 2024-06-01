import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Video from '../components/Video';
import '../styles/globals.css';
import { FaArrowRight } from "react-icons/fa6";
import { TbPointFilled } from 'react-icons/tb';

function Gameplay() {
  return (
    <>
      <Header />
      <div className="pt-8 bg-gray-500 mb-8">
        <div>
          <Image
            src="/images/tego-gameplay.png"
            alt="Tego"
            width={1600}
            height={1500}
          />
        </div>
        <section className="mb-10 ml-40 text-gold">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <Image
                src="/images/abilit-1.png"
                alt="Tego"
                width={500}
                height={300}
              />
              <Video src="/videos/glow-up.mp4" />
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/abilit-2.png"
                alt="Tego"
                width={500}
                height={300}
              />
              <Video src="/videos/into-the-unknown.mp4" />
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/abilit-3.png"
                alt="Tego"
                width={500}
                height={300}
              />
              <Video src="/videos/fire-a-fly.mp4" />
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/abilit-4.png"
                alt="Tego"
                width={500}
                height={300}
              />
              <Video src="/videos/a-small-leap.mp4" />
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/abilit-5.png"
                alt="Tego"
                width={500}
                height={300}
              />
              <Video src="/videos/lightbringer.mp4" />
            </div>
          </div>
        </section>
        <div className='flex flex-col items-center mb-12 mt-20'>
          <span className="text-gold hover:text-gray-900 transition duration-300 ease-in-out mb-4">
            Check out the champion spotlight here:
          </span>
          <button className="px-8 py-4 mb-20 border-gold border-2 bg-transparent text-gold">
            <span style={{ display: 'flex', alignItems: 'center' }}>
              Champion Spotlight
              <TbPointFilled style={{marginLeft: '10px'}}/>
              <FaArrowRight style={{marginLeft: '2px'}}/>
            </span>            
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Gameplay;
