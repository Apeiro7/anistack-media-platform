import { useState } from 'react';
import { Search, ExternalLink, Clock, User, BookOpen } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { coursesData } from '../../data/content';

const ALL_CATS = ['All', ...Array.from(new Set(coursesData.map(c => c.category)))];
const LEVEL_COLORS: Record<string, string> = {
  Beginner: 'text-green-400 border-green-500/30 bg-green-500/10',
  Intermediate: 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10',
  Advanced: 'text-red-400 border-red-500/30 bg-red-500/10',
};
const LEVEL_COLORS_LIGHT: Record<string, string> = {
  Beginner: 'text-green-700 border-green-300 bg-green-50',
  Intermediate: 'text-yellow-700 border-yellow-300 bg-yellow-50',
  Advanced: 'text-red-700 border-red-300 bg-red-50',
};

export default function CoursesSection() {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('All');
  const [level, setLevel] = useState('All');
  const [freeOnly, setFreeOnly] = useState(false);

  const filtered = coursesData.filter(c => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.instructor.toLowerCase().includes(search.toLowerCase()) ||
      c.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchCat = cat === 'All' || c.category === cat;
    const matchLevel = level === 'All' || c.level === level;
    const matchFree = !freeOnly || c.free;
    return matchSearch && matchCat && matchLevel && matchFree;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="text-3xl">📚</span>
        <div>
          <h2 className={`text-2xl font-black tracking-wider ${dark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: "'Orbitron', sans-serif" }}>COURSES</h2>
          <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}
            style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            Hand-picked courses from the best platforms
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className={`flex-1 flex items-center gap-2 px-4 py-2.5 rounded-xl border
            ${dark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`}>
            <Search className={`w-4 h-4 ${dark ? 'text-gray-500' : 'text-gray-400'}`} />
            <input type="text" placeholder="Search courses, instructors..." value={search} onChange={e => setSearch(e.target.value)}
              className={`bg-transparent flex-1 text-sm outline-none placeholder:text-gray-500
                ${dark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }} />
          </div>
          <select value={level} onChange={e => setLevel(e.target.value)}
            className={`px-3 py-2 rounded-xl border text-xs font-semibold outline-none cursor-pointer
              ${dark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-white border-gray-200 text-gray-700'}`}>
            <option value="All">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <button onClick={() => setFreeOnly(p => !p)}
            className={`px-4 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer
              ${freeOnly
                ? dark ? 'bg-green-500/20 border-green-500/40 text-green-400' : 'bg-green-600 border-green-600 text-white'
                : dark ? 'border-white/10 text-gray-400 hover:border-white/20' : 'border-gray-200 text-gray-600 hover:border-green-300'}`}
            style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            {freeOnly ? '✓' : ''} FREE ONLY
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {ALL_CATS.map(c => (
            <button key={c} onClick={() => setCat(c)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer
                ${cat === c
                  ? dark ? 'bg-orange-500/20 border-orange-500/40 text-orange-300' : 'bg-orange-500 border-orange-500 text-white'
                  : dark ? 'border-white/10 text-gray-400 hover:border-white/20 hover:text-white' : 'border-gray-200 text-gray-600 hover:border-orange-300'}`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(course => (
          <a key={course.id} href={course.url} target="_blank" rel="noopener noreferrer"
            className={`group rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-[1.02]
              ${dark
                ? 'bg-[#0d0d1a] border-white/5 hover:border-orange-500/20 hover:shadow-[0_0_20px_rgba(255,120,0,0.07)]'
                : 'bg-white border-gray-200 hover:border-orange-300 hover:shadow-md'}`}>
            <div className="relative aspect-video overflow-hidden">
              <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute top-2 left-2 flex gap-2">
                <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold
                  ${dark ? LEVEL_COLORS[course.level] : LEVEL_COLORS_LIGHT[course.level]}`}>
                  {course.level}
                </span>
                {course.free && (
                  <span className="text-xs px-2 py-0.5 rounded-full border font-bold bg-green-500/80 text-white border-green-400">
                    FREE
                  </span>
                )}
              </div>
              <div className="absolute bottom-2 left-2">
                <span className={`text-xs font-bold text-white`}>
                  📡 {course.platform}
                </span>
              </div>
              <ExternalLink className="absolute top-2 right-2 w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-4">
              <h4 className={`font-bold text-sm mb-2 line-clamp-2 leading-snug ${dark ? 'text-white' : 'text-gray-900'}`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{course.title}</h4>
              <p className={`text-xs mb-3 line-clamp-2 leading-relaxed ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
                {course.description}
              </p>
              <div className={`flex items-center gap-3 text-xs ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
                <span className="flex items-center gap-1"><User className="w-3 h-3" />{course.instructor}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.duration}</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {course.tags.slice(0, 3).map(t => (
                  <span key={t} className={`text-xs px-1.5 py-0.5 rounded-md
                    ${dark ? 'bg-white/5 text-gray-500' : 'bg-gray-100 text-gray-500'}`}>{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
        {filtered.length === 0 && (
          <div className={`col-span-full text-center py-16 ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
            <BookOpen className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="font-semibold">No courses found</p>
          </div>
        )}
      </div>
    </div>
  );
}
