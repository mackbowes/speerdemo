import React from 'react';

import Section from '../../components/Section'; // Wrapper that defines section level colors, bg = background, color = text color, also takes an optional 'id' prop for id
import Fullscreen from '../../components/Fullscreen'; // Optional wrapper that makes the section fullscreen, 100vw/100vh
import GridWrap from '../../components/GridWrap'; // Reusable Grid Container, takes height & width as props
import Title from '../../components/Title'; // Reusable Title stylings, pass a <h2-6> tag or <p>
import Subtitle from '../../components/Subtitle'; // Reusable Subtitle stylings, pass a <h2-6> tag or <p>
import Button from '../../components/Button'; // Clicky button component, pass raw text as child, href, bg, color, size, width, and target as props
import MusicPlayer from '../../components/MusicPlayer';
import Nav from './Nav';


export default function Music() {

    let vw = window.innerWidth; 
    let breakpoint = 800;

    let grid = {}; // Empty Styling Object gets filled after a conditional

    if (vw > breakpoint) {
        grid = {
            display: `grid`,
            gridTemplateColumns: `2fr 1fr`,
            gridTemplateRows: `1fr`,
            width: `100vw`,
            padding: `0 10vw`,
        }
    } else {
        grid = {
            display: `grid`,
            gridTemplateColumns: `1fr`,
            gridTemplateRows: `1fr`,
            width: `100vw`,
            padding: `0 5vw`,
        }
    }

    let justifyLeft = {
        justifySelf: `start`,
        width: `100%`,
        alignSelf: `center`,
        alignItems: `center`
    }

    let justifyRight = {
        justifySelf: `end`,
        maxWidth: `100%`
    }




    const PageContent = () => { // Edit Content Here    
        
        return(
            <div style={grid}>
                <div style={justifyLeft}>
                <Title><h2>Superior Sound</h2></Title>
                <Subtitle width="80%" margin="0"><h3>Experience Live Versions of your Favourite Songs</h3></Subtitle>
                <Button 
                bg="var(--white)" 
                color="var(--red)" 
                width="20vw"
                size="1.5rem" 
                radius="3rem" 
                href="#"
                >See Demo</Button>
                </div>
                <div style={justifyRight}>
                
                    <MusicPlayer />
                </div>  
            </div>
        )
    }
    

    return(
        <Section bg="var(--red)" color="var(--white)" id="music">
            <Fullscreen>
            <Nav color="var(--white)" textColor="var(--red)"/>
            <GridWrap height="100vh" textAlign="left">
                <PageContent />
            </GridWrap>
            </Fullscreen>
        </Section>
    )
}