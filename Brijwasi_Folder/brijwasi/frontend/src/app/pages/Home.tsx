import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight, Star, Clock, Award, Users, UtensilsCrossed, Truck, ShoppingBag, CalendarDays, Gift, Coffee } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeCategory, setActiveCategory] = useState("breakfast");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable scrolling when splash is active
    if (showSplash) {
      document.body.style.overflow = "hidden";
      // Auto-hide splash after 2 seconds
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showSplash]);

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>
      <div className={`pt-20 transition-opacity duration-1000 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
      <HeroSection />
      <HorizontalSweetsSection />
      <HorizontalScrollStory />
      <MagicMenuSection activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <ServicesSection />
      <HorizontalPageScroll />
      <FastGallery />
      <PopularDishesSection />
      <CategoryGrid />
      <PremiumExperience />
      <CTASection />
    </div>
    </>
  );
}

function SplashScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[1000] bg-[#5A6B8C] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-20"></div>
      
      {/* The Scroll Container */}
      <div className="relative w-full max-w-2xl px-8 flex flex-col items-center">
        
        {/* Top Roller */}
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: -20 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative z-20 w-full h-12 bg-[#8B4513] rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.5)] border-y-2 border-[#5D2E0A] flex items-center justify-between px-4"
        >
          <div className="w-8 h-14 bg-[#D4AF37] rounded-sm absolute -left-2 top-1/2 -translate-y-1/2 shadow-lg border border-[#B8860B]"></div>
          <div className="w-8 h-14 bg-[#D4AF37] rounded-sm absolute -right-2 top-1/2 -translate-y-1/2 shadow-lg border border-[#B8860B]"></div>
        </motion.div>

        {/* The Paper */}
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "450px", opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-[90%] bg-[#F5E6BE] relative z-10 shadow-inner overflow-hidden border-x-[1px] border-[#D4C4A8]"
          style={{
            backgroundImage: "url('https://www.transparenttextures.com/patterns/p6-polyester.png')",
            boxShadow: "inset 0 0 100px rgba(139, 69, 19, 0.2)"
          }}
        >
          {/* Paper Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="h-full flex flex-col items-center justify-center p-12 text-[#5A6B8C]"
          >
            <motion.div
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ duration: 3, repeat: Infinity }}
               className="text-center"
            >
              <h2 className="text-sm uppercase tracking-[0.4em] text-[#FF6B3D] font-bold mb-4">Established 1987</h2>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Brijwasi <br/> Sweets
              </h1>
              
              <div className="w-32 h-1 bg-[#FF6B3D] mx-auto mb-8"></div>
              
              <div className="space-y-4">
                <p className="text-xl md:text-2xl font-medium italic opacity-80">Boisar Timings</p>
                <div className="text-[#FF6B3D] font-bold text-3xl md:text-4xl">
                  8:30 AM - 10:30 PM
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Paper Edges Detail */}
          <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/5 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-black/5 to-transparent"></div>
        </motion.div>

        {/* Bottom Roller */}
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: 20 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative z-20 w-full h-12 bg-[#8B4513] rounded-full shadow-[0_-10px_20px_rgba(0,0,0,0.5)] border-y-2 border-[#5D2E0A] flex items-center justify-between px-4"
        >
          <div className="w-8 h-14 bg-[#D4AF37] rounded-sm absolute -left-2 top-1/2 -translate-y-1/2 shadow-lg border border-[#B8860B]"></div>
          <div className="w-8 h-14 bg-[#D4AF37] rounded-sm absolute -right-2 top-1/2 -translate-y-1/2 shadow-lg border border-[#B8860B]"></div>
        </motion.div>

      </div>
    </motion.div>
  );
}

function HorizontalSweetsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Add state to trigger re-renders for non-motion elements like the dot indicator
  const [activeDot, setActiveDot] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) setActiveDot(0);
    else if (latest < 0.66) setActiveDot(1);
    else setActiveDot(2);
  });

  // Page 1 (Blue) -> Page 2 (Beige) -> Page 3 (Blue)
  
  // Opacity for Blue Page 1 elements
  const blue1Opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  
  // --- BEIGE PAGE (Page 2) REVEAL ---
  const beigeClip = useTransform(scrollYProgress, [0.05, 0.25], ["inset(0 0 0 100%)", "inset(0 0 0 0%)"]);
  // Images for Beige Page - appear after reveal
  const p2ImgOpacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
  const p2ImgLeftY = useTransform(scrollYProgress, [0.25, 0.4], ["-50%", "0%"]);
  const p2ImgRightY = useTransform(scrollYProgress, [0.25, 0.4], ["50%", "0%"]);
  
  // --- BLUE PAGE (Page 3) REVEAL ---
  const blueClip = useTransform(scrollYProgress, [0.5, 0.7], ["inset(0 0 0 100%)", "inset(0 0 0 0%)"]);
  // Paneer images appear immediately after reveal completes
  const p3ImgOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const p3ImgLeftY = useTransform(scrollYProgress, [0.7, 0.85], ["-50%", "0%"]);
  const p3ImgRightY = useTransform(scrollYProgress, [0.7, 0.85], ["50%", "0%"]);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#5A6B8C]">
        
        {/* Layer 1: Blue Brijwasi Sweets Page (Static Base) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-10"></div>
          <motion.div 
            style={{ opacity: blue1Opacity }}
            className="text-center z-10"
          >
            <h1 className="text-7xl md:text-9xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Brijwasi Sweets
            </h1>
            <p className="text-[#E8DFC7] text-2xl uppercase tracking-widest font-light mb-8">The Taste of Heritage</p>
            <div className="flex items-center justify-center space-x-4 text-white/60">
              <span className="w-12 h-px bg-white/20"></span>
              <span className="text-sm uppercase tracking-[0.3em]">Pure Sweets & Savoury Delights</span>
              <span className="w-12 h-px bg-white/20"></span>
            </div>
          </motion.div>
        </div>

        {/* Layer 2: Beige Heritage Page (Clip Reveal) */}
        <motion.div 
          style={{ clipPath: beigeClip }}
          className="absolute inset-0 bg-[#E8DFC7] z-20 flex flex-col items-center justify-center shadow-[-30px_0_60px_rgba(0,0,0,0.3)]"
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/p6-polyester.png')]"></div>
          </div>

          <div className="relative z-30 text-center max-w-5xl px-8">
            <h2 className="text-[#FF6B3D] text-sm uppercase tracking-[0.5em] mb-6 font-bold">The Heritage of Boisar</h2>
            <h1 className="text-6xl md:text-8xl font-bold text-[#5A6B8C] mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
              Purity in Every Bite
            </h1>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-[#5A6B8C] text-left border-t border-[#5A6B8C]/10 pt-8 md:pt-12">
              <div className="space-y-4 md:space-y-6">
                <p className="text-xl md:text-2xl font-light italic leading-relaxed">
                  "For over three decades, we have been the guardians of authentic Indian sweetness in Boisar."
                </p>
                <p className="text-base md:text-lg opacity-80 leading-relaxed">
                  Established in 1987, Brijwasi Sweets was founded on a simple promise: to never compromise on purity. Every piece of sweet that leaves our counter is a testament to our dedication to traditional craftsmanship.
                </p>
              </div>
              
              <div className="space-y-4 md:space-y-6 border-l-0 md:border-l-2 border-[#5A6B8C]/10 pl-0 md:pl-12 pt-4 md:pt-0">
                <div className="space-y-1 md:space-y-2">
                  <h4 className="font-bold uppercase tracking-widest text-xs opacity-60">Our Commitment</h4>
                  <p className="text-base md:text-lg">100% Pure Ghee & Farm-Fresh Milk</p>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <h4 className="font-bold uppercase tracking-widest text-xs opacity-60">Traditional Recipes</h4>
                  <p className="text-base md:text-lg">Secret family blends passed down through generations.</p>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <h4 className="font-bold uppercase tracking-widest text-xs opacity-60">Signature Delicacies</h4>
                  <p className="text-base md:text-lg">Soft Rasmalais, Juicy Gulab Jamuns, and Crispy Jalebis.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Heritage Images (Page 2) */}
          <motion.div style={{ y: p2ImgLeftY, opacity: p2ImgOpacity }} className="absolute top-4 md:top-8 left-4 md:left-8 w-40 h-40 md:w-80 md:h-80 z-40 pointer-events-none">
            <ImageWithFallback src="/images/sweet6.png" className="w-full h-full object-contain drop-shadow-2xl rotate-[-12deg]" />
          </motion.div>
          <motion.div style={{ y: p2ImgRightY, opacity: p2ImgOpacity }} className="absolute bottom-4 md:bottom-8 right-4 md:right-8 w-40 h-40 md:w-80 md:h-80 z-40 pointer-events-none">
            <ImageWithFallback src="/images/sweet2.png" className="w-full h-full object-contain drop-shadow-2xl rotate-[12deg]" />
          </motion.div>
        </motion.div>

        {/* Layer 3: Blue Food/Paneer Page (Clip Reveal) */}
        <motion.div 
          style={{ clipPath: blueClip }}
          className="absolute inset-0 bg-[#5A6B8C] z-[60] flex flex-col items-center justify-center shadow-[-30px_0_60px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')]"></div>
          </div>

          <div className="relative z-70 text-center max-w-5xl px-8">
            <h2 className="text-[#FF6B3D] text-sm uppercase tracking-[0.5em] mb-6 font-bold">Savoury Delights</h2>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
              Paneer Perfection
            </h1>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-white text-left border-t border-white/10 pt-8 md:pt-12">
              <div className="space-y-4 md:space-y-6">
                <p className="text-xl md:text-2xl font-light italic leading-relaxed text-[#E8DFC7]">
                  "Beyond sweets, we master the art of vegetarian savoury cuisine."
                </p>
                <p className="text-base md:text-lg opacity-80 leading-relaxed">
                  Our Paneer dishes are the talk of the town. Using farm-fresh, soft paneer and our signature hand-ground spices, we create flavours that linger on your palate long after the meal.
                </p>
              </div>
              
              <div className="space-y-4 md:space-y-6 border-l-0 md:border-l-2 border-white/10 pl-0 md:pl-12 pt-4 md:pt-0">
                <div className="space-y-1 md:space-y-2">
                  <h4 className="font-bold uppercase tracking-widest text-xs text-[#FF6B3D]">Paneer Chilli</h4>
                  <p className="text-base md:text-lg text-white/90">A perfect Indo-Chinese fusion with a spicy kick.</p>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <h4 className="font-bold uppercase tracking-widest text-xs text-[#FF6B3D]">Paneer Tikka Masala</h4>
                  <p className="text-base md:text-lg text-white/90">Char-grilled paneer in a rich, creamy tomato gravy.</p>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <h4 className="font-bold uppercase tracking-widest text-xs text-[#FF6B3D]">Farm Fresh</h4>
                  <p className="text-base md:text-lg text-white/90">Sourced daily to ensure the softest texture in every bite.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Food Images (Page 3) */}
          <motion.div style={{ y: p3ImgLeftY, opacity: p3ImgOpacity }} className="absolute top-4 md:top-8 left-4 md:left-8 w-48 h-48 md:w-96 md:h-96 z-[80] pointer-events-none">
            <ImageWithFallback src="/images/paneer_chilli.png" className="w-full h-full object-contain drop-shadow-2xl rotate-[-6deg]" />
          </motion.div>
          <motion.div style={{ y: p3ImgRightY, opacity: p3ImgOpacity }} className="absolute bottom-4 md:bottom-8 right-4 md:right-8 w-48 h-48 md:w-96 md:h-96 z-[80] pointer-events-none">
            <ImageWithFallback src="/images/paneer_tikka.png" className="w-full h-full object-contain drop-shadow-2xl rotate-[6deg]" />
          </motion.div>
        </motion.div>

        {/* Scroll Progress Dot Indicator */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-[100]">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full transition-colors duration-300"
              style={{ 
                backgroundColor: activeDot === i ? "#FF6B3D" : "rgba(255,255,255,0.2)"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#E8DFC7] via-[#9FA8DA]/20 to-[#E8DFC7]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1QTZCOEMiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4 px-4 py-2 bg-[#FF6B3D]/10 rounded-full"
            >
              <span className="text-[#FF6B3D] text-sm font-medium">37 Years of Excellence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-[#5A6B8C] mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Experience Pure Veg{" "}
              <span className="text-[#FF6B3D]">Excellence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-[#5A6B8C]/80 mb-8 leading-relaxed"
            >
              Authentic vegetarian cuisine crafted with tradition and love. From classic Indian to Chinese delights, we serve happiness on every plate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
               <Link to="/menu">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-[#FF6B3D] text-white px-8 py-4 rounded-full hover:bg-[#e55a2d] transition-colors shadow-lg shadow-[#FF6B3D]/30"
                >
                  <span>Explore Menu</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>

              <motion.a
                href="https://www.zomato.com/mumbai/brijwasi-sweets-and-restaurant-boisar/order"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-white text-[#5A6B8C] px-8 py-4 rounded-full hover:bg-[#9FA8DA]/20 transition-colors border-2 border-[#5A6B8C]/20"
              >
                <span>Order Online</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 flex items-center space-x-8"
            >
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-[#FF6B3D] fill-[#FF6B3D]" />
                  ))}
                </div>
                <span className="text-[#5A6B8C] text-sm">Rated 4.8/5</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, type: "spring", bounce: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <div className="relative">
                <img
                  src="/images/sweet8.png"
                  alt="Brijwasi Sweets"
                  className="w-full h-[300px] md:h-[500px] object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              animate={{
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF6B3D]/20 rounded-full blur-2xl"
            ></motion.div>

            <motion.div
              animate={{
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#9FA8DA]/20 rounded-full blur-2xl"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HorizontalScrollStory() {
  const categories = [
    {
      title: "Indian Cuisine",
      description: "Traditional flavors with authentic spices",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600",
    },
    {
      title: "Chinese Delights",
      description: "Indo-Chinese fusion at its finest",
      image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600",
    },
    {
      title: "South Indian",
      description: "Crispy dosas and fluffy idlis",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600",
    },
    {
      title: "Street Food",
      description: "Mumbai's favorite street snacks",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-[#5A6B8C] text-center mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Our Specialities
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center text-[#5A6B8C]/70"
        >
          Discover our diverse range of cuisines
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-[30px] bg-white shadow-xl">
              <div className="relative h-80 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="h-full"
                >
                  <ImageWithFallback
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#5A6B8C] via-[#5A6B8C]/50 to-transparent opacity-80"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
              >
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {category.title}
                </h3>
                <p className="text-white/90 text-sm">{category.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function MagicMenuSection({ activeCategory, setActiveCategory }: { activeCategory: string; setActiveCategory: (cat: string) => void }) {
  const categories = ["breakfast", "specials", "biryani", "chinese", "south-indian"];

  const menuItems: Record<string, Array<{ name: string; description: string; price: string; rating: number; image: string }>> = {
    breakfast: [
      { name: "Khasta Kachori", description: "Crispy, flaky kachori with spicy filling", price: "₹60", rating: 5, image: "/images/kachori.png" },
      { name: "Samosa", description: "Classic potato-filled samosas", price: "₹40", rating: 5, image: "/images/samosa.png" },
      { name: "Poha", description: "Light and fluffy beaten rice", price: "₹50", rating: 4, image: "/images/poha.png" },
    ],
    specials: [
      { name: "Paneer Tikka Masala", description: "Creamy tomato-based curry", price: "₹280", rating: 5, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400" },
      { name: "Mushroom Handi", description: "Rich and aromatic mushroom curry", price: "₹260", rating: 5, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400" },
      { name: "Dal Tadka", description: "Tempered lentils with spices", price: "₹180", rating: 5, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    ],
    biryani: [
      { name: "Veg Dum Biryani", description: "Aromatic basmati rice with vegetables", price: "₹250", rating: 5, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400" },
      { name: "Brijwasi Special Biryani", description: "Our signature biryani blend", price: "₹300", rating: 5, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400" },
      { name: "Paneer Biryani", description: "Biryani with soft paneer cubes", price: "₹280", rating: 5, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400" },
    ],
    chinese: [
      { name: "Paneer Chilli", description: "Spicy Indo-Chinese favorite", price: "₹240", rating: 5, image: "/images/paneer_chilli.png" },
      { name: "Veg Manchurian", description: "Crispy vegetable balls in sauce", price: "₹220", rating: 5, image: "/images/manchurian.png" },
      { name: "Hakka Noodles", description: "Stir-fried noodles with vegetables", price: "₹180", rating: 4, image: "/images/noodles.png" },
    ],
    "south-indian": [
      { name: "Masala Dosa", description: "Crispy dosa with potato filling", price: "₹120", rating: 5, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400" },
      { name: "Idli Sambar", description: "Steamed rice cakes with lentil curry", price: "₹80", rating: 5, image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400" },
      { name: "Uttapam", description: "Thick rice pancake with toppings", price: "₹100", rating: 4, image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400" },
    ],
  };

  return (
    <section id="menu" className="py-24 bg-[#E8DFC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-[#5A6B8C] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Signature Menu
          </h2>
          <p className="text-[#5A6B8C]/70">Handpicked favorites from our kitchen</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full capitalize transition-all ${
                activeCategory === category
                  ? "bg-[#FF6B3D] text-white shadow-lg shadow-[#FF6B3D]/30"
                  : "bg-white text-[#5A6B8C] hover:bg-[#9FA8DA]/20"
              }`}
            >
              {category.replace("-", " ")}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        >
          {menuItems[activeCategory]?.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-[30px] overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:bg-[#5A6B8C] hover:text-white group"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#5A6B8C] mb-2 group-hover:text-white">{item.name}</h3>
                <p className="text-[#5A6B8C]/70 text-sm mb-4 group-hover:text-white/80">{item.description}</p>

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < item.rating ? "text-[#FF6B3D] fill-[#FF6B3D]" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#5A6B8C] group-hover:text-white">{item.price}</span>
                  <motion.a
                    href="https://www.zomato.com/mumbai/brijwasi-sweets-and-restaurant-boisar/order"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#FF6B3D] text-white px-6 py-2 rounded-full hover:bg-[#e55a2d] transition-colors inline-block"
                  >
                    Order Now
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedDishes() {
  const dishes = [
    {
      name: "Paneer Butter Masala",
      description: "Creamy, rich tomato-based curry with soft paneer cubes",
      price: "₹260",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600",
    },
    {
      name: "Special Thali",
      description: "Complete meal with dal, sabzi, roti, rice, and dessert",
      price: "₹350",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {dishes.map((dish, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`grid md:grid-cols-2 gap-12 items-center mb-24 ${
              index % 2 === 1 ? "md:grid-flow-dense" : ""
            }`}
          >
            <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative rounded-[40px] overflow-hidden shadow-2xl"
              >
                <ImageWithFallback
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-96 object-cover"
                />
              </motion.div>
            </div>

            <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-[#5A6B8C] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {dish.name}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[#5A6B8C]/80 text-lg mb-6 leading-relaxed"
              >
                {dish.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-6"
              >
                <span className="text-3xl font-bold text-[#FF6B3D]">{dish.price}</span>
                <motion.a
                  href="https://www.zomato.com/mumbai/brijwasi-sweets-and-restaurant-boisar/order"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#5A6B8C] text-white px-8 py-3 rounded-full hover:bg-[#4a5b7c] transition-colors inline-block"
                >
                  Order Now
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CategoryGrid() {
  const navigate = useNavigate();
  const categories = [
    { name: "Sandwiches", icon: "🥪", color: "#FF6B3D", menuCat: "snacks" },
    { name: "Rice & Biryani", icon: "🍚", color: "#9FA8DA", menuCat: "biryani" },
    { name: "South Indian", icon: "🥞", color: "#5A6B8C", menuCat: "south-indian" },
    { name: "Chinese", icon: "🍜", color: "#FF6B3D", menuCat: "chinese" },
    { name: "Starters", icon: "🍢", color: "#9FA8DA", menuCat: "breakfast" },
    { name: "Desserts", icon: "🍨", color: "#5A6B8C", menuCat: "desserts" },
  ];

  return (
    <section className="py-24 bg-[#E8DFC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-[#5A6B8C] text-center mb-16"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Explore Categories
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, rotate: 2 }}
              className="relative group cursor-pointer"
              onClick={() => navigate("/menu", { state: { category: category.menuCat } })}
            >
              <div className="p-8 text-center transition-all flex flex-col items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className="text-[100px] mb-6 drop-shadow-xl"
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-[#5A6B8C] drop-shadow-sm">{category.name}</h3>
                <p className="text-sm text-[#FF6B3D] mt-3 font-semibold opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-sm">Explore Menu →</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PremiumExperience() {
  const features = [
    {
      icon: <Award size={40} />,
      title: "Popular Items",
      description: "Handpicked customer favorites",
    },
    {
      icon: <Users size={40} />,
      title: "Chef Specials",
      description: "Signature dishes from our kitchen",
    },
    {
      icon: <Clock size={40} />,
      title: "Today's Picks",
      description: "Fresh recommendations daily",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#5A6B8C] to-[#4a5b7c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Premium Experience
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-white/10 backdrop-blur-sm rounded-[30px] p-8 text-center hover:bg-white hover:text-[#5A6B8C] transition-all group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-block text-[#FF6B3D] mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/80 group-hover:text-[#5A6B8C]/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScrollRevealProducts() {
  const products = [
    { name: "Paneer Tikka", price: "₹240", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400" },
    { name: "Masala Dosa", price: "₹120", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400" },
    { name: "Veg Biryani", price: "₹250", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400" },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-[#5A6B8C] text-center mb-16"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Popular Dishes
        </motion.h2>

        <div className="space-y-12">
          {products.map((product, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -200 : 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center gap-8`}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: isEven ? -2 : 2 }}
                  className="w-1/2"
                >
                  <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </motion.div>

                <div className="w-1/2">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-bold text-[#5A6B8C] mb-4"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {product.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl font-bold text-[#FF6B3D] mb-6"
                  >
                    {product.price}
                  </motion.p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#FF6B3D] text-white px-8 py-3 rounded-full hover:bg-[#e55a2d] transition-colors"
                  >
                    Order Now
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HorizontalPageScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollProgress = container.scrollLeft / (container.scrollWidth - container.clientWidth);
      container.style.setProperty('--scroll-progress', scrollProgress.toString());
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const pages = [
    { title: "Brijwasi Sweets", subtitle: "Taste of Boisar", color: "#6B2C1F", image: "/images/sweet6.png" },
    { title: "Chinese Delights", subtitle: "Indo-Chinese Fusion", color: "#5A6B8C", image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600" },
    { title: "South Indian", subtitle: "Authentic Flavors", color: "#FF6B3D", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600" },
  ];

  return (
    <section className="py-24 bg-[#E8DFC7] overflow-hidden">
      <div
        ref={containerRef}
        className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {pages.map((page, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-w-full h-screen snap-start flex items-center justify-center relative"
            style={{ backgroundColor: page.color }}
          >
            <div className="absolute inset-0 opacity-30">
              <ImageWithFallback
                src={page.image}
                alt={page.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 text-center text-white px-8">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-8xl font-bold mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {page.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl text-white/90"
              >
                {page.subtitle}
              </motion.p>

              {index < pages.length - 1 && (
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="mt-12 text-4xl"
                >
                  →
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FastGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
    "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800",
    "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800",
    "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800",
    "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800",
    "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=800",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-[#5A6B8C] text-center mb-12"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Our Delicious Creations
        </motion.h2>

        <div className="relative h-[600px] rounded-[40px] overflow-hidden shadow-2xl">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentIndex === index ? 1 : 0,
                scale: currentIndex === index ? 1 : 1.1,
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PopularDishesSection() {
  const navigate = useNavigate();
  const items = [
    { name: "Paneer Tikka", price: "₹240", image: "/images/paneer_tikka.png" },
    { name: "Masala Dosa", price: "₹120", image: "/images/masala_dosa.png" },
    { name: "Veg Biryani", price: "₹250", image: "/images/veg_biryani.png" },
    { name: "Paneer Chilli", price: "₹240", image: "/images/paneer_chilli.png" },
    { name: "Dal Tadka", price: "₹180", image: "/images/dal_tadka.png" },
    { name: "Gulab Jamun", price: "₹60", image: "/images/gulab_jamun.png" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#6B2C1F] via-[#8B4513] to-[#6B2C1F] text-white relative overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 w-80 h-80 bg-[#FF6B3D]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#9FA8DA]/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Popular Dishes
          </h2>
          <p className="text-2xl text-white/90">Customer Favourites</p>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Handpicked by our loyal guests — these are the dishes that keep everyone coming back for more.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative group"
            >
              <div
                className="relative rounded-full overflow-hidden shadow-2xl aspect-[3/4]"
                style={{
                  background: 'linear-gradient(135deg, #E8DFC7 0%, #D4C4A8 100%)',
                }}
              >
                <div className="absolute inset-4">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-5">
                  <h3 className="text-white font-bold text-base">{item.name}</h3>
                  <span className="text-[#FF6B3D] font-bold text-sm mt-1">{item.price}</span>
                </div>
              </div>

              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                className="absolute -top-2 -right-2 w-12 h-12 bg-[#FF6B3D] rounded-full flex items-center justify-center shadow-lg"
              >
                <Star size={20} className="text-white fill-white" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link to="/menu">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF6B3D] text-white px-12 py-4 rounded-full hover:bg-[#e55a2d] transition-colors font-semibold text-lg shadow-xl"
            >
              View Full Menu
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: <UtensilsCrossed size={36} />,
      title: "Dine-In Experience",
      description:
        "Enjoy a warm, family-friendly dining atmosphere with authentic flavours served fresh at your table.",
      color: "#FF6B3D",
      bg: "from-[#FF6B3D]/10 to-[#FF6B3D]/5",
    },
    {
      icon: <CalendarDays size={36} />,
      title: "Catering Services",
      description:
        "Let us cater your functions, weddings, and corporate events with our signature pure-veg spreads.",
      color: "#5A6B8C",
      bg: "from-[#5A6B8C]/10 to-[#5A6B8C]/5",
    },
    {
      icon: <ShoppingBag size={36} />,
      title: "Takeaway / Parcel",
      description:
        "Pick up freshly prepared food packed with care — perfect for office lunches or family gatherings.",
      color: "#9FA8DA",
      bg: "from-[#9FA8DA]/15 to-[#9FA8DA]/5",
    },
    {
      icon: <Truck size={36} />,
      title: "Home Delivery",
      description:
        "Hot, fresh food delivered right to your doorstep. Order via Zomato or call us directly.",
      color: "#FF6B3D",
      bg: "from-[#FF6B3D]/10 to-[#FF6B3D]/5",
    },
    {
      icon: <Gift size={36} />,
      title: "Sweet Boxes",
      description:
        "Beautifully packed assortments of our handmade sweets — ideal for festivals and celebrations.",
      color: "#6B2C1F",
      bg: "from-[#6B2C1F]/10 to-[#6B2C1F]/5",
    },
    {
      icon: <Coffee size={36} />,
      title: "Breakfast Specials",
      description:
        "Start your day right with our popular kachori, samosa, poha, and freshly brewed chai.",
      color: "#5A6B8C",
      bg: "from-[#5A6B8C]/10 to-[#5A6B8C]/5",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-[#5A6B8C] to-[#4a5b7c] relative overflow-hidden text-white">
      {/* decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FF6B3D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block mb-4 px-5 py-2 bg-white/10 rounded-full text-white text-sm font-semibold tracking-widest uppercase backdrop-blur-sm border border-white/20"
          >
            What We Offer
          </motion.span>
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-5"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our <span className="text-[#FF6B3D]">Services</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            From a comforting dine-in meal to grand event catering — Brijwasi
            brings purity and warmth to every occasion.
          </p>
        </motion.div>

        {/* service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index < 3 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.1, type: "spring", bounce: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-white/10 border border-white/20 backdrop-blur-md rounded-[28px] p-8 shadow-xl hover:shadow-2xl hover:bg-[#E8DFC7] transition-all group cursor-pointer overflow-hidden`}
            >
              {/* icon circle */}
              <motion.div
                whileHover={{ rotate: 15, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md bg-white/20 backdrop-blur-sm"
                style={{ color: service.color === "#5A6B8C" ? "#FFFFFF" : service.color }}
              >
                {service.icon}
              </motion.div>

              <h3
                className="text-xl font-bold text-white mb-3 group-hover:text-[#5A6B8C]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {service.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed relative z-10 group-hover:text-[#5A6B8C]/80">
                {service.description}
              </p>

              {/* animated accent bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-6 right-6 h-1 rounded-full origin-left"
                style={{ backgroundColor: service.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="tel:+917947126860"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 bg-[#FF6B3D] text-white px-10 py-4 rounded-full shadow-lg shadow-[#FF6B3D]/30 hover:bg-[#e55a2d] transition-colors font-semibold text-lg"
          >
            Book a Service
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-[#FF6B3D] to-[#e55a2d] rounded-[40px] p-12 shadow-2xl"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Ready to Order?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Experience authentic vegetarian cuisine delivered to your doorstep
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://www.zomato.com/mumbai/brijwasi-sweets-and-restaurant-boisar/order"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center space-x-2 bg-white text-[#FF6B3D] px-10 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              <span className="font-semibold">Order on Zomato</span>
              <ArrowRight size={20} />
            </motion.a>

            <motion.a
              href="tel:+917947126860"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center space-x-2 bg-[#5A6B8C] text-white px-10 py-4 rounded-full hover:bg-[#4a5b7c] transition-colors"
            >
              <span className="font-semibold">Call to Order</span>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-white/80"
          >
            <p className="text-sm">📍 Navapur Naka, Boisar • 📞 07947126860 • 🕒 8:30 AM - 10:30 PM</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
