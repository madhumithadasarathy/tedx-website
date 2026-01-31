import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  { name: "ABOUT", path: "/about" },
  { name: "SPEAKERS", path: "/speakers" },
  { name: "SPONSORS", path: "/sponsors" },
  { name: "ATTEND", path: "/attend", cta: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 inset-x-0 z-50"
    >
      {/* MAIN BAR */}
      <div
        ref={menuRef}
        className="
          mx-auto
          w-[92%] max-w-[1200px]
          flex items-center justify-between
          px-8 py-4
          rounded-2xl
          bg-black/40 backdrop-blur-xl
          border border-white/10
          shadow-2xl
        "
      >
        {/* LOGO */}
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="text-sm tracking-widest font-semibold"
        >
          TEDx <span className="text-red-600">Sairam</span>
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.35em] text-white/80">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                item.cta
                  ? `
                    px-6 py-2
                    rounded-full
                    bg-red-600
                    text-white
                    tracking-widest
                    hover:bg-red-700
                    transition
                  `
                  : `
                    relative transition
                    ${
                      isActive
                        ? "text-red-500"
                        : "hover:text-red-400"
                    }
                  `
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}

                  {!item.cta && isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 w-full h-[2px] bg-red-600"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="
              md:hidden
              mx-auto
              mt-4
              w-[92%] max-w-[1200px]
              rounded-2xl
              bg-black/70 backdrop-blur-xl
              border border-white/10
              shadow-xl
              overflow-hidden
            "
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  item.cta
                    ? `
                      block mx-6 my-4
                      px-6 py-4
                      rounded-full
                      text-center
                      font-medium
                      tracking-widest
                      bg-red-600
                      text-white
                      hover:bg-red-700
                      transition
                    `
                    : `
                      block px-8 py-5
                      text-sm tracking-[0.3em]
                      transition
                      ${
                        isActive
                          ? "text-red-500 bg-white/5"
                          : "text-white/80 hover:bg-white/10"
                      }
                    `
                }
              >
                {item.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
