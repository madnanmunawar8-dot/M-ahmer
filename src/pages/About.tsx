import { motion } from 'motion/react';
import { COMPANY_DETAILS } from '@/src/constants';
import { Award, Globe, Heart, Users, Target, Rocket } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif mb-8 italic">Our Story</h1>
            <p className="text-xl text-brand-charcoal/60 max-w-3xl mx-auto leading-relaxed">
              Founded on the belief that a well-crafted book is the most enduring cultural legacy, {COMPANY_DETAILS.name} sets the gold standard in premium publishing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy & History */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl">
             <img src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&q=80&w=800" alt="Office" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-8">
             <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">The Journey</span>
             <h2 className="text-4xl md:text-5xl">A Decade of <span className="italic">Excellence</span></h2>
             <p className="text-lg text-brand-charcoal/70 leading-relaxed italic border-l-4 border-brand-gold pl-6 py-2">
                "{COMPANY_DETAILS.history}"
             </p>
             <p className="text-brand-charcoal/60 leading-relaxed">
                We believe that the publishing industry has lost touch with the visceral experience of reading. 
                Mass-produced volumes and low-quality digital exports have diluted the sanctity of the text. 
                At Aurelius, we return to the roots of publishing: artisanal care, rigorous editing, and 
                breathtaking aesthetic design.
             </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-brand-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Founded", value: COMPANY_DETAILS.founded },
            { label: "Bestsellers", value: "240+" },
            { label: "Countries", value: "54" },
            { label: "Languages", value: "18" }
          ].map((stat, i) => (
            <div key={i}>
              <h4 className="text-4xl md:text-6xl font-serif text-brand-gold mb-2">{stat.value}</h4>
              <p className="text-xs uppercase tracking-widest text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
           <div className="p-12 bg-[#F9F8F6] rounded-[3rem] space-y-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-gold shadow-sm mb-6">
                <Target size={30} />
              </div>
              <h3 className="text-3xl font-serif italic">Our Mission</h3>
              <p className="text-brand-charcoal/60 leading-relaxed text-lg">
                {COMPANY_DETAILS.mission}
              </p>
           </div>
           <div className="p-12 bg-brand-navy rounded-[3rem] text-white space-y-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-brand-gold mb-6">
                <Rocket size={30} />
              </div>
              <h3 className="text-3xl font-serif italic">Our Vision</h3>
              <p className="text-white/60 leading-relaxed text-lg">
                {COMPANY_DETAILS.vision}
              </p>
           </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white border-t border-brand-charcoal/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl mb-6">Leadership <span className="italic">Team</span></h2>
              <p className="text-brand-charcoal/60">Led by visionaries from the world's most prestigious publishing houses.</p>
           </div>
           <div className="grid md:grid-cols-3 gap-12">
              {[
                { name: "Julian Vane", role: "Founder & Editor-in-Chief", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
                { name: "Elena Rossi", role: "Creative Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
                { name: "Alistair Thorne", role: "Director of Global Distribution", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" }
              ].map((member, i) => (
                <div key={i} className="group">
                  <div className="aspect-square overflow-hidden rounded-[2rem] mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  </div>
                  <h4 className="text-xl font-serif">{member.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-brand-gold font-bold mt-1">{member.role}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
