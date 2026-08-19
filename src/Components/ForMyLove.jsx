import React, { useState } from 'react';
import { FaHeart, FaStar, FaTimes } from 'react-icons/fa';

const ForMyLove = ({ isOpen, onClose, photoUrl }) => {
  const [isFullView, setIsFullView] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 dark:bg-slate-950/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
        <div className="relative max-w-lg w-full bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950/60 border border-slate-200 dark:border-emerald-500/40 rounded-3xl p-5 sm:p-8 shadow-2xl overflow-hidden my-auto max-h-[90vh] overflow-y-auto text-slate-900 dark:text-slate-100 transition-colors">
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 p-2 rounded-full transition-colors z-20 cursor-pointer"
          >
            <FaTimes className="text-sm" />
          </button>

          <div className="absolute -right-10 -top-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col items-center text-center space-y-4 relative z-10">
            
            <div className="relative group cursor-pointer" onClick={() => setIsFullView(true)} title="Click to view full photo ❤️">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-emerald-400/60 shadow-lg shadow-emerald-500/10 p-1 bg-white dark:bg-slate-950 hover:scale-105 transition-transform">
                {photoUrl ? (
                  <img 
                    src={photoUrl} 
                    alt="Tabiha Marzan Munia" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-100 dark:bg-slate-900 flex flex-col items-center justify-center text-pink-500">
                    <FaHeart className="text-3xl animate-pulse" />
                  </div>
                )}
              </div>
              <div className="absolute -bottom-2 -right-2 bg-pink-500 text-slate-950 p-2 rounded-full shadow-md">
                <FaHeart className="text-xs text-white" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-600 dark:text-pink-400 text-xs font-bold">
                <FaStar className="text-[10px]" /> Special Dedication
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                For <span className="text-emerald-600 dark:text-emerald-400">Tabiha Marzan Munia</span> ❤️
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium pt-2 text-justify sm:text-center">
                "জীবনের চাওয়া-পাওয়া তো সবারই বদলায়, কিন্তু কারও জন্য শুভকামনা কখনো বদলে যায় না। এই ওয়েবসাইটের কোড বা শর্টকাটগুলো হয়তো পরীক্ষার প্রস্তুতি ও সাফল্যের সিঁড়ি বেয়ে সামনে এগিয়ে যাওয়ার জন্য, কিন্তু আমার জীবনের সবচেয়ে সুন্দর পাওয়া হলো তোমাকেও এমনভাবে চেনা। তোমার প্রতিটা স্বপ্ন পূরণ হোক, প্রতিটি দিন যেন হাসিমুখে কাটে—আজ এবং আগামীতেও তোমার যেকোনো অর্জনে আমার মন থেকে সবসময় তোমার জন্য অনেক দোয়া ও শুভকামনা থাকবে।"
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <span>✨ My Inspiration</span>
                <span>•</span>
                <span>✨ My Forever Support</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {isFullView && (
        <div 
          className="fixed inset-0 z-[99] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn cursor-pointer"
          onClick={() => setIsFullView(false)}
        >
          <div className="relative max-w-3xl max-h-[90vh] w-full flex items-center justify-center">
            <button 
              onClick={() => setIsFullView(false)}
              className="absolute -top-12 right-0 text-white bg-slate-800 hover:bg-slate-700 p-2.5 rounded-full transition-colors cursor-pointer"
            >
              <FaTimes className="text-lg" />
            </button>
            <img 
              src={photoUrl} 
              alt="Tabiha Marzan Munia Full View" 
              className="max-w-full max-h-[85vh] object-contain rounded-2xl border-2 border-emerald-400/50 shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ForMyLove;