import React from 'react';
import { services } from '../../../data/constants/services.data';
import { ServicesHeader } from './ServicesHeader';
import { ServiceCard } from './ServicesCard';

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-32 px-6 bg-charcoal relative">
      <div className="max-w-7xl mx-auto">
        <ServicesHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};