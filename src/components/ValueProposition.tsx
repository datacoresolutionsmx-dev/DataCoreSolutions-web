import React from 'react';
import { SOLUTIONS_DATA } from '../constants';
import { ServerIcon, BrainIcon, ShieldIcon } from './Icons';

const ValueProposition: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'server': return <ServerIcon className="w-10 h-10" />;
      case 'brain': return <BrainIcon className="w-10 h-10" />;
      case 'shield': return <ShieldIcon className="w-10 h-10" />;
      default: return <ServerIcon className="w-10 h-10" />;
    }
  };

  return (
    <section className="py-24 bg-white relative z-10" id="soluciones">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Potencia para el Mañana</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestros pilares fundamentales garantizan que su empresa esté preparada para los desafíos digitales más exigentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOLUTIONS_DATA.map((item, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 p-4 bg-white rounded-lg inline-block text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {item.description}
              </p>
              <a href="#" className="inline-flex items-center text-primary font-semibold hover:underline">
                Saber más <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;