import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [filter, setFilter] = useState('All');

  const courses = [
    {
      title: 'Open Water Diver',
      level: 'Beginner',
      duration: '3-4 days',
      maxDepth: '18m',
      price: '$299',
      description: 'Start your diving journey with our comprehensive beginner course. Learn essential skills in confined water before exploring the NI.',
      features: ['Theory & Pool Training', '4 Open Water Dives', 'PADI Certification', 'Equipment Included'],
      category: 'Beginner',
      popular: true,
      image: '/images/padi-open-water.jpg',
    },
    {
      title: 'Advanced Open Water',
      level: 'Intermediate',
      duration: '2-3 days',
      maxDepth: '30m',
      price: '$249',
      description: 'Enhance your diving skills with specialized adventure dives including deep diving, navigation, and wreck exploration.',
      features: ['5 Adventure Dives', 'Deep & Navigation', 'Wreck Diving', 'Night Diving'],
      category: 'Advanced',
      popular: false,
      image: '/images/PADI-Advanced-Open-Water.jpg',
    },
    {
      title: 'Rescue Diver',
      level: 'Advanced',
      duration: '3-4 days',
      maxDepth: '30m',
      price: '$349',
      description: 'Learn to prevent and manage diving emergencies. Develop leadership skills and enhance your safety awareness.',
      features: ['Emergency Response', 'Rescue Scenarios', 'First Aid Training', 'Leadership Skills'],
      category: 'Professional',
      popular: false,
      image: '/images/dive_stress_rescue.jpg',
    },
    {
      title: 'Divemaster',
      level: 'Professional',
      duration: '2-3 weeks',
      maxDepth: '40m',
      price: '$699',
      description: 'Become a diving professional. Lead dives, assist instructors, and guide certified divers on underwater adventures.',
      features: ['Leadership Training', 'Guide Certification', 'Professional Skills', 'Career Pathway'],
      category: 'Professional',
      popular: false,
      image: '/images/divemaster.jpg',
    },
    {
      title: 'Nitrox Specialty',
      level: 'Specialty',
      duration: '1 day',
      maxDepth: '40m',
      price: '$149',
      description: 'Learn to dive with enriched air nitrox for longer bottom times and shorter surface intervals.',
      features: ['Nitrox Theory', 'Gas Analysis', 'Dive Planning', 'Safety Procedures'],
      category: 'Advanced',
      popular: false,
      image: '/images/PADI_ENRICHED_AIR.jpg',
    },
    {
      title: 'Deep Diving Specialty',
      level: 'Specialty',
      duration: '2 days',
      maxDepth: '40m',
      price: '$199',
      description: 'Explore the depths safely with proper planning, equipment, and techniques for deep water diving.',
      features: ['Deep Dive Planning', 'Safety Procedures', 'Equipment Setup', '4 Deep Dives'],
      category: 'Advanced',
      popular: false,
      image: '/images/PADI_DEEP_DIVER.jpg',
    },
  ];

  const filters = ['All', 'Beginner', 'Advanced', 'Professional'];

  const filteredCourses = filter === 'All' 
    ? courses 
    : courses.filter(course => course.category === filter);

  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        {/* Header */}
        <section 
          className="py-20 relative overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(rgba(10, 26, 47, 0.7), rgba(26, 188, 156, 0.4)), url('/images/hero-section pic.jpg')",
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
                Diving Courses
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Professional PADI certified courses for all skill levels. 
                Start your underwater adventure with Eagle Divers in the NI.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter & Courses */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {filters.map((filterOption) => (
                <Button
                  key={filterOption}
                  variant={filter === filterOption ? "default" : "outline"}
                  onClick={() => setFilter(filterOption)}
                  className={filter === filterOption ? "bg-surface-gradient" : ""}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {filterOption}
                </Button>
              ))}
            </motion.div>

            {/* Courses Grid */}
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <Card className="h-full bg-card border-border hover:shadow-glow transition-all duration-500 relative overflow-hidden group">
                    {course.popular && (
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
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge variant="outline" className="text-white border-white bg-white/20">
                            {course.level}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="text-2xl font-bold text-white">{course.price}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {course.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{course.description}</p>

                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          Max {course.maxDepth}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">What's Included:</h4>
                        <ul className="space-y-1">
                          {course.features.map((feature, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              {feature}
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
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Courses;