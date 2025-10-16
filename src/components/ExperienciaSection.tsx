import { motion } from 'framer-motion';
import { Eye, Wind, Ear, Heart } from 'lucide-react';
import SectionDivider from './SectionDivider';

const ExperienciaSection = () => {
  const senses = [
    {
      icon: Eye,
      title: 'Visual',
      description: 'Arte em cada xícara',
      details: 'Latte art personalizada e apresentação impecável que desperta o primeiro impacto sensorial',
    },
    {
      icon: Wind,
      title: 'Olfato',
      description: 'Aromas envolventes',
      details: 'Fragrâncias complexas que antecipam o prazer e criam uma atmosfera única',
    },
    {
      icon: Ear,
      title: 'Audição',
      description: 'Sons da perfeição',
      details: 'O vapor da máquina, o barulho dos grãos sendo moídos, a trilha sonora cuidadosamente selecionada',
    },
    {
      icon: Heart,
      title: 'Paladar',
      description: 'Sabores memoráveis',
      details: 'Notas complexas que se revelam a cada gole, criando uma experiência inesquecível',
    },
  ];

  return (
    <section id="experiencia" className="section-padding bg-primary-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-gold/20 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <SectionDivider label="Experiência" className="mb-6" />
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gradient"
              >
                Experiência
                <br />
                Sensorial
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-xl text-gray-300 leading-relaxed"
              >
                Cada visita é uma jornada através dos sentidos, onde cada detalhe foi pensado para criar momentos únicos e memoráveis.
              </motion.p>
            </div>

            {/* Senses Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {senses.map((sense, index) => {
                const Icon = sense.icon;
                return (
                  <motion.div
                    key={sense.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="card-premium hover:bg-gradient-to-br hover:from-primary-brown/20 hover:to-secondary-gold/10 transition-all duration-500">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-secondary-gold to-accent-gold-bright rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-primary-black" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-serif font-bold text-white mb-1">
                            {sense.title}
                          </h3>
                          <p className="text-secondary-gold text-sm font-medium mb-2">
                            {sense.description}
                          </p>
                          <p className="text-gray-400 text-xs leading-relaxed">
                            {sense.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contato');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-secondary text-lg px-8 py-4"
              >
                Viva essa Experiência
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20coffee%20shop%20interior%20with%20barista%20creating%20latte%20art%20warm%20golden%20lighting%20steam%20rising%20premium%20atmosphere%20sensory%20experience&image_size=portrait_4_3"
                  alt="Experiência Sensorial"
                  className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-secondary-gold to-accent-gold-bright rounded-full flex items-center justify-center shadow-2xl"
              >
                <Heart className="w-10 h-10 text-primary-black" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  x: [0, 5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-accent-gold-bright to-secondary-gold rounded-full flex items-center justify-center shadow-2xl"
              >
                <Eye className="w-8 h-8 text-primary-black" />
              </motion.div>

              {/* Steam Effect */}
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -50, -100],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 1.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeOut"
                    }}
                    className="absolute w-2 h-2 bg-white/30 rounded-full blur-sm"
                    style={{ left: `${i * 10}px` }}
                  />
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 left-8 right-8 card-premium text-center"
            >
              <p className="text-gray-300 italic text-sm">
                "Cada xícara é uma sinfonia de sensações que desperta a alma"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienciaSection;