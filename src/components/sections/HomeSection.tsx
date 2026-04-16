import { Zap, Star, Play, BookOpen, Wrench, Link as LinkIcon, Package } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface HomeSectionProps {
  onNavigate: (section: string) => void;
}

const STATS = [
  { label: 'Anime Series', value: '4+', icon: '🌸' },
  { label: 'Software', value: '8+', icon: '🧩' },
  { label: 'Courses', value: '6+', icon: '📚' },
  { label: 'Tools', value: '8+', icon: '🛠️' },
];

const QUICK_LINKS = [
  { id: 'anime', label: 'Anime', emoji: '🌸', desc: 'Stream anime with episode selection', color: 'from-pink-500/20 to-purple-500/20', border: 'border-pink-500/20', text: 'text-pink-400', icon: Star },
  { id: 'videos', label: 'Videos', emoji: '🎞️', desc: 'Watch series & anime episodes', color: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-500/20', text: 'text-cyan-400', icon: Play },
  { id: 'software', label: 'Software', emoji: '🧩', desc: 'Curated apps & software picks', color: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/20', text: 'text-green-400', icon: Package },
  { id: 'courses', label: 'Courses', emoji: '📚', desc: 'Learn from top online courses', color: 'from-orange-500/20 to-yellow-500/20', border: 'border-orange-500/20', text: 'text-orange-400', icon: BookOpen },
  { id: 'tools', label: 'Tools', emoji: '🛠️', desc: 'Developer & design tools', color: 'from-violet-500/20 to-purple-500/20', border: 'border-violet-500/20', text: 'text-violet-400', icon: Wrench },
  { id: 'links', label: 'Links', emoji: '🔗', desc: 'Important resource links', color: 'from-teal-500/20 to-cyan-500/20', border: 'border-teal-500/20', text: 'text-teal-400', icon: LinkIcon },
];

export default function HomeSection({ onNavigate }: HomeSectionProps) {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  return (
    <div className="space-y-12">

      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl">
        <div className={`relative z-10 text-center py-16 px-6 sm:px-12
          ${dark
            ? 'bg-gradient-to-br from-[#0d0d2a] via-[#10102a] to-[#0a0a1e]'
            : 'bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50'}`}
          style={{ borderRadius: '24px' }}>

          {/* Glow orbs */}
          {dark && (
            <>
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />
            </>
          )}

          <div className="relative z-10">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold mb-6
              ${dark
                ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                : 'bg-blue-100 border-blue-300 text-blue-700'}`}
              style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.1em' }}>
              <Zap className="w-3 h-3" />
              YOUR ULTIMATE DIGITAL VAULT
            </div>

            {/* Title */}
            <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-black mb-4 tracking-tight
              ${dark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: '0.08em' }}>
              ANI<span className={dark ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400' : 'text-blue-600'}>STACK</span>
            </h1>

            <p className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed
              ${dark ? 'text-gray-400' : 'text-gray-600'}`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Everything you love — anime, software, courses, tools, and more — all in one place.
              Your curated hub for the digital age.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onNavigate('anime')}
                className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer
                  bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:scale-105 hover:shadow-lg"
                style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.05em',
                  boxShadow: dark ? '0 0 20px rgba(0,212,255,0.3)' : undefined }}>
                ▶ BROWSE ANIME
              </button>
              <button
                onClick={() => onNavigate('software')}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 border cursor-pointer
                  ${dark
                    ? 'border-white/20 text-white hover:bg-white/10 hover:border-white/30'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.05em' }}>
                EXPLORE ALL
              </button>
            </div>
          </div>
        </div>

        {dark && (
          <div className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ boxShadow: 'inset 0 0 1px rgba(0,212,255,0.2), 0 0 60px rgba(0,212,255,0.05)' }} />
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {STATS.map(stat => (
          <div key={stat.label}
            className={`rounded-2xl p-5 text-center border transition-all hover:scale-105 duration-300
              ${dark
                ? 'bg-[#0d0d1a] border-white/5 hover:border-cyan-500/20'
                : 'bg-white border-gray-200 hover:border-blue-300 shadow-sm'}`}>
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className={`text-2xl font-black mb-1 ${dark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: "'Orbitron', sans-serif" }}>{stat.value}</div>
            <div className={`text-xs font-semibold ${dark ? 'text-gray-500' : 'text-gray-500'}`}
              style={{ fontFamily: "'Rajdhani', sans-serif" }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Navigation */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className={`h-px flex-1 ${dark ? 'bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'}`} />
          <h2 className={`text-sm font-black tracking-widest ${dark ? 'text-cyan-400' : 'text-gray-600'}`}
            style={{ fontFamily: "'Orbitron', sans-serif" }}>
            EXPLORE
          </h2>
          <div className={`h-px flex-1 ${dark ? 'bg-gradient-to-r from-transparent via-purple-500/30 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'}`} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {QUICK_LINKS.map(link => {
            const Icon = link.icon;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`group relative p-5 rounded-2xl border text-left transition-all duration-300 hover:scale-[1.02] cursor-pointer
                  ${dark
                    ? `bg-gradient-to-br ${link.color} ${link.border} hover:shadow-lg`
                    : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-md'}`}
                style={{ boxShadow: dark ? undefined : undefined }}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0
                    ${dark ? 'bg-black/30' : 'bg-gray-100'}`}>
                    {link.emoji}
                  </div>
                  <div>
                    <h3 className={`font-bold text-base mb-1 ${dark ? 'text-white group-hover:text-cyan-300' : 'text-gray-900'} transition-colors`}
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {link.label}
                    </h3>
                    <p className={`text-xs leading-relaxed ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
                      {link.desc}
                    </p>
                  </div>
                </div>
                <div className={`absolute bottom-4 right-4 ${link.text} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <Icon className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer note */}
      <div className={`text-center py-4 text-xs ${dark ? 'text-gray-700' : 'text-gray-400'}`}
        style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.1em' }}>
        ANISTACK — BUILT WITH ⚡ FOR DIGITAL EXPLORERS
      </div>
    </div>
  );
}
