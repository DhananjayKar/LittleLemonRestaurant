// src/pages/BookTable.jsx
import React, { useState, useEffect, useRef } from "react";
import ConfirmModal from "../components/ConfirmModal";

// Shape class
class Shape {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.vx = Math.random() * 0.5 - 0.25;
    this.vy = Math.random() * 0.5 - 0.25;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < this.radius || this.x > window.innerWidth - this.radius)
      this.vx *= -1;
    if (this.y < this.radius || this.y > window.innerHeight - this.radius)
      this.vy *= -1;
  }

  isHover(mousePos) {
    const dx = this.x - mousePos.x;
    const dy = this.y - mousePos.y;
    return Math.sqrt(dx * dx + dy * dy) < this.radius + 20;
  }

  split() {
    const splitParticles = [];
    const count = Math.floor(Math.random() * 4) + 3;
    for (let i = 0; i < count; i++) {
      splitParticles.push(new Particle(this.x, this.y, this.color));
    }
    return splitParticles;
  }
}

// Particle class
class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 5 + 3;
    this.color = color;
    this.life = 60;
    this.vx = Math.random() * 4 - 2;
    this.vy = Math.random() * 4 - 2;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    this.life--;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.05; // gravity
  }
}

export default function BookTable() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    date: "",
    time: "",
    seats: "",
    category: "Window-side",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const canvasRef = useRef(null);
  const shapes = useRef([]);
  const particles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Thank you, ${formData.name}! Your table for ${formData.seats} people has been booked on ${formData.date} at ${formData.time}.`;
    setModalMessage(message);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    window.location.href = "/";
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);

    const colors = ["#FDCB6E", "#FF6B6B", "#55EFC4", "#6C5CE7"];
    for (let i = 0; i < 20; i++) {
      shapes.current.push(
        new Shape(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight,
          Math.random() * 30 + 15,
          colors[Math.floor(Math.random() * colors.length)]
        )
      );
    }

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      shapes.current.forEach((shape) => {
        shape.update();
        shape.draw(ctx);
      });
      particles.current.forEach((p, index) => {
        p.update();
        p.draw(ctx);
        if (p.life <= 0) particles.current.splice(index, 1);
      });
      requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      shapes.current.forEach((shape) => {
        if (shape.isHover(mouse.current)) {
          particles.current.push(...shape.split());
        }
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex justify-center items-start bg-[#495E57] px-4 pt-28 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      ></canvas>

      <div className="bg-white/20 backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-xl w-full max-w-3xl z-10 border border-white/30">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-yellow-300">
          Book a Table
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-gray-100">
          {/* Name */}
          <label className="text-white font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none text-gray-800"
          />

          {/* Contact */}
          <label className="text-white font-semibold">Contact Number</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="p-4 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none text-gray-800"
          />

          {/* Email */}
          <label className="text-white font-semibold">Email (optional)</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none text-gray-800"
          />

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-white font-semibold">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="p-4 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none text-gray-800 w-full"
              />
            </div>
            <div>
              <label className="text-white font-semibold">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="p-4 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none text-gray-800 w-full"
              />
            </div>
          </div>

          {/* Seats */}
          <label className="text-white font-semibold">Number of Seats</label>
          <input
            type="number"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
            required
            min="1"
            className="p-4 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none text-gray-800"
          />

          {/* Category */}
          <label className="text-white font-semibold">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="p-4 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none text-gray-800"
          >
            <option>Window-side</option>
            <option>Private</option>
            <option>Casual</option>
            <option>Solo</option>
            <option>For Disabled</option>
          </select>

          <button
            type="submit"
            className="bg-yellow-500 text-white p-4 rounded-xl hover:bg-yellow-600 transition font-medium mt-3"
          >
            Confirm Booking
          </button>
        </form>
      </div>

      <ConfirmModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        message={modalMessage}
      />
    </section>
  );
}
