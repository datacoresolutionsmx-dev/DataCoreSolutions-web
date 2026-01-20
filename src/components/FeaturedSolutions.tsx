import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from './Icons';
import Seccion1Image from '../assets/Seccion_1.png';
import Seccion2Image from '../assets/seccion_2.png';

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
              Transformación Digital y Nube. <br />
              <span className="text-white text-2xl md:text-3xl italic block mt-2">Llevamos su Negocio al Futuro.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Infraestructura escalable, ciberseguridad proactiva y consultoría estratégica para el crecimiento continuo de su empresa.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Estrategia de Migración y Gestión Multi-Nube (Alineado con el crecimiento y la Nube).</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Integración de Servicios de IA y Machine Learning (Alineado con su misión y enfoque en IA).</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Modernización de Data Center y Virtualización (Alineado con infraestructura escalable y eficiencia).</span>
              </li>
            </ul>
            <button className="bg-transparent group inline-flex items-center gap-2 text-white border-b-2 border-primary pb-1 hover:text-primary transition-colors font-semibold">
              Ver Casos de Éxito
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative max-w-lg w-full">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
              <img
                src={Seccion1Image}
                alt="Transformación Digital y Nube"
                className="relative w-full rounded-lg shadow-2xl border border-gray-800 z-10"
              />
            </div>
          </div>
        </div>

        {/* Solution 2: Right Text, Left Image (Reverse) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-3 py-1 border border-primary text-primary text-xs font-bold uppercase tracking-widest rounded-full">
              Cyber Defense
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Ciberseguridad Proactiva: <br />
              <span className="text-white text-2xl md:text-3xl italic block mt-2">Protegemos su Activo Digital (Destaca la acción y el valor).</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Mitigue el riesgo y asegure la continuidad. Construimos un ecosistema de seguridad de extremo a extremo: desde la prevención hasta la respuesta a incidentes, garantizando la integridad y transparencia de su información.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Servicios Gestionados 24/7 (MSSP): Monitoreo constante para neutralizar amenazas antes de que sucedan.</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Cumplimiento Normativo y Auditoría: Aseguramos la alineación con estándares globales y locales (e.g. ISO 27001).</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Pruebas de Penetración (Ethical Hacking): Identificamos vulnerabilidades y fortalecemos su postura de seguridad.</span>
              </li>
            </ul>

            <Link to="/contact" className="bg-transparent group inline-flex items-center gap-2 text-white border-b-2 border-primary pb-1 hover:text-primary transition-colors font-semibold">
              Contáctanos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative max-w-lg w-full">
              <div className="absolute -inset-4 bg-green-500/10 blur-3xl rounded-full"></div>
              <img
                src={Seccion2Image}
                alt="Ciberseguridad Proactiva"
                className="relative w-full rounded-lg shadow-2xl border border-gray-800 z-10"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedSolutions;