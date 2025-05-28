// app/components/Navbar.tsx
"use client"; // Toto je klientská komponenta kvůli interaktivitě (otevírání menu)

import Link from 'next/link';
import { useState } from 'react';
// import Image from 'next/image'; // Odstraněno, protože není v tomto kódu použito pro zobrazení loga, ale pouze text.

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Stav pro mobilní menu

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo nebo název webu */}
        <Link href="/" className="text-white text-2xl font-bold">
          {/* Zde by bylo místo pro Image komponentu, pokud bys měl logo a chtěl ho použít */}
          Průmyslový Summit
        </Link>

        {/* Desktop navigace */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white transition duration-300">
            Úvod
          </Link>
          <Link href="/program" className="text-gray-300 hover:text-white transition duration-300">
            Program
          </Link>
          <Link href="/speakers" className="text-gray-300 hover:text-white transition duration-300">
            Řečníci
          </Link>
          <Link href="/partners" className="text-gray-300 hover:text-white transition duration-300">
            Partneři
          </Link>
          <Link href="/news" className="text-gray-300 hover:text-white transition duration-300">
            Novinky
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition duration-300">
            Kontakt
          </Link>
          <Link href="/tickets" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Vstupenky
          </Link>
        </div>

        {/* Mobilní menu tlačítko */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobilní menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 mt-4 rounded-md">
          <Link href="/" className="block py-2 px-4 text-gray-300 hover:bg-gray-600 hover:text-white transition duration-300" onClick={() => setIsOpen(false)}>
            Úvod
          </Link>
          <Link href="/program" className="block py-2 px-4 text-gray-300 hover:bg-gray-600 hover:text-white transition duration-300" onClick={() => setIsOpen(false)}>
            Program
          </Link>
          <Link href="/speakers" className="block py-2 px-4 text-gray-300 hover:bg-gray-600 hover:text-white transition duration-300" onClick={() => setIsOpen(false)}>
            Řečníci
          </Link>
          <Link href="/partners" className="block py-2 px-4 text-gray-300 hover:bg-gray-600 hover:text-white transition duration-300" onClick={() => setIsOpen(false)}>
            Partneři
          </Link>
          <Link href="/news" className="block py-2 px-4 text-gray-300 hover:bg-gray-600 hover:text-white transition duration-300" onClick={() => setIsOpen(false)}>
            Novinky
          </Link>
          <Link href="/contact" className="block py-2 px-4 text-gray-300 hover:bg-gray-600 hover:text-white transition duration-300" onClick={() => setIsOpen(false)}>
            Kontakt
          </Link>
          <Link href="/tickets" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-b-md transition duration-300" onClick={() => setIsOpen(false)}>
            Vstupenky
          </Link>
        </div>
      )}
    </nav>
  );
}
