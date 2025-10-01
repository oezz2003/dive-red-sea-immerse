import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Star, 
  CheckCircle,
  Compass,
  Award,
  Users,
  Calendar,
  Phone,
  Mail,
  MessageCircle,
  Sparkles,
  MapPin
} from 'lucide-react';

const GiftVouchers = () => {
  const specialOffers = [
    {
      id: 'discover-scuba-sea',
      title: 'Discover Scuba Diving',
      location: 'At Sea',
      price: '£90',
      description: 'Experience the thrill of scuba diving in open water under the guidance of our certified instructors.',
      emoji: '🌊',
      color: 'turquoise',
      iconSrc: '/icons/scuba-diving.png',
      features: ['Open water experience', 'Certified instructor guidance', 'All equipment included', 'Safety briefing']
    },
    {
      id: 'discover-scuba-pool',
      title: 'Discover Scuba Diving',
      location: 'In a Swimming Pool',
      price: '£50',
      description: 'A safe, fun, and easy introduction for beginners who want to try scuba in a controlled environment.',
      emoji: '🏊',
      color: 'coral',
      iconSrc: '/icons/scuba-diving.png',
      features: ['Controlled environment', 'Perfect for beginners', 'Safe introduction', 'Try before you dive']
    },
    {
      id: 'open-water-drysuit',
      title: 'Open Water + Drysuit Package',
      location: 'Complete Course',
      price: '£775',
      description: 'Get fully certified with your Open Water Diver qualification and learn how to safely use a drysuit — perfect for diving all year round in Northern Ireland and beyond.',
      emoji: '🧊',
      color: 'seaweed',
      iconSrc: '/icons/surfboard.png',
      features: ['Open Water certification', 'Drysuit training', 'Year-round diving', 'Northern Ireland ready']
    },
    {
      id: 'nitrox-course',
      title: 'Enriched Air (Nitrox) Course',
      location: 'Specialty Course',
      price: '£225',
      description: 'Boost your bottom time and reduce fatigue with our Nitrox Course.',
      emoji: '💨',
      color: 'sunny',
      iconSrc: '/icons/vacations.png',
      features: ['Extended bottom time', 'Reduced fatigue', 'One free Nitrox tank fill', 'Advanced diving skills']
    },
    {
      id: 'drysuit-course',
      title: 'Drysuit Course',
      location: 'Specialty Course',
      price: '£225',
      description: 'Learn the skills you need to dive comfortably and safely in a drysuit — essential for colder waters and longer dives.',
      emoji: '🧥',
      color: 'turquoise',
      iconSrc: '/icons/beach.png',
      features: ['Drysuit certification', 'Cold water diving', 'Extended dive times', 'Professional training']
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Experienced, passionate instructors',
      description: 'Learn from certified professionals who love what they do'
    },
    {
      icon: Users,
      title: 'Small groups for personal attention',
      description: 'Maximum 4 students per instructor for focused learning'
    },
    {
      icon: Calendar,
      title: 'Flexible scheduling around you',
      description: 'We work around your schedule, not the other way around'
    },
    {
      icon: Compass,
      title: 'Courses tailored for local & international diving',
      description: 'Prepare for both Northern Ireland waters and global destinations'
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
              backgroundImage: "linear-gradient(rgba(10, 26, 47, 0.8), rgba(255, 107, 53, 0.3)), url('/hero pics/packges hero.jpg')"
            }}
          />
          
          {/* Floating offer icons */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${100 + Math.random() * 20}%`,
                }}
                animate={{
                  y: [-20, -window.innerHeight - 100],
                  opacity: [0, 0.8, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              >
                <Star className="h-8 w-8 text-white/20" />
              </motion.div>
            ))}
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="h-8 w-8 text-sunny animate-pulse" />
                <Badge className="bg-coral text-white px-6 py-2 text-lg">
                  Special Offers
                </Badge>
                <Sparkles className="h-8 w-8 text-sunny animate-pulse" />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Special Offers with <span className="text-coral">Eagle Divers NI</span>
              </h1>
              <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
                Dive into adventure – learn, explore, and save with our exclusive packages.
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
                    <Star className="mr-2 h-5 w-5" />
                    View Offers
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

        {/* Special Offers */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Special Offers
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Choose from our range of diving courses and experiences designed to suit every level and budget.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialOffers.map((offer, index) => (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative group"
                >
                  <Card className="relative overflow-hidden bg-gradient-to-br from-card to-card/80 border-border shadow-float hover:shadow-glow transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10">
                    {/* Premium gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-${offer.color}/5 via-transparent to-${offer.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Top accent bar */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${offer.color} to-${offer.color}/60`} />
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`w-3 h-3 rounded-full bg-${offer.color} animate-pulse`} />
                    </div>
                    
                    <CardHeader className="text-center pb-6 relative z-10">
                      {/* Emoji and icon container */}
                      <div className="relative mb-6">
                        
                        <div className={`mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-${offer.color}/20 to-${offer.color}/10 flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl group-hover:shadow-${offer.color}/20 transition-all duration-300`}>
                          {offer.iconSrc ? (
                            <img src={offer.iconSrc} alt="icon" className="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300" />
                          ) : (
                            <Compass className={`h-10 w-10 text-${offer.color} group-hover:scale-110 transition-transform duration-300`} />
                          )}
                        </div>
                        {/* Decorative ring */}
                        <div className={`absolute inset-0 rounded-full border-2 border-${offer.color}/20 group-hover:border-${offer.color}/40 transition-colors duration-300`} />
                      </div>
                      
                      <CardTitle className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {offer.title}
                      </CardTitle>
                      
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted/50 text-sm text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4 mr-1" />
                        {offer.location}
                      </div>
                      
                      <div className="relative">
                        <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                          {offer.price}
                        </div>
                        <div className={`w-16 h-0.5 bg-gradient-to-r from-${offer.color} to-transparent mx-auto`} />
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                        {offer.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="space-y-6 relative z-10">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground text-lg flex items-center gap-2">
                          <Award className={`w-5 h-5 text-${offer.color}`} />
                          What's Included
                        </h4>
                        <ul className="space-y-2">
                          {offer.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                              <CheckCircle className={`w-4 h-4 text-${offer.color} mt-0.5 flex-shrink-0`} />
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-4">
                        <Button 
                          className={`w-full btn-bubble bg-gradient-to-r from-${offer.color} to-${offer.color}/80 hover:from-${offer.color}/90 hover:to-${offer.color}/70 text-white shadow-lg hover:shadow-xl hover:shadow-${offer.color}/25 transition-all duration-300 group-hover:scale-105`}
                          size="lg"
                        >
                          <Star className="mr-2 h-5 w-5" />
                          Book This Offer
                        </Button>
                      </div>
                    </CardContent>
                    
                    {/* Bottom decorative line */}
                    <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${offer.color}/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Choose Eagle Divers NI?
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                We're committed to providing the best diving education and experiences in Northern Ireland.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="text-center bg-background border-border shadow-float hover:shadow-glow transition-all duration-300">
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 rounded-full bg-turquoise/20 flex items-center justify-center mb-4">
                        <feature.icon className="h-8 w-8 text-turquoise" />
                      </div>
                      <CardTitle className="text-lg text-foreground">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Promise */}
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
                ✨ Our Promise
              </h2>
              <p className="text-white/90 text-lg max-w-4xl mx-auto mb-8">
                With Eagle Divers NI, you don't just book a course — you begin an underwater journey. 
                Whether you're preparing for warm Red Sea waters or exploring Northern Ireland's 
                coastline, our packages are designed to give you confidence and unforgettable experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button 
                  size="lg"
                  className="btn-bubble bg-coral hover:bg-coral/90 text-white shadow-glow flex-1"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                Ready to start your diving journey? Get in touch today!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Ready to Start Your Diving Journey?
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Contact us today to book your course or ask any questions about our special offers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <Card className="bg-card border-border shadow-float hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 rounded-full bg-turquoise/20 flex items-center justify-center mb-4">
                      <MapPin className="h-8 w-8 text-turquoise" />
                    </div>
                    <CardTitle className="text-lg text-foreground">
                      Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-medium">
                      Antrim, Northern Ireland
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <Card className="bg-card border-border shadow-float hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 rounded-full bg-coral/20 flex items-center justify-center mb-4">
                      <Phone className="h-8 w-8 text-coral" />
                    </div>
                    <CardTitle className="text-lg text-foreground">
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-medium">
                      +44 7756 699880
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <Card className="bg-card border-border shadow-float hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 rounded-full bg-seaweed/20 flex items-center justify-center mb-4">
                      <Mail className="h-8 w-8 text-seaweed" />
                    </div>
                    <CardTitle className="text-lg text-foreground">
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      <p className="text-muted-foreground font-medium text-sm">
                        info@eaglediversni.com
                      </p>
                      <p className="text-muted-foreground font-medium text-sm">
                        admin@eaglediversni.com
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <Card className="bg-card border-border shadow-float hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 rounded-full bg-sunny/20 flex items-center justify-center mb-4">
                      <Calendar className="h-8 w-8 text-sunny" />
                    </div>
                    <CardTitle className="text-lg text-foreground">
                      Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-medium">
                      Mon - Sun: 9:00 AM - 5:00 PM
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default GiftVouchers;