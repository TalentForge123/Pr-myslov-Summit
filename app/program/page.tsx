import React from 'react';

export default function Program() {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Program Průmyslového Summitu 2025</h1>
        <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Třídenní program plný inspirativních přednášek, panelových diskusí a praktických workshopů zaměřených na budoucnost průmyslu.
        </p>
        
        <div className="max-w-5xl mx-auto">
          {/* Den 1 */}
          <div className="mb-12">
            <div className="bg-blue-600 text-white p-4 rounded-t-lg">
              <h2 className="text-xl font-bold">1. října 2025</h2>
              <p className="text-blue-100">Den 1: Inovace a digitalizace</p>
            </div>
            
            <div className="bg-white shadow-md rounded-b-lg overflow-hidden">
              <div className="divide-y divide-gray-200">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="font-medium text-blue-600 md:w-1/4 mb-2 md:mb-0">9:00 - 10:00</div>
                    <div className="md:w-3/4">
                      <h3 className="font-bold text-gray-900">Registrace a ranní káva</h3>
                      <p className="text-gray-500 text-sm">Vstupní hala</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="font-medium text-blue-600 md:w-1/4 mb-2 md:mb-0">10:00 - 10:30</div>
                    <div className="md:w-3/4">
                      <h3 className="font-bold text-gray-900">Zahájení summitu</h3>
                      <p className="text-gray-700">Jan Novák, CEO Průmysl Technologies</p>
                      <p className="text-gray-500 text-sm">Hlavní sál</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="font-medium text-blue-600 md:w-1/4 mb-2 md:mb-0">10:30 - 11:30</div>
                    <div className="md:w-3/4">
                      <h3 className="font-bold text-gray-900">Keynote: Budoucnost průmyslové automatizace</h3>
                      <p className="text-gray-700">Marie Svobodová, CTO Digital Factory</p>
                      <p className="text-gray-500 text-sm">Hlavní sál</p>
                    </div>
                  </div>
                </div>
                
                {/* Další položky programu pro den 1 */}
              </div>
            </div>
          </div>
          
          {/* Den 2 */}
          <div className="mb-12">
            <div className="bg-blue-600 text-white p-4 rounded-t-lg">
              <h2 className="text-xl font-bold">2. října 2025</h2>
              <p className="text-blue-100">Den 2: Udržitelnost a efektivita</p>
            </div>
            
            <div className="bg-white shadow-md rounded-b-lg overflow-hidden">
              <div className="divide-y divide-gray-200">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="font-medium text-blue-600 md:w-1/4 mb-2 md:mb-0">9:00 - 9:30</div>
                    <div className="md:w-3/4">
                      <h3 className="font-bold text-gray-900">Ranní káva</h3>
                      <p className="text-gray-500 text-sm">Vstupní hala</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="font-medium text-blue-600 md:w-1/4 mb-2 md:mb-0">9:30 - 10:30</div>
                    <div className="md:w-3/4">
                      <h3 className="font-bold text-gray-900">Keynote: Udržitelnost v průmyslu</h3>
                      <p className="text-gray-700">Petr Černý, Ředitel výzkumu Inovace s.r.o.</p>
                      <p className="text-gray-500 text-sm">Hlavní sál</p>
                    </div>
                  </div>
                </div>
                
                {/* Další položky programu pro den 2 */}
              </div>
            </div>
          </div>
          
          {/* Den 3 */}
          <div>
            <div className="bg-blue-600 text-white p-4 rounded-t-lg">
              <h2 className="text-xl font-bold">3. října 2025</h2>
              <p className="text-blue-100">Den 3: Budoucnost průmyslu</p>
            </div>
            
            <div className="bg-white shadow-md rounded-b-lg overflow-hidden">
              <div className="divide-y divide-gray-200">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="font-medium text-blue-600 md:w-1/4 mb-2 md:mb-0">9:00 - 9:30</div>
                    <div className="md:w-3/4">
                      <h3 className="font-bold text-gray-900">Ranní káva</h3>
                      <p className="text-gray-500 text-sm">Vstupní hala</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="font-medium text-blue-600 md:w-1/4 mb-2 md:mb-0">9:30 - 10:30</div>
                    <div className="md:w-3/4">
                      <h3 className="font-bold text-gray-900">Keynote: Průmysl 5.0</h3>
                      <p className="text-gray-700">Lucie Dvořáková, Expertka na IoT Smart Solutions</p>
                      <p className="text-gray-500 text-sm">Hlavní sál</p>
                    </div>
                  </div>
                </div>
                
                {/* Další položky programu pro den 3 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
