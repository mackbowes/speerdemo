import React from 'react';

import Section from '../../components/Section'; // Wrapper that defines section level colors, bg = background, color = text color, also takes an optional 'id' prop for id
import Fullscreen from '../../components/Fullscreen'; // Optional wrapper that makes the section fullscreen, 100vw/100vh
import GridWrap from '../../components/GridWrap'; // Reusable Grid Container, takes height & width as props
import Review from '../../components/Review';
import Title from '../../components/Title';
import Nav from './Nav';

export default function Reviews() {

    const PageContent = () => {
        let vw = window.innerWidth;

        let grid = {};
        let innerGrid = {};
        let wrapper = {};
        let justifyLeft = {};

        if (vw < 800) { // Mobile First
            grid = {
                display: `grid`,
                gridTemplateColumns: `1fr`,
                gridTemplateRows: `1fr`,
            }
            innerGrid = {
                display: `grid`,
                gridTemplateColumns: `1fr`,
                gridTemplateRows: `1fr`,
            }
            wrapper = {
                padding: `0 5vw`,
            }
        } else {
            grid = {
                display: `grid`,
                gridTemplateColumns: `1fr 3fr`,
                gridTEmplateRows: `1fr`,

            }
            innerGrid = {
                display: `grid`,
                gridTemplateColumns: `1fr 1fr 1fr`,
                gridTemplateRows: `1fr`,
                gridGap: `2.5vw`,
                justifyItems: `center`,
            }
            wrapper = {
                padding: `0 0 0 5vw`,
            }
            justifyLeft = {
                justifyItems: `start`,
                justifySelf: `start`,
                textAlign: `left`,
                padding: `0 5vw`,
            }
        }

        return(
            <div style={wrapper}>
            <div style={grid}>
                <div>
                    <img src="/Speakers.png"></img>
                </div>
                <div style={justifyLeft}>
                    <Title color="var(--white)"><h2>REVIEWS</h2></Title>
                    <div style={innerGrid}>
                        <Review 
                        person="Artist" 
                        review="Love it, it's the best. I can't live without it!"/>
                        <Review 
                        person="Producer" 
                        review="Love it, it's the best. I can't live without it!"/>
                        <Review 
                        person="Music Fan" 
                        review="Love it, it's the best. I can't live without it!"/>
                    </div>
                </div>
            </div>
            </div>
        )
    }

    return(
        <Section
        bg="var(--blue)"
        color="var(--black)">
            <Nav textColor="var(--blue)" />
            <Fullscreen>
                <GridWrap height="100vh">
                    <PageContent />
                </GridWrap>
            </Fullscreen>
        </Section>
    )
}