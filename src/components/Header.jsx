import React from "react";
import { FaBitcoin, FaBars } from "react-icons/fa";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-gray-900 text-white flex items-center justify-between px-6 z-50 shadow-md shadow-white/10 sm:shadow-black/30">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <FaBitcoin className="text-yellow-400 text-2xl" />
        <h1 className="text-xl font-bold">CryptoDash</h1>
      </div>

      {/* Right: Hamburger (only visible on small screens) */}
      <button
        onClick={toggleSidebar}
        className="sm:hidden bg-gray-800 p-2 rounded-md focus:outline-none"
      >
        <FaBars size={20} />
      </button>
    </header>
  );
};

export default Header;
