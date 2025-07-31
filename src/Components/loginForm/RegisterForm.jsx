import React from 'react'
import './RegisterForm.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom';
import HomePage from '../../Pages/HomePage';

const RegisterForm = () => {
  return (
    <div>
        
        <div className="form-container">
            <form action="" method="POST">
            <div className="form-title">
                <img src="/logo/logo2.png" alt="logo" />
                <h1>Selamat Datang</h1>
                <p>Masukkan informasi yang diperlukan di bawah ini untuk membuat akun baru. Pastikan data yang Anda masukkan sudah benar.</p>
            </div>
            <div className="input-group">
                <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Masukkan username Anda" />
                <label htmlFor="email">Email</label>
                    <input type="text" id="username" placeholder="Masukkan username Anda" />
                <label htmlFor="password">Password</label> 
                    <input type="password" id="password" placeholder="Masukkan password Anda" />

            </div>
            <div className="actions">
                <button className="btn-login" onClick={<HomePage />}>Daftar</button>
                <Link to="/login" className='daftar'>Sudah punya akun? Masuk disini</Link>
            </div>
            </form>
        </div>
    </div>
  )
}

export default RegisterForm