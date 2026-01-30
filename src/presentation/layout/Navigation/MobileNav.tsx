import React from 'react';

export interface MobileNavProps {
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ onClose }) => {
  return (
    <div className="md:hidden absolute top-24 left-0 w-full bg-charcoal border-b border-white/10 p-8 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-5">
      <a 
        href="#servicios" 
        className="text-lg font-medium text-gray-light hover:text-cyan-electric transition-colors"
        onClick={onClose}
      >
        Servicios
      </a>
      <a 
        href="#contacto" 
        className="text-lg font-medium text-gray-light hover:text-cyan-electric transition-colors"
        onClick={onClose}
      >
        Contacto
      </a>
      <button 
        className="border border-cyan-electric text-cyan-electric px-5 py-3 rounded-none text-base font-medium w-full text-center hover:bg-cyan-electric hover:text-charcoal transition-colors uppercase tracking-wider"
        onClick={onClose}
      >
        Catálogo
      </button>
    </div>
  );
};