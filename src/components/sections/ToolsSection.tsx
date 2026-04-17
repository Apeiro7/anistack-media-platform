import { useState } from 'react';
import { Search, ExternalLink, Wrench } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { toolsData } from '../../data/content';

const ALL_CATS = ['All', ...Array.from(new Set(toolsData.map(t => t.category)))];

export default function ToolsSection() {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('All');

  const filtered = toolsData.filter(t => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase()) ||
      t.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    const matchCat = cat === 'All' || t.category === cat;
    return matchSearch && matchCat;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="text-3xl">🛠️</span>
        <div>
          <h2 className={`text-2xl font-black tracking-wider ${dark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: "'Orbitron', sans-serif" }}>TOOLS</h2>
          <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}
            style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            Best developer & design tools, handpicked
          </p>
        </div>
      </div>

      {/* Search & Category */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className={`flex-1 flex items-center gap-2 px-4 py-2.5 rounded-xl border
          ${dark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`}>
          <Search className={`w-4 h-4 ${dark ? 'text-gray-500' : 'text-gray-400'}`} />
          <input type="text" placeholder="Search tools..." value={search} onChange={e => setSearch(e.target.value)}
            className={`bg-transparent flex-1 text-sm outline-none placeholder:text-gray-500
              ${dark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }} />
        </div>
        <div className="flex flex-wrap gap-2">
          {ALL_CATS.map(c => (
            <button key={c} onClick={() => setCat(c)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer
                ${cat === c
                  ? dark ? 'bg-violet-500/20 border-violet-500/40 text-violet-300' : 'bg-violet-600 border-violet-600 text-white'
                  : dark ? 'border-white/10 text-gray-400 hover:border-white/20 hover:text-white' : 'border-gray-200 text-gray-600 hover:border-violet-300'}`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map(tool => (
          <a key={tool.id} href={tool.url} target="_blank" rel="noopener noreferrer"
            className={`group p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.03]
              ${dark
                ? 'bg-[#0d0d1a] border-white/5 hover:border-violet-500/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]'
                : 'bg-white border-gray-200 hover:border-violet-300 hover:shadow-md'}`}>
            <div className="flex items-start justify-between mb-3">
              
              {/* UPDATED ICON RENDERER */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center p-2 flex-shrink-0
                ${dark ? 'bg-white/5' : 'bg-white border border-gray-100'}`}>
                <img src={tool.icon} alt={`${tool.name} logo`} className="w-full h-full object-contain" />
              </div>

              <div className="flex items-center gap-2">
                {tool.free && (
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-bold
                    ${dark ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-green-50 border-green-300 text-green-700'}`}>
                    FREE
                  </span>
                )}
                <ExternalLink className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity
                  ${dark ? 'text-violet-400' : 'text-violet-600'}`} />
              </div>
            </div>
            <h4 className={`font-bold text-sm mb-1 ${dark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{tool.name}</h4>
            <span className={`text-xs font-semibold mb-2 block ${dark ? 'text-violet-400' : 'text-violet-600'}`}
              style={{ fontFamily: "'Rajdhani', sans-serif" }}>{tool.category}</span>
            <p className={`text-xs leading-relaxed mb-3 ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
              {tool.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {tool.tags.slice(0, 3).map(t => (
                <span key={t} className={`text-xs px-1.5 py-0.5 rounded-md
                  ${dark ? 'bg-white/5 text-gray-600' : 'bg-gray-100 text-gray-500'}`}>{t}</span>
              ))}
            </div>
          </a>
        ))}
        {filtered.length === 0 && (
          <div className={`col-span-full text-center py-16 ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
            <Wrench className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="font-semibold">No tools found</p>
          </div>
        )}
      </div>
    </div>
  );
}
