import React from 'react';

const HouseCard = ({ image, price, name, location }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg p-4">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-xl" />
      <div className="mt-4">
        <p className="text-xl font-bold">{price}</p>
        <p className="text-gray-600">{name}</p>
        <p className="text-sm text-gray-400">{location}</p>
        <div className="flex gap-2 mt-2">
          <button className="text-sm text-blue-600 border border-blue-600 rounded-lg px-3 py-1">Detail</button>
          <button className="text-sm bg-blue-600 text-white rounded-lg px-3 py-1">Pesan</button>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
