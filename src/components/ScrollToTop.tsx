import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ScrollToTop() {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg
        transition-all duration-300 hover:scale-110 cursor-pointer border
        ${dark
          ? 'bg-[#0d0d1a] border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'
          : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 shadow-md'}`}
      style={dark ? { boxShadow: '0 0 20px rgba(0,212,255,0.2)' } : undefined}
      aria-label="Scroll to top">
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
