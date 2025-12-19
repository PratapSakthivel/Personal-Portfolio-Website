import React from 'react';
import { ArrowRight, Github, Linkedin, Download, Code2, Terminal, BookOpen } from 'lucide-react';
import { SectionId } from '../types';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-200 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-200 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <div className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6 animate-fade-in">
              Hello, I'm
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text mb-6">
              {PERSONAL_INFO.name}
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-6">
              {PERSONAL_INFO.title}
            </h2>
            
            <p className="text-lg text-muted leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
              {PERSONAL_INFO.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download
                className="px-8 py-3.5 rounded-full bg-primary text-white font-bold hover:bg-secondary transition-all flex items-center shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2 w-4 h-4" /> Download Resume
              </a>
              <a
                href={`#${SectionId.PROJECTS}`}
                className="px-8 py-3.5 rounded-full bg-surface border border-slate-200 text-muted font-medium hover:bg-slate-50 transition-colors flex items-center shadow-sm hover:shadow-md"
              >
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-6 flex-wrap">
              {PERSONAL_INFO.socials.github && (
                <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" title="GitHub" className="text-muted hover:text-text transition-colors transform hover:scale-110">
                  <Github className="w-7 h-7" />
                </a>
              )}
              {PERSONAL_INFO.socials.linkedin && (
                <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" className="text-muted hover:text-blue-600 transition-colors transform hover:scale-110">
                  <Linkedin className="w-7 h-7" />
                </a>
              )}
              {PERSONAL_INFO.socials.leetcode && (
                <a href={PERSONAL_INFO.socials.leetcode} target="_blank" rel="noreferrer" title="LeetCode" className="text-muted hover:text-yellow-600 transition-colors transform hover:scale-110">
                  <Code2 className="w-7 h-7" />
                </a>
              )}
              {PERSONAL_INFO.socials.hackerrank && (
                <a href={PERSONAL_INFO.socials.hackerrank} target="_blank" rel="noreferrer" title="HackerRank" className="text-muted hover:text-green-600 transition-colors transform hover:scale-110">
                  <Terminal className="w-7 h-7" />
                </a>
              )}
              {PERSONAL_INFO.socials.geeksforgeeks && (
                <a href={PERSONAL_INFO.socials.geeksforgeeks} target="_blank" rel="noreferrer" title="GeeksForGeeks" className="text-muted hover:text-green-700 transition-colors transform hover:scale-110">
                  <BookOpen className="w-7 h-7" />
                </a>
              )}
            </div>
          </div>

          {/* Image Container */}
          <div className="flex-1 flex justify-center md:justify-end relative order-1 md:order-2">
             <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Decorative Rings */}
                <div className="absolute inset-[-10%] border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-[-5%] border border-secondary/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-[40px] opacity-30"></div>
                
                {/* Main Profile Image */}
                <div className="relative w-full h-full rounded-full bg-white p-2 shadow-2xl border border-white/50 overflow-hidden">
                   <img 
                     src={PERSONAL_INFO.profileImageUrl} 
                     alt={PERSONAL_INFO.name}
                     className="w-full h-full object-cover rounded-full transition-transform duration-700 hover:scale-110"
                     onError={(e) => {
                       (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop";
                     }}
                   />
                </div>
                
                {/* Decorative Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 animate-float">
                  <Code2 className="w-8 h-8 text-primary" />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;