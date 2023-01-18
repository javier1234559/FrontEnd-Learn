import React, {useState, useEffect} from 'react'
import {Button } from './Button';
import './HeroSection.css' ;
import '../App.css';


function HeroSection() {

  const [showBackground,setshowBackground ] = useState(true) ;
  
  const handleShow = (showBackground) => {
    setshowBackground(!showBackground);
  }
  
  useEffect(()=>{
    handleShow()
  },[]);

  return (
    <div className={`hero-container  ${showBackground ? "show" : ""}`}>
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1>ADVANTURE AWAITS</h1>
        <p>What are you waiting for ?</p>
        <div className="hero-btns">
            <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
            >Get Started</Button>
             <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
                onClick={handleShow}
            >WATCH TRAILER <i className="far fa-play-circle"/></Button>
        </div>
    </div>
  )
}

export default HeroSection