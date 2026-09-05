export interface InstagramPostConfig {
    id: string;
    image: string;
    caption: string;
    likesCount?: number;
    commentsCount?: number;
    postUrl: string;
    category: 'Short Kurtis' | 'Suits' | 'Co-Ords' | 'T-Shirts' | 'Store';
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
    username: 'Pehnava',
    handle: '@pehnavarj01',
    profileUrl: 'https://www.instagram.com/pehnavarj01/',
    followersCount: '52K',
    postsCount: 1579,
    bio: 'Official Boutique in Ajmer, Rajasthan ✨ Short Kurtis, Decent Printed Designer Suits, Co-Ord Sets & Premium Cotton T-Shirts. Visit Mayo Link Road.',
    posts: [
        {
            id: 'ig-1',
            image: 'assets/collections/short-kurtis.webp',
            caption: 'Jaipuri floral printed short kurti freshly stocked at Pehnava RJ01 ✨ #PehnavaRJ01 #ShortKurtis',
            likesCount: 1482,
            commentsCount: 94,
            postUrl: 'https://www.instagram.com/pehnavarj01/',
            category: 'Short Kurtis',
        },
        {
            id: 'ig-2',
            image: 'assets/collections/casual-suits.webp',
            caption: 'Handcrafted printed suit featuring delicate neck details. Perfect for daily and office wear.',
            likesCount: 1329,
            commentsCount: 69,
            postUrl: 'https://www.instagram.com/pehnavarj01/',
            category: 'Suits',
        },
        {
            id: 'ig-3',
            image: 'assets/collections/heavy-fancy-suits.webp',
            caption: 'Decent printed designer suit set with rich matching printed dupatta 💚 #PehnavaRJ01 #DesignerSuits',
            likesCount: 1512,
            commentsCount: 82,
            postUrl: 'https://www.instagram.com/pehnavarj01/',
            category: 'Suits',
        },
        {
            id: 'ig-4',
            image: 'assets/customers/customer-01.webp',
            caption: 'Client Spotlight 🌟 Gorgeous real client looking graceful in Pehnava boutique attire.',
            likesCount: 1671,
            commentsCount: 108,
            postUrl: 'https://www.instagram.com/pehnavarj01/',
            category: 'Store',
        },
        {
            id: 'ig-5',
            image: 'assets/collections/coord-sets.webp',
            caption: 'Botanical printed tunic top & flared trouser co-ord set for effortless styling ✨',
            likesCount: 1420,
            commentsCount: 77,
            postUrl: 'https://www.instagram.com/pehnavarj01/',
            category: 'Co-Ords',
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
