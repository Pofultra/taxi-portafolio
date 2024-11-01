import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">MG TAXI</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Phone size={20} className="text-yellow-500"/>
              <span className="break-all">+41 55 7777 00</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Mail size={20} className="text-yellow-500"/>
              <span className="break-all">service@martintogomez-taxi.com</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <MapPin size={20} className="text-yellow-500"/>
              <span className="break-words">1234 Bahnhofstrasse, Zurich, 8001 Switzerland</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
