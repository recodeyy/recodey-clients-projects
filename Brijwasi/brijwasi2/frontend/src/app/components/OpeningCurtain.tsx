import { motion } from "motion/react";

export default function OpeningCurtain() {
  return (
    <motion.div
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0 }}
      transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
      style={{ originX: 0.5 }}
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#6e1a37] via-[#ae2441] to-[#87bba9] flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center relative"
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 bg-[#ae2441] rounded-full blur-3xl opacity-50"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="relative z-10 px-12 py-8">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-2xl"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Brijwasi
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl md:text-3xl text-white mb-6 drop-shadow-lg"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Sweets & Restaurant
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-white text-lg drop-shadow-md"
            >
              <p className="mb-2">Navapur Naka, Palghar Road</p>
              <p className="mb-2">Boisar, Mumbai</p>
              <p className="text-[#d5e7b5]">Open: 8:30 AM - 10:30 PM</p>
              <p className="mt-3 text-xl">07947126860</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
