import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import { 
  getAllBlogPosts, 
  categories, 
  formatBlogDate 
} from '@/data/blogs';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = getAllBlogPosts();

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Using formatBlogDate from blogs.ts instead of local function

  return (
    <>
      <Navbar />
      
      <main >
        {/* Hero Section */}
        <section className="py-40 xl:py-60 xxl:py-80 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed "
            style={{
              backgroundImage: "linear-gradient(rgba(10, 26, 47, 0.7), rgba(26, 188, 156, 0.4)), url('/hero pics/blog hero.jpg')"
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
                    {React.createElement(category.icon, { className: "h-4 w-4 mr-2" })}
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
                    <Card className="overflow-hidden bg-card border-border shadow-float hover:shadow-glow transition-all duration-300 h-full flex flex-col">
                      <Link to={`/blog/${post.slug}`} className="block">
                        {/* Removed image container and replaced with text-based header */}
                        <div className="bg-gradient-to-br h-[150px] from-turquoise/90 to-seaweed/60 p-6">
                          <div className="flex items-center justify-between mb-4">
                            <Badge 
                              variant="secondary" 
                              className="bg-white/90 text-ocean-deep capitalize"
                            >
                              {post.category.replace('-', ' ')}
                            </Badge>
                            <div className="flex items-center gap-1 text-ocean-deep text-sm">
                              <Eye className="h-4 w-4" />
                              {post.views}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-ocean-deep text-center  line-clamp-2">
                            {post.title}
                          </h3>
                        </div>
                      </Link>
                      
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4" />
                          {formatBlogDate(post.date)}
                          <span>•</span>
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                        <Link to={`/blog/${post.slug}`}>
                          <CardTitle className="text-lg text-foreground hover:text-turquoise transition-colors cursor-pointer">
                            {post.title}
                          </CardTitle>
                        </Link>
                        <p className="text-muted-foreground line-clamp-3">
                          {post.excerpt}
                        </p>
                      </CardHeader>
                      
                      <CardContent className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <User className="h-4 w-4" />
                              {post.author}
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mt-2">
                            {post.tags.slice(0, 3).map((tag, i) => (
                              <Badge key={i} variant="outline" className="text-xs p-2 px-4">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="mt-auto">
                          <Link to={`/blog/${post.slug}`}>
                            <Button 
                              className="w-full btn-bubble mt-8 bg-surface-gradient hover:shadow-glow"
                              size="lg"
                            >
                              Read More
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
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