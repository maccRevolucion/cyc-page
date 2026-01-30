import React from 'react';
import { Lock } from 'lucide-react';
import { SocialLinks } from './SocialLinks';
import { FooterColumn } from './FooterColumn';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black/40 text-gray-500 py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <div className="border border-cyan-electric p-1.5 rounded">
              <Lock className="w-5 h-5 text-cyan-electric" strokeWidth={1.5} />
            </div>
            <span className="text-lg font-bold text-white tracking-widest uppercase">
              C&C Security
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-8">
            Protección avanzada para un mundo interconectado. Seguridad física
            y digital unificada.
          </p>
          <SocialLinks />
        </div>

        {/* Services Column */}
        <FooterColumn 
          title="Servicios"
          links={[
            { label: 'Vigilancia Física', href: '#' },
            { label: 'Ciberseguridad', href: '#' },
            { label: 'Control de Acceso', href: '#' },
            { label: 'Consultoría de Riesgos', href: '#' }
          ]}
        />

        {/* Company Column */}
        <FooterColumn 
          title="Compañía"
          links={[
            { label: 'Sobre Nosotros', href: '#' },
            { label: 'Casos de Éxito', href: '#' }
          ]}
        />

        {/* Contact Column */}
        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-wider text-xs">
            Contacto
          </h4>
          <ul className="space-y-4 text-sm font-mono">
            <li className="flex items-center gap-3">
              <span className="text-cyan-electric">E:</span>{' '}
              cycsecurit1@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <span className="text-cyan-electric">T:</span> +52 900 123 456
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-electric mt-1">D:</span>
              <span>
                C. Segunda Río Chachalacas #53,
                <br />
                Mazatlán, México
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
        <p>© 2026 C&C Security. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-cyan-electric transition-colors">
            PRIVACIDAD
          </a>
          <a href="#" className="hover:text-cyan-electric transition-colors">
            TÉRMINOS
          </a>
          <a href="#" className="hover:text-cyan-electric transition-colors">
            COOKIES
          </a>
        </div>
      </div>
    </footer>
  );
};