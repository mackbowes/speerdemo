import React, {useState} from 'react';

export default function RadioUnit(props) {

    let isChecked = props.isChecked;

    let color = {color: props.color}

    let radioControl = {};

    if (isChecked == false) {
        radioControl = {
            display: `block`,
            width: `.90em`,
            height: `.90em`,
            borderRadius: `50%`,
            border: `0.1em solid black`
        };
    } else {
        radioControl = {
            display: `block`,
            width: `.90em`,
            height: `.90em`,
            borderRadius: `50%`,
            border: `0.1em solid ${props.color}`,
            backgroundColor: props.color
        }
    }

    const RadioGuts = props => {
        return(
            <>
            <div className="radio-input">
            <input type="radio" name="plan" value={props.value} checked={isChecked} onChange={() => {}}/>
            <div style={radioControl}></div>
             </div>
            <span className="radio-label" style={props.color}>{props.value}</span>
            </>
        )
    }


        return(
            <label htmlFor={props.value} onClick={props.handle}>
                <RadioGuts 
                value={props.value}
                color={color}/>
            </label>)
}