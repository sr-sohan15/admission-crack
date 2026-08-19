import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiBookmark, FiMenu, FiX } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import ForMyLove from './ForMyLove';

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-emerald-400 font-bold border-b-2 border-emerald-400 pb-1'
      : 'text-slate-400 hover:text-slate-200 transition-colors pb-1';

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className="
          w-full
          border-b
          border-slate-800
          bg-slate-900/90
          sticky
          top-0
          backdrop-blur-md
          z-50
        "
      >
        {/* ==============================
            MAIN NAVBAR
        ============================== */}
        <div
          className="
            w-full
            max-w-7xl
            mx-auto
            px-3
            sm:px-4
            md:px-6
            lg:px-8
            h-14
            sm:h-16
            flex
            items-center
            justify-between
            gap-2
          "
        >
          {/* ==============================
              LOGO
          ============================== */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="
              flex
              items-center
              gap-2
              sm:gap-2.5
              min-w-0
              shrink
            "
          >
            {/* Logo Icon */}
            <span
              className="
                w-8
                h-8
                sm:w-9
                sm:h-9
                md:w-10
                md:h-10
                bg-emerald-500
                rounded-lg
                sm:rounded-xl
                flex
                items-center
                justify-center
                font-black
                text-slate-950
                text-lg
                sm:text-xl
                md:text-2xl
                shadow-lg
                shadow-emerald-500/20
                shrink-0
              "
            >
              ⚡
            </span>

            {/* Logo Text */}
            <div className="min-w-0">
              <h1
                className="
                  font-extrabold
                  text-xs
                  sm:text-base
                  md:text-lg
                  text-white
                  leading-tight
                  truncate
                "
              >
                Admission
                <span className="text-emerald-400">
                  Crack
                </span>
              </h1>

              <p
                className="
                  text-[7px]
                  xs:text-[8px]
                  sm:text-[9px]
                  md:text-[10px]
                  text-emerald-400
                  font-semibold
                  tracking-[0.08em]
                  sm:tracking-wider
                  whitespace-nowrap
                "
              >
                Smart Varsity Mission
              </p>
            </div>
          </Link>

          {/* ==============================
              RIGHT SIDE
          ============================== */}
          <div
            className="
              flex
              items-center
              gap-1.5
              sm:gap-3
              md:gap-5
              lg:gap-6
              shrink-0
            "
          >
            {/* ==============================
                LOVE BUTTON
            ============================== */}
            <button
              onClick={() =>
                setIsPopupOpen(!isPopupOpen)
              }
              className="
                relative
                w-9
                h-9
                sm:w-10
                sm:h-10
                md:w-11
                md:h-11
                rounded-full
                bg-pink-500/10
                border
                border-pink-500/30
                text-pink-500
                hover:bg-pink-500/20
                hover:scale-105
                md:hover:scale-110
                transition-all
                shadow-md
                group
                cursor-pointer
                flex
                items-center
                justify-center
                shrink-0
              "
              title="Special Surprise ❤️"
              aria-label="Special Surprise"
            >
              <FaHeart
                className="
                  text-xs
                  sm:text-sm
                  md:text-base
                  animate-pulse
                  group-hover:scale-110
                  transition-transform
                "
              />

              <span
                className="
                  absolute
                  -top-0.5
                  -right-0.5
                  sm:-top-1
                  sm:-right-1
                  w-2
                  h-2
                  sm:w-2.5
                  sm:h-2.5
                  bg-pink-500
                  rounded-full
                  animate-ping
                "
              />
            </button>

            {/* ==============================
                DESKTOP NAVIGATION
            ============================== */}
            <nav
              className="
                hidden
                md:flex
                items-center
                gap-4
                lg:gap-6
                text-xs
                lg:text-sm
                font-semibold
                whitespace-nowrap
              "
            >
              <NavLink
                to="/"
                className={linkClass}
              >
                Home
              </NavLink>

              <NavLink
                to="/science"
                className={linkClass}
              >
                Science (বিজ্ঞান)
              </NavLink>

              <NavLink
                to="/science/mock"
                className={linkClass}
              >
                মক টেস্ট
              </NavLink>

              <NavLink
                to="/bookmarks"
                className={({ isActive }) =>
                  isActive
                    ? `
                      text-amber-400
                      font-bold
                      border-b-2
                      border-amber-400
                      pb-1
                      flex
                      items-center
                      gap-1
                    `
                    : `
                      text-slate-400
                      hover:text-amber-400
                      transition-colors
                      pb-1
                      flex
                      items-center
                      gap-1
                    `
                }
              >
                <FiBookmark className="text-xs" />
                রিভিশন হাব
              </NavLink>
            </nav>

            {/* ==============================
                MOBILE MENU BUTTON
            ============================== */}
            <button
              onClick={() =>
                setIsMobileMenuOpen(
                  !isMobileMenuOpen
                )
              }
              className="
                md:hidden
                w-9
                h-9
                sm:w-10
                sm:h-10
                rounded-lg
                sm:rounded-xl
                bg-slate-800
                border
                border-slate-700
                text-slate-300
                hover:text-white
                hover:bg-slate-700
                transition-colors
                cursor-pointer
                flex
                items-center
                justify-center
                shrink-0
              "
              aria-label={
                isMobileMenuOpen
                  ? 'Close menu'
                  : 'Open menu'
              }
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <FiX className="text-lg sm:text-xl" />
              ) : (
                <FiMenu className="text-lg sm:text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* ==============================
            MOBILE MENU
        ============================== */}
        {isMobileMenuOpen && (
          <div
            className="
              md:hidden
              w-full
              bg-slate-900
              border-t
              border-slate-800
              border-b
              px-3
              sm:px-4
              py-3
              sm:py-4
              shadow-xl
              animate-fadeIn
            "
          >
            <nav
              className="
                w-full
                max-w-7xl
                mx-auto
                flex
                flex-col
                gap-1
                text-sm
                sm:text-base
                font-semibold
              "
            >
              {/* Home */}
              <NavLink
                to="/"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `
                    w-full
                    flex
                    items-center
                    min-h-[42px]
                    sm:min-h-[46px]
                    px-3
                    rounded-lg
                    sm:rounded-xl
                    transition-all
                    ${
                      isActive
                        ? `
                          text-emerald-400
                          font-bold
                          bg-emerald-500/10
                          border-l-2
                          border-emerald-400
                        `
                        : `
                          text-slate-300
                          hover:text-emerald-400
                          hover:bg-slate-800
                        `
                    }
                  `
                }
              >
                Home
              </NavLink>

              {/* Science */}
              <NavLink
                to="/science"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `
                    w-full
                    flex
                    items-center
                    min-h-[42px]
                    sm:min-h-[46px]
                    px-3
                    rounded-lg
                    sm:rounded-xl
                    transition-all
                    ${
                      isActive
                        ? `
                          text-emerald-400
                          font-bold
                          bg-emerald-500/10
                          border-l-2
                          border-emerald-400
                        `
                        : `
                          text-slate-300
                          hover:text-emerald-400
                          hover:bg-slate-800
                        `
                    }
                  `
                }
              >
                Science (বিজ্ঞান)
              </NavLink>

              {/* Mock Test */}
              <NavLink
                to="/science/mock"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `
                    w-full
                    flex
                    items-center
                    min-h-[42px]
                    sm:min-h-[46px]
                    px-3
                    rounded-lg
                    sm:rounded-xl
                    transition-all
                    ${
                      isActive
                        ? `
                          text-emerald-400
                          font-bold
                          bg-emerald-500/10
                          border-l-2
                          border-emerald-400
                        `
                        : `
                          text-slate-300
                          hover:text-emerald-400
                          hover:bg-slate-800
                        `
                    }
                  `
                }
              >
                মক টেস্ট
              </NavLink>

              {/* Bookmarks */}
              <NavLink
                to="/bookmarks"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `
                    w-full
                    flex
                    items-center
                    gap-2
                    min-h-[42px]
                    sm:min-h-[46px]
                    px-3
                    rounded-lg
                    sm:rounded-xl
                    transition-all
                    ${
                      isActive
                        ? `
                          text-amber-400
                          font-bold
                          bg-amber-500/10
                          border-l-2
                          border-amber-400
                        `
                        : `
                          text-slate-300
                          hover:text-amber-400
                          hover:bg-slate-800
                        `
                    }
                  `
                }
              >
                <FiBookmark className="text-sm shrink-0" />
                রিভিশন হাব
              </NavLink>
            </nav>
          </div>
        )}
      </header>

      {/* ==============================
          LOVE POPUP
      ============================== */}
      <ForMyLove
        isOpen={isPopupOpen}
        onClose={() =>
          setIsPopupOpen(false)
        }
        photoUrl={`${import.meta.env.BASE_URL}munia.jpg`}
      />
    </>
  );
};

export default Navbar;