import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import CoursesSection from '@/components/home/CoursesSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Eagle Divers - NI Diving Center | Professional Scuba Diving Courses</title>
        <meta name="description" content="Dive into the NI with Eagle Divers. Professional scuba diving courses, snorkeling tours, and underwater adventures. PADI certified instructors." />
        <meta name="keywords" content="scuba diving, NI, diving courses, PADI, snorkeling, underwater tours, diving center, Egypt diving" />
        <link rel="canonical" href="https://eaglediversni.com/" />
        <meta property="og:title" content="Eagle Divers - NI Diving Center" />
        <meta property="og:description" content="Professional scuba diving courses and underwater adventures in the NI" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eaglediversni.com/" />
        <meta property="og:image" content="/images/logo-1-1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eagle Divers - NI Diving Center" />
        <meta name="twitter:description" content="Professional scuba diving courses and underwater adventures in the NI" />
        <meta name="twitter:image" content="/images/logo-1-1.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Eagle Divers NI Diving Center",
            "description": "Professional scuba diving courses, snorkeling tours, and underwater adventures in Northern Ireland",
            "url": "https://eaglediversni.com",
            "telephone": "+44 7756 699880",
            "email": "info@eaglediversni.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Antrim",
              "addressRegion": "Northern Ireland",
              "addressCountry": "GB"
            },
            "openingHours": "Mo-Su 09:00-17:00",
            "priceRange": "$$",
            "image": "/images/logo-1-1.png"
          })}
        </script>
      </Helmet>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        ) : (
          <div key="content">
            <Navbar />
            <main>
              <HeroSection />
              <AboutSection />
              <CoursesSection />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
