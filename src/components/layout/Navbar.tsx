import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, BookOpenText } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { COMPANY_DETAILS } from '@/src/constants';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Store', href: '/store' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled ? 'bg-white/80 backdrop-blur-md py-4 border-black/5' : 'bg-transparent py-6 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <BookOpenText className="w-8 h-8 text-brand-gold transition-transform group-hover:scale-110" />
          <span className="font-serif text-xl font-semibold tracking-tight uppercase">
            {COMPANY_DETAILS.name.split(' ')[0]}
            <span className="text-brand-gold">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-xs uppercase letter-spacing-wider font-semibold tracking-widest transition-colors hover:text-brand-gold',
                location.pathname === link.href ? 'text-brand-gold' : 'text-brand-charcoal'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/submit"
            className="bg-brand-charcoal text-white px-6 py-2.5 text-xs uppercase tracking-widest font-bold hover:bg-brand-gold transition-colors"
          >
            Submit Manuscript
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b px-6 py-8 flex flex-col gap-6 md:hidden shadow-xl"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'text-sm uppercase tracking-widest font-semibold',
                location.pathname === link.href ? 'text-brand-gold' : 'text-brand-charcoal'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/submit"
            onClick={() => setIsOpen(false)}
            className="bg-brand-charcoal text-white px-6 py-4 text-center text-xs uppercase tracking-widest font-bold"
          >
            Submit Manuscript
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
