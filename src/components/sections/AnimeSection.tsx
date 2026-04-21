import { useState } from 'react';
import { Star, Play, Search, Filter, Tv, Clock } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { animeData, type AnimeEntry } from '../../data/content';
import VideoPlayer from '../VideoPlayer';

const STATUS_COLORS: Record<string, string> = {
  ongoing: 'bg-green-500/20 text-green-400 border-green-500/30',
  completed: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  upcoming: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
};

const ALL_GENRES = ['All', ...Array.from(new Set(animeData.flatMap(a => a.genre)))];

export default function AnimeSection() {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  const [search, setSearch] = useState('');
  const [genreFilter, setGenreFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selected, setSelected] = useState<AnimeEntry | null>(null);

  const filtered = animeData.filter(a => {
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.description.toLowerCase().includes(search.toLowerCase());
    const matchGenre = genreFilter === 'All' || a.genre.includes(genreFilter);
    const matchStatus = statusFilter === 'All' || a.status === statusFilter;
    return matchSearch && matchGenre && matchStatus;
  });

  const featured = animeData.filter(a => a.featured);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="text-3xl">🌸</span>
        <div>
          <h2 className={`text-2xl font-black tracking-wider ${dark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: "'Orbitron', sans-serif" }}>ANIME</h2>
          <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}
            style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            Stream anime with season & episode selection
          </p>
        </div>
      </div>

      {/* Featured (Kept as Landscape Banners) */}
      {featured.length > 0 && (
        <div className="space-y-4">
          <h3 className={`text-xs font-black tracking-widest ${dark ? 'text-purple-400' : 'text-purple-700'}`}
            style={{ fontFamily: "'Orbitron', sans-serif" }}>⚡ FEATURED</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.map(anime => (
              <FeaturedCard key={anime.id} anime={anime} dark={dark} onPlay={() => setSelected(anime)} />
            ))}
          </div>
        </div>
      )}

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className={`flex-1 flex items-center gap-2 px-4 py-2.5 rounded-xl border
          ${dark ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-gray-200 text-gray-900'}`}>
          <Search className={`w-4 h-4 flex-shrink-0 ${dark ? 'text-gray-500' : 'text-gray-400'}`} />
          <input
            type="text"
            placeholder="Search anime..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="bg-transparent flex-1 text-sm outline-none placeholder:text-gray-500"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          />
        </div>
        <div className="flex gap-2">
          <select
            value={genreFilter}
            onChange={e => setGenreFilter(e.target.value)}
            className={`px-3 py-2 rounded-xl border text-xs font-semibold outline-none cursor-pointer
              ${dark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-white border-gray-200 text-gray-700'}`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {ALL_GENRES.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className={`px-3 py-2 rounded-xl border text-xs font-semibold outline-none cursor-pointer
              ${dark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-white border-gray-200 text-gray-700'}`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <option value="All">All Status</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>
      </div>

      {/* Grid - Updated to fit more portrait cards per row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4">
        {filtered.map(anime => (
          <AnimeCard key={anime.id} anime={anime} dark={dark} onPlay={() => setSelected(anime)} />
        ))}
        {filtered.length === 0 && (
          <div className={`col-span-full text-center py-16 ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
            <Filter className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="font-semibold">No anime found</p>
          </div>
        )}
      </div>

      {/* Player Modal */}
      {selected && (
        <VideoPlayer
          title={selected.title}
          description={selected.description}
          thumbnail={selected.thumbnail}
          rating={selected.rating}
          genre={selected.genre}
          studio={selected.studio}
          status={selected.status}
          year={selected.year}
          seasons={selected.seasons}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}

// Featured Card remains Landscape (aspect-video)
function FeaturedCard({ anime, dark, onPlay }: { anime: AnimeEntry; dark: boolean; onPlay: () => void }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden border cursor-pointer group
      ${dark ? 'border-white/10 hover:border-cyan-500/30' : 'border-gray-200 hover:border-blue-300'}`}
      onClick={onPlay}>
      <div className="relative aspect-video">
        <img src={anime.thumbnail} alt={anime.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-14 h-14 rounded-full bg-cyan-500/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
            style={{ boxShadow: '0 0 30px rgba(0,212,255,0.5)' }}>
            <Play className="w-6 h-6 text-black fill-current ml-1" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold capitalize ${STATUS_COLORS[anime.status] || ''}`}>
              {anime.status}
            </span>
            <span className="flex items-center gap-1 text-xs text-yellow-400 font-bold">
              <Star className="w-3 h-3 fill-current" />{anime.rating}
            </span>
          </div>
          <h3 className="text-white font-bold text-base md:text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{anime.title}</h3>
          <div className="flex items-center gap-3 mt-1 text-xs text-gray-300">
            <span className="flex items-center gap-1"><Tv className="w-3 h-3" />{anime.seasons.length} Season{anime.seasons.length > 1 ? 's' : ''}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{anime.episodes} Episodes</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Anime Card converted to Portrait (aspect-[3/4])
function AnimeCard({ anime, dark, onPlay }: { anime: AnimeEntry; dark: boolean; onPlay: () => void }) {
  return (
    <div
      className={`rounded-xl sm:rounded-2xl flex flex-col overflow-hidden border cursor-pointer group transition-all duration-300 hover:-translate-y-1
        ${dark
          ? 'bg-[#0d0d1a] border-white/5 hover:border-cyan-500/50 hover:shadow-[0_8px_20px_rgba(0,212,255,0.15)]'
          : 'bg-white border-gray-200 hover:border-blue-400 hover:shadow-lg'}`}
      onClick={onPlay}>
      
      {/* Changed Aspect Ratio from aspect-video to aspect-[3/4] */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-900 flex-shrink-0">
        <img src={anime.thumbnail} alt={anime.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-cyan-500/90 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-5 h-5 text-black fill-current ml-0.5" />
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-2 right-2">
          <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-md border font-bold capitalize backdrop-blur-sm ${STATUS_COLORS[anime.status] || ''}`}>
            {anime.status}
          </span>
        </div>

        {/* Rating Badge */}
        <div className="absolute bottom-2 left-2">
          <span className="flex items-center gap-1 text-[10px] sm:text-xs text-yellow-400 font-black drop-shadow-md">
            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />{anime.rating}
          </span>
        </div>
      </div>

      <div className="p-2.5 sm:p-3 flex-1 flex flex-col justify-between">
        <div>
          {/* Adjusted line clamp to look good in a narrow card */}
          <h3 className={`font-bold text-xs sm:text-sm mb-1 line-clamp-2 leading-snug ${dark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }} title={anime.title}>
            {anime.title}
          </h3>
          <p className={`text-[10px] sm:text-xs mb-2 line-clamp-1 leading-relaxed hidden sm:block ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
            {anime.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-1">
          <div className="flex flex-wrap gap-1">
            {anime.genre.slice(0, 1).map(g => (
              <span key={g} className={`text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded border uppercase tracking-wider font-bold
                ${dark ? 'border-cyan-500/20 text-cyan-400/80 bg-cyan-500/10' : 'border-blue-200 text-blue-600 bg-blue-50'}`}>
                {g}
              </span>
            ))}
          </div>
          <div className={`flex items-center gap-1 text-[10px] sm:text-xs font-semibold ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
            <Tv className="w-3 h-3" />{anime.episodes}
          </div>
        </div>
      </div>
    </div>
  );
}
