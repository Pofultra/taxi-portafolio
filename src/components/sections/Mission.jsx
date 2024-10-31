import React from 'react';
import { Phone, MessageSquare, Car, Clock, Shield, Star, MapPin, Mail, Users, Settings, Wind } from 'lucide-react';

export const Mission = () => {
  return (
    <section className="py-16 bg-black text-white">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center">
          <h3 className="text-yellow-500 text-xl font-semibold mb-4">Mission</h3>
          <p className="text-lg">
            To provide personalized, safe, and reliable transportation services with a focus on 
            convenience and customer satisfaction, ensuring every ride feels like a premium experience.
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-yellow-500 text-xl font-semibold mb-4">Vision</h3>
          <p className="text-lg">
            To become the most trusted and preferred solo driver service in the city, known for 
            exceptional customer care, efficiency, and a commitment to safety.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
};
