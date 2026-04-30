import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   LOCAL IMAGES  (served from /public/images/)
───────────────────────────────────────────────────────────── */
const LOCAL_IMGS = [
  { src: "/images/img1.jpg", alt: "Brijwasi Restaurant 1", category: "Restaurant" },
  { src: "/images/img2.jpg", alt: "Brijwasi Restaurant 2", category: "Restaurant" },
  { src: "/images/img3.jpg", alt: "Brijwasi Restaurant 3", category: "Restaurant" },
  { src: "/images/img4.jpg", alt: "Brijwasi Restaurant 4", category: "Restaurant" },
  { src: "/images/img5.jpg", alt: "Brijwasi Restaurant 5", category: "Restaurant" },
];

/* Extra online images used in the grid below the carousel */
const ONLINE_IMGS = [
  { src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800", alt: "Indian Thali", category: "Indian" },
  { src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800", alt: "Paneer Butter Masala", category: "Indian" },
  { src: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800", alt: "Masala Dosa", category: "South Indian" },
  { src: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800", alt: "Paneer Chilli", category: "Chinese" },
  { src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800", alt: "Veg Biryani", category: "Biryani" },
  { src: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=800", alt: "Gulab Jamun", category: "Sweets" },
  { src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800", alt: "Samosa & Kachori", category: "Starters" },
  { src: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800", alt: "Pav Bhaji", category: "Starters" },
  { src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800", alt: "Dal Tadka", category: "Indian" },
  { src: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800", alt: "Hakka Noodles", category: "Chinese" },
  { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800", alt: "Chocolate Cake", category: "Sweets" },
  { src: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800", alt: "Idli Sambar", category: "South Indian" },
];

const ALL_GALLERY = [...LOCAL_IMGS, ...ONLINE_IMGS];
const CATEGORIES = ["All", "Restaurant", "Indian", "South Indian", "Chinese", "Biryani", "Starters", "Sweets"];

/* ─────────────────────────────────────────────────────────────
   FAN CAROUSEL
   Shows 5 cards: far-left, left, center, right, far-right
   Center card is largest; sides tilt outward like a fan
───────────────────────────────────────────────────────────── */
const TOTAL = LOCAL_IMGS.length;

function getSlotIndex(pos: number, active: number): number {
  return (active + pos + TOTAL) % TOTAL;
}

/* visual config per slot position (-2 … +2) */
const SLOT_STYLE: Record<number, { x: string; rotate: number; scale: number; zIndex: number; opacity: number }> = {
  "-2": { x: "-52%", rotate: -18, scale: 0.62, zIndex: 1, opacity: 0.55 },
  "-1": { x: "-30%", rotate: -9,  scale: 0.80, zIndex: 2, opacity: 0.80 },
   "0": { x:   "0%", rotate:  0,  scale: 1.00, zIndex: 5, opacity: 1.00 },
   "1": { x:  "30%", rotate:  9,  scale: 0.80, zIndex: 2, opacity: 0.80 },
   "2": { x:  "52%", rotate: 18,  scale: 0.62, zIndex: 1, opacity: 0.55 },
};

function FanCarousel() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = useCallback(() => setActive((p) => (p + 1) % TOTAL), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + TOTAL) % TOTAL), []);

  /* auto-advance every 2 seconds */
  useEffect(() => {
    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  }, [next]);

  // Responsive SLOT_STYLE
  const responsiveStyle: Record<number, { x: string; rotate: number; scale: number; zIndex: number; opacity: number }> = {
    "-2": { x: isMobile ? "-40%" : "-52%", rotate: isMobile ? -12 : -18, scale: isMobile ? 0.5 : 0.62, zIndex: 1, opacity: 0.55 },
    "-1": { x: isMobile ? "-20%" : "-30%", rotate: isMobile ? -6 : -9,  scale: isMobile ? 0.7 : 0.80, zIndex: 2, opacity: 0.80 },
     "0": { x:   "0%", rotate:  0,  scale: 1.00, zIndex: 5, opacity: 1.00 },
     "1": { x:  isMobile ? "20%" : "30%", rotate: isMobile ? 6 : 9,  scale: isMobile ? 0.7 : 0.80, zIndex: 2, opacity: 0.80 },
     "2": { x:  isMobile ? "40%" : "52%", rotate: isMobile ? 12 : 18,  scale: isMobile ? 0.5 : 0.62, zIndex: 1, opacity: 0.55 },
  };

  return (
    <>
      <div className="relative flex items-center justify-center h-[350px] md:h-[560px] select-none">
        {/* Render slots -2 to +2 */}
        {([-2, -1, 0, 1, 2] as const).map((pos) => {
          const imgIdx = getSlotIndex(pos, active);
          const img = LOCAL_IMGS[imgIdx];
          const style = responsiveStyle[pos];

          return (
            <motion.div
              key={imgIdx}
              animate={{
                x: style.x,
                rotate: style.rotate,
                scale: style.scale,
                zIndex: style.zIndex,
                opacity: style.opacity,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
              className="absolute w-48 md:w-96 aspect-square rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
              style={{ transformOrigin: "bottom center" }}
              onClick={() => {
                if (pos === 0) setLightbox(img.src);
                else setActive(imgIdx);
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                draggable={false}
              />
              {/* white border/frame like the reference */}
              <div className="absolute inset-0 ring-4 ring-white/60 rounded-2xl pointer-events-none" />

              {/* Caption on active card */}
              {pos === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-center"
                >
                  <p className="font-semibold text-sm tracking-wide">{img.alt}</p>
                  <ZoomIn size={16} className="mx-auto mt-1 opacity-70" />
                </motion.div>
              )}
            </motion.div>
          );
        })}

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          className="absolute left-0 md:-left-6 z-20 w-11 h-11 bg-white/90 hover:bg-[#FF6B3D] hover:text-white text-[#5A6B8C] rounded-full shadow-lg flex items-center justify-center transition-colors"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={next}
          className="absolute right-0 md:-right-6 z-20 w-11 h-11 bg-white/90 hover:bg-[#FF6B3D] hover:text-white text-[#5A6B8C] rounded-full shadow-lg flex items-center justify-center transition-colors"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {LOCAL_IMGS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-[#FF6B3D]" : "w-2 bg-[#5A6B8C]/30"
            }`}
          />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative max-w-3xl w-full rounded-[24px] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox} alt="full view" className="w-full max-h-[85vh] object-contain bg-black" />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   GALLERY GRID
───────────────────────────────────────────────────────────── */
function GalleryGrid() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? ALL_GALLERY : ALL_GALLERY.filter((i) => i.category === active);

  return (
    <>
      {/* Filter pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActive(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              active === cat
                ? "bg-[#FF6B3D] text-white shadow-md shadow-[#FF6B3D]/30"
                : "bg-white text-[#5A6B8C] hover:bg-[#9FA8DA]/20 border border-[#5A6B8C]/10"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Masonry grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5"
        >
          {filtered.map((img, idx) => (
            <motion.div
              key={img.src + idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="relative group cursor-pointer overflow-hidden rounded-[18px] shadow-md hover:shadow-2xl mb-5 break-inside-avoid transition-shadow"
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-semibold text-sm">{img.alt}</p>
                <span className="text-white/60 text-xs mt-0.5">{img.category}</span>
              </div>
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#FF6B3D] text-white text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                {img.category}
              </div>
              <div className="absolute top-3 right-3 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow">
                <ZoomIn size={16} className="text-[#FF6B3D]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Grid lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative max-w-4xl w-full rounded-[24px] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox} alt="full view" className="w-full max-h-[85vh] object-contain bg-black" />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
export default function Gallery() {
  return (
    <div className="pt-20 min-h-screen bg-[#F7F3EC]">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative py-20 bg-gradient-to-br from-[#5A6B8C] via-[#4a5b7c] to-[#3a4b6c] overflow-hidden">
        {/* subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block mb-4 px-5 py-2 bg-[#FF6B3D]/20 rounded-full text-[#FF6B3D] text-sm font-semibold tracking-widest uppercase"
          >
            Visual Feast
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold text-white mb-5"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our <span className="text-[#FF6B3D]">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-white/70 text-lg max-w-xl mx-auto"
          >
            A glimpse into the vibrant colours, flavours, and moments that make
            Brijwasi a beloved destination.
          </motion.p>
        </div>

        {/* wave */}
        <svg className="absolute bottom-0 left-0 right-0 text-[#F7F3EC]" viewBox="0 0 1440 56" fill="currentColor" preserveAspectRatio="none">
          <path d="M0,56 C360,0 1080,0 1440,56 L1440,56 L0,56 Z" />
        </svg>
      </section>

      {/* ── Fan Carousel ─────────────────────────────────────── */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            className="text-3xl md:text-5xl font-bold text-[#5A6B8C] mb-3"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Inside <span className="text-[#FF6B3D]">Brijwasi</span>
          </h2>
          <p className="text-[#5A6B8C]/60">Real moments from our restaurant — click the centre image to expand</p>
        </motion.div>

        <FanCarousel />
      </section>

      {/* ── Gallery Grid ─────────────────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-5xl font-bold text-[#5A6B8C] mb-3"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Our <span className="text-[#FF6B3D]">Dishes</span>
          </h2>
          <p className="text-[#5A6B8C]/60">Browse by category and click to view full-size</p>
        </motion.div>

        <GalleryGrid />
      </section>
    </div>
  );
}
