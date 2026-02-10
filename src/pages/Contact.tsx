import React from 'react';
import * as Lucide from 'lucide-react';
const { Mail, Phone, MapPin, Send } = Lucide;

const Contact: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section - Dark Background with Image */}
            <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white py-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
                        alt="Contact Us - Communication"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-xl">
                            Contáctanos
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto drop-shadow-md">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300 font-semibold">
                                Estamos listos para escuchar sus necesidades y comenzar a construir el futuro de su empresa.
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information Section - White Background */}
            <section className="py-24 bg-white relative z-10">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Información de Contacto</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Nuestro equipo está disponible para atender sus consultas y brindarle la mejor asesoría.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="group bg-gray-50 border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="mb-4 p-4 bg-white rounded-lg inline-block shadow-sm">
                                <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Correo Electrónico</h3>
                            <p className="text-gray-600 mb-1">datacoresolutionsmx@gmail.com</p>
                            <p className="text-gray-600">jperez@datacoremx.com</p>
                        </div>

                        <div className="group bg-gray-50 border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="mb-4 p-4 bg-white rounded-lg inline-block shadow-sm">
                                <Phone className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Teléfono</h3>
                            <p className="text-gray-600 mb-1">442229 0904</p>
                        </div>

                        <div className="group bg-gray-50 border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="mb-4 p-4 bg-white rounded-lg inline-block shadow-sm">
                                <MapPin className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Ubicación</h3>
                            <p className="text-gray-600 mb-1">BOULEVARD BERNARDO QUINTANA 7001 TORRE 1 815 COL. CENTRO SUR QUERÉTARO QRO. C.P. 76090.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section - Light Gray Background */}
            <section className="py-24 bg-gray-50 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Envíanos un Mensaje</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Complete el formulario y nos pondremos en contacto con usted a la brevedad posible.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-lg">
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
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                                    <input type="tel" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="+52 (55) 1234-5678" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                                    <textarea rows={5} className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Cuéntenos cómo podemos ayudarle..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2">
                                    Enviar Mensaje
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
