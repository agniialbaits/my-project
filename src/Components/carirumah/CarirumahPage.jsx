import React from 'react'
import './CarirumahPage.css'
import Card from './card';

const CarirumahPage = () => {
    return (
        <div>
            <div className='content-title'>

                <h1>Tipe Rumah Classic</h1>
                <p>Menampilkan Tipe rumah classic yang berlokasi di Sumedang</p>
            </div>
            <div className="carirumah-container">
                <div className="search-section">
                    <div className="search-box-carirumah">
                        <input
                            type="text"
                            placeholder="Cari Lokasi"
                            className="search-input"
                        />
                        <button className="search-button">Cari</button>
                    </div>

                    <div className="filter">
                        <button className="filter-button">Tipe </button>
                    </div>
                </div>
            </div>
            <Card />
        </div>
    )
};
export default CarirumahPage