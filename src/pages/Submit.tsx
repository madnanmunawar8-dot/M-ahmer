import { motion } from 'motion/react';
import { Upload, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Submit() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    genre: '',
    description: ''
  });

  const nextStep = () => setStep(step + 1);

  return (
    <div className="pt-20">
      <section className="py-24 bg-brand-navy text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-6xl font-serif mb-8 italic">Become an Aurelius Author</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Our editorial board reviews every manuscript for visionary potential. Start your journey with us today.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto bg-[#F9F8F6] rounded-[3rem] p-8 md:p-16 shadow-xl border border-brand-charcoal/5">
           {/* Progress */}
           <div className="flex justify-between mb-16 relative">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-charcoal/10 -z-0" />
              {[1, 2, 3].map(i => (
                <div key={i} className={`w-10 h-10 rounded-full flex items-center justify-center relative z-10 transition-colors ${step >= i ? 'bg-brand-gold text-brand-charcoal' : 'bg-white text-brand-charcoal/20 border border-brand-charcoal/10'}`}>
                   {step > i ? <CheckCircle2 size={20} /> : i}
                </div>
              ))}
           </div>

           {step === 1 && (
             <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
               <h2 className="text-3xl font-serif mb-8">Personal Details</h2>
               <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Full Name</label>
                    <input type="text" className="w-full bg-white border-none rounded-xl p-4 outline-none focus:ring-1 ring-brand-gold transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Email Address</label>
                    <input type="email" className="w-full bg-white border-none rounded-xl p-4 outline-none focus:ring-1 ring-brand-gold transition-all" placeholder="john@example.com" />
                  </div>
               </div>
               <button onClick={nextStep} className="w-full bg-brand-charcoal text-white py-5 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-brand-gold transition-all">
                 Continue to Project Details <ChevronRight size={16} />
               </button>
             </motion.div>
           )}

           {step === 2 && (
             <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
               <h2 className="text-3xl font-serif mb-8">Manuscript Information</h2>
               <div className="space-y-8 mb-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Primary Genre</label>
                    <select className="w-full bg-white border-none rounded-xl p-4 outline-none focus:ring-1 ring-brand-gold transition-all">
                       <option>Contemporary Fiction</option>
                       <option>Non-Fiction / Business</option>
                       <option>Academic / Research</option>
                       <option>History / Biography</option>
                       <option>Poetry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Elevator Pitch (Brief Description)</label>
                    <textarea rows={4} className="w-full bg-white border-none rounded-xl p-4 outline-none focus:ring-1 ring-brand-gold transition-all text-sm" placeholder="Tell us the soul of your story in 200 words..." />
                  </div>
               </div>
               <div className="flex gap-4">
                  <button onClick={() => setStep(1)} className="flex-1 border border-brand-charcoal/10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-brand-charcoal hover:text-white transition-all text-brand-charcoal">Back</button>
                  <button onClick={nextStep} className="flex-[2] bg-brand-charcoal text-white py-5 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-brand-gold transition-all">Next: Upload <ChevronRight size={16} /></button>
               </div>
             </motion.div>
           )}

           {step === 3 && (
             <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
               <h2 className="text-3xl font-serif mb-8">Manuscript Upload</h2>
               <div className="border-2 border-dashed border-brand-charcoal/10 rounded-[3rem] p-16 text-center bg-white/50 hover:bg-white hover:border-brand-gold transition-all cursor-pointer group mb-12">
                  <div className="w-20 h-20 bg-[#F9F8F6] rounded-full flex items-center justify-center mx-auto mb-6 text-brand-charcoal/40 group-hover:text-brand-gold transition-colors">
                    <Upload size={40} />
                  </div>
                  <h4 className="text-xl font-serif mb-2">Drag and drop your manuscript</h4>
                  <p className="text-sm text-brand-charcoal/40 mb-8">Supported formats: .PDF, .DOCX, .EPUB (Max 20MB)</p>
                  <button className="bg-brand-charcoal text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest group-hover:bg-brand-gold transition-colors">Select Files</button>
               </div>
               <div className="flex gap-4">
                  <button onClick={() => setStep(2)} className="flex-1 border border-brand-charcoal/10 py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-brand-charcoal hover:text-white transition-all text-brand-charcoal">Back</button>
                  <button onClick={() => setStep(4)} className="flex-[2] bg-brand-gold text-brand-charcoal py-5 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-brand-charcoal hover:text-white transition-all">Submit for Review <CheckCircle2 size={16} /></button>
               </div>
             </motion.div>
           )}

           {step === 4 && (
             <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <div className="w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-8 text-brand-charcoal">
                   <CheckCircle2 size={48} />
                </div>
                <h2 className="text-4xl font-serif mb-4 italic">Submission Received</h2>
                <p className="text-brand-charcoal/60 max-w-md mx-auto mb-12">
                   Thank you for trusting us with your work. Our editorial board will review your manuscript and get back to you within 14 business days.
                </p>
                <button onClick={() => setStep(1)} className="text-brand-gold font-bold uppercase tracking-widest text-xs border-b border-brand-gold pb-1 hover:text-brand-charcoal hover:border-brand-charcoal transition-colors">Return to Home</button>
             </motion.div>
           )}
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-24 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid md:grid-cols-2 gap-20">
              <div className="space-y-8">
                 <h3 className="text-4xl font-serif italic">Submission Guidelines</h3>
                 <p className="text-brand-charcoal/60 leading-relaxed">
                    To ensure the highest quality of review, please adhere to these standards before submitting your work.
                 </p>
                 <ul className="space-y-6">
                    {[
                      "Manuscripts must be complete and polished.",
                      "Formatting should follow Standard Manuscript Format (12pt Times New Roman, double-spaced).",
                      "A one-page synopsis is required for fiction works.",
                      "Annotated bibliographies must be included for academic submissions."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start">
                         <div className="w-6 h-6 bg-brand-gold text-brand-charcoal rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-1">{i + 1}</div>
                         <p className="text-brand-charcoal/80 italic">{item}</p>
                      </li>
                    ))}
                 </ul>
              </div>
              <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-brand-charcoal/5">
                 <h4 className="text-2xl font-serif mb-6">Our Review Philosophy</h4>
                 <p className="text-sm text-brand-charcoal/60 leading-relaxed mb-6 italic">
                    "At Aurelius, we do not look for commercial trends. We look for voices that have the weight to tilt the cultural axis. Whether you are self-taught or academically trained, the only thing that matters is the integrity of the work."
                 </p>
                 <div className="flex items-center gap-4">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" className="w-12 h-12 rounded-full object-cover" alt="Julian Vane" />
                    <div>
                       <p className="text-sm font-bold uppercase tracking-widest">Julian Vane</p>
                       <p className="text-[10px] opacity-40 uppercase tracking-widest">Founder & CEO</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
