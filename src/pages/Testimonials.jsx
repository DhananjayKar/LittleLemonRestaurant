import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const testimonialsData = [
  {
    id: 1,
    name: "Ananya Sharma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review: "Absolutely loved the Lemon Herb Chicken! Cozy ambiance and excellent service.",
  },
  {
    id: 2,
    name: "Rohit Verma",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    rating: 4,
    review: "The Mediterranean Pasta was delightful. Will definitely visit again!",
  },
  {
    id: 3,
    name: "Sanya Gupta",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    review: "Best dining experience! The staff is friendly and the food is top-notch.",
  },
  {
    id: 4,
    name: "Karan Mehta",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    rating: 4,
    review: "Loved the desserts! The atmosphere is welcoming and warm.",
  },
  {
    id: 5,
    name: "Priya Nair",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    rating: 5,
    review: "Hands down the best restaurant in town. Highly recommended!",
  },
  {
    id: 6,
    name: "Amit Kumar",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    rating: 4,
    review: "Tasty food with generous portions. Will surely come back!",
  },
];

export default function Testimonials() {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Testimonials</h2>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonialsData.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition h-full">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">{t.name}</h3>
                <div className="mb-2">{renderStars(t.rating)}</div>
                <p className="text-gray-600">{t.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
