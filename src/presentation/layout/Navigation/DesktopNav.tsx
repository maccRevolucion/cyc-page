import React from 'react';

export const DesktopNav: React.FC = () => {
  return (
    <div className="hidden md:flex items-center gap-10">
      <a 
        href="#servicios" 
        className="text-sm font-medium text-gray-400 hover:text-cyan-electric transition-colors tracking-wide"
      >
        SERVICIOS
      </a>
      <a 
        href="#contacto" 
        className="text-sm font-medium text-gray-400 hover:text-cyan-electric transition-colors tracking-wide"
      >
        CONTACTO
      </a>
      <a href="">
        <button className="border border-cyan-electric text-cyan-electric px-6 py-2.5 rounded-none text-sm font-medium hover:bg-cyan-electric hover:text-charcoal transition-all duration-300 uppercase tracking-wider">
          CATÁLOGO
        </button>
      </a>
    </div>
  );
};