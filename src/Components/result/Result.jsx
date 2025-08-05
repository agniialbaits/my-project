import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import './Result.css';

const Result = () => {
  <h1 style={{ color: 'red' }}></h1>
  return (
    <div className="result-kosong-wrapper">
      <div className="result-kosong-card">
       <img
        src="/img/removebg 1.png"
        alt="Tidak ditemukan"
        className="kosong-img"
      />
        <p className="kosong-text">
          Maaf, Tipe rumah yang kamu pilih tidak tersedia di Sumedang.
          <br />
          Kamu bisa cari tipe rumah lain atau lokasi lain.
        </p>
      </div>
    </div>
  );
};

export default Result;
