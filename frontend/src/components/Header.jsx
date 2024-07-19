import React from 'react';
import { ModeToggle } from './model-toggle';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-3xl font-extralight">Mi Listado</h1>
      <nav className='ml-auto'>
        <ul className="flex space-x-4">
          <li> <ModeToggle></ModeToggle></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
