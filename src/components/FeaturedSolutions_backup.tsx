import React from 'react';
import { ArrowRight } from './Icons';

const FeaturedSolutions: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-900 text-white overflow-hidden" id="infraestructura">
      <div className="container mx-auto px-6">

        {/* Solution 1: Left Text, Right Image */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-3 py-1 border border-primary text-primary text-xs font-bold uppercase tracking-widest rounded-full">
              Enterprise Grade
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              TransformaciÃ³n Digital y Nube. <br />
              <span className="text-white text-2xl md:text-3xl italic block mt-2">Llevamos su Negocio al Futuro.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Infraestructura escalable, ciberseguridad proactiva y consultorÃ­a estratÃ©gica para el crecimiento continuo de su empresa.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Estrategia de MigraciÃ³n y GestiÃ³n Multi-Nube (Alineado con el crecimiento y la Nube).</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>IntegraciÃ³n de Servicios de IA y Machine Learning (Alineado con su misiÃ³n y enfoque en IA).</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>ModernizaciÃ³n de Data Center y VirtualizaciÃ³n (Alineado con infraestructura escalable y eficiencia).</span>
              </li>
            </ul>
            <button className="bg-transparent group flex items-center gap-2 text-white border-b-2 border-primary pb-1 hover:text-primary transition-colors font-semibold">
              Ver Casos de Ã‰xito
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
            <img
              src="https://picsum.photos/800/600?grayscale"
              alt="AI Server Rack"
              className="relative w-full rounded-lg shadow-2xl border border-gray-800 z-10"
            />
          </div>
        </div>

        {/* Solution 2: Right Text, Left Image (Reverse) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-3 py-1 border border-primary text-primary text-xs font-bold uppercase tracking-widest rounded-full">
              Cyber Defense
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Sentinel Core: <br />
              <span className="text-white">Defensa AutÃ³noma</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Nuestra plataforma de ciberseguridad utiliza algoritmos predictivos para identificar y neutralizar amenazas antes de que afecten su red. Sentinel Core aprende de cada ataque, fortaleciendo su perÃ­metro en tiempo real sin intervenciÃ³n humana.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="p-4 border border-gray-800 bg-gray-900/50 rounded-lg">
                <h4 className="text-2xl font-bold text-white mb-1">99.9%</h4>
                <p className="text-sm text-gray-400">Tasa de DetecciÃ³n</p>
              </div>
              <div className="p-4 border border-gray-800 bg-gray-900/50 rounded-lg">
                <h4 className="text-2xl font-bold text-white mb-1">&lt;10ms</h4>
                <p className="text-sm text-gray-400">Tiempo de Respuesta</p>
              </div>
            </div>

            <button className="bg-transparent group flex items-center gap-2 text-white border-b-2 border-primary pb-1 hover:text-primary transition-colors font-semibold">
              Solicitar demostraciÃ³n de seguridad
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-green-500/10 blur-3xl rounded-full"></div>
            <img
              src="https://picsum.photos/800/600?blur=2"
              alt="Cybersecurity Dashboard"
              className="relative w-full rounded-lg shadow-2xl border border-gray-800 z-10"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedSolutions;
