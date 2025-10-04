import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/hero pics/main hero.jpg')` }}
      >
        <div className="absolute inset-0 bg-ocean-deep/60" />
      </div>

      {/* Animated Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
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

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        <motion.h1
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Dive into the{' '}
          <span className="bg-gradient-to-r from-primary to-seafoam bg-clip-text text-transparent">
            NI
          </span>
          <br />
          with Eagle Divers
        </motion.h1>

        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Explore, Learn, and Discover with Certified Diving Experts. 
          Experience the underwater wonders of the NI with professional 
          PADI / SSI instructors.
        </motion.p>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center items-center"
        >
          <Button 
            size="lg" 
            className="btn-bubble bg-surface-gradient hover:shadow-glow text-lg px-8 py-3 group"
            asChild
          >
            <Link to="/contact">
              Book Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12 text-white/60 text-sm"
        >
          <p>PADI Certified • 35+ Years Experience • NI Specialists</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;