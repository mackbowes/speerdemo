import React from 'react';

import Nav from './Nav';
import Section from '../../components/Section'; // Wrapper that defines section level colors, bg = background, color = text color, also takes an optional 'id' prop for id
import Fullscreen from '../../components/Fullscreen'; // Optional wrapper that makes the section fullscreen, 100vw/100vh
import GridWrap from '../../components/GridWrap'; // Reusable Grid Container, takes height & width as props
import Title from '../../components/Title'; // Reusable Title stylings, pass a <h2-6> tag or <p>
import Subtitle from '../../components/Subtitle'; // Reusable Subtitle stylings, pass a <h2-6> tag or <p>
import Button from '../../components/Button'; // Clicky button component, pass raw text as child, href, bg, color, size, width, and target as props


export default function Hero() {



    return(
    <Section bg="var(--black)" color="var(--white)" id="hero">
    <Nav 
    displayButton="false"/>
        <Fullscreen>
        <GridWrap height="80vh">
            <div> {/* Centers elements in the grid */}
                <Title><h1>Interactive Concert Experience</h1></Title>
                <Subtitle width="40vw" height="10vh"><h2>Experience your favourite artists like never before and from the comfort of your own home.</h2></Subtitle> {/* Long Line Alert! */}
                <Button href="/pricing" bg="white" color="black" size="1.25rem" isColorful="true">Try It Now</Button> 
                {/* But make it colorful :) */}
            </div>
        </GridWrap>
        </Fullscreen>
    </Section>
  )
}