import React from 'react';
import Navbar from '../Components/navbar/navbar';
import './home.css'; 
import Hero from '../Components/hero/hero';
import LayananKami from '../Components/layananKami/LayananKami' // Assuming you have a Hero component
import TipeRumah from '../Components/tiperumah/tipeRumah';
import Footer from '../Components/footer/footer';
import DetailsCs from '../Components/detailcs/detailCs';
const HomePage = () => {
    return (
        <div>
            
            <div className='home-page'>
                <Navbar />
                <Hero />
            </div>
            <LayananKami />
            <TipeRumah />
            <DetailsCs />
            <Footer />
        </div>
    );
}

export default HomePage;