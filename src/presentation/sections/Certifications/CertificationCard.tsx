import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Certification } from '../../../domain/entities/Certification';

interface CertificationCardProps {
  certification: Certification;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  return (
    <div className="flex flex-col p-6 border-l border-white/10 hover:border-cyan-electric transition-colors duration-300 pl-8">
      <CheckCircle className="w-6 h-6 text-cyan-electric mb-4" strokeWidth={1.5} />
      <h3 className="text-lg font-bold text-white mb-1">
        {certification.title}
      </h3>
      <p className="text-xs text-gray-500 uppercase tracking-wide">
        {certification.subtitle}
      </p>
    </div>
  );
};