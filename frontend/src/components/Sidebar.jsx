import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-yellow-500 text-white flex flex-col fixed h-screen">
      <div className="p-4 text-2xl font-bold border-b border-orange-500">
        Dashboard
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          <li>
            <Link to="/" className="hover:text-gray-200">
              📊 Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-200">
              📦 Products
            </Link>
          </li>
          <li>
            <Link to="/addProducts" className="hover:text-gray-200">
              ➕ Add Product
            </Link>
          </li>
          <li>
            <Link to="/customers" className="hover:text-gray-200">
              👥 Customers
            </Link>
          </li>
          <li>
            <Link to="/orders" className="hover:text-gray-200">
              📝 Orders
            </Link>
          </li>
          <li>
            <Link to="/reports" className="hover:text-gray-200">
              📑 Reports
            </Link>
          </li>
          <li>
            <Link to="/settings" className="hover:text-gray-200">
              ⚙️ Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
