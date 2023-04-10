import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-links-wrapper'>
          <div className="footer-links-items">
              <Link to= 'mailto:biotron@uwaterloo.ca'> <i class="fa-solid fa-envelope"></i> </Link>

              <Link to='/join'> <i class="fa-brands fa-instagram"></i> </Link>

              <Link to='/join'> <i class="fa-brands fa-square-facebook"></i> </Link>

              <Link to='/join'> <i class="fa-brands fa-linkedin"></i> </Link>

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer