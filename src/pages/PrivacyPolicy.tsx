import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Lock,
  Eye,
  Mail,
  Phone,
  MapPin,
  Clock,
  FileText
} from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      icon: FileText,
      content: [
        'Personal identification information (Name, email address, phone number)',
        'Diving certification details and experience level',
        'Medical information relevant to diving safety',
        'Payment and billing information',
        'Website usage data and cookies',
        'Communication preferences and marketing consent'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        'To provide and deliver our diving services and courses',
        'To communicate with you about bookings and safety requirements',
        'To process payments and manage your account',
        'To improve our services and customer experience',
        'To send marketing communications (with your consent)',
        'To comply with legal and regulatory requirements'
      ]
    },
    {
      title: 'Information Sharing',
      icon: Shield,
      content: [
        'We do not sell, trade, or rent your personal information to third parties',
        'Information may be shared with diving insurance providers when required',
        'Emergency contact information may be shared with medical professionals if needed',
        'We may share data with service providers who assist in our operations',
        'Legal authorities may receive information when required by law',
        'Anonymized data may be used for industry research and safety improvement'
      ]
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        'We use industry-standard encryption to protect your data',
        'Regular security audits and updates are performed',
        'Access to personal information is restricted to authorized personnel only',
        'Secure payment processing through certified payment providers',
        'Regular backups with encrypted storage',
        'Incident response procedures in place for any security breaches'
      ]
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'privacy@eaglediversni.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+44 7756 699880'
    },
    {
      icon: MapPin,
      title: 'Address',
      detail: 'Antrim, Northern Ireland'
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-ocean-gradient overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <Shield className="h-8 w-8 text-white" />
                <Badge className="bg-white/20 text-white px-6 py-2 text-lg border-white/30">
                  Your Privacy Matters
                </Badge>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Privacy <span className="text-coral">Policy</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                At Eagle Divers, we are committed to protecting your privacy and ensuring 
                the security of your personal information. This policy explains how we collect, 
                use, and safeguard your data.
              </p>
              <div className="flex items-center justify-center gap-2 mt-6 text-white/80">
                <Clock className="h-5 w-5" />
                <span>Last updated: January 15, 2024</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Policy Sections */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-card border-border shadow-float hover:shadow-glow transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-turquoise/10 rounded-lg">
                          <section.icon className="h-6 w-6 text-turquoise" />
                        </div>
                        <CardTitle className="text-xl text-foreground">
                          {section.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {section.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-2 h-2 rounded-full bg-turquoise mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Rights Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Your Rights & Choices
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                You have several rights regarding your personal information. 
                We are committed to helping you exercise these rights.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Access',
                  description: 'Request a copy of the personal information we hold about you',
                  icon: Eye
                },
                {
                  title: 'Correction',
                  description: 'Request correction of inaccurate or incomplete information',
                  icon: FileText
                },
                {
                  title: 'Deletion',
                  description: 'Request deletion of your personal information (subject to legal requirements)',
                  icon: Shield
                },
                {
                  title: 'Portability',
                  description: 'Request transfer of your data to another service provider',
                  icon: Lock
                }
              ].map((right, index) => (
                <motion.div
                  key={right.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center bg-background border-border shadow-float hover:shadow-glow transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center mb-4">
                        <right.icon className="h-8 w-8 text-coral" />
                      </div>
                      <CardTitle className="text-lg text-foreground">
                        {right.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {right.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookies and Tracking */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Cookies & Tracking
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We use cookies and similar tracking technologies to enhance your browsing 
                    experience and analyze website usage. Cookies help us remember your preferences 
                    and provide personalized content.
                  </p>
                  <p>
                    You can control cookie settings through your browser preferences. However, 
                    disabling certain cookies may limit some website functionality.
                  </p>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Types of cookies we use:</h3>
                    <ul className="space-y-1 ml-4">
                      <li>• Essential cookies (required for website functionality)</li>
                      <li>• Analytics cookies (help us improve our website)</li>
                      <li>• Marketing cookies (for personalized content)</li>
                      <li>• Preference cookies (remember your settings)</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="bg-turquoise/5 border-turquoise/20 p-8">
                  <div className="text-center">
                    <Lock className="h-16 w-16 text-turquoise mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Data Retention
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We retain your personal information only as long as necessary to 
                      provide our services and comply with legal obligations.
                    </p>
                    <div className="text-left space-y-2 text-sm text-muted-foreground">
                      <p>• Customer data: 7 years after last activity</p>
                      <p>• Medical information: 10 years (regulatory requirement)</p>
                      <p>• Marketing data: Until consent is withdrawn</p>
                      <p>• Website analytics: 26 months maximum</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-ocean-gradient relative overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
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
                Questions About Your Privacy?
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
                If you have any questions about this privacy policy or how we handle your data, 
                please don't hesitate to contact our privacy team.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                  >
                    <info.icon className="h-8 w-8 text-white mx-auto mb-4" />
                    <h3 className="font-semibold text-white mb-2">{info.title}</h3>
                    <p className="text-white/80 text-sm">{info.detail}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;