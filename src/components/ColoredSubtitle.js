import { useProps } from '@chakra-ui/react';
import React from 'react';

import Subtitle from './Subtitle';

export default function ColoredButton(props) {

    const style = {
        content: `''`,
        display: `inline-block`,
        minHeight: `5px`,
        minWidth: `33%`,
        backgroundColor: props.color,
    }

    return(
        <>
        <div style={style}></div>
        <Subtitle
        color={props.color}
        size={props.size}
        weight={props.weight}
        width={props.width}
        margin={props.margin}
        lineHeight={props.lineHeight}
        mSize={props.mSize}>
            {props.children}
        </Subtitle>
        </>
    )
}