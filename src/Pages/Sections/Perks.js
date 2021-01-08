import React from 'react';

import Section from '../../components/Section'; // Wrapper that defines section level colors, bg = background, color = text color, also takes an optional 'id' prop for id
import Fullscreen from '../../components/Fullscreen'; // Optional wrapper that makes the section fullscreen, 100vw/100vh
import GridWrap from '../../components/GridWrap'; // Reusable Grid Container, takes height & width as props
import Title from '../../components/Title'; // Reusable Title stylings, pass a <h2-6> tag or <p>
import ColoredSubtitle from '../../components/ColoredSubtitle';
import Subtitle from '../../components/Subtitle';
import Nav from './Nav';

export default function Perks(props) {

    let bg = `var(--black)`;
    if (typeof props.bg != "undefined") {
        bg = props.bg;
    }

    const PageContent = props => {

        let vw = window.innerWidth;
        let breakpoint = 800;

        let grid = {};
        let wrapper = {};

        let size = `3rem`; //declare repeated values once
        let mSize = `2rem`;
        let weight = `700`;
        let pWeight = `400`;

        if (vw < breakpoint) { // Mobile First
            wrapper = {
                padding: `0 5vw`,
            }
            grid = {
                display: `grid`,
                gridTemplateColumns: `1fr`,
            }
        } else {
            wrapper = {
                padding: `0 7.5vw`,
            }
            grid = {
                display: `grid`,
                gridTemplateColumns: `1fr 1fr 1fr`,
                columnGap: `2.5vw`,
            }
        }

        return(
            <>
            {/* BLACK Perks Section */}
            <div style={wrapper}>
            <Title><h2>PERKS</h2></Title>
            <div style={grid}>
                <div>
                    <ColoredSubtitle // Component that functions like previously seen Subtitle but includes a colored line above
                    color={props.color || `var(--red)`}
                    weight={weight}
                    size={size}
                    mSize={mSize}>
                        <h2>Subscription Payment Model</h2>
                    </ColoredSubtitle>
                    <Subtitle
                    weight={pWeight}
                    color={props.pcolor || `var(--white)`}>
                        <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </Subtitle>
                </div>
                <div>
                    <ColoredSubtitle
                    color={props.color || `var(--blue)`}
                    weight={weight}
                    size={size}
                    mSize={mSize}>
                        <h2>No Fee Cancellation Policy</h2>
                    </ColoredSubtitle>
                    <Subtitle
                    weight={pWeight}
                    color={props.pcolor || `var(--white)`}>
                        <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </Subtitle>
                </div>
                <div>
                    <ColoredSubtitle
                    color={props.color || `var(--yellow)`}
                    weight={weight}
                    size={size}
                    mSize={mSize}>
                        <h2>Subscription Payment Model</h2>
                    </ColoredSubtitle>
                    <Subtitle
                    weight={pWeight}
                    color={props.pcolor || `var(--white)`}>
                        <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                    </Subtitle>
                </div>
            </div>
            </div>
            </>
        )
    }

    return(
        <Section
        bg={bg}
        color="var(--white)"
        id="perks"
        >
            <Fullscreen>
                <Nav/>
                <GridWrap 
                height="100vh" 
                justify="start"
                textAlign="left">
                    <PageContent color={props.color} pcolor={props.pcolor}/>
                </GridWrap>
            </Fullscreen>
        </Section>
    )
}