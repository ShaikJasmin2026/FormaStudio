import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navigationLinks = [
  { label: "Our Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "/blog" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="absolute left-0 top-0 z-50 w-full px-6 pt-7 md:px-12 lg:px-20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-3"
        >
          <img
            src="/images/logo.png"
            alt="Forma Studio"
            className="h-12 w-12 object-contain transition-transform duration-300 group-hover:rotate-[-8deg]"
          />

          <span className="!text-[#f8f7f2] text-[25px] font-semibold tracking-tight">
            Forma Studio
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 lg:flex xl:gap-10">

          {navigationLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
              }}
            >
              <Link
                to={link.href}
                className="group relative !text-[#f8f7f2] text-[15px] font-medium transition-colors duration-300 hover:!text-[#d9b765]"
              >
                {link.label}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#d9b765] transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}

          {/* CONTACT BUTTON */}
          <Link
            to="/contact-us"
            className="flex items-center gap-2 rounded-full border border-[#f8f7f2]/40 px-6 py-3 !text-[#f8f7f2] text-sm font-medium transition-all duration-300 hover:border-[#d9b765] hover:bg-[#d9b765] hover:!text-[#203d33]"
          >
            Let's talk
            <ArrowUpRight size={17} />
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="!text-[#f8f7f2] lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mt-5 rounded-2xl border border-white/10 bg-[#203d33] p-6 shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-6">

              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="!text-[#f8f7f2] text-base font-medium hover:!text-[#d9b765]"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/contact-us"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-[#d9b765] px-5 py-3 font-semibold !text-[#203d33]"
              >
                Let's talk
                <ArrowUpRight size={18} />
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}

export default Navbar;