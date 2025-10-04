import { Link } from 'react-router-dom';
import { Waves, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex flex-col items-center space-y-2">
              <img 
                src="/images/logo-1-1.png" 
                alt="Eagle Divers Logo" 
                className="h-12 w-auto object-contain"
              />
              <div className="text-xs font-semibold text-primary/80 tracking-widest uppercase">
                Northern Ireland
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional diving center offering world-class scuba diving experiences 
              in the beautiful Northern Ireland.
            </p>
            <div className="flex space-x-5">
              <a 
                href="https://www.facebook.com/eaglediversni/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/eaglediversni/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="mailto:info@eaglediversni.com" 
                className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="Send us an email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                SSI Courses
              </Link>
              <Link to="/activities" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                PADI Activities
              </Link>
              <Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Diving Holidays
              </Link>
              <Link to="/gift-vouchers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Gift Vouchers
              </Link>
              <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Popular Courses</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Try Scuba
              </Link>
              <Link to="/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Open Water Diver
              </Link>
              <Link to="/activities" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                PADI Open Water Diver
              </Link>
              <Link to="/activities" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                PADI Advanced Open Water
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Antrim, Northern Ireland
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  +44 7756 699880
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  info@eaglediversni.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Eagle Divers. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;