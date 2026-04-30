import { motion } from "motion/react";
import { Link } from "react-router";
import { MapPin, Phone, Mail, ShoppingCart, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100 relative z-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-1">
          <h3 className="text-3xl font-bold text-[#6e1a37] mb-6" style={{ fontFamily: 'Georgia, serif' }}>Brijwasi</h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Serving pure vegetarian taste with tradition for over 37 years. Experience authentic flavors crafted with love.
          </p>
          <div className="flex gap-4">
            {/* Social icons could go here */}
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-4 text-lg">
            <li><Link to="/" className="text-gray-600 hover:text-[#6e1a37] transition-colors">Home</Link></li>
            <li><Link to="/menu" className="text-gray-600 hover:text-[#6e1a37] transition-colors">Menu</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-[#6e1a37] transition-colors">About</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-[#6e1a37] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-widest">Contact Info</h4>
          <ul className="space-y-4 text-lg">
            <li className="flex gap-3 text-gray-600">
              <MapPin className="text-[#6e1a37] shrink-0" size={24} />
              <span>Navapur Naka, Boisar, Palghar</span>
            </li>
            <li className="flex gap-3 text-gray-600">
              <Phone className="text-[#6e1a37] shrink-0" size={24} />
              <span>07947126860</span>
            </li>
            <li className="flex gap-3 text-gray-600">
              <Mail className="text-[#6e1a37] shrink-0" size={24} />
              <span>info@brijwasi.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-widest">Working Hours</h4>
          <div>
            <p className="text-gray-600 font-bold mb-2">Monday - Sunday</p>
            <p className="text-gray-600 text-lg">8:30 AM - 10:30 PM</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-10 border-t border-gray-100 text-center text-gray-500 text-lg">
        <p>© 2026 Brijwasi Sweets & Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}
