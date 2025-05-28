// app/layout.tsx
import './globals.css';
import Navbar from './components/Navbar';
import React from 'react'; // React je potřeba pro JSX

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>
        <Navbar />
        {children} {/* Zde se bude renderovat obsah jednotlivých stránek */}
        <footer className="bg-gray-900 text-white text-center p-8 mt-12">
          <div className="container mx-auto">
            <p>&copy; {new Date().getFullYear()} Průmyslový Summit. Všechna práva vyhrazena.</p>
            <p className="mt-2 text-sm text-gray-400">Vytvořeno s láskou a technologiemi pro lepší zítřek.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
