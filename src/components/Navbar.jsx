import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Crypto Tracker</h1>
        <ul className="flex space-x-6 text-lg">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">Market</li>
          <li className="hover:text-yellow-400 cursor-pointer">About</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
