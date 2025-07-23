import React from 'react';
import HouseCard from '../Components/HouseCard';

const houseList = [
  {
    image: "/assets/rumah1.jpg",
    price: "Rp 1,4 Milyar",
    name: "Type 45",
    location: "Grogol"
  },
  {
    image: "/assets/rumah2.jpg",
    price: "Rp 1,4 Milyar",
    name: "Type 45",
    location: "Grogol"
  },
  {
    image: "/assets/rumah3.jpg",
    price: "Rp 1,4 Milyar",
    name: "Type 45",
    location: "Grogol"
  },
  // Kamu bisa tambahkan lebih banyak rumah
];

const ClassicType = () => {
  return (
    <div className="min-h-screen bg-blue-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-1">Tipe rumah Classic</h1>
        <p className="text-gray-600 mb-6">Menampilkan tipe rumah classic yang terdaftar di Surabaya</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {houseList.map((house, index) => (
            <HouseCard key={index} {...house} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassicType;
