import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100/10 text-gray-700 p-2 text-center shadow-inner">
      <p className="flex justify-center items-center gap-2 text-sm md:text-base font-medium">
        Designed & Developed by{" "}
        <span className="text-white font-semibold">Arslan</span> with
        <FaHeart className="text-red-500" />
      </p>
    </footer>
  );
};

export default Footer;
