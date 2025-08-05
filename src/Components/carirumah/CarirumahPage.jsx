import React from 'react'
import './CarirumahPage.css'
import Card from './card';

const CarirumahPage = () => {
            return (
        <div>
            <div className='content-title' style={{marginTop:'1700px'}}>

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
                        <button className="filter-button">Tipe ^ </button>
                    </div>
                </div>
            </div>
            <Card />
             <nav aria-label="Page navigation example">
        <ul className="pagination custom-pagination justify-content-center">
          <li className="page-item">
            <a className="page-link rounded-circle" href="#" aria-label="Previous">
              &lt;
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link rounded-circle" href="#">1</a>
          </li>
          <li className="page-item">
            <a className="page-link rounded-circle" href="#">2</a>
          </li>
          <li className="page-item">
            <a className="page-link rounded-circle" href="#">3</a>
          </li>
          <li className="page-item">
            <a className="page-link rounded-circle" href="#">4</a>
          </li>
          <li className="page-item">
            <a className="page-link rounded-circle" href="#">5</a>
          </li>
          <li className="page-item">
            <a className="page-link rounded-circle" href="#" aria-label="Next">
              &gt;
            </a>
          </li>
        </ul>
      </nav>
        </div>
    );  
};
export default CarirumahPage