import React from 'react';
import { HeroContent } from './HeroContent';
import { HeroVisual } from './HeroVisual';

export const Hero: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-electric/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-cyan-electric/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
};