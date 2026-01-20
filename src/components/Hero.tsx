import React from 'react';
import Fondo1 from '../assets/fondo_1.png';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={Fondo1}
          alt="Tech Network Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40"></div>
        {/* Abstract tech lines */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(34, 114, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 114, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center mt-16 md:mt-0">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-6 leading-tight">
          INNOVACIÓN <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
            SIN LÍMITES
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          Potenciando el futuro empresarial con infraestructura de IA de próxima generación y ciberseguridad inquebrantable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button className="w-full sm:w-auto bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl hover:shadow-primary/30">
            Explorar Soluciones
          </button>
          <button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
            Contactar Ventas
          </button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;