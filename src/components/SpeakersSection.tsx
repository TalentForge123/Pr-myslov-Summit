"use client";

import React from 'react';
import Link from 'next/link';

interface SpeakerProps {
  name: string;
  role: string;
  company: string;
  image: string;
  bio?: string;
}

const Speaker: React.FC<SpeakerProps> = ({ name, role, company, image, bio }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
      <div className="relative h-64 bg-gray-200">
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          {/* V produkci by zde byl skutečný obrázek řečníka */}
          <div className="text-center p-4">
            <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-2xl">{name.charAt(0)}</span>
            </div>
            <span>Fotografie řečníka</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-gray-900">{name}</h3>
        <p className="text-blue-600 font-medium mb-2">{role}</p>
        <p className="text-gray-600 mb-4">{company}</p>
        {bio && <p className="text-gray-600 text-sm">{bio}</p>}
        <Link 
          href={`/recnici/${name.toLowerCase().replace(/\s+/g, '-')}`}
          className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          Více informací →
        </Link>
      </div>
    </div>
  );
};

export default function SpeakersSection() {
  const speakers = [
    {
      name: "Jan Novák",
      role: "CEO",
      company: "Průmysl Technologies",
      image: "/images/speaker1.jpg",
      bio: "Expert na průmyslovou automatizaci s více než 20 lety zkušeností."
    },
    {
      name: "Marie Svobodová",
      role: "CTO",
      company: "Digital Factory",
      image: "/images/speaker2.jpg",
      bio: "Specialistka na digitální transformaci výrobních procesů."
    },
    {
      name: "Petr Černý",
      role: "Ředitel výzkumu",
      company: "Inovace s.r.o.",
      image: "/images/speaker3.jpg",
      bio: "Vede výzkumný tým zaměřený na udržitelnost v průmyslu."
    },
    {
      name: "Lucie Dvořáková",
      role: "Expertka na IoT",
      company: "Smart Solutions",
      image: "/images/speaker4.jpg",
      bio: "Implementovala IoT řešení ve více než 50 výrobních závodech."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Řečníci</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Seznamte se s předními odborníky a inovátory, kteří vystoupí na Průmyslovém Summitu 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <Speaker key={index} {...speaker} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/recnici" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Zobrazit všechny řečníky
          </Link>
        </div>
      </div>
    </section>
  );
}
