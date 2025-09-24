// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // lightweight icons

export default function Navbar({ hideSections = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to check if a section should be hidden
  const isHidden = (section) => hideSections.includes(section);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <img src="/images/Logo.jpg" alt="Logo" className="w-40" />

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-md border border-gray-300 hover:bg-gray-100"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Nav Links (Desktop) */}
        <div className="hidden lg:flex flex-wrap gap-4">
          {!isHidden("Home") && (
            <a
              href="/"
              className="px-5 py-2 rounded-lg bg-white text-gray-700 font-medium shadow-inner border border-gray-200 hover:bg-gray-50 hover:shadow-md transition"
            >
              Home
            </a>
          )}
          {!isHidden("Specials") && (
            <a
              href="#specials"
              className="px-5 py-2 rounded-lg bg-white text-gray-700 font-medium shadow-inner border border-gray-200 hover:bg-gray-50 hover:shadow-md transition"
            >
              Specials
            </a>
          )}
          {!isHidden("Offers") && (
            <a
              href="#offers"
              className="px-5 py-2 rounded-lg bg-white text-gray-700 font-medium shadow-inner border border-gray-200 hover:bg-gray-50 hover:shadow-md transition"
            >
              Offers
            </a>
          )}
          {!isHidden("Testimonials") && (
            <a
              href="#testimonials"
              className="px-5 py-2 rounded-lg bg-white text-gray-700 font-medium shadow-inner border border-gray-200 hover:bg-gray-50 hover:shadow-md transition"
            >
              Testimonials
            </a>
          )}
          {!isHidden("Contact") && (
            <a
              href="#contact"
              className="px-5 py-2 rounded-lg bg-white text-gray-700 font-medium shadow-inner border border-gray-200 hover:bg-gray-50 hover:shadow-md transition"
            >
              Contact
            </a>
          )}
          <Link
            to="/menu"
            className="px-5 py-2 rounded-lg bg-white text-gray-700 font-medium shadow-inner border border-gray-200 hover:bg-gray-50 hover:shadow-md transition"
          >
            Menu
          </Link>
          <Link
            to="/book-table"
            className="px-5 py-2 rounded-lg bg-white text-gray-700 font-medium shadow-inner border border-gray-200 hover:bg-gray-50 hover:shadow-md transition"
          >
            Book a Table
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-gray-200">
          <div className="flex flex-col items-start px-6 py-4 gap-3">
            {!isHidden("Home") && (
              <a href="#home" onClick={() => setIsOpen(false)}>
                Home
              </a>
            )}
            {!isHidden("Specials") && (
              <a href="#specials" onClick={() => setIsOpen(false)}>
                Specials
              </a>
            )}
            {!isHidden("Offers") && (
              <a href="#offers" onClick={() => setIsOpen(false)}>
                Offers
              </a>
            )}
            {!isHidden("Testimonials") && (
              <a href="#testimonials" onClick={() => setIsOpen(false)}>
                Testimonials
              </a>
            )}
            {!isHidden("Contact") && (
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            )}
            <Link to="/menu" onClick={() => setIsOpen(false)}>
              Menu
            </Link>
            <Link to="/book-table" onClick={() => setIsOpen(false)}>
              Book a Table
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
