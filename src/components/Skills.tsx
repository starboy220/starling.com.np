import React from 'react';
import { Code, Shield, Database, Terminal, Globe, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: 'SECURITY TOOLS',
      color: 'text-red-400',
      skills: [
        { name: 'Nmap', level: 95 },
        { name: 'Metasploit', level: 90 },
        { name: 'Burp Suite', level: 88 },
        { name: 'Wireshark', level: 85 },
        { name: 'OWASP ZAP', level: 82 }
      ]
    },
    {
      icon: Code,
      title: 'PROGRAMMING',
      color: 'text-blue-400',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'C/C++', level: 85 },
        { name: 'PHP', level: 80 },
        { name: 'Bash', level: 88 }
      ]
    },
    {
      icon: Globe,
      title: 'WEB TECHNOLOGIES',
      color: 'text-green-400',
      skills: [
        { name: 'React', level: 92 },
        { name: 'Node.js', level: 88 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      icon: Database,
      title: 'DATABASES',
      color: 'text-purple-400',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'SQLite', level: 88 }
      ]
    },
    {
      icon: Terminal,
      title: 'OPERATING SYSTEMS',
      color: 'text-yellow-400',
      skills: [
        { name: 'Linux', level: 95 },
        { name: 'Windows', level: 90 },
        { name: 'Kali Linux', level: 92 },
        { name: 'Ubuntu', level: 90 },
        { name: 'CentOS', level: 85 }
      ]
    },
    {
      icon: Cpu,
      title: 'FRAMEWORKS',
      color: 'text-cyan-400',
      skills: [
        { name: 'Django', level: 88 },
        { name: 'Flask', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-mono mb-4">{'> SKILLS_MATRIX.EXE'}</div>
          <h2 className="text-4xl md:text-6xl font-bold orbitron gradient-text mb-6">
            TECHNICAL ARSENAL
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-cyan-500 transition-all duration-300 hover-scale group"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors ${category.color}`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <div className="text-xs font-mono text-gray-500">
                    {'> level_' + (index + 1) + '.module'}
                  </div>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-mono text-sm">{skill.name}</span>
                      <span className={`text-xs font-bold ${category.color}`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${
                            category.color.includes('red') ? '#ef4444' :
                            category.color.includes('blue') ? '#3b82f6' :
                            category.color.includes('green') ? '#10b981' :
                            category.color.includes('purple') ? '#8b5cf6' :
                            category.color.includes('yellow') ? '#f59e0b' :
                            '#06b6d4'
                          }, ${
                            category.color.includes('red') ? '#f87171' :
                            category.color.includes('blue') ? '#60a5fa' :
                            category.color.includes('green') ? '#34d399' :
                            category.color.includes('purple') ? '#a78bfa' :
                            category.color.includes('yellow') ? '#fbbf24' :
                            '#67e8f9'
                          })`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Module Status */}
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-500">STATUS:</span>
                  <span className="text-green-400">OPERATIONAL</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold orbitron text-white mb-4">
              CERTIFICATIONS & CREDENTIALS
            </h3>
            <div className="w-16 h-0.5 bg-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'CEH', full: 'Certified Ethical Hacker', status: 'IN_PROGRESS' },
              { name: 'OSCP', full: 'Offensive Security Certified Professional', status: 'IN_PROGRESS' },
              { name: 'CISSP', full: 'Certified Information Systems Security Professional', status: 'PLANNED' },
              { name: 'CISM', full: 'Certified Information Security Manager', status: 'PLANNED' }
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-gray-900/70 border border-gray-600 rounded-lg p-4 text-center hover:border-cyan-500 transition-colors"
              >
                <div className="text-2xl font-bold orbitron text-cyan-400 mb-2">
                  {cert.name}
                </div>
                <div className="text-sm text-gray-400 mb-3">
                  {cert.full}
                </div>
                <div className={`text-xs font-mono px-2 py-1 rounded ${
                  cert.status === 'ACTIVE' ? 'bg-green-500/20 text-green-400' :
                  cert.status === 'IN_PROGRESS' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {cert.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;