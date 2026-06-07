import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#081120] text-white flex items-center justify-center px-4">
      <div className="max-w-3xl rounded-3xl border border-yellow-500/30 bg-white/5 p-12 text-center shadow-2xl">
        <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">Page Not Found</p>
        <h1 className="mt-6 text-6xl font-bold">404</h1>
        <p className="mt-4 text-lg text-slate-300">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-yellow-500 px-8 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
