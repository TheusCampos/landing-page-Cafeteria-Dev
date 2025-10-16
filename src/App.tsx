import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AmbienteSection from './components/AmbienteSection';
import MenuSection from './components/MenuSection';
import ProcessoSection from './components/ProcessoSection';
import ExperienciaSection from './components/ExperienciaSection';
import DepoimentosSection from './components/DepoimentosSection';
import ContatoSection from './components/ContatoSection';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-primary-black text-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div key="main">
            <Header />
            <main>
              <HeroSection />
              <AmbienteSection />
              <MenuSection />
              <ProcessoSection />
              <ExperienciaSection />
              <DepoimentosSection />
              <ContatoSection />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
