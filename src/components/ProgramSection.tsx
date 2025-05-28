"use client";

import React from 'react';
import Link from 'next/link';

export default function ProgramSection() {
  const programDays = [
    {
      date: "1. října 2025",
      title: "Den 1: Inovace a digitalizace",
      events: [
        { time: "9:00 - 10:00", title: "Registrace a ranní káva", location: "Vstupní hala" },
        { time: "10:00 - 10:30", title: "Zahájení summitu", speaker: "Jan Novák, CEO Průmysl Technologies", location: "Hlavní sál" },
        { time: "10:30 - 11:30", title: "Keynote: Budoucnost průmyslové automatizace", speaker: "Marie Svobodová, CTO Digital Factory", location: "Hlavní sál" },
        { time: "11:45 - 12:45", title: "Panel: Digitální transformace výrobních podniků", speaker: "Petr Černý, Lucie Dvořáková, Jan Novák", location: "Hlavní sál" },
        { time: "12:45 - 14:00", title: "Oběd a networking", location: "Restaurace" },
        { time: "14:00 - 15:30", title: "Workshop: Implementace IoT ve výrobě", speaker: "Lucie Dvořáková, Smart Solutions", location: "Workshop místnost A" },
        { time: "15:45 - 16:45", title: "Přednáška: Umělá inteligence v průmyslu", speaker: "Petr Černý, Inovace s.r.o.", location: "Hlavní sál" },
        { time: "17:00 - 19:00", title: "Večerní recepce a networking", location: "Foyer" }
      ]
    },
    {
      date: "2. října 2025",
      title: "Den 2: Udržitelnost a efektivita",
      events: [
        { time: "9:00 - 9:30", title: "Ranní káva", location: "Vstupní hala" },
        { time: "9:30 - 10:30", title: "Keynote: Udržitelnost v průmyslu", speaker: "Petr Černý, Ředitel výzkumu Inovace s.r.o.", location: "Hlavní sál" },
        { time: "10:45 - 11:45", title: "Panel: Energetická efektivita výrobních procesů", speaker: "Marie Svobodová, Jan Novák, Lucie Dvořáková", location: "Hlavní sál" },
        { time: "12:00 - 13:15", title: "Oběd a networking", location: "Restaurace" },
        { time: "13:30 - 15:00", title: "Workshop: Optimalizace výrobních procesů", speaker: "Jan Novák, Průmysl Technologies", location: "Workshop místnost B" },
        { time: "15:15 - 16:15", title: "Přednáška: Cirkulární ekonomika v průmyslu", speaker: "Marie Svobodová, Digital Factory", location: "Hlavní sál" },
        { time: "16:30 - 18:30", title: "Networking a koktejl", location: "Terasa" }
      ]
    },
    {
      date: "3. října 2025",
      title: "Den 3: Budoucnost průmyslu",
      events: [
        { time: "9:00 - 9:30", title: "Ranní káva", location: "Vstupní hala" },
        { time: "9:30 - 10:30", title: "Keynote: Průmysl 5.0", speaker: "Lucie Dvořáková, Expertka na IoT Smart Solutions", location: "Hlavní sál" },
        { time: "10:45 - 11:45", title: "Panel: Budoucnost práce v průmyslu", speaker: "Jan Novák, Petr Černý, Marie Svobodová", location: "Hlavní sál" },
        { time: "12:00 - 13:15", title: "Oběd a networking", location: "Restaurace" },
        { time: "13:30 - 15:00", title: "Workshop: Robotizace a automatizace", speaker: "Marie Svobodová, Digital Factory", location: "Workshop místnost A" },
        { time: "15:15 - 16:15", title: "Závěrečná diskuse a shrnutí summitu", speaker: "Jan Novák, CEO Průmysl Technologies", location: "Hlavní sál" },
        { time: "16:30 - 18:00", title: "Závěrečný networking", location: "Foyer" }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Program summitu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Třídenní program plný inspirativních přednášek, panelových diskusí a praktických workshopů.
          </p>
        </div>

        <div className="flex flex-col space-y-8">
          {programDays.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white p-4">
                <h3 className="text-xl font-bold">{day.date}</h3>
                <p className="text-blue-100">{day.title}</p>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                      <div className="flex flex-col md:flex-row md:items-center">
                        <div className="font-medium text-blue-600 md:w-1/6">{event.time}</div>
                        <div className="md:w-5/6">
                          <h4 className="font-bold text-gray-900">{event.title}</h4>
                          {event.speaker && <p className="text-gray-700">{event.speaker}</p>}
                          <p className="text-gray-500 text-sm">{event.location}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/program" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Zobrazit detailní program
          </Link>
        </div>
      </div>
    </section>
  );
}
