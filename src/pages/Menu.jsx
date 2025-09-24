// src/pages/Menu.jsx
import React, { useState } from "react";
import DishCard from "../components/DishCard";
import ConfirmModal from "../components/ConfirmModal";
import menuData from "../data/menu.json";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Dessert");
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filter dishes by active category and search term
  const filteredDishes = menuData[activeCategory].filter((dish) =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (dish) => {
    setModalMessage(`${dish.name} has been added to your cart!`);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  const handleSuggestionClick = (dishName) => {
    setSearchTerm(dishName);
    setShowSuggestions(false);
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen pt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
          Our Menu
        </h2>

        {/* Search Bar */}
        <div className="relative flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search for a dish..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full max-w-md p-3 rounded-full border border-gray-300 focus:outline-none focus:border-yellow-500 shadow-sm"
          />
          {showSuggestions && filteredDishes.length > 0 && (
            <ul className="absolute top-full mt-1 w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden z-10">
              {filteredDishes.map((dish) => (
                <li
                  key={dish.id}
                  className="px-4 py-2 cursor-pointer hover:bg-yellow-100"
                  onClick={() => handleSuggestionClick(dish.name)}
                >
                  {dish.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Category Tabs (scrollable on mobile) */}
        <div className="mb-12">
          <div className="flex overflow-x-auto no-scrollbar space-x-3 sm:justify-center sm:flex-wrap">
            {Object.keys(menuData).map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setSearchTerm("");
                }}
                className={`flex-shrink-0 px-5 py-2 rounded-full font-medium transition ${
                  activeCategory === category
                    ? "bg-yellow-500 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDishes.length > 0 ? (
            filteredDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} onAdd={handleAddToCart} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No dishes found.
            </p>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmModal isOpen={modalOpen} onClose={closeModal} message={modalMessage} />
    </section>
  );
}
