import { Helmet } from 'react-helmet-async';
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
  Clock,
  Users,
  Star,
  ArrowRight,
  Ship,
  Anchor,
  Fish
} from 'lucide-react';
import { courses, getCoursesByCategory } from '@/data/courses';

const Activities = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses', icon: Waves },
    { id: 'Beginner', name: 'Beginner', icon: Fish },
    { id: 'Advanced', name: 'Advanced', icon: Anchor },
    { id: 'Professional', name: 'Professional', icon: Ship },
  ];

  const filteredCourses = selectedCategory === 'all'
    ? courses
    : getCoursesByCategory(selectedCategory);

  return (
    <>
      <Helmet>
        <title>Diving Courses - Eagle Divers NI Diving Center</title>
        <meta name="description" content="Professional PADI scuba diving courses in Northern Ireland. From beginner to professional level. Certified instructors." />
        <meta name="keywords" content="PADI diving courses, scuba diving certification, NI diving, beginner diving, advanced diving, Eagle Divers" />
        <link rel="canonical" href="https://eaglediversni.com/courses" />
        <meta property="og:title" content="Diving Courses - Eagle Divers NI" />
        <meta property="og:description" content="Professional PADI scuba diving courses from beginner to professional levels in NI" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eaglediversni.com/courses" />
        <meta property="og:image" content="/images/logo-1-1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Diving Courses - Eagle Divers NI" />
        <meta name="twitter:description" content="Professional PADI scuba diving courses from beginner to professional levels in NI" />
        <meta name="twitter:image" content="/images/logo-1-1.png" />
      </Helmet>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section
          className="py-40 xl:py-60 xxl:py-80 relative overflow-hidden"
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
                Diving Courses
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Professional PADI certified courses for all skill levels.
                Start your underwater adventure with Eagle Divers Northern Ireland.
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
                Choose Your Course Level
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Filter by skill level to find your perfect diving course
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
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${selectedCategory === category.id
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

        {/* Courses Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col bg-card border-border transition-all duration-500 relative overflow-hidden">
                    {course.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-coral text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="relative">
                      <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <Badge variant="outline" className="text-white border-white bg-white/20">
                            {course.category}
                          </Badge>
                        </div>
                        <div className="absolute top-3 right-3">
                          <Badge variant="outline" className="text-white border-white bg-white/20">
                            PADI
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground transition-colors">
                        {course.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4 flex-grow">
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
                          {course.features.slice(0, 4).map((feature, i) => (
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
                        <Link to={`/contact?course=${encodeURIComponent(course.title)}`}>
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
      </main>

      <Footer />
    </>
  );
};

export default Activities;