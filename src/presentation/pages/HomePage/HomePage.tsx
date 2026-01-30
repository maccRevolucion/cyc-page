import React from 'react';
import { Hero } from '../../sections/Hero/Hero';
import { Services } from '../../sections/Services/Services';
import { Certifications } from '../../sections/Certifications/Certifications';
import { CTA } from '../../sections/CTA/CTA';

export const HomePage: React.FC = () => {
  return (
    <main className="pt-10">
      <Hero />
      <Services />
      <Certifications />
      <CTA />
    </main>
  );
};