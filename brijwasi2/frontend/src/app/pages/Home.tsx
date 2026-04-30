import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { Star, Clock, MapPin, Phone, Utensils, Award, Heart, Leaf, ChevronRight, ShoppingCart, Info, Mail, Users } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Footer } from "../components/Footer";

// Image Imports
import kachoriImg from "@/images/Kachori - 1 - Edited.png";
import samosaImg from "@/images/Samosa - 1 - Edited.png";
import pohaImg from "@/images/Poha - 1 - Edited.png";
import dalTadkaImg from "@/images/Dal Tadka  - 1 - Edited.png";
import paneerImg from "@/images/Paneeer - 1 - Edited.png";
import biryaniImg from "@/images/Veg Biryani - 1 - Edited.png";
import paneerChilliImg from "@/images/Paneer Chilli - 1 - Edited.png";
import manchurianImg from "@/images/Manchurian - 1 - Edited.png";
import dosaImg from "@/images/Dosa - 1 - Edited.png";
import gulabJamunImg from "@/images/Gulab Jamun - 1 - Edited.png";
import jalebiImg from "@/images/Jalebi - 1 - Edited.png";
import noodlesImg from "@/images/Noodles - 1 - Edited.png";
import rasmalaiImg from "@/images/Rasmalai - 1 - Edited.png";

export default function Home() {
  const ref = useRef(null);
  const [activeCategory, setActiveCategory] = useState("breakfast");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const signatureMenu = {
    breakfast: [
      { name: "Khasta Kachori", price: "₹60", desc: "Crispy, flaky kachori with spicy filling", img: kachoriImg },
      { name: "Samosa", price: "₹40", desc: "Classic potato-filled samosas", img: samosaImg },
      { name: "Poha", price: "₹50", desc: "Light and fluffy beaten rice", img: pohaImg },
    ],
    specials: [
      { name: "Dal Tadka", price: "₹180", desc: "Traditional yellow dal with signature tadka", img: dalTadkaImg },
      { name: "Paneer Tikka Masala", price: "₹240", desc: "Char-grilled paneer in rich gravy", img: paneerImg },
    ],
    biryani: [
      { name: "Veg Biryani", price: "₹250", desc: "Fragrant rice with mixed vegetables", img: biryaniImg },
    ],
    chinese: [
      { name: "Paneer Chilli", price: "₹240", desc: "Indo-Chinese fusion with a spicy kick", img: paneerChilliImg },
      { name: "Manchurian", price: "₹200", desc: "Veg manchurian in savory gravy", img: manchurianImg },
    ],
    "south indian": [
      { name: "Masala Dosa", price: "₹120", desc: "Crispy crepe with potato filling", img: dosaImg },
    ],
  };

  return (
    <div ref={ref} className="overflow-hidden bg-[#d5e7b5] text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/src/video/ingredients.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-[#ae2441] text-[#6e1a37] px-6 py-2 rounded-full font-bold text-lg mb-6 shadow-lg">
              37 Years of Excellence
            </span>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl" style={{ fontFamily: 'Georgia, serif' }}>
              Brijwasi
              <span className="block text-4xl md:text-5xl mt-2 opacity-90">SWEETS & RESTAURANT</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-10 drop-shadow-lg font-light leading-relaxed">
              Experience Pure Veg Excellence<br />
              <span className="text-xl md:text-2xl opacity-80 mt-4 block max-w-3xl mx-auto">
                Authentic vegetarian cuisine crafted with tradition and love. From classic Indian to Chinese delights, we serve happiness on every plate.
              </span>
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              <Link to="/menu">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#6e1a37] text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-lg md:text-xl font-bold shadow-xl flex items-center gap-2"
                >
                  Explore Menu <ChevronRight />
                </motion.button>
              </Link>
              <a 
                href="https://www.zomato.com/mumbai/brijwasi-sweets-and-restaurant-boisar" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#6e1a37] px-8 md:px-10 py-3 md:py-4 rounded-full text-lg md:text-xl font-bold shadow-xl"
                >
                  Order Online
                </motion.button>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-white">
              <div className="flex text-[#ae2441]">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
              </div>
              <span className="text-xl font-bold">Rated 4.8/5</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 text-4xl"
        >
          ↓
        </motion.div>
      </section>

      {/* Heritage Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#6e1a37] font-bold text-xl mb-4 block uppercase tracking-widest">The Taste of Heritage</span>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Pure Sweets & <br/>Savoury Delights
            </h2>
            
            <div className="space-y-8 text-xl text-gray-700 leading-relaxed">
              <div className="border-l-4 border-[#ae2441] pl-6 py-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">The Heritage of Boisar</h3>
                <h4 className="text-2xl font-bold text-[#6e1a37] mb-4">Purity in Every Bite</h4>
                <p className="italic text-2xl text-gray-600">"For over three decades, we have been the guardians of authentic Indian sweetness in Boisar."</p>
              </div>
              
              <p>Established in 1987, Brijwasi Sweets was founded on a simple promise: to never compromise on purity. Every piece of sweet that leaves our counter is a testament to our dedication to traditional craftsmanship.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#6e1a37] text-white rounded-full flex items-center justify-center shrink-0">
                    <Award size={20} />
                  </div>
                  <h4 className="font-bold text-xl">Our Commitment</h4>
                </div>
                <p className="text-gray-600 pl-13">100% Pure Ghee & Farm-Fresh Milk</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#6e1a37] text-white rounded-full flex items-center justify-center shrink-0">
                    <Leaf size={20} />
                  </div>
                  <h4 className="font-bold text-xl">Traditional Recipes</h4>
                </div>
                <p className="text-gray-600 pl-13">Secret family blends passed down through generations.</p>
              </div>

              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#6e1a37] text-white rounded-full flex items-center justify-center shrink-0">
                    <Star size={20} />
                  </div>
                  <h4 className="font-bold text-xl">Signature Delicacies</h4>
                </div>
                <p className="text-gray-600 pl-13">Soft Rasmalais, Juicy Gulab Jamuns, and Crispy Jalebis.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 bg-gray-100">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/src/video/jalebi.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#ae2441] rounded-full blur-3xl opacity-20 -z-0" />
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#6e1a37] rounded-full blur-3xl opacity-20 -z-0" />
          </motion.div>
        </div>
      </section>

      {/* Savoury Section */}
      <section className="py-24 bg-[#87bba9]/10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:order-2"
          >
            <span className="text-[#87bba9] font-bold text-xl mb-4 block">Savoury Delights</span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Paneer Perfection
            </h2>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
              <p className="font-bold text-2xl text-[#87bba9]">"Beyond sweets, we master the art of vegetarian savoury cuisine."</p>
              <p>Our Paneer dishes are the talk of the town. Using farm-fresh, soft paneer and our signature hand-ground spices, we create flavours that linger on your palate long after the meal.</p>
            </div>

            <div className="space-y-6 mt-10">
              <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#87bba9]">
                <h4 className="font-bold text-xl mb-2 text-[#87bba9]">Paneer Chilli</h4>
                <p className="text-gray-600">A perfect Indo-Chinese fusion with a spicy kick.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#87bba9]">
                <h4 className="font-bold text-xl mb-2 text-[#87bba9]">Paneer Tikka Masala</h4>
                <p className="text-gray-600">Char-grilled paneer in a rich, creamy tomato gravy.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#87bba9]">
                <h4 className="font-bold text-xl mb-2 text-[#87bba9]">Farm Fresh</h4>
                <p className="text-gray-600">Sourced daily to ensure the softest texture in every bite.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative md:order-1"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/src/video/paneer.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialities Grid */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Video Texture */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20 grayscale"
          >
            <source src="/src/video/textures.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>Our Specialities</h2>
            <p className="text-xl text-gray-600 font-medium">Discover our diverse range of cuisines</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Brijwasi Sweets", desc: "Traditional flavors with authentic spices", img: "/src/images/Jalebi - 1 - Edited.png", color: "from-[#6e1a37]/90 to-transparent", link: "/menu?category=mithai" },
              { title: "Chinese Delights", desc: "Indo-Chinese fusion at its finest", img: "/src/images/Noodles - 1 - Edited.png", color: "from-[#87bba9]/90 to-transparent", link: "/menu?category=chinese" },
              { title: "South Indian", desc: "Crispy dosas and fluffy idlis", img: "/src/images/Dosa - 1 - Edited.png", color: "from-[#ae2441]/90 to-transparent", link: "/menu?category=southIndian" },
              { title: "Street Food", desc: "Mumbai's favorite street snacks", img: "/src/images/Kachori - 1 - Edited.png", color: "from-[#6e1a37]/90 to-transparent", link: "/menu?category=snacks" },
            ].map((spec, index) => (
              <Link key={index} to={spec.link}>
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100 
                  }}
                  whileHover={{ 
                    y: -20, 
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative h-[25rem] md:h-[35rem] rounded-[2rem] md:rounded-[3rem] overflow-hidden group cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <ImageWithFallback 
                    src={spec.img} 
                    alt={spec.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125" 
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${spec.color} p-6 md:p-12 flex flex-col justify-end transition-all duration-500 group-hover:bg-black/30`}>
                    <div className="transform translate-z-10">
                      <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">{spec.title}</h3>
                      <p className="text-white/80 text-sm md:text-xl mb-4 md:mb-8">{spec.desc}</p>
                      <div className="flex items-center gap-2 text-white font-bold text-sm md:text-lg">
                        View Menu <ChevronRight size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-[3rem] transition-colors duration-500" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Menu Section */}
      <section className="py-24 bg-[#d5e7b5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>Our Signature Menu</h2>
            <p className="text-xl text-gray-600">Handpicked favorites from our kitchen</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(signatureMenu).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-lg font-bold transition-all uppercase tracking-wider ${
                  activeCategory === cat 
                  ? "bg-[#6e1a37] text-white shadow-lg" 
                  : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {signatureMenu[activeCategory].map((item, index) => (
                <motion.div
                  key={`${activeCategory}-${index}`}
                  initial={{ 
                    opacity: 0, 
                    x: index === 0 ? -100 : index === 2 ? 100 : 0, 
                    y: index === 1 ? 100 : 0,
                    scale: 0.8,
                    rotate: index === 0 ? -10 : index === 2 ? 10 : 0
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -50 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    type: "spring",
                    bounce: 0.4
                  }}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="group relative flex flex-col items-center bg-white rounded-b-[4rem] rounded-t-[12rem] shadow-xl overflow-hidden border-2 border-transparent hover:border-[#6e1a37]/20 transition-all pt-10"
                >
                  <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white mb-6 transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
                    <ImageWithFallback src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8 text-center w-full bg-gradient-to-b from-white to-gray-50 flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 font-serif">{item.name}</h3>
                      <span className="text-[#ae2441] font-bold text-2xl">{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-lg mb-8 italic">"{item.desc}"</p>
                    <a 
                      href="https://www.zomato.com/mumbai/brijwasi-sweets-and-restaurant-boisar" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-4 rounded-full bg-[#6e1a37] text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-[#6e1a37]/20"
                      >
                        <ShoppingCart size={20} /> Order Now
                      </motion.button>
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#6e1a37] font-bold text-xl mb-2 block uppercase tracking-widest">What We Offer</span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a comforting dine-in meal to grand event catering — Brijwasi brings purity and warmth to every occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Dine-In Experience", desc: "Enjoy a warm, family-friendly dining atmosphere with authentic flavours served fresh at your table.", icon: Utensils, delay: 0 },
              { title: "Catering Services", desc: "Let us cater your functions, weddings, and corporate events with our signature pure-veg spreads.", icon: Users, delay: 0.1 },
              { title: "Takeaway / Parcel", desc: "Pick up freshly prepared food packed with care — perfect for office lunches or family gatherings.", icon: ShoppingCart, delay: 0.2 },
              { title: "Home Delivery", desc: "Hot, fresh food delivered right to your doorstep. Order via Zomato or call us directly.", icon: MapPin, delay: 0.3 },
              { title: "Sweet Boxes", desc: "Beautifully packed assortments of our handmade sweets — ideal for festivals and celebrations.", icon: Heart, delay: 0.4 },
              { title: "Breakfast Specials", desc: "Start your day right with our popular kachori, samosa, poha, and freshly brewed chai.", icon: Clock, delay: 0.5 },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: service.delay }}
                whileHover={{ 
                  y: -15, 
                  boxShadow: "0 30px 60px rgba(110, 26, 55, 0.15)",
                  scale: 1.02
                }}
                className="p-10 bg-[#d5e7b5]/40 rounded-[3rem] border border-[#87bba9]/30 transition-all cursor-pointer relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#87bba9]/10 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-[#ae2441]/10" />
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-16 h-16 bg-[#ae2441] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:bg-[#6e1a37] transition-colors"
                >
                  <service.icon size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-[#6e1a37] group-hover:translate-x-2 transition-transform">{service.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery Highlights */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { title: "Brijwasi Sweets", subtitle: "Taste of Boisar", img: jalebiImg, link: "/menu?category=mithai" },
            { title: "Chinese Delights", subtitle: "Indo-Chinese Fusion", img: noodlesImg, link: "/menu?category=chinese" },
            { title: "South Indian", subtitle: "Authentic Flavors", img: dosaImg, link: "/menu?category=southIndian" },
          ].map((item, index) => (
            <Link key={index} to={item.link}>
              <motion.div
                initial={{ opacity: 0, x: index === 0 ? -100 : index === 2 ? 100 : 0, y: index === 1 ? 100 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: index === 0 ? 5 : index === 2 ? -5 : 0,
                  z: 50
                }}
                className="group relative h-[35rem] rounded-t-[15rem] rounded-b-[3rem] overflow-hidden cursor-pointer shadow-2xl border-x-[10px] border-t-[10px] border-white/10 hover:border-white/30 transition-all"
                style={{ perspective: "1000px" }}
              >
                <ImageWithFallback src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6e1a37] via-transparent to-transparent flex flex-col justify-end p-12">
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-[#87bba9] font-bold text-xl mb-3 tracking-widest uppercase"
                  >{item.subtitle}</motion.p>
                  <h3 className="text-5xl font-bold mb-6 font-serif drop-shadow-lg">{item.title}</h3>
                  <motion.div 
                    className="w-16 h-16 bg-white text-[#6e1a37] rounded-full flex items-center justify-center group-hover:bg-[#87bba9] group-hover:text-white transition-all duration-500 shadow-xl"
                    whileHover={{ x: 15, scale: 1.1 }}
                  >
                    <ChevronRight size={32} />
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Customer Favourites - Redesigned Section */}
      <section className="relative py-32 overflow-hidden bg-white">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#1a2e2e]" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-serif text-[#87bba9] mb-4">Live well, and eat with passion.</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto italic">
              "Every dish we serve is a testament to our love for authentic flavours and culinary excellence."
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-start">
            {[
              { name: "Paneer Tikka", price: "₹240", img: paneerImg, offset: 0 },
              { name: "Veg Biryani", price: "₹250", img: biryaniImg, offset: 100 },
              { name: "Masala Dosa", price: "₹120", img: dosaImg, offset: 50 },
              { name: "Rasmalai", price: "₹60", img: rasmalaiImg, offset: 150 },
            ].map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: dish.offset }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                whileHover={{ y: dish.offset - 20, scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-2xl h-[400px] md:h-[600px] bg-white border-8 border-white"
              >
                <ImageWithFallback 
                  src={dish.img} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  >
                    <h3 className="text-3xl font-bold font-serif mb-2">{dish.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-[#87bba9] font-bold text-2xl">{dish.price}</p>
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className="w-10 h-10 bg-[#87bba9] rounded-full flex items-center justify-center text-white shadow-lg"
                      >
                        <ChevronRight size={24} />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Call to Action */}
      <section className="py-24 bg-[#1a2e2e]">
      </section>

      {/* Explore Categories */}
      <section className="py-24 bg-[#87bba9]/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>Explore Categories</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: "🥪", label: "Sandwiches", link: "/menu?category=sandwiches" },
              { icon: "🍚", label: "Rice & Biryani", link: "/menu?category=riceBiryani" },
              { icon: "🥞", label: "South Indian", link: "/menu?category=southIndian" },
              { icon: "🍜", label: "Chinese", link: "/menu?category=chinese" },
              { icon: "🍢", label: "Starters", link: "/menu?category=starter" },
              { icon: "🍨", label: "Desserts", link: "/menu?category=mithai" },
            ].map((cat, index) => (
              <Link key={index} to={cat.link}>
                <motion.div
                  whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
                  className="bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] text-center shadow-sm cursor-pointer group"
                >
                  <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">{cat.icon}</div>
                  <h4 className="font-bold text-lg mb-3 text-gray-800">{cat.label}</h4>
                  <div className="text-[#6e1a37] font-bold flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ChevronRight size={16} />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Premium Experience", label: "Popular Items", desc: "Handpicked customer favorites", icon: Star },
            { title: "Chef Specials", label: "Signature dishes", desc: "Signature dishes from our kitchen", icon: Utensils },
            { title: "Today's Picks", label: "Recommendations", desc: "Fresh recommendations daily", icon: Award },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-[#d5e7b5] p-10 rounded-[3rem] text-center"
            >
              <div className="w-16 h-16 bg-white text-[#6e1a37] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-md">
                <item.icon size={32} />
              </div>
              <span className="text-[#6e1a37] font-bold text-lg mb-2 block uppercase">{item.title}</span>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">{item.label}</h3>
              <p className="text-gray-600 text-lg">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback src="/api/placeholder/1920/600" alt="CTA Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-[#6e1a37]/90" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ fontFamily: 'Georgia, serif' }}>Ready to Order?</h2>
          <p className="text-2xl mb-12 opacity-90 leading-relaxed">
            Experience authentic vegetarian cuisine delivered to your doorstep. Order now and taste the purity.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#6e1a37" }}
              className="px-10 py-5 bg-black text-white rounded-full text-2xl font-bold shadow-2xl transition-all"
            >
              Order on Zomato
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#000" }}
              className="px-10 py-5 bg-white text-[#6e1a37] rounded-full text-2xl font-bold shadow-2xl transition-all"
            >
              Call to Order
            </motion.button>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}
