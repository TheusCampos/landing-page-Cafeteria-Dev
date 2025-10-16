import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionDivider from './SectionDivider';
import { ChevronLeft, ChevronRight, Wifi, Cake, Headphones, Laptop } from 'lucide-react';

const AmbienteSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      url: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20dark%20coffee%20shop%20interior%20with%20warm%20golden%20lighting%20leather%20sofas%20dark%20wood%20tables%20premium%20atmosphere%20cozy%20seating%20area&image_size=landscape_4_3',
      title: 'Lounge Premium',
    },
    {
      url: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20barista%20working%20at%20espresso%20machine%20in%20dark%20elegant%20coffee%20shop%20golden%20lighting%20steam%20coffee%20preparation&image_size=landscape_4_3',
      title: 'Barista Artesanal',
    },
    {
      url: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=coffee%20tasting%20area%20with%20dark%20wood%20counter%20elegant%20cups%20warm%20lighting%20premium%20coffee%20shop%20interior%20sophisticated%20atmosphere&image_size=landscape_4_3',
      title: 'Área de Degustação',
    },
    {
      url: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=coworking%20space%20in%20coffee%20shop%20with%20laptops%20dark%20wood%20tables%20warm%20lighting%20comfortable%20seating%20modern%20elegant%20design&image_size=landscape_4_3',
      title: 'Espaço Coworking',
    },
  ];

  const benefits = [
    {
      icon: Wifi,
      title: 'Wi-Fi ultrarrápido',
      description: 'Conexão de alta velocidade para sua produtividade',
    },
    {
      icon: Cake,
      title: 'Doces artesanais',
      description: 'Criações exclusivas da nossa confeitaria',
    },
    {
      icon: Headphones,
      title: 'Trilha sonora ambiente',
      description: 'Música cuidadosamente selecionada para inspirar',
    },
    {
      icon: Laptop,
      title: 'Espaço para freelancers',
      description: 'Ambiente perfeito para reuniões e trabalho',
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="ambiente" className="section-padding bg-primary-brown/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionDivider label="Ambiente" className="mb-6" />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gradient">
            Um espaço feito para criar,
            <br />
            <span className="text-white">relaxar e inspirar</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada detalhe foi pensado para proporcionar a experiência perfeita entre o aroma do café e a inspiração criativa
          </p>
        </motion.div>

        {/* Image Carousel */}
        <div className="relative mb-16">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={images[currentImage].url}
                  alt={images[currentImage].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {images[currentImage].title}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary-black/50 hover:bg-primary-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary-black/50 hover:bg-primary-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImage
                      ? 'bg-secondary-gold'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <div className="parallelogram card-premium uniform-card">
                <div className="parallelogram-content uniform-card-content text-center">
                  <div className="mb-4 flex justify-center">
                    <benefit.icon className="w-12 h-12 text-secondary-gold group-hover:text-accent-gold-bright transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmbienteSection;