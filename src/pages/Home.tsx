import { motion } from 'motion/react';
import { ArrowRight, Star, Globe, Clock, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, BOOKS, TESTIMONIALS, PROCESS_STEPS, COMPANY_DETAILS } from '@/src/constants';
import { cn } from '@/src/lib/utils';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-brand-gold text-xs font-bold tracking-[0.3em] uppercase mb-6">
              Est. {COMPANY_DETAILS.founded} • Global Distribution
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.95] mb-8 tracking-tighter">
              Transform Your Story <br />
              Into A Published <span className="italic rainbow-text">Success</span>.
            </h1>
            <p className="text-lg text-brand-charcoal/70 mb-10 max-w-lg leading-relaxed font-sans">
              Professional publishing solutions for authors, researchers, and businesses worldwide.
              Take your manuscript from concept to global bestseller with Elite Pages.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/submit" className="bg-brand-charcoal text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-gold transition-all flex items-center gap-2 group">
                Publish Your Book <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="border border-brand-charcoal px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-charcoal hover:text-white transition-all">
                Free Consultation
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="hidden md:block relative h-full min-h-[500px]"
          >
             <div className="absolute inset-0 bg-brand-gold/10 rounded-[4rem] rotate-3 -z-10" />
             <div className="grid grid-cols-2 gap-4 h-full">
               <div className="space-y-4 pt-12">
                 <img src={BOOKS[0].cover} alt="Featured Book" className="w-full h-80 object-cover rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500" />
                 <img src={BOOKS[1].cover} alt="Featured Book" className="w-full h-64 object-cover rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500" />
               </div>
               <div className="space-y-4">
                 <img src={BOOKS[2].cover} alt="Featured Book" className="w-full h-64 object-cover rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500" />
                 <img src={BOOKS[3].cover} alt="Featured Book" className="w-full h-80 object-cover rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500" />
               </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl mb-6">World-Class <span className="italic">Solutions</span></h2>
              <p className="text-brand-charcoal/60 text-lg">From artisanal editing to global distribution, we provide everything an author needs to leave their mark.</p>
            </div>
            <Link to="/services" className="text-brand-gold font-bold uppercase tracking-widest text-xs border-b border-brand-gold pb-1 hover:text-brand-charcoal hover:border-brand-charcoal transition-colors">
              View All Services
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <motion.div 
                key={service.id}
                whileHover={{ y: -10 }}
                className="group p-10 border border-brand-charcoal/5 bg-[#F9F8F6] hover:bg-brand-charcoal hover:text-white transition-all duration-500 rounded-3xl"
              >
                <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center rounded-xl mb-8 group-hover:bg-white/10">
                  <span className="text-brand-gold font-serif text-xl">0{idx + 1}</span>
                </div>
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="opacity-60 mb-8 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-10">
                  {service.benefits.map(benefit => (
                    <li key={benefit} className="text-sm flex items-center gap-2">
                      <div className="w-1 h-1 bg-brand-gold rounded-full" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link to={`/services#${service.id}`} className="text-xs uppercase tracking-widest font-bold group-hover:text-brand-gold transition-colors inline-flex items-center gap-2">
                  Learn More <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-24 bg-[#0A192F] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl mb-6">Recent <span className="italic">Releases</span></h2>
            <p className="text-white/60">Discover the latest masterpieces from our community of visionary authors.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BOOKS.map(book => (
              <motion.div key={book.id} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6 rounded-lg aspect-[2/3]">
                  <img src={book.cover} alt={book.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <button className="bg-white text-brand-charcoal px-6 py-2 text-xs font-bold uppercase tracking-widest">Quick View</button>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">{book.genre}</span>
                  <h4 className="text-xl font-serif group-hover:text-brand-gold transition-colors">{book.title}</h4>
                  <p className="text-sm text-white/50">{book.author}</p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="font-serif">${book.price.toFixed(2)}</span>
                    <div className="flex items-center gap-1 text-xs text-brand-gold">
                      <Star size={12} fill="currentColor" />
                      <span>{book.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
           <div>
              <h2 className="text-4xl md:text-6xl mb-12">The <span className="italic">Elite</span> Standard</h2>
              <div className="space-y-12">
                {[
                  { icon: <Users />, title: "Concierge Editing", desc: "One-on-one structural and development editing with industry veterans." },
                  { icon: <Globe />, title: "Global Reach", desc: "Strategic distribution into 30,000+ bookstores world-wide across five continents." },
                  { icon: <Clock />, title: "Efficiency", desc: "A streamlined 6-month path from final manuscript to global distribution." },
                  { icon: <Award />, title: "Prestige", desc: "Award-winning cover design and typesetting derived from the golden ratio." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-14 h-14 bg-[#F9F8F6] rounded-full flex items-center justify-center shrink-0 text-brand-gold shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl mb-2 font-serif">{item.title}</h4>
                      <p className="text-brand-charcoal/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
           <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&q=80&w=800" alt="Publishing Process" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-brand-gold p-10 rounded-3xl text-white max-w-xs shadow-xl hidden lg:block">
                 <p className="text-2xl font-serif mb-4">"They don't just print books, they build intellectual legacies."</p>
                 <span className="text-xs uppercase tracking-widest font-bold">— New York Times Review</span>
              </div>
           </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl mb-6">The Journey to <span className="italic">Immortal</span></h2>
            <p className="text-brand-charcoal/60">A measured, artisanal process from first word to first reader.</p>
          </div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 py-10 overflow-hidden">
             {/* Path line */}
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-charcoal/10 hidden md:block" />
             {PROCESS_STEPS.map((step, idx) => (
               <div key={idx} className="relative flex flex-col items-center text-center z-10 w-full md:w-48">
                  <div className="w-12 h-12 bg-white border border-brand-charcoal rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <span className="font-serif font-bold text-brand-gold">{idx + 1}</span>
                  </div>
                  <h4 className="text-lg font-serif mb-2">{step.title}</h4>
                  <p className="text-xs text-brand-charcoal/50 leading-relaxed px-4">{step.description}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-brand-charcoal">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 italic">Common Queries</h2>
            <p className="text-brand-charcoal/60 dark:text-white/60">Everything you need to know about publishing with Elite Pages.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "How long does the publishing process take?", a: "Typically, it takes 6-9 months from manuscript acceptance to global distribution, ensuring artisanal quality at every stage." },
              { q: "Do I retain ownership of my rights?", a: "Yes, our models are designed to empower authors. You retain your intellectual property while we act as your strategic growth partner." },
              { q: "What genres do you specialize in?", a: "We excel in Literary Fiction, High-Impact Non-Fiction, Academic Research, and Prestige Memoires." },
              { q: "How do you handle global distribution?", a: "We orchestrate distribution across 30,000+ points including major retailers, independent boutiques, and academic institutions worldwide." }
            ].map((faq, i) => (
              <details key={i} className="group bg-[#F9F8F6] dark:bg-white/5 rounded-2xl p-6 cursor-pointer border border-transparent hover:border-brand-gold transition-all duration-300">
                <summary className="list-none flex justify-between items-center font-serif text-lg py-2">
                  {faq.q}
                  <ArrowRight size={18} className="transition-transform group-open:rotate-90 text-brand-gold" />
                </summary>
                <p className="mt-4 text-brand-charcoal/60 dark:text-white/60 leading-relaxed italic">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-5xl mx-auto rainbow-bg rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32" />
          
          <h2 className="text-4xl md:text-6xl mb-8 relative z-10 font-bold drop-shadow-lg">Ready to Shape <span className="italic">History?</span></h2>
          <p className="text-white/90 mb-12 max-w-2xl mx-auto text-lg font-medium drop-shadow-md">
            Whether you're an established writer or a first-time author, we have the tools, 
            vision, and commitment to elevate your work.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Link to="/contact" className="bg-white text-brand-charcoal px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-lg">
              Schedule Consultation
            </Link>
            <Link to="/submit" className="bg-brand-charcoal/30 backdrop-blur-sm border border-white/40 text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-brand-charcoal transition-all shadow-lg">
              Submit Manuscript
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
