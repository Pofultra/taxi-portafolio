import React from 'react';
import { Navigation } from './Navigation';

export const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-yellow-400 font-bold text-xl">MG TAXI</div>
        <Navigation />
      </div>
    </header>
  );
};