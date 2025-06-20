import React, { useEffect, useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'ETHICAL HACKER',
    'SECURITY CONSULTANT', 
    'WEB DEVELOPER',
    'SOFTWARE DESIGNER'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-terminal">
      {/* Background Effects */}
      <div className="absolute inset-0 circuit-bg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image at Top */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-4 border-cyan-500 overflow-hidden bg-gray-800 flex items-center justify-center hover-glow">
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <span className="text-4xl font-bold orbitron text-cyan-400">ST</span>
                    </div>
                    <div className="text-sm font-mono text-gray-400">PROFILE_IMAGE.JPG</div>
                  </div>
                </div>
                {
                <img 
                  src="star.jpg" 
                  alt="Starling Thapa" 
                  className="w-full h-full object-cover"
                />
                */}
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="text-cyan-400 font-mono text-lg tracking-wider">
                {'> SYSTEM_USER_AUTHENTICATED'}
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold orbitron">
                HI, I'M{' '}
                <span className="gradient-text glitch">
                  STARLING
                </span>
              </h1>
              
              <div className="text-2xl md:text-3xl font-mono text-green-400 min-h-[40px]">
                <span className="typing-text">
                  {roles[currentRole]}
                </span>
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Penetrating systems, securing networks, and building innovative software solutions 
              with a focus on cybersecurity and performance optimization.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-all duration-300 hover-glow btn-pulse flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>INITIATE_CONTACT</span>
              </button>
              
              <a 
                href="https://tryhackme.com/p/starlingthapa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-green-400 text-green-400 font-bold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 flex items-center space-x-2"
              >
                <img 
                  src="https://assets.tryhackme.com/img/favicon.png" 
                  alt="TryHackMe" 
                  className="w-5 h-5"
                />
                <span>TRYHACKME_PROFILE</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 justify-center">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
