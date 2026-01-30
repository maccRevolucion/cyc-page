import React from 'react';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <h4 className="text-white font-bold mb-8 uppercase tracking-wider text-xs">
        {title}
      </h4>
      <ul className="space-y-4 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href} 
              className="hover:text-cyan-electric transition-colors flex items-center gap-2 group"
            >
              <span className="w-1 h-1 bg-cyan-electric opacity-0 group-hover:opacity-100 transition-opacity" />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};