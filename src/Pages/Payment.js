import React, {useState, useEffect} from 'react';

import Footer from './Sections/Footer';
import Nav from './Sections/Nav';
import Section from '../components/Section';
import GridWrap from '../components/GridWrap';
import Button from '../components/Button';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import RadioGroup from '../components/RadioGroup';

export default function Payment() {

    let white = `var(--white)`;
    let black = `var(--black)`;

    let wrapper = {
        margin: `10vh auto`,
        padding: `5vh`,
        textAlign: `left`,
        display: `grid`,
        gridTemplateColumns: `1fr 1fr`,
        alignItems: `start`,
        justifyItems: `start`,
        alignSelf: `center`,
        justifySelf: `center`,
        gridColumnGap: `5vw`,
        width: `80%`
    }

    let wide = {
        gridColumn: `1/3`,
    }

    let subGrid = {
        width: `100%`,
        justifySelf: `center`,
        justifyItems: `center`,
        display: `grid`
    }

    let innerGrid = {
        display: `grid`,
        width: `100%`,
        justifyItems: `start`,
        justifySelf: `start`,
        gridColumnGap: `25px`,
        gridTemplateColumns: `1fr 1fr`,
    }

    let leftAlign = {
        justifySelf: `start`,
    }

    let pStyle = {
        margin: `1rem 3rem 3rem 0`,
        fontSize: `1.5rem`,
        maxWidth: `50%`
    }

    let aStyle = {
        color: `var(--purple)`,
        fontWeight: `700`,
    }

    const ExpMonths = () => { // Generate a list of Month Options for the Month dropdown
        let i;
        let months = [];
        for (i = 1; i <= 12; i++) {
            let j = '';
            if (i < 10) {
                j = `0${i}`;
            } else {
                j = `${i}`;
            }
            months.push(j);
        }
        const output = months.map(x => {
            return(<option key={x} value={x}>{x}</option>)
        })
        return output;}
    const ExpYears = () => { // Generate a list of Year Options for the Expiry Dropdown
        let date = new Date().getFullYear() + 10; // I have no idea how long credit cards are valid for, and in production would ask that this field be a text input that's controlled with RegEx
        let i;
        let years = [];
        for (i = 2021; i <= date; i++) {
                years.push(i);
        }
        const output = years.map(x => {
            return(<option key={x} value={x}>{x}</option>)
        })
        return output;}
    
    const CheckoutUnit = props => { // A reusable container for styling

        let style = {
            width: `100%`
        }

        return(
            <div className='checkoutWrapper'>
                <div style={style}>
                    {props.children}
                </div>  
            </div>
        )
    }

    return(
        <>
        <Section bg={white} color={black}>
            <Nav displayButton="false" color={black}/>
            <GridWrap height="100vh" width="100vw">
                <div style={wrapper}>
                    <div style={wide}>
                    <Title color={black}>Payment</Title>
                    <Subtitle color={black} weight="500" margin="0" padding="3rem 0 1rem 0">1. Select Your Plan</Subtitle>
                        <RadioGroup />
                    </div>
                    <div style={subGrid}>
                    <div style={leftAlign}>
                        <Subtitle color={black} weight="500">2. Billing Information</Subtitle>
                    </div>
                        <CheckoutUnit>
                            <div className="labelWrap"><label for="Full Name">Full Name</label><br /></div>
                            <input type="text" name="Full Name"></input><br />
                        </CheckoutUnit>
                        <CheckoutUnit>
                            <label for="Billing Address">Billing Address</label><br />
                            <input type="text" name="Billing Address"></input><br />
                        </CheckoutUnit>
                        <div style={innerGrid}>
                        <CheckoutUnit>
                            <label for="City">City</label><br />
                            <input type="text" name="City"></input><br />
                        </CheckoutUnit>
                        <CheckoutUnit>
                            <label for="Postal Code">Postal Code</label><br />
                            <input type="text" name="Postal Code"></input><br />
                        </CheckoutUnit>
                        </div>
                        <CheckoutUnit>
                            <label for="Country">Country</label><br />
                            <select name="Country">
                                <option value="Canada">Canada</option>
                                <option value="United States">United States</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="Australia">Australia</option>
                            </select>
                        </CheckoutUnit>
                    </div>
                    <div style={subGrid}>
                    <div style={leftAlign}><Subtitle color={black} weight="500">3. Credit Card Information</Subtitle></div>
                        <CheckoutUnit>
                        <label for="Cardholder Name">Cardholder's Name</label><br />
                        <input type="text" name="Cardholer Name"></input><br />
                        </CheckoutUnit>
                        <CheckoutUnit>
                        <label for="Card Number">Card Number</label><br />
                        <input type="text" name="Card Number"></input><br />
                        </CheckoutUnit>
                        <div style={innerGrid}>
                        <CheckoutUnit>
                        <label for="Expiry Month">Expiry Month</label><br />
                        <select name="Expiry Month">
                            <ExpMonths />
                        </select><br />
                        </CheckoutUnit>
                        <CheckoutUnit>
                        <label for="Expiry Year">Expiry Year</label><br />
                        <select name="Expiry Year">
                            <ExpYears />
                        </select><br />
                        </CheckoutUnit>
                        </div>
                        <CheckoutUnit>
                        <label for="CVV">CVV</label><br />
                        <input type="text" for="CVV"></input><br />
                        </CheckoutUnit>
                    </div>
                    <div style={wide}>
                        <p style={pStyle}>By continuing, I acknowledge that I've read and agree to the <a href="#" style={aStyle} target="_blank">Terms of Service</a> &amp; <a href="#" style={aStyle} target="_blank">Privacy Policy.</a></p>
                        <Button isColorful="true">Download</Button>
                    </div>
                </div>
            </GridWrap>
        </Section>
        <Footer />
        </>
    )
}