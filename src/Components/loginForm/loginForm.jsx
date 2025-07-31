import React from 'react'
import { Link } from 'react-router-dom';
import './loginForm.css';
import { useNavigate } from 'react-router-dom';
import HomePage from '../../Pages/HomePage';

const LoginForm = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };
    return (
        <div>
            <div className="form-container">
                <form action="" method="get">
                    <div className="form-title">
                        <img src="/logo/logo2.png" alt="logo" />
                        <h1>Selamat Datang Kembali</h1>
                        <p>Masukkan username dan password Anda dengan benar untuk mengakses akun Anda secara aman.</p>
                    </div>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="Masukkan username Anda" />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Masukkan password Anda" />
                        <a href="http://">Lupa Password?</a>
                    </div>
                    <div className="actions">
                        <button className="btn-login" onClick={handleClick}>Masuk</button>
                        <Link to="/register" className='daftar'>Belum punya akun? Daftar disini</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm