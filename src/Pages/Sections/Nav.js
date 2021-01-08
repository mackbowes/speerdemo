import React, {useState} from 'react';
import {Icon, propNames} from '@chakra-ui/react';
import Button from '../../components/Button';
import Subtitle from '../../components/Subtitle';
import {MdMenu} from 'react-icons/md';

export default function Nav(props) {

    const [view, setView] = useState(''); // State hook for checking which section dominates the viewport
    const [visible, setVisible] = useState(false); // State hook for determining whether or not to display nav CTA
    const [open, setOpen] = useState(false); // State Hook for opening/closing menu

    let textColor = props.textColor || "black";

    let color = props.color || "var(--white)";

    let wrapStyle = {
      position: `absolute`,
      left: `0`,
      top: `0`,
      boxSizing: `border-box`,
      display: `block`,
      maxWidth: `100vw`
    }

    let navStyle = { 
      display: `grid`,
      gridTemplateColumns: `1fr 1fr`,
      minHeight: `10vh`,
      alignItems: `center`,
      color: `white`,
      width: `100vw`,
      padding: `2.5vw`
    }

    let buttonWrap = {
      justifySelf: `end`,
      margin: `0 1rem`
    }

    let hamburgerArea = {
      display: `grid`,
      alignItems: `center`,
      justifyItems: `start`,
      gridTemplateColumns: `75px 1fr`,
      gridTemplateRows: `10vh`
    }

    let hamburgerChild = {
      display: `grid`,
      minHeight: `10vh`,
      alignSelf: `center`,
      alignItems: `center`
    }

    return(
        <div style={wrapStyle}>
          <nav style={navStyle}> 
            <div style={hamburgerArea}>
              <div style={hamburgerChild}>
                <Icon 
                as={MdMenu} // MdMenu imported from 'react-icon/md'
                color={color} // set icon color
                w={16} h={16} // set icon size
                />
              </div>
              <div style={hamburgerChild}>
                <Subtitle color={color} size="3rem" weight="500" margin="0" padding="0 .5rem" lineHeight="1"><h2>EXP | CON</h2></Subtitle>
              </div>
            </div>
          <div style={buttonWrap}>
            <Button href="/pricing" bg="white" color={textColor} displayButton={props.displayButton}>Try It Now</Button>{/* Button that displays after scrolling past first section */}
          </div>
          </nav> 
        </div>
    )
}