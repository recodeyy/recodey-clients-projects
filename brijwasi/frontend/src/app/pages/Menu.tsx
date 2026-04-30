import { motion } from "motion/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Menu() {
  const location = useLocation();
  const initialCategory = (location.state as { category?: string } | null)?.category ?? "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  return (
    <div className="pt-20">
      <HeroHeader />
      <CategoryFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <MenuGrid activeCategory={activeCategory} />
      <FeaturedBanner />

      <CTASection />
    </div>
  );
}

function HeroHeader() {
  return (
    <section className="py-20 bg-[#E8DFC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-[#5A6B8C] mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Explore Our Menu
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-[#5A6B8C]/70"
        >
          Fresh. Pure Veg. Made with Love.
        </motion.p>
      </div>
    </section>
  );
}

function CategoryFilter({ activeCategory, setActiveCategory }: { activeCategory: string; setActiveCategory: (cat: string) => void }) {
  const categories = [
  {
    "label": "All",
    "id": "all",
    "count": 89
  },
  {
    "label": "Breakfast",
    "id": "breakfast",
    "count": 1
  },
  {
    "label": "Special",
    "id": "special",
    "count": 10
  },
  {
    "label": "Thali/Meals",
    "id": "thali-meals",
    "count": 1
  },
  {
    "label": "Combo",
    "id": "combo",
    "count": 1
  },
  {
    "label": "Soups",
    "id": "soups",
    "count": 3
  },
  {
    "label": "Starter",
    "id": "starter",
    "count": 1
  },
  {
    "label": "Rice and Biryani",
    "id": "rice-and-biryani",
    "count": 15
  },
  {
    "label": "Chinese",
    "id": "chinese",
    "count": 8
  },
  {
    "label": "South Indian",
    "id": "south-indian",
    "count": 9
  },
  {
    "label": "Fried Rice and Noodles",
    "id": "fried-rice-and-noodles",
    "count": 8
  },
  {
    "label": "Sandwiches",
    "id": "sandwiches",
    "count": 5
  },
  {
    "label": "Accompaniments",
    "id": "accompaniments",
    "count": 7
  },
  {
    "label": "Upvas Specials",
    "id": "upvas-specials",
    "count": 4
  },
  {
    "label": "Breads",
    "id": "breads",
    "count": 7
  },
  {
    "label": "Tandoori Breads",
    "id": "tandoori-breads",
    "count": 5
  },
  {
    "label": "Dal",
    "id": "dal",
    "count": 2
  }
];

  return (
    <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md shadow-md py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 overflow-x-auto pb-4 custom-scrollbar">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full whitespace-nowrap transition-all relative flex items-center space-x-2 ${
                activeCategory === category.id
                  ? "bg-[#FF6B3D] text-white shadow-lg"
                  : "bg-gray-100 text-[#5A6B8C] hover:bg-[#9FA8DA]/20"
              }`}
            >
              <span className="font-medium">{category.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeCategory === category.id ? "bg-white/20" : "bg-[#5A6B8C]/10"
              }`}>
                {category.count}
              </span>
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF6B3D]"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

function MenuGrid({ activeCategory }: { activeCategory: string }) {
  const allMenuItems = [
    { name: "Khasta Kachori [2 Pieces]", description: "Authentic Khasta Kachori [2 Pieces]", price: "\u20b9150", rating: 5, category: "breakfast", image: "/images/kachori.png" },
    { name: "Paneer Chatpata", description: "Authentic Paneer Chatpata", price: "\u20b9150", rating: 5, category: "special", image: "/images/paneer_tikka.png" },
    { name: "Mushroom Tikka Masala", description: "Authentic Mushroom Tikka Masala", price: "\u20b9150", rating: 5, category: "special", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Mushroom Handi", description: "Authentic Mushroom Handi", price: "\u20b9150", rating: 5, category: "special", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Paneer Pasanda", description: "Authentic Paneer Pasanda", price: "\u20b9150", rating: 5, category: "special", image: "/images/paneer_tikka.png" },
    { name: "Paneer Kolhapuri", description: "Authentic Paneer Kolhapuri", price: "\u20b9150", rating: 5, category: "special", image: "/images/paneer_tikka.png" },
    { name: "Paneer Kofta", description: "Authentic Paneer Kofta", price: "\u20b9150", rating: 5, category: "special", image: "/images/paneer_tikka.png" },
    { name: "Paneer Tikka Masala", description: "Authentic Paneer Tikka Masala", price: "\u20b9150", rating: 5, category: "special", image: "/images/paneer_tikka.png" },
    { name: "Mushroom Kadhai", description: "Authentic Mushroom Kadhai", price: "\u20b9150", rating: 5, category: "special", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Paneer Bhurji", description: "Authentic Paneer Bhurji", price: "\u20b9150", rating: 5, category: "special", image: "/images/paneer_tikka.png" },
    { name: "Veg Handi", description: "Authentic Veg Handi", price: "\u20b9150", rating: 5, category: "special", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Punjabi Thali", description: "Authentic Punjabi Thali", price: "\u20b9150", rating: 5, category: "thali-meals", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Thali", description: "Authentic Thali", price: "\u20b9150", rating: 5, category: "thali-meals", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "1 Paneer Bhaji,1 veg bhaji,1 dal,1 rice,chapati [4 Pieces],salad,papad,sweet.", description: "Authentic 1 Paneer Bhaji,1 veg bhaji,1 dal,1 rice,chapati [4 Pieces],salad,papad,sweet.", price: "\u20b9150", rating: 5, category: "thali-meals", image: "/images/paneer_tikka.png" },
    { name: "Idli Medu Combo", description: "Authentic Idli Medu Combo", price: "\u20b9150", rating: 5, category: "combo", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "1 Idli+1 Medu Vada+Sambhar.", description: "Authentic 1 Idli+1 Medu Vada+Sambhar.", price: "\u20b9150", rating: 5, category: "combo", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Veg Manchow Soup", description: "Authentic Veg Manchow Soup", price: "\u20b9150", rating: 5, category: "soups", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Veg Hot and Sour Soup", description: "Authentic Veg Hot and Sour Soup", price: "\u20b9150", rating: 5, category: "soups", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Tomato Soup", description: "Authentic Tomato Soup", price: "\u20b9150", rating: 5, category: "soups", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Hara Bhara Kebab", description: "Authentic Hara Bhara Kebab", price: "\u20b9150", rating: 5, category: "starter", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Paneer Pulao", description: "Authentic Paneer Pulao", price: "\u20b9150", rating: 5, category: "rice-and-biryani", image: "/images/paneer_tikka.png" },
    { name: "Cheese Pulao", description: "Authentic Cheese Pulao", price: "\u20b9150", rating: 5, category: "rice-and-biryani", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Masala Rice", description: "Authentic Masala Rice", price: "\u20b9150", rating: 5, category: "rice-and-biryani", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Green Peas Pulao", description: "Authentic Green Peas Pulao", price: "\u20b9150", rating: 5, category: "rice-and-biryani", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Veg Pulao", description: "Authentic Veg Pulao", price: "\u20b9150", rating: 5, category: "rice-and-biryani", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Jeera Rice", description: "Authentic Jeera Rice", price: "\u20b9150", rating: 5, category: "rice-and-biryani", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Basmati Steamed Rice", description: "Authentic Basmati Steamed Rice", price: "\u20b9150", rating: 5, category: "rice-and-biryani", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Dal Khichdi", description: "Authentic Dal Khichdi", price: "\u20b9150", rating: 5, category: "rice-and-biryani", image: "/images/dal_tadka.png" },
    { name: "Curd Rice", description: "Authentic Curd Rice", price: "\u20b9150", rating: 5, category: "rice-and-biryani", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Brijwasi Special Biryani", description: "Authentic Brijwasi Special Biryani", price: "\u20b9150", rating: 5, category: "rice-and-biryani", image: "/images/veg_biryani.png" },
    { name: "Mushroom Biryani", description: "Authentic Mushroom Biryani", price: "\u20b9150", rating: 5, category: "rice-and-biryani", image: "/images/veg_biryani.png" },
    { name: "Veg Handi Biryani", description: "Authentic Veg Handi Biryani", price: "\u20b9150", rating: 5, category: "rice-and-biryani", image: "/images/veg_biryani.png" },
    { name: "Veg Hyderabadi Biryani", description: "Authentic Veg Hyderabadi Biryani", price: "\u20b9150", rating: 5, category: "rice-and-biryani", image: "/images/veg_biryani.png" },
    { name: "Veg Dum Biryani", description: "Authentic Veg Dum Biryani", price: "\u20b9150", rating: 5, category: "rice-and-biryani", image: "/images/veg_biryani.png" },
    { name: "Veg Biryani", description: "Authentic Veg Biryani", price: "\u20b9150", rating: 5, category: "rice-and-biryani", image: "/images/veg_biryani.png" },
    { name: "Veg Manchurian Gravy", description: "Authentic Veg Manchurian Gravy", price: "\u20b9150", rating: 5, category: "chinese", image: "/images/manchurian.png" },
    { name: "Veg Manchurian Dry", description: "Authentic Veg Manchurian Dry", price: "\u20b9150", rating: 5, category: "chinese", image: "/images/manchurian.png" },
    { name: "Paneer Chilli Gravy", description: "Authentic Paneer Chilli Gravy", price: "\u20b9150", rating: 5, category: "chinese", image: "/images/paneer_tikka.png" },
    { name: "Paneer Chilli Dry", description: "Authentic Paneer Chilli Dry", price: "\u20b9150", rating: 5, category: "chinese", image: "/images/paneer_tikka.png" },
    { name: "Mushroom Chilli Gravy", description: "Authentic Mushroom Chilli Gravy", price: "\u20b9150", rating: 5, category: "chinese", image: "/images/paneer_chilli.png" },
    { name: "Mushroom Chilli Dry", description: "Authentic Mushroom Chilli Dry", price: "\u20b9150", rating: 5, category: "chinese", image: "/images/paneer_chilli.png" },
    { name: "Gobi Manchurian Gravy", description: "Authentic Gobi Manchurian Gravy", price: "\u20b9150", rating: 5, category: "chinese", image: "/images/manchurian.png" },
    { name: "Gobi Manchurian Dry", description: "Authentic Gobi Manchurian Dry", price: "\u20b9150", rating: 5, category: "chinese", image: "/images/manchurian.png" },
    { name: "Idli [2 Pieces] with Sambhar", description: "Authentic Idli [2 Pieces] with Sambhar", price: "\u20b9150", rating: 5, category: "south-indian", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Medu Vada [2 Vada]", description: "Authentic Medu Vada [2 Vada]", price: "\u20b9150", rating: 5, category: "south-indian", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Cheese Onion Tomato Uttapam", description: "Authentic Cheese Onion Tomato Uttapam", price: "\u20b9150", rating: 5, category: "south-indian", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Tomato Omelette", description: "Authentic Tomato Omelette", price: "\u20b9150", rating: 5, category: "south-indian", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Cheese Masala Uttapam", description: "Authentic Cheese Masala Uttapam", price: "\u20b9150", rating: 5, category: "south-indian", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Cheese Sada Uttapam", description: "Authentic Cheese Sada Uttapam", price: "\u20b9150", rating: 5, category: "south-indian", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Masala Uttapam", description: "Authentic Masala Uttapam", price: "\u20b9150", rating: 5, category: "south-indian", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Tomato Uttapam", description: "Authentic Tomato Uttapam", price: "\u20b9150", rating: 5, category: "south-indian", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Sada Uttapam", description: "Authentic Sada Uttapam", price: "\u20b9150", rating: 5, category: "south-indian", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Veg Hakka Noodles", description: "Authentic Veg Hakka Noodles", price: "\u20b9150", rating: 5, category: "fried-rice-and-noodles", image: "/images/noodles.png" },
    { name: "Veg Schezwan Noodles", description: "Authentic Veg Schezwan Noodles", price: "\u20b9150", rating: 5, category: "fried-rice-and-noodles", image: "/images/noodles.png" },
    { name: "Veg Triple Schezwan Noodles", description: "Authentic Veg Triple Schezwan Noodles", price: "\u20b9150", rating: 5, category: "fried-rice-and-noodles", image: "/images/noodles.png" },
    { name: "Manchurian Fried Rice", description: "Authentic Manchurian Fried Rice", price: "\u20b9150", rating: 5, category: "fried-rice-and-noodles", image: "/images/manchurian.png" },
    { name: "Manchurian Hakka Noodles", description: "Authentic Manchurian Hakka Noodles", price: "\u20b9150", rating: 5, category: "fried-rice-and-noodles", image: "/images/manchurian.png" },
    { name: "Veg Fried Rice", description: "Authentic Veg Fried Rice", price: "\u20b9150", rating: 5, category: "fried-rice-and-noodles", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Veg Schezwan Fried Rice", description: "Authentic Veg Schezwan Fried Rice", price: "\u20b9150", rating: 5, category: "fried-rice-and-noodles", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Mushroom Fried Rice", description: "Authentic Mushroom Fried Rice", price: "\u20b9150", rating: 5, category: "fried-rice-and-noodles", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Cheese Sandwich", description: "Authentic Cheese Sandwich", price: "\u20b9150", rating: 5, category: "sandwiches", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Veg Cheese Sandwich", description: "Authentic Veg Cheese Sandwich", price: "\u20b9150", rating: 5, category: "sandwiches", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Veg Sandwich", description: "Authentic Veg Sandwich", price: "\u20b9150", rating: 5, category: "sandwiches", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Plain Chutney Sandwich", description: "Authentic Plain Chutney Sandwich", price: "\u20b9150", rating: 5, category: "sandwiches", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Bread Butter Sandwich", description: "Authentic Bread Butter Sandwich", price: "\u20b9150", rating: 5, category: "sandwiches", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Dahi", description: "Authentic Dahi", price: "\u20b9150", rating: 5, category: "accompaniments", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Boondi Raita", description: "Authentic Boondi Raita", price: "\u20b9150", rating: 5, category: "accompaniments", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Green Salad", description: "Authentic Green Salad", price: "\u20b9150", rating: 5, category: "accompaniments", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Veg Mixed Raita", description: "Authentic Veg Mixed Raita", price: "\u20b9150", rating: 5, category: "accompaniments", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Masala Papad", description: "Authentic Masala Papad", price: "\u20b9150", rating: 5, category: "accompaniments", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Roasted Papad", description: "Authentic Roasted Papad", price: "\u20b9150", rating: 5, category: "accompaniments", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Fried Papad", description: "Authentic Fried Papad", price: "\u20b9150", rating: 5, category: "accompaniments", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Sabudana Vada", description: "Authentic Sabudana Vada", price: "\u20b9150", rating: 5, category: "upvas-specials", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Farali Chiwda [100 grams]", description: "Authentic Farali Chiwda [100 grams]", price: "\u20b9150", rating: 5, category: "upvas-specials", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Finger Chips", description: "Authentic Finger Chips", price: "\u20b9150", rating: 5, category: "upvas-specials", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Sabudana Khichdi", description: "Authentic Sabudana Khichdi", price: "\u20b9150", rating: 5, category: "upvas-specials", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Veg Stuffed Paratha", description: "Authentic Veg Stuffed Paratha", price: "\u20b9150", rating: 5, category: "breads", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Aloo Paratha", description: "Authentic Aloo Paratha", price: "\u20b9150", rating: 5, category: "breads", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Gobi Paratha", description: "Authentic Gobi Paratha", price: "\u20b9150", rating: 5, category: "breads", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Butter Paratha", description: "Authentic Butter Paratha", price: "\u20b9150", rating: 5, category: "breads", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Naan", description: "Authentic Naan", price: "\u20b9150", rating: 5, category: "breads", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Kulcha", description: "Authentic Kulcha", price: "\u20b9150", rating: 5, category: "breads", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Butter Kulcha", description: "Authentic Butter Kulcha", price: "\u20b9150", rating: 5, category: "breads", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Tandoori Roti", description: "Authentic Tandoori Roti", price: "\u20b9150", rating: 5, category: "breads", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Butter Tandoori Paratha", description: "Authentic Butter Tandoori Paratha", price: "\u20b9150", rating: 5, category: "breads", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Tandoori Paratha", description: "Authentic Tandoori Paratha", price: "\u20b9150", rating: 5, category: "breads", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Aloo Tandoori Paratha", description: "Authentic Aloo Tandoori Paratha", price: "\u20b9150", rating: 5, category: "breads", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Butter Tandoori Roti", description: "Authentic Butter Tandoori Roti", price: "\u20b9150", rating: 5, category: "breads", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400" },
    { name: "Dal Fry Tadka", description: "Authentic Dal Fry Tadka", price: "\u20b9150", rating: 5, category: "dal", image: "/images/dal_tadka.png" },
  ];

  const filteredItems = activeCategory === "all"
    ? allMenuItems
    : allMenuItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          key={activeCategory}
          layout
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {filteredItems.map((item, index) => {
            const isLeft = index % 4 === 0 || index % 4 === 1;
            const isMiddle = index % 4 === 1 || index % 4 === 2;

            return (
              <motion.div
                key={`${activeCategory}-${item.name}`}
                layout
                initial={{
                  opacity: 0,
                  x: isLeft ? -80 : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-[#E8DFC7] rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-56 overflow-hidden">
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
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-bold text-[#FF6B3D]">{item.price}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#5A6B8C] mb-2">{item.name}</h3>
                  <p className="text-[#5A6B8C]/70 text-sm mb-3 line-clamp-2">{item.description}</p>

                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < item.rating ? "text-[#FF6B3D] fill-[#FF6B3D]" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#FF6B3D] text-white py-2.5 rounded-full hover:bg-[#e55a2d] transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart size={16} />
                    <span>Order Now</span>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#FF6B3D] to-[#e55a2d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600"
                  alt="Special Biryani"
                  className="w-full h-96 object-cover rounded-[40px] shadow-2xl"
                />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FF6B3D]">₹300</div>
                  <div className="text-xs text-[#5A6B8C]">Special</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Brijwasi Special Biryani
            </h2>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              Our signature biryani blend with aromatic spices, perfectly cooked basmati rice, and fresh vegetables. A taste you'll never forget!
            </p>
            <div className="flex items-center space-x-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-white fill-white" />
              ))}
              <span className="text-white/90 ml-2">Rated 5/5</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#FF6B3D] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold"
            >
              Order Now
            </motion.button>
          </motion.div>
        </div>
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
          className="bg-gradient-to-br from-[#5A6B8C] to-[#4a5b7c] rounded-[40px] p-12 text-white"
        >
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Do you have dinner plans today?
          </h2>
          <p className="text-white/90 mb-8">
            Reserve your table or order online for a delightful dining experience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+917947126860"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF6B3D] text-white px-8 py-4 rounded-full hover:bg-[#e55a2d] transition-colors font-semibold"
            >
              Book Table
            </motion.a>
            <motion.a
              href="https://www.zomato.com/mumbai/brijwasi-sweets-and-restaurant-boisar/order"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#5A6B8C] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold"
            >
              Order Online
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
