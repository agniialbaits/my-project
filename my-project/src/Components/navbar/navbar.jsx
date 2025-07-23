import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <div className="nav-logo">
                <img src="../../public/vite.svg" alt="logo" />
                <a href="/">Rumah Singgah</a>
            </div>
            <ul className="nav-links">
                <li><NavLink to="/" end>Beranda</NavLink></li>
                <li><NavLink to="/layanan">Layanan</NavLink></li>
                <li><NavLink to="/kontak">Kontak</NavLink></li>
            </ul>
            <div className="nav-buttons">
                <button className="login">Masuk</button>
                <button className="register">Daftar</button>
            </div>
        </nav>
    );
}

export default Navbar;