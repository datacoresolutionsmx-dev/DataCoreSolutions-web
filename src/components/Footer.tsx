import { Link } from 'react-router-dom';
import { Logo } from './Icons';
import { NAV_LINKS } from '../constants';

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
              <li><Link to="/servicios" className="hover:text-primary transition-colors">Compute & Servers</Link></li>
              <li><Link to="/servicios" className="hover:text-primary transition-colors">Almacenamiento de Datos</Link></li>
              <li><Link to="/servicios" className="hover:text-primary transition-colors">Inteligencia Artificial</Link></li>
              <li><Link to="/servicios" className="hover:text-primary transition-colors">Edge Computing</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Telefono: 442229 0904</li>
              <li>Correo: datacoresolutionsmx@gmail.com</li>
              <li>BOULEVARD BERNARDO QUINTANA 7001 TORRE 1 815 COL. CENTRO SUR QUERÉTARO QRO. C.P. 76090.</li>
            </ul>

          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2026 Data Core Solutions. Todos los derechos reservados.</p>
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