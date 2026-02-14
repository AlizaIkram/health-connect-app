import React from 'react';
import { Stethoscope, Heart, Activity } from 'lucide-react';
import { doctorsData } from '../data';
import DoctorCard from '../components/DoctorCard';

const HomePage = ({ setCurrentPage, setSelectedDoctor }) => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "General Checkup",
      description: "Comprehensive health examinations and routine screenings"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Specialist Care",
      description: "Expert treatment from our specialized medical professionals"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Emergency Support",
      description: "24/7 emergency medical assistance and urgent care"
    }
  ];

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    setCurrentPage('booking');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-500 via-emerald-500 to-teal-600 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Your Health, Our Priority
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-50 leading-relaxed">
              Book appointments with top medical professionals. Quality healthcare at your fingertips.
            </p>
            <button
              onClick={() => setCurrentPage('booking')}
              className="bg-white text-teal-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              Book Appointment Now
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">Comprehensive healthcare solutions for you and your family</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 text-white">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Expert Doctors</h2>
            <p className="text-gray-600 text-lg">Meet our team of experienced healthcare professionals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctorsData.slice(0, 6).map((doctor) => (
              <DoctorCard 
                key={doctor.id} 
                doctor={doctor} 
                onClick={handleDoctorClick}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('doctors')}
              className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              View All Doctors
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
