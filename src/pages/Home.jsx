// src/components/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      id="home"
      className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[90vh] px-6 pt-24 md:pt-10 md:px-12 gap-8 bg-[#495E57]"
    >
      {/* Left Content */}
      <div className="text-center md:text-left max-w-lg mx-auto md:mx-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-300 mb-4">
          Welcome to Little Lemon Restaurant.
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-yellow-200 mb-4">
          New Delhi
        </h2><br />
        <p className="text-base sm:text-lg text-gray-200 mb-6 leading-relaxed">
          We are a family owned Indian restaurant, focused on traditional
          recipes served with a modern twist.
          <br className="hidden sm:block" />
          <br className="hidden sm:block" />
          Experience authentic flavors and a cozy dining atmosphere.
          Fresh ingredients, delicious specials, and warm hospitality await you.
        </p>

        <Link
          to="/book-table"
          className="inline-block px-6 py-3 bg-yellow-500 text-white rounded-lg text-base sm:text-lg font-medium shadow-md hover:bg-yellow-600 transition"
        >
          Book a Table
        </Link>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end items-center min-h-[90vh]">
        <div className="h-[60vh] max-h-[80vh] aspect-square">
          <img className="w-full h-full object-cover rounded-xl shadow-lg" 
            src="/images/home.jpeg" 
            alt="Home" />
        </div>
      </div>
    </div>
  );
}
