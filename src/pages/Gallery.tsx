import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Camera, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: '/images/gallery-1-2.jpg',
      alt: 'Diving in Northern Ireland - Underwater coral reef',
      category: 'Underwater'
    },
    {
      src: '/images/gallery-1-3.jpg',
      alt: 'Scuba diving course - Student diver',
      category: 'Courses'
    },
    {
      src: '/images/gallery-1-5.jpg',
      alt: 'Marine life in Northern Ireland waters',
      category: 'Marine Life'
    },
    {
      src: '/images/gallery-1-6.jpg',
      alt: 'Diving equipment and gear',
      category: 'Equipment'
    },
    {
      src: '/images/gallery-1-7.jpg',
      alt: 'Dive boat and surface activities',
      category: 'Surface'
    },
    {
      src: '/images/gallery-1-8.jpg',
      alt: 'Diving adventures and exploration',
      category: 'Adventure'
    },
    {
      src: '/images/gallery-1-9.jpg',
      alt: 'Underwater photography and marine conservation',
      category: 'Conservation'
    }
  ];

  const categories = ['All', 'Underwater', 'Courses', 'Marine Life', 'Equipment', 'Surface', 'Adventure', 'Conservation'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Diving Gallery - Eagle Divers NI Diving Center</title>
        <meta name="description" content="Explore our diving gallery showcasing underwater adventures, marine life, and scuba diving experiences in Northern Ireland." />
        <meta name="keywords" content="diving gallery, scuba diving photos, underwater photography, NI diving, marine life, diving experiences" />
        <link rel="canonical" href="https://eaglediversni.com/gallery" />
        <meta property="og:title" content="Diving Gallery - Eagle Divers NI" />
        <meta property="og:description" content="Explore stunning underwater photography and diving experiences from Eagle Divers NI" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eaglediversni.com/gallery" />
        <meta property="og:image" content="/images/logo-1-1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Diving Gallery - Eagle Divers NI" />
        <meta name="twitter:description" content="Explore stunning underwater photography and diving experiences from Eagle Divers NI" />
        <meta name="twitter:image" content="/images/logo-1-1.png" />
      </Helmet>
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-deep to-turquoise opacity-10" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <Camera className="h-12 w-12 text-primary mr-4" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Diving Gallery
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Explore the underwater world of Northern Ireland through our diving experiences
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </motion.div>

            {/* Image Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group cursor-pointer relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium">{image.category}</p>
                    <p className="text-xs opacity-90">{image.alt}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="h-4 w-4 text-white" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-ocean-deep to-turquoise text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Create Your Own Underwater Memories?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join us for an unforgettable diving experience in Northern Ireland
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="bg-white text-ocean-deep hover:bg-gray-100"
                >
                  <Link to="/SSI">View Courses</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white text-white hover:bg-white hover:text-ocean-deep"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Gallery;