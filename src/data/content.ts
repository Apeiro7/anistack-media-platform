export interface Software {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  url: string;
  tags: string[];
  featured?: boolean;
}

export interface VideoEpisode {
  id: string;
  title: string;
  embedUrl: string;
  duration: string;
  thumbnail?: string;
}

export interface VideoSeason {
  id: string;
  seasonNumber: number;
  title: string;
  episodes: VideoEpisode[];
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  type: 'anime' | 'series' | 'movie' | 'documentary';
  genre: string[];
  year: number;
  rating: number;
  seasons: VideoSeason[];
  featured?: boolean;
}

export interface AnimeEntry {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  genre: string[];
  year: number;
  rating: number;
  status: 'ongoing' | 'completed' | 'upcoming';
  episodes: number;
  seasons: VideoSeason[];
  studio: string;
  featured?: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  platform: string;
  url: string;
  thumbnail: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  free: boolean;
  tags: string[];
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  category: string;
  tags: string[];
  free: boolean;
}

export interface Link {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  category: string;
}

// SOFTWARE DATA
export const softwareData: Software[] = [
  {
    id: 'sw1',
    name: 'VS Code',
    description: 'Free, lightweight, and powerful code editor by Microsoft with rich extension support.',
    category: 'Editor',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1280px-Visual_Studio_Code_1.35_icon.svg.png',
    url: 'https://code.visualstudio.com',
    tags: ['editor', 'coding', 'microsoft', 'free'],
    featured: true,
  },
  {
    id: 'sw2',
    name: 'Figma',
    description: 'Collaborative interface design tool for UI/UX designers with real-time collaboration.',
    category: 'Design',
    icon: '🎨',
    url: 'https://figma.com',
    tags: ['design', 'ui', 'ux', 'collaboration'],
    featured: true,
  },
  {
    id: 'sw3',
    name: 'Obsidian',
    description: 'A powerful knowledge base and note-taking app that works on top of a local folder of plain text Markdown files.',
    category: 'Productivity',
    icon: '📝',
    url: 'https://obsidian.md',
    tags: ['notes', 'markdown', 'knowledge', 'productivity'],
  },
  {
    id: 'sw4',
    name: 'OBS Studio',
    description: 'Free and open source software for video recording and live streaming.',
    category: 'Streaming',
    icon: '🎬',
    url: 'https://obsproject.com',
    tags: ['streaming', 'recording', 'video', 'free'],
  },
  {
    id: 'sw5',
    name: 'Blender',
    description: 'Free and open source 3D creation suite supporting modeling, animation, rendering and more.',
    category: '3D',
    icon: '🖥️',
    url: 'https://blender.org',
    tags: ['3d', 'animation', 'modeling', 'free'],
    featured: true,
  },
  {
    id: 'sw6',
    name: 'Discord',
    description: 'Voice, video, and text communication service for communities and friends.',
    category: 'Communication',
    icon: '💬',
    url: 'https://discord.com',
    tags: ['chat', 'voice', 'community', 'free'],
  },
  {
    id: 'sw7',
    name: 'Notion',
    description: 'All-in-one workspace for notes, tasks, wikis, and databases.',
    category: 'Productivity',
    icon: '📋',
    url: 'https://notion.so',
    tags: ['productivity', 'notes', 'database', 'wiki'],
  },
  {
    id: 'sw8',
    name: 'Postman',
    description: 'API platform for building and using APIs with collaboration tools.',
    category: 'Development',
    icon: '🚀',
    url: 'https://postman.com',
    tags: ['api', 'testing', 'development'],
  },
];

// VIDEOS DATA
export const videoData: Video[] = [
  {
    id: 'v1',
    title: 'Cyberpunk Chronicles',
    description: 'A gripping sci-fi anime series set in a dystopian future where technology and humanity collide.',
    thumbnail: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=225&fit=crop',
    type: 'anime',
    genre: ['Sci-Fi', 'Action', 'Cyberpunk'],
    year: 2023,
    rating: 9.2,
    featured: true,
    seasons: [
      {
        id: 's1',
        seasonNumber: 1,
        title: 'Season 1 — Origins',
        episodes: [
          { id: 'e1', title: 'Ep 1 — The Awakening', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:30' },
          { id: 'e2', title: 'Ep 2 — Neon City', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:45' },
          { id: 'e3', title: 'Ep 3 — Chrome Hearts', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '25:10' },
        ],
      },
      {
        id: 's2',
        seasonNumber: 2,
        title: 'Season 2 — Uprising',
        episodes: [
          { id: 'e4', title: 'Ep 1 — The Return', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
          { id: 'e5', title: 'Ep 2 — Dark Matter', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '26:20' },
        ],
      },
    ],
  },
  {
    id: 'v2',
    title: 'Spirit Realm',
    description: 'A mystical journey through ancient lands where spirits and humans coexist in fragile harmony.',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=225&fit=crop',
    type: 'anime',
    genre: ['Fantasy', 'Adventure', 'Spiritual'],
    year: 2022,
    rating: 8.8,
    seasons: [
      {
        id: 's1',
        seasonNumber: 1,
        title: 'Season 1 — The Veil',
        episodes: [
          { id: 'e1', title: 'Ep 1 — Beyond the Veil', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '22:15' },
          { id: 'e2', title: 'Ep 2 — Spirit Bonds', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:50' },
          { id: 'e3', title: 'Ep 3 — Ancestor\'s Call', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:05' },
          { id: 'e4', title: 'Ep 4 — Sacred Ground', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:30' },
        ],
      },
    ],
  },
];

// ANIME DATA
export const animeData: AnimeEntry[] = [
  {
    id: 'a1',
    title: 'Demon Blade Chronicles',
    description: 'In a world where demons roam the land, a young swordsman embarks on a quest for revenge and redemption, wielding a legendary demon-slaying blade.',
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=225&fit=crop',
    genre: ['Action', 'Supernatural', 'Adventure'],
    year: 2023,
    rating: 9.5,
    status: 'ongoing',
    episodes: 26,
    studio: 'NekoStudio',
    featured: true,
    seasons: [
      {
        id: 's1',
        seasonNumber: 1,
        title: 'Season 1 — The Awakening',
        episodes: [
          { id: 'e1', title: 'Ep 1 — Cruelty', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:40' },
          { id: 'e2', title: 'Ep 2 — Trainer Sakonji Urokodaki', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:40' },
          { id: 'e3', title: 'Ep 3 — Sabito and Makomo', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:40' },
          { id: 'e4', title: 'Ep 4 — Final Selection', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:40' },
          { id: 'e5', title: 'Ep 5 — My Own Steel', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:40' },
          { id: 'e6', title: 'Ep 6 — Swordsman Accompanying a Demon', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:40' },
          { id: 'e7', title: 'Ep 7 — Muzan Kibutsuji', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:40' },
        ],
      },
      {
        id: 's2',
        seasonNumber: 2,
        title: 'Season 2 — Mugen Train Arc',
        episodes: [
          { id: 'e8', title: 'Ep 1 — Flame Hashira Rengoku Kyojuro', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:40' },
          { id: 'e9', title: 'Ep 2 — Deep Sleep', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:40' },
          { id: 'e10', title: 'Ep 3 — Should\'ve Been', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:40' },
          { id: 'e11', title: 'Ep 4 — Insult', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:40' },
        ],
      },
      {
        id: 's3',
        seasonNumber: 3,
        title: 'Season 3 — Entertainment District',
        episodes: [
          { id: 'e12', title: 'Ep 1 — Sound Hashira Tengen Uzui', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:40' },
          { id: 'e13', title: 'Ep 2 — Infiltrating the Entertainment District', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:40' },
          { id: 'e14', title: 'Ep 3 — What Are You?', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:40' },
        ],
      },
    ],
  },
  {
    id: 'a2',
    title: 'Attack on Giants',
    description: 'Humanity fights for survival against enormous humanoid creatures behind massive walls in this epic action masterpiece.',
    thumbnail: 'https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=400&h=225&fit=crop',
    genre: ['Action', 'Dark Fantasy', 'Military'],
    year: 2013,
    rating: 9.8,
    status: 'completed',
    episodes: 87,
    studio: 'Titan Animation',
    featured: true,
    seasons: [
      {
        id: 's1',
        seasonNumber: 1,
        title: 'Season 1 — The Fall of Shiganshina',
        episodes: [
          { id: 'e1', title: 'Ep 1 — To You, in 2000 Years', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
          { id: 'e2', title: 'Ep 2 — That Day', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
          { id: 'e3', title: 'Ep 3 — A Dim Light', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
          { id: 'e4', title: 'Ep 4 — The Night of the Closing Ceremony', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
          { id: 'e5', title: 'Ep 5 — First Battle', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
        ],
      },
      {
        id: 's2',
        seasonNumber: 2,
        title: 'Season 2 — The Uprising',
        episodes: [
          { id: 'e6', title: 'Ep 1 — Beast Titan', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
          { id: 'e7', title: 'Ep 2 — I\'m Home', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
          { id: 'e8', title: 'Ep 3 — Southwestward', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
        ],
      },
      {
        id: 's3',
        seasonNumber: 3,
        title: 'Season 3 — Return to Shiganshina',
        episodes: [
          { id: 'e9', title: 'Ep 1 — Smoke Signal', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
          { id: 'e10', title: 'Ep 2 — Pain', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
          { id: 'e11', title: 'Ep 3 — Old Story', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
          { id: 'e12', title: 'Ep 4 — Trust', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
        ],
      },
      {
        id: 's4',
        seasonNumber: 4,
        title: 'Season 4 — The Final Season',
        episodes: [
          { id: 'e13', title: 'Ep 1 — The Other Side of the Sea', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
          { id: 'e14', title: 'Ep 2 — Midnight Train', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
          { id: 'e15', title: 'Ep 3 — The Door of Hope', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
          { id: 'e16', title: 'Ep 4 — From One Hand to Another', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
          { id: 'e17', title: 'Ep 5 — Declaration of War', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
        ],
      },
    ],
  },
  {
    id: 'a3',
    title: 'One Punch Legend',
    description: 'A superhero who can defeat any opponent with a single punch seeks meaning in a world where he has become too powerful.',
    thumbnail: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=225&fit=crop',
    genre: ['Action', 'Comedy', 'Superhero'],
    year: 2015,
    rating: 8.9,
    status: 'ongoing',
    episodes: 36,
    studio: 'HeroForce Studio',
    seasons: [
      {
        id: 's1',
        seasonNumber: 1,
        title: 'Season 1 — The Strongest Man',
        episodes: [
          { id: 'e1', title: 'Ep 1 — The Strongest Man', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
          { id: 'e2', title: 'Ep 2 — The Lone Cyborg', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
          { id: 'e3', title: 'Ep 3 — The Obsessive Scientist', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
          { id: 'e4', title: 'Ep 4 — The Modern Ninja', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
          { id: 'e5', title: 'Ep 5 — The Ultimate Master', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
          { id: 'e6', title: 'Ep 6 — The Terrifying City', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
        ],
      },
      {
        id: 's2',
        seasonNumber: 2,
        title: 'Season 2 — Hero Association',
        episodes: [
          { id: 'e7', title: 'Ep 1 — Return of the Hero', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
          { id: 'e8', title: 'Ep 2 — Monster Uprising', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
          { id: 'e9', title: 'Ep 3 — The Big Construction', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '24:00' },
        ],
      },
    ],
  },
  {
    id: 'a4',
    title: 'Naruto Shinobi',
    description: 'Follow the journey of a young ninja who seeks recognition and dreams of becoming the leader of his village.',
    thumbnail: 'https://images.unsplash.com/photo-1559570278-76376a0e4c89?w=400&h=225&fit=crop',
    genre: ['Action', 'Adventure', 'Martial Arts'],
    year: 2002,
    rating: 9.3,
    status: 'completed',
    episodes: 720,
    studio: 'Leaf Village Studio',
    seasons: [
      {
        id: 's1',
        seasonNumber: 1,
        title: 'Season 1 — Land of Waves',
        episodes: [
          { id: 'e1', title: 'Ep 1 — Enter: Naruto Uzumaki!', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:00' },
          { id: 'e2', title: 'Ep 2 — My Name Is Konohamaru!', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:00' },
          { id: 'e3', title: 'Ep 3 — Sasuke and Sakura', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:00' },
          { id: 'e4', title: 'Ep 4 — Pass or Fail: Survival Test', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:00' },
          { id: 'e5', title: 'Ep 5 — You Failed!', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:00' },
        ],
      },
      {
        id: 's2',
        seasonNumber: 2,
        title: 'Season 2 — Chunin Exams',
        episodes: [
          { id: 'e6', title: 'Ep 1 — The Challengers', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:00' },
          { id: 'e7', title: 'Ep 2 — Chunin Challenge', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:00' },
          { id: 'e8', title: 'Ep 3 — Roster of Doom', embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', duration: '23:00' },
        ],
      },
    ],
  },
];

// COURSES DATA
export const coursesData: Course[] = [
  {
    id: 'c1',
    title: 'Complete React Developer Course',
    description: 'Learn React from scratch with hooks, context, Redux, and modern patterns. Build real-world projects.',
    instructor: 'Andrei Neagoie',
    platform: 'Udemy',
    url: 'https://www.udemy.com',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop',
    category: 'Web Development',
    level: 'Intermediate',
    duration: '40 hours',
    free: false,
    tags: ['react', 'javascript', 'web dev'],
  },
  {
    id: 'c2',
    title: 'CS50: Introduction to Computer Science',
    description: 'Harvard\'s world-famous intro to CS course — covers algorithms, data structures, C, Python, SQL and more.',
    instructor: 'David J. Malan',
    platform: 'edX',
    url: 'https://cs50.harvard.edu',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=225&fit=crop',
    category: 'Computer Science',
    level: 'Beginner',
    duration: '11 weeks',
    free: true,
    tags: ['cs', 'python', 'algorithms', 'harvard'],
  },
  {
    id: 'c3',
    title: 'Machine Learning Specialization',
    description: 'Andrew Ng\'s renowned ML course. Learn supervised learning, unsupervised learning, and best practices.',
    instructor: 'Andrew Ng',
    platform: 'Coursera',
    url: 'https://coursera.org',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=225&fit=crop',
    category: 'AI / ML',
    level: 'Intermediate',
    duration: '3 months',
    free: false,
    tags: ['ml', 'ai', 'python', 'tensorflow'],
  },
  {
    id: 'c4',
    title: 'The Odin Project — Full Stack',
    description: 'Free, open-source curriculum for learning full-stack web development from zero to job-ready.',
    instructor: 'Community',
    platform: 'The Odin Project',
    url: 'https://theodinproject.com',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=225&fit=crop',
    category: 'Web Development',
    level: 'Beginner',
    duration: 'Self-paced',
    free: true,
    tags: ['html', 'css', 'javascript', 'node'],
  },
  {
    id: 'c5',
    title: 'System Design Interview Course',
    description: 'Master system design concepts for large-scale applications — databases, caching, load balancing and more.',
    instructor: 'Alex Xu',
    platform: 'ByteByteGo',
    url: 'https://bytebytego.com',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop',
    category: 'System Design',
    level: 'Advanced',
    duration: '20 hours',
    free: false,
    tags: ['system design', 'interview', 'architecture'],
  },
  {
    id: 'c6',
    title: 'Tailwind CSS Masterclass',
    description: 'Build beautiful, responsive UIs fast with Tailwind CSS. Covers all utilities, plugins, and customization.',
    instructor: 'Simon Vrachliotis',
    platform: 'Tailwind Labs',
    url: 'https://tailwindcss.com',
    thumbnail: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=225&fit=crop',
    category: 'Web Development',
    level: 'Beginner',
    duration: '8 hours',
    free: true,
    tags: ['tailwind', 'css', 'design', 'ui'],
  },
];

// TOOLS DATA
export const toolsData: Tool[] = [
  {
    id: 't1',
    name: 'ChatGPT',
    description: 'OpenAI\'s powerful AI assistant for writing, coding, analysis, and more.',
    url: 'https://chat.openai.com',
    icon: '🤖',
    category: 'AI',
    tags: ['ai', 'chatbot', 'writing', 'coding'],
    free: true,
  },
  {
    id: 't2',
    name: 'GitHub',
    description: 'World\'s leading code hosting platform with version control and collaboration.',
    url: 'https://github.com',
    icon: '🐙',
    category: 'Development',
    tags: ['git', 'code', 'collaboration', 'open source'],
    free: true,
  },
  {
    id: 't3',
    name: 'Vercel',
    description: 'Deploy web projects instantly with global CDN, serverless functions, and auto HTTPS.',
    url: 'https://vercel.com',
    icon: '▲',
    category: 'Deployment',
    tags: ['deploy', 'hosting', 'serverless', 'cdn'],
    free: true,
  },
  {
    id: 't4',
    name: 'Excalidraw',
    description: 'Virtual whiteboard for collaborative sketching with a hand-drawn feel. Perfect for diagrams.',
    url: 'https://excalidraw.com',
    icon: '✏️',
    category: 'Design',
    tags: ['whiteboard', 'diagram', 'sketching', 'collaboration'],
    free: true,
  },
  {
    id: 't5',
    name: 'Regex101',
    description: 'Online regex tester and debugger with explanations. Supports multiple regex flavors.',
    url: 'https://regex101.com',
    icon: '🔍',
    category: 'Development',
    tags: ['regex', 'testing', 'debugging'],
    free: true,
  },
  {
    id: 't6',
    name: 'Ray.so',
    description: 'Create beautiful images of your code with customizable themes and backgrounds.',
    url: 'https://ray.so',
    icon: '✨',
    category: 'Design',
    tags: ['code', 'screenshot', 'design', 'sharing'],
    free: true,
  },
  {
    id: 't7',
    name: 'Coolors',
    description: 'The super fast color palette generator. Create, save and share perfect palettes.',
    url: 'https://coolors.co',
    icon: '🎨',
    category: 'Design',
    tags: ['color', 'palette', 'design', 'ui'],
    free: true,
  },
  {
    id: 't8',
    name: 'Can I Use',
    description: 'Browser compatibility tables for modern web technologies and CSS features.',
    url: 'https://caniuse.com',
    icon: '🌐',
    category: 'Development',
    tags: ['browser', 'compatibility', 'css', 'html'],
    free: true,
  },
];

// LINKS DATA
export const linksData: Link[] = [
  { id: 'l1', name: 'MDN Web Docs', description: 'Mozilla\'s comprehensive web technology documentation.', url: 'https://developer.mozilla.org', icon: '📖', category: 'Documentation' },
  { id: 'l2', name: 'Stack Overflow', description: 'Q&A community for programmers — find answers to almost any coding question.', url: 'https://stackoverflow.com', icon: '💡', category: 'Community' },
  { id: 'l3', name: 'Dev.to', description: 'Community of developers sharing articles, tips, and resources.', url: 'https://dev.to', icon: '👩‍💻', category: 'Community' },
  { id: 'l4', name: 'Hacker News', description: 'Social news website focusing on computer science and entrepreneurship.', url: 'https://news.ycombinator.com', icon: '📰', category: 'News' },
  { id: 'l5', name: 'Product Hunt', description: 'Discover the best new products in tech every day.', url: 'https://producthunt.com', icon: '🚀', category: 'Discovery' },
  { id: 'l6', name: 'Roadmap.sh', description: 'Developer roadmaps — community-driven development learning paths.', url: 'https://roadmap.sh', icon: '🗺️', category: 'Learning' },
  { id: 'l7', name: 'freeCodeCamp', description: 'Learn to code for free with interactive courses and projects.', url: 'https://freecodecamp.org', icon: '🔥', category: 'Learning' },
  { id: 'l8', name: 'Dribbble', description: 'Design inspiration community. Explore the world\'s top design portfolios.', url: 'https://dribbble.com', icon: '🏀', category: 'Design' },
  { id: 'l9', name: 'Behance', description: 'Showcase and discover creative work from top designers worldwide.', url: 'https://behance.net', icon: '🎭', category: 'Design' },
  { id: 'l10', name: 'AniList', description: 'Social cataloging website for anime and manga discovery and tracking.', url: 'https://anilist.co', icon: '🌸', category: 'Anime' },
  { id: 'l11', name: 'MyAnimeList', description: 'Largest online anime and manga database with community reviews.', url: 'https://myanimelist.net', icon: '📺', category: 'Anime' },
  { id: 'l12', name: 'Crunchyroll', description: 'The world\'s most popular anime streaming service.', url: 'https://crunchyroll.com', icon: '🎌', category: 'Anime' },
];
