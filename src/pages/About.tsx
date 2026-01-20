import React from 'react';
import { Link } from 'react-router-dom';
import * as Lucide from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section - Asymmetric & Unique */}
            <section className="relative bg-white py-24 overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left Content */}
                        <div className="relative z-10">
                            <div className="inline-block px-3 py-1 mb-6 border-l-4 border-primary pl-4 text-sm font-bold uppercase tracking-widest text-gray-500">
                                DataCore
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                                Innovación que <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                                    Transforma
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                                Somos arquitectos de soluciones digitales, comprometidos con la excelencia y la creación de un futuro tecnológico sostenible.
                            </p>
                            <div className="flex items-center gap-4">
                                <Link to="/contact" className="px-10 py-4 bg-transparent border-2 border-primary hover:bg-primary text-primary hover:text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                                    Contáctanos
                                </Link>
                            </div>
                        </div>

                        {/* Right Image with Asymmetric Offset */}
                        <div className="relative">
                            {/* Decorative Offset Block */}
                            <div className="absolute -top-12 -right-12 w-full h-full bg-blue-50 -z-10 hidden lg:block"></div>
                            <div className="absolute -bottom-12 -left-12 w-2/3 h-2/3 bg-primary/10 -z-10 hidden lg:block"></div>

                            {/* Main Image */}
                            <div className="relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                                    alt="Team Collaboration"
                                    className="w-full h-auto shadow-2xl"
                                />
                                {/* Floating Badge */}
                                <div className="absolute -bottom-8 -left-8 bg-black text-white p-6 max-w-xs shadow-xl hidden md:block">
                                    <p className="text-2xl font-bold text-primary mb-1">10+</p>
                                    <p className="text-sm font-medium text-gray-300">Años de experiencia liderando el mercado.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Bento Grid Section - Reference Style (Gapless, Sharp, Tech Colors) */}
            <section className="bg-white">
                <div className="w-full max-w-[1920px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-0">

                        {/* 1. History / Intro - Large Block (Dark) - 2x2 */}
                        <div className="md:col-span-2 md:row-span-2 bg-neutral-900 p-10 md:p-16 flex flex-col justify-center text-white group relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="inline-block px-3 py-1 mb-6 border border-gray-700 text-xs font-bold uppercase tracking-widest text-gray-400">
                                    Nuestra Historia
                                </div>
                                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                    Futuro <span className="text-primary">Digital</span>.
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                                    Desde 2022, cerramos la brecha entre necesidades empresariales y tecnología avanzada.
                                </p>
                                <div className="mt-8 flex items-center gap-4">
                                    <span className="text-sm font-bold tracking-wider uppercase border-b border-primary pb-1">Leer Más</span>
                                    <Lucide.ArrowRight className="w-5 h-5 text-primary" />
                                </div>
                            </div>
                            {/* Subtle Pattern Background */}
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
                        </div>

                        {/* 2. Tech Image 1 - Vertical - 1x2 */}
                        <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
                                alt="Server Infrastructure"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <h3 className="text-2xl font-bold">Infraestructura</h3>
                            </div>
                        </div>

                        {/* 3. Mission - Square (Primary Blue) - 1x1 */}
                        <div className="md:col-span-1 md:row-span-1 bg-primary p-10 flex flex-col justify-between text-white group hover:bg-blue-700 transition-colors">
                            <Lucide.Target className="w-12 h-12 text-white/90" />
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Misión</h3>
                                <p className="text-blue-100 text-sm leading-relaxed">
                                    Ofrecer soluciones integrales en tecnologías de la información, comercio electrónico y servicios especializados, impulsando el crecimiento de nuestros clientes mediante innovación, eficiencia y el uso estratégico de la inteligencia artificial.
                                </p>
                            </div>
                        </div>

                        {/* 4. Vision - Square (White) - 1x1 */}
                        <div className="md:col-span-1 md:row-span-1 bg-white p-10 flex flex-col justify-between text-gray-900 group hover:bg-gray-50 transition-colors">
                            <Lucide.Eye className="w-12 h-12 text-primary" />
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Visión</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Ser el socio estratégico líder en transformación digital, reconocidos por nuestra capacidad para anticipar el futuro tecnológico y democratizar el acceso a soluciones de inteligencia artificial y comercio electrónico que redefinen los estándares de la industria.
                                </p>
                            </div>
                        </div>

                        {/* 5. Values - Wide (Dark Blue) - 2x1 */}
                        <div className="md:col-span-2 md:row-span-1 bg-[#1E1B36] p-10 flex flex-col justify-center text-white group hover:bg-[#252142] transition-colors">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-3xl font-bold">Nuestros Valores</h3>
                                <Lucide.Award className="w-8 h-8 text-blue-400" />
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {['Innovación constante', 'Transparencia y confianza', 'Servicio personalizado y humano', 'Excelencia operativa', 'Integridad y responsabilidad', 'Adaptación tecnológica continua'].map((val) => (
                                    <span key={val} className="text-sm font-medium text-blue-200/80">
                                        • {val}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 6. Tech Image 2 - Square - 1x1 */}
                        <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                                alt="Hardware"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                        </div>

                        {/* 7. Tech Image 3 - Square - 1x1 */}
                        <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
                                alt="Team"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>

                        {/* 8. Tech Image 4 - Wide - 2x1 */}
                        <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                                alt="Collaboration"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-2xl font-bold text-white">Trabajo en Equipo</h3>
                            </div>
                        </div>

                        {/* 9. Tech Image 5 - Wide - 2x1 */}
                        <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
                                alt="Global Tech"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-900/80 mix-blend-multiply"></div>
                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-2xl font-bold text-white">Innovación Global</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Partners Experience - Fondo Blanco */}
            <section className="py-24 bg-white relative z-10">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experiencia de los Socios</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Liderazgo experto para guiar su transformación digital.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { role: "CEO & Fundador", exp: "+15 años en Gestión TI" },
                            { role: "CTO", exp: "+12 años en Arquitectura Cloud" },
                            { role: "Director de Operaciones", exp: "+10 años en Ciberseguridad" },
                            { role: "Líder de Innovación", exp: "+8 años en IA y Big Data" }
                        ].map((partner, index) => (
                            <div key={index} className="group bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                                <div className="w-20 h-20 bg-gray-50 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                    <Lucide.Briefcase className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.role}</h3>
                                <p className="text-primary font-medium">{partner.exp}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
