import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, User, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'EMAIL',
      value: 'starlinghacker@gmail.com',
      href: 'mailto:starlinghacker@gmail.com'
    },
    {
      icon: Phone,
      label: 'PHONE',
      value: '+977 9702192255',
      href: 'https://wa.me/+9779702192255'
    },
    {
      icon: MapPin,
      label: 'LOCATION',
      value: 'Nepal',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-mono mb-4">{'> CONTACT_PROTOCOL.EXE'}</div>
          <h2 className="text-4xl md:text-6xl font-bold orbitron gradient-text mb-6">
            ESTABLISH CONNECTION
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-8 backdrop-blur-sm">
              <div className="font-mono text-green-400 mb-6">
                {'> cat /dev/contact_info'}
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <div className="p-3 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors">
                      <info.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm font-mono text-gray-500">{info.label}</div>
                      <div className="text-lg font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="text-sm font-mono text-gray-500 mb-4">SOCIAL_NETWORKS:</div>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-cyan-400 hover:text-white transition-all duration-200 hover-scale"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Terminal Status */}
            <div className="bg-black border border-green-500/30 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-mono text-green-400 text-sm">SYSTEM STATUS</span>
              </div>
              
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Response Time:</span>
                  <span className="text-green-400">{'< 24 hours'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Availability:</span>
                  <span className="text-green-400">ONLINE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Security Level:</span>
                  <span className="text-cyan-400">ENCRYPTED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8">
            <div className="font-mono text-cyan-400 mb-6">
              {'> initialize_secure_message.sh'}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-mono text-gray-400">
                    <User className="w-4 h-4 inline mr-2" />
                    NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white font-mono focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Enter your name..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-mono text-gray-400">
                    <Mail className="w-4 h-4 inline mr-2" />
                    EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white font-mono focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Enter your email..."
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-mono text-gray-400">
                  SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white font-mono focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="Enter subject..."
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-mono text-gray-400">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white font-mono focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  placeholder="Enter your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-all duration-300 hover-glow btn-pulse flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>TRANSMITTING...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>SEND_MESSAGE</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-gray-700">
              <div className="text-xs font-mono text-gray-500">
                {'> Message encrypted with AES-256 | Last ping: ' + new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;