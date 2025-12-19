import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { SectionId } from '../types';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section id={SectionId.CERTIFICATIONS} className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-teal-50 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Qualifications</h2>
          <h3 className="text-3xl font-bold text-slate-900">Certifications & Licenses</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => {
            const Wrapper = cert.url ? 'a' : 'div';
            const wrapperProps = cert.url ? {
              href: cert.url,
              target: "_blank",
              rel: "noreferrer",
              className: "block h-full group text-left"
            } : {
              className: "block h-full group text-left"
            };

            return (
              <Wrapper key={cert.id} {...wrapperProps}>
                <div 
                  className={`bg-white rounded-xl p-6 shadow-sm border border-slate-100 transition-all duration-300 flex flex-col h-full ${
                    cert.url ? 'hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 cursor-pointer' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Award className="w-6 h-6" />
                    </div>
                    {cert.url && (
                      <div className="text-slate-400 group-hover:text-primary transition-colors p-1">
                        <ExternalLink className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                  
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h4>
                  
                  <div className="mt-auto pt-4 border-t border-slate-50 flex flex-col gap-2">
                    <div className="flex items-center text-sm font-medium text-slate-700">
                      <span className="bg-slate-100 px-2 py-1 rounded text-xs mr-2 text-slate-500">Issuer</span>
                      {cert.issuer}
                    </div>
                    <div className="flex items-center text-sm text-slate-500">
                      <Calendar className="w-3.5 h-3.5 mr-2" />
                      <span>Issued {cert.date}</span>
                    </div>
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;