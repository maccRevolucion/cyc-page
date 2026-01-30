import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ServicesHeader: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Nuestros <span className="text-cyan-electric">Servicios</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
          Arquitectura de seguridad diseñada para entornos de alto
          riesgo. Soluciones escalables para protección física y
          digital.
        </p>
      </div>
      <a 
        href="#" 
        className="text-cyan-electric hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider pb-2 border-b border-cyan-electric/30 hover:border-cyan-electric"
      >
        Ver catálogo completo <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};