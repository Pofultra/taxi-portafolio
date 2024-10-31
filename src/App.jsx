// App.jsx - Componente principal
import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Mission } from './components/sections/Mission';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Mission />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;