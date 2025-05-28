// app/components/SpeakersSection.tsx
import Image from 'next/image';
import Link from 'next/link';

interface Speaker {
  id: number;
  name: string;
  title: string;
  company: string;
  bio: string;
  image: string; // URL k obrázku řečníka
  slug: string; // Pro detailní stránku řečníka (pokud bys chtěl)
}

// Mock data pro řečníky (můžeš je upravit)
const speakers: Speaker[] = [
  {
    id: 1,
    name: 'Jan Novák',
    title: 'CEO',
    company: 'Průmysl Technologies',
    bio: 'Jan je vizionář v oblasti průmyslové automatizace s více než 20 lety zkušeností. Zaměřuje se na transformaci tradičních podniků na chytré továrny.',
    image: '/images/speakers/speaker1.jpg',
    slug: 'jan-novak',
  },
  {
    id: 2,
    name: 'Marie Svobodová',
    title: 'CTO',
    company: 'Digital Factory',
    bio: 'Marie se zaměřuje na implementaci AI a IoT řešení do výrobních procesů. Její práce pomáhá společnostem optimalizovat efektivitu a snižovat náklady.',
    image: '/images/speakers/speaker2.jpg',
    slug: 'marie-svobodova',
  },
  {
    id: 3,
    name: 'Petr Černý',
    title: 'Ředitel výzkumu',
    company: 'Inovace s.r.o.',
    bio: 'Petr je odborník na udržitelné výrobní strategie a ekologické technologie, které snižují dopad průmyslu na životní prostředí.',
    image: '/images/speakers/speaker3.jpg',
    slug: 'petr-cerny',
  },
  {
    id: 4,
    name: 'Lucie Dvořáková',
    title: 'Expertka na IoT',
    company: 'Smart Solutions',
    bio: 'Lucie je přední odbornicí na Internet věcí (IoT) a jeho aplikace v moderním průmyslu. Pomáhá firmám využívat data pro inovace.',
    image: '/images/speakers/speaker4.jpg',
    slug: 'lucie-dvorakova',
  },
  {
    id: 5,
    name: 'Ing. Karel Dvořák',
    title: 'Lektor automatizace',
    company: 'Automatizace s.r.o.',
    bio: 'Karel se specializuje na výuku a implementaci PLC programování a robotiky, pomáhá firmám s přechodem na automatizovanou výrobu.',
    image: '/images/speakers/speaker5.jpg',
    slug: 'karel-dvorak',
  },
  {
    id: 6,
    name: 'Dr. Anna Procházková',
    title: 'Bezpečnostní analytik',
    company: 'CyberGuard Systems',
    bio: 'Anna je expertkou na kybernetickou bezpečnost průmyslových systémů a kritické infrastruktury, chrání firmy před digitálními hrozbami.',
    image: '/images/speakers/speaker6.jpg',
    slug: 'anna-prochazkova',
  },
];

export default function SpeakersSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-900">
        Naši Řečníci
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakers.map((speaker) => (
          <div key={speaker.id} className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative w-full h-64">
              <Image
                src={speaker.image}
                alt={speaker.name}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
              <p className="text-blue-600 text-lg font-semibold">{speaker.title}</p>
              <p className="text-gray-700 text-base">{speaker.company}</p>
              <p className="text-gray-500 text-sm mt-4 line-clamp-3">{speaker.bio}</p>
              {/* Můžeš přidat odkaz na detail řečníka, pokud by existovala detailní stránka */}
              {/* <Link href={`/speakers/${speaker.slug}`} className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center mt-3">
                Více o řečníkovi
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
