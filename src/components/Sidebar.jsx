import React from "react";
import { FaBitcoin, FaHome, FaChartLine } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/" },
    { name: "Market", icon: <FaChartLine />, path: "/market" },
    { name: "Portfolio", icon: <MdAttachMoney />, path: "/portfolio" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-60 p-6 z-40 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}
        ${
          isOpen
            ? "bg-gray-900/80 backdrop-blur-md sm:bg-gray-900 sm:backdrop-blur-0"
            : "bg-gray-900"
        }
        text-white shadow-lg`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <FaBitcoin className="text-yellow-400 text-3xl" />
        <h1 className="text-2xl font-bold">CryptoDash</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-6 text-lg font-medium">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 hover:text-yellow-400 transition ${
                isActive ? "text-yellow-400" : "text-white"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
