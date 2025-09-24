import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import DishCard from "../components/DishCard";
import ConfirmModal from "../components/ConfirmModal";

const specialsData = [
  {
    id: 1,
    name: "Lemon Herb Chicken",
    description: "Tender chicken grilled with lemon, garlic, and fresh herbs.",
    price: "₹450",
    image:
      "/images/LemonHerbChicken.jpeg",
  },
  {
    id: 2,
    name: "Mediterranean Pasta",
    description: "Pasta tossed with olives, feta cheese, tomatoes, and basil.",
    price: "₹380",
    image:
      "/images/MediterraneanPasta.jpeg",
  },
  {
    id: 3,
    name: "Grilled Salmon",
    description: "Perfectly grilled salmon served with lemon butter sauce.",
    price: "₹520",
    image:
      "/images/GrilledSalmon.jpeg",
  },
  {
    id: 4,
    name: "Veggie Delight Pizza",
    description: "Crispy thin crust pizza with fresh seasonal vegetables.",
    price: "₹400",
    image:
      "/images/VeggieDelightPizza.jpeg",
  },
];

export default function Specials() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleOrderNow = (dish) => {
    setModalMessage(`${dish.name} has been added to your cart!`);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section
      id="specials"
      className="min-h-screen flex flex-col justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-gray-800">
          Today’s Specials
        </h2>

        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        grabCursor={true}        // 👈 allows touch swipe gestures
        touchStartPreventDefault={false} // 👈 prevents blocking default touch behaviors
        breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        }}
        >
        {specialsData.map((dish) => (
            <SwiperSlide key={dish.id}>
            <div className="flex justify-center">
                <DishCard dish={dish} onAdd={handleOrderNow} />
            </div>
            </SwiperSlide>
        ))}
        </Swiper>

      </div>

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={modalOpen}
        onClose={closeModal}
        message={modalMessage}
      />
    </section>
  );
}
