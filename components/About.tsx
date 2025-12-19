import React from 'react';
import { SectionId } from '../types';
import { PERSONAL_INFO, EXPERIENCE, EDUCATION } from '../constants';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-surface relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Biography with Image */}
        <div className="mb-24">
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">About Me</h2>
          <h3 className="text-3xl font-bold text-slate-900 mb-12">Biography</h3>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
            {/* Image Column */}
            <div className="lg:w-1/3 w-full max-w-sm">
              <div className="relative group">
                {/* Creative border/background */}
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={PERSONAL_INFO.profileImageUrl} 
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop";
                    }}
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60"></div>
                </div>
              </div>
            </div>
            
            {/* Text Column */}
            <div className="lg:w-2/3 w-full">
              <p className="text-xl text-slate-800 font-medium leading-relaxed mb-6">
                I'm a solution-oriented developer who blends technical expertise with creative problem-solving.
              </p>
              <div className="space-y-6 text-lg text-slate-600 leading-8">
                {PERSONAL_INFO.about.split('\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              
              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</span>
                  <span className="text-slate-900 font-medium">{PERSONAL_INFO.email}</span>
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Location</span>
                  <span className="text-slate-900 font-medium">Dharapuram | Tiruppur </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Career</h2>
            <h3 className="text-2xl font-bold text-slate-900 mb-10">Experience</h3>
            
            <div className="space-y-12">
              {EXPERIENCE.map((exp) => (
                <div key={exp.id} className="group relative pl-8 border-l border-slate-200 hover:border-primary transition-colors">
                  <span className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-primary"></span>
                  <div className="flex flex-col">
                    <span className="text-sm font-mono text-primary font-bold mb-1">{exp.period}</span>
                    <h4 className="text-xl font-semibold text-slate-900 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h4>
                    <div className="text-base text-slate-500 font-medium mb-3">{exp.company}</div>
                    <p className="text-slate-600 leading-7">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Learning</h2>
            <h3 className="text-2xl font-bold text-slate-900 mb-10">Education</h3>
            
            <div className="space-y-12">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="group relative pl-8 border-l border-slate-200 hover:border-primary transition-colors">
                  <span className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-primary"></span>
                  <div className="flex flex-col">
                    <span className="text-sm font-mono text-primary font-bold mb-1">{edu.period}</span>
                    <h4 className="text-xl font-semibold text-slate-900 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h4>
                    <div className="text-base text-slate-500 font-medium mb-3">{edu.institution}</div>
                    {edu.description && (
                      <p className="text-slate-600 leading-7">
                        {edu.description}
                      </p>
                    )}
                    {(edu.cgpa || edu.percentage) && (
                      <div className="mt-2 text-sm text-slate-500">
                        {edu.cgpa && <span>CGPA: {edu.cgpa}</span>}
                        {edu.cgpa && edu.percentage && <span> | </span>}
                        {edu.percentage && <span>Percentage: {edu.percentage}</span>}
                      </div>
                    )}
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

export default About;