import React from 'react';
import Button from './Button';
import Title from './Title';

export default function PricingComponent(props) {

    let color = props.color || `var(--white)`;
    

    const Separator = () => {
        return(
            <div style={{
                display: `block`,
                content: `''`,
                minHeight: `5px`,
                width: `33%`,
                backgroundColor: color,
                margin: `1rem 0`,
            }}></div>
        )
    }

    return(
        <div>
            <Title color={color} fontSize="3rem" margin="0" padding="0">{props.title}</Title>
            <Separator />
            <Title color={color} fontSize="3rem" margin="0" padding="0">{props.period}</Title>
            <Title color={color} fontSize="8rem" margin="0" padding="0">{props.price}</Title>
            {props.children}
            <Button bg={color} color="var(--white)" href="/payment">Select</Button>
        </div>
    )
}