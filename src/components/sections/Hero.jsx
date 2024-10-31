import React from 'react';
import { Phone, MessageSquare, ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen bg-black text-white pt-16">
      <div className="absolute inset-0 bg-[url('/public/taxi-amarillo-conduciendo-calle-edificios-al-fondo_725455-658.png')] opacity-50 bg-cover bg-center" />
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wider space-y-2">
          <div>Your</div>
          <div>fast</div>
          <div>and</div>
          <div>safe</div>
          <div>ride</div>
        </h1>
        <p className="text-xl">Just one click away with Martinto Gomez Taxi</p>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400">
            <Phone size={20} /> Call
          </button>
          <button className="flex items-center gap-2 border-2 border-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-500/10">
            <MessageSquare size={20} /> Message
          </button>
        </div>
      </div>
    </section>
  );
};