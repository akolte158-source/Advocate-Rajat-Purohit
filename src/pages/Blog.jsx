import React from "react";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "Understanding Your Legal Rights in Property Disputes",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    author: "Advocate Rajat Purohit",
    date: "15 June 2026",
    excerpt:
      "Learn the essential legal rights and remedies available in property disputes and land ownership conflicts.",
  },
  {
    id: 2,
    title: "How to Apply for Bail in Criminal Cases",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744",
    author: "Advocate Rajat Purohit",
    date: "10 June 2026",
    excerpt:
      "A complete guide on anticipatory bail, regular bail, legal procedures, and important considerations.",
  },
  {
    id: 3,
    title: "Family Law: Divorce and Child Custody Explained",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    author: "Advocate Rajat Purohit",
    date: "05 June 2026",
    excerpt:
      "Understanding divorce proceedings, child custody rights, maintenance, and family court procedures.",
  },
  {
    id: 4,
    title: "Consumer Protection Laws in India",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    author: "Advocate Rajat Purohit",
    date: "01 June 2026",
    excerpt:
      "Know your rights as a consumer and learn how to file complaints against unfair trade practices.",
  },
];

const Blog = () => {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-[#081120] py-35 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Legal Blog
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Stay informed with legal insights, expert guidance,
            and updates on important legal matters.
          </p>

        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <img
                src={blog.image}
                alt={blog.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">

                <div className="mb-4 flex flex-wrap gap-4 text-sm text-gray-500">

                  <div className="flex items-center gap-2">
                    <FaUser />
                    {blog.author}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    {blog.date}
                  </div>

                </div>

                <h3 className="mb-4 text-xl font-bold text-[#081120]">
                  {blog.title}
                </h3>

                <p className="mb-6 text-gray-600 leading-7">
                  {blog.excerpt}
                </p>

                <button className="flex items-center gap-2 font-semibold text-[#081120] transition hover:text-[#d4af37]">
                  Read More
                  <FaArrowRight />
                </button>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white py-20">

        <div className="max-w-4xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold text-[#081120] mb-6">
            Subscribe for Legal Updates
          </h2>

          <p className="text-gray-600 mb-8">
            Get the latest legal insights and important updates
            delivered directly to your inbox.
          </p>

          <form className="flex flex-col gap-4 md:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-xl border p-4 outline-none focus:border-[#d4af37]"
            />

            <button
              type="submit"
              className="rounded-xl bg-[#d4af37] px-8 py-4 font-bold text-black transition hover:bg-yellow-500"
            >
              Subscribe
            </button>
          </form>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#081120] py-20 text-white">

        <div className="max-w-5xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Need Legal Assistance?
          </h2>

          <p className="mb-8 text-lg text-gray-300">
            Consult with Advocate Rajat Purohit for professional
            legal advice and representation.
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

export default Blog;