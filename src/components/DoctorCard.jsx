import React from 'react';

const DoctorCard = ({ doctor, onClick }) => {
  return (
    <div
      onClick={() => onClick(doctor)}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100"
    >
      <div className="relative h-48 bg-gradient-to-br from-teal-400 to-emerald-500">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-32 h-32 rounded-full border-4 border-white absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 shadow-lg"
        />
      </div>
      <div className="pt-20 pb-6 px-6 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{doctor.name}</h3>
        <p className="text-teal-600 font-medium mb-2">{doctor.specialty}</p>
        <p className="text-gray-500 text-sm mb-3">{doctor.experience} experience</p>
        <div className="flex items-center justify-center space-x-2">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            doctor.availability === 'Available'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}>
            {doctor.availability}
          </span>
          <span className="text-yellow-500">★ {doctor.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
