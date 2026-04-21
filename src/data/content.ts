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
    icon: 'https://cdn.simpleicons.org/figma/F24E1E',
    url: 'https://figma.com',
    tags: ['design', 'ui', 'ux', 'collaboration'],
    featured: true,
  },
  {
    id: 'sw3',
    name: 'Obsidian',
    description: 'A powerful knowledge base and note-taking app that works on top of a local folder of plain text Markdown files.',
    category: 'Productivity',
    icon: 'https://cdn.simpleicons.org/obsidian/7A3EE8',
    url: 'https://obsidian.md',
    tags: ['notes', 'markdown', 'knowledge', 'productivity'],
  },
  {
    id: 'sw4',
    name: 'OBS Studio',
    description: 'Free and open source software for video recording and live streaming.',
    category: 'Streaming',
    icon: 'https://cdn.simpleicons.org/obsstudio/302E31',
    url: 'https://obsproject.com',
    tags: ['streaming', 'recording', 'video', 'free'],
  },
  {
    id: 'sw5',
    name: 'Blender',
    description: 'Free and open source 3D creation suite supporting modeling, animation, rendering and more.',
    category: '3D',
    icon: 'https://cdn.simpleicons.org/blender/F5792A',
    url: 'https://blender.org',
    tags: ['3d', 'animation', 'modeling', 'free'],
    featured: true,
  },
  {
    id: 'sw6',
    name: 'Discord',
    description: 'Voice, video, and text communication service for communities and friends.',
    category: 'Communication',
    icon: 'https://cdn.simpleicons.org/discord/5865F2',
    url: 'https://discord.com',
    tags: ['chat', 'voice', 'community', 'free'],
  },
  {
    id: 'sw7',
    name: 'Notion',
    description: 'All-in-one workspace for notes, tasks, wikis, and databases.',
    category: 'Productivity',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    url: 'https://notion.so',
    tags: ['productivity', 'notes', 'database', 'wiki'],
  },
  {
    id: 'sw8',
    name: 'Postman',
    description: 'API platform for building and using APIs with collaboration tools.',
    category: 'Development',
    icon: 'https://cdn.simpleicons.org/postman/FF6C37',
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
  
// AUTO-GENERATED FILE
  {
    id: 'a5',
    title: 'Ben 10 Alien Force',
    description: 'Five years later, 15-year-old Ben Tennyson chooses to once again put on the Omnitrix and discovers that it has recalibrated and can now transform him into 10 brand new aliens. Joined by his super-powered cousin Gwen Tennyson and his equally powerful former enemy Kevin Levin, Ben is on a mission to find his missing Grandpa Max. In order to save his Grandpa, Ben must defeat the evil DNAliens, a powerful alien race intent on destroying the galaxy, starting with planet Earth.',
    thumbnail: 'https://image.tmdb.org/t/p/w185/sEocAE3h5iu8CUNhdx1gHan7QJf.jpg',
    genre: ['Cartoon Network'],
    year: 2008,
    rating: 10,
    status: 'completed',
    episodes: 46,
    studio: 'Man of Action',
    featured: true,
    seasons: [
      {
        id: 's1',
        seasonNumber: 1,
        title: 'Season 1',
        episodes: [
          {
            id: 'e1',
            title: 'Ben 10 Returns, Part 1',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9qdjJid1lkV1kifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9DSUNRNmdCcTkifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e2',
            title: 'Ben 10 Returns, Part 2',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9Ed1VPUk5uYVAifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC81UmJDTExYWTEifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e3',
            title: 'Everybody Talks About the Weather',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC95OW1pSHQ4ZmEifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9mZlpxZVYwMUcifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e4',
            title: 'Kevins Big Score',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9VWVpEQ3J1TWMifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9JVEs3UFI1WG8ifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e5',
            title: 'All That Glitters',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9uaWJibnJSNTEifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9VUlV0djlNMWkifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e6',
            title: 'Max Out',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9oWGlfNE1aa2QifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9neFExQm1NU2RaIn1d',
            duration: '24:00'
          },
          {
            id: 'e7',
            title: 'Pier Pressure',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9ya1Ezbk4yLU4ifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9TM3RfY0RHN2wifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e8',
            title: 'What Are Little Girls Made Of?',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9yV3FZX1JfZzgifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC84MTdTaVVfckIifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e9',
            title: 'The Gauntlet',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9JZUdTZlhDNHQifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC8yV2FCc3hUUVEifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e10',
            title: 'Paradox',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9xcldfaklaa3gifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9oendScXQxNksifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e11',
            title: 'Be-Knighted',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9KeG1PNzQzNkIifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9EeWdVdFJjbmwifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e12',
            title: 'Plumbers Helpers',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC8wdFVGMXBXV3YifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC90aHYxd1dISUsifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e13',
            title: 'X = Ben + 2',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9VUFp3dUVrVGgifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9LWEUwSnZaeTJfIn1d',
            duration: '24:00'
          },
        ],
      },

      {
        id: 's2',
        seasonNumber: 2,
        title: 'Season 2',
        episodes: [
          {
            id: 'e1',
            title: 'Darkstar Rising',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9lQnQ5SlpDX1QifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9LMC0xNnAxOHQifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e2',
            title: 'Alone Together',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC94QVBFeVNQelkifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9nS3V3cVYtU18ifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e3',
            title: 'Good Copy, Bad Copy',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9IWngzUEVKYlAifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9QZDMweTVaWVkifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e4',
            title: 'Save the Last Dance',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9iQm9QSTZtOUkifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9TRlBJdjR0V2cifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e5',
            title: 'Undercover',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC85ZUg5TDhJLXgifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC84eU1EZTNnUDQifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e6',
            title: 'Pet Project',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9ZQXkyX2Jsd0oifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9KOG9LSHpfUzkifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e7',
            title: 'Grounded',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9Pc1d4RmRrZUMifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9tNTFVaGZDdHMifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e8',
            title: 'Voided',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9WX3JhRHE0eUwifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9EZTE4TDdzcF8ifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e9',
            title: 'Inside Man',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9HQ2RkUl9HWngifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9TMkxsUEtScEoifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e10',
            title: 'Birds of a Feather',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9qRm40NHRla2IifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9oU0hKYlBlankifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e11',
            title: 'Unearthed',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC95MnIyNmNpdmMifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9pVDhMd1hTWE4ifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e12',
            title: 'War of the Worlds, Part 1',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC80ZzNrT04ySzcifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9jcDZjQWotaVkifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e13',
            title: 'War of the Worlds, Part 2',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC8xTVQ2YkJmTUgifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9xWUZBVXVuMEgifV0%3D',
            duration: '24:00'
          },
        ],
      },

      {
        id: 's3',
        seasonNumber: 3,
        title: 'Season 3',
        episodes: [
          {
            id: 'e1',
            title: 'Vengeance of Vilgax, Part 1',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9Sbkt1QVEtdTgifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC96MnI5Ukpvc0UifV0%3D',
            duration: '24:00',
            thumbnail: 'https://img.watchanimeworld.in/images/468/01.webp'
          },
          {
            id: 'e2',
            title: 'Vengeance of Vilgax, Part 2',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9kcGZiYlJuZXcifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC90dzNNRmtDazEifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e3',
            title: 'Inferno',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC93NnBXMkJlbEkifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC93ajMyQlRqNTkifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e4',
            title: 'Fools Gold',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC85V3M1X3BxM1c1In0seyJsYW5ndWFnZSI6IkVuZ2xpc2giLCJsaW5rIjoiaHR0cHM6XC9cL3Nob3J0LmljdVwva0l2YmZ2OEphIn1d',
            duration: '24:00'
          },
          {
            id: 'e5',
            title: 'Simple',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9VbVlNUVlpT3QifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC93VmxrQXZjek0ifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e6',
            title: 'Vreedle, Vreedle',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC92c19GZEZVX04ifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC83MXpIdEhDamNOIn1d',
            duration: '24:00'
          },
          {
            id: 'e7',
            title: 'Singlehanded',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9pQzQ0Z2V0RWUifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9BMzQ4Y0lqQmwifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e8',
            title: 'If All Else Fails',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9TSnkzMjQ0Vkg3In0seyJsYW5ndWFnZSI6IkVuZ2xpc2giLCJsaW5rIjoiaHR0cHM6XC9cL3Nob3J0LmljdVwvVWIzczByWHR0In1d',
            duration: '24:00'
          },
          {
            id: 'e9',
            title: 'In Charms Way',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9jeFI2eUxZLUgifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC8tRFdsMWZPejIifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e10',
            title: 'Ghost Town',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9MOHUyblg1cVcifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9JSFM0YmVTalIifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e11',
            title: 'Trade Off',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9ZYjB3TmY2QnoifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9KR2VOX2ZQTzcifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e12',
            title: 'Busy Box',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC85S2FCQThuQjIifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC8yWEFDSDRkQzYifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e13',
            title: 'Con of Rath',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9jNHFhaEVIMUwifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC95Y1JFX0RackMifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e14',
            title: 'Primus',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC8xRmNoVjBhOWgifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC80OHh2aUVoUkEifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e15',
            title: 'Time Heals',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC96aGk1OG5oVWcifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9kZG1KMEtvVDQifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e16',
            title: 'The Secret of Chromastone',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC8zLVhVNWVseHp3In0seyJsYW5ndWFnZSI6IkVuZ2xpc2giLCJsaW5rIjoiaHR0cHM6XC9cL3Nob3J0LmljdVwvNGctaU9Oc0pWdyJ9XQ%3D%3D',
            duration: '24:00'
          },
          {
            id: 'e17',
            title: 'Above and Beyond',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9aWWFzUkJnTjYifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9WVHZ4MTduQS0ifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e18',
            title: 'Vendetta',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9UOEhWS0VRU2cifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC80VTYyY05fNW8ifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e19',
            title: 'The Final Battle, Part 1',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC81TE5nRGxpc2YifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9yQkRsOEVhd3IifV0%3D',
            duration: '24:00'
          },
          {
            id: 'e20',
            title: 'The Final Battle, Part 2',
            embedUrl: 'https://watchanimeworld.net/api/player1.php?data=W3sibGFuZ3VhZ2UiOiJIaW5kaSIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9fQkY2eGxXMHcifSx7Imxhbmd1YWdlIjoiRW5nbGlzaCIsImxpbmsiOiJodHRwczpcL1wvc2hvcnQuaWN1XC9ZaktxVzktUTgifV0%3D',
            duration: '24:00'
          },
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
    icon: 'https://thumbs.dreamstime.com/b/minsk-belarus-openai-chatgpt-logo-artifical-chatbot-system-chat-bot-button-web-app-phone-icon-symbol-editorial-vector-275376231.jpg',
    category: 'AI',
    tags: ['ai', 'chatbot', 'writing', 'coding'],
    free: true,
  },
  {
    id: 't2',
    name: 'GitHub',
    description: 'World\'s leading code hosting platform with version control and collaboration.',
    url: 'https://github.com',
    icon: 'https://cdn.simpleicons.org/github/181717',
    category: 'Development',
    tags: ['git', 'code', 'collaboration', 'open source'],
    free: true,
  },
  {
    id: 't3',
    name: 'Vercel',
    description: 'Deploy web projects instantly with global CDN, serverless functions, and auto HTTPS.',
    url: 'https://vercel.com',
    icon: 'https://cdn.simpleicons.org/vercel/000000',
    category: 'Deployment',
    tags: ['deploy', 'hosting', 'serverless', 'cdn'],
    free: true,
  },
  {
    id: 't4',
    name: 'Excalidraw',
    description: 'Virtual whiteboard for collaborative sketching with a hand-drawn feel. Perfect for diagrams.',
    url: 'https://excalidraw.com',
    icon: 'https://www.google.com/s2/favicons?domain=excalidraw.com&sz=128',
    category: 'Design',
    tags: ['whiteboard', 'diagram', 'sketching', 'collaboration'],
    free: true,
  },
  {
    id: 't5',
    name: 'Regex101',
    description: 'Online regex tester and debugger with explanations. Supports multiple regex flavors.',
    url: 'https://regex101.com',
    icon: 'https://www.google.com/s2/favicons?domain=regex101.com&sz=128',
    category: 'Development',
    tags: ['regex', 'testing', 'debugging'],
    free: true,
  },
  {
    id: 't6',
    name: 'Ray.so',
    description: 'Create beautiful images of your code with customizable themes and backgrounds.',
    url: 'https://ray.so',
    icon: 'https://www.google.com/s2/favicons?domain=ray.so&sz=128',
    category: 'Design',
    tags: ['code', 'screenshot', 'design', 'sharing'],
    free: true,
  },
  {
    id: 't7',
    name: 'Coolors',
    description: 'The super fast color palette generator. Create, save and share perfect palettes.',
    url: 'https://coolors.co',
    icon: 'https://www.google.com/s2/favicons?domain=coolors.co&sz=128',
    category: 'Design',
    tags: ['color', 'palette', 'design', 'ui'],
    free: true,
  },
  {
    id: 't8',
    name: 'Can I Use',
    description: 'Browser compatibility tables for modern web technologies and CSS features.',
    url: 'https://caniuse.com',
    icon: 'https://www.google.com/s2/favicons?domain=caniuse.com&sz=128',
    category: 'Development',
    tags: ['browser', 'compatibility', 'css', 'html'],
    free: true,
  },
];

// LINKS DATA
export const linksData: Link[] = [
  { id: 'l1', name: 'MDN Web Docs', description: 'Mozilla\'s comprehensive web technology documentation.', url: 'https://developer.mozilla.org', icon: 'https://cdn.simpleicons.org/mdnwebdocs/000000', category: 'Documentation' },
  { id: 'l2', name: 'Stack Overflow', description: 'Q&A community for programmers.', url: 'https://stackoverflow.com', icon: 'https://cdn.simpleicons.org/stackoverflow/F58025', category: 'Community' },
  { id: 'l3', name: 'Dev.to', description: 'Community of developers sharing articles.', url: 'https://dev.to', icon: 'https://cdn.simpleicons.org/devdotto/0A0A0A', category: 'Community' },
  { id: 'l4', name: 'Hacker News', description: 'Social news website focusing on computer science.', url: 'https://news.ycombinator.com', icon: 'https://cdn.simpleicons.org/ycombinator/F0652F', category: 'News' },
  { id: 'l5', name: 'Product Hunt', description: 'Discover the best new products in tech.', url: 'https://producthunt.com', icon: 'https://cdn.simpleicons.org/producthunt/DA552F', category: 'Discovery' },
  { id: 'l6', name: 'Roadmap.sh', description: 'Developer roadmaps and learning paths.', url: 'https://roadmap.sh', icon: 'https://www.google.com/s2/favicons?domain=roadmap.sh&sz=128', category: 'Learning' },
  { id: 'l7', name: 'freeCodeCamp', description: 'Learn to code for free.', url: 'https://freecodecamp.org', icon: 'https://cdn.simpleicons.org/freecodecamp/0A0A23', category: 'Learning' },
  { id: 'l8', name: 'Dribbble', description: 'Design inspiration community.', url: 'https://dribbble.com', icon: 'https://cdn.simpleicons.org/dribbble/EA4C89', category: 'Design' },
  { id: 'l9', name: 'Behance', description: 'Showcase and discover creative work.', url: 'https://behance.net', icon: 'https://cdn.simpleicons.org/behance/1769FF', category: 'Design' },
  { id: 'l10', name: 'AnimeWorld India', description: 'Anime & Cartoon Streaming website.', url: 'https://watchanimeworld.net/', icon: 'https://watchanimeworld.net/wp-content/uploads/AWI-SiteTitle-1.png', category: 'Anime' },
  { id: 'l11', name: 'Dead Toons India', description: 'Largest online anime and cartoon database.', url: 'https://deadtoons.org/', icon: 'https://deadtoons.org/public/images/logo.png', category: 'Anime' },
  { id: 'l14', name: 'ToonWorld4All', description: 'Anime & Cartoon Streaming website.', url: 'https://toonworld4all.me/', icon: 'https://toonworld4all.me/', category: 'Anime' },
  { id: 'l15', name: 'Rare Toons India', description: 'Anime & Cartoon Streaming website.', url: 'https://rareanimes.app/', icon: 'https://img.rareanimes.app/wp-content/uploads/2023/11/cropped-Rare-Animes-India.png', category: 'Anime' },
  { id: 'l12', name: 'Crunchyroll', description: 'The world\'s most popular anime streaming service.', url: 'https://crunchyroll.com', icon: 'https://cdn.simpleicons.org/crunchyroll/F47521', category: 'Anime' },
  { id: 'l13', name: 'MoviesMod', description: 'Download the latest Hollywood and Bollywood movies in various resolutions including 480p, 720p, and 1080p and 4K, choose from list below.', url: 'https://modlist.in/', icon: 'https://modlist.in/favicont.png', category: 'Movies' },
  { id: 'l16', name: 'ProtonMovies', description: 'Welcome to ProtonMovies – Your All-in-One Entertainment Gateway', url: 'http://protonmovies.com/', icon: 'https://static.protonmovies.link/favicon.ico', category: 'Movies' },
  { id: 'l17', name: 'BollyFlix', description: 'Welcome to BollyFlix. ', url: 'https://bollyflix.to/', icon: 'https://bollyflixcdn.site/wp-content/uploads/2023/05/Bollyflix-movies.png', category: 'Movies' },
  { id: 'l18', name: 'Bolly4u', description: 'Download HD Movies in 480p, 720p, 1080p - Bolly4u Official Site.', url: 'https://bolly4u.camera/', icon: 'https://bolly4u.camera/templates/bolly4u/images/logo-2x.png', category: 'Movies' },
  { id: 'l19', name: 'VegaMovies', description: 'Download HD Movies in 480p, 720p, 1080p - Vegamovies Official Site.', url: 'https://vegamovies.nf/', icon: 'https://vegamovies.nf/templates/vegamovies/images/vegav2.png', category: 'Movies' },
];
