import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/gallery", label: "Gallery" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col"
            >
              <span className="text-2xl font-bold text-[#5A6B8C]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Brijwasi
              </span>
              <span className="text-xs text-[#FF6B3D] tracking-widest">
                SWEETS & RESTAURANT
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span className={`text-[15px] transition-colors ${
                  location.pathname === link.path
                    ? "text-[#FF6B3D]"
                    : "text-[#5A6B8C] hover:text-[#FF6B3D]"
                }`}>
                  {link.label}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF6B3D]"
                  />
                )}
              </Link>
            ))}
            <motion.a
              href="tel:+917947126860"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-[#FF6B3D] text-white px-5 py-2.5 rounded-full hover:bg-[#e55a2d] transition-colors"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </motion.a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#5A6B8C]"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-6 space-y-4 overflow-hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 ${
                    location.pathname === link.path
                      ? "text-[#FF6B3D]"
                      : "text-[#5A6B8C]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+917947126860"
                className="flex items-center space-x-2 bg-[#FF6B3D] text-white px-5 py-2.5 rounded-full w-fit"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
