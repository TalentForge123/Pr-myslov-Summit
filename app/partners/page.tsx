// app/partners/page.tsx
import Image from 'next/image';
import Link from 'next/link';

interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
  tier: 'Diamond' | 'Gold' | 'Silver' | 'Bronze'; // Úrovně partnerství
}

const partners: Partner[] = [
  {
    id: 1,
    name: 'Průmysl Invest Group',
    logo: '/images/partners/partner1.png',
    description: 'Přední investiční skupina podporující inovace v průmyslu.',
    website: 'https://www.prumyslinvest.cz',
    tier: 'Diamond',
  },
  {
    id: 2,
    name: 'Techno Solutions s.r.o.',
    logo: '/images/partners/partner2.png',
    description: 'Poskytovatel špičkových technologických řešení pro chytré továrny.',
    website: 'https://www.technosolutions.cz',
    tier: 'Diamond',
  },
  {
    id: 3,
    name: 'Future Robotics Corp.',
    logo: '/images/partners/partner3.png',
    description: 'Společnost vyvíjející a dodávající pokročilé robotické systémy.',
    website: 'https://www.futurerobotics.com',
    tier: 'Gold',
  },
  {
    id: 4,
    name: 'EcoEnergy Systems',
    logo: '/images/partners/partner4.png',
    description: 'Specialisté na udržitelné energetické systémy pro průmyslové provozy.',
    website: 'https://www.ecoenergysystems.cz',
    tier: 'Gold',
  },
  {
    id: 5,
    name: 'Smart Factory Consulting',
    logo: '/images/partners/partner5.png',
    description: 'Konzultační firma zaměřená na digitální transformaci a automatizaci.',
    website: 'https://www.smartfactory.cz',
    tier: 'Silver',
  },
  {
    id: 6,
    name: 'Inovace & R&D Labs',
    logo: '/images/partners/partner6.png',
    description: 'Výzkumné a vývojové centrum pro nové průmyslové technologie.',
    website: 'https://www.rndlabs.cz',
    tier: 'Silver',
  },
  {
    id: 7,
    name: 'Global Logistik Solutions',
    logo: '/images/partners/partner7.png',
    description: 'Mezinárodní logistická společnost s důrazem na efektivitu.',
    website: 'https://www.globallogistik.com',
    tier: 'Bronze',
  },
  {
    id: 8,
    name: 'Local Manufacturing Co.',
    logo: '/images/partners/partner8.png',
    description: 'Regionální výrobní společnost s dlouhou tradicí.',
    website: 'https://www.localmanufacturing.cz',
    tier: 'Bronze',
  },
];

export default function PartnersPage() {
  const diamondPartners = partners.filter(p => p.tier === 'Diamond');
  const goldPartners = partners.filter(p => p.tier === 'Gold');
  const silverPartners = partners.filter(p => p.tier === 'Silver');
  const bronzePartners = partners.filter(p => p.tier === 'Bronze');

  const renderPartnerTier = (tierName: string, partnerList: Partner[]) => (
    <div className="mb-12">
      <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">{tierName} Partneři</h3>
      {partnerList.length === 0 ? (
        <p className="text-center text-gray-600">Pro tuto úroveň nejsou k dispozici žádní partneři.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partnerList.map(partner => (
            <div key={partner.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-between text-center transition duration-300 hover:shadow-xl">
              <div className="relative w-40 h-20 mb-4 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="mx-auto"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h4>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{partner.description}</p>
              <Link href={partner.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Navštívit web
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6l-7 7m0 0l-7-7m7 7h18"></path></svg>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="pt-20 pb-16"> {/* Přidal jsem pt-20 pro odsazení od navigace */}
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900">
          Naši Vážení Partneři
        </h1>
        <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Díky podpoře našich partnerů můžeme realizovat tento mezinárodní průmyslový summit.
        </p>

        {renderPartnerTier('Diamond', diamondPartners)}
        {renderPartnerTier('Gold', goldPartners)}
        {renderPartnerTier('Silver', silverPartners)}
        {renderPartnerTier('Bronze', bronzePartners)}

      </div>
    </div>
  );
}
