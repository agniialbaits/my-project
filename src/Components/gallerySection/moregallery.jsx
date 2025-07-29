import React from 'react';
import './MoreGallery.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';

const MoreGallery = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
    <div className="more-gallery-container">
      <h2 className="gallery-title"><button className="back-button" onClick={() => navigate('/')}>←</button>Semua gambar</h2>

      <div className="carousel">
        <img src="/img/kamar.png" alt="Kamar tidur" className="carousel-image" />
        <button className="carousel-button left">‹</button>
        <button className="carousel-button right">›</button>
      </div>

      <div className="thumbnail-row">
        <img src="/img/kamar.png" alt="Kamar tidur" className="thumbnail" />
        <img src="/img/kamaar-mandi.png" alt="Kamar mandi" className="thumbnail" />
        <img src="/img/dapur.png" alt="Dapur" className="thumbnail" />
        <img src="/img/halaman.png" alt="Halaman" className="thumbnail" />
        <img src="/img/teras.png" alt="Teras" className="thumbnail" />
      </div>
    </div>
    </div>
  );
};

export default MoreGallery;
