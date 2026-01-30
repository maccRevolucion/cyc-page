import React, { useState } from 'react';
import { Shield, Camera, Lock, CheckCircle, ArrowRight, Menu, X, Server, Fingerprint, Eye } from 'lucide-react';

// Types
type Service = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
};
type Certification = {
  id: string;
  title: string;
  subtitle: string;
};

// Data
const services: Service[] = [{
  id: 'vigilancia',
  title: 'Vigilancia 24/7',
  description: 'Monitoreo continuo con personal certificado y altamente capacitado para garantizar la seguridad total de sus instalaciones.',
  icon: Eye
}, {
  id: 'cctv',
  title: 'Sistemas CCTV Avanzados',
  description: 'Cámaras de alta definición con visión nocturna, reconocimiento facial y almacenamiento seguro en la nube.',
  icon: Camera
}, {
  id: 'acceso',
  title: 'Control de Acceso Biométrico',
  description: 'Sistemas de última generación con lectura de huella, reconocimiento facial y tarjetas inteligentes encriptadas.',
  icon: Fingerprint
}, {
  id: 'remoto',
  title: 'Monitoreo Remoto',
  description: 'Supervisión en tiempo real desde cualquier dispositivo móvil con alertas instantáneas ante cualquier anomalía.',
  icon: Server
}];

const certifications: Certification[] = [{
  id: 'iso',
  title: 'ISO 27001',
  subtitle: 'Seguridad de Información'
}, {
  id: 'exp',
  title: '5+ Años',
  subtitle: 'Trayectoria Nacional'
}, {
  id: 'nac',
  title: 'Certificación',
  subtitle: 'Nacional de Seguridad'
}, {
  id: 'cli',
  title: '100+',
  subtitle: 'Empresas Protegidas'
}];


export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <div className="min-h-screen bg-charcoal font-sans text-gray-light selection:bg-cyan-electric/20 selection:text-cyan-electric">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-charcoal/90 backdrop-blur-md border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="border border-cyan-electric/30 p-2 rounded-lg group-hover:border-cyan-electric transition-colors duration-300">
              <Shield className="w-6 h-6 text-cyan-electric" strokeWidth={1.5} />
            </div>
            <span className="text-xl font-bold tracking-widest text-white uppercase">
              C&C Security
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#servicios" className="text-sm font-medium text-gray-400 hover:text-cyan-electric transition-colors tracking-wide">
              SERVICIOS
            </a>
            {/*<a href="#certificaciones" className="text-sm font-medium text-gray-400 hover:text-cyan-electric transition-colors tracking-wide">
              CERTIFICACIONES
            </a> */}
            <a href="#contacto" className="text-sm font-medium text-gray-400 hover:text-cyan-electric transition-colors tracking-wide">
              CONTACTO
            </a>
            <a href='' >
            <button className="border border-cyan-electric text-cyan-electric px-6 py-2.5 rounded-none text-sm font-medium hover:bg-cyan-electric hover:text-charcoal transition-all duration-300 uppercase tracking-wider">
              CATÁLOGO
            </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-light hover:text-cyan-electric transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && <div className="md:hidden absolute top-24 left-0 w-full bg-charcoal border-b border-white/10 p-8 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-5">
            <a href="#servicios" className="text-lg font-medium text-gray-light hover:text-cyan-electric transition-colors" onClick={() => setIsMenuOpen(false)}>
              Servicios
            </a>
            {/* <a href="#certificaciones" className="text-lg font-medium text-gray-light hover:text-cyan-electric transition-colors" onClick={() => setIsMenuOpen(false)}>
              Certificaciones
            </a> */ }
            <a href="#contacto" className="text-lg font-medium text-gray-light hover:text-cyan-electric transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </a>
            <button className="border border-cyan-electric text-cyan-electric px-5 py-3 rounded-none text-base font-medium w-full text-center hover:bg-cyan-electric hover:text-charcoal transition-colors uppercase tracking-wider">
              Catálogo
            </button>
          </div>}
      </nav>

      <main className="pt-10">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-electric/5 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-cyan-electric/5 blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-cyan-electric/20 rounded-full bg-cyan-electric/5 text-xs font-medium text-cyan-electric mb-10 tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
                Sistemas Activos 24/7
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                Protección <br />
                <span className="text-cyan-electric">Inteligente</span>
              </h1>

              <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-xl border-l-2 border-cyan-electric/30 pl-6">
                Seguridad integral que combina tecnología avanzada y protocolos
                rigurosos. Protegemos sus activos físicos y digitales con
                precisión absoluta.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-6">
                <button className="group w-full sm:w-auto bg-cyan-electric text-charcoal px-8 py-4 font-bold hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-wider text-sm">
                  Solicitar Auditoría
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 font-bold text-gray-light hover:text-cyan-electric border border-white/10 hover:border-cyan-electric transition-all duration-300 uppercase tracking-wider text-sm">
                  Ver Soluciones
                </button>
              </div>
            </div>

            {/* Abstract Hero Visual */}
            <div className="relative hidden lg:block h-[600px] w-full border border-white/5 bg-white/[0.02] backdrop-blur-sm p-8">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-electric/50 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-electric/50 to-transparent" />

              <div className="h-full w-full flex flex-col justify-between relative">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="w-24 h-1 bg-cyan-electric/20" />
                    <div className="w-16 h-1 bg-cyan-electric/20" />
                  </div>
                  <div className="text-right font-mono text-xs text-cyan-electric/60">
                    SYS.STATUS: SECURE
                    <br />
                    UPTIME: 99.99%
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-cyan-electric/20 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 border border-cyan-electric/40 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                    <div className="w-2 h-2 bg-cyan-electric rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#00E5FF]" />
                  </div>
                  <Shield className="w-16 h-16 text-cyan-electric opacity-80" strokeWidth={1} />
                </div>

                <div className="grid grid-cols-3 gap-4 font-mono text-xs text-gray-500">
                  <div className="border-t border-white/10 pt-2">
                    <span className="text-cyan-electric block mb-1">01</span>
                    DETECCIÓN
                  </div>
                  <div className="border-t border-white/10 pt-2">
                    <span className="text-cyan-electric block mb-1">02</span>
                    ANALISIS
                  </div>
                  <div className="border-t border-white/10 pt-2">
                    <span className="text-cyan-electric block mb-1">03</span>
                    RESPUESTA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-32 px-6 bg-charcoal relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Nuestros <span className="text-cyan-electric">Servicios</span>
                </h2>
                <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                  Arquitectura de seguridad diseñada para entornos de alto
                  riesgo. Soluciones escalables para protección física y
                  digital.
                </p>
              </div>
              <a href="#" className="text-cyan-electric hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider pb-2 border-b border-cyan-electric/30 hover:border-cyan-electric">
                Ver catálogo completo <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map(service => <div key={service.id} className="group p-10 bg-white/[0.02] border border-white/5 hover:border-cyan-electric/50 hover:bg-white/[0.04] hover:shadow-cyan-glow transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <service.icon className="w-32 h-32 text-cyan-electric transform translate-x-8 -translate-y-8" strokeWidth={0.5} />
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 flex items-center justify-center border border-cyan-electric/30 rounded-none mb-8 group-hover:bg-cyan-electric group-hover:border-cyan-electric transition-colors duration-300">
                      <service.icon className="w-7 h-7 text-cyan-electric group-hover:text-charcoal transition-colors duration-300" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-electric transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-8 max-w-md group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-cyan-electric transition-colors uppercase tracking-wider">
                      <span className="w-8 h-[1px] bg-current"></span>
                      Más información
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* Trust/Certifications Section */}
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
                {certifications.map(cert => <div key={cert.id} className="flex flex-col p-6 border-l border-white/10 hover:border-cyan-electric transition-colors duration-300 pl-8">
                    <CheckCircle className="w-6 h-6 text-cyan-electric mb-4" strokeWidth={1.5} />
                    <h3 className="text-lg font-bold text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      {cert.subtitle}
                    </p>
                  </div>)}
              </div>
            </div>

            {/* Logos grid */}
                <div className="mt-24 pt-12 border-t border-white/5">
                  <p className="text-center text-xs font-medium text-gray-600 mb-12 uppercase tracking-[0.2em]">
                    Confían en nuestra seguridad
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {[
                      '../src/assets/logos/cid.png',
                      '../src/assets/logos/estrelladelmar.png',
                      '../src/assets/logos/dolores-atun.png',
                      '../src/assets/logos/coppel.png',
                    ].map((logo, i) => (
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
          </div>
        </section>

        {/* CTA Section */}
        <section id="contacto" className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyan-electric/5 skew-y-3 transform origin-bottom-left pointer-events-none" />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Seguridad sin{' '}
              <span className="text-cyan-electric">Compromisos</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Nuestros analistas de riesgos están listos para evaluar sus
              vulnerabilidades y diseñar una estrategia de protección
              impenetrable.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-cyan-electric text-charcoal px-10 py-5 font-bold hover:bg-white transition-colors uppercase tracking-wider text-sm shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_50px_rgba(0,229,255,0.5)] duration-300">
                Iniciar Evaluación
              </button>
              <button className="w-full sm:w-auto px-10 py-5 font-bold text-white border border-white/20 hover:border-cyan-electric hover:text-cyan-electric transition-colors uppercase tracking-wider text-sm">
                Contactar Ventas
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 text-gray-500 py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
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
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 border border-white/10 flex items-center justify-center hover:border-cyan-electric hover:text-cyan-electric transition-colors cursor-pointer">
                <a href='https://www.facebook.com/profile.php?id=61585919020517' target='_blank' rel='' className='w-8 h-8 border border-white/10 flex items-center justify-center
               hover:border-cyan-electric hover:text-cyan-electric
               transition-colors' aria-label='Facebook'>
                <span className="text-xs">FB</span>
                </a>
              </div>
              <div className="w-8 h-8 border border-white/10 flex items-center justify-center hover:border-cyan-electric hover:text-cyan-electric transition-colors cursor-pointer">
                <a href='https://x.com/CCSecur1ty' target='_blank' rel='' className='w-8 h-8 border border-white/10 flex items-center justify-center hover:border-cyan-electric hover:text-cyan-electric
               transition-colors' aria-label='X / Twitter'>
                <span className="text-xs">X</span>
                </a>
              </div>
              <div className="w-8 h-8 border border-white/10 flex items-center justify-center hover:border-cyan-electric hover:text-cyan-electric transition-colors cursor-pointer">
                <a href='https://www.instagram.com/cycsecur1ty' target='_blank' rel='' className='w-8 h-8 border border-white/10 flex items-center justify-center
               hover:border-cyan-electric hover:text-cyan-electric
               transition-colors'
               aria-label='Instagram'>
                <span className="text-xs">IG</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-wider text-xs">
              Servicios
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-cyan-electric transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-cyan-electric opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Vigilancia Física
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-electric transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-cyan-electric opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Ciberseguridad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-electric transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-cyan-electric opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Control de Acceso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-electric transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-cyan-electric opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Consultoría de Riesgos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-wider text-xs">
              Compañía
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-cyan-electric transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-electric transition-colors">
                  Certificaciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-electric transition-colors">
                  Casos de Éxito
                </a>
              </li>
            </ul>
          </div>

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
    </div>;
}