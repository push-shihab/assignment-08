import React from "react";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <main className="bg-[#0f172a]">
      <div className="container mx-auto px-3">
        <div className="grid md:grid-cols-3 py-10 gap-15 md:place-items-center border-b border-gray-700">
          <div className="space-y-3">
            <a className="font-extrabold text-3xl cursor-pointer">
              <span className="text-[#38bdf8]">Sun</span>
              <span className="text-white">Cart</span>
            </a>
            <p className="text-gray-600">
              Your go-to destination for premium summer essentials. Beat the
              heat in style
            </p>
            <div className="flex gap-2">
              <a className="p-1.5 rounded-box bg-base-100 cursor-pointer hover:bg-[#38bdf8]">
                <RiFacebookFill />
              </a>
              <a className="p-1.5 rounded-box bg-base-100 cursor-pointer hover:bg-[#38bdf8]">
                <RiInstagramFill />
              </a>
              <a className="p-1.5 rounded-box bg-base-100 cursor-pointer hover:bg-[#38bdf8]">
                <RiLinkedinFill />
              </a>
            </div>
          </div>
          <div>
            <span className="text-xl font-bold text-white">Quick Links</span>
            <ul className="text-gray-600 space-y-1.5 pt-3">
              <li>
                <a className="cursor-pointer hover:text-[#38bdf8]">Home</a>
              </li>
              <li>
                <a className="cursor-pointer hover:text-[#38bdf8]">Products</a>
              </li>
              <li>
                <a className="cursor-pointer hover:text-[#38bdf8]">About</a>
              </li>
            </ul>
          </div>
          <div>
            <span className="text-xl font-bold text-white">Contact</span>
            <ul className="text-gray-600 space-y-1.5 pt-3">
              <li>
                <a>support@suncart.com</a>
              </li>
              <li>
                <a>+1 (800) 786-2278</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center py-4">
          <span className="text-gray-600">
            © 2025 SunCart. All rights reserved.{" "}
          </span>
          <a className="text-[#38bdf8] cursor-pointer">Privacy Policy</a>
        </div>
      </div>
    </main>
  );
};

export default Footer;
