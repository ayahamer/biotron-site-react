import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Announce from '../Announce'
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
    return (
        <>
            <Hero/>
            <Announce/>
            <Cards/>
            <Footer/>
        </>
    );
}

export default Home;

