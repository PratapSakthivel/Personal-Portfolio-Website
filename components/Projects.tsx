import React, { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { SectionId, Project } from '../types';
import { PROJECTS } from '../constants';
import ProjectModal from './ProjectModal';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-surface relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Portfolio</h2>
          <h3 className="text-3xl font-bold text-slate-900">Selected Works</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] h-full"
            >
              <div 
                className="aspect-w-16 aspect-h-9 overflow-hidden relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium flex items-center bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <Eye className="w-4 h-4 mr-2" /> View Details
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {(project.demoUrl || project.repoUrl) && (
                    <a 
                      href={project.demoUrl || project.repoUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-slate-400 hover:text-primary transition-colors"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </a>
                  )}
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 h-12 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="inline-block px-2.5 py-1 text-xs font-semibold text-primary bg-primary/5 border border-primary/10 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                   <button 
                     onClick={() => setSelectedProject(project)}
                     className="w-full py-2.5 px-4 rounded-lg bg-slate-50 text-slate-600 text-sm font-semibold hover:bg-slate-100 hover:text-primary transition-colors border border-slate-200 flex items-center justify-center"
                   >
                     <Eye className="w-4 h-4 mr-2" /> View Details
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;