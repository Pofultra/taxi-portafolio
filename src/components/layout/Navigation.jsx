// components/layout/Navigation.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { name: 'Contacto', href: '#contacto' }
  ];
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Botón de menú móvil */}
      <button 
        className="md:hidden text-white z-50" 
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menú para dispositivos móviles */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 md:hidden">
          <nav className="flex flex-col items-center justify-center h-full space-y-6">
            {navItems.map(item => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-white text-2xl hover:text-yellow-400 transition-colors"
                onClick={handleNavItemClick}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Menú de escritorio */}
      <nav className="hidden md:block">
        <ul className="flex gap-6">
          {navItems.map(item => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className="text-white hover:text-yellow-400 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};