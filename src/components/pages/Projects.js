import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Projects.css';

export default function Projects() {
  return (
  <>
      <h1 className='projects'>Projects</h1>

      <div className="projects-container">
        <div className="emg-fabric"> 
          <h2>EMG Fabric</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="enable"> 
          <h2>e-NABLE</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </p>

          <h3>Team Unlimbited Arm</h3>
          <div className="arm">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img src="./armtop.jpg" alt="Top view of unlimbited arm" /> 
            <img src="./armback.jpg" alt="Bottom view of unlimbited arm" />
          </div>

          <h3>Hand Attachments</h3>
          <div className="hand">
            <p>hhhh</p>
          </div>
          
          <h3>Animal Prosthetic</h3>
          <div className="animal">
            <p>hhhhh</p>
          </div>
      
        </div>

        <div className="spine"> 
          <h2>Spine Bio Sticker</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
       </div>

    </div>

     <Footer/>
  </>
   );
}