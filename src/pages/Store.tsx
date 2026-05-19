import { motion } from 'motion/react';
import { BOOKS } from '@/src/constants';
import { Search, Filter, ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const GENRES = ["All", "Fiction", "Non-Fiction", "Academic", "Memoir", "History", "Poetry"];

export default function Store() {
  const [activeGenre, setActiveGenre] = useState("All");

  return (
    <div className="pt-20">
      <section className="py-24 bg-white border-b border-brand-charcoal/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-2xl">
              <h1 className="text-6xl font-serif mb-6 italic">The Collection</h1>
              <p className="text-brand-charcoal/60 text-lg">Curated masterpieces from the Elite archives. Each volume represents months of meticulous craft.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative flex-1 sm:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-charcoal/40 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Title, author, or genre..." 
                  className="w-full pl-12 pr-6 py-4 bg-[#F9F8F6] border-none rounded-full outline-none focus:ring-1 ring-brand-gold transition-all text-sm"
                />
              </div>
              <button className="flex items-center gap-2 px-6 py-4 border border-brand-charcoal/10 rounded-full hover:bg-brand-charcoal hover:text-white transition-all text-sm font-bold uppercase tracking-widest">
                <Filter size={16} /> Filters
              </button>
            </div>
          </div>

          <div className="flex gap-4 mt-16 overflow-x-auto pb-4 scrollbar-hide">
             {GENRES.map(genre => (
               <button
                key={genre}
                onClick={() => setActiveGenre(genre)}
                className={`whitespace-nowrap px-8 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeGenre === genre ? 'bg-brand-gold text-brand-charcoal shadow-lg' : 'bg-[#F9F8F6] text-brand-charcoal/40 hover:bg-brand-charcoal/10'}`}
               >
                 {genre}
               </button>
             ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {BOOKS.map(book => (
            <motion.div 
              layout
              key={book.id} 
              className="group"
            >
              <div className="relative aspect-[2/3] mb-6 overflow-hidden rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-500">
                 <img src={book.cover} alt={book.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-brand-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4 p-8 text-center ring-1 ring-white/20 ring-inset">
                    <button className="w-full bg-white text-brand-charcoal py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors flex items-center justify-center gap-2">
                       <ShoppingCart size={14} /> Add to Cart
                    </button>
                    <button className="w-full border border-white text-white py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-charcoal transition-colors">
                       Preview Text
                    </button>
                 </div>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">{book.genre}</span>
                <h3 className="text-xl font-serif leading-snug group-hover:text-brand-gold transition-colors">{book.title}</h3>
                <p className="text-sm text-brand-charcoal/50">{book.author}</p>
                <div className="flex items-center justify-between pt-4">
                  <div className="font-serif text-lg">${book.price.toFixed(2)}</div>
                  <div className="flex items-center gap-1 text-brand-gold text-xs">
                    <Star size={12} fill="currentColor" />
                    <span className="font-bold">{book.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Author */}
      <section className="py-24 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
             <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">Featured Author</span>
             <h2 className="text-5xl font-serif leading-tight">Elena Moretti <br/><span className="italic">On Crafting Silence</span></h2>
             <p className="text-lg text-brand-charcoal/60 leading-relaxed">
                Elena's latest masterpiece, "The Silent Architect," has redefined contemporary fiction. Join us for an exclusive interview on her process and her journey with Elite Pages.
             </p>
             <Link to="/blog" className="inline-flex items-center gap-3 font-bold uppercase tracking-widest text-xs border-b border-brand-charcoal pb-1 hover:text-brand-gold hover:border-brand-gold transition-all">
                Read the Interview
             </Link>
          </div>
          <div className="relative">
             <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" alt="Elena Moretti" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -top-10 -right-10 bg-brand-gold w-40 h-40 rounded-full flex flex-col items-center justify-center text-brand-charcoal animate-pulse">
                <span className="text-xs font-bold uppercase tracking-widest">Bestseller</span>
                <span className="text-3xl font-serif">#01</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
