import React from 'react';
import { Mail, Github, Linkedin, Code2, Terminal, BookOpen } from 'lucide-react';
import { SectionId } from '../types';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-50/50 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-bold text-text mb-6">Get In Touch</h2>
        <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
          I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        
        <div className="mb-12">
          <div className="inline-block p-[2px] rounded-full bg-gradient-primary">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="flex items-center justify-center px-8 py-4 bg-surface rounded-full text-text text-lg font-bold hover:bg-slate-50 transition-colors"
            >
              <Mail className="w-5 h-5 mr-3 text-primary" />
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-8">
          {PERSONAL_INFO.socials.github && (
            <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" title="GitHub" className="text-muted hover:text-text hover:scale-110 transition-all">
              <Github className="w-8 h-8" />
            </a>
          )}
          {PERSONAL_INFO.socials.linkedin && (
            <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" className="text-muted hover:text-blue-600 hover:scale-110 transition-all">
              <Linkedin className="w-8 h-8" />
            </a>
          )}
          {PERSONAL_INFO.socials.leetcode && (
            <a href={PERSONAL_INFO.socials.leetcode} target="_blank" rel="noreferrer" title="LeetCode" className="text-muted hover:text-yellow-600 hover:scale-110 transition-all">
              <Code2 className="w-8 h-8" />
            </a>
          )}
          {PERSONAL_INFO.socials.hackerrank && (
            <a href={PERSONAL_INFO.socials.hackerrank} target="_blank" rel="noreferrer" title="HackerRank" className="text-muted hover:text-green-600 hover:scale-110 transition-all">
              <Terminal className="w-8 h-8" />
            </a>
          )}
          {PERSONAL_INFO.socials.geeksforgeeks && (
            <a href={PERSONAL_INFO.socials.geeksforgeeks} target="_blank" rel="noreferrer" title="GeeksForGeeks" className="text-muted hover:text-green-700 hover:scale-110 transition-all">
              <BookOpen className="w-8 h-8" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;