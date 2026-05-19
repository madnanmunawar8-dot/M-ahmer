import { motion } from 'motion/react';
import { COMPANY_DETAILS } from '@/src/constants';
import { Mail, Phone, MapPin, Send, MessageSquare, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif mb-8 italic">Let's Connect</h1>
            <p className="text-xl text-brand-charcoal/60 max-w-2xl mx-auto leading-relaxed">
              Experience the Elite difference. Our team is ready to discuss your manuscript or institutional needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-serif mb-8 italic">Contact Details</h2>
              <div className="space-y-8">
                 <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-[#F9F8F6] rounded-full flex items-center justify-center text-brand-gold shrink-0">
                       <MapPin size={24} />
                    </div>
                    <div>
                       <h4 className="text-sm font-bold uppercase tracking-widest mb-1">Headquarters</h4>
                       <p className="text-brand-charcoal/60 leading-relaxed font-serif text-lg">{COMPANY_DETAILS.hq}</p>
                    </div>
                 </div>
                 <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-[#F9F8F6] rounded-full flex items-center justify-center text-brand-gold shrink-0">
                       <Mail size={24} />
                    </div>
                    <div>
                       <h4 className="text-sm font-bold uppercase tracking-widest mb-1">Email Inquiry</h4>
                       <p className="text-brand-charcoal/60 leading-relaxed font-serif text-lg">{COMPANY_DETAILS.email}</p>
                    </div>
                 </div>
                 <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-[#F9F8F6] rounded-full flex items-center justify-center text-brand-gold shrink-0">
                       <Phone size={24} />
                    </div>
                    <div>
                       <h4 className="text-sm font-bold uppercase tracking-widest mb-1">Direct Line</h4>
                       <p className="text-brand-charcoal/60 leading-relaxed font-serif text-lg">{COMPANY_DETAILS.phone}</p>
                    </div>
                 </div>
                 {COMPANY_DETAILS.whatsapp && (
                   <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-[#F9F8F6] rounded-full flex items-center justify-center text-brand-gold shrink-0">
                         <MessageSquare size={24} />
                      </div>
                      <div>
                         <h4 className="text-sm font-bold uppercase tracking-widest mb-1">WhatsApp</h4>
                         <a 
                           href={`https://wa.me/${COMPANY_DETAILS.whatsapp.replace(/\D/g, '')}`} 
                           target="_blank" 
                           rel="noreferrer"
                           className="text-brand-charcoal/60 leading-relaxed font-serif text-lg hover:text-brand-gold transition-colors"
                         >
                           Chat on WhatsApp
                         </a>
                      </div>
                   </div>
                 )}
              </div>
            </div>

            <div>
               <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Stay Connected</h4>
               <div className="flex gap-4">
                  {[
                    { icon: <Twitter />, label: "Twitter", href: COMPANY_DETAILS.socials.twitter },
                    { icon: <Linkedin />, label: "LinkedIn", href: COMPANY_DETAILS.socials.linkedin },
                    { icon: <Instagram />, label: "Instagram", href: COMPANY_DETAILS.socials.instagram }
                  ].map(social => (
                    <a key={social.label} href={social.href} className="w-14 h-14 border border-brand-charcoal/5 rounded-2xl flex items-center justify-center hover:bg-brand-gold hover:text-brand-charcoal transition-all">
                       {social.icon}
                    </a>
                  ))}
               </div>
            </div>

            <a 
              href={`https://wa.me/${COMPANY_DETAILS.whatsapp?.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="p-8 bg-brand-navy rounded-[3rem] text-white flex items-center gap-6 shadow-xl relative overflow-hidden group cursor-pointer"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
               <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-brand-gold shrink-0">
                  <MessageSquare size={30} />
               </div>
               <div>
                  <h4 className="text-xl font-serif mb-1 italic">WhatsApp Consult</h4>
                  <p className="text-sm text-white/50 lowercase tracking-widest font-bold">Online now • 2 min wait</p>
               </div>
            </a>
          </div>

          <div className="bg-[#F9F8F6] p-10 md:p-16 rounded-[4rem] shadow-sm border border-brand-charcoal/5">
            <h3 className="text-3xl font-serif mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Full Name</label>
                    <input type="text" className="w-full bg-white border-none rounded-2xl p-4 outline-none focus:ring-1 ring-brand-gold transition-all" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Company/Institution</label>
                    <input type="text" className="w-full bg-white border-none rounded-2xl p-4 outline-none focus:ring-1 ring-brand-gold transition-all" placeholder="Optional" />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Interest</label>
                  <select className="w-full bg-white border-none rounded-2xl p-4 outline-none focus:ring-1 ring-brand-gold transition-all">
                     <option>Book Publishing</option>
                     <option>Ghostwriting Inquiry</option>
                     <option>Academic Distribution</option>
                     <option>Marketing Strategy</option>
                     <option>General Support</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Message</label>
                  <textarea rows={6} className="w-full bg-white border-none rounded-2xl p-4 outline-none focus:ring-1 ring-brand-gold transition-all text-sm" placeholder="Tell us how we can help..." />
               </div>
               <button className="w-full bg-brand-charcoal text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand-gold transition-all group shadow-xl">
                 Broadcast Request <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
               </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Embed Placeholder */}
      <section className="h-[500px] w-full bg-[#E5E5E5] relative overflow-hidden grayscale contrast-125">
         <div className="absolute inset-0 flex items-center justify-center bg-brand-charcoal/5">
            <div className="text-center">
              <MapPin size={48} className="mx-auto text-brand-charcoal/20 mb-4" />
              <p className="text-xs uppercase tracking-widest font-bold opacity-40 italic">Global Headquarters • Lahore</p>
            </div>
         </div>
         {/* Simple visualization of a map */}
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200')] opacity-20 mix-blend-multiply" />
      </section>
    </div>
  );
}
