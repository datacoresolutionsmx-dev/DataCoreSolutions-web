import React from 'react';
import Hero from '../components/Hero';
import ValueProposition from '../components/ValueProposition';
import FeaturedSolutions from '../components/FeaturedSolutions';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <ValueProposition />
            <FeaturedSolutions />
            <Testimonials />
            <CallToAction />
        </>
    );
};

export default Home;
