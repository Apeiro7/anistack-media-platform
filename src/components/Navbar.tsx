import { useState } from 'react';
import { Sun, Moon, Menu, X, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home', emoji: '🏠' },
  { id: 'anime', label: 'Anime', emoji: '🌸' },
  { id: 'videos', label: 'Videos', emoji: '🎞️' },
  { id: 'software', label: 'Software', emoji: '🧩' },
  { id: 'courses', label: 'Courses', emoji: '📚' },
  { id: 'tools', label: 'Tools', emoji: '🛠️' },
  { id: 'links', label: 'Links', emoji: '🔗' },
];

export default function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === 'dark';
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (section: string) => {
    onSectionChange(section);
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300
      ${dark
        ? 'bg-[#080810]/90 border-b border-cyan-500/10'
        : 'bg-white/90 border-b border-gray-200/80'}
      backdrop-blur-xl`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">

          {/* Logo — clickable → home */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 group cursor-pointer select-none focus:outline-none"
          >
            <div className="relative w-8 h-8 flex-shrink-0">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div className="absolute inset-0 rounded-lg"
                style={{ boxShadow: '0 0 12px rgba(0,212,255,0.5)' }} />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`text-lg font-black tracking-widest group-hover:opacity-80 transition-opacity
                  ${dark ? 'text-white' : 'text-gray-900'}`}
                style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: '0.12em' }}>
                ANI<span className="text-cyan-400">STACK</span>
              </span>
              <span className={`text-[8px] tracking-[0.3em] font-semibold
                ${dark ? 'text-purple-400' : 'text-purple-600'}`}
                style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                YOUR DIGITAL VAULT
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map(item => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer select-none
                    ${isActive
                      ? dark
                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,212,255,0.15)]'
                        : 'bg-blue-600 text-white border border-blue-600 shadow-md'
                      : dark
                        ? 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-transparent'
                    }`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <span>{item.emoji}</span>
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 border cursor-pointer
                ${dark
                  ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400 hover:bg-yellow-500/20'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'}`}>
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(p => !p)}
              className={`lg:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-all border cursor-pointer
                ${dark
                  ? 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                  : 'bg-gray-100 border-gray-200 text-gray-900 hover:bg-gray-200'}`}>
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className={`lg:hidden py-3 border-t ${dark ? 'border-cyan-500/10' : 'border-gray-100'}`}>
            <div className="grid grid-cols-3 gap-2 pb-2">
              {NAV_ITEMS.map(item => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all flex flex-col items-center gap-1 cursor-pointer select-none
                      ${isActive
                        ? dark
                          ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30'
                          : 'bg-blue-600 text-white border border-blue-600'
                        : dark
                          ? 'text-gray-400 hover:text-white hover:bg-white/5 border border-white/5'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-gray-100'
                      }`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    <span className="text-lg">{item.emoji}</span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
