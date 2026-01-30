import React from 'react';
import { ArrowRight } from 'lucide-react';
import { StatusBadge } from '../../components/StatusBadge/StatusBadge';
import { Button } from '../../components/Button/Button';

export const HeroContent: React.FC = () => {
  return (
    <div className="text-left">
      <StatusBadge text="Sistemas Activos 24/7" isActive />

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1] mt-10">
        Protección <br />
        <span className="text-cyan-electric">Inteligente</span>
      </h1>

      <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-xl border-l-2 border-cyan-electric/30 pl-6">
        Seguridad integral que combina tecnología avanzada y protocolos
        rigurosos. Protegemos sus activos físicos y digitales con
        precisión absoluta.
      </p>

      <div className="flex flex-col sm:flex-row items-start gap-6">
        <Button variant="primary" icon={ArrowRight}>
          Solicitar Auditoría
        </Button>
        <Button variant="secondary">
          Ver Soluciones
        </Button>
      </div>
    </div>
  );
};