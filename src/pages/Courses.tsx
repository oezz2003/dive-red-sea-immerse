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
      title: 'Try Scuba',
      level: 'Beginner',
      duration: '2-3 hours',
      maxDepth: 'Pool/Shallow',
      description: 'Experience scuba diving for the first time in a safe and controlled environment. Perfect introduction to the underwater world.',
      features: ['Pool Session', 'Basic Skills', 'Equipment Introduction', 'Safety Briefing'],
      category: 'Beginner',
      popular: true,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&crop=center',
    },
    {
      title: 'Open Water Diver',
      level: 'Beginner',
      duration: '3-4 days',
      maxDepth: '18m',
      description: 'Begin your lifelong adventures as a certified scuba diver. Personalized training with in-water practice sessions.',
      features: ['Theory & Pool Training', '4 Open Water Dives', 'SSI Certification', 'Equipment Included'],
      category: 'Beginner',
      popular: true,
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop&crop=center',
    },
    {
      title: 'Advanced Adventurer',
      level: 'Intermediate',
      duration: '2-3 days',
      maxDepth: '30m',
      description: 'Try out five different specialties before committing to full programs. Great way to enhance your diving skills.',
      features: ['5 Adventure Dives', 'Deep & Navigation', 'Wreck Diving', 'Night Diving'],
      category: 'Advanced',
      popular: false,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&crop=center',
    },
    {
      title: 'Deep Diving Specialty',
      level: 'Specialty',
      duration: '2 days',
      maxDepth: '40m',
      description: 'Learn to plan and conduct dives between 18-40 meters deep. Essential for exploring deeper dive sites safely.',
      features: ['Deep Dive Planning', 'Safety Procedures', 'Equipment Setup', '4 Deep Dives'],
      category: 'Advanced',
      popular: false,
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop&crop=center',
    },
    {
      title: 'Wreck Diving Specialty',
      level: 'Specialty',
      duration: '2 days',
      maxDepth: '30m',
      description: 'Discover the thrill of diving on wrecks. Learn skills required to safely navigate and explore sunken structures.',
      features: ['Wreck Navigation', 'Safety Procedures', 'Equipment Setup', '4 Wreck Dives'],
      category: 'Advanced',
      popular: false,
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop&crop=center',
    },
    {
      title: 'Enriched Air Nitrox',
      level: 'Specialty',
      duration: '1 day',
      maxDepth: '40m',
      description: 'Extend your bottom time and reduce surface intervals by learning to dive with enriched air mixtures.',
      features: ['Nitrox Theory', 'Gas Analysis', 'Dive Planning', 'Safety Procedures'],
      category: 'Advanced',
      popular: false,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&crop=center',
    },
    {
      title: 'Perfect Buoyancy',
      level: 'Specialty',
      duration: '1 day',
      maxDepth: '18m',
      description: 'Improve your buoyancy control to enhance your diving experience and protect the aquatic environment.',
      features: ['Buoyancy Techniques', 'Weight Distribution', 'Breathing Control', 'Environmental Awareness'],
      category: 'Advanced',
      popular: false,
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop&crop=center',
    },
    {
      title: 'Night Diving & Limited Visibility',
      level: 'Specialty',
      duration: '1 day',
      maxDepth: '18m',
      description: 'Experience the underwater world in a new light. Learn techniques for safe night diving and limited visibility.',
      features: ['Night Diving Skills', 'Light Use', 'Navigation Techniques', 'Safety Procedures'],
      category: 'Advanced',
      popular: false,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&crop=center',
    },
    {
      title: 'Dive Guide',
      level: 'Professional',
      duration: '1-2 weeks',
      maxDepth: '40m',
      description: 'Learn to safely lead groups of certified divers. First step towards an exciting career as an SSI Professional.',
      features: ['Leadership Training', 'Guide Certification', 'Group Management', 'Safety Protocols'],
      category: 'Professional',
      popular: false,
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop&crop=center',
    },
    {
      title: 'Assistant Instructor',
      level: 'Professional',
      duration: '2-3 weeks',
      maxDepth: '40m',
      description: 'Learn the SSI Teaching System and philosophy. Assist instructors and independently teach SSI programs.',
      features: ['Teaching Methods', 'Student Assessment', 'Course Planning', 'Professional Development'],
      category: 'Professional',
      popular: false,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&crop=center',
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
             backgroundImage: "linear-gradient(rgba(10, 26, 47, 0.7), rgba(26, 188, 156, 0.4)), url('/hero pics/ssi hero.jpg')",
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
                SSI Diving Courses
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Professional SSI certified courses for all skill levels. 
                Start your underwater adventure with Eagle Divers NI.
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