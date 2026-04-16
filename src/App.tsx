import { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HomeSection from './components/sections/HomeSection';
import AnimeSection from './components/sections/AnimeSection';
import VideosSection from './components/sections/VideosSection';
import SoftwareSection from './components/sections/SoftwareSection';
import CoursesSection from './components/sections/CoursesSection';
import ToolsSection from './components/sections/ToolsSection';
import LinksSection from './components/sections/LinksSection';
import ScrollToTop from './components/ScrollToTop';
import PWAInstallBanner from './components/PWAInstallBanner';

function AppContent() {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  // Read section from URL search param
  const getInitialSection = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('section') || 'home';
  };

  const [activeSection, setActiveSection] = useState(getInitialSection);

  // Sync URL when section changes
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    const url = section === 'home' ? window.location.pathname : `?section=${section}`;
    window.history.pushState({}, '', url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser back/forward
  useEffect(() => {
    const handler = () => setActiveSection(getInitialSection());
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'anime': return <AnimeSection />;
      case 'videos': return <VideosSection />;
      case 'software': return <SoftwareSection />;
      case 'courses': return <CoursesSection />;
      case 'tools': return <ToolsSection />;
      case 'links': return <LinksSection />;
      default: return <HomeSection onNavigate={handleSectionChange} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300
      ${dark ? 'bg-[#080810] text-white' : 'bg-gray-50 text-gray-900'}`}>

      {/* Background pattern for dark mode */}
      {dark && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {/* Grid pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }} />
          {/* Gradient orbs */}
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)' }} />
        </div>
      )}

      <Navbar activeSection={activeSection} onSectionChange={handleSectionChange} />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-12">
        <div className="pt-4">
          {renderSection()}
        </div>
      </main>

      <ScrollToTop />
      <PWAInstallBanner />

      {/* Footer */}
      <footer className={`relative z-10 border-t mt-8 py-6 px-4
        ${dark ? 'border-white/5 bg-[#060610]' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className={`font-black tracking-widest ${dark ? 'text-cyan-400' : 'text-blue-600'}`}
              style={{ fontFamily: "'Orbitron', sans-serif" }}>
              ANISTACK
            </span>
            <span className={dark ? 'text-gray-700' : 'text-gray-400'}>•</span>
            <span className={dark ? 'text-gray-600' : 'text-gray-400'}
              style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              Your Digital Vault
            </span>
          </div>
          <div className="flex items-center gap-4">
            {['Home', 'Anime', 'Videos', 'Software', 'Courses', 'Tools', 'Links'].map(item => (
              <button key={item}
                onClick={() => handleSectionChange(item.toLowerCase())}
                className={`transition-colors cursor-pointer hover:opacity-80
                  ${dark ? 'text-gray-600 hover:text-cyan-400' : 'text-gray-400 hover:text-blue-600'}`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
