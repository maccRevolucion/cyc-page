import React from 'react';

export const SocialLinks: React.FC = () => {
  const socialLinks = [
    { 
      name: 'Facebook', 
      label: 'FB', 
      url: 'https://www.facebook.com/profile.php?id=61585919020517' 
    },
    { 
      name: 'X / Twitter', 
      label: 'X', 
      url: 'https://x.com/CCSecur1ty' 
    },
    { 
      name: 'Instagram', 
      label: 'IG', 
      url: 'https://www.instagram.com/cycsecur1ty' 
    }
  ];

  return (
    <div className="flex gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 border border-white/10 flex items-center justify-center hover:border-cyan-electric hover:text-cyan-electric transition-colors"
          aria-label={social.name}
        >
          <span className="text-xs">{social.label}</span>
        </a>
      ))}
    </div>
  );
};