import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-[#5A6B8C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Brijwasi
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Serving pure vegetarian taste with tradition for over 37 years. Experience authentic flavors crafted with love.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { path: "/", label: "Home" },
                { path: "/menu", label: "Menu" },
                { path: "/about", label: "About" },
                { path: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-[#FF6B3D] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[#FF6B3D]" />
                <span className="text-white/80 text-sm">
                  Navapur Naka, Boisar, Palghar
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0 text-[#FF6B3D]" />
                <a href="tel:+917947126860" className="text-white/80 hover:text-[#FF6B3D] transition-colors text-sm">
                  07947126860
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0 text-[#FF6B3D]" />
                <span className="text-white/80 text-sm">
                  info@brijwasi.com
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4 text-lg">Working Hours</h4>
            <div className="flex items-start space-x-3">
              <Clock size={18} className="mt-0.5 flex-shrink-0 text-[#FF6B3D]" />
              <div className="text-white/80 text-sm">
                <p className="mb-1">Monday - Sunday</p>
                <p>8:30 AM - 10:30 PM</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>&copy; 2026 Brijwasi Sweets & Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
