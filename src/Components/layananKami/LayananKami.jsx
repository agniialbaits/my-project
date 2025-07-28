import React from 'react';
import './LayananKami.css'; // Assuming you have a CSS file for styling

const LayananKami = () => {
    return (
        <div className="layanan-kami">

            {/* <!-- LAYANAN KAMI --> */}
            <section class="layanan-section">
                <h2 class="judul">Layanan Kami</h2>
                <div class="layanan-container">
                    <div class="layanan-card">
                        <img src="/icons/beli.png" alt="Beli Rumah"/>
                            <h3>Beli Rumah</h3>
                            <p>Disini anda bisa membeli rumah impian anda dengan berbagai pilihan lokasi dan harga yang sesuai kebutuhan.</p>
                    </div>
                    <div class="layanan-card">
                        <img src="/icons/jual.png" alt="Jual Rumah"/>
                            <h3>Jual Rumah</h3>
                            <p>Disini anda bisa menjual rumah anda dengan mudah dan cepat kepada calon pembeli yang terpercaya.</p>
                    </div>
                </div>
            </section>

            {/* <!-- CARI RUMAH --> */}
            <section class="hero-section">
                <div class="overlay"></div>
                <div class="content">
                    <h1>Cari Rumah</h1>
                    <p>Cari rumah dengan lingkungan yang nyaman untuk keluargamu</p>
                    <div class="search-box">
                        <div class="search-combined">
                            <div class="dropdown">
                                <img src="/icons/home.png" alt="icon rumah" class="icon-img"/>
                                    <span class="text">Tipe rumah</span>
                                    <img src="/icons/dropdown.png" alt="dropdown" class="dropdown-arrow"/>
                                    </div>
                                    <div class="location">
                                        <img src="/icons/lokasi.png" alt="icon lokasi" class="icon-img"/>
                                            <input type='textbox' placeholder='Masukan Lokasi' />
                                    </div>
                            </div>
                            <button class="search-btn">Cari</button>
                        </div>
                    </div>
            </section>

            {/* <!-- MAU JUAL RUMAH --> */}
             <section class="jual-rumah">
                <div className="content">
                    <h1><span class="highlight">Mau Jual Rumah?</span></h1>
                    <p>Hubungi kami segera untuk menjual rumah anda<br/> dengan cepat, aman, dan harga terbaik!</p>
                </div>
                <div class="whatsapp-button">
                    <img src="/icons/wa.png" alt="whatsapp"/><a href="https://wa.me/qr/5GRVQJUYN4E5O1">Whatsapp kami sekarang</a>
                </div>
            </section> 
        </div>
    );
}

export default LayananKami;