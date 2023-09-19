import React from 'react'
import CardIndv from './CardIndv';
import './Cards.css';

export default function Cards() {
  return (
    <div className='cards'>
      <h1>Check these out!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          {/* these cards can be changed accordingly and more can be added */}
          <ul className="cards-item"> {/* connecting card component in CardIndv */}
            <CardIndv 
              src='./about1.jpg'
              text="Our Team :)"
              label='Team' 
              path='/about'
            />
            <CardIndv 
              src='./emg3.png'
              text="Metal electrodes that sense muscle movement to control prosthetics"
              label='Project' 
              path='/projects'
            />
          </ul>
          <ul className="cards-item"> {/* connecting card component in CardIndv */}
            <CardIndv 
              src='./handtopview.jpeg'
              text="3D-printed prosthetics for those that need them"
              label='Project' 
              path='/projects'
            />
            <CardIndv 
              src='./spine.jpg'
              text="A spine sticker that senses overexertiion during spinal surgery recovery"
              label='Project' 
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

