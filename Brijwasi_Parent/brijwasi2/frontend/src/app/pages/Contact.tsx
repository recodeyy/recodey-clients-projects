import { motion } from "motion/react";
import { MapPin, Phone, Clock, Mail, MessageSquare, Navigation } from "lucide-react";
import { useState } from "react";
import { Footer } from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      id: "location",
      icon: MapPin,
      title: "Our Location",
      content: ["Navapur Naka, Palghar Road", "Boisar, Mumbai", "Maharashtra, India"],
      color: "from-[#6e1a37] to-[#ae2441]"
    },
    {
      id: "phone",
      icon: Phone,
      title: "Call Us",
      content: ["07947126860", "Available during business hours"],
      color: "from-[#ae2441] to-[#87bba9]"
    },
    {
      id: "hours",
      icon: Clock,
      title: "Opening Hours",
      content: ["Monday - Sunday", "8:30 AM - 10:30 PM", "Open all days"],
      color: "from-[#87bba9] to-[#d5e7b5]"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#87bba9] via-white to-[#ae2441] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <motion.h1
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-6xl md:text-7xl font-bold text-[#6e1a37] mb-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl text-gray-700"
          >
            We'd love to hear from you
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.id}
              initial={{ opacity: 0, y: 100, rotateX: -45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                type: "spring"
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                boxShadow: "0 30px 60px rgba(0,0,0,0.3)"
              }}
              onHoverStart={() => setHoveredCard(info.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`bg-gradient-to-br ${info.color} rounded-3xl p-8 shadow-2xl cursor-pointer relative overflow-hidden`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCard === info.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      width: `${Math.random() * 60 + 20}px`,
                      height: `${Math.random() * 60 + 20}px`,
                    }}
                    animate={{
                      scale: [0, 1.5, 0],
                      opacity: [0, 0.4, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: Math.random() * 1,
                    }}
                  />
                ))}
              </motion.div>

              <motion.div
                animate={{
                  rotate: hoveredCard === info.id ? 360 : 0,
                }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <info.icon size={48} className="text-white mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{info.title}</h3>
              {info.content.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + i * 0.1 }}
                  className="text-white/90 text-lg relative z-10"
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-[#d5e7b5] rounded-full blur-3xl opacity-20"
              animate={{
                scale: [1, 1.5, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <h2 className="text-4xl font-bold text-[#6e1a37] mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileFocus={{ scale: 1.02 }}
              >
                <label className="block text-[#6e1a37] font-bold mb-2 text-lg">Your Name</label>
                <motion.input
                  whileFocus={{
                    boxShadow: "0 0 20px rgba(155, 118, 83, 0.3)"
                  }}
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-[#ae2441] focus:border-[#6e1a37] outline-none text-lg transition-all"
                  placeholder="Enter your name"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <label className="block text-[#6e1a37] font-bold mb-2 text-lg">Email Address</label>
                <motion.input
                  whileFocus={{
                    boxShadow: "0 0 20px rgba(155, 118, 83, 0.3)"
                  }}
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-[#ae2441] focus:border-[#6e1a37] outline-none text-lg transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <label className="block text-[#6e1a37] font-bold mb-2 text-lg">Phone Number</label>
                <motion.input
                  whileFocus={{
                    boxShadow: "0 0 20px rgba(155, 118, 83, 0.3)"
                  }}
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-[#ae2441] focus:border-[#6e1a37] outline-none text-lg transition-all"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <label className="block text-[#6e1a37] font-bold mb-2 text-lg">Your Message</label>
                <motion.textarea
                  whileFocus={{
                    boxShadow: "0 0 20px rgba(155, 118, 83, 0.3)"
                  }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-[#ae2441] focus:border-[#6e1a37] outline-none text-lg transition-all resize-none"
                  placeholder="Tell us what's on your mind..."
                  required
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(155, 118, 83, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#6e1a37] to-[#ae2441] text-white py-4 rounded-2xl text-xl font-bold shadow-xl flex items-center justify-center gap-3"
              >
                <MessageSquare />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 30px 60px rgba(0,0,0,0.3)"
              }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl h-full"
            >
              <div className="relative h-96 bg-gradient-to-br from-[#6e1a37] to-[#ae2441] flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-white text-center"
                >
                  <MapPin size={80} className="mx-auto mb-4" />
                  <p className="text-2xl font-bold">Find Us Here</p>
                </motion.div>

                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute bg-white rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 40 + 10}px`,
                        height: `${Math.random() * 40 + 10}px`,
                      }}
                      animate={{
                        y: [0, -40, 0],
                        opacity: [0.1, 0.3, 0.1],
                      }}
                      transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </motion.div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-[#6e1a37] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                  Visit Our Restaurant
                </h3>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4"
                  >
                    <MapPin className="text-[#6e1a37] flex-shrink-0 mt-1" size={28} />
                    <div>
                      <p className="text-xl font-bold text-[#6e1a37] mb-1">Address</p>
                      <p className="text-gray-700 text-lg">
                        Navapur Naka, Palghar Road<br />
                        Boisar, Mumbai<br />
                        Maharashtra, India
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4"
                  >
                    <Phone className="text-[#6e1a37] flex-shrink-0 mt-1" size={28} />
                    <div>
                      <p className="text-xl font-bold text-[#6e1a37] mb-1">Phone</p>
                      <p className="text-gray-700 text-lg">07947126860</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4"
                  >
                    <Mail className="text-[#6e1a37] flex-shrink-0 mt-1" size={28} />
                    <div>
                      <p className="text-xl font-bold text-[#6e1a37] mb-1">Services</p>
                      <p className="text-gray-700 text-lg">
                        Dine-in • Takeaway<br />
                        Breakfast • Lunch • Dinner
                      </p>
                    </div>
                  </motion.div>

                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(155, 118, 83, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#6e1a37] text-white py-4 rounded-2xl text-xl font-bold shadow-xl flex items-center justify-center gap-3 mt-6"
                  >
                    <Navigation />
                    Get Directions
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="bg-gradient-to-br from-[#6e1a37] to-[#ae2441] rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "50px 50px"
            }}
          />

          <motion.h2
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            We're Here to Serve You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-2xl text-white/90 mb-8 relative z-10"
          >
            Experience authentic flavors and warm hospitality at Brijwasi Sweets And Restaurant
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
            className="flex flex-wrap justify-center gap-4 relative z-10"
          >
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white text-lg">
              ⭐ 4.0 Rating
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white text-lg">
              🏆 37 Years
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white text-lg">
              🥗 100% Vegetarian
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white text-lg">
              💚 Jain Food Available
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
