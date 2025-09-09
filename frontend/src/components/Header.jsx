import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-yellow-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo (Left) */}
        <Link to="/">
          <h1 className="text-2xl font-bold">Yahye Hassan</h1>
        </Link>

        {/* Desktop Menu (Center) */}
        <nav className="hidden md:flex gap-6 text-2xl">
          <Link to="/">
            <p className="hover:text-gray-200">Home</p>
          </Link>
          <a href="#" className="hover:text-gray-200">About</a>
          <a href="#" className="hover:text-gray-200">Services</a>
          <a href="#" className="hover:text-gray-200">Contact</a>
        </nav>

        {/* Right Side (Login + Cart) */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:text-gray-200 flex items-center gap-1 text-2xl">
            <i className="fa-solid fa-right-to-bracket"></i> Login
          </a>
          <p className="hover:text-gray-200 flex items-center gap-1 text-2xl bg-green-500 py-2 px-2 rounded-lg"> Register Customer  </p>
          <Link to="/Cart">
            <p className="hover:text-gray-200 flex items-center gap-1 text-2xl">
              <i className="fa-solid fa-cart-shopping"></i> Cart
            </p>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? (
            <i className="fa-solid fa-xmark text-2xl"></i>
          ) : (
            <i className="fa-solid fa-bars text-2xl"></i>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {
        isOpen && (
          <div className="md:hidden bg-yellow-500 px-4 py-3 space-y-3 text-2xl">
            <Link to="/">
              <a href="#" className="block hover:text-gray-200">Home</a>
            </Link>
            <a href="#" className="block hover:text-gray-200">About</a>
            <a href="#" className="block hover:text-gray-200">Services</a>
            <a href="#" className="block hover:text-gray-200">Contact</a>
            <hr className="border-gray-400" />
            <a href="#" className="block hover:text-gray-200 text-2xl">
              <i className="fa-solid fa-right-to-bracket mr-1 "></i> Login
            </a>
            <a href="#" className="block hover:text-gray-200 text-2xl">
              <i className="fa-solid fa-cart-shopping mr- "></i> Cart
            </a>
          </div>
        )
      }
    </header >
  );
};

export default Header;
