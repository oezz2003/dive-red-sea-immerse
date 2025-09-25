import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  User,
  Clock,
  ArrowRight,
  Search,
  Filter,
  Eye,
  Share2,
  Camera,
  Fish,
  Globe,
  BookOpen
} from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen },
    { id: 'diving-tips', name: 'Diving Tips', icon: Fish },
    { id: 'destinations', name: 'Destinations', icon: Globe },
    { id: 'photography', name: 'Photography', icon: Camera },
    { id: 'news', name: 'News & Updates', icon: Share2 },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Diving Spots in the NI',
      excerpt: 'Discover the most breathtaking underwater locations that make the NI a world-class diving destination.',
      category: 'destinations',
      author: 'Ahmed Hassan',
      date: '2024-01-15',
      readTime: '8 min read',
      views: 1250,
      image: '/images/gallery-1-2.jpg',
      tags: ['NI', 'Diving Spots', 'Travel Guide']
    },
    {
      id: 2,
      title: 'Underwater Photography: Capturing the Perfect Shot',
      excerpt: 'Learn professional techniques for underwater photography and how to capture stunning images of marine life.',
      category: 'photography',
      author: 'Sarah Mitchell',
      date: '2024-01-12',
      readTime: '12 min read',
      views: 890,
      image: '/images/gallery-1-3.jpg',
      tags: ['Photography', 'Underwater', 'Tips']
    },
    {
      id: 3,
      title: 'Safety First: Essential Diving Equipment Checklist',
      excerpt: 'A comprehensive guide to essential diving equipment that every diver should have for safe underwater adventures.',
      category: 'diving-tips',
      author: 'Captain Omar',
      date: '2024-01-10',
      readTime: '6 min read',
      views: 2100,
      image: '/images/course-1-4.jpg',
      tags: ['Safety', 'Equipment', 'Beginner Tips']
    },
    {
      id: 4,
      title: 'Eagle Divers Wins Best Diving Center Award 2024',
      excerpt: 'We are proud to announce that Eagle Divers has been recognized as the Best Diving Center in the NI region.',
      category: 'news',
      author: 'Eagle Divers Team',
      date: '2024-01-08',
      readTime: '4 min read',
      views: 3200,
      image: '/images/eagle_divers_ni_team.jpg',
      tags: ['News', 'Awards', 'Achievement']
    },
    {
      id: 5,
      title: 'Marine Life Conservation: How Divers Can Help',
      excerpt: 'Learn about marine conservation efforts in the NI and how responsible diving practices can protect underwater ecosystems.',
      category: 'diving-tips',
      author: 'Dr. Fatima Al-Rashid',
      date: '2024-01-05',
      readTime: '10 min read',
      views: 1580,
      image: '/images/gallery-1-5.jpg',
      tags: ['Conservation', 'Marine Life', 'Environment']
    },
    {
      id: 6,
      title: 'Night Diving: A Different World Underwater',
      excerpt: 'Experience the magic of night diving and discover the nocturnal marine life that comes alive after dark.',
      category: 'destinations',
      author: 'Mohamed Farid',
      date: '2024-01-03',
      readTime: '7 min read',
      views: 960,
      image: '/images/gallery-1-6.jpg',
      tags: ['Night Diving', 'Adventure', 'Marine Life']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "linear-gradient(rgba(10, 26, 47, 0.7), rgba(26, 188, 156, 0.4)), url('/images/hero-section pic.jpg')"
            }}
          />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Diving <span className="text-turquoise">Stories</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Explore the underwater world through our diving adventures, tips, 
                and insights from the NI's most experienced dive professionals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`${
                      selectedCategory === category.id
                        ? 'bg-turquoise hover:bg-turquoise/90'
                        : ''
                    }`}
                  >
                    <category.icon className="h-4 w-4 mr-2" />
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {filteredPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <Fish className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms or category filter.</p>
              </motion.div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <Card className="overflow-hidden bg-card border-border shadow-float hover:shadow-glow transition-all duration-300 h-full">
                      <div className="relative h-48 bg-gradient-to-br from-turquoise/20 to-seaweed/20">
                        <div className="absolute inset-0 bg-ocean-gradient opacity-80" />
                        <div className="absolute top-4 left-4">
                          <Badge 
                            variant="secondary" 
                            className="bg-white/90 text-ocean-deep capitalize"
                          >
                            {post.category.replace('-', ' ')}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 right-4 flex items-center gap-1 text-white text-sm">
                          <Eye className="h-4 w-4" />
                          {post.views}
                        </div>
                      </div>
                      
                      <CardHeader>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4" />
                          {formatDate(post.date)}
                          <span>•</span>
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                        <CardTitle className="text-xl text-foreground hover:text-turquoise transition-colors cursor-pointer">
                          {post.title}
                        </CardTitle>
                        <p className="text-muted-foreground line-clamp-3">
                          {post.excerpt}
                        </p>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="h-4 w-4" />
                            {post.author}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button 
                          className="w-full btn-bubble bg-surface-gradient hover:shadow-glow"
                          size="lg"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-ocean-gradient relative overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-white/10 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Stay Updated with Our Latest Stories
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
                Subscribe to our newsletter for the latest diving tips, destination guides, 
                and underwater photography insights delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Button 
                  size="lg"
                  className="btn-bubble bg-coral hover:bg-coral/90 text-white shadow-glow"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Subscribe
                </Button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                Join 5,000+ diving enthusiasts. Unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;