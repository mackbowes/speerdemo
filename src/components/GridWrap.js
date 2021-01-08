import React from 'react';

export default function GridWrap(props) {
   
    const gridWrap = {
        display: `grid`,
        gridTemplateColumns: `1fr`,
        minHeight: props.height,
        width: props.width,
        alignItems: props.align || `center`,
        justifyItems: props.justify || `center`,
        textAlign: props.textAlign || `center`  // Center everything by default
    }

    return(
        <div style={gridWrap}>
            {props.children}
        </div>
    )
}