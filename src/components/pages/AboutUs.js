import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './AboutUs.css';
import {Link} from 'react-router-dom';


export default function AboutUs() {
  return (
  <>
       <h1 className="about">About Us</h1>

    <div className="about-container">
      <div className="us"> 
        <h2>Who We Are</h2>
        <p> The Biomechatronics (aka. Biotron) team is a design team at the University of Waterloo that designs and builds biomechanical devices to solve biomedical problems. We are a group of science and engineering students that create solutions to emerging and existing problems in the biomedical field.  
        <br />
        <br />
        Our team is comprised of 3 sub-teams: <b>EMG Fabric, e-NABLE, and Spine Bio Sticker</b>, each of which are working on their own projects. You can learn more about each project <Link to='/projects'>here.</Link> 
        </p>
      </div>

      <div className="team"> 
        <h2>Meet the Team Leads</h2>
        <p> hhh
        </p>
      </div>
    </div>

     <Footer/>
  </>
  );
}