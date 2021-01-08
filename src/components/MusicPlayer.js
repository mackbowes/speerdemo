import React, {useState, useEffect} from 'react';


export default function MusicPlayer() {

    const [playing, setPlaying] = useState(false);

    const AudioContext = window.AudioContext || window.webkitAudioContext; // Legacy object
    const actx = new AudioContext(); // Modern Audio object

    let audioElement = '';

    useEffect(() => { // This code block waits for the HTML to render before looking for the <audio> element
        const timer = setTimeout(() => {
            audioElement = document.querySelector('#song');
            audioElement.onEnded = () => {handleEnd()};
        }, 1000);
        
        return () => clearTimeout(timer);
    })
    

    const handleClick = () => { // Initialize the AudioContext State & play / pause
        if (actx.state === 'suspended') {
            actx.resume();
        }
        if  (playing === false) {
            audioElement.play();
            setPlaying(true);
        } else {
            audioElement.pause();
            setPlaying(false);
        }
    }
    const handleEnd = () => { // I'm not sure if this is working...
        setPlaying(false);
        console.log('song ended!');
    }

    return(
        <>
        <img 
        src="/Speakers.png" 
        alt="two speakers" 
        title="Click to play music" // a cheeky tooltip
        style={{cursor: `pointer`,}}
        onClick={() => {handleClick()}}/>
        <audio id="song" src="/music4.wav" ></audio>
        </>
    )
}