import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const MainLayout: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-black text-gray-900 selection:bg-primary selection:text-white">
            <Header />
            <main className="w-full">
                <Outlet />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default MainLayout;
