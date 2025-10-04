import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    course: '',
    message: ''
  });

  const courseOptions = {
    'SSI Courses': [
      'Try Scuba',
      'Open Water Diver',
      'Deep Diving Specialty',
      'Enriched Air Nitrox',
      'Perfect Buoyancy',
      'Assistant Instructor'
    ],
    'PADI Courses': [
      'PADI Open Water Diver',
      'PADI Adventure Diver',
      'PADI Basic Freediver',
      'PADI Advanced Open Water Diver',
      'PADI Rescue Diver',
      'PADI Enriched Air Diver'
    ],
    'Other Activities': [
      'Snorkeling Tour',
      'Boat Trip',
      'Equipment Rental',
      'Guided Dive',
      'Group Booking',
      'Custom Package'
    ]
  };
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.course.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill all required fields",
        description: "All fields marked with * are required.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/sendemail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData)
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          course: '',
          message: ''
        });
      } else {
        toast({
          title: "Error sending message",
          description: "Please try again or contact us directly at info@eagledivers.com",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly at info@eagledivers.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Antrim', 'Northern Ireland'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+44 7756 699880'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@eaglediversni.com', 'admin@eaglediversni.com'],
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon - Sun: 9:00 AM - 5:00 PM'],
    },
  ];

  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        {/* Header */}
        <section 
          className="py-20 relative overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(rgba(10, 26, 47, 0.7), rgba(26, 188, 156, 0.4)), url('/hero pics/contact hero .jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${100 + Math.random() * 20}%`,
                }}
                animate={{
                  y: [-20, -window.innerHeight - 100],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Book Your Adventure
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Ready to explore the underwater world? Contact us to book your diving 
                experience or ask any questions about our courses.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-card border-border shadow-depth">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-foreground mb-2">
                      Book Your Adventure
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Ready to explore the underwater world? Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            placeholder="Enter your full name"
                            required
                            className="transition-colors focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder="your.email@example.com"
                            required
                            className="transition-colors focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            placeholder="+44 7123 456789"
                            required
                            className="transition-colors focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="date">Preferred Date</Label>
                          <Input
                            id="date"
                            type="date"
                            value={formData.date}
                            onChange={(e) => handleChange('date', e.target.value)}
                            className="transition-colors focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="course">Course/Activity *</Label>
                        <Select value={formData.course} onValueChange={(value) => handleChange('course', value)} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a course or activity" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(courseOptions).map(([category, courses]) => (
                              <div key={category}>
                                <SelectGroup>
                                  <SelectLabel className="font-semibold text-blue-600">{category}</SelectLabel>
                                  {courses.map((course) => (
                                    <SelectItem key={course} value={course}>
                                      {course}
                                    </SelectItem>
                                  ))}
                                </SelectGroup>
                              </div>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          placeholder="Tell us about your diving experience, preferred dates, group size, or any special requirements..."
                          rows={5}
                          required
                          className="transition-colors focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-sm text-gray-500 mt-1">Please include any special requirements or questions</p>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending Message...
                          </>
                        ) : (
                          <><Send className="mr-2 h-5 w-5" />Send Message</>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    We're here to help you plan the perfect diving experience. 
                    Reach out to us through any of the channels below.
                  </p>
                </div>

                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <Card className="p-6 bg-card border-border hover:shadow-float transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">
                              {info.title}
                            </h3>
                            <div className="space-y-1">
                              {info.details.map((detail, i) => (
                                <p key={i} className="text-muted-foreground">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Card className="overflow-hidden bg-card border-border">
                    <iframe
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://maps.google.com/maps?q=Eagle+Divers+dive+club,+Antrim,+Northern+Ireland&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    ></iframe>
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

export default Contact;