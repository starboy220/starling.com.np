import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Add matrix effect to background
  useEffect(() => {
    if (!isLoading) {
      const createMatrixChar = () => {
        const chars = '01';
        const char = document.createElement('div');
        char.className = 'matrix-char';
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
        char.style.left = Math.random() * 100 + '%';
        char.style.animationDelay = Math.random() * 10 + 's';
        char.style.animationDuration = (Math.random() * 10 + 10) + 's';
        char.style.opacity = '0.1';
        
        document.body.appendChild(char);
        
        setTimeout(() => {
          if (document.body.contains(char)) {
            document.body.removeChild(char);
          }
        }, 20000);
      };

      const interval = setInterval(createMatrixChar, 500);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;