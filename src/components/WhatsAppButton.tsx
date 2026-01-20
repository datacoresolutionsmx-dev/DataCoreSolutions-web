import React from 'react';
import * as Lucide from 'lucide-react';
const MessageCircle = Lucide.MessageCircle;

const WhatsAppButton: React.FC = () => {
    const phoneNumber = "1234567890"; // Remplazar con el número de WhatsApp
    const message = "Hola, me gustaría obtener más información sobre sus servicios.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />
            <span className="absolute right-full mr-4 bg-white text-gray-900 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
                Contáctanos
            </span>
        </a>
    );
};

export default WhatsAppButton;
