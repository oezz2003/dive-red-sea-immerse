import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);
      
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'SSI' },
    { href: '/activities', label: 'PADI' },
    { href: '/shop', label: 'Holidays' },
    { href: '/gift-vouchers', label: 'Offers' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/95 header-blur shadow-depth border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 xl:h-24">
          {/* Left Navigation - Desktop Only */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 max-w-md">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`nav-link relative text-sm xl:text-base font-medium transition-colors hover:text-primary px-2 py-1 ${
                  location.pathname === item.href 
                    ? 'text-primary' 
                    : 'text-foreground/80'
                }`}
              >
                {item.label}
                {location.pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Centered Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 flex justify-center mx-4"
          >
            <Link to="/" className="flex flex-col items-center space-y-1 group logo-glow">
              <div className="relative">
                <img 
                  src="/images/logo-1-1.png" 
                  alt="Eagle Divers Logo" 
                  className="h-12 sm:h-14 lg:h-16 xl:h-18 w-auto object-contain"
                />
                <motion.div
                  
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-1 sm:-inset-2 border border-primary/30 rounded-full"
                />
              </div>
              <div className="text-center">
                <div className="text-xs font-semibold text-primary/80 tracking-widest uppercase">
                  NI
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Right Navigation - Desktop Only */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-end max-w-md">
            {navItems.slice(3).map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`nav-link relative text-sm xl:text-base font-medium transition-colors hover:text-primary px-2 py-1 ${
                  location.pathname === item.href 
                    ? 'text-primary' 
                    : 'text-foreground/80'
                }`}
              >
                {item.label}
                {location.pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
            <Button 
              size="sm" 
              className="btn-bubble bg-surface-gradient hover:shadow-glow ml-2 xl:ml-4 text-xs xl:text-sm px-3 xl:px-4"
              asChild
            >
              <Link to="/contact">Book</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="container mx-auto px-4 sm:px-6 py-6">
               {/* Mobile Logo */}
               <div className="flex justify-center mb-8">
                 <Link to="/" onClick={() => setIsOpen(false)} className="flex flex-col items-center space-y-2 logo-glow">
                   <div className="relative">
                     <img 
                       src="/images/logo-1-1.png" 
                       alt="Eagle Divers Logo" 
                       className="h-14 sm:h-16 w-auto object-contain"
                     />
                     <div className="absolute -inset-2 bg-primary/20 rounded-full animate-pulse" />
                   </div>
                   <div className="text-center">
                     <div className="text-xs font-semibold text-primary/80 tracking-widest uppercase">
                       NI
                     </div>
                   </div>
                 </Link>
               </div>
              
              {/* Mobile Navigation */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-center py-3 px-3 sm:px-4 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                      location.pathname === item.href 
                        ? 'bg-primary/10 text-primary border border-primary/20' 
                        : 'text-foreground/80 hover:bg-primary/5 hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              <Button 
                size="lg" 
                className="btn-bubble bg-surface-gradient hover:shadow-glow w-full text-sm sm:text-base py-3"
                asChild
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Book
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;