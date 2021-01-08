import React from 'react';

export default function Title(props) {

    let vw = window.innerWidth;
    let breakpoint = 800;

    let title = {};

    if (vw < breakpoint) { // Mobile First
        title = {
            textTransform: `uppercase`,
            letterSpacing: `2px`,
            color: props.color,
            padding: props.padding || `1.5rem 0`,
            fontSize: `3rem`,
            fontWeight: `600`,
            lineHeight: `1.5`
        }
    } else {
        title = {
            textTransform: `uppercase`,
            letterSpacing: `2px`,
            color: props.color,
            padding: props.padding || `1.5rem 0`,
            fontSize: props.fontSize || `4rem`,
            fontWeight: `700`,
            lineHeight: `1.25`
        }
    }
    
    return(
        <div style={title}>
            {props.children}
        </div>
    )
}