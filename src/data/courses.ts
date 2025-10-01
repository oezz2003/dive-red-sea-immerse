export interface Course {
  id: number;
  title: string;
  level: string;
  duration: string;
  maxDepth: string;
  description: string;
  features: string[];
  category: string;
  popular: boolean;
  image: string;
  organization: 'PADI' | 'SSI';
}

export const courses: Course[] = [
  // SSI Courses
  {
    id: 1,
    title: 'Try Scuba',
    level: 'Beginner',
    duration: '2-3 hours',
    maxDepth: '5m',
    description: 'Experience your first underwater breaths safely with instructor guidance in confined water. Perfect introduction to scuba diving for beginners wanting to try before certification',
    features: ['Confined Water Session', 'Basic Skills', 'Equipment Introduction', 'Safety Briefing', 'SSI Try Scuba recognition card'],
    category: 'Beginner',
    popular: true,
    image: '/ssi/try scuba.jpg',
    organization: 'SSI'
  },
  {
    id: 2,
    title: 'Open Water Diver',
    level: 'Beginner',
    duration: '16-32 hours',
    maxDepth: '18m',
    description: 'Globally recognized certification program combining personalized training with in-water practice. Begin lifelong adventures as a certified scuba diver comfortable underwater.',
    features: ['Academic Training', 'Confined Water Training', '4 Open Water Dives', 'SSI Certification', 'Equipment Included'],
    category: 'Beginner',
    popular: true,
    image: '/ssi/opern water diver.jpg',
    organization: 'SSI'
  },
  {
    id: 3,
    title: 'Advanced Freediver',
    level: 'Specialty',
    duration: 'N/A',
    maxDepth: '30m',
    description: 'Become stronger, more experienced freediver improving skills, trying techniques, discovering disciplines, progressing deeper levels. Increase dive time with advanced breath-holding training.',
    features: [
      'Improve freediving skills and learn new techniques',
      'Explore limits and discover true ability in the deep blue sea',
      'Learn new breath-holding training techniques',
      'Discover exciting freefall and Frenzel techniques',
      'Refine buddy system skills',
      'Learn to plan and safely organize freediving sessions',
      'Contributes to SSI Specialty Freediver, Progressive Freediver, and Master Freediver ratings',
      'Minimum age: 15',
      'Maximum training depth: 30m / 100ft',
      'Prerequisites: Fit to swim, 6 logged Freediving sessions, Freediver (or equivalent)'
    ],
    category: 'Advanced',
    popular: false,
    image: '/ssi/advanced freediver.jpg',
    organization: 'SSI'
  },
  {
    id: 4,
    title: 'Deep Diving Specialty',
    level: 'Specialty',
    duration: '2 days',
    maxDepth: '40m',
    description: 'Become deep diver exploring iconic dive sites and marine life. Learn to dive 18-40 meters through academic sessions and open water dives safely',
    features: [
      'Explore depths between 18 and 40 meters',
      'Learn deep dive planning and execution',
      'Understand gas consumption at depth',
      'Use dive computers for deep dives',
      'Prerequisite for some advanced training',
      'Discover iconic deep dive sites'
    ],
    category: 'Advanced',
    popular: false,
    image: '/ssi/deep diving.jpg',
    organization: 'SSI'
  },
  {
    id: 5,
    title: 'Enriched Air Nitrox',
    level: 'Specialty',
    duration: '1 day',
    maxDepth: '40m',
    description: 'Extend dive time, shorten surface intervals, explore sites longer with enriched air. Increase bottom times and safety margins using up to 40% oxygen.',
    features: [
      'Extend no-decompression limits',
      'Increase bottom times',
      'Shorten surface intervals',
      'Safely plan and dive with up to 40% oxygen',
      'Learn to analyze nitrox cylinders',
      'Improve safety margins'
    ],
    category: 'Advanced',
    popular: false,
    image: '/ssi/enriched air nitrox.jpg',
    organization: 'SSI'
  },
  {
    id: 6,
    title: 'Perfect Buoyancy',
    level: 'Specialty',
    duration: '1 day',
    maxDepth: '18m',
    description: 'Glide through ocean effortlessly getting most from dives. Improve buoyancy control with advanced skills protecting environment in every diving situation comfortably.',
    features: [
      'Improve buoyancy control',
      'Reduce air consumption',
      'Protect marine life',
      'Master advanced buoyancy techniques',
      'Enhance dive comfort and safety',
      'Counts towards SSI Advanced Open Water Diver rating'
    ],
    category: 'Advanced',
    popular: false,
    image: '/ssi/perfect buoyancy.jpg',
    organization: 'SSI'
  },
  {
    id: 7,
    title: 'Assistant Instructor',
    level: 'Professional',
    duration: '2-3 weeks',
    maxDepth: 'N/A',
    description: 'First professional instructor level teaching academic and confined water OWD sessions. Supervise surface skills, issue certifications, crucial step toward Open Water Instructor status',
    features: [
      'Prerequisites: SSI Divemaster or equivalent, 100 logged dives, 18 years old',
      'Teach academic and confined water sessions of OWD (with exceptions)',
      'Supervise surface skills during OWD open water training',
      'Issue certifications for Try Dive, Scuba Skills Update, Perfect Buoyancy',
      'Qualify as a Specialty Instructor for some SSI Specialty programs',
      'Develop teaching and leadership skills',
      'First professional level to teach OWD sessions, supervise training, issue certifications, and progress towards full instructor status.',
      'First step on the SSI Scuba Instructor pathway'
    ],
    category: 'Professional',
    popular: false,
    image: '/ssi/assistant instructor.jpg',
    organization: 'SSI'
  },

  // PADI Courses
  {
    id: 8,
    title: 'PADI Open Water Diver',
    level: 'Beginner',
    duration: '3-4 days',
    maxDepth: '18m',
    description: 'The world\'s most popular scuba diving course. Learn to dive safely and confidently.',
    features: ['Theory & Pool Training', '4 Open Water Dives', 'PADI Certification', 'Equipment Included'],
    category: 'Beginner',
    popular: true,
    image: '/padi/course-1-3.jpg',
    organization: 'PADI'
  },
  {
    id: 9,
    title: 'PADI Adventure Diver',
    level: 'Beginner',
    duration: '2 days',
    maxDepth: '18m',
    description: 'Try three adventure dives to gain experience and certification credit.',
    features: ['3 Adventure Dives', 'Skill Development', 'Fun Underwater Activities', 'Certification Credit'],
    category: 'Beginner',
    popular: false,
    image: '/padi/PADI-Advanced-Open-Water.jpg',
    organization: 'PADI'
  },
  {
    id: 10,
    title: 'PADI Basic Freediver',
    level: 'Beginner',
    duration: '1 day',
    maxDepth: '10m',
    description: 'Introduction to freediving techniques and safety.',
    features: ['Breath-hold Training', 'Safety Procedures', 'Basic Freedives', 'Certification'],
    category: 'Beginner',
    popular: false,
    image: '/padi/freediving(1).jpg',
    organization: 'PADI'
  },
  {
    id: 11,
    title: 'PADI Advanced Open Water Diver',
    level: 'Advanced',
    duration: '2-3 days',
    maxDepth: '30m',
    description: 'Enhance your diving skills with five adventure dives including deep and navigation.',
    features: ['5 Adventure Dives', 'Deep & Navigation', 'Elective Specialties', 'Certification'],
    category: 'Advanced',
    popular: false,
    image: '/padi/ADVANCED_OPEN_WATER_DIVERjpg.jpg',
    organization: 'PADI'
  },
  {
    id: 12,
    title: 'PADI Rescue Diver',
    level: 'Advanced',
    duration: '3 days',
    maxDepth: '30m',
    description: 'Learn to prevent and manage diving emergencies. Develop leadership skills.',
    features: ['Emergency Response', 'Rescue Scenarios', 'First Aid Training', 'Leadership Skills'],
    category: 'Advanced',
    popular: false,
    image: '/padi/padi_tec_50.jpg',
    organization: 'PADI'
  },
  {
    id: 13,
    title: 'PADI Enriched Air Diver',
    level: 'Advanced',
    duration: '1 day',
    maxDepth: '40m',
    description: 'Learn to dive with enriched air nitrox for longer bottom times.',
    features: ['Nitrox Theory', 'Gas Analysis', 'Dive Planning', 'Safety Procedures'],
    category: 'Advanced',
    popular: false,
    image: '/padi/skin_diver(1).jpg',
    organization: 'PADI'
  },
  {
    id: 14,
    title: 'PADI Divemaster',
    level: 'Professional',
    duration: '4 weeks',
    maxDepth: '40m',
    description: 'Become a diving professional. Lead dives and assist instructors.',
    features: ['Leadership Training', 'Dive Theory', 'Practical Skills', 'Professional Certification'],
    category: 'Professional',
    popular: false,
    image: '/padi/padi_SIDEMOUNT(1).jpg',
    organization: 'PADI'
  },
  {
    id: 15,
    title: 'PADI Digital Underwater Photographer',
    level: 'Professional',
    duration: '2 days',
    maxDepth: '18m',
    description: 'Learn underwater photography techniques and equipment use.',
    features: ['Camera Handling', 'Composition Techniques', 'Image Editing', 'Certification'],
    category: 'Professional',
    popular: false,
    image: '/padi/Freediver-PADI_LaPaz_Underwater_1532.jpg',
    organization: 'PADI'
  },
  {
    id: 16,
    title: 'PADI Wreck Diver',
    level: 'Professional',
    duration: '2 days',
    maxDepth: '30m',
    description: 'Learn to safely explore shipwrecks and artificial reefs.',
    features: ['Wreck Mapping', 'Penetration Techniques', 'Safety Procedures', '4 Wreck Dives'],
    category: 'Professional',
    popular: false,
    image: '/padi/PADI_WRECK_DIVER.jpg',
    organization: 'PADI'
  }
];

export const getPopularCourses = (): Course[] => {
  return courses.filter(course => course.popular);
};

export const getCoursesByOrganization = (organization: 'PADI' | 'SSI'): Course[] => {
  return courses.filter(course => course.organization === organization);
};

export const getCoursesByCategory = (category: string): Course[] => {
  return courses.filter(course => course.category === category);
};