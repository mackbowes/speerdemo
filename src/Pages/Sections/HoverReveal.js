import React from 'react';

import Section from '../../components/Section'; // Wrapper that defines section level colors, bg = background, color = text color, also takes an optional 'id' prop for id
import Fullscreen from '../../components/Fullscreen'; // Optional wrapper that makes the section fullscreen, 100vw/100vh
import GridWrap from '../../components/GridWrap'; // Reusable Grid Container, takes height & width as props
import Title from '../../components/Title'; // Reusable Title stylings, pass a <h2-6> tag or <p>
import Subtitle from '../../components/Subtitle'; // Reusable Subtitle stylings, pass a <h2-6> tag or <p>
import Button from '../../components/Button'; // Clicky button component, pass raw text as child, href, bg, color, size, width, and target as props
import Nav from './Nav';

export default function HoverReveal() {

    let vw = window.innerWidth; // Used for a conditional later
    let breakpoint = 800; // Used for a conditional later

    let grid = {}; // contents declared in a conditional later


    let justifyLeft = { // Left Align children
        justifySelf: `start`,
        width: `40vw`,
        alignSelf: `center`,
        alignItems: `center`
    }

    let justifyRight = { // Right Align children
        justifySelf: `end`,
        maxWidth: `100%`,
        alignSelf: `center`,
        alignItems: `center`
    }

    
        if (vw < breakpoint) {
            grid = { // Mobile Styling
                display: `grid`,
                gridTemplateColumns: `1fr`, // Single Column Mobile
                gridTemplateRows: `1fr`,
                width: `100vw`,
                padding: `0 5vw`,
                alignItems: `center`,
            };

        } else { 
            grid = {
                display: `grid`,
                gridTemplateColumns: `1fr 2fr`, // 3 part grid, big part right
                gridTemplateRows: `1fr`,
                width: `100vw`,
                padding: `0 10vw`, // This is the part that changes between Desktop & Mobile
                alignItems: `center`,
            }
        }


    const PageContent = () => { // Edit Content Here
        return(
        <div style={grid}>
        {/* YELLOW Section that reveals some image around the cursor & inverts text */}
        <div style={justifyLeft}>
            {/* Cut Through Background somehow??? */}
        </div>
        <div>
        <Title><h2>Front Row Seats</h2></Title> {/* Transform to uppercase */}
        <Subtitle 
        color="var(--black)" 
        weight="500" //Optional Prop, defaults to 300
        size="3rem" //Optional Prop, defaults to 200
        lineHeight="1" //Optional Prop, defaults to 1.5
        >
        <h3>Experience concerts up close and personal.</h3></Subtitle>
        <Button 
        bg="var(--white)" 
        color="var(--yellow)" 
        width="20vw" // Optional Prop, defaults to inherit
        size="1.5rem" // Optional Prop, defaults to 1rem
        radius="3rem" // Optional Prop, defaults to 2rem. PLEASE use if setting 'Size' larger than 1rem.
        href="/pricing"
        >See Demo</Button>
        </div>
        </div>
        )
    }
    return(
        <Section bg="var(--yellow)" color="var(--white)" id="reveal">
            <Fullscreen>
                <Nav textColor="var(--yellow)" />
                <GridWrap height="100vh" textAlign="left">
                    <PageContent/>
                </GridWrap>
            </Fullscreen>
        </Section>
    )
}