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
          <p> 
            The goal of EMG Frabris is to develop resuable metal EMG electrodes that will sense msucle movememnts and make a prosthetic arm or hand orthotic, grip objects at a pateitn's will. This term we have gathered EMG data and began processing it to identify when a hand is clendched into a fist. We have also began creating the metal electrodes from stainless steel and 3D printed a casing. In future terms we hope to develop a functioning porotype that will process signals live to open and close a mechanical fist.
          </p>
          <br/>
          <p>
            EMG Fabric has xx subteams which include: Hardware, Software, _____-
          </p>
        </div>

        <div className="enable"> 
          <h2>e-NABLE</h2>
          <p> 
            e-NABLE is an online global community of “Digital Humanitarian” volunteers from all over the world who are using their 3D printers to make free and low-cost prosthetic upper limb devices for children and adults in need. Our sub-team is an official e-NABLE Chapter, and we use the open-source designs created by e-NABLE volunteers to print and assemble upper-limb prosthetics with the goal of donating them to members of the community.

            Over the past 2 years, we have been printing and assembling prosthetics available on the e-NABLE site. in 2021/22 we printed and assembled two hands: The phoenix v3 and the osprey hand. Last year we printed the Unlimbited Arm! Read more about this below. 
          </p>

          <h3>Unlimbited Arm</h3>
          <div className="arm">
            <p>
              Last school year (22-23), we finished our e-NABLE Unlimbited Arm! It was approved by the e-NABLE community and now we can print more and donate them to those that may need them. We obtained the .stl files on the e-NABLE volunteer site, printed them at our desired scale, and assembled the pieces. To do this, we not only attached the pieces together with pins, but we had to shape a flat piece to be curved using boiling water. 
            </p>
            <img src="./armtop.jpg" alt="Top view of unlimbited arm" /> 
            <img src="./armback.jpg" alt="Bottom view of unlimbited arm" />
          </div>

          <h3>Hand Attachments</h3>
          <div className="hand">
            <p>
              Our team designed 3 attachments to add to our Unlimbited Hand, to allow users to perform additional tasks with ease. They designed, printed, and attached a Pencil, Utensil, and Toothbrush attachment. 
            </p>
          </div>
          
          <h3>Animal Prosthetic</h3>
          <div className="animal">
            <p>
              The team is in the midst of designing a prosthetic for a XX. They are using a base design to help guide their innovation and are currently in the design phase. This semester they hope to continue with the design process and begin testing a low-fidelity prototype.
            </p>
          </div>
      
        </div>

        <div className="spine"> 
          <h2>Spine Bio Sticker</h2>
            <p>
              The goal of Spine Bio Sticker is to create a system that helps people recovering from spinal surgery to not overextend themselves during recovery and need surgical revision
            </p>
            <br/>
            <p>
              Currently we have acquired the sensors we will be using and have reasearched the best place to put the sensors on the patient. We have also created the first prototype for the system-patient interface. 
            </p>
            <br/>
            <p>
              This term, our goal is to create the code for the system, test it, and make revisions as needed.
            </p>
       </div>

    </div>

     <Footer/>
  </>
   );
}