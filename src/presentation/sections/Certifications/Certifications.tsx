import React from 'react';
import { certifications } from '../../../data/constants/certifications.data';
import { CertificationCard } from './CertificationCard';
import { ClientLogos } from './ClientLogos';

export const Certifications: React.FC = () => {
  return (
    <section id="certificaciones" className="py-32 px-6 border-y border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-white mb-4">
              Estándares <br />
              Globales
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Operamos bajo las normativas más estrictas de la industria de
              seguridad internacional.
            </p>
            <button className="text-cyan-electric text-sm font-bold uppercase tracking-wider hover:text-white transition-colors">
              Ver documentación →
            </button>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map(cert => (
              <CertificationCard key={cert.id} certification={cert} />
            ))}
          </div>
        </div>

        <ClientLogos />
      </div>
    </section>
  );
};