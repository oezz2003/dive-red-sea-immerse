import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Star, ArrowRight, Filter, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { courses } from '@/data/courses';

const Courses = () => {
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Beginner', 'Advanced', 'Professional'];

  const filteredCourses = filter === 'All'
    ? courses
    : courses.filter(course => course.category === filter);

  return (
    <>
      <Helmet>
        <title>PADI Diving Courses - Eagle Divers NI Diving Center</title>
        <meta name="description" content="Professional PADI scuba diving courses in NI. From beginner Open Water to advanced specialties. PADI certified instructors." />
        <meta name="keywords" content="PADI diving courses, scuba diving certification, NI diving, beginner diving, advanced diving, Eagle Divers" />
        <link rel="canonical" href="https://eaglediversni.com/courses" />
        <meta property="og:title" content="PADI Diving Courses - Eagle Divers NI" />
        <meta property="og:description" content="Professional PADI scuba diving courses from beginner to advanced levels in NI" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eaglediversni.com/courses" />
        <meta property="og:image" content="/images/logo-1-1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PADI Diving Courses - Eagle Divers NI" />
        <meta name="twitter:description" content="Professional PADI scuba diving courses from beginner to advanced levels in NI" />
        <meta name="twitter:image" content="/images/logo-1-1.png" />
      </Helmet>
      <Navbar />

      <main>
        {/* Header */}
        <section
          className="py-40 xl:py-60 xxl:py-80 relative overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(rgba(10, 26, 47, 0.7), rgba(26, 188, 156, 0.4)), url('/padi/PADI-Advanced-Open-Water.jpg')",
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
                Start your underwater adventure with Eagle Divers Northern Ireland.
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
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
                            {course.level}
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

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{course.description}</p>

                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <ArrowDown className="w-4 h-4" />
                          Max Depth {course.maxDepth}
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

                    <CardFooter className="mt-auto">
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
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Courses;