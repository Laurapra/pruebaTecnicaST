import React from 'react';
import { ModeToggle } from './model-toggle';

const Header = () => {
  return (
    <header className="bg-background border-b border-foreground text-white p-4 flex justify-between items-center">
      <h1 className="text-3xl font-semibold text-foreground">Articulos</h1>
      <nav className='ml-auto'>
        <ul className="flex space-x-4">
          <li> <ModeToggle></ModeToggle></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
