import React from 'react';
import { clientLogos } from '../../../data/constants/client.data';

export const ClientLogos: React.FC = () => {
  return (
    <div className="mt-24 pt-12 border-t border-white/5">
      <p className="text-center text-xs font-medium text-gray-600 mb-12 uppercase tracking-[0.2em]">
        Confían en nuestra seguridad
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        {clientLogos.map((logo, i) => (
          <div
            key={i}
            className="h-12 flex items-center justify-center hover:opacity-100 transition-all"
          >
            <img
              src={logo}
              alt="Logo empresa"
              className="h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};