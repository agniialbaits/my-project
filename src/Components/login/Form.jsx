
import React, { useRef } from 'react';
import './Form.css';

// Penjelasan: Menambahkan useRef untuk containerRef dan fungsi handleSignIn/handleSignUp agar tidak error
const Form = () => {
    const containerRef = useRef(null);

    const handleSignUp = () => {
        if (containerRef.current) {
            containerRef.current.classList.add('right-panel-active');
        }
    };

    const handleSignIn = () => {
        if (containerRef.current) {
            containerRef.current.classList.remove('right-panel-active');
        }
    };

    return (
        <div className="container" id="container" ref={containerRef}>
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1 className="title">Buat Akun!</h1>
                    <span>gunakan email aktif anda untuk Daftar</span>
                    <div className="input-group">
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Kata Sandi" />
                    </div>
                    <button className="btn-login">Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1 className="title">Selamat Datang Kembali!</h1>
                    <span>isi data akun anda untuk login</span>
                    <div className="input-group">
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Kata Sandi"/>
                        <div className="a-group">
                            <a href="#">Lupa kata sandi?</a>
                        </div>
                    </div>
                    <button className="btn-login">Masuk</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Selamat Datang Kembali!</h1>
                        <p>Untuk tetap terhubung dengan kami, silakan masuk dengan informasi pribadi Anda</p>
                        <button className="ghost" id="signIn" onClick={handleSignIn}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hallo! </h1>
                        <p>Masukkan detail pribadi Anda dan dapatkan rumah impian anda bersama kami</p>
                        <button className="ghost" id="signUp" onClick={handleSignUp}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;