import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-links-wrapper'>
          <div className="footer-links-items">
              <Link to= 'mailto:biotron@uwaterloo.ca'> Email </Link>
              <Link to='/join'> Instagram </Link>
              <Link to='/join'> Facebook </Link>
              <Link to='/join'> LinkedIn </Link>

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer