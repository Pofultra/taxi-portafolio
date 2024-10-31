import React from 'react';
import { Car, Users, Settings, Wind } from 'lucide-react';


export const About = () => {
  return (
    <section id="about_us" className="py-16 bg-gray-100">
      <div  className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="max-w-2xl mx-auto space-y-8">
          <p className="text-gray-700 text-center">
            At Martinto Gomez Taxi, we offer reliable and personalized transportation with a dedicated driver.
            Our goal is to provide a comfortable, stress-free experience, ensuring you reach your destination safely and on time.
          </p>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img src="/auto_fondo_vidriera.png" alt="Hyundai Elantra" className="w-full rounded-lg mb-4" />
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Car size={20} className="text-yellow-500" />
                <span>Hyundai Elantra</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} className="text-yellow-500" />
                <span>2 Passengers</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings size={20} className="text-yellow-500" />
                <span>Manual</span>
              </div>
              <div className="flex items-center gap-2">
                <Wind size={20} className="text-yellow-500" />
                <span>Air conditioning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};