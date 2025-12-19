import React from 'react';
import { Quote } from 'lucide-react';
import { SectionId } from '../types';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id={SectionId.TESTIMONIALS} className="py-24 bg-surface relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Social Proof</h2>
          <h3 className="text-3xl font-bold text-slate-900">What People Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-background p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 relative group"
            >
              <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.imageUrl} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              
              <p className="text-slate-600 text-sm leading-relaxed italic relative z-10">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;