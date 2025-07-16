import React from "react";
import { FaBitcoin, FaHome, FaChartLine } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-full sm:w-60 h-screen bg-gray-900 text-white fixed top-0 left-0 flex flex-col items-start p-6 shadow-lg z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-8">
        <FaBitcoin className="text-yellow-400 text-3xl" />
        <h1 className="text-2xl font-bold">CryptoDash</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-6 text-lg font-medium w-full">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 transition ${
              isActive ? "text-yellow-400" : "hover:text-yellow-400"
            }`
          }
        >
          <FaHome />
          Dashboard
        </NavLink>

        <NavLink
          to="/market"
          className={({ isActive }) =>
            `flex items-center gap-3 transition ${
              isActive ? "text-yellow-400" : "hover:text-yellow-400"
            }`
          }
        >
          <FaChartLine />
          Market
        </NavLink>

        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `flex items-center gap-3 transition ${
              isActive ? "text-yellow-400" : "hover:text-yellow-400"
            }`
          }
        >
          <MdAttachMoney />
          Portfolio
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
