import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaBalanceScale,
  FaWhatsapp,
  FaGavel,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-[50vh] overflow-hidden pt-16">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=2000')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Gold Blur Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[50vh] max-w-7xl items-center px-6 py-12">

        <div className="max-w-4xl">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm font-medium text-yellow-400 backdrop-blur-md">
            <FaBalanceScale />
            Rajasthan High Court Advocate
          </div>

          {/* Heading */}
          <h1 className="mb-5 text-4xl font-black leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-6xl">
             Justice.
            <span className="block text-[#d4af37]">
              Integrity.
            </span>
            Excellence.
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
            Advocate Rajat Purohit provides trusted legal representation,
            strategic legal advice, and professional court advocacy for
            individuals, families and businesses across Rajasthan.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <Link
              to="/contact"
              className="rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-400 px-8 py-4 font-bold text-black transition-all duration-300 hover:scale-105"
            >
              Book Consultation
            </Link>

            <a
              href="tel:+918947074077"
              className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-black"
            >
              <FaPhoneAlt />
              Call Now
            </a>

            <a
              href="https://wa.me/918947074077"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-green-500 bg-green-500/10 px-8 py-4 font-semibold text-green-400 transition hover:bg-green-500 hover:text-white"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;