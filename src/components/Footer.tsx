import React from 'react';
import { Github, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-dark border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} NAZIMUDHEEN TI. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/NAZIMUDHEEN267" className="text-gray-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/nazimudheenti/?originalSubdomain=in" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;