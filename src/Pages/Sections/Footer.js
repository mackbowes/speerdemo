import React from 'react';
import {Icon} from '@chakra-ui/react';
import {MdMail} from 'react-icons/md';
import Section from '../../components/Section'; // Wrapper that defines section level colors, bg = background, color = text color, also takes an optional 'id' prop for id
import Fullscreen from '../../components/Fullscreen'; // Optional wrapper that makes the section fullscreen, 100vw/100vh
import GridWrap from '../../components/GridWrap'; // Reusable Grid Container, takes height & width as props
import Title from '../../components/Title'; // Reusable Title stylings, pass a <h2-6> tag or <p>
import Subtitle from '../../components/Subtitle'; // Reusable Subtitle stylings, pass a <h2-6> tag or <p>
import Button from '../../components/Button'; // Clicky button component, pass raw text as child, href, bg, color, size, width, and target as props
import Nav from './Nav';


export default function Footer() {

    const PageContent = () => {

        const contentWrapper = {
            display: `grid`,
            width: `100%`,
            padding: `0 5vw`
        }

        const leftAlign = {
            alignSelf: `start`,
            justifySelf: `start`,
            alignItems: `start`,
            textAlign: `left`,
        }

        return(
            <div style={contentWrapper}>
                <div style={leftAlign}>
                    <Subtitle color="var(--white)"><a href="mailto: support@experienceconcerts.co"><Icon as={MdMail} /> support@experienceconcerts.co</a></Subtitle>
                </div>
                <Subtitle color="var(--white)" padding="0" size="3rem" weight="500"><h3>EXP|CON</h3></Subtitle>
                <Subtitle color="var(--white)"><p>2019 Copyright All Rights Reserved Speer Technologies Incorporated.</p></Subtitle>
            </div>
        )
    }

    return(
        <Section bg="var(--purple)">
            <GridWrap width="100%" height="50vh">
                <PageContent />
            </GridWrap>
        </Section>
    )
}