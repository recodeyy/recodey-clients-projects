import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/gallery", label: "Gallery" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.5 }}
      className="sticky top-0 z-50 bg-[#6e1a37]/95 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl md:text-3xl font-bold text-white"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Brijwasi
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-lg transition-colors ${
                    location.pathname === item.path
                      ? "text-[#d5e7b5]"
                      : "text-white hover:text-[#d5e7b5]"
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="underline"
                      className="h-1 bg-[#d5e7b5] rounded-full"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
            <motion.a
              href="tel:07947126860"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#ae2441] text-[#6e1a37] px-6 py-2 rounded-full font-bold shadow-lg"
            >
              Call Now
            </motion.a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#6e1a37] border-t border-[#ae2441]"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-lg ${
                  location.pathname === item.path
                    ? "text-[#d5e7b5] bg-[#ae2441]/20"
                    : "text-white"
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: navItems.length * 0.1 }}
            className="px-4 py-6"
          >
            <a
              href="tel:07947126860"
              className="block bg-[#ae2441] text-[#6e1a37] text-center px-6 py-3 rounded-full font-bold shadow-lg"
            >
              Call Now
            </a>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
}
