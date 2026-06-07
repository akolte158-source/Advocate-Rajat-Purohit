import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  Building2,
  Gavel,
  Users,
  UserRound,
  FileText,
  ArrowRight,
} from "lucide-react";

import "swiper/css";

const practiceAreas = [
  {
    icon: Building2,
    title: "Civil Cases",
    description:
      "Property disputes, contract matters, recovery cases and more.",
  },
  {
    icon: Gavel,
    title: "Criminal Defense",
    description:
      "Bail, trial defense, appeals and all criminal law matters.",
  },
  {
    icon: Users,
    title: "Family Law",
    description:
      "Divorce, child custody, maintenance and family disputes.",
  },
  {
    icon: Building2,
    title: "Corporate Law",
    description:
      "Business registration, agreements and legal advisory.",
  },
  {
    icon: UserRound,
    title: "Consumer Cases",
    description:
      "Consumer rights, refund claims and compensation matters.",
  },
  {
    icon: FileText,
    title: "Legal Consultation",
    description:
      "Professional legal advice for personal and business matters.",
  },
];

export default function PracticeAreasSlider() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-12">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-[#c9a15a]" />
            <span className="text-xs font-semibold uppercase tracking-[3px] text-[#c9a15a]">
              Practice Areas
            </span>
            <span className="h-[1px] w-12 bg-[#c9a15a]" />
          </div>

          <h2 className="mb-3 text-3xl font-bold text-[#08162c] md:text-4xl">
            Our Legal Practice Areas
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-gray-600 md:text-base">
            We provide comprehensive legal services for individuals,
            families and businesses across Rajasthan.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          loop={false}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {practiceAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <SwiperSlide key={index}>
                <div className="group relative flex h-[280px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#c9a15a]/40 hover:shadow-xl">

                  {/* Gold Top Border */}
                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-yellow-500 to-yellow-300" />

                  {/* Icon */}
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-400 shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-black" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-[#08162c]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="flex-1 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>

                  {/* Button */}
                  <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#c9a15a] transition-all duration-300 hover:gap-4 hover:text-[#08162c]">
                    Learn More
                    <ArrowRight size={16} />
                  </button>

                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}