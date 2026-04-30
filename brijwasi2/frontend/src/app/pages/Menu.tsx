import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router";
import { Star, ChevronRight, Info, Utensils, Clock, ChevronLeft } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Footer } from "../components/Footer";

// Image Imports
import kachoriImg from "@/images/Kachori - 1 - Edited.png";
import samosaImg from "@/images/Samosa - 1 - Edited.png";
import pohaImg from "@/images/Poha - 1 - Edited.png";
import dalTadkaImg from "@/images/Dal Tadka  - 1 - Edited.png";
import paneerImg from "@/images/Paneeer - 1 - Edited.png";
import biryaniImg from "@/images/Veg Biryani - 1 - Edited.png";
import chilliImg from "@/images/Paneer Chilli - 1 - Edited.png";
import manchurianImg from "@/images/Manchurian - 1 - Edited.png";
import dosaImg from "@/images/Dosa - 1 - Edited.png";
import gulabJamunImg from "@/images/Gulab Jamun - 1 - Edited.png";
import jalebiImg from "@/images/Jalebi - 1 - Edited.png";
import noodlesImg from "@/images/Noodles - 1 - Edited.png";
import rasmalaiImg from "@/images/Rasmalai - 1 - Edited.png";
import parathaImg from "@/images/Paratha - 1 - Edited.png";
import saladImg from "@/images/Salad - 1 - Edited.png";
import paniPuriImg from "@/images/Pani Puri - 1 - Edited.png";
import sandwichImg from "@/images/Sandwhich - 1 - Edited.png";
import kebabImg from "@/images/Kebab - 1 - Edited.png";
import soupImg from "@/images/Soup - 1 - Edited.png";
import punjabiThaliImg from "@/images/Thali Punjabi - 1 - Edited.png";

type MenuItem = {
  name: string;
  price?: string;
  desc: string;
  img: string;
};

type CategoryData = {
  label: string;
  tagline: string;
  heroImg: string;
  items: MenuItem[];
};

const menuData: Record<string, CategoryData> = {
  breakfast: {
    label: "Breakfast",
    tagline: "Morning Energy",
    heroImg: kachoriImg,
    items: [
      { name: "Khasta Kachori [2 Pieces]", price: "₹60", desc: "Crispy flaky kachori with spiced lentil filling", img: kachoriImg },
    ]
  },
  special: {
    label: "Special",
    tagline: "Chef's Selection",
    heroImg: paneerImg,
    items: [
      { name: "Paneer Chatpata", price: "₹240", desc: "Spicy and tangy paneer cubes in special gravy", img: paneerImg },
      { name: "Mushroom Tikka Masala", price: "₹260", desc: "Grilled mushroom in rich creamy gravy", img: "/api/placeholder/100/100" },
      { name: "Mushroom Handi", price: "₹250", desc: "Mushroom cooked in traditional clay pot style", img: "/api/placeholder/100/100" },
      { name: "Paneer Pasanda", price: "₹280", desc: "Stuffed paneer sandwiches in rich silky gravy", img: "/api/placeholder/100/100" },
      { name: "Paneer Kolhapuri", price: "₹240", desc: "Extra spicy paneer in Kolhapuri style gravy", img: "/api/placeholder/100/100" },
      { name: "Paneer Kofta", price: "₹260", desc: "Soft cottage cheese balls in aromatic gravy", img: "/api/placeholder/100/100" },
      { name: "Paneer Tikka Masala", price: "₹260", desc: "Marinated grilled paneer in spicy gravy", img: paneerImg },
      { name: "Mushroom Kadhai", price: "₹250", desc: "Fresh mushrooms with capsicum in kadhai gravy", img: "/api/placeholder/100/100" },
      { name: "Paneer Bhurji", price: "₹220", desc: "Scrambled paneer with onions and tomatoes", img: "/api/placeholder/100/100" },
      { name: "Veg Handi", price: "₹200", desc: "Mixed seasonal vegetables in rich gravy", img: "/api/placeholder/100/100" },
    ]
  },
  thali: {
    label: "Thali/Meals",
    tagline: "Full Experience",
    heroImg: punjabiThaliImg,
    items: [
      { name: "Punjabi Thali", price: "₹350", desc: "1 Paneer Bhaji, 1 veg bhaji, 1 dal, 1 rice, chapati [4 Pieces], salad, papad, sweet.", img: punjabiThaliImg },
    ]
  },
  combo: {
    label: "Combo",
    tagline: "Perfect Pairing",
    heroImg: dosaImg,
    items: [
      { name: "Idli Medu Combo", price: "₹140", desc: "1 Idli + 1 Medu Vada served with Sambhar and Chutney", img: dosaImg },
    ]
  },
  soups: {
    label: "Soups",
    tagline: "Warm Starters",
    heroImg: soupImg,
    items: [
      { name: "Veg Manchow Soup", price: "₹120", desc: "Spicy soy-based soup with crunchy noodles", img: "/api/placeholder/100/100" },
      { name: "Veg Hot and Sour Soup", price: "₹120", desc: "Tangy and spicy thick soup with veggies", img: "/api/placeholder/100/100" },
      { name: "Tomato Soup", price: "₹100", desc: "Classic creamy tomato soup with croutons", img: "/api/placeholder/100/100" },
    ]
  },
  starter: {
    label: "Starter",
    tagline: "Quick Bites",
    heroImg: kebabImg,
    items: [
      { name: "Hara Bhara Kebab", price: "₹180", desc: "Pan-fried spinach and green pea patties", img: kebabImg },
    ]
  },
  riceBiryani: {
    label: "Rice and Biryani",
    tagline: "Grains of Flavor",
    heroImg: biryaniImg,
    items: [
      { name: "Brijwasi Special Biryani", price: "₹300", desc: "Chef's signature vegetable biryani", img: biryaniImg },
      { name: "Paneer Pulao", price: "₹220", desc: "Fragrant rice with paneer cubes", img: "/api/placeholder/100/100" },
      { name: "Cheese Pulao", price: "₹240", desc: "Rich rice preparation with grated cheese", img: "/api/placeholder/100/100" },
      { name: "Masala Rice", price: "₹180", desc: "Spiced vegetable rice preparation", img: "/api/placeholder/100/100" },
      { name: "Green Peas Pulao", price: "₹180", desc: "Mildly spiced rice with green peas", img: "/api/placeholder/100/100" },
      { name: "Veg Pulao", price: "₹200", desc: "Classic vegetable rice preparation", img: "/api/placeholder/100/100" },
      { name: "Jeera Rice", price: "₹140", desc: "Cumin tempered basmati rice", img: "/api/placeholder/100/100" },
      { name: "Basmati Steamed Rice", price: "₹100", desc: "Pure steamed long grain basmati", img: "/api/placeholder/100/100" },
      { name: "Dal Khichdi", price: "₹180", desc: "Comforting lentil and rice mix", img: "/api/placeholder/100/100" },
      { name: "Curd Rice", price: "₹160", desc: "South Indian style tempered yogurt rice", img: "/api/placeholder/100/100" },
      { name: "Mushroom Biryani", price: "₹260", desc: "Spiced rice with fresh mushrooms", img: "/api/placeholder/100/100" },
      { name: "Veg Handi Biryani", price: "₹250", desc: "Slow cooked biryani in clay pot", img: "/api/placeholder/100/100" },
      { name: "Veg Hyderabadi Biryani", price: "₹250", desc: "Authentic Hyderabadi style spicy biryani", img: biryaniImg },
      { name: "Veg Dum Biryani", price: "₹240", desc: "Traditional dum cooked basmati biryani", img: "/api/placeholder/100/100" },
      { name: "Veg Biryani", price: "₹220", desc: "Garden fresh vegetable biryani", img: "/api/placeholder/100/100" },
    ]
  },
  chinese: {
    label: "Chinese",
    tagline: "Wok Magic",
    heroImg: manchurianImg,
    items: [
      { name: "Veg Manchurian Gravy", price: "₹180", desc: "Vegetable balls in ginger-garlic sauce", img: manchurianImg },
      { name: "Veg Manchurian Dry", price: "₹180", desc: "Crispy veggie balls in dry szechuan style", img: "/api/placeholder/100/100" },
      { name: "Paneer Chilli Gravy", price: "₹220", desc: "Paneer cubes in spicy soy-based gravy", img: chilliImg },
      { name: "Paneer Chilli Dry", price: "₹220", desc: "Crispy paneer tossed with peppers and onions", img: chilliImg },
      { name: "Mushroom Chilli Gravy", price: "₹200", desc: "Mushrooms in tangy szechuan gravy", img: "/api/placeholder/100/100" },
      { name: "Mushroom Chilli Dry", price: "₹200", desc: "Stir-fried mushrooms with green chillies", img: "/api/placeholder/100/100" },
      { name: "Gobi Manchurian Gravy", price: "₹160", desc: "Cauliflower florets in savory gravy", img: "/api/placeholder/100/100" },
      { name: "Gobi Manchurian Dry", price: "₹160", desc: "Crispy cauliflower in szechuan sauce", img: "/api/placeholder/100/100" },
    ]
  },
  southIndian: {
    label: "South Indian",
    tagline: "Authentic Flavors",
    heroImg: dosaImg,
    items: [
      { name: "Idli [2 Pieces] with Sambhar", price: "₹80", desc: "Steamed rice cakes with lentil soup", img: "/api/placeholder/100/100" },
      { name: "Medu Vada [2 Vada]", price: "₹90", desc: "Deep fried lentil donuts with sambhar", img: "/api/placeholder/100/100" },
      { name: "Cheese Onion Tomato Uttapam", price: "₹160", desc: "Thick pancake with cheese and veggie topping", img: "/api/placeholder/100/100" },
      { name: "Tomato Omelette", price: "₹120", desc: "[Veg preparation] Gram flour pancake with tomatoes", img: "/api/placeholder/100/100" },
      { name: "Cheese Masala Uttapam", price: "₹150", desc: "Spiced pancake topped with cheese", img: "/api/placeholder/100/100" },
      { name: "Cheese Sada Uttapam", price: "₹140", desc: "Plain pancake topped with loaded cheese", img: "/api/placeholder/100/100" },
      { name: "Masala Uttapam", price: "₹130", desc: "Thick rice pancake with tempered onions", img: "/api/placeholder/100/100" },
      { name: "Tomato Uttapam", price: "₹120", desc: "Rice pancake topped with fresh tomatoes", img: "/api/placeholder/100/100" },
      { name: "Sada Uttapam", price: "₹100", desc: "Traditional plain rice and lentil pancake", img: "/api/placeholder/100/100" },
    ]
  },
  friedRiceNoodles: {
    label: "Fried Rice and Noodles",
    tagline: "Szechuan & Hakka",
    heroImg: noodlesImg,
    items: [
      { name: "Veg Hakka Noodles", price: "₹160", desc: "Classic stir-fried thin noodles", img: noodlesImg },
      { name: "Veg Schezwan Noodles", price: "₹180", desc: "Spicy noodles in szechuan sauce", img: "/api/placeholder/100/100" },
      { name: "Veg Triple Schezwan Noodles", price: "₹240", desc: "Combination of rice, noodles and manchurian", img: "/api/placeholder/100/100" },
      { name: "Manchurian Fried Rice", price: "₹220", desc: "Rice tossed with manchurian balls", img: "/api/placeholder/100/100" },
      { name: "Manchurian Hakka Noodles", price: "₹220", desc: "Noodles with manchurian chunks", img: "/api/placeholder/100/100" },
      { name: "Veg Fried Rice", price: "₹160", desc: "Simple and flavorful vegetable rice", img: "/api/placeholder/100/100" },
      { name: "Veg Schezwan Fried Rice", price: "₹180", desc: "Spicy rice in szechuan base", img: "/api/placeholder/100/100" },
      { name: "Mushroom Fried Rice", price: "₹200", desc: "Fried rice with fresh mushrooms", img: "/api/placeholder/100/100" },
    ]
  },
  sandwiches: {
    label: "Sandwiches",
    tagline: "Bread & Butter",
    heroImg: sandwichImg,
    items: [
      { name: "Cheese Sandwich", price: "₹100", desc: "Simple and delicious cheese slices", img: sandwichImg },
      { name: "Veg Cheese Sandwich", price: "₹120", desc: "Loaded with veggies and cheese", img: "/api/placeholder/100/100" },
      { name: "Veg Sandwich", price: "₹80", desc: "Classic vegetable toast sandwich", img: "/api/placeholder/100/100" },
      { name: "Plain Chutney Sandwich", price: "₹60", desc: "Green chutney and butter spread", img: "/api/placeholder/100/100" },
      { name: "Bread Butter Sandwich", price: "₹50", desc: "Classic fresh bread with amul butter", img: "/api/placeholder/100/100" },
    ]
  },
  snacksChaat: {
    label: "Snacks and Chaat",
    tagline: "Street Food",
    heroImg: paniPuriImg,
    items: [
      { name: "Pani Puri", price: "₹40", desc: "Tangy and spicy water balls", img: paniPuriImg },
      { name: "Puri Bhaji [1 Bhaji, 4 Puris]", price: "₹100", desc: "Classic potato bhaji with fluffy puris", img: "/api/placeholder/100/100" },
      { name: "Misal Pav [2 Pavs]", price: "₹120", desc: "Spicy sprout curry with farsan", img: "/api/placeholder/100/100" },
      { name: "Usal", price: "₹80", desc: "Hearty sprout curry Mumbai style", img: "/api/placeholder/100/100" },
      { name: "Bhel Puri", price: "₹60", desc: "Crunchy puffed rice mix with chutneys", img: "/api/placeholder/100/100" },
      { name: "Sev Puri", price: "₹70", desc: "Crispy puris topped with potatoes and sev", img: "/api/placeholder/100/100" },
      { name: "Dahi Sev Puri", price: "₹90", desc: "Sev puri topped with chilled yogurt", img: "/api/placeholder/100/100" },
      { name: "Dahi Kachori [2 Pieces]", price: "₹100", desc: "Kachori crushed and topped with curd", img: kachoriImg },
      { name: "Dahi Samosa [2 Pieces]", price: "₹100", desc: "Samosas topped with spicy yogurt mix", img: samosaImg },
      { name: "Dahi Vada [2 Pieces]", price: "₹120", desc: "Lentil balls soaked in sweet yogurt", img: "/api/placeholder/100/100" },
      { name: "Sabudana Vada [2 Pieces]", price: "₹100", desc: "Sago patties served with yogurt", img: "/api/placeholder/100/100" },
      { name: "Sabudana Khichdi", price: "₹100", desc: "Tempered sago with roasted peanuts", img: "/api/placeholder/100/100" },
      { name: "Finger Chips", price: "₹100", desc: "Classic crispy potato french fries", img: "/api/placeholder/100/100" },
      { name: "Farali Chiwda [100 grams]", price: "₹60", desc: "Special fasting crunchy mix", img: "/api/placeholder/100/100" },
      { name: "Brijwasi Special Pav Bhaji", price: "₹180", desc: "Signature bhaji with 2 butter pav", img: "/api/placeholder/100/100" },
      { name: "Paneer Pav Bhaji", price: "₹200", desc: "Bhaji with grated paneer and 2 butter pav", img: "/api/placeholder/100/100" },
      { name: "Jain Cheese Pav Bhaji [2 Pav]", price: "₹200", desc: "No onion/garlic with extra cheese", img: "/api/placeholder/100/100" },
      { name: "Jain Pav Bhaji [2 Pav]", price: "₹160", desc: "Strictly no onion and garlic preparation", img: "/api/placeholder/100/100" },
      { name: "Khada Pav Bhaji [2 Pav]", price: "₹170", desc: "Bhaji with chunky vegetables", img: "/api/placeholder/100/100" },
      { name: "Cheese Pav Bhaji [2 Pav]", price: "₹190", desc: "Classic bhaji loaded with cheese", img: "/api/placeholder/100/100" },
      { name: "Special Butter Pav Bhaji [2 Pav]", price: "₹170", desc: "Cooked with extra premium butter", img: "/api/placeholder/100/100" },
      { name: "Masala Pav [2 Pieces]", price: "₹100", desc: "Pav stuffed with spicy bhaji mix", img: "/api/placeholder/100/100" },
      { name: "Butter Pav [1 Piece]", price: "₹25", desc: "Soft amul buttered pav", img: "/api/placeholder/100/100" },
      { name: "Paneer Chole Bhature", price: "₹240", desc: "2 big bhaturas with paneer chole", img: "/api/placeholder/100/100" },
      { name: "Chole Poori", price: "₹160", desc: "Chole served with 4 fluffy puris", img: "/api/placeholder/100/100" },
      { name: "Chole Bhature", price: "₹200", desc: "Classic North Indian chole bhature", img: "/api/placeholder/100/100" },
      { name: "Chole Samosa [2 Pieces]", price: "₹120", desc: "Samosas served with hot chole", img: samosaImg },
    ]
  },
  accompaniments: {
    label: "Accompaniments",
    tagline: "Extra Joy",
    heroImg: saladImg,
    items: [
      { name: "Dahi", price: "₹60", desc: "Fresh chilled home-style curd", img: "/api/placeholder/100/100" },
      { name: "Boondi Raita", price: "₹100", desc: "Spiced curd with crunchy boondi", img: "/api/placeholder/100/100" },
      { name: "Green Salad", price: "₹80", desc: "Fresh seasonal garden vegetables", img: saladImg },
      { name: "Veg Mixed Raita", price: "₹100", desc: "Curd with chopped vegetables", img: "/api/placeholder/100/100" },
      { name: "Masala Papad", price: "₹60", desc: "Roasted papad with spicy toppings", img: "/api/placeholder/100/100" },
      { name: "Roasted Papad", price: "₹30", desc: "Crispy tandoor roasted papad", img: "/api/placeholder/100/100" },
      { name: "Fried Papad", price: "₹40", desc: "Deep fried golden papad", img: "/api/placeholder/100/100" },
    ]
  },
  upvas: {
    label: "Upvas Specials",
    tagline: "Fasting Food",
    heroImg: pohaImg,
    items: [
      { name: "Sabudana Vada [2 Pieces]", price: "₹100", desc: "Sago patties served with yogurt", img: "/api/placeholder/100/100" },
      { name: "Farali Chiwda [100 grams]", price: "₹60", desc: "Crunchy potato mix for fasting", img: "/api/placeholder/100/100" },
      { name: "Finger Chips", price: "₹100", desc: "Crispy fries suitable for upvas", img: "/api/placeholder/100/100" },
      { name: "Sabudana Khichdi", price: "₹100", desc: "The classic fasting staple", img: "/api/placeholder/100/100" },
    ]
  },
  breads: {
    label: "Breads",
    tagline: "Freshly Baked",
    heroImg: parathaImg,
    items: [
      { name: "Veg Stuffed Paratha", price: "₹120", desc: "Paratha stuffed with mixed veggies", img: parathaImg },
      { name: "Aloo Paratha", price: "₹100", desc: "Classic potato stuffed flatbread", img: parathaImg },
      { name: "Gobi Paratha", price: "₹100", desc: "Griddle paratha with cauliflower filling", img: parathaImg },
      { name: "Butter Paratha", price: "₹60", desc: "Flaky whole wheat paratha with butter", img: "/api/placeholder/100/100" },
      { name: "Naan", price: "₹50", desc: "Traditional tandoor baked bread", img: "/api/placeholder/100/100" },
      { name: "Kulcha", price: "₹50", desc: "Soft leavened tandoori bread", img: "/api/placeholder/100/100" },
      { name: "Butter Kulcha", price: "₹60", desc: "Soft kulcha brushed with amul butter", img: "/api/placeholder/100/100" },
    ]
  },
  dal: {
    label: "Dal",
    tagline: "Lentil Love",
    heroImg: dalTadkaImg,
    items: [
      { name: "Dal Fry", price: "₹160", desc: "Yellow lentils cooked with spices", img: dalTadkaImg },
      { name: "Dal Fry Tadka", price: "₹180", desc: "Lentils with double ghee tempering", img: dalTadkaImg },
    ]
  },
  mithai: {
    label: "Mithai",
    tagline: "Pure Sweetness",
    heroImg: gulabJamunImg,
    items: [
      { name: "Kaju Katli", price: "₹450", desc: "Premium cashew fudge made with real silver vark", img: "/src/images/sweet 7.png" },
      { name: "Gulab Jamun", price: "₹60", desc: "Soft milk-solid balls in saffron syrup", img: gulabJamunImg },
      { name: "Rasmalai", price: "₹60", desc: "Spongy cottage cheese in creamy milk", img: rasmalaiImg },
      { name: "Special Jalebi", price: "₹50", desc: "Crispy spirals soaked in pure honey syrup", img: jalebiImg },
    ]
  },
};

export default function Menu() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>("breakfast");
  const scrollRef = useRef<HTMLDivElement>(null);
  const menuSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuSectionRef.current) {
      const offset = 100; // Account for sticky header if any
      const top = menuSectionRef.current.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [activeTab]);

  useEffect(() => {
    const category = searchParams.get("category");
    if (category && category in menuData) {
      setActiveTab(category);
    }
  }, [searchParams]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf9f2]">
      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-[#1a2e2e] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#87bba9]/10 skew-x-12" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center md:text-left"
            >
              <span className="text-[#87bba9] font-bold tracking-widest uppercase mb-4 block">Brijwasi Culinary</span>
              <h1 className="text-4xl md:text-8xl font-serif mb-6 leading-tight">
                Timeless <span className="italic text-[#87bba9]">Delights</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex justify-center md:justify-end"
            >
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-[#87bba9] rounded-full blur-[40px] md:blur-[80px] opacity-20 animate-pulse" />
                <div className="relative w-full h-full rounded-full border-4 md:border-8 border-white/10 overflow-hidden shadow-2xl">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-110"
                  >
                    <source src="/src/video/gulab jamun.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div ref={menuSectionRef} className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative flex items-center group">
          <button 
            onClick={() => handleScroll("left")}
            className="absolute left-2 z-10 p-2 bg-white/90 shadow-lg rounded-full hidden md:block"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div 
            ref={scrollRef}
            className="flex gap-3 md:gap-8 py-4 md:py-6 overflow-x-auto no-scrollbar scroll-smooth w-full"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {Object.keys(menuData).map((key) => (
              <motion.button
                key={key}
                onClick={() => setActiveTab(key)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeTab === key 
                    ? "bg-[#6e1a37] text-white shadow-xl" 
                    : "text-gray-500 hover:text-[#6e1a37] hover:bg-gray-50 bg-gray-50/50"
                }`}
              >
                {menuData[key].label}
                <span className={`text-xs md:sm opacity-60 font-normal`}>({menuData[key].items.length})</span>
              </motion.button>
            ))}
          </div>

          <button 
            onClick={() => handleScroll("right")}
            className="absolute right-2 z-10 p-2 bg-white/90 shadow-lg rounded-full hidden md:block"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <section className="py-12 md:py-24 max-w-7xl mx-auto px-4 min-h-[800px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start"
          >
            <div className="order-2 lg:order-1">
              <div className="space-y-8 md:space-y-12">
                {menuData[activeTab].items.map((item, index) => (
                  <motion.div
                    key={`${activeTab}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex gap-4 md:gap-8 items-center border-b border-gray-100 pb-8 md:pb-12 last:border-0"
                  >
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0 shadow-lg border-2 md:border-4 border-white group-hover:scale-110 transition-transform duration-500">
                      <ImageWithFallback src={item.img} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline mb-1 md:mb-2">
                        <h4 className="text-lg md:text-2xl font-bold text-gray-900 group-hover:text-[#6e1a37] transition-colors line-clamp-1">{item.name}</h4>
                        {item.price && <span className="text-lg md:text-2xl font-serif text-[#6e1a37] font-bold whitespace-nowrap ml-2">{item.price}</span>}
                      </div>
                      <p className="text-gray-500 text-sm md:text-lg leading-relaxed line-clamp-2">{item.desc}</p>
                    </div>

                    <motion.button
                      whileHover={{ x: 5 }}
                      className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-gray-400 group-hover:bg-[#6e1a37] group-hover:text-white transition-all shadow-md shrink-0"
                    >
                      <ChevronRight size={18} />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:sticky lg:top-32 mb-8 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                className="relative"
              >
                <div className="rounded-t-full overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] aspect-[4/5] md:aspect-[4/5] border-8 md:border-[12px] border-white">
                  <ImageWithFallback 
                    src={menuData[activeTab].heroImg} 
                    alt={menuData[activeTab].label}
                    className="w-full h-full object-cover transform scale-110"
                  />
                </div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 bg-[#6e1a37] text-white p-6 md:p-12 rounded-2xl md:rounded-3xl shadow-2xl z-20"
                >
                  <p className="text-[#87bba9] text-xs md:text-base font-bold tracking-widest uppercase mb-1 md:mb-2">{menuData[activeTab].tagline}</p>
                  <h3 className="text-2xl md:text-4xl font-serif">{menuData[activeTab].label}</h3>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Special Features */}
      <section className="py-24 bg-[#1a2e2e]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
          <div className="p-8 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            <span className="text-5xl mb-6 block">🥗</span>
            <h3 className="text-2xl font-bold mb-4">100% Vegetarian</h3>
            <p className="text-gray-400">Every single dish is prepared in our strictly vegetarian kitchen with the highest standards.</p>
          </div>
          <div className="p-8 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            <span className="text-5xl mb-6 block">✨</span>
            <h3 className="text-2xl font-bold mb-4">Jain Options</h3>
            <p className="text-gray-400">Most of our dishes can be prepared without onion and garlic to suit your dietary needs.</p>
          </div>
          <div className="p-8 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            <span className="text-5xl mb-6 block">🛵</span>
            <h3 className="text-2xl font-bold mb-4">Home Delivery</h3>
            <p className="text-gray-400">Craving our food at home? Order through Zomato or call us for direct delivery in Boisar.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
