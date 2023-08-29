import React from 'react';
import { Button } from './Button';
import './Hero.css';
import '../App.css';

function Hero() {
  return (
    <div className='hero-container'>
        
        <img src="/./handtopview.jpeg"/>
        <h1> UW Biomechatronics</h1>
        <p> a University of Waterloo design team</p>

        {/*<video src="/public/video_name.mp4"  autoPlay loop muted/>
        <h1> Title </h1>
        <p> idk </p>
        this is if i wanna add a video on the main page, can do these once there is a video to add*/}

        <div className="hero-btns">

            <Button className='btns' 
            buttonStyle='btn--outline' 
            buttonSize='btn--large'>
            Learn More
            </Button>

           {/* <Button className='btns' 
            buttonStyle='btn--primary' 
            buttonSize='btn--large'>
            Watch trailer <i className='far fa-play-circle'/>
            </Button>*/}

        </div> 
    </div>
  );
}

export default Hero;