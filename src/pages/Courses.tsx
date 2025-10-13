import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, ArrowRight, Filter, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [filter, setFilter] = useState('All');

  const courses = [
    {
      title: 'Try Scuba',
      level: 'Beginner',
      duration: '2-3 hours',
      maxDepth: '5m',
      description: 'Experience your first underwater breaths safely with instructor guidance in confined water. Perfect introduction to scuba diving for beginners wanting to try before certification',
      features: ['Confined Water Session', 'Basic Skills', 'Equipment Introduction', 'Safety Briefing', 'SSI Try Scuba recognition card'],
      category: 'Beginner',
      popular: true,
      image: '/ssi/scuba-diver.webp',
    },
    {
      title: 'Open Water Diver',
      level: 'Beginner',
      duration: '16-32 hours',
      maxDepth: '18m',
      description: 'Globally recognized certification program combining personalized training with in-water practice. Begin lifelong adventures as a certified scuba diver comfortable underwater.',
      features: ['Academic Training', 'Confined Water Training', '4 Open Water Dives', 'SSI Certification', 'Equipment Included'],
      category: 'Beginner',
      popular: true,
      image: '/ssi/open-water.webp',
    },
    {
      title: 'Deep Diving Specialty',
      level: 'Specialty',
      duration: '2 days',
      maxDepth: '40m',
        description:
          'Become deep diver exploring iconic dive sites and marine life. Learn to dive 18-40 meters through academic sessions and open water dives safely',
        features: [
          'Explore depths between 18 and 40 meters',
          'Learn deep dive planning and execution',
          'Understand gas consumption at depth',
          'Use dive computers for deep dives',
          'Prerequisite for some advanced training',
          'Discover iconic deep dive sites',
        ],
      category: 'Advanced',
      popular: false,
      image: '/ssi/deep diving.jpg',
    },
    {
      title: 'Enriched Air Nitrox',
      level: 'Specialty',
      duration: '1 day',
      maxDepth: '40m',
        description:
          'Extend dive time, shorten surface intervals, explore sites longer with enriched air. Increase bottom times and safety margins using up to 40% oxygen.',
        features: [
          'Extend no-decompression limits',
          'Increase bottom times',
          'Shorten surface intervals',
          'Safely plan and dive with up to 40% oxygen',
          'Learn to analyze nitrox cylinders',
          'Improve safety margins',
        ],
      category: 'Advanced',
      popular: false,
      image: '/ssi/enriched air nitrox.jpg',
    },
    {
      title: 'Perfect Buoyancy',
      level: 'Specialty',
      duration: '1 day',
      maxDepth: '18m',
      description:
        'Glide through ocean effortlessly getting most from dives. Improve buoyancy control with advanced skills protecting environment in every diving situation comfortably.',
      features: [
        'Improve buoyancy control',
        'Reduce air consumption',
        'Protect marine life',
        'Master advanced buoyancy techniques',
        'Enhance dive comfort and safety',
        'Counts towards SSI Advanced Open Water Diver rating',
      ],
      category: 'Advanced',
      popular: false,
      image: '/ssi/perfect buoyancy.jpg',
    },
    {
      title: "Assistant Instructor",
      level: "Professional",
      duration: "2-3 weeks",
      maxDepth: "N/A",
      description:
        "First professional instructor level teaching academic and confined water OWD sessions. Supervise surface skills, issue certifications, crucial step toward Open Water Instructor status",
      features: [
        "Prerequisites: SSI Divemaster or equivalent, 100 logged dives, 18 years old",
        "Teach academic and confined water sessions of OWD (with exceptions)",
        "Supervise surface skills during OWD open water training",
        "Issue certifications for Try Dive, Scuba Skills Update, Perfect Buoyancy",
        "Qualify as a Specialty Instructor for some SSI Specialty programs",
        "Develop teaching and leadership skills",
        "First professional level to teach OWD sessions, supervise training, issue certifications, and progress towards full instructor status.",
        "First step on the SSI Scuba Instructor pathway",
      ],
      category: "Professional",
      popular: false,
      image: "/ssi/assistant instructor.jpg",
    },
  ];

  const filters = ['All', 'Beginner', 'Advanced', 'Professional'];

  const filteredCourses = filter === 'All' 
    ? courses 
    : courses.filter(course => course.category === filter);

  return (
    <>
      <Helmet>
        <title>SSI Diving Courses - Eagle Divers NI Diving Center</title>
        <meta name="description" content="Professional SSI scuba diving courses in NI. From beginner Try Scuba to advanced specialties. PADI certified instructors." />
        <meta name="keywords" content="SSI diving courses, scuba diving certification, NI diving, beginner diving, advanced diving, Eagle Divers" />
        <link rel="canonical" href="https://eaglediversni.com/SSI" />
        <meta property="og:title" content="SSI Diving Courses - Eagle Divers NI" />
        <meta property="og:description" content="Professional SSI scuba diving courses from beginner to advanced levels in NI" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eaglediversni.com/SSI" />
        <meta property="og:image" content="/images/logo-1-1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SSI Diving Courses - Eagle Divers NI" />
        <meta name="twitter:description" content="Professional SSI scuba diving courses from beginner to advanced levels in NI" />
        <meta name="twitter:image" content="/images/logo-1-1.png" />
      </Helmet>
      <Navbar />
      
      <main>
        {/* Header */}
         <section 
           className="py-40 xl:py-60 xxl:py-80 relative overflow-hidden"
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
                            SSI
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