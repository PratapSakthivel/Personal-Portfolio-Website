import React from 'react';
import { SectionId } from '../types';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  // We duplicate the skills list to create a seamless infinite scroll effect
  const marqueeSkills = [...SKILLS, ...SKILLS];

  return (
    <section id={SectionId.SKILLS} className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">My Stack</h2>
        <h3 className="text-3xl font-bold text-slate-900">Technologies & Tools</h3>
      </div>

      <div className="relative w-full">
        {/* Gradient Masks for fade effect at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Marquee Container */}
        <div className="flex w-full overflow-hidden">
          {/* Moving Track - Pauses on Hover */}
          <div className="flex animate-scroll hover-pause gap-8 py-4">
            {marqueeSkills.map((skill, index) => (
              <div 
                key={`${skill.name}-${index}`}
                className="flex flex-col items-center justify-center w-40 h-48 bg-white rounded-2xl shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex-shrink-0 cursor-pointer group"
              >
                <div className="w-20 h-20 mb-4 p-2 relative">
                  <div className="absolute inset-0 bg-primary/5 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-full h-full object-contain drop-shadow-sm animate-float relative z-10"
                    style={{ animationDelay: `${index * 200}ms` }}
                    loading="lazy"
                  />
                </div>
                <h4 className="text-lg font-bold text-slate-800">{skill.name}</h4>
                <div className="mt-2 text-sm font-medium text-slate-400">
                  {skill.level}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-center text-slate-400 text-sm mt-8">
        Hover to pause and explore
      </p>
    </section>
  );
};

export default Skills;