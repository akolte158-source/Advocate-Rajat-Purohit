import React from "react";
import {
  FaGavel,
  FaBalanceScale,
  FaHome,
  FaUsers,
  FaBriefcase,
  FaShieldAlt,
  FaLandmark,
  FaUniversity,
} from "react-icons/fa";

const practiceAreas = [
  {
    icon: <FaLandmark size={45} />,
    title: "Civil Cases",
    description:
      "Property disputes, contract matters, recovery cases and more.",
  },
  {
    icon: <FaGavel size={45} />,
    title: "Criminal Defense",
    description:
      "Bail, trial defense, appeals and all criminal law matters.",
  },
  {
    icon: <FaUsers size={45} />,
    title: "Family Law",
    description:
      "Divorce, child custody, maintenance and other family disputes.",
  },
  {
    icon: <FaBriefcase size={45} />,
    title: "Corporate Law",
    description:
      "Business registration, compliance, agreements and legal advisory.",
  },
  {
    icon: <FaShieldAlt size={45} />,
    title: "Consumer Cases",
    description:
      "Consumer rights, refund claims, product liability matters.",
  },
  {
    icon: <FaBalanceScale size={45} />,
    title: "Legal Consultation",
    description:
      "Get professional legal advice for your personal or business matters.",
  },
];

const PracticeAreas = () => {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-[#081120] py-35 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Practice Areas
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Comprehensive legal services designed to protect your rights,
            resolve disputes, and provide trusted legal guidance.
          </p>

        </div>
      </section>

      {/* Practice Areas */}
      <section className="max-w-7xl mx-auto px-4 py-20">

        <div className="text-center mb-16">

          <p className="text-[#d4af37] uppercase tracking-widest text-sm font-medium mb-4">
            ⊡ PRACTICE AREAS ⊣
          </p>

          <h2 className="text-5xl font-bold text-[#081120] mb-6">
            Our Legal Practice Areas
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            We provide a wide range of legal services for individuals, families and businesses.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="mb-6 text-[#d4af37]">
                {area.icon}
              </div>

              <h3 className="mb-4 text-xl font-bold text-[#081120]">
                {area.title}
              </h3>

              <p className="leading-7 text-gray-600 mb-6">
                {area.description}
              </p>

              <a href="#contact" className="text-[#d4af37] font-medium hover:text-[#e6c200] transition">
                Read More →
              </a>

            </div>
          ))}

        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#081120]">
              Why Clients Trust Us
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-slate-50 p-8 shadow-lg text-center">

              <h3 className="text-5xl font-bold text-[#d4af37]">
                10+
              </h3>

              <p className="mt-3 text-gray-600">
                Years of Legal Experience
              </p>

            </div>

            <div className="rounded-3xl bg-slate-50 p-8 shadow-lg text-center">

              <h3 className="text-5xl font-bold text-[#d4af37]">
                500+
              </h3>

              <p className="mt-3 text-gray-600">
                Cases Successfully Handled
              </p>

            </div>

            <div className="rounded-3xl bg-slate-50 p-8 shadow-lg text-center">

              <h3 className="text-5xl font-bold text-[#d4af37]">
                95%
              </h3>

              <p className="mt-3 text-gray-600">
                Client Satisfaction
              </p>

            </div>

          </div>

        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-[#081120] py-20 text-white">

        <div className="max-w-5xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Need Legal Assistance?
          </h2>

          <p className="text-lg text-gray-300 mb-8">
            Schedule a consultation today and get expert legal guidance
            for your legal matter.
          </p>

          <a
            href="/contact"
            className="inline-block rounded-xl bg-[#d4af37] px-8 py-4 font-bold text-black transition hover:scale-105"
          >
            Book Consultation
          </a>

        </div>

      </section>
    </div>
  );
};

export default PracticeAreas;
