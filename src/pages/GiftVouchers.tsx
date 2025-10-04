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
  Award,
  Users,
  Calendar,
  Phone,
  MessageCircle,
  Sparkles,
  MapPin,
  Heart,
  Group,
  Check, 
} from 'lucide-react';


import scubaMan from "@/components/icons/scubaMan";
import discover_scuba from '@/components/icons/discover_scuba';
import DryOpenWater from '@/components/icons/dry_open_water';
import DrySuit from '@/components/icons/dry_suit';
import Enriched from '@/components/icons/enriched';

const GiftVouchers = () => {
  const specialOffers = [
    {
      id: 'discover-scuba-sea',
      title: 'Discover Scuba Diving',
      location: 'At Sea',
      price: '£90',
      description: 'Experience the thrill of scuba diving in open water under the guidance of our certified instructors.',
      color: 'turquoise',
      icon: scubaMan,
      features: ['Open water experience', 'Certified instructor guidance', 'All equipment included', 'Safety briefing']
    },
    {
      id: 'discover-scuba-pool',
      title: 'Discover Scuba Diving',
      location: 'In a Swimming Pool',
      price: '£50',
      description: 'A safe, fun, and easy introduction for beginners who want to try scuba in a controlled environment.',
      color: 'coral',
      icon: discover_scuba,
      features: ['Controlled environment', 'Perfect for beginners', 'Safe introduction', 'Try before you dive']
    },
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

  // --- بيانات الرحلات الدولية ---
  const diveTrips = [
    {
      destination: 'Sharm El Sheikh',
      title: 'Dive Trip to Sharm El Sheikh',
      date: 'October 24, 2026',
      description: 'Fly from London Gatwick to the Red Sea’s diving paradise, Sharm El Sheikh, for an unforgettable 5-day adventure filled with world-class diving and cultural exploration.',
      includes: [
        'Return flights from London Gatwick to Sharm El Sheikh',
        'Hotel accommodation with airport transfers',
        '5-day diving package – enjoy 10 dives at world-renowned sites',
        'Guided visit to the Old Market for authentic culture and food'
      ],
      closingRemarks: [
        'Crystal-clear waters, vibrant reefs, and unforgettable dive sites await you in Sharm El Sheikh, the jewel of the Red Sea.',
        '🌴 Dive in, explore, and experience the best of Egypt above and below the surface!'
      ]
    },
    {
      destination: 'Hurghada',
      title: 'Scuba Diving Holiday from Belfast to Hurghada',
      date: 'March 21, 2026',
      description: 'Escape to the Red Sea for an unforgettable diving adventure! Join us on a week-long holiday from Belfast to Hurghada, staying at the King Tut Aqua Beach Resort, an all-inclusive beachfront hotel.',
      includes: [
        'Return flights from Belfast to Hurghada',
        '7 nights\' stay at the 4* King Tut Aqua Beach Resort – All-Inclusive',
        'Airport transfers included',
        '5-day scuba diving package to explore vibrant coral reefs',
        '1 day activity – your choice of quad biking or a relaxing boat trip',
        'Transfers between the hotel and dive boat included'
      ],
      closingRemarks: []
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
        {/* --- Hero Section remains the same --- */}
        <section className="relative pt-20 h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "linear-gradient(rgba(10, 26, 47, 0.8), rgba(255, 107, 53, 0.3)), url('/hero pics/packges hero.jpg')"
            }}
          />
          <div className="container mx-auto px-4 text-center relative z-10">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Courses & Trips with <span className="text-coral">Eagle Divers NI</span>
              </h1>
              <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
                Dive into adventure – learn locally, explore globally, and save with our exclusive packages.
              </p>
          </div>
        </section>
        
        {/* --- قسم الرحلات الدولية (النسخة النهائية) --- */}
        <section className="py-20 bg-ocean-deep">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready for Your Next Adventure?
              </h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                Let Eagle Divers NI take you on the diving holiday of a lifetime to the world's most spectacular dive sites.
              </p>
            </motion.div>
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {diveTrips.map((trip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 h-full flex flex-col transition-all duration-300"
                >
                  <h3 className="text-3xl font-bold text-white mb-2">{trip.destination}</h3>
                  <p className="text-coral font-semibold mb-3">{trip.title}</p>
                  <div className="flex items-center gap-2 text-slate-300 mb-6 border-b border-slate-700 pb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{trip.date}</span>
                  </div>
                  <p className="text-slate-300 mb-6">{trip.description}</p>
                  
                  <div className="mt-auto">
                    <div className="border-t border-slate-700 pt-6">
                      <h4 className="font-semibold text-white mb-4 text-lg flex items-center gap-2">
                        <Award className="w-5 h-5 text-turquoise" />
                        Your holiday includes:
                      </h4>
                      <ul className="space-y-3">
                        {trip.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300">
                            <Check className="w-5 h-5 text-turquoise flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {trip.closingRemarks.length > 0 && (
                      <div className="mt-8 pt-6 border-t border-slate-700">
                        {trip.closingRemarks.map((remark, i) => (
                          <p key={i} className="text-white/90 italic text-center mb-2">{remark}</p>
                        ))}
                      </div>
                    )}

                    <div className="mt-8">
                       <Button size="lg" className="w-full bg-coral hover:bg-coral/90 text-white btn-bubble" asChild>
                         <Link to={`/contact?offer=${encodeURIComponent(trip.title)}`}>
                           Enquire Now
                         </Link>
                       </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- قسم العروض الخاصة (كما هو مع تعديل العنوان) --- */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Local Courses & Experiences
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Choose from our range of diving courses designed to suit every level, right here in Northern Ireland.
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
                  className="relative group h-full flex cursor-pointer"
                  onClick={() => { window.location.href = `/contact?offer=${encodeURIComponent(offer.title)}`; }}
                >
                  <Card className="relative overflow-hidden bg-gradient-to-br from-card to-card/80 shadow-float hover:shadow-glow transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10 h-full flex flex-col">
                    <div className="absolute inset-0 z-20 h-full w-full rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300" style={{background: 'linear-gradient(235deg, rgba(10, 26, 47, 0.9) 0%, rgba(10, 26, 47, 0.9) 100%)'}}>
                        <span className={`px-8 py-4 opacity-120 rounded-lg font-bold text-white bg-gradient-to-br from-${offer.color} to-${offer.color}/80 shadow-lg text-2xl`}>Book Now</span>
                    </div>
                    <CardHeader className="text-center pb-6 relative z-10 flex-shrink-0">
                      <div className="relative mb-6 py-2 flex items-center justify-center">
                          <offer.icon width={55} height={55} className="group-hover:scale-110 transition-transform duration-300" fill="#3498db" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {offer.title}
                      </CardTitle>
                      <div className="flex items-center px-3 py-1 rounded-full bg-muted/50 text-sm text-muted-foreground mb-4 mx-auto w-fit">
                        <MapPin className="w-4 h-4 mr-1" />
                        {offer.location}
                      </div>
                      <div className="relative">
                        <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                          {offer.price}
                        </div>
                        <div className={`w-16 h-0.5 bg-gradient-to-r from-${offer.color} to-transparent mx-auto`} />
                      </div>
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
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Why Choose Us & Promise sections unchanged --- */}
        <section className="py-20 bg-card">
          {/* ... Why Choose Us content ... */}
        </section>
        <section className="py-20 bg-ocean-gradient relative overflow-hidden">
          {/* ... Our Promise content ... */}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default GiftVouchers;
