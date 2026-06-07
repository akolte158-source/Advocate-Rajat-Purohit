import React from "react";
import {
  FaBalanceScale,
  FaGavel,
  FaHome,
  FaUsers,
  FaBriefcase,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBalanceScale size={40} />,
    title: "Civil Litigation",
    description:
      "Professional representation in civil disputes, contracts, recovery matters, and legal proceedings.",
  },
  {
    icon: <FaGavel size={40} />,
    title: "Criminal Defense",
    description:
      "Expert legal assistance in criminal cases, bail matters, investigations, and court representation.",
  },
  {
    icon: <FaUsers size={40} />,
    title: "Family Law",
    description:
      "Handling divorce, maintenance, child custody, domestic disputes, and matrimonial matters.",
  },
  {
    icon: <FaHome size={40} />,
    title: "Property Disputes",
    description:
      "Legal guidance for property ownership, partition, land disputes, and real estate litigation.",
  },
  {
    icon: <FaBriefcase size={40} />,
    title: "Corporate Law",
    description:
      "Business agreements, company compliance, legal notices, and corporate advisory services.",
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Legal Consultation",
    description:
      "Professional legal advice and strategic solutions for individuals and businesses.",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-[#081120] py-35 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Legal Services
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Comprehensive legal services tailored to protect your rights,
            interests, and future with professional legal expertise.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#081120]">
            Our Practice Areas
          </h2>

          <p className="mt-4 text-gray-600">
            Providing reliable legal solutions across multiple legal domains.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 text-[#d4af37]">
                {service.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-[#081120]">
                {service.title}
              </h3>

              <p className="mb-6 text-gray-600 leading-7">
                {service.description}
              </p>

              <button className="flex items-center gap-2 font-semibold text-[#081120] transition group-hover:text-[#d4af37]">
                Learn More
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#081120]">
              Why Choose Us
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
                Client Satisfaction Rate
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
            Schedule a consultation today and get professional legal guidance
            for your case.
          </p>

          <a
            href="/contact"
            className="inline-block rounded-xl bg-[#d4af37] px-8 py-4 font-bold text-black transition hover:scale-105"
          >
            Contact Now
          </a>

        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
