import React from 'react'
import Navbar from '../../Components/navbar/navbar'
import RumahKosongPage from '../../Components/rumahkosong/RumahKosongPage'
import Footer from '../../Components/footer/footer'
import './RumahKosongPage.css'
import './ResultTipe.css'
import './footer..css'
import './navbar.css';

const RumahKosongPage = () => {
  return (
    <div>
        <Navbar />
        <div className="rumah-container">
            <RumahKosongPage />
        </div>
        <Footer />
    </div>
  )
}

export default RumahKosongPage