import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-charcoal/90 backdrop-blur-md border-b border-white/5 z-50">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="border border-cyan-electric/30 p-2 rounded-lg group-hover:border-cyan-electric transition-colors duration-300">
            <Shield className="w-6 h-6 text-cyan-electric" strokeWidth={1.5} />
          </div>
          <span className="text-xl font-bold tracking-widest text-white uppercase">
            C&C Security
          </span>
        </div>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-light hover:text-cyan-electric transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <MobileNav onClose={() => setIsMenuOpen(false)} />}
    </nav>
  );
};