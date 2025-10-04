import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPopularCourses } from '@/data/courses';

const CoursesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const courses = getPopularCourses();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Professional Training
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-6">
            Diving <span className="text-primary">Courses</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From beginner to professional level, our PADI and SSI certified courses 
            will guide you through every step of your diving journey.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="h-full bg-background border-border hover:shadow-glow transition-all duration-500 relative overflow-hidden group">
                {course.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-coral text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}

                {/* Card glow effect */}
                <div className="absolute inset-0 bg-surface-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

                <CardHeader className="relative">
                  <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <Badge variant="outline" className="text-white border-white bg-white/20">
                        {course.level}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className="text-white border-white bg-white/20">
                        {course.organization}
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <Link to="/SSI">
              View All Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;