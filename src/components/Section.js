import React from 'react';

export default function Section(props) {
    const style = {
        backgroundColor: props.bg,
        color: props.color,
        position: `relative`,
    }

    return(
        <div style={style} id={props.id}>
            {props.children}
        </div>
    )
}