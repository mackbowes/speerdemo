import React from 'react';

export default function Subtitle(props) {

    let vw = window.innerWidth;

    let dSub = {
        letterSpacing: `2px`,
        color: props.color,
        padding: props.padding || `1rem 0 3rem 0`,
        fontSize: props.size || `2rem`,
        fontWeight: props.weight || `300`,
        maxWidth: props.width,
        display: `block`,
        margin: props.margin || `0 auto`,
        lineHeight: props.lineHeight || `1.5`,
    }

    let mSub = {
        letterSpacing: `2px`,
        color: props.color,
        padding: props.padding || `1rem 0 3rem 0`,
        fontSize: props.mSize || `1.5rem`,
        fontWeight: props.weight || `300`,
        maxWidth: `100%`,
        display: `block`,
        margin: `0 auto`,
        lineHeight: props.lineHeight || `1.5`,
    }

    const MediaQuery = (props) => {
        if (vw < 800) { // Mobile First
            return(
                <div style={mSub}>
                    {props.children}
                </div>
            )
        } else {
            return(
                <div style={dSub}>
                    {props.children}
                </div>
            )
        }
    }



    return(
        <MediaQuery>
            {props.children}
        </MediaQuery>
    )
}