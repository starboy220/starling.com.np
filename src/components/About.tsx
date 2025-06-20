import React from 'react';
import { Shield, Code, Lock, Terminal, Database, Globe } from 'lucide-react';

const About: React.FC = () => {
  const experiences = [
    {
      icon: Shield,
      title: 'PENETRATION TESTING',
      description: 'Advanced security assessments and vulnerability analysis',
      color: 'text-red-400'
    },
    {
      icon: Code,
      title: 'SOFTWARE DEVELOPMENT',
      description: 'Building secure and scalable applications',
      color: 'text-blue-400'
    },
    {
      icon: Lock,
      title: 'SECURITY CONSULTING',
      description: 'Helping businesses improve their security posture',
      color: 'text-green-400'
    },
    {
      icon: Terminal,
      title: 'SYSTEM ADMINISTRATION',
      description: 'Linux/Windows server management and hardening',
      color: 'text-yellow-400'
    },
    {
      icon: Database,
      title: 'DATABASE SECURITY',
      description: 'SQL injection prevention and database hardening',
      color: 'text-purple-400'
    },
    {
      icon: Globe,
      title: 'WEB SECURITY',
      description: 'Web application security testing and fixes',
      color: 'text-cyan-400'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-mono mb-4">{'> ABOUT_ME.EXE'}</div>
          <h2 className="text-4xl md:text-6xl font-bold orbitron gradient-text mb-6">
            SYSTEM PROFILE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-8 backdrop-blur-sm">
            <div className="font-mono text-green-400 mb-4">
              {'> cat /home/starling/profile.txt'}
            </div>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                <span className="text-cyan-400">Name:</span> Starling Thapa<br/>
                <span className="text-cyan-400">Role:</span> Ethical Hacker & Software Developer<br/>
                <span className="text-cyan-400">Status:</span> <span className="text-green-400">ONLINE</span>
              </p>
              
              <p>
                I'm a cybersecurity specialist with a passion for ethical hacking and secure software development. 
                My expertise spans across penetration testing, vulnerability assessment, and building robust applications 
                that prioritize security from the ground up.
              </p>
              
              <p>
                With extensive experience in both offensive and defensive security, I help organizations identify 
                and fix vulnerabilities before malicious actors can exploit them. My approach combines technical 
                expertise with strategic thinking to deliver comprehensive security solutions.
              </p>
            </div>

            <div className="mt-6 font-mono text-sm text-gray-500">
              {'> Last updated: ' + new Date().toISOString().split('T')[0]}
            </div>
          </div>
        </div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-cyan-500 transition-all duration-300 hover-scale group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors ${exp.color}`}>
                  <exp.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="mt-4 text-xs font-mono text-gray-600">
                {'> module_' + (index + 1).toString().padStart(2, '0') + '.exe'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;