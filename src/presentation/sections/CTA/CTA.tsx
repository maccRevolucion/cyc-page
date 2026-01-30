import React from 'react';
import { Button } from '../../components/Button/Button';

export const CTA: React.FC = () => {
  return (
    <section id="contacto" className="py-32 px-6 relative overflow-hidden">
      {/* Fondo con efecto skew */}
      <div className="absolute inset-0 bg-cyan-electric/5 skew-y-3 transform origin-bottom-left pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Título */}
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
          Seguridad sin{' '}
          <span className="text-cyan-electric">Compromisos</span>
        </h2>
        
        {/* Descripción */}
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Nuestros analistas de riesgos están listos para evaluar sus
          vulnerabilidades y diseñar una estrategia de protección
          impenetrable.
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button variant="primary" size="lg">
            Iniciar Evaluación
          </Button>
          <Button variant="secondary" size="lg">
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  );
};