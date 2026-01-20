import React from 'react';
import * as Lucide from 'lucide-react';

const {
    Cloud, Shield, Network, Globe, Video, Database, Wifi,
    Brain, Zap, Lock, Server, Settings, Monitor, Code,
    Cpu
} = Lucide;

const services = [
    {
        icon: <Brain className="w-12 h-12" />,
        title: "Inteligencia Artificial",
        description: "IA avanzada para automatización y optimización con IA."
    },
    {
        icon: <Shield className="w-12 h-12" />,
        title: "Ciberseguridad",
        description: "Protección integral con detección, respuesta y prevención."
    },
    {
        icon: <Database className="w-12 h-12" />,
        title: "Datos",
        description: "Gestión, análisis e integración de información empresarial."
    },
    {
        icon: <Monitor className="w-12 h-12" />,
        title: "Equipo de cómputo",
        description: "Dispositivos empresariales confiables y de alto rendimiento."
    },
    {
        icon: <Network className="w-12 h-12" />,
        title: "Comunicaciones",
        description: "Voz, vídeo, colaboración y comunicación unificada."
    },
    {
        icon: <Cloud className="w-12 h-12" />,
        title: "Nube pública y privada",
        description: "Infraestructura en la nube segura y optimizada para tu empresa."
    },
    {
        icon: <Code className="w-12 h-12" />,
        title: "Desarrollo de software",
        description: "Aplicaciones personalizadas y soluciones digitales a medida."
    },
    {
        icon: <Wifi className="w-12 h-12" />,
        title: "Conectividad",
        description: "Redes robustas, WiFi administrado y tecnologías WAN."
    },
    {
        icon: <Server className="w-12 h-12" />,
        title: "Sistemas de información",
        description: "Plataformas robustas para la gestión operativa, financiera."
    },
    {
        icon: <Zap className="w-12 h-12" />,
        title: "Soluciones de energía",
        description: "Sistemas de energía eficientes mediante respaldo continuo."
    },
    {
        icon: <Video className="w-12 h-12" />,
        title: "Audio y Video",
        description: "Integración profesional de colaboración audiovisual."
    },
    {
        icon: <Globe className="w-12 h-12" />,
        title: "Internet",
        description: "Conectividad empresarial de alto rendimiento, confiable y segura."
    },
    {
        icon: <Lock className="w-12 h-12" />,
        title: "Seguridad física",
        description: "Control de acceso y soluciones integrales de vigilancia."
    },
    {
        icon: <Settings className="w-12 h-12" />,
        title: "Servicios Administrados",
        description: "Gestión del entorno tecnológico con soporte especializado."
    },
    {
        icon: <Cpu className="w-12 h-12" />,
        title: "Soluciones de productividad",
        description: "Mejora la eficiencia con plataformas colaborativas avanzadas."
    }
];

const Services: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section - Imagen clara sin difuminado */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black">
                {/* Background Image - Clara y nítida de Pexels */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1920"
                        alt="Technology Infrastructure"
                        className="w-full h-full object-cover opacity-70"
                    />
                    {/* Overlay oscuro solo en la parte inferior para legibilidad del texto */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-6 text-center py-20">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
                        Nuestras soluciones avanzadas
                    </h1>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300 font-semibold">
                            Transformamos su infraestructura tecnológica con soluciones empresariales de vanguardia.
                        </span>
                    </p>
                </div>
            </section>

            {/* Services Grid Section - Fondo gris claro para mejor contraste */}
            <section className="py-24 bg-gray-50 relative z-10">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Soluciones Integrales para su Empresa
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Ofrecemos una amplia gama de servicios tecnológicos diseñados para impulsar la transformación digital de su organización.
                        </p>
                    </div>

                    {/* Grid de servicios 4x4 con mejor contraste */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                {/* Icon */}
                                <div className="mb-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg inline-block text-primary shadow-sm group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-blue-600 group-hover:text-white transition-all duration-300">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
