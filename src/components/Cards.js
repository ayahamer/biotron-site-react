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
              text="Look at this cool hand"
              label='Hand' 
              path='/projects'
            />
            <CardIndv 
              src="public/handtopview.jpeg"
              text="Look at this cool hand"
              label='Hand' 
              path='/projects'
            />
          </ul>
          <ul className="cards-item"> {/* connecting card component in CardIndv */}
            <CardIndv 
              src="public/handtopview.jpeg"
              text="Look at this cool hand"
              label='Hand' 
              path='/projects'
            />
            <CardIndv 
              src="public/handtopview.jpeg"
              text="Look at this cool hand"
              label='Hand' 
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

