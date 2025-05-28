// app/components/Footer.tsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-8 mt-12">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Průmyslový Summit. Všechna práva vyhrazena.</p>
        <p className="mt-2 text-sm text-gray-400">Vytvořeno s láskou a technologiemi pro lepší zítřek.</p>
      </div>
    </footer>
  );
}
