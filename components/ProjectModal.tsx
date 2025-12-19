import React, { useEffect } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface rounded-2xl shadow-2xl animate-fade-in-up flex flex-col">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white rounded-full backdrop-blur-md transition-colors text-slate-600 hover:text-slate-900 shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Header */}
        <div className="w-full h-64 sm:h-80 relative flex-shrink-0">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="inline-block px-2.5 py-1 text-xs font-semibold text-white bg-white/20 border border-white/30 rounded-md backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">About the Project</h3>
            <p className="text-slate-600 leading-relaxed text-base">
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
             {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-secondary transition-colors shadow-lg shadow-primary/20"
              >
                <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center px-6 py-3 rounded-lg bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-colors border border-slate-200"
              >
                <Github className="w-4 h-4 mr-2" /> View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;