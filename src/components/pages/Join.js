import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import './Join.css';
import {Link} from 'react-router-dom';

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

      If you have any questions feel free to message any of the <Link to='/about'>Leads</Link> on Slack or contact us by <a href="mailto:biotron@uwaterloo.ca">email.</a>
    </p>

  </div>

  <div className="meeting"> 
    <h2>Meeting Schedule</h2>
    <h3>Fall 23</h3>
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