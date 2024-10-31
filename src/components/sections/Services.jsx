import React from 'react';
import { Phone, MessageSquare, Car, Clock, Shield, Star, MapPin, Mail, Users, Settings, Wind } from 'lucide-react';


const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <Icon size={40} className="text-yellow-500 mb-4"/>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
export const Services = () => {
  return (
    <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <ServiceCard
          icon={Shield}
          title="Best Prices Guarantee"
          description="Enjoy competitive rates without compromising on quality or comfort."
        />
        <ServiceCard
          icon={Clock}
          title="24/7 Availability"
          description="Reliable transportation anytime, day or night, whenever you need it."
        />
        <ServiceCard
          icon={Star}
          title="Experienced Driver"
          description="Professional driving with years of experience for a smooth and safe journey."
        />
      </div>
    </div>
  </section>
  );
};
