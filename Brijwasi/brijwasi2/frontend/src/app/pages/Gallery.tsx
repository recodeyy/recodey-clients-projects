import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Info, Utensils, MapPin } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Footer } from "../components/Footer";

// Image Imports
import biryaniImg from "@/images/Veg Biryani - 1 - Edited.png";
import dosaImg from "@/images/Dosa - 1 - Edited.png";
import paneerImg from "@/images/Paneeer - 1 - Edited.png";
import kachoriImg from "@/images/Kachori - 1 - Edited.png";
import gulabJamunImg from "@/images/Gulab Jamun - 1 - Edited.png";
import noodlesImg from "@/images/Noodles - 1 - Edited.png";

import dalTadkaImg from "@/images/Dal Tadka  - 1 - Edited.png";
import manchurianImg from "@/images/Manchurian - 1 - Edited.png";
import chilliImg from "@/images/Paneer Chilli - 1 - Edited.png";
import pohaImg from "@/images/Poha - 1 - Edited.png";
import rasmalaiImg from "@/images/Rasmalai - 1 - Edited.png";
import samosaImg from "@/images/Samosa - 1 - Edited.png";
import jalebiImg from "@/images/Jalebi - 1 - Edited.png";

const galleryItems = [
  {
    id: 1,
    title: "Signature Biryani",
    location: "Hyderabadi Style",
    desc: "Aromatic basmati rice layered with garden-fresh vegetables and secret spices.",
    img: biryaniImg,
    category: "Main Course"
  },
  {
    id: 2,
    title: "Crispy Masala Dosa",
    location: "South Indian Special",
    desc: "Fermented rice crepe filled with tempered potato masala, served with coconut chutney.",
    img: dosaImg,
    category: "South Indian"
  },
  {
    id: 3,
    title: "Paneer Tikka",
    location: "Tandoori Delight",
    desc: "Slabs of fresh cottage cheese marinated in yogurt and spices, grilled to perfection.",
    img: paneerImg,
    category: "Starter"
  },
  {
    id: 4,
    title: "Khasta Kachori",
    location: "Street Food Classic",
    desc: "Flaky, deep-fried pastry filled with spiced lentils, a Boisar favourite.",
    img: kachoriImg,
    category: "Snacks"
  },
  {
    id: 5,
    title: "Gulab Jamun",
    location: "Traditional Sweet",
    desc: "Milk-solid balls dipped in saffron-infused sugar syrup, served warm.",
    img: gulabJamunImg,
    category: "Dessert"
  },
  {
    id: 6,
    title: "Chilli Noodles",
    location: "Indo-Chinese Fusion",
    desc: "Wok-tossed noodles with crunchy vegetables and a spicy szechuan kick.",
    img: noodlesImg,
    category: "Chinese"
  },
  {
    id: 7,
    title: "Dal Tadka",
    location: "Authentic Comfort",
    desc: "Yellow lentils tempered with aromatic ghee, cumin, and dried red chillies.",
    img: dalTadkaImg,
    category: "Main Course"
  },
  {
    id: 8,
    title: "Paneer Chilli",
    location: "Spicy Fusion",
    desc: "Stir-fried paneer cubes with bell peppers and onions in a tangy sauce.",
    img: chilliImg,
    category: "Chinese"
  },
  {
    id: 9,
    title: "Indori Poha",
    location: "Breakfast Favorite",
    desc: "Light and healthy flattened rice topped with crunchy sev and pomegranate.",
    img: pohaImg,
    category: "Snacks"
  },
  {
    id: 10,
    title: "Samosa",
    location: "Golden Pastry",
    desc: "Crispy triangular pastry filled with spiced potatoes and green peas.",
    img: samosaImg,
    category: "Snacks"
  },
  {
    id: 11,
    title: "Rasmalai",
    location: "Royal Dessert",
    desc: "Soft cottage cheese dumplings soaked in saffron-flavored thickened milk.",
    img: rasmalaiImg,
    category: "Dessert"
  },
  {
    id: 12,
    title: "Jalebi",
    location: "Swirly Delight",
    desc: "Crispy, golden-brown spirals soaked in sweet cardamom syrup.",
    img: jalebiImg,
    category: "Dessert"
  }
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      {/* Background Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${activeIndex}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <ImageWithFallback 
            src={galleryItems[activeIndex].img} 
            className="w-full h-full object-cover grayscale-[30%]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 md:px-20 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Main Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${activeIndex}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.8 }}
              className="text-white max-w-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#87bba9]" />
                <span className="text-[#87bba9] font-bold tracking-widest uppercase text-xl">
                  {galleryItems[activeIndex].location}
                </span>
              </div>
              <h1 className="text-7xl md:text-9xl font-serif mb-8 leading-none uppercase">
                {galleryItems[activeIndex].title.split(' ').map((word, i) => (
                  <span key={i} className="block last:italic last:text-[#87bba9]">{word}</span>
                ))}
              </h1>
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-12 max-w-lg italic">
                "{galleryItems[activeIndex].desc}"
              </p>
              
              <div className="flex gap-6 items-center">
                <Link to="/menu">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-white text-[#6e1a37] rounded-full text-xl font-bold shadow-2xl flex items-center gap-3"
                  >
                    <Utensils size={24} />
                    Discover Menu
                  </motion.button>
                </Link>
                <div className="flex gap-4">
                  <button onClick={prevSlide} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <ChevronLeft size={32} />
                  </button>
                  <button onClick={nextSlide} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <ChevronRight size={32} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Cards */}
          <div className="flex gap-6 overflow-hidden py-10 items-end justify-center lg:justify-start">
            <AnimatePresence mode="popLayout">
              {galleryItems.map((item, idx) => {
                // Calculate display order relative to active index
                const relativeIdx = (idx - activeIndex + galleryItems.length) % galleryItems.length;
                if (relativeIdx > 3) return null; // Show only next 4 cards

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8, x: 100 }}
                    animate={{ 
                      opacity: relativeIdx === 0 ? 0 : 1, // Hide the one that's now the background
                      scale: relativeIdx === 1 ? 1.1 : 1,
                      x: 0,
                      zIndex: 10 - relativeIdx
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className={`relative shrink-0 w-48 h-72 md:w-64 md:h-96 rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl border-4 ${relativeIdx === 1 ? 'border-[#87bba9]' : 'border-white/10'}`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <ImageWithFallback src={item.img} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                      <p className="text-[#87bba9] text-sm font-bold uppercase mb-1 tracking-tighter">{item.category}</p>
                      <h4 className="text-white font-bold text-lg leading-tight">{item.title}</h4>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-auto py-10 border-t border-white/10 flex justify-between items-center text-white/50">
          <div className="flex items-center gap-6">
            <span className="text-4xl font-serif text-white">0{activeIndex + 1}</span>
            <div className="w-48 h-[2px] bg-white/10 relative">
              <motion.div 
                className="absolute left-0 top-0 h-full bg-[#87bba9]"
                animate={{ width: `${((activeIndex + 1) / galleryItems.length) * 100}%` }}
              />
            </div>
            <span className="text-lg">0{galleryItems.length}</span>
          </div>
          <div className="flex gap-10 text-sm tracking-widest uppercase font-bold">
            {/* Social links removed */}
          </div>
        </div>
      </div>

      {/* Custom Header Overlay */}
      <div className="absolute top-0 left-0 w-full p-10 flex justify-between items-center z-50 text-white">
        <h2 className="text-3xl font-serif">Brijwasi <span className="text-[#87bba9]">Gallery</span></h2>
      </div>

      <Footer />
    </div>
  );
}
