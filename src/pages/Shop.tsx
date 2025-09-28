import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Plane, 
  Star,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Globe,
  Waves,
  Fish,
  Compass
} from 'lucide-react';

const Shop = () => {
  const destinations = [
    {
      icon: Waves,
      title: 'Red Sea, Egypt',
      description: 'Crystal-clear waters, vibrant coral reefs, and world-famous dive sites.',
      emoji: '🌊',
      color: 'turquoise'
    },
    {
      icon: Fish,
      title: 'Maldives',
      description: 'Luxury liveaboard experiences with manta rays and whale sharks.',
      emoji: '🏝',
      color: 'coral'
    },
    {
      icon: Compass,
      title: 'Thailand',
      description: 'Exotic beaches combined with thrilling drift dives.',
      emoji: '🌴',
      color: 'seaweed'
    },
    {
      icon: Globe,
      title: 'Mexico',
      description: 'Cenote diving, reefs, and encounters with pelagic species.',
      emoji: '🐠',
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
      detail: '07756699880',
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
      <Navbar />
      
      <main className="pt-20">
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
              <Badge className="mb-6 bg-coral text-white px-6 py-2 text-lg">
                Diving Holidays
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Diving Holidays with <span className="text-coral">Eagle Divers NI</span>
              </h1>
              <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
                From Northern Ireland to the World's Best Dive Sites
              </p>
              <p className="text-lg text-white/80 max-w-4xl mx-auto mb-8">
                Looking for your next underwater adventure? At Eagle Divers NI, we specialize in 
                organizing unforgettable diving holidays from Northern Ireland to the Red Sea and beyond. 
                Whether you're a beginner or an experienced diver, our team can arrange the perfect trip for you.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  size="lg" 
                  className="btn-bubble bg-coral hover:bg-coral/90 text-white"
                  asChild
                >
                  <Link to="/contact">
                    <Plane className="mr-2 h-5 w-5" />
                    Plan Your Trip
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-ocean-deep"
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

        {/* Popular Destinations */}
        <section className="py-20 bg-background">
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
                      <div className="text-4xl mb-4">{destination.emoji}</div>
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

        {/* Contact Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Contact Eagle Divers NI
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
                Based in Northern Ireland, we're here to plan every detail of your trip. 
                Get in touch today to start planning your diving holiday:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="text-center bg-background border-border shadow-float hover:shadow-glow transition-all duration-300">
                    <CardHeader>
                      <div className={`mx-auto w-16 h-16 rounded-full bg-${contact.color}/20 flex items-center justify-center mb-4`}>
                        <contact.icon className={`h-8 w-8 text-${contact.color}`} />
                      </div>
                      <CardTitle className="text-lg text-foreground">
                        {contact.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground font-medium">
                        {contact.detail}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-turquoise/10 to-coral/10 rounded-2xl p-8 border border-turquoise/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  ✈️ Flights, transfers, accommodation, diving packages — all arranged for you by Eagle Divers NI.
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  🐠 Just bring your passion for the ocean, and we'll handle the rest!
                </p>
                <Button 
                  size="lg"
                  className="btn-bubble bg-coral hover:bg-coral/90 text-white shadow-glow"
                >
                  <Plane className="mr-2 h-5 w-5" />
                  Start Planning Your Holiday
                </Button>
              </div>
            </motion.div>
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
          
          <div className="container mx-auto px-4 text-center relative z-10">
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button 
                  size="lg"
                  className="btn-bubble bg-coral hover:bg-coral/90 text-white shadow-glow flex-1"
                >
                  <Plane className="mr-2 h-5 w-5" />
                  Plan Your Holiday
                </Button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                Free consultation • Custom packages • Expert guidance
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Shop;