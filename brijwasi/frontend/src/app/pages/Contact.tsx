import { motion } from "motion/react";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-20">
      <HeroHeader />
      <ContactSection />
      <MapSection />
      <QuickActionStrip />
    </div>
  );
}

function HeroHeader() {
  return (
    <section className="relative py-20 bg-[#E8DFC7] overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1QTZCOEMiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-[#5A6B8C] mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-[#5A6B8C]/80 max-w-2xl mx-auto"
        >
          Have a question, feedback, or craving? We'd love to hear from you.
        </motion.p>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactCards = [
    {
      icon: <Phone size={32} />,
      title: "Phone",
      content: "07947126860",
      link: "tel:+917947126860",
      color: "#FF6B3D",
    },
    {
      icon: <MessageCircle size={32} />,
      title: "WhatsApp",
      content: "07947126860",
      link: "https://wa.me/917947126860",
      color: "#25D366",
    },
    {
      icon: <Mail size={32} />,
      title: "Email",
      content: "info@brijwasi.com",
      link: "mailto:info@brijwasi.com",
      color: "#9FA8DA",
    },
    {
      icon: <MapPin size={32} />,
      title: "Address",
      content: "Navapur Naka, Boisar, Palghar",
      link: null,
      color: "#5A6B8C",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-[#E8DFC7] rounded-[25px] p-6 shadow-lg hover:shadow-xl transition-all aspect-square flex flex-col justify-center hover:bg-[#5A6B8C] hover:text-white group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-4 inline-block"
                  style={{ color: card.color }}
                >
                  {card.icon}
                </motion.div>
                <h3 className="font-bold text-[#5A6B8C] mb-2 group-hover:text-white">{card.title}</h3>
                {card.link ? (
                  <a
                    href={card.link}
                    className="text-[#5A6B8C]/80 text-sm hover:text-[#FF6B3D] transition-colors group-hover:text-white/90"
                  >
                    {card.content}
                  </a>
                ) : (
                  <p className="text-[#5A6B8C]/80 text-sm group-hover:text-white/90">{card.content}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#E8DFC7] rounded-[30px] p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-[#5A6B8C] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[#5A6B8C] font-medium mb-2">Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-full border-2 border-transparent focus:border-[#9FA8DA] focus:outline-none bg-white transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#5A6B8C] font-medium mb-2">Email</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-full border-2 border-transparent focus:border-[#9FA8DA] focus:outline-none bg-white transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#5A6B8C] font-medium mb-2">Subject</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-full border-2 border-transparent focus:border-[#9FA8DA] focus:outline-none bg-white transition-all"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#5A6B8C] font-medium mb-2">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-[20px] border-2 border-transparent focus:border-[#9FA8DA] focus:outline-none bg-white transition-all resize-none"
                    placeholder="Tell us what's on your mind..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#FF6B3D] text-white py-4 rounded-full hover:bg-[#e55a2d] transition-colors font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-[#FF6B3D]/30"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 bg-gradient-to-br from-[#9FA8DA]/20 to-[#E8DFC7] rounded-[30px] p-8 text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-3">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Clock size={32} className="text-[#FF6B3D]" />
            </motion.div>
            <h3 className="text-2xl font-bold text-[#5A6B8C]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Opening Hours
            </h3>
          </div>
          <p className="text-[#5A6B8C]/80 text-lg">
            Monday - Sunday: <span className="font-semibold text-[#5A6B8C]">8:30 AM - 10:30 PM</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="py-16 bg-[#E8DFC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-[#5A6B8C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Find Us Here
          </h2>
          <p className="text-[#5A6B8C]/70">Visit our restaurant for an unforgettable dining experience</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-[30px] overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.5!2d72.7489!3d19.7978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQ3JzUyLjEiTiA3MsKwNDQnNTYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Brijwasi Restaurant Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

function QuickActionStrip() {
  const actions = [
    {
      icon: <Phone size={24} />,
      label: "Call Now",
      link: "tel:+917947126860",
      color: "bg-[#FF6B3D] hover:bg-[#e55a2d]",
    },
    {
      icon: <MessageCircle size={24} />,
      label: "WhatsApp",
      link: "https://wa.me/917947126860",
      color: "bg-[#25D366] hover:bg-[#20BA5A]",
    },
    {
      icon: <Send size={24} />,
      label: "Order Online",
      link: "https://www.zomato.com/mumbai/brijwasi-sweets-and-restaurant-boisar/order",
      color: "bg-[#5A6B8C] hover:bg-[#4a5b7c]",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {actions.map((action, index) => (
            <motion.a
              key={index}
              href={action.link}
              target={action.link.startsWith("http") ? "_blank" : undefined}
              rel={action.link.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`${action.color} text-white px-8 py-4 rounded-full transition-all shadow-lg flex items-center space-x-3 font-semibold min-w-[200px] justify-center`}
            >
              {action.icon}
              <span>{action.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
