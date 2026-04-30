import { motion } from "motion/react";
import { Award, Users, Heart, Star, ChefHat, Clock, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function About() {
  return (
    <div className="pt-20">
      <HeroHeader />
      <IntroductionSection />
      <ImageVideoSection />
      <WhyChooseUs />
      <TeamSection />
      <StorySection />
      <CTASection />
    </div>
  );
}

function HeroHeader() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#5A6B8C] to-[#4a5b7c] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            About Brijwasi
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Serving pure vegetarian taste with tradition for over 37 years
          </p>
        </motion.div>
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF6B3D]/10 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#9FA8DA]/10 rounded-full blur-3xl"
      ></motion.div>
    </section>
  );
}

function IntroductionSection() {
  const features = [
    {
      icon: <Star size={36} />,
      title: "Best Quality Ingredients",
      description: "Fresh produce sourced daily",
    },
    {
      icon: <ChefHat size={36} />,
      title: "Authentic Recipes",
      description: "Traditional cooking methods",
    },
    {
      icon: <Users size={36} />,
      title: "Experienced Chefs",
      description: "Masters of their craft",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-[#5A6B8C] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Introduction To Authentic Taste
            </h2>
            <p className="text-[#5A6B8C]/80 text-lg leading-relaxed mb-6">
              For over 37 years, Brijwasi Sweets & Restaurant has been a cornerstone of pure vegetarian dining in Boisar. Our journey began with a simple promise: to serve authentic, delicious food that brings families together.
            </p>
            <p className="text-[#5A6B8C]/80 text-lg leading-relaxed mb-6">
              From traditional Indian curries to Indo-Chinese favorites, every dish is prepared with love, care, and the finest ingredients. We've earned the trust of our local community through consistent quality and affordable pricing.
            </p>
            <p className="text-[#5A6B8C]/80 text-lg leading-relaxed">
              Today, we're proud to continue this legacy, serving thousands of happy customers who consider us their home away from home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-[#E8DFC7] rounded-[25px] p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-[#FF6B3D] flex-shrink-0"
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-[#5A6B8C] mb-2">{feature.title}</h3>
                    <p className="text-[#5A6B8C]/70">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ImageVideoSection() {
  return (
    <section className="py-20 bg-[#E8DFC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600"
                alt="Kitchen"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5A6B8C]/80 to-transparent flex items-end p-8">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold text-white"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Our Kitchen
                </motion.h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl bg-gradient-to-br from-[#5A6B8C] to-[#4a5b7c] p-12 text-white text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-6"
              >
                <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-white ml-1"></div>
                </div>
              </motion.div>

              <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Crafting Taste Since 1987
              </h3>
              <p className="text-white/90 text-lg">
                Watch how we prepare your favorite dishes with love and tradition
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    {
      icon: <Heart size={40} />,
      title: "Pure Veg Guarantee",
      description: "100% vegetarian, always",
      color: "#FF6B3D",
    },
    {
      icon: <Award size={40} />,
      title: "Affordable Pricing",
      description: "₹400 for two persons",
      color: "#9FA8DA",
    },
    {
      icon: <Users size={40} />,
      title: "Family Friendly",
      description: "Perfect for all occasions",
      color: "#5A6B8C",
    },
    {
      icon: <Clock size={40} />,
      title: "Quick Service",
      description: "Fast & efficient dining",
      color: "#FF6B3D",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-[#5A6B8C] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Why Choose Us
          </h2>
          <p className="text-[#5A6B8C]/70 text-lg">What makes us stand out from the rest</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 shadow-lg"
                style={{ backgroundColor: `${reason.color}20` }}
              >
                <div style={{ color: reason.color }}>{reason.icon}</div>
              </motion.div>
              <h3 className="text-xl font-bold text-[#5A6B8C] mb-2">{reason.title}</h3>
              <p className="text-[#5A6B8C]/70">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const team = [
    {
      name: "Rajesh Kumar",
      role: "Head Chef",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400",
    },
    {
      name: "Priya Sharma",
      role: "Kitchen Expert",
      image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400",
    },
    {
      name: "Amit Patel",
      role: "Service Manager",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400",
    },
    {
      name: "Sunita Verma",
      role: "Sweet Specialist",
      image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400",
    },
  ];

  return (
    <section className="py-20 bg-[#E8DFC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-[#5A6B8C] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Meet Our Team
          </h2>
          <p className="text-[#5A6B8C]/70 text-lg">The masters behind your favorite dishes</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="bg-white rounded-[30px] overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <div className="relative h-80 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5A6B8C] to-transparent opacity-60"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-[#FF6B3D] text-white p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-white/90 text-sm">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  const milestones = [
    { year: "1987", title: "The Beginning", description: "Started with a small sweet shop" },
    { year: "1995", title: "Expansion", description: "Added restaurant services" },
    { year: "2010", title: "Recognition", description: "Became Boisar's favorite dining spot" },
    { year: "2024", title: "Today", description: "Serving 1000+ happy customers daily" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#5A6B8C] to-[#4a5b7c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            A Legacy of Taste
          </h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
            What started as a humble sweet shop in 1987 has grown into Boisar's most beloved restaurant.
            Through decades of dedication, we've remained committed to quality, authenticity, and the joy of bringing people together over great food.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 mx-auto bg-[#FF6B3D] rounded-full flex items-center justify-center mb-4 shadow-xl"
              >
                <span className="text-2xl font-bold">{milestone.year}</span>
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
              <p className="text-white/80 text-sm">{milestone.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-16 bg-white/10 backdrop-blur-sm rounded-[30px] p-8 text-center"
        >
          <div className="flex items-center justify-center space-x-12 flex-wrap gap-6">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="text-5xl font-bold text-[#FF6B3D] mb-2"
              >
                37+
              </motion.div>
              <p className="text-white/80">Years of Service</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.3 }}
                className="text-5xl font-bold text-[#FF6B3D] mb-2"
              >
                1000+
              </motion.div>
              <p className="text-white/80">Daily Customers</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.4 }}
                className="text-5xl font-bold text-[#FF6B3D] mb-2"
              >
                100%
              </motion.div>
              <p className="text-white/80">Pure Vegetarian</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-[#E8DFC7] to-[#9FA8DA]/20 rounded-[40px] p-12 shadow-2xl"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-[#5A6B8C] mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Experience the Taste Today
          </h2>
          <p className="text-[#5A6B8C]/80 text-lg mb-8">
            Join thousands of happy customers who trust us for authentic vegetarian cuisine
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://www.zomato.com/mumbai/brijwasi-sweets-and-restaurant-boisar/order"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF6B3D] text-white px-10 py-4 rounded-full hover:bg-[#e55a2d] transition-colors font-semibold shadow-lg shadow-[#FF6B3D]/30"
            >
              Order Online
            </motion.a>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#5A6B8C] text-white px-10 py-4 rounded-full hover:bg-[#4a5b7c] transition-colors font-semibold"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
