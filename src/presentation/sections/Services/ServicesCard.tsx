import React from 'react';
import { Service } from '../../../domain/entities/Services';

export interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = service.icon;
  
  return (
    <div className="group p-10 bg-white/[0.02] border border-white/5 hover:border-cyan-electric/50 hover:bg-white/[0.04] hover:shadow-cyan-glow transition-all duration-500 relative overflow-hidden">
      {/* Icono de fondo decorativo */}
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        <IconComponent 
          className="w-32 h-32 text-cyan-electric transform translate-x-8 -translate-y-8" 
          strokeWidth={0.5} 
        />
      </div>

      {/* Contenido de la card */}
      <div className="relative z-10">
        {/* Icono frontal */}
        <div className="w-14 h-14 flex items-center justify-center border border-cyan-electric/30 rounded-none mb-8 group-hover:bg-cyan-electric group-hover:border-cyan-electric transition-colors duration-300">
          <IconComponent 
            className="w-7 h-7 text-cyan-electric group-hover:text-charcoal transition-colors duration-300" 
            strokeWidth={1.5} 
          />
        </div>

        {/* Título */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-electric transition-colors duration-300">
          {service.title}
        </h3>
        
        {/* Descripción */}
        <p className="text-gray-400 leading-relaxed mb-8 max-w-md group-hover:text-gray-300 transition-colors">
          {service.description}
        </p>

        {/* Link decorativo */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-cyan-electric transition-colors uppercase tracking-wider">
          <span className="w-8 h-[1px] bg-current"></span>
          Más información
        </div>
      </div>
    </div>
  );
};