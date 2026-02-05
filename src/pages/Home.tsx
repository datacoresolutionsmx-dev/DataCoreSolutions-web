import React from 'react';
import Hero from '../components/Hero';
import ValueProposition from '../components/ValueProposition';
import FeaturedSolutions from '../components/FeaturedSolutions';
import WorkMethodology from '../components/WorkMethodology';
import CallToAction from '../components/CallToAction';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <ValueProposition />
            <FeaturedSolutions />
            <WorkMethodology />
            <CallToAction />
        </>
    );
};

export default Home;
