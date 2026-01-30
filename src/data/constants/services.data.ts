import { Eye, Camera, Fingerprint, Server } from 'lucide-react';
import { Service } from '../../domain/entities/Services';

export const services: Service[] = [
  {
    id: 'vigilancia',
    title: 'Vigilancia 24/7',
    description: 'Monitoreo continuo con personal certificado y altamente capacitado para garantizar la seguridad total de sus instalaciones.',
    icon: Eye
  },
  {
    id: 'cctv',
    title: 'Sistemas CCTV Avanzados',
    description: 'Cámaras de alta definición con visión nocturna, reconocimiento facial y almacenamiento seguro en la nube.',
    icon: Camera
  },
  {
    id: 'acceso',
    title: 'Control de Acceso Biométrico',
    description: 'Sistemas de última generación con lectura de huella, reconocimiento facial y tarjetas inteligentes encriptadas.',
    icon: Fingerprint
  },
  {
    id: 'remoto',
    title: 'Monitoreo Remoto',
    description: 'Supervisión en tiempo real desde cualquier dispositivo móvil con alertas instantáneas ante cualquier anomalía.',
    icon: Server
  }
];