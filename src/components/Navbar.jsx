import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md px-6 py-2 flex justify-between items-center sticky top-0 z-50 shadow-lg border-b border-gray-200">
      {/* Logo */}
      <div className="text-3xl text-gray-700 font-[Pacifico] tracking-wide select-none">
        Dreams<span className="text-gray-700">To</span>Do
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 px-4 py-3 text-sm bg-indigo-500 text-white rounded-full shadow hover:bg-indigo-600 transition-all duration-200"
      >
        <FiLogOut size={20} />
        <span className="hidden sm:inline">Logout</span>
      </button>
    </nav>
  );
};

export default Navbar;
