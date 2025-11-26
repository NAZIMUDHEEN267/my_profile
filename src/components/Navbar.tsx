import React, { useState, useEffect } from 'react';
import { Menu, X, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-[1280px] mx-auto z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
            <Database className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">NAZIMUDHEEN TI</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <motion.a
            href="/resume.pdf"
            download="Nazim_Resume.pdf"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg transition-all duration-300"
          >
            📄 Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-gray-800"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <motion.a
                href="https://github.com/NAZIMUDHEEN267/my_portfolio/blob/main/src/resume.pdf"
                download="Nazimudheenti_Resume.pdf"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg transition-all duration-300"
              >
                📄 Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;