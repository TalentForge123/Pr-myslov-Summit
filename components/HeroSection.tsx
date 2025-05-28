"use client";

import Link from 'next/link';
import Image from 'next/image';
import Countdown from './Countdown';

export default function HeroSection() {
  // Datum summitu: Příklad 1. 10. 2025
  const summitDate = new Date(2025, 9, 1); // 1. říjen 2025

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-blue-900 to-indigo-900 text-white pt-16">
      {/* Overlay s efektem */}
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] bg-center opacity-10"></div>
      
      {/* Hlavní obsah */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Průmyslový Summit 2025
            </span>
          </h1>
          
          <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Globální setkání lídrů a inovátorů v průmyslu. Objevte budoucnost průmyslu a navažte cenné kontakty.
          </p>
          
          <div className="mb-10">
            <div className="text-lg font-medium text-blue-300 mb-4">Do začátku summitu zbývá</div>
            <Countdown targetDate={summitDate} />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/vstupenky" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-105">
              Zajistit vstupenku
            </Link>
            <Link href="/program" className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-base font-medium rounded-full shadow-lg text-white bg-transparent hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all">
              Zobrazit program
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-sm text-gray-300">Řečníků</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white mb-2">3</div>
              <div className="text-sm text-gray-300">Dny</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-sm text-gray-300">Workshopů</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-sm text-gray-300">Účastníků</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Vlnka na spodku */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
