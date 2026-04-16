import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, Play, Clock, List, Star, Layers } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import type { VideoSeason, VideoEpisode } from '../data/content';

interface VideoPlayerProps {
  title: string;
  description: string;
  thumbnail: string;
  rating?: number;
  genre?: string[];
  studio?: string;
  status?: string;
  year?: number;
  seasons: VideoSeason[];
  onClose: () => void;
}

export default function VideoPlayer({
  title,
  description,
  thumbnail,
  rating,
  genre,
  studio,
  status,
  year,
  seasons,
  onClose,
}: VideoPlayerProps) {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  const [activeSeason, setActiveSeason] = useState<VideoSeason>(seasons[0]);
  const [activeEpisode, setActiveEpisode] = useState<VideoEpisode>(seasons[0].episodes[0]);
  const [showEpisodeList, setShowEpisodeList] = useState(true);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleSeasonChange = (season: VideoSeason) => {
    setActiveSeason(season);
    setActiveEpisode(season.episodes[0]);
  };

  const handleEpisodeChange = (episode: VideoEpisode) => {
    setActiveEpisode(episode);
  };

  const currentEpisodeIndex = activeSeason.episodes.findIndex(e => e.id === activeEpisode.id);

  const goPrev = () => {
    if (currentEpisodeIndex > 0) {
      setActiveEpisode(activeSeason.episodes[currentEpisodeIndex - 1]);
    } else {
      // Go to previous season last episode
      const seasonIdx = seasons.findIndex(s => s.id === activeSeason.id);
      if (seasonIdx > 0) {
        const prevSeason = seasons[seasonIdx - 1];
        setActiveSeason(prevSeason);
        setActiveEpisode(prevSeason.episodes[prevSeason.episodes.length - 1]);
      }
    }
  };

  const goNext = () => {
    if (currentEpisodeIndex < activeSeason.episodes.length - 1) {
      setActiveEpisode(activeSeason.episodes[currentEpisodeIndex + 1]);
    } else {
      // Go to next season first episode
      const seasonIdx = seasons.findIndex(s => s.id === activeSeason.id);
      if (seasonIdx < seasons.length - 1) {
        const nextSeason = seasons[seasonIdx + 1];
        setActiveSeason(nextSeason);
        setActiveEpisode(nextSeason.episodes[0]);
      }
    }
  };

  const canGoPrev = currentEpisodeIndex > 0 || seasons.findIndex(s => s.id === activeSeason.id) > 0;
  const canGoNext = currentEpisodeIndex < activeSeason.episodes.length - 1 || seasons.findIndex(s => s.id === activeSeason.id) < seasons.length - 1;

  const statusColors: Record<string, string> = {
    ongoing: 'bg-green-500/20 text-green-400 border-green-500/30',
    completed: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    upcoming: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
      style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(12px)' }}>

      <div className={`relative w-full max-w-7xl max-h-[96vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl border
        ${dark ? 'bg-[#0d0d1a] border-cyan-500/20' : 'bg-white border-gray-200'}`}
        style={{ boxShadow: dark ? '0 0 60px rgba(0,212,255,0.15), 0 0 120px rgba(139,92,246,0.1)' : '0 20px 60px rgba(0,0,0,0.2)' }}>

        {/* Header */}
        <div className={`flex items-center justify-between px-4 py-3 border-b flex-shrink-0
          ${dark ? 'border-cyan-500/20 bg-[#0a0a15]' : 'border-gray-200 bg-gray-50'}`}>
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
              <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
              <h2 className={`font-bold text-sm sm:text-base truncate ${dark ? 'text-white' : 'text-gray-900'}`}
                style={{ fontFamily: "'Orbitron', sans-serif" }}>
                {title}
              </h2>
              <p className={`text-xs truncate ${dark ? 'text-cyan-400/70' : 'text-gray-500'}`}
                style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                {activeSeason.title} · {activeEpisode.title}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 ml-2">
            <button
              onClick={() => setShowEpisodeList(p => !p)}
              className={`p-2 rounded-lg transition-all border text-xs flex items-center gap-1 font-semibold
                ${dark ? 'border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10' : 'border-gray-300 text-gray-600 hover:bg-gray-100'}`}>
              <List className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{showEpisodeList ? 'Hide' : 'Episodes'}</span>
            </button>
            <button onClick={onClose}
              className={`p-2 rounded-lg transition-all border
                ${dark ? 'border-red-500/30 text-red-400 hover:bg-red-500/10' : 'border-red-300 text-red-500 hover:bg-red-50'}`}>
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden min-h-0">
          {/* Video Area */}
          <div className="flex flex-col flex-1 min-w-0 min-h-0">
            {/* Embed */}
            <div className="relative w-full bg-black" style={{ paddingBottom: 'min(56.25%, 420px)', maxHeight: '420px' }}>
              <div className="absolute inset-0">
                <iframe
                  key={activeEpisode.id}
                  src={activeEpisode.embedUrl}
                  title={activeEpisode.title}
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{ border: 'none' }}
                />
              </div>
            </div>

            {/* Episode Controls */}
            <div className={`px-4 py-3 flex items-center justify-between gap-3 border-b flex-shrink-0
              ${dark ? 'border-cyan-500/10 bg-[#0a0a15]' : 'border-gray-100 bg-gray-50'}`}>
              <button onClick={goPrev} disabled={!canGoPrev}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border
                  ${canGoPrev
                    ? dark ? 'border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10' : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    : dark ? 'border-gray-700 text-gray-600 cursor-not-allowed' : 'border-gray-200 text-gray-300 cursor-not-allowed'}`}
                style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.05em' }}>
                <ChevronLeft className="w-3.5 h-3.5" /> PREV
              </button>

              <div className="flex items-center gap-2">
                <Play className={`w-3.5 h-3.5 ${dark ? 'text-cyan-400' : 'text-blue-500'}`} />
                <span className={`text-xs font-semibold truncate max-w-[120px] sm:max-w-xs
                  ${dark ? 'text-white' : 'text-gray-900'}`}
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  {activeEpisode.title}
                </span>
                <span className={`text-xs flex items-center gap-0.5 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
                  <Clock className="w-3 h-3" />{activeEpisode.duration}
                </span>
              </div>

              <button onClick={goNext} disabled={!canGoNext}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border
                  ${canGoNext
                    ? dark ? 'border-purple-500/30 text-purple-300 hover:bg-purple-500/10' : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    : dark ? 'border-gray-700 text-gray-600 cursor-not-allowed' : 'border-gray-200 text-gray-300 cursor-not-allowed'}`}
                style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.05em' }}>
                NEXT <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Info Below Player */}
            <div className={`px-4 py-3 flex-shrink-0 overflow-y-auto flex-1
              ${dark ? 'bg-[#0d0d1a]' : 'bg-white'}`}>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {rating && (
                  <span className="flex items-center gap-1 text-xs font-bold text-yellow-400">
                    <Star className="w-3 h-3 fill-current" />{rating}
                  </span>
                )}
                {status && (
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold capitalize ${statusColors[status] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'}`}>
                    {status}
                  </span>
                )}
                {year && <span className={`text-xs font-semibold ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{year}</span>}
                {studio && <span className={`text-xs font-semibold ${dark ? 'text-purple-400' : 'text-purple-600'}`}>🎬 {studio}</span>}
              </div>
              {genre && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {genre.map(g => (
                    <span key={g} className={`text-xs px-2 py-0.5 rounded-full border
                      ${dark ? 'border-cyan-500/20 text-cyan-400/70 bg-cyan-500/5' : 'border-blue-200 text-blue-600 bg-blue-50'}`}>
                      {g}
                    </span>
                  ))}
                </div>
              )}
              <p className={`text-xs leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
            </div>
          </div>

          {/* Episode List Sidebar */}
          {showEpisodeList && (
            <div className={`w-full lg:w-80 flex flex-col border-t lg:border-t-0 lg:border-l flex-shrink-0
              ${dark ? 'border-cyan-500/20 bg-[#09090f]' : 'border-gray-200 bg-gray-50'}`}
              style={{ maxHeight: '420px' }}>

              {/* Season Selector */}
              <div className={`px-3 py-2.5 border-b flex-shrink-0 ${dark ? 'border-cyan-500/20 bg-[#0a0a15]' : 'border-gray-200 bg-white'}`}>
                <div className="flex items-center gap-1.5 mb-2">
                  <Layers className={`w-3.5 h-3.5 ${dark ? 'text-purple-400' : 'text-purple-600'}`} />
                  <span className={`text-xs font-bold tracking-widest ${dark ? 'text-purple-400' : 'text-purple-700'}`}
                    style={{ fontFamily: "'Orbitron', sans-serif" }}>SEASONS</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {seasons.map((season) => {
                    const isActive = season.id === activeSeason.id;
                    return (
                      <button
                        key={season.id}
                        onClick={() => handleSeasonChange(season)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all border cursor-pointer select-none
                          ${isActive
                            ? dark
                              ? 'bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border-cyan-500/60 text-cyan-300 shadow-[0_0_10px_rgba(0,212,255,0.2)]'
                              : 'bg-blue-600 border-blue-600 text-white shadow-md'
                            : dark
                              ? 'border-gray-700 text-gray-400 hover:border-cyan-500/40 hover:text-cyan-400 hover:bg-cyan-500/5'
                              : 'border-gray-300 text-gray-600 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50'
                          }`}
                        style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.05em' }}>
                        S{season.seasonNumber}
                      </button>
                    );
                  })}
                </div>
                <p className={`text-xs mt-1.5 truncate font-medium ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
                  {activeSeason.title}
                </p>
              </div>

              {/* Episode List */}
              <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                <div className="p-2 space-y-1">
                  {activeSeason.episodes.map((episode, idx) => {
                    const isActive = episode.id === activeEpisode.id;
                    return (
                      <button
                        key={episode.id}
                        onClick={() => handleEpisodeChange(episode)}
                        className={`w-full text-left px-3 py-2.5 rounded-xl transition-all border cursor-pointer select-none group
                          ${isActive
                            ? dark
                              ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/40 shadow-[0_0_15px_rgba(0,212,255,0.1)]'
                              : 'bg-blue-600 border-blue-600 text-white shadow-md'
                            : dark
                              ? 'border-transparent hover:border-cyan-500/20 hover:bg-cyan-500/5 text-gray-400'
                              : 'border-transparent hover:border-blue-200 hover:bg-blue-50 text-gray-600'
                          }`}>
                        <div className="flex items-center gap-2.5">
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 text-xs font-bold
                            ${isActive
                              ? dark ? 'bg-cyan-500 text-black' : 'bg-white text-blue-600'
                              : dark ? 'bg-gray-800 text-gray-500 group-hover:bg-cyan-500/20 group-hover:text-cyan-400' : 'bg-gray-200 text-gray-600'
                            }`}
                            style={{ fontFamily: "'Orbitron', sans-serif" }}>
                            {isActive ? <Play className="w-2.5 h-2.5 fill-current" /> : idx + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-xs font-semibold truncate
                              ${isActive ? dark ? 'text-cyan-300' : 'text-white' : dark ? 'text-gray-300 group-hover:text-white' : 'text-gray-700'}`}
                              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                              {episode.title}
                            </p>
                            <p className={`text-xs flex items-center gap-1 mt-0.5
                              ${isActive ? dark ? 'text-cyan-400/60' : 'text-blue-200' : dark ? 'text-gray-600' : 'text-gray-400'}`}>
                              <Clock className="w-2.5 h-2.5" />{episode.duration}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
