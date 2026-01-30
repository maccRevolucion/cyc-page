import React from 'react';

export interface StatusBadgeProps {
  text: string;
  isActive?: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ 
  text, 
  isActive = true 
}) => {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 border border-cyan-electric/20 rounded-full bg-cyan-electric/5 text-xs font-medium text-cyan-electric tracking-widest uppercase">
      {isActive && (
        <span 
          className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"
          aria-label="Estado activo"
        />
      )}
      {text}
    </div>
  );
};