import React from 'react';
import * as Lucide from 'lucide-react';
const { CheckCircle2 } = Lucide;

const Consulting: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Header Section - Fondo Oscuro con Imagen */}
            <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white py-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                        alt="IT Consulting & Analytics"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-xl">
                            Consultoría y Soluciones
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto drop-shadow-md">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300 font-semibold">
                                Asesoramiento experto para optimizar sus recursos tecnológicos y alinear la TI con sus objetivos de negocio.
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Methodology Section - Fondo Blanco */}
            <section className="py-24 bg-white relative z-10">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestra Metodología</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Un enfoque estructurado y probado para transformar su infraestructura tecnológica.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Análisis profundo",
                                description: "Evaluación completa de la infraestructura actual y necesidades del negocio."
                            },
                            {
                                title: "Identificación de oportunidades",
                                description: "Detección de cuellos de botella, vulnerabilidades y áreas de mejora."
                            },
                            {
                                title: "Diseño de arquitectura",
                                description: "Creación de soluciones escalables, seguras y alineadas con objetivos."
                            },
                            {
                                title: "Implementación ágil",
                                description: "Despliegue eficiente con gestión del cambio y mínima interrupción."
                            },
                            {
                                title: "Monitoreo continuo",
                                description: "Supervisión constante del rendimiento y optimización proactiva."
                            },
                            {
                                title: "Soporte especializado",
                                description: "Acompañamiento experto durante todo el ciclo de vida de la solución."
                            }
                        ].map((item, index) => (
                            <div key={index} className="group bg-gray-50 border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                <div className="mb-4 p-3 bg-white rounded-lg inline-block shadow-sm">
                                    <CheckCircle2 className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study Section - Fondo Oscuro */}
            <section className="py-24 bg-neutral-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="inline-block mb-6 px-4 py-2 border border-primary text-primary text-xs font-bold uppercase tracking-widest rounded-full">
                            Caso de Éxito
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            Transformación Cloud: Reducción del 40% en Costos Operativos
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Ayudamos a una empresa líder en logística a reducir sus costos operativos en un 40% mediante la migración a una arquitectura serverless, mejorando la disponibilidad del servicio al 99.99%.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 border border-gray-800 bg-gray-900/50 rounded-lg">
                                <h4 className="text-3xl font-bold text-white mb-2">40%</h4>
                                <p className="text-sm text-gray-400">Reducción de costos</p>
                            </div>
                            <div className="p-6 border border-gray-800 bg-gray-900/50 rounded-lg">
                                <h4 className="text-3xl font-bold text-white mb-2">99.99%</h4>
                                <p className="text-sm text-gray-400">Disponibilidad del servicio</p>
                            </div>
                            <div className="p-6 border border-gray-800 bg-gray-900/50 rounded-lg">
                                <h4 className="text-3xl font-bold text-white mb-2">3 meses</h4>
                                <p className="text-sm text-gray-400">Tiempo de implementación</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diagnostic Form Section - Fondo Blanco */}
            <section className="py-24 bg-white relative z-10" id="diagnostico">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Solicite un Diagnóstico Inicial</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Obtenga un análisis gratuito de su infraestructura tecnológica y descubra oportunidades de mejora.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-10 rounded-3xl border border-gray-200 shadow-lg">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                                        <input type="text" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Juan Pérez" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                                        <input type="text" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Nombre de su empresa" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                                    <input type="email" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="juan@empresa.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Área de Interés</label>
                                    <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
                                        <option>Infraestructura</option>
                                        <option>Ciberseguridad</option>
                                        <option>Desarrollo de Software</option>
                                        <option>Consultoría General</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Descripción del Desafío</label>
                                    <textarea rows={4} className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Describa brevemente sus necesidades..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl hover:shadow-primary/30">
                                    Solicitar Diagnóstico Gratuito
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Consulting;
