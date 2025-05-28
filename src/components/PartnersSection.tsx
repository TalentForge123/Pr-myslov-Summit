"use client";

import React from 'react';

export default function PartnersSection() {
  const partners = [
    { name: "Průmysl Technologies", logo: "/images/partner1.png", type: "Hlavní partner" },
    { name: "Digital Factory", logo: "/images/partner2.png", type: "Hlavní partner" },
    { name: "Smart Solutions", logo: "/images/partner3.png", type: "Technologický partner" },
    { name: "Inovace s.r.o.", logo: "/images/partner4.png", type: "Technologický partner" },
    { name: "Automatizace Pro", logo: "/images/partner5.png", type: "Partner" },
    { name: "Svět Průmyslu", logo: "/images/partner6.png", type: "Mediální partner" }
  ];

  // Rozdělení partnerů podle typu
  const mainPartners = partners.filter(p => p.type === "Hlavní partner");
  const techPartners = partners.filter(p => p.type === "Technologický partner");
  const regularPartners = partners.filter(p => p.type === "Partner");
  const mediaPartners = partners.filter(p => p.type === "Mediální partner");

  const PartnerLogo = ({ partner }: { partner: typeof partners[0] }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-sm p-6 h-32 w-full flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
            <span className="text-gray-500">{partner.name.charAt(0)}</span>
          </div>
          <p className="text-gray-800 font-medium">{partner.name}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Naši partneři</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Děkujeme našim partnerům za podporu Průmyslového Summitu 2025.
          </p>
        </div>

        {mainPartners.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-center mb-6">Hlavní partneři</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mainPartners.map((partner, index) => (
                <PartnerLogo key={index} partner={partner} />
              ))}
            </div>
          </div>
        )}

        {techPartners.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-center mb-6">Technologičtí partneři</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techPartners.map((partner, index) => (
                <PartnerLogo key={index} partner={partner} />
              ))}
            </div>
          </div>
        )}

        {regularPartners.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-bold text-center mb-6">Partneři</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {regularPartners.map((partner, index) => (
                <PartnerLogo key={index} partner={partner} />
              ))}
            </div>
          </div>
        )}

        {mediaPartners.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-center mb-6">Mediální partneři</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mediaPartners.map((partner, index) => (
                <PartnerLogo key={index} partner={partner} />
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <a 
            href="/partneri" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Zobrazit všechny partnery
          </a>
        </div>
      </div>
    </section>
  );
}
