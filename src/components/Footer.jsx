// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { SiSwiggy, SiZomato } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 relative" id="contact">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
        
        {/* Navigation */}
        <div className="items-center">
          <h3 className="text-xl font-bold mb-4">Navigation</h3>
          <div className="border border-yellow-500 mb-6 rounded w-72 mx-auto"></div>
          <ul className="flex flex-col gap-2">
            <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#specials" className="hover:text-yellow-400 transition">Specials</a></li>
            <li><a href="#offers" className="hover:text-yellow-400 transition">Offers</a></li>
            <li><a href="#testimonials" className="hover:text-yellow-400 transition">Testimonials</a></li>
            <li><Link to="/menu" className="hover:text-yellow-400 transition">Menu</Link></li>
            <li><Link to="/book-table" className="hover:text-yellow-400 transition">Book a Table</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <div className="border border-yellow-500 mb-6 rounded w-72 mx-auto"></div>
          <p>123 Lemon Street, Citrus City, 560001</p>
          <p>Phone: +91 9876543210</p>
          <p>Email: littlelemon@gmail.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="border border-yellow-500 mb-6 rounded w-72 mx-auto"></div>
          <div className="flex justify-center gap-4 text-2xl">
            <button className="hover:text-yellow-400 transition" aria-label="Instagram"><FaInstagram /></button>
            <button className="hover:text-yellow-400 transition" aria-label="Facebook"><FaFacebookF /></button>
            <button className="hover:text-yellow-400 transition" aria-label="Twitter"><FaTwitter /></button>
            <button className="hover:text-yellow-400 transition" aria-label="Swiggy"><SiSwiggy /></button>
            <button className="hover:text-yellow-400 transition" aria-label="Zomato"><SiZomato /></button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-12 py-4 text-center">
        &copy; Dhananjay Kar. All rights reserved, 2025.
      </div>
    </footer>
  );
}
