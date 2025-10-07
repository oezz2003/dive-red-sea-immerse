import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  User,
  Clock,
  ArrowLeft,
  Eye,
  Share2,
  Tag
} from 'lucide-react';
import { 
  getBlogPostBySlug, 
  getRelatedPosts,
  formatBlogDate,
  getCategoryName
} from '@/data/blogs';

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || '');
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!post) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }
  
  const relatedPosts = getRelatedPosts(post.id, post.category);
  
  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${post.image})` }}
          />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Link to="/blog">
                <Button variant="outline" className="mb-6 bg-white/10 text-white hover:bg-white/20 border-white/20">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap justify-center gap-4 text-white/90">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatBlogDate(post.date)}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-8">
                <div className="bg-card rounded-lg shadow-md p-6 lg:p-8">
                  {/* Category Badge */}
                  <div className="mb-6">
                    <Badge className="bg-turquoise hover:bg-turquoise/90">
                      {getCategoryName(post.category)}
                    </Badge>
                  </div>
                  
                  {/* Article Content */}
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  
                  {/* Tags */}
                  <div className="mt-8 pt-6 border-t">
                    <div className="flex items-center flex-wrap gap-2">
                      <Tag className="h-5 w-5 text-muted-foreground" />
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Author Info - Removed image */}
                  <div className="mt-8 pt-6 border-t">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-turquoise/20 to-seaweed/20 flex items-center justify-center">
                        <User className="h-8 w-8 text-ocean-deep" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{post.author}</h3>
                        <p className="text-muted-foreground">Diving Instructor & Marine Biologist</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-4">
                {/* Related Posts */}
                <div className="bg-card rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                  
                  <div className="space-y-4">
                    {relatedPosts.length > 0 ? (
                      relatedPosts.map((relatedPost) => (
                        <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                          <Card className="overflow-hidden hover:shadow-md transition-shadow">
                            <CardContent className="p-4">
                              <h4 className="font-medium line-clamp-2 hover:text-turquoise transition-colors">
                                {relatedPost.title}
                              </h4>
                              <div className="flex items-center text-xs text-muted-foreground mt-2">
                                <Calendar className="h-3 w-3 mr-1" />
                                {formatBlogDate(relatedPost.date)}
                              </div>
                              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                                {relatedPost.excerpt}
                              </p>
                            </CardContent>
                          </Card>
                        </Link>
                      ))
                    ) : (
                      <p className="text-muted-foreground">No related articles found.</p>
                    )}
                  </div>
                </div>
                
                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-turquoise/20 to-seaweed/20 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                  <p className="text-muted-foreground mb-4">
                    Get the latest diving tips, travel guides, and underwater photography techniques.
                  </p>
                  
                  <form className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-2 rounded-md border border-border bg-background"
                    />
                    <Button className="w-full bg-turquoise hover:bg-turquoise/90">
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default BlogDetail;