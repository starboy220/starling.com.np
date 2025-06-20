import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayText, setDisplayText] = useState('');
  
  const loadingSteps = [
    'INITIALIZING SYSTEM...',
    'LOADING SECURITY PROTOCOLS...',
    'ESTABLISHING ENCRYPTED CONNECTION...',
    'VERIFYING AUTHENTICATION...',
    'ACCESSING MAINFRAME...',
    'LOADING USER INTERFACE...',
    'SYSTEM READY'
  ];

  useEffect(() => {
    let stepTimeout: NodeJS.Timeout;
    let textTimeout: NodeJS.Timeout;

    const typeText = (text: string, callback?: () => void) => {
      let i = 0;
      setDisplayText('');
      
      const typing = () => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
          textTimeout = setTimeout(typing, 50);
        } else {
          callback && setTimeout(callback, 800);
        }
      };
      typing();
    };

    const nextStep = () => {
      if (currentStep < loadingSteps.length) {
        typeText(loadingSteps[currentStep], () => {
          if (currentStep === loadingSteps.length - 1) {
            setTimeout(onComplete, 1000);
          } else {
            setCurrentStep(prev => prev + 1);
          }
        });
      }
    };

    stepTimeout = setTimeout(nextStep, currentStep === 0 ? 500 : 1200);

    return () => {
      clearTimeout(stepTimeout);
      clearTimeout(textTimeout);
    };
  }, [currentStep, onComplete]);

  // Matrix rain effect
  useEffect(() => {
    const createMatrixChar = () => {
      const chars = '0123456789ABCDEF';
      const char = document.createElement('div');
      char.className = 'matrix-char';
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.random() * 100 + '%';
      char.style.animationDelay = Math.random() * 10 + 's';
      char.style.animationDuration = (Math.random() * 5 + 5) + 's';
      
      document.body.appendChild(char);
      
      setTimeout(() => {
        document.body.removeChild(char);
      }, 10000);
    };

    const interval = setInterval(createMatrixChar, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="scan-line"></div>
      
      <div className="text-center space-y-8">
        {/* Logo */}
        <div className="mb-12">
          <div className="text-6xl font-bold orbitron gradient-text mb-4">
            ST
          </div>
          <div className="text-xl text-cyan-400 tracking-widest">
            STARLING_THAPA.EXE
          </div>
        </div>

        {/* Loading Animation */}
        <div className="space-y-6">
          <div className="text-green-400 font-mono text-lg min-h-[28px]">
            {displayText}
            <span className="animate-pulse">|</span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 to-green-400 transition-all duration-300 ease-out"
              style={{ width: `${(currentStep / loadingSteps.length) * 100}%` }}
            ></div>
          </div>
          
          {/* Loading Percentage */}
          <div className="text-cyan-400 font-mono">
            {Math.floor((currentStep / loadingSteps.length) * 100)}%
          </div>
          
          {/* Loading Dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full loading-dot"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full loading-dot"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full loading-dot"></div>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 circuit-bg"></div>
    </div>
  );
};

export default LoadingScreen;