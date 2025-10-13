import { Helmet } from 'react-helmet-async';
import scubaMan from '@/components/icons/scubaMan';
import discover_scuba from '@/components/icons/discover_scuba';
import DryOpenWater from '@/components/icons/dry_open_water';
import DrySuit from '@/components/icons/dry_suit';
import Enriched from '@/components/icons/enriched';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Plane,
  Star,
  ArrowRight,
  Calendar,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Waves,
  Fish,
  Anchor,
  Ship
} from 'lucide-react';

// Adventure offers for the 'Ready for Your Next Adventure?' section
const adventureOffers = [
  {
    id: 'drysuit-course',
    title: 'Drysuit Course',
    location: 'Specialty Course',
    price: '£225',
    description: 'Learn the skills you need to dive comfortably and safely in a drysuit — essential for colder waters and longer dives.',
    color: 'turquoise',
    icon: DrySuit,
    features: ['Drysuit certification', 'Cold water diving', 'Extended dive times', 'Professional training']
  }
];

const Shop = () => {
  const navigate = useNavigate();
  const cardsRef = useRef<HTMLDivElement>(null);
  const handleScrollToCards = () => {
    if (cardsRef.current) {
      const rect = cardsRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({
        top: rect.top + scrollTop + 160,
        behavior: 'smooth'
      });
    }
  };
  const destinations = [
    {
      icon: Waves,
      title: 'Hurghada',
      description: 'Vibrant coral reefs, diverse marine life, and accessible dive sites.',
      color: 'turquoise'
    },
    {
      icon: Fish,
      title: 'Sharm El Sheikh',
      description: 'World-famous sites like Ras Mohammed and the Straits of Tiran.',
      color: 'coral'
    },
    {
      icon: Anchor,
      title: 'Dahab',
      description: 'Relaxed atmosphere with the famous Blue Hole and Canyon sites.',
      color: 'seaweed'
    },
    {
      icon: Ship,
      title: 'Liveaboard',
      description: 'Multi-day diving adventures exploring remote reefs and islands.',
      color: 'sunny'
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      detail: 'Antrim, Northern Ireland',
      color: 'turquoise'
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+44 7756 699880',
      color: 'coral'
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'info@eaglediversni.com',
      color: 'seaweed'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Diving Holidays and Trips - Eagle Divers NI Diving Center</title>
        <meta name="description" content="Book your scuba diving holiday with Eagle Divers in NI. Guided trips to Sharm El Sheikh, Hurghada, equipment rental, and adventure packages." />
        <meta name="keywords" content="diving holidays, scuba diving trips, Red Sea diving, Sharm El Sheikh, Hurghada, NI diving center, Eagle Divers" />
        <link rel="canonical" href="https://eaglediversni.com/holidays" />
        <meta property="og:title" content="Diving Holidays and Trips - Eagle Divers NI" />
        <meta property="og:description" content="Plan your scuba diving holiday with Eagle Divers. Trips to the Red Sea and beyond." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eaglediversni.com/holidays" />
        <meta property="og:image" content="/images/logo-1-1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Diving Holidays and Trips - Eagle Divers NI" />
        <meta name="twitter:description" content="Plan your scuba diving holiday with Eagle Divers. Trips to the Red Sea and beyond." />
        <meta name="twitter:image" content="/images/logo-1-1.png" />
      </Helmet>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "linear-gradient(rgba(10, 26, 47, 0.8), rgba(255, 107, 53, 0.3)), url('/hero pics/holiday hero .jpg')"
            }}
          />
          
          {/* Floating travel icons */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 180, 360],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              >
                <Plane className="h-6 w-6 text-white/20" />
              </motion.div>
            ))}
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Badge className="mb-4 sm:mb-6 bg-coral text-white px-4 sm:px-6 py-2 text-base sm:text-lg">
                Diving Holidays
              </Badge>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight sm:leading-normal">
                Diving Holidays with <span className="text-coral">Eagle Divers Northern Ireland</span>
              </h1>
              <p className="text-base sm:text-xl text-white/90 max-w-full sm:max-w-4xl mx-auto mb-4 sm:mb-8 px-2 sm:px-0">
                From Northern Ireland to the World's Best Dive Sites
              </p>
              <p className="text-sm sm:text-lg text-white/80 max-w-full sm:max-w-4xl mx-auto mb-4 sm:mb-8 px-2 sm:px-0">
                Looking for your next underwater adventure? At Eagle Divers Northern Ireland, we specialize in
                organizing unforgettable diving holidays from Northern Ireland to the Red Sea and beyond.
                Whether you're a beginner or an experienced diver, our team can arrange the perfect trip for you.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full px-2 sm:px-0"
              >
                <Button
                  size="lg"
                  className="btn-bubble bg-coral hover:bg-coral/90 text-white w-full sm:w-auto"
                  onClick={handleScrollToCards}
                >
                  <Plane className="mr-2 h-5 w-5" />
                  Plan Your Trip
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-ocean-deep w-full sm:w-auto"
                  asChild
                >
                  <Link to="/contact">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

  <div ref={cardsRef} className="container mx-auto px-4 text-center relative z-10 py-10 border-b border-border">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Let Eagle Divers NI take you on the diving holiday of a lifetime.
              From Northern Ireland to the world's most spectacular dive sites.
            </p>
            <div className="flex flex-col mt-20 items-start justify-center gap-20 md:flex-col lg:flex-row xl:flex-row xxl:flex-row lg:justify-center xl:justify-center xxl:justify-center gap-x-8 mb-8">
          
                {/* Card 1: Sharm El Sheikh (Updated) */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={typeof window !== 'undefined' && window.innerWidth >= 640 ? { y: -10, scale: 1.02 } : {}}
                  className="relative group h-full w-full sm:w-[500px] flex cursor-pointer mb-6 sm:mb-0"
                  style={{ pointerEvents: 'auto' }}
                  onClick={() => navigate(`/contact?location=Sharm El Sheikh`)}
                >
                  <Card className="relative overflow-hidden bg-gradient-to-br from-card to-card/80 shadow-float transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10 h-full flex flex-col w-full sm:max-w-[500px] px-2 py-2 sm:px-6 sm:py-6 sm:hover:shadow-glow sm:group-hover:scale-105 text-[15px] sm:text-base" style={{ cursor: 'pointer' }}>
                    <div className="absolute inset-0 z-20 h-full w-full rounded-lg pointer-events-none opacity-0 sm:group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300" style={{background: 'linear-gradient(235deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.9) 100%)'}}>
                      <div className="z-30 flex items-center justify-center">
                        <span className={`px-8 py-4 opacity-120 rounded-lg font-bold text-white bg-gradient-to-br from-coral to-coral shadow-lg text-2xl`}>Book Now</span>
                      </div>
                    </div>
                    <CardHeader className="text-center pb-2 relative z-10 flex-shrink-0">
                      <div className="relative flex items-center justify-center">
                        <span className="font-bold text-2xl text-coral text-center group-hover:text-primary transition-colors duration-300">Sharm El Sheikh</span>
                      </div>
                      <CardTitle className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        🐠 Dive Trip to Sharm El Sheikh
                      </CardTitle>
                      <div className="flex items-center px-3 py-1 rounded-full bg-muted/50 text-sm text-muted-foreground mb-4 mx-auto w-fit">
                        <Calendar className="w-4 h-4 mr-1" />
                        October 24, 2025
                      </div>
                      <div className="relative">
                        <div className="text-[14px] font-bold text-foreground mb-2 group-hover:scale-105 transition-transform duration-300 text-left">
                          Fly from London Gatwick to the Red Sea’s diving paradise, Sharm El Sheikh.
                        </div>
                        <div className="text-[14px] font-bold  text-muted-foreground mb-2 group-hover:scale-105 transition-transform duration-300 text-left">
Join us for an unforgettable 5-day adventure filled with world-class diving and cultural exploration.<br /><br />
                        </div>
                        <div className={`w-16 h-0.5 bg-gradient-to-r from-coral to-transparent`} />
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-4 text-left">
                        Your holiday includes:
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-2 relative z-10 flex flex-col flex-1">
                      <div className="space-y-5">
                        <ul className="space-y-2">
                          <li className='text-muted-foreground text-left text-xs'>✈️ Return flights from London Gatwick to Sharm El Sheikh</li>
                          <li className='text-muted-foreground text-left text-xs'>🏨 Hotel accommodation with airport transfers</li>
                          <li className='text-muted-foreground text-left text-xs'>🤿 5-day diving package – enjoy 10 dives at world-renowned sites such as Ras Mohammed National Park and the Straits of Tiran</li>
                          <li className='text-muted-foreground text-left text-xs'>🛍️ Guided visit to the Old Market – experience local culture, try authentic Egyptian food, and shop for souvenirs</li>
                        </ul>
                        <p className="text-muted-foreground text-xs mt-4 text-left font-bold">
                          Crystal-clear waters, vibrant reefs, and unforgettable dive sites await you in Sharm El Sheikh, the jewel of the Red Sea.
                        </p>
                         <p className="text-muted-foreground text-sm mt-2 text-left font-bold">
                          🌴 Dive in, explore, and experience the best of Egypt above and below the surface!
                        </p>
                      </div>
                      <div className="block sm:hidden md:hidden mt-6">
                        <Button size="lg" className="w-full bg-coral text-white" onClick={e => { e.stopPropagation(); navigate(`/contact?location=Sharm El Sheikh`); }}>
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Card 2: Hurghada (Original - Price Removed) */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={typeof window !== 'undefined' && window.innerWidth >= 640 ? { y: -10, scale: 1.02 } : {}}
                  className="relative group h-full  w-full sm:w-[500px] flex cursor-pointer mb-6 sm:mb-0"
                  style={{ pointerEvents: 'auto' }}
                  onClick={() => navigate(`/contact?location=Hurghada`)}
                >
                  <Card className="relative h-min-[3000px]  overflow-hidden bg-gradient-to-br from-card to-card/80 shadow-float transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10 h-full flex flex-col w-full sm:max-w-[500px] px-2 py-2 sm:px-6 sm:py-6 sm:hover:shadow-glow sm:group-hover:scale-105 text-[15px] sm:text-base" style={{ cursor: 'pointer' }}>
                    <div className="absolute inset-0 z-20 h-full w-full rounded-lg pointer-events-none opacity-0 sm:group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300" style={{background: 'linear-gradient(235deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.9) 100%)'}}>
                      <div className="z-30 flex items-center justify-center">
                        <span className={`px-8 py-4 opacity-120 rounded-lg font-bold text-white bg-gradient-to-br from-coral to-coral shadow-lg text-2xl`}>Book Now</span>
                      </div>
                    </div>
                    <CardHeader className="text-center pb-2 relative z-10 flex-shrink-0">
                      <div className="relative flex items-center justify-center">
                        <span className="font-bold text-2xl text-coral text-center group-hover:text-primary transition-colors duration-300">Hurghada</span>
                      </div>
                      <CardTitle className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        Scuba Diving Holiday from Belfast to Hurghada
                      </CardTitle>
                      <div className="flex items-center px-3 py-1 rounded-full bg-muted/50 text-sm text-muted-foreground mb-4 mx-auto w-fit">
                        <Calendar className="w-4 h-4 mr-1" />
                        March 21, 2026
                      </div>
                      <div className="relative">
                        <div className="text-[14px] font-bold text-foreground mb-2 group-hover:scale-105 transition-transform duration-300 text-left">
                          Escape to the Red Sea for an unforgettable diving adventure!<br />
                        </div>
                        <div className="text-[14px] font-bold text-muted-foreground mb-2 group-hover:scale-105 transition-transform duration-300 text-left">
                          Join us on a week-long holiday from Belfast to Hurghada, staying at the King Tut Aqua Beach Resort, an all-inclusive beachfront hotel.
                        </div>
                        <div className={`w-16 h-0.5 bg-gradient-to-r from-coral to-transparent`} />
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-4 text-left">
                        Your holiday includes:
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-6 relative z-10 flex flex-col flex-1 justify-end">
                      <div className="space-y-5">
                        <ul className="space-y-2">
                          <li className='text-muted-foreground text-left text-xs'>✈️ Return flights from Belfast to Hurghada</li>
                          <li className='text-muted-foreground text-left text-xs'>🏖️ 7 nights’ stay at the 4★ King Tut Aqua Beach Resort – All-Inclusive</li>
                          <li className='text-muted-foreground text-left text-xs'>🚐 Airport transfers included</li>
                          <li className='text-muted-foreground text-left text-xs'>🤿 5-day scuba diving package – explore vibrant coral reefs and marine life</li>
                          <li className='text-muted-foreground text-left text-xs'>🌊 1 day activity – your choice of quad biking adventure or water sports</li>
                          <li className='text-muted-foreground text-left text-xs'>🛥️ Transfers between the hotel and dive boat included</li>
                        </ul>
                        
                         <p className="text-muted-foreground text-sm mt-2 text-left font-bold">
                          🪸 Open Water Diving, Coral exploration, and the best hotels in the world, all and more in HURGHADA 
                        </p>
                      </div>
                      <div className="block sm:hidden md:hidden mt-6">
                        <Button size="lg" className="w-full bg-coral text-white" onClick={e => { e.stopPropagation(); navigate(`/contact?location=Hurghada`); }}>
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
            </div>
            <p className="text-white/70 text-sm mt-4">
              Free consultation • Custom packages • Expert guidance
            </p>
          </motion.div>
        </div>

        {/* Popular Destinations */}
        <section className="py-10 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Popular Destinations
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Discover the world's most spectacular dive sites with our expertly planned diving holidays.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {destinations.map((destination, index) => (
                <motion.div
                  key={destination.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <Card className="text-center bg-card border-border shadow-float hover:shadow-glow transition-all duration-300">
                    <CardHeader>
                      <div className={`mx-auto w-16 h-16 rounded-full bg-${destination.color}/20 flex items-center justify-center mb-4`}>
                        <destination.icon className={`h-8 w-8 text-${destination.color}`} />
                      </div>
                      <CardTitle className="text-xl text-foreground">
                        {destination.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {destination.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-ocean-gradient relative overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-6 h-6 bg-white/10 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.2, 0.8, 0.2],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Shop;