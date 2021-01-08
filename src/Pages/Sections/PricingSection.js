import React from 'react';
import {Icon} from '@chakra-ui/react';
import {MdMusicNote} from 'react-icons/md';


import Section from '../../components/Section'; // Wrapper that defines section level colors, bg = background, color = text color, also takes an optional 'id' prop for id
import Fullscreen from '../../components/Fullscreen'; // Optional wrapper that makes the section fullscreen, 100vw/100vh
import GridWrap from '../../components/GridWrap'; // Reusable Grid Container, takes height & width as props
import Title from '../../components/Title'; // Reusable Title stylings, pass a <h2-6> tag or <p>
import PricingComponent from '../../components/PricingComponent';
import Subtitle from '../../components/Subtitle';
import Nav from './Nav';


export default function PricingSection() {

    const PageContent = () => {

        let vw = window.innerWidth;

        let leftAlign = {};

        let grid = {};
        
        let basicBenefits = [`Very good`, `Amazing`, `Perfect job`, `Love this`, `It's so good`, `Features`];
        let advancedBenefits = [`Very very good`, `Even Amazing`, `Perfect job`, `Love this more`, `It's so so good`, `More Features`]
        let proBenefits = [`Very good`, `Amazing`, `Perfect job`, `Love this`, `It's so good`,`Features`]


        const ListBenefits = props => {
            const list = props.list;
            const Benefits = list.map((benefit) => 
                <Subtitle color="var(--white)" weight="500" padding="0" margin="0" lineHeight="1.25">
                        <Icon as={MdMusicNote} />{benefit}
                </Subtitle>
            );
            return (
                <div style={{
                    marginBottom: `2rem`,
                }}>
                    {Benefits}
                </div>
            )
        }
        if (vw < 800) {
            grid = {
                display: `grid`,
                gridTemplateColumns: `1fr`,
                gridTemplateRows: `1fr`,
                alignItems: `start`,
                justifyItems: `start`,
                textAlign: `left`
            }
            leftAlign = {
                textAlign: `left`,
                width: `100%`,
                padding: `5vw`
            }
        } else {
            grid = {
                display: `grid`,
                gridTemplateColumns: `1fr 1fr 1fr`,
                gridTemplateRows: `1fr`,
                alignItems: `start`,
                justifyItems: `center`,
                textAlign: `left`,
            }
            leftAlign = {
                textAlign: `left`,
                width: `100%`,
                padding: `10vw`,
            }
        }

        return(
        <div style={leftAlign}>
            <div style={{
                display: `grid`,
                gridTemplateColumns: `1fr`,
                alignItems: `start`,
                textAlign: `left`,
                justifyItems: `center`,
                // marginTop: `15vh`
            }}>
                <div>
                    <Title color="var(--white)">
                        Pricing
                    </Title>
                    <Subtitle color="var(--white)" weight="500">
                        Test out our app today! Choose from three subscription based payment models. 
                    </Subtitle>
                </div>
            </div>
            <div style={grid}>
                <PricingComponent 
                color="var(--red)"
                title="Basic"
                period="Monthly"
                price="$9"
                > {/* List of Benefits currently passed as copy-paste list - please refactor to an array that maps */}
                    <ListBenefits list={basicBenefits} />
                </PricingComponent>
                <PricingComponent 
                color="var(--yellow)"
                title="Advanced"
                period="Yearly"
                price="$99"
                >
                    <ListBenefits list={advancedBenefits} />
                </PricingComponent>
                <PricingComponent 
                color="var(--blue)"
                title="Pro"
                period="Yearly"
                price="$120"
                >
                    <ListBenefits list={proBenefits} />
                </PricingComponent>
            </div>
        </div>
        )
    }

    return(
        <Section bg="var(--black)">
            <Nav displayButton="false"/>
            <Fullscreen>
                <GridWrap height="100vh" width="100vw">
                    <PageContent />
                </GridWrap>
            </Fullscreen>
        </Section>
    )
}