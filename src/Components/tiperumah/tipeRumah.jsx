import React, { useRef, useEffect } from 'react';
import './tiperumah.css';

const TipeRumah = () => {
    // Simple horizontal scroll for tipe rumah
    const tipeListRef = useRef(null);
    const btnLeftRef = useRef(null);
    const btnRightRef = useRef(null);

    useEffect(() => {
        const tipeList = tipeListRef.current;
        const btnLeft = btnLeftRef.current;
        const btnRight = btnRightRef.current;

        if (btnLeft && tipeList) {
            btnLeft.addEventListener('click', () => {
                tipeList.scrollBy({ left: -250, behavior: 'smooth' });
            });
        }
        if (btnRight && tipeList) {
            btnRight.addEventListener('click', () => {
                tipeList.scrollBy({ left: 250, behavior: 'smooth' });
            });
        }

        // Cleanup agar tidak terjadi duplikasi event
        return () => {
            if (btnLeft && tipeList) {
                btnLeft.removeEventListener('click', () => {
                    tipeList.scrollBy({ left: -250, behavior: 'smooth' });
                });
            }
            if (btnRight && tipeList) {
                btnRight.removeEventListener('click', () => {
                    tipeList.scrollBy({ left: 250, behavior: 'smooth' });
                });
            }
        };
    }, []);

    return (
        <div>
            <div class="container">
                <h2 class="section-title">Baru Saja Dijual</h2>
                <p class="section-subtitle">Kami punya rekomendasi rumah untuk kamu</p>
                <div class="card-list">
                    {/* <!-- Card 1 --> */}
                    <div class="card">
                        <img src="/tipe rumah.png" alt="Rumah 1" />
                        <div class="card-body">
                            <h3>Rp 1.4 Milyar</h3>
                            <p>Jl Angkrek</p>
                            <a href="#" class="status">Dijual</a>
                            <div class="card-actions">
                                <button class="btn-detail">Lihat Detail</button>
                                <button class="btn-chat"><i class="fa-brands fa-whatsapp"></i> Chat</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card 2 --> */}
                    <div class="card">
                        <img src="/tipe rumah.png" alt="Rumah 2" />
                        <div class="card-body">
                            <h3>Rp 1.4 Milyar</h3>
                            <p>Jl Angkrek</p>
                            <a href="#" class="status">Dijual</a>
                            <div class="card-actions">
                                <button class="btn-detail">Lihat Detail</button>
                                <button class="btn-chat"><i class="fa-brands fa-whatsapp"></i> Chat</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Card 3 --> */}
                    <div class="card">
                        <img src="/tipe rumah.png" alt="Rumah 3" />
                        <div class="card-body">
                            <h3>Rp 1.4 Milyar</h3>
                            <p>Jl Angkrek</p>
                            <a href="#" class="status">Dijual</a>
                            <div class="card-actions">
                                <button class="btn-detail">Lihat Detail</button>
                                <button class="btn-chat"><i class="fa-brands fa-whatsapp"></i> Chat</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="btn-lihat-lainnya">Lihat lainnya</button>

                <div class="tipe-header">
                    <h2 class="tipe-title">Tipe Rumah</h2>
                    <p class="tipe-subtitle">Kami menyediakan beberapa tipe rumah yang bisa kamu pilih</p>
                </div>
                <div class="tipe-list-wrapper">
                    <button className="arrow-btn left" ref={btnLeftRef}>
                        <img src="/Frame 34.svg" alt="Panah Kiri" />
                    </button>
                    <div className="tipe-list" ref={tipeListRef}>
                        <div class="tipe-card">
                            <img src="/tipe rumah.png" alt="Modern" />
                            <div class="tipe-caption">Tipe rumah Modern</div>
                        </div>
                        <div class="tipe-card">
                            <img src="/tipe rumah.png" alt="Industrial" />
                            <div class="tipe-caption">Tipe rumah Industrial</div>
                        </div>
                        <div class="tipe-card">
                            <img src="/tipe rumah.png" alt="Skandinavia" />
                            <div class="tipe-caption">Tipe rumah Skandinavia</div>
                        </div>
                        <div class="tipe-card">
                            <img src="/tipe rumah.png" alt="Modern" />
                            <div class="tipe-caption">Tipe rumah Modern</div>
                        </div>
                        <div class="tipe-card">
                            <img src="/tipe rumah.png" alt="Industrial" />
                            <div class="tipe-caption">Tipe rumah Industrial</div>
                        </div>
                        <div class="tipe-card">
                            <img src="/tipe rumah.png" alt="Skandinavia" />
                            <div class="tipe-caption">Tipe rumah Skandinavia</div>
                        </div>
                    </div>
                    {/* <!-- Jika gambar di folder yang sama --> */}
                    <button className="arrow-btn right" ref={btnRightRef}>
                        <img src="/Frame 35.svg" alt="Panah Kanan" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TipeRumah;