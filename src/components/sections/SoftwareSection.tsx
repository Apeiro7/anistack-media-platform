import { useState } from 'react';
import { Search, ExternalLink, Star } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { softwareData } from '../../data/content';

const ALL_CATS = ['All', ...Array.from(new Set(softwareData.map(s => s.category)))];

export default function SoftwareSection() {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('All');

  const filtered = softwareData.filter(s => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase()) ||
      s.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchCat = cat === 'All' || s.category === cat;
    return matchSearch && matchCat;
  });

  const featured = softwareData.filter(s => s.featured);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="text-3xl">🧩</span>
        <div>
          <h2 className={`text-2xl font-black tracking-wider ${dark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: "'Orbitron', sans-serif" }}>SOFTWARE</h2>
          <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}
            style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            Curated picks of the best apps & software
          </p>
        </div>
      </div>

      {/* Featured */}
      {featured.length > 0 && (
        <div className="space-y-3">
          <h3 className={`text-xs font-black tracking-widest ${dark ? 'text-cyan-400' : 'text-blue-700'}`}
            style={{ fontFamily: "'Orbitron', sans-serif" }}>⚡ FEATURED</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featured.map(sw => (
              <a key={sw.id} href={sw.url} target="_blank" rel="noopener noreferrer"
                className={`group relative p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.03]
                  ${dark
                    ? 'bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]'
                    : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 hover:border-blue-400 hover:shadow-md'}`}>
                <div className="text-3xl mb-3">{sw.icon}</div>
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className={`font-bold text-sm mb-1 ${dark ? 'text-white' : 'text-gray-900'}`}
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{sw.name}</h4>
                    <p className={`text-xs leading-relaxed ${dark ? 'text-gray-500' : 'text-gray-500'}`}>{sw.description}</p>
                  </div>
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-current flex-shrink-0 ml-2" />
                </div>
                <div className="mt-3 flex flex-wrap gap-1">
                  {sw.tags.slice(0, 3).map(t => (
                    <span key={t} className={`text-xs px-1.5 py-0.5 rounded-md
                      ${dark ? 'bg-white/5 text-gray-500' : 'bg-white/60 text-gray-500'}`}>{t}</span>
                  ))}
                </div>
                <ExternalLink className={`absolute top-4 right-4 w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity
                  ${dark ? 'text-cyan-400' : 'text-blue-500'}`} />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Search & Category */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className={`flex-1 flex items-center gap-2 px-4 py-2.5 rounded-xl border
          ${dark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`}>
          <Search className={`w-4 h-4 ${dark ? 'text-gray-500' : 'text-gray-400'}`} />
          <input type="text" placeholder="Search software..." value={search} onChange={e => setSearch(e.target.value)}
            className={`bg-transparent flex-1 text-sm outline-none placeholder:text-gray-500
              ${dark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }} />
        </div>
        <div className="flex flex-wrap gap-2">
          {ALL_CATS.map(c => (
            <button key={c} onClick={() => setCat(c)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer
                ${cat === c
                  ? dark
                    ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                    : 'bg-blue-600 border-blue-600 text-white'
                  : dark
                    ? 'border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
                    : 'border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600'
                }`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map(sw => (
          <a key={sw.id} href={sw.url} target="_blank" rel="noopener noreferrer"
            className={`group p-4 rounded-2xl border transition-all duration-300 hover:scale-[1.02]
              ${dark
                ? 'bg-[#0d0d1a] border-white/5 hover:border-green-500/20 hover:shadow-[0_0_15px_rgba(0,255,128,0.05)]'
                : 'bg-white border-gray-200 hover:border-green-300 hover:shadow-md'}`}>
            <div className="flex items-start gap-3 mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0
                ${dark ? 'bg-white/5' : 'bg-gray-100'}`}>
                {sw.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className={`font-bold text-sm truncate ${dark ? 'text-white' : 'text-gray-900'}`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{sw.name}</h4>
                  <ExternalLink className={`w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-1
                    ${dark ? 'text-green-400' : 'text-green-600'}`} />
                </div>
                <span className={`text-xs ${dark ? 'text-purple-400' : 'text-purple-600'}`}>{sw.category}</span>
              </div>
            </div>
            <p className={`text-xs leading-relaxed mb-3 line-clamp-2 ${dark ? 'text-gray-500' : 'text-gray-500'}`}>{sw.description}</p>
            <div className="flex flex-wrap gap-1">
              {sw.tags.slice(0, 3).map(t => (
                <span key={t} className={`text-xs px-1.5 py-0.5 rounded-md
                  ${dark ? 'bg-white/5 text-gray-500' : 'bg-gray-100 text-gray-500'}`}>{t}</span>
              ))}
            </div>
          </a>
        ))}
        {filtered.length === 0 && (
          <div className={`col-span-full text-center py-16 ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
            <Search className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="font-semibold">No software found</p>
          </div>
        )}
      </div>
    </div>
  );
}
