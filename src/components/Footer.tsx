import { motion } from 'framer-motion';
import { Coffee, Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubscribeStatus('success');
      setEmail('');
    } catch (error) {
      setSubscribeStatus('error');
    } finally {
      setIsSubscribing(false);
      setTimeout(() => setSubscribeStatus('idle'), 4000);
    }
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Ambiente', href: '#ambiente' },
    { name: 'Menu', href: '#menu' },
    { name: 'Processo', href: '#processo' },
    { name: 'Experiência', href: '#experiencia' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-primary-black to-background-dark border-t border-gray-800">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary-gold to-accent-gold-bright rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6 text-primary-black" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">
                Cafeteria Dev
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Onde a paixão pelo café encontra a inovação tecnológica. 
              Criamos experiências únicas para profissionais criativos.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-secondary-gold hover:to-accent-gold-bright rounded-full flex items-center justify-center text-gray-400 hover:text-primary-black transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-serif font-bold text-white">
              Navegação
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-secondary-gold transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-serif font-bold text-white">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary-gold mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Rua dos Desenvolvedores, 123</p>
                  <p>Tech District - Cuiabá, MT</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary-gold flex-shrink-0" />
                <span className="text-gray-300 text-sm">(11) 9999-8888</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary-gold flex-shrink-0" />
                <span className="text-gray-300 text-sm">contato@cafeteriadev.com</span>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-serif font-bold text-white">
              Newsletter
            </h4>
            <p className="text-gray-300 text-sm">
              Receba novidades, eventos especiais e dicas sobre café.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu e-mail"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-secondary-gold focus:ring-1 focus:ring-secondary-gold transition-colors text-sm"
                  required
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubscribing}
                whileHover={{ scale: isSubscribing ? 1 : 1.02 }}
                whileTap={{ scale: isSubscribing ? 1 : 0.98 }}
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  isSubscribing
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'btn-primary'
                }`}
              >
                {isSubscribing ? 'Inscrevendo...' : 'Inscrever-se'}
              </motion.button>
            </form>

            {/* Newsletter Status */}
            {subscribeStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-green-900/30 border border-green-500 rounded-lg text-green-400 text-xs text-center"
              >
                Inscrição realizada com sucesso!
              </motion.div>
            )}

            {subscribeStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-900/30 border border-red-500 rounded-lg text-red-400 text-xs text-center"
              >
                Erro ao inscrever. Tente novamente.
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              © 2025 Cafeteria Dev. Todos os direitos reservados.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <span>Desenvolvido por</span>
              <span>Matheus Campos</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 text-gray-400 text-sm"
            >
              <a href="#" className="hover:text-secondary-gold transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-secondary-gold transition-colors">
                Termos de Uso
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;