import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import '../styles/globals.css';

function TegoPage() {
  return (
    <>
      <Header />
      <div className="pt-20">
      <div className="flex justify-center mb-4">
            <Image
              src="/images/tego-full.png"
              alt="Tego"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
          <Head>
            <title>Tego, The Guardian of Kalamanda</title>
          </Head>

          <header className="flex justify-center mb-4">
            <Image
              src="/logo.png"
              alt="Tego logo"
              width={48}
              height={48}
              className="rounded-full"
            />
            <h1 className="text-3xl font-bold ml-4">Tego, The Guardian of Kalamanda</h1>
          </header>

          <nav className="flex justify-center mb-4">
            <ul className="flex space-x-4">
              <li>
                <Link legacyBehavior href="#home">
                  <a className="text-gray-600 hover:text-gray-900">HOME</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#gameplay">
                  <a className="text-gray-600 hover:text-gray-900">GAMEPLAY</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#bio">
                  <a className="text-gray-600 hover:text-gray-900">BIO</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#shortstory">
                  <a className="text-gray-600 hover:text-gray-900">SHORT STORY</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#related-champions">
                  <a className="text-gray-600 hover:text-gray-900">RELATED CHAMPIONS</a>
                </Link>
              </li>
            </ul>
          </nav>

          <main className="flex flex-col justify-center mb-4">
            <section id="home" className="mb-4">
              <h2 className="text-2xl font-bold">HOME</h2>
              <p className="text-gray-600">Welcome to Tego's page!</p>
            </section>

            <section id="gameplay" className="mb-4">
              <h2 className="text-2xl font-bold">GAMEPLAY</h2>
              <p className="text-gray-600">Learn more about Tego's gameplay.</p>
            </section>

            <section id="bio" className="mb-4">
              <h2 className="text-2xl font-bold">BIO</h2>
              <p className="text-gray-600">Read Tego's biography.</p>
            </section>

            <section id="shortstory" className="mb-4">
              <h2 className="text-2xl font-bold">SHORT STORY</h2>
              <p className="text-gray-600">Read a short story about Tego.</p>
            </section>

            <section id="related-champions" className="mb-4">
              <h2 className="text-2xl font-bold">RELATED CHAMPIONS</h2>
              <p className="text-gray-600">Discover related champions.</p>
            </section>
          </main>

          <footer className="flex justify-center mb-4">
            <p className="text-gray-600">This project is fanmade and has no affiliation with Riot Games or League of Legends.</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default TegoPage;
