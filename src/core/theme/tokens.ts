/**
 * Colores del tema
 * IMPORTANTE: Estos deben estar sincronizados con tailwind.config.js
 */
export const colors = {
  charcoal: '#0a0a0a',
  'cyan-electric': '#00E5FF',
  'gray-light': '#e5e7eb',
} as const;

/**
 * Sombras personalizadas
 */
export const shadows = {
  'cyan-glow': '0 0 30px rgba(0, 229, 255, 0.2)',
} as const;

/**
 * Breakpoints responsive
 */
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

/**
 * Espaciados comunes
 */
export const spacing = {
  section: {
    sm: 'py-16',
    md: 'py-24',
    lg: 'py-32',
  },
  container: 'max-w-7xl mx-auto px-6',
} as const;