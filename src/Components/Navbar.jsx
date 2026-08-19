import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiBookmark } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import ForMyLove from './ForMyLove';

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-emerald-400 font-bold border-b-2 border-emerald-400 pb-1'
      : 'text-slate-400 hover:text-slate-200 transition-colors pb-1';

  return (
    <>
      <header className="border-b border-slate-800 bg-slate-900/80 sticky top-0 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-2.5">
            <span className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center font-black text-slate-950 text-xl shadow-lg shadow-emerald-500/20">
              ⚡
            </span>
            <div>
              <h1 className="font-extrabold text-base sm:text-lg text-white leading-tight">
                Admission<span className="text-emerald-400">Crack</span>
              </h1>
              <p className="text-[10px] text-emerald-400 font-semibold tracking-wider">
                Smart Varsity Mission
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3 sm:gap-6">
            
            <button 
              onClick={() => setIsPopupOpen(!isPopupOpen)}
              className="relative p-2.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-500 hover:bg-pink-500/20 hover:scale-110 transition-all shadow-md group cursor-pointer"
              title="Special Surprise ❤️"
            >
              <FaHeart className="text-sm animate-pulse group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-pink-500 rounded-full animate-ping"></span>
            </button>

            <nav className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold">
              <NavLink to="/" className={linkClass}>Home</NavLink>
              <NavLink to="/science" className={linkClass}>Science (বিজ্ঞান)</NavLink>
              <NavLink to="/science/mock" className={linkClass}>মক টেস্ট</NavLink>
              <NavLink
                to="/bookmarks"
                className={({ isActive }) =>
                  isActive
                    ? 'text-amber-400 font-bold border-b-2 border-amber-400 pb-1 flex items-center gap-1'
                    : 'text-slate-400 hover:text-amber-400 transition-colors pb-1 flex items-center gap-1'
                }
              >
                <FiBookmark className="text-xs" /> রিভিশন হাব
              </NavLink>
            </nav>

          </div>

        </div>
      </header>

      <ForMyLove 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        photoUrl={`${import.meta.env.BASE_URL}munia.jpg`} 
      />
    </>
  );
};

export default Navbar;