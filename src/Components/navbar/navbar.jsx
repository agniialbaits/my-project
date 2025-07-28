import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isLandingPage = location.pathname === '/';

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''} ${isLandingPage ? 'landing' : 'inner'}`}>
            <div className="nav-logo">
                <img src="/logo/logo.png" alt="logo" />
                <a href="/">Nusantara Estates</a>
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
