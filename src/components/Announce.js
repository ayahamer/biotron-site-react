import React from 'react';
import './Announce.css';
import {Link} from 'react-router-dom';

function Announce() {
  return (
    <div className='announcements'>
    <h1> Announcements</h1>
    <p> Hello new and old members and those of you that are interested! Our first meeting for the Fall 2023 semester will be held online on a date TBD.
    </p>
    <br/>
    <p> You can find the link to the meeting in the Slack 'general' channel. If you need access to our Slack, click <Link to='/join'>here</Link> to find instructions on how to do so.</p>
    </div>
  );
}

export default Announce