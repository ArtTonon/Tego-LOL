import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/globals.css';
import { FaArrowRight, FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa6";
import { TbPointFilled } from 'react-icons/tb';

function Home() {
  return (
    <>
      <Header />
      <div className="pt-8 bg-gray-000 mb-8">
        <div>
          <Image
            src="/images/tego-intro.png"
            alt="Tego"
            width={1600}
            height={1500}
          />
        </div>
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
          <span style={{ display: 'flex', alignItems: 'center' }}> SEE THE GAMEPLAY
              <TbPointFilled style={{marginLeft: '10px'}}/>
              <FaArrowRight style={{marginLeft: '2px'}}/></span>            
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
}

export default Home;
