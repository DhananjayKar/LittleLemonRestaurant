// src/components/DishCard.jsx
import React from "react";

export default function DishCard({ dish, onAdd }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition 
                    flex flex-row lg:flex-col">
      {/* Image */}
      <img
        src={dish.image}
        alt={dish.name}
        className="w-1/2 lg:w-full h-48 object-cover flex-shrink-0"
      />

      {/* Content */}
      <div className="p-6 flex flex-col justify-between flex-1 w-1/2 lg:w-full">
        <div>
          <h3 className="text-2xl font-semibold mb-2">{dish.name}</h3>
          <p className="text-gray-600 mb-4">{dish.description}</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-green-600">{dish.price}</span>
          <button
            onClick={() => onAdd(dish)}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            <img
              src="/images/cart.jpg"
              alt="cart logo"
              className="w-8 h-7"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
