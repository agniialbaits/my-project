import React from 'react';
import Navbar from '../Components/navbar/navbar';
import './home.css'; 
import Hero from '../Components/hero/hero';
import LayananKami from '../Components/layananKami/LayananKami' // Assuming you have a Hero component
import TipeRumah from '../Components/tiperumah/tipeRumah';
const HomePage = () => {
    return (
        <div>
            
            <div className='home-page'>
                <Navbar />
                <Hero />
            </div>
            <LayananKami />
            <TipeRumah />
        </div>
    );
}

export default HomePage;