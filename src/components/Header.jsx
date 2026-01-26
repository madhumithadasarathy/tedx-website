import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { name: "EXPERIENCE", path: "/experience" },
  { name: "SPEAKERS", path: "/speakers" },
  { name: "PROGRAM", path: "/program" },
  { name: "ATTEND", path: "/attend" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 inset-x-0 z-50"
    >
      <div
        className="
          mx-auto
          w-[92%] max-w-[1200px]
          flex items-center justify-between
          px-10 py-4
          rounded-2xl
          bg-black/40 backdrop-blur-xl
          border border-white/10
          shadow-2xl
        "
      >
        {/* LOGO */}
        <NavLink
          to="/"
          className="text-sm tracking-widest font-semibold"
        >
          TEDx <span className="text-red-600">Sairam</span>
        </NavLink>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.35em] text-white/80">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative transition ${
                  isActive
                    ? "text-red-500"
                    : "hover:text-red-400"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
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
      </div>
    </motion.header>
  );
}
