import { motion } from 'motion/react';
import { SERVICES, BOOKS } from '@/src/constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-[#0A192F] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-8xl font-serif mb-8 italic">Our Services</h1>
            <p className="text-xl text-white/60 leading-relaxed">
              We provide a comprehensive ecosystem for authors, scholars, and institutions—where tradition meets digital innovation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`grid md:grid-cols-2 gap-20 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={idx % 2 !== 0 ? 'md:order-2' : ''}>
                <span className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block">0{idx + 1}</span>
                <h2 className="text-4xl md:text-5xl font-serif mb-8">{service.title}</h2>
                <p className="text-brand-charcoal/60 text-lg leading-relaxed mb-10">
                  {service.description}
                  At Aurelius, we treat every manuscript as a potential classic. Our specialized teams work across genres to ensure your unique value is amplified and protected.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                   {service.benefits.map(benefit => (
                     <div key={benefit} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                        <span className="text-sm text-brand-charcoal/70">{benefit}</span>
                     </div>
                   ))}
                </div>
                <Link to="/contact" className="inline-flex items-center gap-3 bg-brand-charcoal text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors">
                  Inquire Now <ArrowRight size={14} />
                </Link>
              </div>
              <div className={`relative ${idx % 2 !== 0 ? 'md:order-1' : ''}`}>
                 <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                    <img 
                      src={`https://images.unsplash.com/photo-${1500000000000 + idx * 10000000}?auto=format&fit=crop&q=80&w=800`} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = BOOKS[idx % BOOKS.length].cover;
                      }}
                    />
                 </div>
                 <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold rounded-full flex items-center justify-center text-white font-serif text-3xl shadow-xl">
                   0{idx + 1}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Starter */}
      <section className="py-24 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl mb-6 italic">Investment</h2>
              <p className="text-brand-charcoal/60">Quality of this caliber is an investment in your career and legacy. We offer flexible tiers based on your goals.</p>
           </div>
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Artisanal", price: "2,500", highlight: false, features: ["Structural Editing", "Custom Cover", "eBook Production", "Global Distribution"] },
                { name: "Prestige", price: "7,500", highlight: true, features: ["Everything in Artisanal", "Hardcover Printing", "Dedicated Publicist", "Social Media Campaign", "Major Retail Placement"] },
                { name: "Legacy", price: "15,000+", highlight: false, features: ["Bespoke Concierge Path", "Film/TV Rights Consultation", "International Book Tour", "Audiobook Production", "White-Glove Design"] }
              ].map((tier, i) => (
                <div key={i} className={`p-12 rounded-[3rem] border transition-all duration-500 ${tier.highlight ? 'bg-brand-charcoal text-white border-brand-charcoal scale-105 shadow-2xl' : 'bg-white border-brand-charcoal/5 hover:border-brand-gold'}`}>
                   <h3 className="text-2xl font-serif mb-2">{tier.name}</h3>
                   <div className="flex items-baseline gap-2 mb-8">
                      <span className="text-brand-gold text-sm font-bold uppercase tracking-widest">Starting at</span>
                      <span className="text-4xl font-serif font-bold">${tier.price}</span>
                   </div>
                   <ul className="space-y-4 mb-12 flex-1">
                      {tier.features.map(f => (
                        <li key={f} className="text-sm opacity-60 flex gap-2 items-center italic">
                           <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                           {f}
                        </li>
                      ))}
                   </ul>
                   <button className={`w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${tier.highlight ? 'bg-brand-gold text-brand-charcoal hover:bg-white' : 'border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white'}`}>
                     Get Details
                   </button>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
