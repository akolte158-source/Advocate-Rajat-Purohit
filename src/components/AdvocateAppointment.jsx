import React, { useState } from "react";
import {
  User,
  Phone,
  Mail,
  Calendar,
  Clock,
  ChevronDown,
  Briefcase,
} from "lucide-react";
import lawyer from "../assets/lawyer3.jpeg";

export default function AdvocateAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    caseType: "",
    date: "",
    time: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/appointment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (data.success) {
      alert("Appointment Sent Successfully");
      setFormData({
        name: "",
        phone: "",
        email: "",
        caseType: "",
        date: "",
        time: "",
        details: "",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

  return (
    <section className="bg-[#071224] py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div className="flex flex-col md:flex-row gap-6">

            <div className="overflow-hidden rounded-3xl border border-[#d4af37]/20 bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] w-full md:w-[320px]">

              <img
                src={lawyer}
                alt="Advocate Rajat Purohit"
                className="h-[420px] w-full object-cover transition duration-500 hover:scale-110"
              />

            </div>

            <div className="text-white flex-1">

              <p className="text-[#c9a15a] uppercase text-xs tracking-[2px] mb-2">
                About
              </p>

              <h2 className="text-4xl font-bold mb-2">
                Advocate Rajat Purohit
              </h2>

              <p className="text-[#c9a15a] font-medium mb-5">
                Rajasthan High Court Advocate
              </p>

              <p className="text-gray-300 leading-7 mb-6">
                Professional legal consultation and representation
                for civil, criminal, family and corporate matters.
              </p>

              <ul className="space-y-3 text-gray-300 mb-8">
                <li>✓ Expert in Civil Cases</li>
                <li>✓ Criminal Defense Specialist</li>
                <li>✓ Family & Property Disputes</li>
              </ul>

              <button className="bg-[#c9a15a] hover:bg-[#b88d42] text-black font-semibold px-6 py-3 rounded-md transition">
                KNOW MORE ABOUT ME
              </button>

            </div>

          </div>

          {/* Right Side */}
          <div className="border border-[#c9a15a]/40 rounded-xl p-8 bg-[#08162c]">

            <div className="text-center mb-8">

              <h3 className="text-[#c9a15a] text-3xl font-bold mb-2">
                BOOK AN APPOINTMENT
              </h3>

              <p className="text-gray-400">
                Schedule a consultation with our expert advocate.
              </p>

            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid md:grid-cols-2 gap-4">

                <InputField
                  icon={<User size={18} />}
                  placeholder="Your Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <InputField
                  icon={<Phone size={18} />}
                  placeholder="Mobile Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <InputField
                  icon={<Mail size={18} />}
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <SelectField
                  icon={<Briefcase size={18} />}
                  name="caseType"
                  value={formData.caseType}
                  onChange={handleChange}
                  options={[
                    "Civil Case",
                    "Criminal Case",
                    "Family Law",
                    "Corporate Law",
                    "Consumer Case",
                  ]}
                />

                <InputField
                  icon={<Calendar size={18} />}
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />

                <SelectField
                  icon={<Clock size={18} />}
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  options={[
                    "10:00 AM",
                    "11:00 AM",
                    "12:00 PM",
                    "02:00 PM",
                    "03:00 PM",
                    "04:00 PM",
                    "05:00 PM",
                  ]}
                />

              </div>

              <textarea
                rows="4"
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Case Details"
                required
                className="w-full bg-[#0d1c35] border border-gray-700 rounded-md px-4 py-3 text-white outline-none focus:border-[#c9a15a]"
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-[#c9a15a] py-3 font-semibold text-black transition hover:bg-[#b88d42]"
              >
                BOOK APPOINTMENT
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

function InputField({
  icon,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}) {
  return (
    <div className="relative">

      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full bg-[#0d1c35] border border-gray-700 rounded-md pl-11 pr-4 py-3 text-white outline-none focus:border-[#c9a15a]"
      />

    </div>
  );
}

function SelectField({
  icon,
  name,
  value,
  onChange,
  options,
}) {
  return (
    <div className="relative">

      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10">
        {icon}
      </span>

      <select
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full bg-[#0d1c35] border border-gray-700 rounded-md pl-11 pr-10 py-3 text-white appearance-none outline-none focus:border-[#c9a15a]"
      >
        <option value="">Select</option>

        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <ChevronDown
        size={18}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

    </div>
  );
}