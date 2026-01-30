import React from 'react';
import { Shield } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  return (
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
  );
};