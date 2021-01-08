import { extendTheme } from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';


export default function Button(props) {

    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            // box = document.querySelector('buttonContainer');
            // that's enough of trying to get this effect for me
            // I'm lost on how to track the mouse position and pass that information
            // to the inling styling objects. 
            // Additionally, in the code demo the writer passed
            // javascript variables to css pseudo selectors which
            // I really don't understand how to do in a clean, modular way. 
        }, 1000);
        
        return () => clearTimeout(timer);
    })
    

    const EnterHover = () => {
        setIsHover(true);
        x = MouseEvent.screenX;
        y = MouseEvent.pageY;
    }

    const ExitHover = () => {
        x = 0;
        y = 0;
        setIsHover(false);    
    }

    let x = 0;
    let y = 0;
    let m = 0;
    let n = 0;

    let buttonHover = {
        position: `relative`,
        backgroundColor: `var(--blue)`,
        padding: `1rem 2rem`,
        borderRadius: props.radius || `2rem`,
        textTransform: `uppercase`,
        fontWeight: `700`,
        fontSize: props.size || `1rem`,
        letterSpacing: `1px`,
        display: `inline-block`,
        minWidth: props.width,
        textAlign: `center`
      }
      let buttonHoverSpan = {
        position: `relative`,
        pointerEvents: `none`,
        textTransform: `uppercase`,
        color: props.color,
      }
      let beforeButton = {      
        content: `''`,
        position: `absolute`,
        left: `var(${x})`,
        top: `var(${y})`,
        width: `var(${m})`,
        height: `var(${n})`,
        background: 
        `radial-gradient(circle closest-side, ${props.bg}, transparent)`,
        transform: `translate(-50%, -50%)`,
        transition: `width .2s ease, height .2s ease`,
      }

    let isColorful = props.isColorful || false;
    let colorClass = '';
    let style = {};
    let displayButton = props.displayButton || true;

    if (isHover === false) {
    if (isColorful === false) {
        style = {
            backgroundColor: props.bg,
            color: props.color,
            padding: `1rem 2rem`,
            borderRadius: props.radius || `2rem`,
            textTransform: `uppercase`,
            fontWeight: `500`,
            fontSize: props.size || `1rem`,
            letterSpacing: `1px`,
            display: `inline-block`,
            minWidth: props.width,
            textAlign: `center`
        };
    } else {
        style = {};
        colorClass = "btn-mix-noborder";
    }
    } else { // Button is being hovered
        m = 400;
        n = 400;
        return (
            <a href={props.href}>
                <div style={beforeButton} className='buttonContainer'></div>
                <div style={buttonHover} className={colorClass} onMouseEnter={() => {EnterHover()}} onMouseOut={() => {ExitHover()}}>
                    <span style={buttonHoverSpan}>{props.children}</span>
                </div>
            </a>
        )
    }
    

    if (displayButton === false) {
        return (<></>);
    } else {

    return(
        <a href={props.href}>
        <div style={style} className={colorClass} onMouseEnter={() => {EnterHover()}} onMouseOut={() => {ExitHover()}}>
            {props.children}
        </div>
        </a>
    )}
}