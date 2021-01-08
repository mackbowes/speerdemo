import React from 'react';

import Section from '../../components/Section';
import GridWrap from '../../components/GridWrap';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Button from '../../components/Button';
import Nav from './Nav';

export default function FinalCTA() {

    let vw = window.innerWidth;
    let grid = {};

    if (vw < 800) {
        grid = {
            display: `grid`,
            gridTemplateColumns: `1fr`,
            margin: `25vh 5vw`,
        }
    } else {
        grid = {
            display: `grid`,
            gridTemplateColumns: `2fr 1fr`,
            padding: `25vh 10vw`,
            alignItems: `center`,
            justifyItems: `start`,
            textAlign: `left`,
            width:`100%`,
        }
    }

    const PageContent = () => {

        return(
            <div style={grid}>
                <div>
                    <Title color="var(--red)"><h2>Get EXP|CON Now</h2></Title>
                    <Subtitle size="2.5rem" weight="500" color="var(--white)">Purchase and download the app.</Subtitle>
                </div>
                <div><Button href="/pricing" isColorful="true">Try It Now</Button></div>
            </div>
        )
    }

    return(
        <Section bg="var(--black)">
            <Nav 
            displayButton="false"/>
            <GridWrap width="100vw">
                <PageContent />
            </GridWrap>
        </Section>
    )
}