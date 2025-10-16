import { motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat animate-parallax"
          style={{
            backgroundImage: `url('https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20barista%20preparing%20artisanal%20coffee%20in%20dark%20elegant%20coffee%20shop%20with%20warm%20golden%20lighting%20steam%20rising%20from%20cup%20cinematic%20low%20light%20photography%20premium%20atmosphere&image_size=landscape_16_9')`,
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black/70 via-primary-black/50 to-primary-black/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-5xl mx-auto text-left">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-gradient leading-tight">
            O Café que Desperta
            <br />
            <span className="text-white">Experiências</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-4 font-light"
        >
          Cada xícara é um código de excelência
        </motion.p>

        {/* Decorative minimal tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="inline-block w-10 h-px bg-secondary-gold" />
          <span className="text-sm tracking-widest uppercase text-gray-400">
            Sofisticação • Tecnologia • Café de Classe Mundial
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-start items-start"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#menu')}
            className="btn-secondary text-lg px-8 py-4 flex items-center gap-2"
          >
            <Play className="w-5 h-5" />
            Conheça o menu
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#contato')}
            className="btn-primary text-lg px-8 py-4"
          >
            Agende sua experiência
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Coffee Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-20, -100, -200],
              x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100],
            }}
            transition={{
              duration: 8,
              delay: i * 2,
              repeat: Infinity,
              repeatDelay: 5,
            }}
            className="absolute bottom-0 w-2 h-2 bg-secondary-gold rounded-full"
            style={{
              left: `${20 + i * 15}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;