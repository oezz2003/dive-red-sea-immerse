export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorImage: string;
  date: string;
  tags?: string[];
  image?: string;
  views?: number;
  readTime?: string;
}

import { BookOpen, Fish, Globe, Camera, Share2 } from 'lucide-react';

export const categories = [
  { id: 'all', name: 'All Posts', icon: BookOpen },
  { id: 'diving-tips', name: 'Diving Tips', icon: Fish },
  { id: 'destinations', name: 'Destinations', icon: Globe },
  { id: 'photography', name: 'Photography', icon: Camera },
  { id: 'news', name: 'News & Updates', icon: Share2 },
];

// Helper functions
export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts;
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostById = (id: number): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getRelatedPosts = (currentId: number, category: string, limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post => post.id !== currentId && post.category === category)
    .slice(0, limit);
};

export const formatBlogDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const getCategoryName = (categoryId: string): string => {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.name : categoryId;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Finding Calm Beneath the Surface – How Scuba Diving Reduces Stress",
    slug: "finding-calm-beneath-the-surface",
    excerpt: "In a world filled with constant noise, notifications, and pressure, finding true peace can be difficult. But for scuba divers, calm is found just a few metres beneath the waves.",
    content: `
      <h2>Exploring the Red Sea's Underwater Paradise</h2>
      
      <p>In a world filled with constant noise, notifications, and pressure, finding true peace can be difficult. But for scuba divers, calm is found just a few metres beneath the waves. The ocean offers an environment unlike any other — one that promotes mindfulness, relaxation, and a deeper sense of well-being.</p>
      
      <p>When you descend into the water, the outside world fades away. Your breathing slows, your focus narrows, and your mind enters a state of flow. The simple rhythm of inhaling and exhaling through your regulator is almost meditative — similar to controlled breathing exercises used in yoga and mindfulness practice. This focus on breath helps to lower stress hormones, reduce anxiety, and improve mental clarity.</p>
      
      <p>Weightlessness also plays a role in reducing stress. Floating effortlessly underwater relieves physical tension, while the steady movement of the current soothes your body and mind. The result? A calm, balanced mental state that many divers describe as “underwater meditation.”</p>
      
      <p>Research has even shown that time spent underwater can lower blood pressure and promote a sense of happiness. Divers often return from a trip feeling refreshed, centered, and more resilient to everyday stressors.</p>
      
      <p>Whether you’re exploring coral gardens in the Red Sea or local waters closer to home, scuba diving offers far more than adventure — it’s a natural therapy for your mind.</p>
      
      
      <p>Ready to experience the healing power of the ocean? Join one of our upcoming dive trips and discover how scuba diving can help you find peace beneath the surface.</p>
    `,
    category: "Wellness",
    author: "Mr. Zee",
    authorImage: "/public/images/team-1-1.jpg",
    date: "2024-07-20",
    tags: ["Scuba Diving", "Stress Relief", "Wellness", "Red Sea"],
    image: "/blogs/bte4.webp",
    views: 245,
    readTime: "3 min read"
  },
  {
    id: 2,
    title: "Connection and Confidence – The Social Side of Scuba Diving",
    slug: "connection-and-confidence",
    excerpt: "While scuba diving may seem like a solitary activity, it's actually built on connection, trust, and teamwork — three elements that have powerful benefits for mental health.",
    content: `
      <h2>The Social Benefits of Scuba Diving</h2>
      
      <p>While scuba diving may seem like a solitary activity, it's actually built on connection, trust, and teamwork — three elements that have powerful benefits for mental health.</p>
      
      <p>Every dive requires cooperation between buddies and dive teams. You rely on each other for safety, communication, and shared experiences. This sense of trust and belonging is one of the reasons divers often form lifelong friendships. Feeling part of a supportive community can help combat loneliness, boost confidence, and strengthen overall emotional well-being.</p>
      
      <p>Scuba diving also helps build self-confidence. Learning new skills, managing equipment, and navigating the underwater world encourages personal growth and resilience. Each successful dive — whether it's mastering buoyancy, identifying a new species, or completing your first deep dive — reinforces your sense of accomplishment and self-belief.</p>
      
      <p>The dive community is welcoming and diverse, bringing together people from all walks of life who share a love of the ocean. The shared stories, laughter, and post-dive chats create a sense of camaraderie that extends far beyond the water.</p>
      
      <p>In an age where digital interactions often replace real ones, diving offers genuine human connection — something we all need for positive mental health.</p>
      
      
      <p>Join a group dive or one of our Red Sea diving holidays and experience the uplifting social side of scuba diving. It's not just about the dive — it's about the people you meet along the way.</p>
    `,
    category: "Community",
    author: "Mr. Zee",
    authorImage: "/public/images/team-1-2.jpg",
    date: "2024-07-25",
    tags: ["Scuba Diving", "Community", "Confidence", "Social"],
    image: "/blogs/scuba-divers-enter-water-from-boat-via-giant-stride-entry-diving-into-the-water-.jpg",
    views: 189,
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Nature's Therapy – How the Ocean Heals the Mind",
    slug: "natures-therapy-ocean-heals-mind",
    excerpt: "The ocean has long been associated with healing and renewal, and scuba diving allows us to experience that connection on a profound level.",
    content: `
      <h2>The Healing Power of the Ocean</h2>
      
      <p>The ocean has long been associated with healing and renewal, and scuba diving allows us to experience that connection on a profound level. Scientists call it "blue therapy" — the positive psychological effects of being in, on, or near the water.</p>
      
      <p>When you're diving, you're immersed in a sensory world of colour, motion, and quiet. The soft light filtering through the surface, the slow sway of coral, and the graceful movement of marine life create a natural form of meditation. This connection with nature can lower stress, ease symptoms of depression, and boost overall happiness.</p>
      
      <p>Research suggests that spending time in nature — especially near water — increases the release of dopamine and serotonin, the brain's "feel-good" chemicals. Divers often describe feeling calmer, more focused, and more grateful after a dive. It's a reminder of how small we are in the vastness of nature, and how beautiful the world can be when we slow down enough to notice it.</p>
      
      <p>Scuba diving also fosters a sense of purpose. Protecting and respecting marine life encourages mindfulness and environmental awareness, which can increase life satisfaction and emotional balance.</p>
      
      <p>So, if you're feeling overwhelmed or disconnected, consider taking your next break underwater. The ocean doesn't just cleanse the body — it heals the mind.</p>
      
      
      <p>Discover the mental health benefits of scuba diving for yourself. Join us on our next Red Sea adventure and experience the magic of nature's therapy firsthand.</p>
    `,
    category: "Nature",
    author: "Mr. Zee",
    authorImage: "/public/images/team-1-4.jpg",
    date: "2024-07-30",
    tags: ["Ocean", "Nature", "Therapy", "Mental Health"],
    image: "/blogs/shutterstock_141494932-1-1366x800@2x.jpg",
    views: 312,
    readTime: "5 min read"
  },
];