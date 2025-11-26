import React from 'react';
import { ExternalLink, Smartphone, Globe } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-16" id='projects'>
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 flex flex-col group hover:border-slate-600 transition-colors">
              <div className="p-6 md:p-8 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.links?.playStore && <Smartphone size={18} className="text-slate-500 hover:text-green-400 cursor-pointer" />}
                    {project.links?.web && <Globe size={18} className="text-slate-500 hover:text-blue-400 cursor-pointer" />}
                  </div>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-slate-800 text-blue-300 rounded border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {project.links && (
                <div className="bg-slate-950/50 border-t border-slate-800 px-6 py-4 flex gap-4 text-sm">
                   {project.links.playStore && (
                     <a href={project.links.playStore} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors">
                        <ExternalLink size={14} /> Play Store
                     </a>
                   )}
                   {project.links.appStore && (
                     <a href={project.links.appStore} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors">
                        <ExternalLink size={14} /> App Store
                     </a>
                   )}
                     {project.links.web && (
                     <a href={project.links.web} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors">
                        <ExternalLink size={14} /> Web App
                     </a>
                   )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;