import React from 'react';
import { Logo } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Logo className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold tracking-tight">Data Core Solutions</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Líderes globales en soluciones de infraestructura, IA y ciberseguridad. Construyendo el futuro, hoy.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Soluciones</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">Compute & Servers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Almacenamiento de Datos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Inteligencia Artificial</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Edge Computing</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Inversores</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Noticias</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Ventas: +1 (555) 123-4567</li>
              <li>Soporte: support@datacoresolutions.com</li>
              <li>Calle Tecnológica 101, Ciudad Futura</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              {/* Social Placeholders */}
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-xs">LN</div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-xs">TW</div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-xs">YT</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2025 Data Core Solutions. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacidad</a>
            <a href="#" className="hover:text-gray-400">Términos</a>
            <a href="#" className="hover:text-gray-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;