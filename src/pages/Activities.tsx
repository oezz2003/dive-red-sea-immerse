import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Waves, 
  MapPin, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  Ship,
  Wind,
  Anchor,
  Fish,
  Palette
} from 'lucide-react';

const Activities = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Activities', icon: Waves },
    { id: 'watersports', name: 'Watersports', icon: Wind },
    { id: 'tours', name: 'Tours & Trips', icon: Anchor },
    { id: 'rentals', name: 'Equipment Rental', icon: Palette },
  ];

  const activities = [
    {
      id: 1,
      title: 'Kayak Adventure',
      category: 'watersports',
      duration: '3 hours',
      groupSize: '2-8 people',
      price: '$45',
      location: 'NI Marina',
      rating: 4.8,
      image: '/images/kayak-1.jpg',
      description: 'Explore hidden coves and crystal clear waters on our guided kayak tour.',
      highlights: ['Guided tour', 'Equipment included', 'Snorkel stops', 'Refreshments']
    },
    {
      id: 2,
      title: 'Stand-Up Paddleboard',
      category: 'watersports',
      duration: '2 hours',
      groupSize: '1-6 people',
      price: '$35',
      location: 'Hurghada Bay',
      rating: 4.9,
      image: '/images/sup-1.jpg',
      description: 'Perfect for beginners and experts alike. Peaceful paddling with stunning views.',
      highlights: ['All skill levels', 'Calm waters', 'Instruction included', 'Photo opportunities']
    },
    {
      id: 3,
      title: 'Giant SUP Experience',
      category: 'watersports',
      duration: '1.5 hours',
      groupSize: '6-12 people',
      price: '$25',
      location: 'Eagle Bay',
      rating: 4.7,
      image: '/images/giant-sup.jpg',
      description: 'Team building fun on our massive paddleboard. Great for groups and families.',
      highlights: ['Team activity', 'Fun for groups', 'Photo session', 'Swimming breaks']
    },
    {
      id: 4,
      title: 'Snorkeling Safari',
      category: 'tours',
      duration: '4 hours',
      groupSize: '8-20 people',
      price: '$65',
      location: 'Giftun Island',
      rating: 4.9,
      image: '/images/pool_Snorkel.jpg',
      description: 'Discover colorful coral reefs and marine life at the best snorkeling spots.',
      highlights: ['Boat transport', 'Multiple sites', 'Equipment included', 'Lunch provided']
    },
    {
      id: 5,
      title: 'Waterbike Tours',
      category: 'watersports',
      duration: '2 hours',
      groupSize: '2-6 people',
      price: '$50',
      location: 'Marina District',
      rating: 4.6,
      image: '/images/waterbike-2.jpg',
      description: 'Pedal across the waves on our eco-friendly waterbikes. Unique water adventure.',
      highlights: ['Eco-friendly', 'Easy to learn', 'Scenic route', 'Photo stops']
    },
    {
      id: 6,
      title: 'Wetsuit Rental',
      category: 'rentals',
      duration: 'Full day',
      groupSize: 'Individual',
      price: '$15',
      location: 'Eagle Divers Center',
      rating: 4.8,
      image: '/images/wetsuit-1.jpg',
      description: 'High-quality wetsuits for all water activities. Various sizes available.',
      highlights: ['Multiple sizes', 'Premium quality', 'Sanitized equipment', 'Flexible timing']
    }
  ];

  const filteredActivities = selectedCategory === 'all' 
    ? activities 
    : activities.filter(activity => activity.category === selectedCategory);

  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section with Parallax */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
           <div 
             className="absolute inset-0 bg-cover bg-center bg-fixed"
             style={{
               backgroundImage: "linear-gradient(rgba(10, 26, 47, 0.6), rgba(26, 188, 156, 0.3)), url('/images/hero-section pic.jpg')"
             }}
           />
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-turquoise/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${100 + Math.random() * 20}%`,
                }}
                animate={{
                  y: [-20, -window.innerHeight - 100],
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Water<span className="text-turquoise">Sports</span> Hub
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                From peaceful kayaking to thrilling waterbike adventures, discover the NI 
                with our exciting water activities and equipment rentals.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  size="lg" 
                  className="btn-bubble bg-turquoise hover:bg-turquoise/90 text-white"
                >
                  <Waves className="mr-2 h-5 w-5" />
                  Book Activities
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-ocean-deep"
                >
                  <Fish className="mr-2 h-5 w-5" />
                  View Equipment
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Choose Your Adventure
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Filter by activity type to find your perfect water experience
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-turquoise text-white shadow-glow'
                      : 'bg-muted text-muted-foreground hover:bg-turquoise/20'
                  }`}
                >
                  <category.icon className="h-5 w-5" />
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="overflow-hidden bg-card border-border shadow-float hover:shadow-glow transition-all duration-300">
                    <div className="relative h-48 bg-gradient-to-br from-turquoise/20 to-seaweed/20">
                      <div className="absolute inset-0 bg-ocean-gradient opacity-80" />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white/90 text-ocean-deep">
                          {activity.price}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white">
                        <Star className="h-4 w-4 fill-sunny text-sunny" />
                        <span className="font-semibold">{activity.rating}</span>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground">
                        {activity.title}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {activity.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {activity.duration}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          {activity.groupSize}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                          <MapPin className="h-4 w-4" />
                          {activity.location}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {activity.highlights.map((highlight, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full btn-bubble bg-surface-gradient hover:shadow-glow"
                        size="lg"
                      >
                        Book Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
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
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-white/10 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: Math.random() * 2,
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
                Ready for Your Water Adventure?
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
                Join thousands of satisfied adventurers who have experienced the magic of the NI 
                with Eagle Divers' premium water activities.
              </p>
              <Button 
                size="lg"
                className="btn-bubble bg-coral hover:bg-coral/90 text-white shadow-glow"
              >
                <Anchor className="mr-2 h-5 w-5" />
                Contact Us Today
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Activities;