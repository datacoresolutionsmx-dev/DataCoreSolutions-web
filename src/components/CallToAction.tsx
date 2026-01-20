import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          ¿Listo para escalar su infraestructura?
        </h2>
        <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10">
          Únase a las empresas Fortune 500 que confían en Data Core Solutions para proteger sus activos más valiosos e impulsar su innovación.
        </p>
        <button className="bg-white text-primary font-bold py-4 px-12 rounded-lg text-lg shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl">
          Comenzar Transformación
        </button>
      </div>
    </section>
  );
};

export default CallToAction;