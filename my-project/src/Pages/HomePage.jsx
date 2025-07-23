import React from 'react';
import Navbar from '../Components/navbar/navbar';
import './home.css'; 
import Hero from '../Components/hero/hero';
import LayananKami from '../Components/layananKami/layananKami' // Assuming you have a Hero component
const HomePage = () => {
    return (
        <div>
            <div className='home-page'>
                <Navbar />
                <Hero />
            </div>
            <LayananKami />
        </div>
    );
}

export default HomePage;