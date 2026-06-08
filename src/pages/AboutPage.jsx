import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-slate-50 text-slate-900">
      <section className="bg-[#081120] py-35 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            About Advocate Rajat Purohit
          </h1>
          <p className="mx-auto max-w-2xl text-gray-300 leading-relaxed">
            With years of experience in the Rajasthan High Court, Advocate Rajat Purohit provides trusted legal counsel and steadfast representation across civil, criminal, family, and property matters.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-10 shadow-xl">
              <h2 className="mb-4 text-3xl font-bold text-[#081120]">Who We Are</h2>
              <p className="text-gray-700 leading-8">
                Advocate Rajat Purohit is a dedicated legal professional who delivers personalized attention and effective solutions for each client. Known for a strong courtroom presence and deep legal knowledge, he works tirelessly to protect client rights and achieve favorable outcomes.
              </p>
            </div>
            <div className="rounded-3xl bg-[#081120] p-10 text-white shadow-xl">
              <h3 className="mb-3 text-2xl font-semibold text-[#d4af37]">Core Practice Areas</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Civil Litigation</li>
                <li>• Criminal Defense</li>
                <li>• Family Law</li>
                <li>• Property & Land Disputes</li>
                <li>• Corporate Advisory</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl bg-black/80 p-10 text-white shadow-xl">
            <h2 className="mb-6 text-3xl font-bold text-[#d4af37]">Why Choose Us</h2>
            <div className="space-y-5 text-gray-300">
              <div>
                <h3 className="font-semibold text-white">Client-focused representation</h3>
                <p className="leading-7">
                  Every case receives careful review, clear communication, and a legal strategy tailored to the client’s goals.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Trusted in Rajasthan courts</h3>
                <p className="leading-7">
                  Extensive experience handling complex matters in the Rajasthan High Court and local tribunals.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white">Responsive and reliable</h3>
                <p className="leading-7">
                  Prompt guidance and practical counsel from the first consultation through case resolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#081120] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-3xl bg-[#0f1b2b]/90 p-10 shadow-xl">
            <h2 className="mb-6 text-3xl font-bold text-[#d4af37]">Get In Touch</h2>
            <p className="max-w-3xl text-gray-300 leading-8">
              If you need legal advice or representation, reach out today for a consultation. Advocate Rajat Purohit is available to discuss your case and recommend the right next steps.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-6">
                <h3 className="mb-2 text-xl font-semibold text-white">Phone</h3>
                <p className="text-gray-300">+91 89470 74077</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6">
                <h3 className="mb-2 text-xl font-semibold text-white">Email</h3>
                <p className="text-gray-300">advrajatpurohit@gmail.com </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6">
                <h3 className="mb-2 text-xl font-semibold text-white">Office</h3>
                <p className="text-gray-300">29, Radha Krishna vihar, Govindpura, Jaipur 302044 Rajasthan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
