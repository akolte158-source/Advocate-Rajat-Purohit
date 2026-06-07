import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Your message has been submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-slate-50">

      {/* Hero Section */}
      <section className="bg-[#081120] py-35 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto max-w-2xl text-gray-300">
            Need professional legal guidance? Contact Advocate Rajat Purohit
            for trusted legal consultation and representation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">

            <h2 className="mb-6 text-3xl font-bold text-[#081120]">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border p-4 outline-none focus:border-[#d4af37]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border p-4 outline-none focus:border-[#d4af37]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border p-4 outline-none focus:border-[#d4af37]"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-xl border p-4 outline-none focus:border-[#d4af37]"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Enter your legal query..."
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl border p-4 outline-none focus:border-[#d4af37]"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-[#d4af37] py-4 font-bold text-black transition hover:bg-yellow-500"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>

            <div className="rounded-3xl bg-[#081120] p-8 text-white shadow-xl">

              <h2 className="mb-8 text-3xl font-bold text-[#d4af37]">
                Contact Information
              </h2>

              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt
                    className="mt-1 text-[#d4af37]"
                    size={22}
                  />
                  <div>
                    <h4 className="font-semibold">Office Address</h4>
                    <p className="text-gray-300">
                     29, Radha Krishna vihar, Govindpura, Jaipur 302044 Rajasthan, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaPhoneAlt
                    className="mt-1 text-[#d4af37]"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold">Phone Number</h4>
                    <p className="text-gray-300">
                      +91 89470 74077 
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaEnvelope
                    className="mt-1 text-[#d4af37]"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold">Email Address</h4>
                    <p className="text-gray-300">
                      advrajatpurohit@gmail.com 
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaClock
                    className="mt-1 text-[#d4af37]"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold">
                      Working Hours
                    </h4>
                    <p className="text-gray-300">
                      Monday - Saturday
                    </p>
                    <p className="text-gray-300">
                      10:00 AM - 06:00 PM
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/918947074077"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex items-center justify-center gap-3 rounded-xl bg-green-500 px-6 py-4 font-bold text-white transition hover:bg-green-600"
                >
                  <FaWhatsapp />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-8 overflow-hidden rounded-3xl shadow-xl">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12040.171305679298!2d75.68410774259199!3d26.95165147922727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4d4743d30b61%3A0x852ba4456eccdad1!2sRajat%20Purohit%20Advocate%20%26%20Associates!5e1!3m2!1sen!2sin!4v1780671044152!5m2!1sen!2sin"
                className="h-[350px] w-full"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
