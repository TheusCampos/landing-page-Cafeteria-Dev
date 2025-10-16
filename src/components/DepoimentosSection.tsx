import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import SectionDivider from './SectionDivider';

const DepoimentosSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Ana Silva',
      role: 'Designer UX/UI',
      company: 'Tech Startup',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20woman%20portrait%20smiling%20creative%20professional%20warm%20lighting%20elegant%20style%20coffee%20shop%20customer&image_size=square',
      rating: 5,
      text: 'O Cafeteria Dev se tornou meu refúgio criativo. O ambiente é perfeito para trabalhar e o café é simplesmente excepcional. Cada visita é uma experiência única.',
      highlight: 'Ambiente perfeito para trabalhar',
    },
    {
      id: 2,
      name: 'Carlos Mendes',
      role: 'Desenvolvedor Full Stack',
      company: 'Freelancer',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20man%20portrait%20developer%20friendly%20smile%20modern%20style%20coffee%20enthusiast%20warm%20lighting&image_size=square',
      rating: 5,
      text: 'Como desenvolvedor, preciso de um lugar que inspire criatividade. O Cafeteria Dev oferece isso e muito mais. O Espresso Dev é minha fonte de energia diária.',
      highlight: 'Inspira criatividade',
    },
    {
      id: 3,
      name: 'Marina Costa',
      role: 'Product Manager',
      company: 'Fintech',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20woman%20portrait%20business%20executive%20confident%20smile%20elegant%20style%20coffee%20lover&image_size=square',
      rating: 5,
      text: 'Realizei várias reuniões importantes aqui. O ambiente sofisticado e o atendimento impecável sempre impressionam meus clientes. Recomendo sem hesitar.',
      highlight: 'Ambiente sofisticado',
    },
    {
      id: 4,
      name: 'Rafael Santos',
      role: 'Arquiteto de Software',
      company: 'Big Tech',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20man%20portrait%20tech%20professional%20glasses%20friendly%20expression%20modern%20style%20coffee%20expert&image_size=square',
      rating: 5,
      text: 'A qualidade do café é incomparável. Cada método de preparo é executado com precisão técnica. É como ver código bem escrito, mas em forma de bebida.',
      highlight: 'Qualidade incomparável',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section id="depoimentos" className="section-padding bg-gradient-to-b from-background-dark to-primary-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionDivider label="Depoimentos" className="mb-6" />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gradient">
            O que Dizem
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Histórias reais de profissionais que encontraram no Cafeteria Dev seu lugar especial
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Testimonial */}
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12"
          >
            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/60 to-transparent" />
              </div>
              
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary-gold rounded-full flex items-center justify-center shadow-2xl">
                <Quote className="w-8 h-8 text-primary-black" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              {/* Rating */}
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary-gold text-secondary-gold" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed italic">
                "{current.text}"
              </blockquote>

              {/* Highlight */}
              <div className="inline-block bg-gradient-to-r from-secondary-gold/20 to-accent-gold-bright/20 px-4 py-2 rounded-full border border-secondary-gold/30">
                <span className="text-secondary-gold font-medium text-sm">
                  {current.highlight}
                </span>
              </div>

              {/* Author Info */}
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold text-white">
                  {current.name}
                </h3>
                <p className="text-secondary-gold font-medium">
                  {current.role}
                </p>
                <p className="text-gray-400 text-sm">
                  {current.company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-gradient-to-br from-secondary-gold to-accent-gold-bright rounded-full flex items-center justify-center text-primary-black hover:shadow-lg transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-secondary-gold scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-gradient-to-br from-secondary-gold to-accent-gold-bright rounded-full flex items-center justify-center text-primary-black hover:shadow-lg transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            {[
              { number: '+500', label: 'Clientes Satisfeitos' },
              { number: '4.9', label: 'Avaliação Média' },
              { number: '98%', label: 'Recomendariam' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection