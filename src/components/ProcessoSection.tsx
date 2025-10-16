import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';
import { Leaf, Flame, Droplets, Coffee } from 'lucide-react';

const ProcessoSection = () => {
  const processSteps = [
    {
      id: 1,
      icon: Leaf,
      title: 'Seleção Premium',
      description: 'Grãos selecionados das melhores fazendas do Brasil, colhidos no ponto ideal de maturação',
      details: 'Trabalhamos diretamente com produtores que compartilham nossa paixão pela qualidade',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=premium%20coffee%20beans%20selection%20hands%20holding%20coffee%20cherries%20plantation%20background%20golden%20hour%20lighting%20artisanal%20quality&image_size=landscape_4_3',
    },
    {
      id: 2,
      icon: Flame,
      title: 'Torra Artesanal',
      description: 'Processo de torra controlado que realça os sabores únicos de cada origem',
      details: 'Nossa torra é feita em pequenos lotes para garantir a consistência e frescor',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=coffee%20roasting%20machine%20artisanal%20process%20golden%20beans%20falling%20warm%20lighting%20professional%20coffee%20roastery%20atmosphere&image_size=landscape_4_3',
    },
    {
      id: 3,
      icon: Droplets,
      title: 'Extração Perfeita',
      description: 'Técnicas precisas de extração que preservam todos os compostos aromáticos',
      details: 'Cada método de preparo é calibrado para extrair o melhor de cada grão',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20coffee%20extraction%20espresso%20machine%20golden%20crema%20steam%20elegant%20coffee%20shop%20barista%20hands%20precision&image_size=landscape_4_3',
    },
    {
      id: 4,
      icon: Coffee,
      title: 'Experiência Única',
      description: 'Cada xícara é servida com arte e paixão, criando momentos memoráveis',
      details: 'O resultado final é uma experiência sensorial completa e inesquecível',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20coffee%20presentation%20latte%20art%20premium%20cup%20dark%20background%20golden%20lighting%20steam%20rising%20artistic%20composition&image_size=landscape_4_3',
    },
  ];

  return (
    <section id="processo" className="section-padding bg-gradient-to-b from-background-dark to-primary-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <SectionDivider label="Processo" className="mb-6" />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gradient">
            Nosso Processo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Da seleção dos grãos até a xícara perfeita, cada etapa é executada com maestria e dedicação
          </p>
        </motion.div>

        <div className="space-y-24">
          {processSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image */}
                <div className="flex-1 relative group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-black/60 via-transparent to-transparent" />
                    
                    {/* Step Number */}
                    <div className="absolute top-6 left-6 w-16 h-16 bg-secondary-gold rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-black">
                        {step.id}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-4"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary-gold to-accent-gold-bright rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary-black" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
                      {step.title}
                    </h3>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-xl text-gray-300 leading-relaxed"
                  >
                    {step.description}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-gray-400 leading-relaxed"
                  >
                    {step.details}
                  </motion.p>

                  {/* Decorative Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100px' }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="h-1 bg-gradient-to-r from-secondary-gold to-accent-gold-bright rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="card-premium max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Experimente a Diferença
            </h3>
            <p className="text-gray-300 mb-6">
              Cada xícara conta uma história de dedicação, qualidade e paixão pelo café perfeito
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contato');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary text-lg px-8 py-3"
            >
              Agende sua Visita
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessoSection;