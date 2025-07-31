import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import './card.css'; // Assuming you have a CSS file for styling

const Card = () => {
  
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/detailsPage');
    };

    const tipeListRef = useRef(null);
    const btnLeftRef = useRef(null);
    const btnRightRef = useRef(null);

    useEffect(() => {
        const tipeList = tipeListRef.current;
        const btnLeft = btnLeftRef.current;
        const btnRight = btnRightRef.current;

        const scrollLeft = () => {
            tipeList.scrollBy({ left: -250, behavior: 'smooth' });
        };

        const scrollRight = () => {
            tipeList.scrollBy({ left: 250, behavior: 'smooth' });
        };

        if (btnLeft) btnLeft.addEventListener('click', scrollLeft);
        if (btnRight) btnRight.addEventListener('click', scrollRight);

        return () => {
            if (btnLeft) btnLeft.removeEventListener('click', scrollLeft);
            if (btnRight) btnRight.removeEventListener('click', scrollRight);
        };
    }, []);

    // ✅ Data rumah (dijual)
    const rumahList = [
        {
            id: 1,
            harga: "Rp 1.4 Milyar",
            lokasi: "Jl Angkrek",
            status: "Dijual",
            img: "/img/tipe rumah.png"
        },
        {
            id: 2,
            harga: "Rp 1.2 Milyar",
            lokasi: "Jl Melati",
            status: "Dijual",
            img: "/img/tipe rumah.png"
        },
        {
            id: 3,
            harga: "Rp 1.8 Milyar",
            lokasi: "Jl Mawar",
            status: "Dijual",
            img: "/img/tipe rumah.png"
        },
        {
            id: 4,
            harga: "Rp 2 Milyar",
            lokasi: "Jl Kenanga",
            status: "Dijual",
            img: "/img/tipe rumah.png"
          }          
        // Tambahkan rumah baru di sini
    ];

    // ✅ Data tipe rumah (untuk horizontal scroll)
    const tipeRumahList = [
        { id: 1, img: "/img/tipe rumah.png", label: "Tipe rumah Modern" },
        { id: 2, img: "/img/tipe rumah.png", label: "Tipe rumah Industrial" },
        { id: 3, img: "/img/tipe rumah.png", label: "Tipe rumah Skandinavia" },
        { id: 4, img: "/img/tipe rumah.png", label: "Tipe rumah Modern" },
        { id: 5, img: "/img/tipe rumah.png", label: "Tipe rumah Industrial" },
        { id: 6, img: "/img/tipe rumah.png", label: "Tipe rumah Skandinavia" },
    ];

    return (
        <div>
            <div className="container-card">

                {/* ✅ Rumah Card Section */}
                <div className="card-list">
                    {rumahList.map((rumah, index) => (
                        <div className="card" key={rumah.id}>
                            <img src={rumah.img} alt={`Rumah ${index + 1}`} />
                            <div className="card-body">
                                <h3>{rumah.harga}</h3>
                                <p>{rumah.lokasi}</p>
                                <a href="#" className="status">{rumah.status}</a>
                                <div className="card-actions">
                                    <button className="btn-detail" onClick={handleClick}>Lihat Detail</button>
                                    <button className="btn-chat"><i className="fa-brands fa-whatsapp"></i> Chat</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card