import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';
import { Star, Coffee, Thermometer, Clock } from 'lucide-react';

const MenuSection = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Espresso Dev',
      description: 'Blend especial de grãos torrados artesanalmente com notas de chocolate amargo e caramelo',
      price: 'R$ 8,50',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20espresso%20cup%20on%20dark%20wood%20table%20with%20golden%20lighting%20steam%20rising%20premium%20coffee%20shop%20atmosphere%20artistic%20photography&image_size=square_hd',
      category: 'Espresso',
      intensity: 5,
      temperature: 'Quente',
      time: '2 min',
      featured: true,
    },
    {
      id: 2,
      name: 'Latte Code',
      description: 'Espresso suave com leite vaporizado e arte latte personalizada',
      price: 'R$ 12,00',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20latte%20art%20in%20white%20cup%20on%20dark%20surface%20with%20warm%20golden%20lighting%20premium%20coffee%20shop%20elegant%20presentation&image_size=square_hd',
      category: 'Latte',
      intensity: 3,
      temperature: 'Quente',
      time: '4 min',
      featured: true,
    },
    {
      id: 3,
      name: 'Cappuccino Premium',
      description: 'Espresso intenso com espuma cremosa e toque de canela',
      price: 'R$ 10,50',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=premium%20cappuccino%20with%20cinnamon%20dusting%20in%20elegant%20cup%20dark%20background%20golden%20lighting%20coffee%20shop%20atmosphere&image_size=square_hd',
      category: 'Cappuccino',
      intensity: 4,
      temperature: 'Quente',
      time: '3 min',
      featured: true,
    },
    {
      id: 4,
      name: 'Cold Brew Dark Mode',
      description: 'Café extraído a frio por 12 horas, servido gelado com notas cítricas',
      price: 'R$ 14,00',
      image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=cold%20brew%20coffee%20in%20tall%20glass%20with%20ice%20dark%20background%20golden%20lighting%20premium%20presentation%20elegant%20coffee%20shop&image_size=square_hd',
      category: 'Cold Brew',
      intensity: 4,
      temperature: 'Gelado',
      time: '12h prep',
      featured: true,
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="section-padding bg-background-dark">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionDivider label="Menu" className="mb-6" />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gradient">
            Os Mais Pedidos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada bebida é uma obra de arte, criada com paixão e precisão para despertar seus sentidos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-premium overflow-hidden hover:scale-105 transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-black/60 to-transparent" />
                  
                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute top-3 right-3 bg-secondary-gold text-primary-black px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Destaque
                    </div>
                  )}

                  {/* Price Overlay */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-2xl font-serif font-bold text-secondary-gold">
                      {item.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Coffee className="w-3 h-3" />
                      <span>Intensidade: {item.intensity}/5</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Thermometer className="w-3 h-3" />
                      <span>{item.temperature}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{item.time}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={scrollToContact}
                    className="w-full btn-primary text-sm py-2"
                  >
                    Ver detalhes
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Descubra todo o nosso menu e reserve sua experiência
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="btn-secondary text-lg px-8 py-4"
          >
            Fazer Reserva
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;