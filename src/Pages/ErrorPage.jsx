import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-[80vh] bg-slate-950 flex flex-col items-center justify-center text-center px-4 py-12">
      <h1 className="text-6xl sm:text-8xl font-black text-emerald-500 mb-3 tracking-tight">404</h1>
      <h2 className="text-lg sm:text-2xl font-bold text-white mb-6">পৃষ্ঠাটি খুঁজে পাওয়া যায়নি!</h2>
      <Link to="/" className="btn bg-emerald-500 hover:bg-emerald-600 text-slate-950 border-none rounded-2xl px-8 py-3 font-bold shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 cursor-pointer">
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default ErrorPage;