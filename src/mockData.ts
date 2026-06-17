export interface Creator {
  id: string;
  handle: string;
  name: string;
  verified: boolean;
  category: string;
  subCount: string;
  postCount: number;
  basePrice: number;
  bio: string;
  avatarGradient: string;
  coverGradient: string;
}

export interface Post {
  id: string;
  creatorId: string;
  type: 'free' | 'members-only';
  gradient: string;
  date: string;
  likes: number;
  comments: number;
  caption?: string;
}

const generateGradient = (seed1: string, seed2: string) => `linear-gradient(135deg, ${seed1}, ${seed2})`;

export const categories = [
  'All',
  'Pedicure & care',
  'Barefoot lifestyle',
  'Foot modeling',
  'Reflexology',
  'Custom requests',
  'New & rising'
];

export const creators: Creator[] = [
  {
    id: 'c1',
    handle: 'soleserenity',
    name: 'Serenity Soles',
    verified: true,
    category: 'Pedicure & care',
    subCount: '12.4k',
    postCount: 142,
    basePrice: 9.99,
    bio: 'Professional pedicurist sharing daily foot care routines, beautiful polishes, and relaxing spa sessions.',
    avatarGradient: generateGradient('#F2C977', '#E3A53C'),
    coverGradient: generateGradient('#2C261E', '#E3A53C'),
  },
  {
    id: 'c2',
    handle: 'barefooteve',
    name: 'Eve Walker',
    verified: true,
    category: 'Barefoot lifestyle',
    subCount: '8.1k',
    postCount: 89,
    basePrice: 14.99,
    bio: 'Exploring the world one barefoot step at a time. Nature walks, earthy vibes, and grounded living.',
    avatarGradient: generateGradient('#5FB89E', '#2C261E'),
    coverGradient: generateGradient('#15120E', '#5FB89E'),
  },
  {
    id: 'c3',
    handle: 'goldenarches',
    name: 'Golden Arches',
    verified: false,
    category: 'Foot modeling',
    subCount: '45k',
    postCount: 312,
    basePrice: 19.99,
    bio: 'High fashion foot modeling. Editorial shoots, luxury footwear, and elegant poses.',
    avatarGradient: generateGradient('#E3A53C', '#15120E'),
    coverGradient: generateGradient('#F2C977', '#1F1B15'),
  },
  {
    id: 'c4',
    handle: 'reflexology_ryan',
    name: 'Ryan The Healer',
    verified: true,
    category: 'Reflexology',
    subCount: '3.2k',
    postCount: 56,
    basePrice: 24.99,
    bio: 'Certified reflexologist showing pressure point techniques to relieve stress and pain.',
    avatarGradient: generateGradient('#A99C87', '#2C261E'),
    coverGradient: generateGradient('#1F1B15', '#A99C87'),
  },
  {
    id: 'c5',
    handle: 'customtoes',
    name: 'Toes by Design',
    verified: false,
    category: 'Custom requests',
    subCount: '1.5k',
    postCount: 28,
    basePrice: 29.99,
    bio: 'You request it, I paint it! Custom nail art and specific poses for members only.',
    avatarGradient: generateGradient('#F3EDE3', '#E3A53C'),
    coverGradient: generateGradient('#E3A53C', '#2C261E'),
  },
  {
    id: 'c6',
    handle: 'stepwithsarah',
    name: 'Sarah Steps',
    verified: true,
    category: 'Barefoot lifestyle',
    subCount: '19.8k',
    postCount: 204,
    basePrice: 12.99,
    bio: 'Daily barefoot adventures on the beach, in the forest, and around the city.',
    avatarGradient: generateGradient('#2C261E', '#5FB89E'),
    coverGradient: generateGradient('#1F1B15', '#5FB89E'),
  },
  {
    id: 'c7',
    handle: 'pedi_perfection',
    name: 'Perfect Pedis',
    verified: true,
    category: 'Pedicure & care',
    subCount: '7.6k',
    postCount: 115,
    basePrice: 9.99,
    bio: 'ASMR pedicure sessions, cuticle care, and flawless polish applications.',
    avatarGradient: generateGradient('#E3A53C', '#A99C87'),
    coverGradient: generateGradient('#A99C87', '#15120E'),
  },
  {
    id: 'c8',
    handle: 'rising_sole',
    name: 'New Sole',
    verified: false,
    category: 'New & rising',
    subCount: '500',
    postCount: 12,
    basePrice: 4.99,
    bio: 'Just getting started! Join my journey and get early access to my content.',
    avatarGradient: generateGradient('#A99C87', '#F3EDE3'),
    coverGradient: generateGradient('#2C261E', '#F3EDE3'),
  }
];

export const getCreator = (handle: string) => creators.find(c => c.handle === handle);

// Generate dummy posts for a creator
export const getPostsForCreator = (creatorId: string): Post[] => {
  const creator = creators.find(c => c.id === creatorId);
  const count = creator ? Math.min(creator.postCount, 12) : 12; // cap at 12 for the prototype
  
  return Array.from({ length: count }).map((_, i) => ({
    id: `p_${creatorId}_${i}`,
    creatorId,
    // First 3 are free preview
    type: i < 3 ? 'free' : 'members-only',
    gradient: generateGradient(
      ['#2C261E', '#E3A53C', '#5FB89E', '#A99C87', '#1F1B15'][i % 5],
      ['#F2C977', '#15120E', '#A99C87', '#2C261E', '#5FB89E'][(i + 2) % 5]
    ),
    date: new Date(Date.now() - i * 86400000 * 2).toISOString(), // fake past dates
    likes: Math.floor(Math.random() * 1000) + 50,
    comments: Math.floor(Math.random() * 100) + 5,
    caption: `Sample post ${i + 1} for members. Enjoy the exclusive content!`,
  }));
};

export const getFeedPosts = (subscribedIds: string[]): Post[] => {
  return subscribedIds.flatMap(id => getPostsForCreator(id))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
