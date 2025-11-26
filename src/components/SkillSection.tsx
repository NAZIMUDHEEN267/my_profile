import React from 'react';
import { SKILLS } from '../constants';

const SkillsSection: React.FC = () => {
  return (
    <section className="py-16" id='skills'>
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-10 text-center">Technical Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((category, idx) => (
            <div key={idx} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700/50 hover:bg-slate-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;