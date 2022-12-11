import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Hero />
            <Skills />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;