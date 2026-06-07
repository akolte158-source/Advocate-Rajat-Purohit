import React from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
const Testimonials = () => {
  return (
   <section className="bg-[#faf8f5] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[#c79b4b] uppercase tracking-wider text-sm font-semibold">
            What Our Clients Say
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Client Testimonials
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Testimonial Card */}
          <div className="relative flex items-center">
            <button className="absolute -left-5 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg">
              <ChevronLeft size={18} />
            </button>

            <div className="bg-white rounded-xl shadow-md p-8 w-full">
              <div className="text-5xl text-[#c79b4b] mb-3">❝</div>

              <div className="flex text-[#f5b301] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600 leading-7 mb-6">
                Excellent legal guidance and support throughout my case.
                Highly professional and reliable service.
              </p>

              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/60?img=12"
                  alt="client"
                  className="w-12 h-12 rounded-full"
                />

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Rajesh Verma
                  </h4>
                  <p className="text-sm text-gray-500">
                    Civil Case Client
                  </p>
                </div>
              </div>
            </div>

            <button className="absolute -right-5 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg">
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Trust Card */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold text-center mb-6">
              Trusted By Hundreds Of Clients
            </h3>

            <div className="flex justify-center items-center mb-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5, 6].map((id) => (
                  <img
                    key={id}
                    src={`https://i.pravatar.cc/60?img=${id}`}
                    alt=""
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                ))}
              </div>

              <div className="ml-3 w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">
                +250
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-4xl font-bold mb-2">4.9/5</h2>

              <div className="flex justify-center text-[#f5b301] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600">
                Based on 250+ Google Reviews
              </p>

              <div className="mt-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="Google"
                  className="w-10 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;