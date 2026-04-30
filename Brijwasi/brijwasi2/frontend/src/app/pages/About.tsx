import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Star, Award, Heart, Clock } from "lucide-react";
import { Footer } from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-[#fcf9f2] text-[#1a2e2e]">
      {/* Hero Section - Clean & Modern */}
      <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#87bba9] font-bold tracking-widest uppercase mb-4 block">Our Story</span>
            <h1 className="text-7xl md:text-8xl font-serif text-[#6e1a37] leading-tight mb-8">
              The Taste of <br />
              <span className="italic text-[#87bba9]">Heritage</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-lg mb-8">
              For over three decades, we have been the guardians of authentic Indian sweetness and savoury delights in Boisar. Our journey is one of purity, passion, and perfection.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="text-4xl font-serif text-[#6e1a37] font-bold">37+</p>
                <p className="text-gray-500">Years of Excellence</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-[#6e1a37] font-bold">100%</p>
                <p className="text-gray-500">Pure Vegetarian</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 10, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="relative"
          >
            <div className="rounded-t-full overflow-hidden shadow-2xl aspect-[4/5] border-[12px] border-white">
              <ImageWithFallback
                src="/src/images/img 2.jpg"
                alt="Restaurant Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl max-w-xs"
            >
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="font-bold text-[#6e1a37] italic">"The most authentic sweets in the city. Purity in every bite!"</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section - Dark Themed */}
      <section className="py-24 bg-[#1a2e2e] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <h2 className="text-5xl md:text-6xl font-serif mb-8 text-[#87bba9]">Our Philosophy</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="bg-[#87bba9]/20 p-4 rounded-2xl">
                    <Heart className="text-[#87bba9]" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Hand-Crafted with Love</h3>
                    <p className="text-gray-400 text-lg">Every sweet is made using traditional recipes passed down through generations, ensuring the same taste since 1989.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-[#87bba9]/20 p-4 rounded-2xl">
                    <Award className="text-[#87bba9]" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Purity Uncompromised</h3>
                    <p className="text-gray-400 text-lg">We use only farm-fresh milk, pure ghee, and the finest ingredients. No artificial preservatives or additives.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-1 relative"
            >
              <div className="rounded-t-full overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.4)] aspect-[3/4] bg-[#2a3e3e] flex items-center justify-center border-[10px] border-[#87bba9]/20">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/src/video/video.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#87bba9] rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-4xl text-[#1a2e2e]">✨</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Items - Circular Grid */}
      <section className="py-24 bg-[#fcf9f2]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-[#87bba9] font-bold tracking-widest uppercase mb-4 block">Signature Delights</span>
          <h2 className="text-5xl md:text-6xl font-serif text-[#6e1a37] mb-16">The Best of Brijwasi</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12">
            {[
              { name: "Kaju Katli", img: "/src/images/sweet 7.png", price: "₹450" },
              { name: "Dal Tadka", img: "/src/images/Dal Tadka  - 1 - Edited.png", price: "₹220" },
              { name: "Rasmalai", img: "/src/images/Rasmalai - 1 - Edited.png", price: "₹60" },
              { name: "Veg Biryani", img: "/src/images/Veg Biryani - 1 - Edited.png", price: "₹250" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -10 : 10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.8,
                  type: "spring",
                  bounce: 0.5
                }}
                whileHover={{ y: -15, rotate: 2 }}
                className="group flex flex-col items-center"
              >
                <div className="w-full bg-[#1a2e2e] rounded-b-[3rem] md:rounded-b-[5rem] rounded-t-[5rem] md:rounded-t-[10rem] pt-4 md:pt-8 pb-6 md:pb-12 px-3 md:px-4 shadow-xl transition-colors group-hover:bg-[#6e1a37]">
                  <div className="aspect-square rounded-full overflow-hidden mb-3 md:mb-6 shadow-2xl border-2 md:border-4 border-white transform transition-transform group-hover:scale-110 duration-500 mx-auto w-24 sm:w-32 md:w-40">
                    <ImageWithFallback src={item.img} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-sm md:text-xl font-serif text-white mb-1 md:mb-2">{item.name}</h3>
                  <p className="text-[#87bba9] font-bold text-sm md:text-lg">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Highlight - Large Arch Shape */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-16">
            <div className="w-1 h-20 bg-[#87bba9] mx-auto mb-8" />
            <h2 className="text-5xl md:text-6xl font-serif text-[#6e1a37]">The Interior</h2>
            <p className="text-xl text-gray-500 mt-4 max-w-2xl mx-auto">Discover the perfect blend of traditional warmth and modern comfort.</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 150, rotate: -5, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, type: "spring" }}
            className="relative rounded-t-[30rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-x-[20px] border-t-[20px] border-white"
          >
            <ImageWithFallback
              src="/src/images/img 4.jpg"
              alt="Restaurant Interior Large"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-5xl mx-auto rounded-[4rem] bg-[#6e1a37] p-16 md:p-24 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 relative z-10">Experience the Purity</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto relative z-10">
            Join us for a culinary journey that celebrates tradition and taste. Visit us today in Boisar.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/menu"
              className="px-12 py-5 bg-[#87bba9] text-white rounded-full text-xl font-bold shadow-2xl"
            >
              View Full Menu
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="px-12 py-5 border-2 border-white text-white rounded-full text-xl font-bold hover:bg-white hover:text-[#6e1a37] transition-colors"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
