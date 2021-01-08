import React from 'react';
import Footer from './Sections/Footer';
import Perks from './Sections/Perks';
import PricingSection from './Sections/PricingSection';

export default function Pricing() {

    return(
        <>
        <PricingSection />
        <Perks bg="var(--red)" color="var(--white)" pcolor="var(--black)"/>
        <Footer />
        </>
    )
}