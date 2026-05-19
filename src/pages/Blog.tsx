import { motion } from 'motion/react';
import { Search, ArrowRight, Bookmark } from 'lucide-react';

const POSTS = [
  {
    title: "The Future of Physical Print in a Digital Age",
    slug: "future-of-print",
    category: "Insights",
    date: "May 15, 2026",
    img: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&q=80&w=600",
    excerpt: "Why the tactile experience of paper remains the ultimate luxury for true bibliophiles."
  },
  {
    title: "Strategic SEO for Modern Authors",
    slug: "seo-for-authors",
    category: "Marketing",
    date: "April 28, 2026",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
    excerpt: "How to leverage modern search algorithms to find your ideal global readership."
  },
  {
    title: "The Art of Structural Editing",
    slug: "structural-editing",
    category: "Craft",
    date: "April 12, 2026",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600",
    excerpt: "Moving beyond proofreading: how to re-architect your narrative for maximum impact."
  }
];

export default function Blog() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div className="max-w-2xl">
              <h1 className="text-6xl md:text-8xl font-serif mb-8 italic tracking-tighter">The <span className="text-brand-gold italic">Elite</span> Journal</h1>
              <p className="text-xl text-brand-charcoal/60 leading-relaxed font-serif italic text-3xl">Perspectives on literature, prestige, and the art of the book.</p>
            </div>
            <div className="relative w-full md:w-80">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-charcoal/40 w-4 h-4" />
               <input 
                 type="text" 
                 placeholder="Search entries..." 
                 className="w-full pl-12 pr-6 py-4 bg-[#F9F8F6] border-none rounded-2xl outline-none focus:ring-1 ring-brand-gold transition-all text-sm"
               />
            </div>
          </div>

          {/* Featured Post */}
          <div className="group relative aspect-[21/9] rounded-[4rem] overflow-hidden mb-24 cursor-pointer shadow-2xl">
             <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1200" alt="Featured" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-12 md:p-24">
                <div className="max-w-3xl space-y-6">
                   <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">Featured Article</span>
                   <h2 className="text-4xl md:text-6xl font-serif text-white leading-[0.9] tracking-tighter group-hover:text-brand-gold transition-colors">The Return to<br/><span className="italic">Artisanal Publishing</span></h2>
                   <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
                      In an era of AI-generated noise, true curation and artisanal craftsmanship have become the ultimate indicators of status and quality.
                   </p>
                   <div className="flex items-center gap-6 pt-6">
                      <button className="bg-white text-brand-charcoal px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors inline-flex items-center gap-2">
                        Read Piece <ArrowRight size={14} />
                      </button>
                      <span className="text-white/40 text-xs uppercase tracking-widest font-bold">12 min read</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-12">
             {POSTS.map(post => (
               <motion.div key={post.slug} className="group cursor-pointer">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-8 shadow-lg">
                     <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center">
                        <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">{post.category}</span>
                        <span className="text-[10px] text-brand-charcoal/40 uppercase tracking-widest font-bold">{post.date}</span>
                     </div>
                     <h3 className="text-2xl font-serif group-hover:text-brand-gold transition-colors leading-tight italic">{post.title}</h3>
                     <p className="text-brand-charcoal/60 leading-relaxed text-sm">{post.excerpt}</p>
                     <div className="flex justify-between items-center pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">Keep Reading <ArrowRight size={10} /></span>
                        <Bookmark size={14} className="text-brand-charcoal/20 hover:text-brand-gold transition-colors" />
                     </div>
                  </div>
               </motion.div>
             ))}
          </div>
          
          <div className="mt-24 text-center">
             <button className="border border-brand-charcoal px-12 py-5 text-xs font-bold uppercase tracking-widest hover:bg-brand-charcoal hover:text-white transition-all">
                Load Historical Journal
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}
