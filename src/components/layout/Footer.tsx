import { Link } from 'react-router-dom';
import { BookOpenText, Twitter, Linkedin, Instagram } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES } from '@/src/constants';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <BookOpenText className="w-8 h-8 text-brand-gold" />
            <span className="font-serif text-xl font-semibold tracking-tight uppercase">
              {COMPANY_DETAILS.name}
            </span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            {COMPANY_DETAILS.mission}
          </p>
          <div className="flex gap-4">
            <a href={COMPANY_DETAILS.socials.twitter} className="hover:text-brand-gold transition-colors"><Twitter size={18} /></a>
            <a href={COMPANY_DETAILS.socials.linkedin} className="hover:text-brand-gold transition-colors"><Linkedin size={18} /></a>
            <a href={COMPANY_DETAILS.socials.instagram} className="hover:text-brand-gold transition-colors"><Instagram size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Services</h4>
          <ul className="space-y-3 text-sm text-white/60">
            {SERVICES.map(service => (
              <li key={service.id}>
                <Link to="/services" className="hover:text-white transition-colors">{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Company</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Our Blog</Link></li>
            <li><Link to="/store" className="hover:text-white transition-colors">Bookstore</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Newsletter</h4>
          <p className="text-white/60 text-sm mb-6">Join our circle for exclusive publishing insights and author features.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/5 border border-white/10 px-4 py-2 text-sm flex-1 outline-none focus:border-brand-gold transition-colors"
            />
            <button className="bg-brand-gold text-brand-charcoal px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 tracking-widest uppercase font-semibold">
        <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
