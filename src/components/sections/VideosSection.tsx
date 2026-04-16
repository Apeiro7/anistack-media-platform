import { useState } from 'react';
import { Star, Play, Search, Tv, Clock } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { videoData, type Video } from '../../data/content';
import VideoPlayer from '../VideoPlayer';

const TYPE_LABELS: Record<string, string> = {
  anime: '🎌 Anime',
  series: '📺 Series',
  movie: '🎬 Movie',
  documentary: '📽️ Documentary',
};

export default function VideosSection() {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [selected, setSelected] = useState<Video | null>(null);

  const filtered = videoData.filter(v => {
    const matchSearch = v.title.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === 'All' || v.type === typeFilter;
    return matchSearch && matchType;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="text-3xl">🎞️</span>
        <div>
          <h2 className={`text-2xl font-black tracking-wider ${dark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: "'Orbitron', sans-serif" }}>VIDEOS</h2>
          <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}
            style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            Anime-style episode & season selection — watch right here
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className={`flex-1 flex items-center gap-2 px-4 py-2.5 rounded-xl border
          ${dark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`}>
          <Search className={`w-4 h-4 flex-shrink-0 ${dark ? 'text-gray-500' : 'text-gray-400'}`} />
          <input
            type="text"
            placeholder="Search videos..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className={`bg-transparent flex-1 text-sm outline-none placeholder:text-gray-500
              ${dark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          />
        </div>
        <select
          value={typeFilter}
          onChange={e => setTypeFilter(e.target.value)}
          className={`px-3 py-2 rounded-xl border text-xs font-semibold outline-none cursor-pointer
            ${dark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-white border-gray-200 text-gray-700'}`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          <option value="All">All Types</option>
          <option value="anime">Anime</option>
          <option value="series">Series</option>
          <option value="movie">Movie</option>
          <option value="documentary">Documentary</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(video => (
          <VideoCard key={video.id} video={video} dark={dark} onPlay={() => setSelected(video)} />
        ))}
        {filtered.length === 0 && (
          <div className={`col-span-full text-center py-16 ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
            <Play className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="font-semibold">No videos found</p>
          </div>
        )}
      </div>

      {/* Player */}
      {selected && (
        <VideoPlayer
          title={selected.title}
          description={selected.description}
          thumbnail={selected.thumbnail}
          rating={selected.rating}
          genre={selected.genre}
          year={selected.year}
          seasons={selected.seasons}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}

function VideoCard({ video, dark, onPlay }: { video: Video; dark: boolean; onPlay: () => void }) {
  const totalEps = video.seasons.reduce((acc, s) => acc + s.episodes.length, 0);

  return (
    <div
      className={`rounded-2xl overflow-hidden border cursor-pointer group transition-all duration-300 hover:scale-[1.02]
        ${dark
          ? 'bg-[#0d0d1a] border-white/5 hover:border-cyan-500/30 hover:shadow-[0_0_25px_rgba(0,212,255,0.1)]'
          : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg'}`}
      onClick={onPlay}>

      <div className="relative aspect-video overflow-hidden">
        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Play */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm bg-cyan-500/80"
            style={{ boxShadow: '0 0 30px rgba(0,212,255,0.6)' }}>
            <Play className="w-6 h-6 text-black fill-current ml-0.5" />
          </div>
        </div>

        {/* Type badge */}
        <div className="absolute top-2 left-2">
          <span className={`text-xs px-2 py-0.5 rounded-full font-semibold backdrop-blur-sm
            ${dark ? 'bg-black/50 text-cyan-400 border border-cyan-500/30' : 'bg-white/80 text-blue-700 border border-blue-300'}`}>
            {TYPE_LABELS[video.type] || video.type}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute bottom-2 right-2">
          <span className="flex items-center gap-1 text-xs text-yellow-400 font-bold bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-sm">
            <Star className="w-3 h-3 fill-current" />{video.rating}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className={`font-bold text-base mb-1 ${dark ? 'text-white' : 'text-gray-900'}`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{video.title}</h3>
        <p className={`text-xs mb-3 line-clamp-2 leading-relaxed ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
          {video.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {video.genre.slice(0, 2).map(g => (
              <span key={g} className={`text-xs px-2 py-0.5 rounded-lg border
                ${dark ? 'border-purple-500/20 text-purple-400/80 bg-purple-500/5' : 'border-purple-200 text-purple-600 bg-purple-50'}`}>
                {g}
              </span>
            ))}
          </div>
          <div className={`flex items-center gap-2 text-xs ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
            <span className="flex items-center gap-1"><Tv className="w-3 h-3" />{video.seasons.length}S</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{totalEps}Ep</span>
          </div>
        </div>
      </div>
    </div>
  );
}
