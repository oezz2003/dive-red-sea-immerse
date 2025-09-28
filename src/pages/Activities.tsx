import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
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
    { id: 'all', name: 'All PADI Courses', icon: Waves },
    { id: 'beginner', name: 'Beginner', icon: Wind },
    { id: 'advanced', name: 'Advanced', icon: Anchor },
    { id: 'professional', name: 'Professional', icon: Palette },
  ];

  const activities = [
    {
      id: 1,
      title: 'PADI Open Water Diver',
      category: 'beginner',
      duration: '3-4 days',
      groupSize: 'Max 4 students',
      location: 'Eagle Divers NI',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop&crop=center',
      description: 'The world\'s most popular scuba diving course. Learn to dive safely and confidently.',
      highlights: ['Theory & Pool Training', '4 Open Water Dives', 'PADI Certification', 'Equipment Included']
    },
    {
      id: 2,
      title: 'PADI Advanced Open Water',
      category: 'advanced',
      duration: '2-3 days',
      groupSize: 'Max 4 students',
      location: 'Eagle Divers NI',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&crop=center',
      description: 'Enhance your diving skills with five adventure dives including deep and navigation.',
      highlights: ['5 Adventure Dives', 'Deep & Navigation', 'Wreck Diving', 'Night Diving']
    },
    {
      id: 3,
      title: 'PADI Rescue Diver',
      category: 'advanced',
      duration: '3-4 days',
      groupSize: 'Max 4 students',
      location: 'Eagle Divers NI',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop&crop=center',
      description: 'Learn to prevent and manage diving emergencies. Develop leadership skills.',
      highlights: ['Emergency Response', 'Rescue Scenarios', 'First Aid Training', 'Leadership Skills']
    },
    {
      id: 4,
      title: 'PADI Divemaster',
      category: 'professional',
      duration: '2-3 weeks',
      groupSize: 'Max 4 students',
      location: 'Eagle Divers NI',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&crop=center',
      description: 'Become a diving professional. Lead dives and assist instructors.',
      highlights: ['Leadership Training', 'Guide Certification', 'Professional Skills', 'Career Pathway']
    },
    {
      id: 5,
      title: 'PADI Enriched Air Nitrox',
      category: 'advanced',
      duration: '1 day',
      groupSize: 'Max 6 students',
      location: 'Eagle Divers NI',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop&crop=center',
      description: 'Learn to dive with enriched air nitrox for longer bottom times.',
      highlights: ['Nitrox Theory', 'Gas Analysis', 'Dive Planning', 'Safety Procedures']
    },
    {
      id: 6,
      title: 'PADI Deep Diver',
      category: 'advanced',
      duration: '2 days',
      groupSize: 'Max 4 students',
      location: 'Eagle Divers NI',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&crop=center',
      description: 'Explore depths of 18-40 meters safely with proper training and equipment.',
      highlights: ['Deep Dive Planning', 'Safety Procedures', 'Equipment Setup', '4 Deep Dives']
    },
    {
      id: 7,
      title: 'PADI Wreck Diver',
      category: 'advanced',
      duration: '2 days',
      groupSize: 'Max 4 students',
      location: 'Eagle Divers NI',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop&crop=center',
      description: 'Learn to safely explore shipwrecks and artificial reefs.',
      highlights: ['Wreck Navigation', 'Safety Procedures', 'Equipment Setup', '4 Wreck Dives']
    },
    {
      id: 8,
      title: 'PADI Night Diver',
      category: 'advanced',
      duration: '1 day',
      groupSize: 'Max 4 students',
      location: 'Eagle Divers NI',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&crop=center',
      description: 'Experience the underwater world in a completely different light.',
      highlights: ['Night Diving Skills', 'Light Use', 'Navigation Techniques', 'Safety Procedures']
    },
    {
      id: 9,
      title: 'PADI Underwater Navigator',
      category: 'advanced',
      duration: '1 day',
      groupSize: 'Max 4 students',
      location: 'Eagle Divers NI',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop&crop=center',
      description: 'Master underwater navigation using compass and natural references.',
      highlights: ['Compass Navigation', 'Natural Navigation', 'Distance Estimation', '3 Navigation Dives']
    },
    {
      id: 10,
      title: 'PADI Assistant Instructor',
      category: 'professional',
      duration: '2-3 weeks',
      groupSize: 'Max 4 students',
      location: 'Eagle Divers NI',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&crop=center',
      description: 'Learn to teach and assist with PADI courses under instructor supervision.',
      highlights: ['Teaching Methods', 'Student Assessment', 'Course Planning', 'Professional Development']
    }
  ];

  const filteredActivities = selectedCategory === 'all' 
    ? activities 
    : activities.filter(activity => activity.category === selectedCategory);

  return (
    <>
      <Navbar />
      
      <main className="pt-20">
         {/* Hero Section */}
         <section 
           className="py-20 relative overflow-hidden"
           style={{
             backgroundImage: "linear-gradient(rgba(10, 26, 47, 0.7), rgba(26, 188, 156, 0.4)), url('/hero pics/padi hero.jpg')",
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundAttachment: 'fixed'
           }}
         >
           <div className="container mx-auto px-4 text-center relative z-10">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
             >
               <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                 PADI Diving Courses
               </h1>
               <p className="text-lg text-white/90 max-w-2xl mx-auto">
                 Professional PADI certified courses for all skill levels. 
                 Start your underwater adventure with Eagle Divers NI.
               </p>
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <Card className="h-full bg-card border-border hover:shadow-glow transition-all duration-500 relative overflow-hidden group">
                    {activity.rating >= 4.8 && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-coral text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="relative">
                      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                        <img 
                          src={activity.image} 
                          alt={activity.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge variant="outline" className="text-white border-white bg-white/20">
                            {activity.category.charAt(0).toUpperCase() + activity.category.slice(1)}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 right-4 flex items-center gap-1 text-white">
                          <Star className="h-4 w-4 fill-sunny text-sunny" />
                          <span className="font-semibold">{activity.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {activity.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{activity.description}</p>

                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {activity.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {activity.groupSize}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">What's Included:</h4>
                        <ul className="space-y-1">
                          {activity.highlights.map((highlight, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button 
                        className="w-full btn-bubble bg-surface-gradient hover:shadow-glow group/btn"
                        asChild
                      >
                        <Link to="/contact">
                          Book Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardFooter>
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