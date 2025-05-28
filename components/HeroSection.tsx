// app/components/HeroSection.tsx
"use client"; // Toto je klientská komponenta kvůli interaktivitě odpočítávání a animací

import Countdown from './Countdown';
import Image from 'next/image'; // Nyní použito!

export default function HeroSection() {
  // Datum summitu: Příklad 1. 10. 2025 (rok, měsíc-1, den)
  // Měsíce v JavaScriptu jsou 0-indexované (leden = 0, říjen = 9)
  const summitDate = new Date(2025, 9, 1); // 1. říjen 2025

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Obrázek na pozadí použitý s Next.js Image komponentou */}
      <div className="absolute inset-0">
        <Image
          src="/images/summit-bg.jpg"
          alt="Pozadí Průmyslového Summitu"
          fill // Vyplní celý rodičovský element
          style={{ objectFit: 'cover' }}
          priority // Načte obrázek dříve pro LCP (Largest Contentful Paint)
          sizes="100vw" // Důležité pro responzivní obrázky
        />
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Překrytí pro ztmavení */}
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Logo summitu - použijeme také Next.js Image pro optimalizaci */}
        {/* Ujistěte se, že máte logo.png v public/images/ */}
        <Image
          src="/images/logo.png"
          alt="Logo Průmyslového Summitu"
          width={150} // Nastavte odpovídající šířku pro vaše logo
          height={150} // Nastavte odpovídající výšku pro vaše logo
          className="mx-auto mb-6 drop-shadow-lg"
        />

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight animate-fade-in-up">
          Průmyslový Summit 2025
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Globální setkání lídrů a inovátorů v průmyslu.
        </p>

        <div className="mt-8 animate-fade-in-up delay-400">
          <Countdown targetDate={summitDate} />
        </div>

        <button className="mt-12 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition duration-300 hover:scale-105 animate-fade-in-up delay-600">
          Zajistěte si vstupenku!
        </button>
      </div>
    </section>
  );
}
