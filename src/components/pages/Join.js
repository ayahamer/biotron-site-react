import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Join.css';

export default function Join() {
 return (
 <>
    <h1 className="join">Join Us</h1>

<div className="join-container">
  <div className="how"> 
    <h2>How to Join</h2>
    <p> 
      <ol className="how-list">
        <li> Join our <a href="https://join.slack.com/t/uwbiomechatronicsclub/shared_invite/zt-1svgcy6as-v0I0dkF7g7OmMGAye2PHoA" target="_blank">Slack</a> with your <b>uw email</b></li>
        <li> Join the channel of the sub-team you wish to join (ps. you can join more than one!)</li>
        <li> Attend our in-person meetings to learn more about the team and start working on projects. This semester's meeting schedule is below!</li>
      </ol>

      If you have any questions feel free to message any of the <a href="http://localhost:3000/team#/about:~:text=id%20est%20laborum.-,Our%20Team,-Lorem%20ipsum%20dolor">Leads</a> on Slack or contact us by <a href="mailto:biotron@uwaterloo.ca"> email.</a>
    </p>

  </div>

  <div className="meeting"> 
    <h2>Meeting Schedule</h2>
    <h3>Spring 23</h3>
    <p> Team Meeting: TBD </p>
    <p> EMG Fabric: TBD </p>
    <p> e-NABLE: TBD </p>
    <p> Spine Bio Sticker: TBD </p>
  </div>
</div>

    <Footer/>
    </>
  );
 }