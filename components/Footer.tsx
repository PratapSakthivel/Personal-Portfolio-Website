import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { SectionId } from '../types';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              {PERSONAL_INFO.name.split(' ')[0]}<span className="text-primary">.Dev</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Crafting digital experiences with passion and precision. Building the web of tomorrow, one pixel at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href={`#${SectionId.ABOUT}`} className="hover:text-primary transition-colors">About</a></li>
              <li><a href={`#${SectionId.SKILLS}`} className="hover:text-primary transition-colors">Skills</a></li>
              <li><a href={`#${SectionId.PROJECTS}`} className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href={`#${SectionId.CERTIFICATIONS}`} className="hover:text-primary transition-colors">Certifications</a></li>
              <li><a href={`#${SectionId.CONTACT}`} className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <div className="flex gap-4">
              {PERSONAL_INFO.socials.github && (
                <a 
                  href={PERSONAL_INFO.socials.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {PERSONAL_INFO.socials.linkedin && (
                <a 
                  href={PERSONAL_INFO.socials.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-primary transition-colors group"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;