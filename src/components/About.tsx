import React from 'react';
import { User, Smartphone, Database, Layers } from 'lucide-react';
import { ABOUT_CONTENT } from '../constants';

const AboutSection: React.FC = () => {
  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Smartphone size={24} className="text-blue-400" />;
      case 1: return <Database size={24} className="text-purple-400" />;
      default: return <Layers size={24} className="text-green-400" />;
    }
  };

  return (
    <section className="py-20 bg-slate-900/50 border-y border-slate-800/50" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Main Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <User size={16} />
              <span>About Me</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Transforming ideas into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Scalable Digital Solutions
              </span>
            </h2>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {ABOUT_CONTENT.paragraph}
            </p>

            <div className="flex gap-4">
              <a href="#contact" className="px-6 py-3 bg-white text-slate-950 font-semibold rounded-lg hover:bg-slate-200 transition-colors">
                Contact Me
              </a>
              <a href="#projects" className="px-6 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                View Projects
              </a>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:w-1/2 w-full">
            <div className="grid gap-6">
              {ABOUT_CONTENT.highlights.map((item, idx) => (
                <div key={idx} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all hover:translate-x-2 group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 group-hover:border-slate-700 transition-colors">
                      {getIcon(idx)}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;