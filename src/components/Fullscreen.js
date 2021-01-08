import React from 'react';

export default function Fullscreen(props) {

    let fullHeight = window.innerHeight;
    let fullWidth = window.innerWidth;

    const styles= {
        width: fullWidth,
        maxWidth: fullWidth,
        overflowX: `hidden`,
        minHeight: fullHeight
    }

    return(
        <div style={styles}>
            {props.children}
        </div>
    )
}