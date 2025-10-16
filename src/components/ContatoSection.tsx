import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Calendar, Users, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import SectionDivider from './SectionDivider';

const ContatoSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      details: ['Rua dos Desenvolvedores, 123', 'Tech District - São Paulo, SP'],
    },
    {
      icon: Phone,
      title: 'Telefone',
      details: ['(11) 9999-8888', 'WhatsApp disponível'],
    },
    {
      icon: Mail,
      title: 'E-mail',
      details: ['contato@cafeteriadev.com', 'reservas@cafeteriadev.com'],
    },
    {
      icon: Clock,
      title: 'Horário',
      details: ['Segunda a Sexta: 7h às 22h', 'Sábado e Domingo: 8h às 20h'],
    },
  ];

  return (
    <section id="contato" className="section-padding bg-primary-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionDivider label="Contato" className="mb-6" />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gradient">
            Faça sua Reserva
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Garante seu lugar em nossa experiência única. Entre em contato e reserve seu momento especial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="card-premium">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Formulário de Reserva
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2 text-sm font-medium">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background-dark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-secondary-gold focus:ring-1 focus:ring-secondary-gold transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background-dark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-secondary-gold focus:ring-1 focus:ring-secondary-gold transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2 text-sm font-medium">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background-dark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-secondary-gold focus:ring-1 focus:ring-secondary-gold transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                {/* Date, Time and Guests */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-gray-300 mb-2 text-sm font-medium">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Data *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-background-dark border border-gray-600 rounded-lg text-white focus:border-secondary-gold focus:ring-1 focus:ring-secondary-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-gray-300 mb-2 text-sm font-medium">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Horário *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background-dark border border-gray-600 rounded-lg text-white focus:border-secondary-gold focus:ring-1 focus:ring-secondary-gold transition-colors"
                    >
                      <option value="">Selecione</option>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-gray-300 mb-2 text-sm font-medium">
                      <Users className="w-4 h-4 inline mr-1" />
                      Pessoas *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background-dark border border-gray-600 rounded-lg text-white focus:border-secondary-gold focus:ring-1 focus:ring-secondary-gold transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num.toString()}>
                          {num} {num === 1 ? 'pessoa' : 'pessoas'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-medium">
                    <MessageSquare className="w-4 h-4 inline mr-1" />
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-background-dark border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-secondary-gold focus:ring-1 focus:ring-secondary-gold transition-colors resize-none"
                    placeholder="Alguma observação especial para sua reserva..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : 'btn-primary'
                  }`}
                >
                  {isSubmitting ? 'Enviando...' : 'Confirmar Reserva'}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-900/30 border border-green-500 rounded-lg text-green-400 text-center"
                  >
                    Reserva enviada com sucesso! Entraremos em contato em breve.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-900/30 border border-red-500 rounded-lg text-red-400 text-center"
                  >
                    Erro ao enviar reserva. Tente novamente ou entre em contato por telefone.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info and Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="card-premium text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary-gold to-accent-gold-bright rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary-black" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-white mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-300 text-sm">
                        {detail}
                      </p>
                    ))}
                  </motion.div>
                );
              })}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="card-premium"
            >
              <h3 className="text-xl font-serif font-bold text-white mb-4">
                Nossa Localização
              </h3>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6520442!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt!2sbr!4v1635959999999!5m2!1spt!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-primary-black/20 hover:bg-transparent transition-all duration-500" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;