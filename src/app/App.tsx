import React from 'react';
import { Navigation } from '../presentation/layout/Navigation/Navigation';
import { Footer } from '../presentation/layout/Footer/Footer';
import { HomePage } from '../presentation/pages/HomePage/HomePage';

export function App() {
  return (
    <div className="min-h-screen bg-charcoal font-sans text-gray-light selection:bg-cyan-electric/20 selection:text-cyan-electric">
      {/* Navegación fija */}
      <Navigation />
      
      {/* Contenido principal */}
      <HomePage />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}