import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import arivraLogo from "../../assets/arivra-logos.png";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Resources", to: "/resources" },
  { label: "About", to: "/about" },
];

const mobileMenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1], when: "beforeChildren", staggerChildren: 0.05 },
  },
  exit: { height: 0, opacity: 0, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } },
};

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("arivra-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored ? stored === "dark" : prefersDark;

    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("arivra-theme", next ? "dark" : "light");
      return next;
    });
  };

  const closeMobileMenu = () => setIsMobileOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const mobileNavLinkClasses = ({ isActive }) =>
    [
      "block w-full rounded-xl px-4 py-3 text-base font-medium transition-colors duration-300",
      isActive
        ? "bg-blue-600/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
        : "text-slate-500 hover:bg-slate-900/5 hover:text-blue-700 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-blue-400",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav
        className="flex w-full items-center justify-between gap-4 border-b border-slate-200 bg-white/70 px-4 py-3 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-zinc-950 sm:px-6 lg:px-10 xl:px-16 2xl:px-24"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMobileMenu}
          className="group flex shrink-0 items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black"
          aria-label="Arivra home"
        >
          <motion.img
            src={arivraLogo}
            alt="Arivra"
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="h-9 w-9 rounded-xl object-contain"
          />
          <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Arivra
          </span>
        </NavLink>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to} className="relative">
              <NavLink
                to={link.to}
                className="group relative px-1 py-2 text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-blue-700 dark:text-zinc-300 dark:hover:text-blue-400"
              >
                {({ isActive }) => (
                  <span className={isActive ? "text-blue-600 dark:text-blue-400" : ""}>
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right side controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDark}
            className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors duration-300 hover:bg-slate-50 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-blue-400 dark:focus-visible:ring-offset-black"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.span
                  key="moon"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute flex items-center justify-center"
                >
                  <Moon className="h-[18px] w-[18px]" />
                </motion.span>
              ) : (
                <motion.span
                  key="sun"
                  initial={{ rotate: 90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute flex items-center justify-center"
                >
                  <Sun className="h-[18px] w-[18px]" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <motion.a
            href="#book-call"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="hidden items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:from-blue-500 hover:to-blue-400 hover:shadow-lg hover:shadow-blue-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black md:inline-flex"
          >
            Book a Call
          </motion.a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors duration-300 hover:bg-slate-50 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-blue-400 dark:focus-visible:ring-offset-black md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute flex items-center justify-center"
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute flex items-center justify-center"
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="overflow-hidden md:hidden"
          >
            <ul className="flex flex-col gap-1 border-b border-slate-200 bg-white/95 px-4 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-black/95">
              {NAV_LINKS.map((link) => (
                <motion.li key={link.to} variants={mobileLinkVariants}>
                  <NavLink to={link.to} onClick={closeMobileMenu} className={mobileNavLinkClasses}>
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li variants={mobileLinkVariants} className="pt-2">
                <a
                  href="#book-call"
                  onClick={closeMobileMenu}
                  className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:from-blue-500 hover:to-blue-400 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Book a Call
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}