import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-primary-black flex items-center justify-center z-50"
    >
      <div className="text-center">
        {/* Coffee Cup with Steam */}
        <div className="relative mb-8">
          {/* Coffee Cup */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-24 h-24 mx-auto"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-secondary-gold to-accent-gold-bright rounded-full flex items-center justify-center shadow-2xl">
              <Coffee className="w-12 h-12 text-primary-black" />
            </div>
          </motion.div>

          {/* Steam Animation */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -30, -60],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 1.5],
                  x: [0, Math.sin(i) * 10, Math.sin(i) * 20],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
                className="absolute w-1 h-1 bg-white/40 rounded-full blur-sm"
                style={{ left: `${i * 4 - 8}px` }}
              />
            ))}
          </div>
        </div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-4"
        >
          Cafeteria Dev
        </motion.h1>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-300 text-lg mb-8"
        >
          Preparando sua experiência...
        </motion.p>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-secondary-gold to-accent-gold-bright rounded-full"
          />
        </div>

        {/* Loading Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 bg-secondary-gold rounded-full"
            />
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [100, -100],
                x: [0, Math.sin(i) * 50],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
              className="absolute w-1 h-1 bg-secondary-gold/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: 0,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;