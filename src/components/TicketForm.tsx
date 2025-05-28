"use client";

import React, { useState } from 'react';

export default function TicketForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    position: '',
    ticketType: 'standard'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Simulace odeslání formuláře
    setTimeout(() => {
      // V produkci by zde byl skutečný API call pro zpracování objednávky vstupenky
      // a přesměrování na platební bránu
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Přesměrování na platební bránu by bylo implementováno zde
      // window.location.href = 'https://payment-gateway.example/checkout?order=123';
    }, 1500);
  };

  const ticketTypes = [
    { id: 'standard', name: 'Standardní vstupenka', price: '5 900 Kč', description: 'Přístup na všechny přednášky a panelové diskuse' },
    { id: 'premium', name: 'Premium vstupenka', price: '9 900 Kč', description: 'Standardní vstupenka + přístup na workshopy a VIP networking' },
    { id: 'vip', name: 'VIP vstupenka', price: '15 900 Kč', description: 'Premium vstupenka + exkluzivní večeře s řečníky a VIP lounge' }
  ];

  if (submitSuccess) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Objednávka přijata!</h3>
          <p className="mt-2 text-sm text-gray-500">
            Děkujeme za vaši objednávku. Nyní budete přesměrováni na platební bránu pro dokončení platby.
          </p>
          <div className="mt-6">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => window.location.href = '/'}
            >
              Zpět na hlavní stránku
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Objednávka vstupenky</h2>
      
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Vyberte typ vstupenky</h3>
        <div className="space-y-4">
          {ticketTypes.map((ticket) => (
            <div key={ticket.id} className="relative">
              <div className={`border rounded-lg p-4 ${formData.ticketType === ticket.id ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}>
                <label className="flex items-start">
                  <input
                    type="radio"
                    name="ticketType"
                    value={ticket.id}
                    checked={formData.ticketType === ticket.id}
                    onChange={handleChange}
                    className="h-4 w-4 mt-1 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <div className="ml-3">
                    <span className="block text-sm font-medium text-gray-900">{ticket.name}</span>
                    <span className="block text-sm text-gray-500">{ticket.description}</span>
                    <span className="block text-sm font-bold text-gray-900 mt-1">{ticket.price}</span>
                  </div>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Jméno</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Příjmení</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Společnost</label>
            <input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-700">Pozice</label>
            <input
              type="text"
              name="position"
              id="position"
              value={formData.position}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
        
        {submitError && (
          <div className="mt-4 text-sm text-red-600">
            {submitError}
          </div>
        )}
        
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Zpracovávám...
              </>
            ) : (
              'Pokračovat k platbě'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
