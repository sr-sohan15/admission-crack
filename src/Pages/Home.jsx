import React from 'react';
import { Link } from 'react-router-dom';
import { FiZap, FiArrowRight, FiTarget, FiCheckCircle } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="space-y-10 max-w-5xl mx-auto py-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-12 text-center space-y-4">
        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-3.5 py-1 rounded-full font-bold inline-flex items-center gap-1.5">
          <FiZap /> 80/20 Pareto Formula
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
          কম পরিশ্রমে ভার্সিটি চান্স নিশ্চিত করার <br className="hidden sm:inline" />
          <span className="text-emerald-400">শর্টকাট মিশন প্ল্যাটফর্ম</span>
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
          কোনো বই ছাড়া শুধু বিগত ১০ বছরের মোস্ট রিপিটেড টাইপ, ৫-সেকেন্ড হ্যাকস এবং অপশন এলিমিনেশন ট্রিকস দিয়ে পূর্ণাঙ্গ প্রস্তুতি।
        </p>
      </div>

      {/* Stream Selection Cards */}
      <div className="space-y-4">
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center sm:text-left">
          তোমার ইউনিট নির্বাচন করো
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Science Card */}
          <Link
            to="/science"
            className="bg-slate-900 border border-emerald-500/30 hover:border-emerald-500 p-6 sm:p-8 rounded-3xl transition-all space-y-4 group shadow-lg shadow-emerald-950/20 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="bg-emerald-500/20 text-emerald-300 text-xs px-3 py-1 rounded-full font-bold">
                  DU A / GST KA
                </span>
                <span className="text-xs text-slate-400 font-semibold">৪টি মূল বিষয়</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-emerald-400 transition-colors">
                বিজ্ঞান ইউনিট (Science)
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Physics, Chemistry, Math ও Biology-র ১০০% কমন টাইপ এবং ক্যালকুলেটর ছাড়া ৫-সেকেন্ড সমাধান হ্যাকস।
              </p>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-slate-800 text-xs font-bold text-emerald-400">
              <span>সায়েন্স মিশন শুরু করো</span>
              <FiArrowRight className="text-base group-hover:translate-x-1.5 transition-all" />
            </div>
          </Link>

          {/* Arts Card (Disabled for now) */}
          <div className="bg-slate-900/40 border border-slate-800/80 p-6 sm:p-8 rounded-3xl space-y-4 opacity-60 flex flex-col justify-between cursor-not-allowed">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="bg-slate-800 text-slate-400 text-xs px-3 py-1 rounded-full font-bold">
                  DU B / GST KHA
                </span>
                <span className="text-xs text-amber-400 font-semibold">Coming Next</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-300">
                মানবিক ইউনিট (Arts)
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                বাংলা, ইংরেজি ও সাধারণ জ্ঞানের বিগত ১০ বছরের মোস্ট কমন প্যাটার্ন ও ছন্দ ভিত্তিক ট্রিকস।
              </p>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-slate-800 text-xs font-bold text-slate-500">
              <span>সায়েন্সের পর উন্মুক্ত হবে</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;