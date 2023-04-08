import './App.css';
import React from 'react';
import Navbar from './components/Navbar'; // bringing in the Navbar component so it shows on the site
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/AboutUs';
import Projects from './components/pages/Projects';
import Join from './components/pages/Join';

function App() {
  return (
    <>
    <Router> {/* countain routes for pages/paths */}
      <Navbar />
      <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/about' exact element={<About/>} />
      <Route path='/projects' exact element={<Projects/>} />
      <Route path='/join' exact element={<Join/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
