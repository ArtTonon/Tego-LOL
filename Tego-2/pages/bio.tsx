import React, { useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/globals.css';
import { FaArrowRight } from "react-icons/fa6";
import { TbPointFilled } from 'react-icons/tb';

const Bio = () => {

  useEffect(() => {
    const handleScroll = () => {
      const img = document.getElementById('tegoImage');
      const overlay = document.getElementById('overlay');

      if (img && overlay) {
        const offset = window.pageYOffset;
        const opacity = Math.max(1 - offset / 300, 0);
        img.style.opacity = `${opacity}`;
        overlay.style.opacity = `${opacity}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    const content = document.getElementById('mainContent');
    if (content) {
      content.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <div className="relative h-screen">
        <div id="tegoImage" className="fixed inset-0 z-0">
          <Image
            src="/images/tego-full.png"
            alt="Tego"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div id="overlay" className="fixed inset-0 z-10 flex flex-col items-center justify-center text-white bg-gradient-to-t from-black to-transparent">
          <h1 className="text-4xl font-bold">Tego, The Guardian of Kalamanda</h1>
          <button
            onClick={scrollToContent}
            className="mt-4 px-8 py-4 border-gold border-2 bg-transparent text-gold"
          >
            <span style={{ display: 'flex', alignItems: 'center' }}> SEE THE GAMEPLAY
              <TbPointFilled style={{marginLeft: '10px'}}/>
              <FaArrowRight style={{marginLeft: '2px'}}/>
            </span>
          </button>
        </div>
      </div>
      <div id="mainContent" className="pt-96 bg-gray-000 mb-8">
        <div className='flex justify-center mb-12'>
          <Image
            src="/images/info.png"
            alt="Tego"
            width={1000}
            height={800}
          />
        </div>
        <div className='container w-80 text-white'>
        Tego was a monster.
That at least was the opinion of the mages when they chained him down as an infant in a cave near Kalamanda, in the northwest of Shurima. A monster that would only grow larger and stronger as time went on. The perfect way to protect what lay deep down in the cavern. A hidden valley with magical creatures who sought to sleep out the rune wars.
But all that was a long time ago. The wars are over, the world has changed and Tego was long forgotten. His kind had left the world ages ago, unknown even to the most celebrated scholars. But even centuries later, Tego was still there.
Tego didn’t remember how he ended up in the cave or who had brought him there. All he knew was that this cave was his home, and that he felt terribly lonely. Too afraid of the outside world, he spent countless hours exploring the deep cave systems of the mountains, unaware that one of the paths led to the hidden valley he was supposed to be protecting. He explored every tunnel, every hole and every crevice and everywhere he went he made friends, even if most of them were rocks and stones. The local wildlife was mostly terrified of him and his looks. To them, like to so many others, Tego was a monster, but Tego was never aware of that, always looking on the bright side of things.
On his countless adventures he had discovered many different objects, but his favorite by far, was a big purple crystal. Around it had grown a plant that served as a perfect handle for Tego. From that point on, he always had his lantern with him. Not only did it provide light, but it also had some sort of calming “aura” around it, comforting him, when he felt lonely. Sometimes he even thought he could hear a faint melody coming from within the crystal.
One of his expeditions, his 2743rd to be exact, changed his life forever. Near a small underground river, in a previously undiscovered part of the cave, he saw fireflies. Small purple fairy-like creatures dancing through the air in the most beautiful and elegant movements. Tego was afraid at first, but also enchanted by these creatures and soon they became friends, no, best friends. They were inseparable. Together they explored the darkest and deepest caverns, even those Tego had been afraid of before. They lit his way. He showed them around and built them a home. And every night Tego accompanied them outside so they could spread their wings and dance with the stars.
But Tego didn’t dance with them. He was afraid of the outside world. He was afraid of the unknown and of what evil things might exist outside of his trusted and safe home, but most of all, he was afraid of being alone, even more than he already was in this cave.
The people of Kalamanda did not know what lived in their mountains, but stories were told, and legends spoke of a huge beast that dwelled in the mountains. Occasionally a brave adventurer made his way up there, to prove his mettle, but was quickly chased away by the creepy sounds echoing from the mountainside.
Tego on the other hand, had also heard of humans, good and bad things, but to his chagrin he never met one to invite into his home, and show them his collections.
All in all, Tego was happy in his home, but with every day, with every year he spent there, he felt lonelier and became more curious about what lay outside his cave. He dreamed of the places he could explore, the creatures he could meet and the friends he could make. He was still scared, but knowing the fireflies were always by his side, guiding him and lighting his way gave him confidence and courage.
And one lonely night, encouraged by his firefly friends, he decided to take the first step. A step outside. A step into the unknown and strange, but beautiful world. And his backplates began to glow in the most beautiful shapes and patterns whenever he was near his friends.
And so Tego set out to explore the world, eager to discover new places and make new friends, accompanied by his trusted fireflies. But where a new chapter begins, a different one always ends...
        </div>
        <div className='flex justify-center mb-12'>
          <button className="px-8 py-4 border-gold border-2 bg-transparent text-gold">
            <span style={{ display: 'flex', alignItems: 'center' }}> READ TEGO'S STORY
              <TbPointFilled style={{marginLeft: '10px'}}/>
              <FaArrowRight style={{marginLeft: '2px'}}/>
            </span>            
          </button>
        </div> 
        <Footer />
      </div>
    </>
  );
};

export default Bio;

/* import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/globals.css';
import { FaArrowRight, FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { IoIosArrowForward } from 'react-icons/io';

const Bio = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      const opacity = Math.max(1 - offset / 300, 0);
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    const content = document.getElementById('mainContent');
    if (content) {
      content.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <div className="relative h-screen">
        <div id="tegoImage" className="fixed inset-0 z-0 opacity-0">
          <Image
            src="/images/tego-full.png"
            alt="Tego"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div id="overlay" className="fixed inset-0 z-10 flex flex-col items-center justify-center text-white bg-gradient-to-t from-black to-transparent" style={{ opacity: scrollOpacity }}>
          <h1 className="text-4xl font-bold">Tego, The Guardian of Kalamanda</h1>
          <button
            onClick={scrollToContent}
            className="mt-4 px-8 py-4 border-gold border-2 bg-transparent text-gold"
          >
            <span className="flex items-center">
              SEE THE GAMEPLAY
              <IoIosArrowForward style={{ marginLeft: '10px' }} />
            </span>
          </button>
        </div>
      </div>
      <div id="mainContent" className="pt-96 bg-gray-000 mb-8">
        <div className='flex justify-center mb-12'>
          <Image
            src="/images/info.png"
            alt="Tego"
            width={1000}
            height={800}
          />
        </div>
        <div className='flex justify-center mb-12'>
          <button className="px-8 py-4 border-gold border-2 bg-transparent text-gold">
            <span className="flex items-center">
              SEE THE GAMEPLAY
              <IoIosArrowForward style={{ marginLeft: '10px' }} />
            </span>
          </button>
        </div>
        <div className='mb-12'>
          <Image
            src="/images/conplem.png"
            alt="Tego"
            width={1600}
            height={1500}
          />
        </div>
        <div className="flex flex-col justify-center items-center mb-4">
          <span className="text-gold hover:text-gray-900 transition duration-300 ease-in-out mb-4">
            Check out my social media Accounts here:
          </span>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-3xl text-gold p-2 rounded-lg bg-gray-900">
              <FaInstagram className="p-1 hover:scale-110" />
            </span>
            <span className="text-3xl text-gold p-2 rounded-lg bg-gray-900">
              <FaFacebook className="p-1 hover:scale-110" />
            </span>
            <span className="text-3xl text-gold p-2 rounded-lg bg-gray-900">
              <FaGoogle className="p-1 hover:scale-110" />
            </span>
          </div>
          <span className="text-gold mb-4">
            And those of the Artist and the Composer!
          </span>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-3xl text-gold p-2 rounded-lg bg-gray-900">
              <FaInstagram className="p-1 hover:scale-110" />
            </span>
            <span className="text-3xl text-gold p-2 rounded-lg bg-gray-900">
              <FaFacebook className="p-1 hover:scale-110" />
            </span>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Bio;
*/