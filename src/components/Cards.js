import React from 'react'
import CardIndv from './CardIndv';
import './Cards.css';

export default function Cards() {
  return (
    <div className='cards'>
      <h1>check these out</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          {/* these cards can be changed accordingly and more can be added */}
          <ul className="cards-item"> {/* connecting card component in CardIndv */}
            <CardIndv 
              src="public/handtopview.jpeg"
              text="Our Team"
              label='Team' 
              path='/about'
            />
            <CardIndv 
              src="public/handtopview.jpeg"
              text="EMG Fabric for..."
              label='Project' 
              path='/projects'
            />
          </ul>
          <ul className="cards-item"> {/* connecting card component in CardIndv */}
            <CardIndv 
              src="public/handtopview.jpeg"
              text="3D-printed prosthetics"
              label='Project' 
              path='/projects'
            />
            <CardIndv 
              src="public/handtopview.jpeg"
              text="A spine stiker that..."
              label='Project' 
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

