import React from 'react';
import Hero from './Sections/Hero';
import Music from './Sections/Music';
import HoverReveal from './Sections/HoverReveal';
import Perks from './Sections/Perks';
import Reviews from './Sections/Reviews';
import FinalCTA from './Sections/FinalCTA';
import Footer from './Sections/Footer';

export default function Home() {

    let fullWidth = window.innerWidth;
    let styles = {
        maxWidth: fullWidth,
        overflowX: `hidden`
    }

    return(
        <div style={styles}>
            <Hero />
            <Music />
            <HoverReveal />
            <Perks />
            <Reviews />
            <FinalCTA />
            <Footer />
        </div>
    )
}