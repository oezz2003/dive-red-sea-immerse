import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Gift, 
  Heart,
  Star,
  Users,
  Calendar,
  DollarSign,
  Send,
  Sparkles,
  Award,
  Anchor
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const GiftVouchers = () => {
  const [formData, setFormData] = useState({
    recipientName: '',
    recipientEmail: '',
    senderName: '',
    senderEmail: '',
    voucherType: '',
    customAmount: '',
    message: '',
    deliveryDate: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Gift Voucher Ordered!",
      description: "Your diving gift voucher will be sent shortly. Thank you!",
    });
    setFormData({
      recipientName: '',
      recipientEmail: '',
      senderName: '',
      senderEmail: '',
      voucherType: '',
      customAmount: '',
      message: '',
      deliveryDate: '',
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const voucherPackages = [
    {
      id: 'discovery',
      name: 'Discovery Package',
      value: '$99',
      description: 'Perfect introduction to diving',
      includes: ['Try Dive session', 'Equipment rental', 'Instructor guidance', 'Certificate'],
      color: 'turquoise',
      icon: Star,
      popular: false
    },
    {
      id: 'adventure',
      name: 'Adventure Package',
      value: '$299',
      description: 'Complete diving course experience',
      includes: ['Open Water course', 'All equipment', '4 open water dives', 'Digital certification'],
      color: 'coral',
      icon: Award,
      popular: true
    },
    {
      id: 'explorer',
      name: 'Explorer Package',
      value: '$549',
      description: 'Advanced diving experiences',
      includes: ['Advanced Open Water', 'Specialty course', 'Boat dives', 'Underwater photography'],
      color: 'seaweed',
      icon: Anchor,
      popular: false
    },
    {
      id: 'custom',
      name: 'Custom Amount',
      value: 'Any Value',
      description: 'Choose your own amount',
      includes: ['Flexible use', 'Valid for 12 months', 'All services accepted', 'Transferable'],
      color: 'sunny',
      icon: Gift,
      popular: false
    }
  ];

  const whyChooseUs = [
    {
      icon: Calendar,
      title: '12 Month Validity',
      description: 'Plenty of time to plan the perfect diving adventure'
    },
    {
      icon: Users,
      title: 'Transferable',
      description: 'Can be used by anyone, perfect flexibility'
    },
    {
      icon: DollarSign,
      title: 'Best Value',
      description: 'Premium diving experiences at competitive prices'
    },
    {
      icon: Heart,
      title: 'Memorable Gift',
      description: 'Give the gift of underwater adventure and lasting memories'
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
              backgroundImage: "linear-gradient(rgba(10, 26, 47, 0.6), rgba(255, 107, 53, 0.4)), url('/images/hero-section pic.jpg')"
            }}
          />
          
          {/* Floating gift icons */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${100 + Math.random() * 20}%`,
                }}
                animate={{
                  y: [-20, -window.innerHeight - 100],
                  opacity: [0, 0.8, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              >
                <Gift className="h-8 w-8 text-white/20" />
              </motion.div>
            ))}
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="h-8 w-8 text-sunny animate-pulse" />
                <Badge className="bg-coral text-white px-6 py-2 text-lg">
                  Perfect Gift
                </Badge>
                <Sparkles className="h-8 w-8 text-sunny animate-pulse" />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Gift <span className="text-coral">Vouchers</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Give the ultimate gift of underwater adventure. Perfect for birthdays, 
                holidays, or any special occasion. Let them choose their own diving experience!
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
                  Purchase Voucher
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-ocean-deep"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  View Packages
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Gift Packages */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Choose Your Gift Package
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                From beginner-friendly try dives to advanced diving courses, 
                we have the perfect gift voucher for every diving enthusiast.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {voucherPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative"
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-coral text-white px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <Card className={`relative overflow-hidden bg-card border-border shadow-float hover:shadow-glow transition-all duration-300 ${pkg.popular ? 'ring-2 ring-coral/50' : ''}`}>
                    <div className={`absolute top-0 left-0 w-full h-2 bg-${pkg.color}`} />
                    
                    <CardHeader className="text-center pb-4">
                      <div className={`mx-auto w-16 h-16 rounded-full bg-${pkg.color}/20 flex items-center justify-center mb-4`}>
                        <pkg.icon className={`h-8 w-8 text-${pkg.color}`} />
                      </div>
                      <CardTitle className="text-xl text-foreground">
                        {pkg.name}
                      </CardTitle>
                      <div className="text-3xl font-bold text-primary">
                        {pkg.value}
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {pkg.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">Includes:</h4>
                        <ul className="space-y-1">
                          {pkg.includes.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className={`w-2 h-2 rounded-full bg-${pkg.color}`} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        className={`w-full btn-bubble bg-${pkg.color} hover:bg-${pkg.color}/90 text-white`}
                        onClick={() => handleChange('voucherType', pkg.id)}
                      >
                        Select Package
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Purchase Form */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-background border-border shadow-depth">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                      <Gift className="h-6 w-6 text-coral" />
                      Purchase Gift Voucher
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the details below to create a personalized diving gift voucher.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="recipientName">Recipient Name</Label>
                          <Input
                            id="recipientName"
                            value={formData.recipientName}
                            onChange={(e) => handleChange('recipientName', e.target.value)}
                            placeholder="Who is this gift for?"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="recipientEmail">Recipient Email</Label>
                          <Input
                            id="recipientEmail"
                            type="email"
                            value={formData.recipientEmail}
                            onChange={(e) => handleChange('recipientEmail', e.target.value)}
                            placeholder="recipient@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="senderName">Your Name</Label>
                          <Input
                            id="senderName"
                            value={formData.senderName}
                            onChange={(e) => handleChange('senderName', e.target.value)}
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="senderEmail">Your Email</Label>
                          <Input
                            id="senderEmail"
                            type="email"
                            value={formData.senderEmail}
                            onChange={(e) => handleChange('senderEmail', e.target.value)}
                            placeholder="your@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="voucherType">Voucher Package</Label>
                          <Select value={formData.voucherType} onValueChange={(value) => handleChange('voucherType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a package" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="discovery">Discovery Package - $99</SelectItem>
                              <SelectItem value="adventure">Adventure Package - $299</SelectItem>
                              <SelectItem value="explorer">Explorer Package - $549</SelectItem>
                              <SelectItem value="custom">Custom Amount</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="deliveryDate">Delivery Date</Label>
                          <Input
                            id="deliveryDate"
                            type="date"
                            value={formData.deliveryDate}
                            onChange={(e) => handleChange('deliveryDate', e.target.value)}
                          />
                        </div>
                      </div>

                      {formData.voucherType === 'custom' && (
                        <div className="space-y-2">
                          <Label htmlFor="customAmount">Custom Amount</Label>
                          <Input
                            id="customAmount"
                            type="number"
                            min="50"
                            value={formData.customAmount}
                            onChange={(e) => handleChange('customAmount', e.target.value)}
                            placeholder="Enter amount ($50 minimum)"
                          />
                        </div>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="message">Personal Message</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          placeholder="Add a personal message to make this gift extra special..."
                          rows={4}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full btn-bubble bg-coral hover:bg-coral/90 text-white shadow-glow"
                        size="lg"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Purchase Gift Voucher
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Why Choose Us */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Why Choose Our Gift Vouchers?
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Give more than just a gift - give an unforgettable underwater adventure 
                    that will create lasting memories.
                  </p>
                </div>

                <div className="space-y-6">
                  {whyChooseUs.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <Card className="p-6 bg-background border-border hover:shadow-float transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-turquoise/10 rounded-lg">
                            <feature.icon className="h-6 w-6 text-turquoise" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">
                              {feature.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Sample Voucher Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Card className="overflow-hidden bg-coral-gradient shadow-glow">
                    <CardContent className="p-8 text-center text-white">
                      <div className="mb-4">
                        <img 
                          src="/images/logo-1-1.png" 
                          alt="Eagle Divers Logo" 
                          className="h-12 w-auto object-contain mx-auto mb-4"
                        />
                        <h3 className="text-2xl font-bold mb-2">Eagle Divers</h3>
                        <p className="text-white/90">Gift Voucher</p>
                      </div>
                      <div className="border-t border-b border-white/30 py-4 my-4">
                        <p className="text-3xl font-bold">$299</p>
                        <p className="text-white/90">Adventure Package</p>
                      </div>
                      <p className="text-sm text-white/80">
                        Valid for 12 months • Transferable • All locations
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default GiftVouchers;