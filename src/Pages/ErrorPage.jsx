import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-7xl font-black text-emerald-500 mb-2">404</h1>
      <h2 className="text-xl font-bold text-white mb-4">পৃষ্ঠাটি খুঁজে পাওয়া যায়নি!</h2>
      <Link to="/" className="btn bg-emerald-500 hover:bg-emerald-600 text-slate-950 border-none rounded-xl px-6 font-bold">
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default ErrorPage;