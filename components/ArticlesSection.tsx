"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  featuredImage: string;
  slug: string;
}

export default function ArticlesSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulace načítání článků z WordPress API
    // V produkci by zde byl skutečný API call na WordPress REST API
    const fetchArticles = async () => {
      try {
        // Simulovaná data - v produkci by zde byl fetch na WordPress REST API
        // např. fetch('https://svetprumyslu.cz/wp-json/wp/v2/posts?categories=prumyslovy-summit&_embed')
        setTimeout(() => {
          const mockArticles: Article[] = [
            {
              id: 1,
              title: 'Budoucnost průmyslové automatizace',
              excerpt: 'Jak nové technologie mění tvář průmyslové výroby a co to znamená pro firmy v České republice.',
              date: '2025-04-15',
              featuredImage: '/images/article1.jpg',
              slug: 'budoucnost-prumyslove-automatizace'
            },
            {
              id: 2,
              title: 'Udržitelnost v průmyslu: Trend nebo nutnost?',
              excerpt: 'Analýza současných trendů v oblasti udržitelnosti a jejich dopadu na průmyslovou výrobu.',
              date: '2025-04-10',
              featuredImage: '/images/article2.jpg',
              slug: 'udrzitelnost-v-prumyslu'
            },
            {
              id: 3,
              title: 'Digitální transformace výrobních podniků',
              excerpt: 'Případové studie úspěšné digitální transformace v českých výrobních podnicích.',
              date: '2025-04-05',
              featuredImage: '/images/article3.jpg',
              slug: 'digitalni-transformace-vyrobnich-podniku'
            },
          ];
          setArticles(mockArticles);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Nepodařilo se načíst články');
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Načítání článků...</h2>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Články</h2>
          <div className="text-center text-red-500">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nejnovější články</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Přečtěte si nejnovější články o průmyslovém summitu a aktuálních trendech v průmyslu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gray-200">
                  {/* V produkci by zde byl skutečný obrázek z WordPress */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Náhled obrázku
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {new Date(article.date).toLocaleDateString('cs-CZ')}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <a 
                  href={`/clanky/${article.slug}`} 
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Číst více →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/clanky" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Zobrazit všechny články
          </a>
        </div>
      </div>
    </section>
  );
}
