import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useToast } from '@/hooks/use-toast';
import emailjs from "@emailjs/browser";

function sendmail(){
  emailjs.init({
        publicKey: "G36A-jsbmi4ia1odR",
      });
}



const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const courseParam = params.get('course');
    const locationParam = params.get('location');
      const offerParam = params.get('offer');
    if (courseParam || locationParam || offerParam) {
      setFormData(prev => ({
        ...prev,
        course: courseParam || prev.course,
        location: locationParam || prev.location,
        offer: offerParam || prev.offer
      }));
      if (courseParam) params.delete('course');
      if (locationParam) params.delete('location');
      if (offerParam) params.delete('offer');
      navigate({ search: params.toString() }, { replace: true });
      setTimeout(() => {
        if (formRef.current) {
          const rect = formRef.current.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          window.scrollTo({
            top: rect.top + scrollTop - 180,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location.search, navigate]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: null,
    course: '',
    location: '',
      offer: '',
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
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || (!formData.course.trim() && !formData.offer.trim()&&!formData.location.trim()) || !formData.message.trim()) {
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
      // const response = await fetch('/sendemail.php', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   body: new URLSearchParams(formData)
      // });
      console.log(formData);
      emailjs.init({
  publicKey: 'G36A-jsbmi4ia1odR',
  // Do not allow headless browsers
  blockHeadless: true,
  blockList: {
    // Block the suspended emails
    list: ['foo@emailjs.com', 'bar@emailjs.com'],
    // The variable contains the email address
    watchVariable: 'userEmail',
  },
  limitRate: {
    // Set the limit rate for the application
    id: 'app',
    // Allow 1 request per 10s
    throttle: 10000,
  },
});

      emailjs.send('service_6gvo2tp', 'template_xh2u7md', formData).then((response) => {
      
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
       location: '',
       offer: '',
       message: ''
        });
      }, (error) => {
        console.error('Error sending email');
        toast({
          title: "Error sending message",
          description: error,
          variant: "destructive"
        });
      })
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly at info@eagledivers.com",
        variant: "destructive"
      });
    } finally {
      emailjs.send('service_6gvo2tp', 'template_c3r9i89', { email: formData.email, name: formData.name }).then((response) => {
        console.log('Email sent successfully:', response);
      }).catch((error) => {
        console.error('Error sending email:', error);
      });

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
      details: ['Antrim, Northern Ireland'],
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
      <Helmet>
        <title>Contact Eagle Divers - NI Diving Center</title>
        <meta name="description" content="Get in touch with Eagle Divers for scuba diving courses, tours, and inquiries. Located in NI, professional PADI instructors." />
        <meta name="keywords" content="contact Eagle Divers, NI diving center, scuba diving booking, diving inquiries, PADI instructors" />
        <link rel="canonical" href="https://eaglediversni.com/contact" />
        <meta property="og:title" content="Contact Eagle Divers - NI Diving Center" />
        <meta property="og:description" content="Book your scuba diving adventure with Eagle Divers in NI. Professional courses and tours." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eaglediversni.com/contact" />
        <meta property="og:image" content="/images/logo-1-1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Eagle Divers - NI Diving Center" />
        <meta name="twitter:description" content="Book your scuba diving adventure with Eagle Divers in NI. Professional courses and tours." />
        <meta name="twitter:image" content="/images/logo-1-1.png" />
      </Helmet>
      <Navbar />
      
      <main >
        {/* Header */}
        <section 
          className="py-40 relative overflow-hidden"
          style={{
            // height: '60vh',
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
          
          <div className="container mx-auto px-4 text-center relative z-10 top-20">
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
                className="space-y-8"
              >
                <div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      Book Your Adventure
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      Ready to explore the underwater world? Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>
                <Card className="bg-card border-border shadow-depth pt-4">
                  
                  <CardContent>
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
                          <div style={{ position: 'relative' }} className="w-full">
                            <DatePicker
                              selected={formData.date ? new Date(formData.date) : null}
                              onChange={(date: Date | null) => handleChange('date', date ? date.toISOString().split('T')[0] : '')}
                              customInput={
                                <div className="w-full relative">
                                  <Input
                                    id="date"
                                    name="date"
                                    value={formData.date || ''}
                                    onChange={(e) => handleChange('date', e.target.value)}
                                    className="transition-colors focus:ring-2 focus:ring-blue-500 pr-10"
                                    autoComplete="off"
                                    placeholder="Select a date"
                                  />
                                  <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', display: 'flex', alignItems: 'center', height: '100%' }}>
                                    <Calendar size={20} style={{ color: '#2563eb' }} />
                                  </span>
                                </div>
                              }
                              dateFormat="yyyy-MM-dd"
                              wrapperClassName="w-full"
                              popperPlacement="bottom"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {formData.offer ? (
                          <Label htmlFor="course">Selected Offer *</Label>
                        ) : formData.location ? (
                          <Label htmlFor="course">Selected Trip *</Label>
                        ) : (
                          <Label htmlFor="course">Course/Activity *</Label>
                        )}
                        {formData.offer ? (
                          <Input
                            id="course"
                            value={formData.offer}
                            readOnly
                            className="bg-muted text-muted-foreground cursor-not-allowed"
                          />
                        ) : formData.location ? (
                          <Input
                            id="course"
                            value={formData.location}
                            readOnly
                            className="bg-muted text-muted-foreground cursor-not-allowed"
                          />
                        ) : (
                          <Select value={formData.course} onValueChange={(value) => handleChange('course', value)} required>
                            <SelectTrigger className={formData.course ? "text-gray-900" : "text-gray-400"}>
                              <SelectValue placeholder="Select a course or activity">
                                <span className={formData.course ? "text-gray-200" : "text-gray-400"}>
                                  {formData.course || "Select a course or activity"}
                                </span>
                              </SelectValue>
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
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          style={{ height: "87px" }}
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
                        className="btn-bubble bg-surface-gradient hover:shadow-glow w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  {contactInfo.map((info, index) => {
                    const isPhone = info.title === 'Phone';
                    const isLocation = info.title === 'Location';
                    // Google Maps link for the pinned location
                    const mapsUrl = 'https://maps.google.com/maps?q=Eagle+Divers+dive+club,+Antrim,+Northern+Ireland&t=&z=14&ie=UTF8&iwloc=&output=embed';
                    const cardContent = (
                      <Card className={`p-6 bg-card border-border hover:shadow-float transition-all duration-300 py-8 ${(isPhone || isLocation) ? 'cursor-pointer hover:bg-blue-800' : ''}`}>
                        <div className="flex items-center space-x-4 ">
                          <div className="p-3 bg-primary/10 rounded-lg ">
                            <info.icon className="h-6 w-6 text-primary margin-auto" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">
                              {info.title}
                            </h3>
                            <div className="flex flex-row flex-wrap gap-6 items-center">
                              {info.title === 'Email'
                                ? info.details.map((detail, i) => (
                                    <>
                                      <a key={i} href={`mailto:${detail}`} className="text-muted-foreground  underline-offset-4 hover:text-primary hover:underline transition-colors transition-period-300">
                                        {detail}
                                      </a>
                                      {i < info.details.length - 1 && (
                                        <span className="mx-2 text-gray-400">|</span>
                                      )}
                                    </>
                                  ))
                                : info.details.map((detail, i) => (
                                    <>
                                      <p key={i} className="text-muted-foreground">
                                        {detail}
                                      </p>
                                      {i < info.details.length - 1 && (
                                        <span className="mx-2 text-gray-400">|</span>
                                      )}
                                    </>
                                  ))}
                            </div>
                          </div>
                        </div>
                      </Card>
                    );
                    return (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      >
                        {isPhone ? (
                          <a href={`tel:${info.details[0]}`} aria-label={`Call ${info.details[0]}`} style={{ textDecoration: 'none', display: 'block' }}>
                            {cardContent}
                          </a>
                        ) : isLocation ? (
                          <a href={mapsUrl.replace('&output=embed', '')} aria-label="View location on Google Maps" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                            {cardContent}
                          </a>
                        ) : (
                          cardContent
                        )}
                      </motion.div>
                    );
                  })}
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