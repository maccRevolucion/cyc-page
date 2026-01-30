import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  href?: string;
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  href,
  className = '',
  fullWidth = false
}) => {
  const baseStyles = 'font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3';
  
  const variantStyles = {
    primary: 'bg-cyan-electric text-charcoal hover:bg-white shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_50px_rgba(0,229,255,0.5)]',
    secondary: 'text-white border border-white/20 hover:border-cyan-electric hover:text-cyan-electric',
    outline: 'border border-cyan-electric text-cyan-electric hover:bg-cyan-electric hover:text-charcoal'
  };
  
  const sizeStyles = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-8 py-4 text-sm',
    lg: 'px-10 py-5 text-sm'
  };
  
  const widthStyles = fullWidth ? 'w-full' : 'w-full sm:w-auto';
  
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;
  
  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
    </>
  );
  
  if (href) {
    return (
      <a href={href} className={`${classes} group`}>
        {content}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={`${classes} group`}>
      {content}
    </button>
  );
};