import { useState } from 'react';
import { Search, ExternalLink, Link } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { linksData } from '../../data/content';

const ALL_CATS = ['All', ...Array.from(new Set(linksData.map(l => l.category)))];

const CAT_COLORS: Record<string, { dark: string; light: string }> = {
  Documentation: { dark: 'text-blue-400 border-blue-500/20 bg-blue-500/5', light: 'text-blue-700 border-blue-200 bg-blue-50' },
  Community: { dark: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5', light: 'text-cyan-700 border-cyan-200 bg-cyan-50' },
  News: { dark: 'text-yellow-400 border-yellow-500/20 bg-yellow-500/5', light: 'text-yellow-700 border-yellow-200 bg-yellow-50' },
  Discovery: { dark: 'text-orange-400 border-orange-500/20 bg-orange-500/5', light: 'text-orange-700 border-orange-200 bg-orange-50' },
  Learning: { dark: 'text-green-400 border-green-500/20 bg-green-500/5', light: 'text-green-700 border-green-200 bg-green-50' },
  Design: { dark: 'text-pink-400 border-pink-500/20 bg-pink-500/5', light: 'text-pink-700 border-pink-200 bg-pink-50' },
  Anime: { dark: 'text-purple-400 border-purple-500/20 bg-purple-500/5', light: 'text-purple-700 border-purple-200 bg-purple-50' },
};

export default function LinksSection() {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('All');

  const filtered = linksData.filter(l => {
    const matchSearch = l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.description.toLowerCase().includes(search.toLowerCase());
    const matchCat = cat === 'All' || l.category === cat;
    return matchSearch && matchCat;
  });

  // Group by category
  const grouped = ALL_CATS.filter(c => c !== 'All').reduce((acc, c) => {
    const items = filtered.filter(l => l.category === c);
    if (items.length > 0) acc[c] = items;
    return acc;
  }, {} as Record<string, typeof linksData>);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="text-3xl">🔗</span>
        <div>
          <h2 className={`text-2xl font-black tracking-wider ${dark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: "'Orbitron', sans-serif" }}>LINKS</h2>
          <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}
            style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            Important websites, resources & communities
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className={`flex-1 flex items-center gap-2 px-4 py-2.5 rounded-xl border
          ${dark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`}>
          <Search className={`w-4 h-4 ${dark ? 'text-gray-500' : 'text-gray-400'}`} />
          <input type="text" placeholder="Search links..." value={search} onChange={e => setSearch(e.target.value)}
            className={`bg-transparent flex-1 text-sm outline-none placeholder:text-gray-500
              ${dark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }} />
        </div>
        <div className="flex flex-wrap gap-2">
          {ALL_CATS.map(c => (
            <button key={c} onClick={() => setCat(c)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer
                ${cat === c
                  ? dark ? 'bg-teal-500/20 border-teal-500/40 text-teal-300' : 'bg-teal-600 border-teal-600 text-white'
                  : dark ? 'border-white/10 text-gray-400 hover:border-white/20 hover:text-white' : 'border-gray-200 text-gray-600 hover:border-teal-300'}`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grouped Links */}
      {cat === 'All' ? (
        <div className="space-y-8">
          {Object.entries(grouped).map(([category, items]) => {
            const colors = CAT_COLORS[category] || { dark: 'text-gray-400 border-gray-500/20 bg-gray-500/5', light: 'text-gray-700 border-gray-200 bg-gray-50' };
            return (
              <div key={category}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-black tracking-widest px-2 py-1 rounded-lg border
                    ${dark ? colors.dark : colors.light}`}
                    style={{ fontFamily: "'Orbitron', sans-serif" }}>
                    {category.toUpperCase()}
                  </span>
                  <div className={`h-px flex-1 ${dark ? 'bg-white/5' : 'bg-gray-200'}`} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {items.map(link => <LinkCard key={link.id} link={link} dark={dark} colors={colors} />)}
                </div>
              </div>
            );
          })}
          {Object.keys(grouped).length === 0 && (
            <div className={`text-center py-16 ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
              <Link className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="font-semibold">No links found</p>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map(link => {
            const colors = CAT_COLORS[link.category] || { dark: 'text-gray-400 border-gray-500/20 bg-gray-500/5', light: 'text-gray-700 border-gray-200 bg-gray-50' };
            return <LinkCard key={link.id} link={link} dark={dark} colors={colors} />;
          })}
          {filtered.length === 0 && (
            <div className={`col-span-full text-center py-16 ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
              <Link className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="font-semibold">No links found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function LinkCard({ link, dark, colors }: { link: typeof linksData[0]; dark: boolean; colors: { dark: string; light: string } }) {
  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer"
      className={`group flex items-start gap-3 p-4 rounded-2xl border transition-all duration-300 hover:scale-[1.02]
        ${dark
          ? 'bg-[#0d0d1a] border-white/5 hover:border-teal-500/20 hover:shadow-[0_0_15px_rgba(0,200,150,0.07)]'
          : 'bg-white border-gray-200 hover:border-teal-300 hover:shadow-md'}`}>
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0
        ${dark ? 'bg-white/5' : 'bg-gray-100'}`}>
        {link.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h4 className={`font-bold text-sm ${dark ? 'text-white group-hover:text-teal-300' : 'text-gray-900 group-hover:text-teal-700'} transition-colors`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {link.name}
          </h4>
          <ExternalLink className={`w-3 h-3 flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity
            ${dark ? 'text-teal-400' : 'text-teal-600'}`} />
        </div>
        <span className={`text-xs font-semibold ${dark ? colors.dark : colors.light} border px-1.5 py-0.5 rounded-md inline-block mt-0.5`}
          style={{ fontFamily: "'Rajdhani', sans-serif" }}>
          {link.category}
        </span>
        <p className={`text-xs mt-1.5 leading-relaxed line-clamp-2 ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
          {link.description}
        </p>
      </div>
    </a>
  );
}
