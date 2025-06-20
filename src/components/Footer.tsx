import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-cyan-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold orbitron gradient-text">ST</span>
            </div>
            <p className="text-gray-400 font-mono text-sm">
              Ethical hacker and software developer specializing in cybersecurity 
              and secure application development.
            </p>
            <div className="text-xs font-mono text-gray-600">
              {'> system_uptime: ' + Math.floor(Math.random() * 365) + ' days'}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white orbitron">QUICK_ACCESS</h3>
            <ul className="space-y-2">
              {[
                { href: '#home', label: 'HOME' },
                { href: '#about', label: 'ABOUT' },
                { href: '#skills', label: 'SKILLS' },
                { href: '#contact', label: 'CONTACT' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors font-mono text-sm"
                  >
                    {'> ' + link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* System Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white orbitron">SYSTEM_INFO</h3>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className="text-green-400">ONLINE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Version:</span>
                <span className="text-cyan-400">v2.1.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Last Update:</span>
                <span className="text-yellow-400">{currentYear}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Security:</span>
                <span className="text-red-400">MAXIMUM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
          <div className="flex items-center space-x-2 text-gray-400 font-mono text-sm">
            <span>© {currentYear} Starling Thapa. Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>and lots of ☕</span>
          </div>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 bg-cyan-500 text-black rounded-full hover:bg-cyan-400 transition-all duration-300 hover-scale"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Terminal Prompt */}
        <div className="mt-8 pt-4 border-t border-gray-800">
          <div className="font-mono text-xs text-gray-600">
            {'starling@hackbox:~$ echo "Thanks for visiting my digital fortress!"'}
          </div>
          <div className="font-mono text-xs text-green-400 mt-1">
            Thanks for visiting my digital fortress!
          </div>
          <div className="font-mono text-xs text-gray-600 mt-2 flex items-center">
            {'starling@hackbox:~$ '}
            <span className="animate-pulse ml-1">|</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;