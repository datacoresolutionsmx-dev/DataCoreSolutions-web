import React from 'react';
import { ShieldCheck, Cpu, Handshake } from 'lucide-react';

const WorkMethodology: React.FC = () => {
    return (
        <section className="py-24 bg-gray-100 border-t border-gray-200" id="metodologia">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Nuestra forma de trabajar
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Soluciones de TI claras, seguras y escalables para empresas en crecimiento.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: Seguridad desde el inicio */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
                        <ShieldCheck className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Seguridad desde el inicio</h3>
                        <p className="text-gray-600 flex-grow">
                            Integramos seguridad en cada solución para proteger la información, controlar accesos y garantizar la continuidad operativa desde el primer momento.
                        </p>
                    </div>

                    {/* Card 2: Tecnología que aporta valor */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
                        <Cpu className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Tecnología que aporta valor</h3>
                        <p className="text-gray-600 flex-grow">
                            Implementamos soluciones tecnológicas alineadas a las necesidades reales del negocio, priorizando eficiencia, escalabilidad y estabilidad operativa.
                        </p>
                    </div>

                    {/* Card 3: Acompañamiento continuo */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
                        <Handshake className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Acompañamiento continuo</h3>
                        <p className="text-gray-600 flex-grow">
                            Brindamos acompañamiento técnico durante la planeación, implementación y soporte de cada solución, construyendo relaciones de largo plazo.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WorkMethodology;
