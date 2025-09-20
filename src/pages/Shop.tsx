import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingBag, 
  Star,
  ArrowRight,
  Package,
  Truck,
  Shield,
  Gift
} from 'lucide-react';

const Shop = () => {
  const comingSoonFeatures = [
    {
      icon: Package,
      title: 'Diving Equipment',
      description: 'Professional diving gear, masks, fins, and more',
      color: 'turquoise'
    },
    {
      icon: Gift,
      title: 'Gift Vouchers',
      description: 'Perfect gifts for diving enthusiasts',
      color: 'coral'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick shipping to your location',
      color: 'seaweed'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'Only the best diving equipment brands',
      color: 'sunny'
    }
  ];

  const popularItems = [
    {
      name: 'Professional Diving Mask',
      category: 'Equipment',
      price: '$89',
      rating: 4.9,
      image: '/images/diving-mask.jpg'
    },
    {
      name: 'Wetsuit 3mm',
      category: 'Suits',
      price: '$159',
      rating: 4.8,
      image: '/images/wetsuit-shop.jpg'
    },
    {
      name: 'Diving Fins',
      category: 'Equipment',
      price: '$69',
      rating: 4.7,
      image: '/images/diving-fins.jpg'
    },
    {
      name: 'Underwater Camera',
      category: 'Photography',
      price: '$299',
      rating: 4.9,
      image: '/images/underwater-camera.jpg'
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "linear-gradient(rgba(10, 26, 47, 0.7), rgba(255, 107, 53, 0.3)), url('/images/diving-equipment.jpg')"
            }}
          />
          
          {/* Floating shopping icons */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 180, 360],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              >
                <ShoppingBag className="h-6 w-6 text-white/20" />
              </motion.div>
            ))}
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Badge className="mb-6 bg-coral text-white px-6 py-2 text-lg">
                Coming Soon
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Eagle Divers <span className="text-coral">Shop</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Your one-stop destination for professional diving equipment, gear, and accessories. 
                Quality products for every underwater adventure.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  size="lg" 
                  className="btn-bubble bg-coral hover:bg-coral/90 text-white"
                >
                  <Gift className="mr-2 h-5 w-5" />
                  Get Gift Voucher
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-ocean-deep"
                >
                  <Package className="mr-2 h-5 w-5" />
                  Notify Me
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Coming Soon Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                What's Coming to Our Shop
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                We're preparing an amazing collection of diving equipment and accessories. 
                Be the first to know when we launch!
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {comingSoonFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <Card className="text-center bg-card border-border shadow-float hover:shadow-glow transition-all duration-300">
                    <CardHeader>
                      <div className={`mx-auto w-16 h-16 rounded-full bg-${feature.color}/20 flex items-center justify-center mb-4`}>
                        <feature.icon className={`h-8 w-8 text-${feature.color}`} />
                      </div>
                      <CardTitle className="text-xl text-foreground">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Items Preview */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Popular Items Preview
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Get a sneak peek at some of the premium diving equipment 
                we'll be offering in our upcoming shop.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {popularItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="overflow-hidden bg-background border-border shadow-float">
                    <div className="relative h-48 bg-gradient-to-br from-ocean-surface/20 to-turquoise/20">
                      <div className="absolute inset-0 bg-ocean-gradient opacity-60" />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white/90 text-ocean-deep">
                          {item.price}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white">
                        <Star className="h-4 w-4 fill-sunny text-sunny" />
                        <span className="font-semibold">{item.rating}</span>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg text-foreground">
                            {item.name}
                          </CardTitle>
                          <Badge variant="outline" className="mt-2">
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-ocean-gradient relative overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-6 h-6 bg-white/10 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.2, 0.8, 0.2],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: Math.random() * 3,
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
                Be the First to Shop
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
                Join our newsletter to get exclusive early access to our shop, 
                special discounts, and diving gear recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button 
                  size="lg"
                  className="btn-bubble bg-coral hover:bg-coral/90 text-white shadow-glow flex-1"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Notify Me When Ready
                </Button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                We'll never spam you. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Shop;