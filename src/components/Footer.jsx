import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaBalanceScale,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/918947074077"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp size={32} />
      </a>


      <footer className="relative overflow-hidden bg-gradient-to-b from-[#081120] via-[#0b1730] to-black text-white">

        {/* Background Effects */}
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative mx-auto  px-2 pt-10">
          {/* MAIN FOOTER */}
          <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-5">

            {/* COMPANY */}
            <div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#d4af37] to-yellow-500 text-black">
                <FaBalanceScale size={30} />
              </div>

              <h4 className="mb-4 text-2xl font-bold text-white">
                Advocate Rajat Purohit
              </h4>

              <p className="leading-8 text-gray-400">
                Providing professional legal services with integrity,
                dedication and excellence. Trusted legal guidance for
                civil, criminal, family and corporate matters.
              </p>

              <div className="mt-6 flex gap-4">
                {[
                  {
                    icon: <FaFacebookF />,
                    href: "https://www.facebook.com/advocaterajatpurohit",
                  },
                  {
                    icon: <FaInstagram />,
                    href: "https://www.instagram.com/rajat_purohit_?igsh=MXRnYzBobG1rdHNhOQ%3D%3D",
                  },
                  {
                    icon: <FaLinkedinIn />,
                    href: "https://www.linkedin.com/in/rajat-purohit-38644736a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
                  },
                  {
                    icon: <FaYoutube />,
                    href: "https://www.youtube.com/@advocaterajatpurohit",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-[#d4af37] hover:text-black"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-xl font-bold text-[#d4af37]">
                Quick Links
              </h3>

              <div className="mb-5 mt-2 h-1 w-12 rounded-full bg-[#d4af37]" />

              <ul className="space-y-4 text-gray-300">

                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About" },
                  { to: "/services", label: "Services" },
                  { to: "/practice-areas", label: "Practice Areas" },
                  { to: "/blog", label: "Blog" },
                  { to: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `transition duration-300 hover:translate-x-2 ${isActive ? "text-[#d4af37]" : "hover:text-[#d4af37]"}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* PRACTICE AREAS */}
            <div>
              <h3 className="text-xl font-bold text-[#d4af37]">
                Practice Areas
              </h3>

              <div className="mb-5 mt-2 h-1 w-12 rounded-full bg-[#d4af37]" />

              <ul className="space-y-4 text-gray-300">
                <li>⚖ Civil Cases</li>
                <li>⚖ Criminal Defense</li>
                <li>⚖ Family Law</li>
                <li>⚖ Property Disputes</li>
                <li>⚖ Consumer Cases</li>
                <li>⚖ Corporate Law</li>
                <li>⚖ Legal Consultation</li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-xl font-bold text-[#d4af37]">
                Contact Info
              </h3>

              <div className="mb-5 mt-2 h-1 w-12 rounded-full bg-[#d4af37]" />

              <div className="space-y-5 rounded-3xl p-5 backdrop-blur-md">

                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="mt-1 text-lg text-[#d4af37]" />
                  <p className="text-gray-300">
                    29, Radha Krishna vihar, Govindpura, Jaipur 302044 Rajasthan, India
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-lg text-[#d4af37]" />
                  <p className="text-gray-300">
                    +91 89470 74077
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-lg text-[#d4af37]" />
                  <p className="text-gray-300">
                    advrajatpurohit@gmail.com
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <FaClock className="text-lg text-[#d4af37]" />
                  <p className="text-gray-300">
                    Mon - Sat : 10:00 AM - 06:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div>
              <h3 className="text-xl font-bold text-[#d4af37]">
                Location
              </h3>

              <div className="mb-5 mt-2 h-1 w-12 rounded-full bg-[#d4af37]" />

              <div className="overflow-hidden rounded-3xl border border-[#d4af37]/20 shadow-2xl">

                <iframe
                  title="location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12040.171305679298!2d75.68410774259199!3d26.95165147922727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4d4743d30b61%3A0x852ba4456eccdad1!2sRajat%20Purohit%20Advocate%20%26%20Associates!5e1!3m2!1sen!2sin!4v1780671044152!5m2!1sen!2sin"
                  className="h-64 w-full"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="flex flex-col py-8 items-center justify-between gap-5 text-center text-sm text-gray-400 lg:flex-row">

            <p className="leading-relaxed">
              © {new Date().getFullYear()}
              <span className="mx-1 font-semibold text-[#d4af37]">
                Advocate Rajat Purohit
              </span>
              | Rajasthan High Court Advocate | All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">

              <Link
                to="/privacy-policy"
                className="transition-all duration-300 hover:text-[#d4af37]"
              >
                Privacy Policy
              </Link>

              <span className="hidden text-gray-600 md:block">|</span>

              <Link
                to="/terms"
                className="transition-all duration-300 hover:text-[#d4af37]"
              >
                Terms & Conditions
              </Link>

              <span className="hidden text-gray-600 md:block">|</span>

              <Link
                to="/disclaimer"
                className="transition-all duration-300 hover:text-[#d4af37]"
              >
                Disclaimer
              </Link>

            </div>
          </div>

        </div>

      </footer>
    </>
  );
};

export default Footer;