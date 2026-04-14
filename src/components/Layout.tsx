import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ChevronRight, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="hidden md:flex bg-dark-surface border-b border-white/5 py-2 px-6 text-sm text-gray-400 justify-between items-center z-50 relative">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-burgundy-500" />
            <span>Serving Sacramento & Surrounding Areas</span>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <a href="tel:+19165550123" className="flex items-center space-x-2 hover:text-white transition-colors">
            <Phone className="w-4 h-4 text-burgundy-500" />
            <span>(916) 555-0123</span>
          </a>
          <div className="flex items-center space-x-3">
            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300 border-b border-transparent',
          isScrolled ? 'bg-dark-base/95 backdrop-blur-md border-white/10 py-4' : 'bg-dark-base py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img 
              src="https://i.imgur.com/oHBJicQ.png" 
              alt="Factory Auto Spa Logo" 
              className="h-16 md:h-20 object-contain transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-burgundy-500 relative py-2',
                  location.pathname === link.path ? 'text-white' : 'text-gray-400'
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-burgundy-500"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-burgundy-500 hover:bg-burgundy-600 text-white px-6 py-2.5 rounded-sm font-medium transition-colors flex items-center space-x-2"
            >
              <span>Book Now</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark-base/95 backdrop-blur-xl md:hidden flex flex-col pt-24 pb-8 px-6"
          >
            <div className="flex-1 flex flex-col justify-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      'text-4xl font-heading font-bold tracking-tight block',
                      location.pathname === link.path ? 'text-burgundy-500' : 'text-white'
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="mt-auto space-y-6"
            >
              <div className="flex flex-col space-y-4 text-gray-400">
                <a href="tel:+19165550123" className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-burgundy-500" />
                  <span className="text-lg">(916) 555-0123</span>
                </a>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-burgundy-500" />
                  <span className="text-lg">Sacramento & Surrounding Areas</span>
                </div>
              </div>
              
              <Link
                to="/contact"
                className="bg-burgundy-500 text-white w-full py-4 rounded-sm font-bold text-center block text-lg tracking-wide shadow-[0_0_20px_rgba(135,30,54,0.3)]"
              >
                Book Your Detail
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-dark-surface border-t border-white/5 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="https://i.imgur.com/oHBJicQ.png" 
                alt="Factory Auto Spa Logo" 
                className="h-16 object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium mobile detailing services with a focus on ceramic coatings, paint correction, and deep cleaning. Delivered directly to you.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-elevated flex items-center justify-center text-gray-400 hover:text-white hover:bg-burgundy-500 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-elevated flex items-center justify-center text-gray-400 hover:text-white hover:bg-burgundy-500 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-burgundy-500 transition-colors">Ceramic Coating</Link></li>
              <li><Link to="/services" className="hover:text-burgundy-500 transition-colors">Paint Correction</Link></li>
              <li><Link to="/services" className="hover:text-burgundy-500 transition-colors">Full Detail</Link></li>
              <li><Link to="/services" className="hover:text-burgundy-500 transition-colors">Deep Interior Cleaning</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Service Area</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Sacramento</li>
              <li>Elk Grove</li>
              <li>Roseville</li>
              <li>Folsom</li>
              <li>Rocklin</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-burgundy-500 shrink-0" />
                <span>(916) 555-0123</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-burgundy-500 shrink-0" />
                <span>Mobile Service<br />We come to your location</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-block mt-6 border border-burgundy-500 text-burgundy-500 hover:bg-burgundy-500 hover:text-white px-6 py-2 rounded-sm font-medium transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Factory Auto Spa. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
