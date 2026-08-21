export interface InstagramPostConfig {
  id: string;
  image: string;
  caption: string;
  likesCount?: number;
  commentsCount?: number;
  postUrl: string;
  category: 'Bridal' | 'Lehenga' | 'Saree' | 'Gown' | 'Store';
}

export interface InstagramProfileConfig {
  username: string;
  handle: string;
  profileUrl: string;
  followersCount: string;
  postsCount: number;
  bio: string;
  posts: InstagramPostConfig[];
}

export const INSTAGRAM_CONFIG: InstagramProfileConfig = {
  username: 'Pehnava RJ01',
  handle: '@pehnavarj01',
  profileUrl: 'https://www.instagram.com/pehnavarj01/',
  followersCount: '52K',
  postsCount: 1579,
  bio: 'Official Boutique in Ajmer, Rajasthan ✨ Bridal Lehengas, Designer Sarees, Gowns & Festive Outfits. Visit Mayo Link Road.',
  posts: [
    {
      id: 'ig-1',
      image: 'assets/collections/bridal-01.webp',
      caption: 'Royal Crimson Zardosi Bridal Lehenga created for our beautiful bride ✨ #PehnavaRJ01 #BridalLehenga',
      likesCount: 1482,
      commentsCount: 94,
      postUrl: 'https://www.instagram.com/pehnavarj01/',
      category: 'Bridal',
    },
    {
      id: 'ig-2',
      image: 'assets/collections/saree-01.webp',
      caption: 'Handcrafted Pure Kanjeevaram Saree featuring intricate zari border details. Perfect for festive drapes.',
      likesCount: 1329,
      commentsCount: 69,
      postUrl: 'https://www.instagram.com/pehnavarj01/',
      category: 'Saree',
    },
    {
      id: 'ig-3',
      image: 'assets/collections/gowns-01.webp',
      caption: 'Emerald Velvet Reception Gown with hand-embroidered sequin cape 💚 #IndoWestern #BoutiqueCouture',
      likesCount: 1512,
      commentsCount: 82,
      postUrl: 'https://www.instagram.com/pehnavarj01/',
      category: 'Gown',
    },
    {
      id: 'ig-4',
      image: 'assets/customers/customer-01.webp',
      caption: 'Client Spotlight 🌟 Gorgeous real bride looking graceful in Pehnava custom bridal couture.',
      likesCount: 1671,
      commentsCount: 108,
      postUrl: 'https://www.instagram.com/pehnavarj01/',
      category: 'Store',
    },
    {
      id: 'ig-5',
      image: 'assets/collections/lehenga-01.webp',
      caption: 'Royal Sangeet & Reception Lehenga with fluid flare and intricate mirror work ✨',
      likesCount: 1420,
      commentsCount: 77,
      postUrl: 'https://www.instagram.com/pehnavarj01/',
      category: 'Lehenga',
    },
    {
      id: 'ig-6',
      image: 'assets/store/store-01.webp',
      caption: 'Inside Pehnava RJ01 Boutique Studio in Ajmer, Rajasthan 🏬 Step into luxury fashion on Mayo Link Road.',
      likesCount: 1890,
      commentsCount: 126,
      postUrl: 'https://www.instagram.com/pehnavarj01/',
      category: 'Store',
    },
  ],
};
