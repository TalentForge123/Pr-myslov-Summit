"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-600">Průmyslový Summit</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
              Domů
            </Link>
            <Link href="/program" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
              Program
            </Link>
            <Link href="/recnici" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
              Řečníci
            </Link>
            <Link href="/partneri" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
              Partneři
            </Link>
            <Link href="/clanky" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
              Články
            </Link>
            <Link href="/kontakt" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
              Kontakt
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/vstupenky" className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              Vstupenky
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Otevřít menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
            Domů
          </Link>
          <Link href="/program" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
            Program
          </Link>
          <Link href="/recnici" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
            Řečníci
          </Link>
          <Link href="/partneri" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
            Partneři
          </Link>
          <Link href="/clanky" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
            Články
          </Link>
          <Link href="/kontakt" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
            Kontakt
          </Link>
          <Link href="/vstupenky" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
            Vstupenky
          </Link>
        </div>
      </div>
    </header>
  );
}
