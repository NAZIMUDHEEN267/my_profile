import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900/30" id='experience'>
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-12 text-center">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCE.map((job) => (
            <div key={job.id} className="relative pl-8 md:pl-0">
              {/* Timeline line for desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>
              
              <div className={`md:flex items-start justify-between gap-8 group ${Number(job.id) % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Date Side */}
                <div className={`hidden md:block w-5/12 ${Number(job.id) % 2 === 0 ? 'text-left' : 'text-right'} pt-1`}>
                  <div className="text-blue-400 font-mono text-sm mb-1">{job.period}</div>
                  <div className="text-slate-500 text-sm flex items-center gap-1 justify-end">
                    {Number(job.id) % 2 !== 0 && <><MapPin size={12} /> {job.location}</>}
                    {Number(job.id) % 2 === 0 && <>{job.location} <MapPin size={12} /></>}
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full md:-translate-x-1/2 mt-1.5 ring-4 ring-slate-900 z-10"></div>

                {/* Content Side */}
                <div className="w-full md:w-5/12 bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all">
                  <div className="md:hidden flex flex-col mb-4">
                     <span className="text-blue-400 font-mono text-xs mb-1">{job.period}</span>
                     <span className="text-slate-500 text-xs flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white">{job.role}</h3>
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                    <Briefcase size={14} />
                    <span>{job.company}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 bg-slate-600 rounded-full flex-shrink-0"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;