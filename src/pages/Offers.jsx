import React from "react";

const offersData = [
  { id: 1, title: "20% off on all Desserts" },
  { id: 2, title: "Buy 1 Get 1 Free Pizza" },
  { id: 3, title: "Free Cold Drink with any Main Course" },
  { id: 4, title: "Weekend Special Combo: 30% off" },
  { id: 5, title: "Happy Hour Drinks: 50% off (5 PM - 7 PM)" },
];

export default function Offers() {
  return (
    <section id="offers" className="py-16 bg-[#495E57] min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-12 text-white text-center">
          Offers & Discounts
        </h2>

        {/* Grid with Offers List and Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Column: Offers */}
          <div>
            <ul className="flex flex-col gap-6 max-w-xl mx-auto md:mx-0">
              {offersData.map((offer) => (
                <li
                  key={offer.id}
                  className="flex items-center gap-4 cursor-pointer transition rounded-lg p-4"
                >
                  <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full flex-shrink-0"></span>
                  <span className="text-lg text-white font-medium transition-colors hover:text-yellow-300">
                    {offer.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Image */}
          <div className="w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/offers.jpg"
              alt="Offers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
