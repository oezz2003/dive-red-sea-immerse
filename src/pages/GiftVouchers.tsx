import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Star, 
  CheckCircle,
  Compass,
  Award,
  Users,
  Calendar,
  Phone,
  Mail,
  MessageCircle,
  Sparkles,
  MapPin,
  Heart,
  Group
} from 'lucide-react';


import scubaMan from "@/components/icons/scubaMan";
import discover_scuba from '@/components/icons/discover_scuba';
import DryOpenWater from '@/components/icons/dry_open_water';
import DrySuit from '@/components/icons/dry_suit';
import Enriched from '@/components/icons/enriched';

const GiftVouchers = () => {
  const specialOffers = [
    // --- العنصر الأول تم تعديله ليصبح رحلة شرم الشيخ (بدون سعر) ---
    {
      id: 'sharm-trip',
      title: 'Dive Trip to Sharm El Sheikh',
      location: 'Sharm El Sheikh | Oct 24, 2026',
      price: '', // السعر فارغ هنا
      description: 'Fly from London Gatwick to the Red Sea’s diving paradise, Sharm El Sheikh, for an unforgettable 5-day adventure with world-class diving and cultural exploration.',
      color: 'turquoise',
      icon: scubaMan,
      features: [
        'Return flights from London Gatwick',
        'Hotel accommodation with airport transfers',
        '5-day diving package (10 dives)',
        'Guided visit to the Old Market'
      ]
    },
    // --- العنصر الثاني تم تعديله ليصبح رحلة الغردقة (بدون سعر) ---
    {
      id: 'hurghada-trip',
      title: 'Scuba Diving Holiday to Hurghada',
      location: 'Hurghada | Mar 21, 2026',
      price: '', // السعر فارغ هنا
      description: 'Escape to the Red Sea for an unforgettable diving adventure! Join us on a week-long holiday from Belfast to Hurghada at an all-inclusive beachfront hotel.',
      color: 'coral',
      icon: scubaMan,
      features: [
        'Return flights from Belfast',
        '7 nights\' stay at 4* All-Inclusive Resort',
        '5-day scuba diving package',
        '1 day activity (quad biking or boat trip)'
      ]
    },
    // --- باقي العروض بقيت كما هي (بالأسعار) ---
    {
      id: 'open-water-drysuit',
      title: 'Open Water + Drysuit Package',
      location: 'Complete Course',
      price: '£775',
      description: 'Get fully certified with your Open Water Diver qualification and learn how to safely use a drysuit — perfect for diving all year round in Northern Ireland and beyond.',
      color: 'seaweed',
      icon: DryOpenWater,
      features: ['Open Water certification', 'Drysuit training', 'Year-round diving', 'Northern Ireland ready']
    },
    {
      id: 'nitrox-course',
      title: 'Enriched Air (Nitrox) Course',
      location: 'Specialty Course',
      price: '£225',
      description: 'Boost your bottom time and reduce fatigue with our Nitrox Course.',
      color: 'sunny',
      icon: Enriched,
      features: ['Extended bottom time', 'Reduced fatigue', 'One free Nitrox tank fill', 'Advanced diving skills']
    },
    {
      id: 'drysuit-course',
      title: 'Drysuit Course',
      location: 'Specialty Course',
      price: '£225',
      description: 'Learn the skills you need to dive comfortably and safely in a drysuit — essential for colder waters and longer dives.',
      color: 'turquoise',
      icon: DrySuit,
      features: ['Drysuit certification', 'Cold water diving', 'Extended dive times', 'Professional training']
    }
  ];

  const whyChooseUs = [
    {
      icon: Heart,
      title: 'Experienced, passionate instructors',
      description: 'Learn from certified professionals who love what they do'
    },
    {
      icon: Group,
      title: 'Small groups for personal attention',
      description: 'Maximum 4 students per instructor for focused learning'
    },
    {
      icon: Calendar,
      title: 'Flexible scheduling around you',
      description: 'We work around your schedule, not the other way around'
    },
    {
      icon: Users ,
      title: 'Courses tailored for local & international diving',
      description: 'Prepare for both Northern Ireland waters and global destinations'
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative pt-20 h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "linear-gradient(rgba(10, 26, 47, 0.8), rgba(255, 107, 53, 0.3)), url('/hero pics/packges hero.jpg')" }}
          />
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="h-8 w-8 text-sunny animate-pulse" />
                <Badge className="bg-coral text-white px-6 py-2 text-lg">
                  Courses & Trips
                </Badge>
                <Sparkles className="h-8 w-8 text-sunny animate-pulse" />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Our Adventures with <span className="text-coral">Eagle Divers NI</span>
              </h1>
              <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
                Dive into adventure – learn, explore, and save with our exclusive packages.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- قسم العروض والرحلات المدمج --- */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Courses & Trips
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Choose from our range of international trips and local courses designed to suit every diver.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialOffers.map((offer, index) => (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative group h-full flex cursor-pointer "
                  onClick={() => { window.location.href = `/contact?offer=${encodeURIComponent(offer.title)}`; }}
                >
                  <Card className="relative overflow-hidden bg-gradient-to-br from-card to-card/80 shadow-float hover:shadow-glow transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10 h-full flex flex-col">

                    <div className="absolute inset-0 z-20 h-full w-full rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300" style={{background: 'linear-gradient(235deg, rgba(10, 26, 47, 0.9) 0%, rgba(10, 26, 47, 0.9) 100%)'}}>
                        <div className="z-30 flex items-center justify-center">
                          <span className={`px-8 py-4 opacity-120 rounded-lg font-bold text-white bg-gradient-to-br from-${offer.color} to-${offer.color}/80 shadow-lg text-2xl`}>Enquire Now</span>
                        </div>
                    </div>
                   
                    <CardHeader className="text-center pb-6 relative z-10 flex-shrink-0">
                      <div className="relative mb-6 py-2 flex items-center justify-center">
                          <offer.icon 
                            width={55} 
                            height={55} 
                            className="group-hover:scale-110 transition-transform duration-300" 
                            fill="#3498db"
                          />
                      </div>
                      
                      <CardTitle className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {offer.title}
                      </CardTitle>
                      
                      <div className="flex items-center px-3 py-1 rounded-full bg-muted/50 text-sm text-muted-foreground mb-4 mx-auto w-fit">
                        <MapPin className="w-4 h-4 mr-1" />
                        {offer.location}
                      </div>
                      
                      {/* --- الشرط الجديد: قسم السعر يظهر فقط إذا كان السعر موجودًا --- */}
                      {offer.price && (
                        <div className="relative">
                          <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                            {offer.price}
                          </div>
                          <div className={`w-16 h-0.5 bg-gradient-to-r from-${offer.color} to-transparent mx-auto`} />
                        </div>
                      )}
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                        {offer.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="space-y-6 relative z-10 flex flex-col flex-1 justify-end">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground text-lg flex items-center gap-2">
                          <Award className={`w-5 h-5 text-${offer.color} stroke-2`} />
                          What's Included
                        </h4>
                        <ul className="space-y-2">
                          {offer.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                              <CheckCircle className={`w-4 h-4 text-${offer.color} mt-0.5 flex-shrink-0 stroke-[1.5]`} />
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-4">
                        <div className="block sm:hidden md:hidden mt-6">
                          <Button size="lg" className="w-full bg-coral text-white" onClick={e => { e.stopPropagation(); window.location.href = `/contact?offer=${encodeURIComponent(offer.title)}`; }}>
                            Enquire Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                    
                    <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${offer.color}/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-card">
          {/* ... محتوى القسم لم يتغير ... */}
        </section>

        {/* Our Promise */}
        <section className="py-20 bg-ocean-gradient relative overflow-hidden">
          {/* ... محتوى القسم لم يتغير ... */}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default GiftVouchers;
