import { useState, useEffect } from 'react';
import { Download, X, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAInstallBanner() {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(() => {
    return localStorage.getItem('anistack-pwa-dismissed') === 'true';
  });

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setDismissed(true);
    }
  };

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem('anistack-pwa-dismissed', 'true');
  };

  if (!deferredPrompt || dismissed) return null;

  return (
    <div className={`fixed bottom-6 left-4 right-4 sm:left-auto sm:right-20 sm:w-80 z-50 rounded-2xl border p-4 shadow-2xl
      ${dark
        ? 'bg-[#0d0d1a] border-cyan-500/30 shadow-[0_0_30px_rgba(0,212,255,0.15)]'
        : 'bg-white border-blue-200 shadow-xl'}`}>
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className={`font-bold text-sm mb-0.5 ${dark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '11px', letterSpacing: '0.05em' }}>
            INSTALL ANISTACK
          </h4>
          <p className={`text-xs ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
            Add to home screen for the best experience
          </p>
          <button
            onClick={handleInstall}
            className="mt-2 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold
              bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:opacity-90 transition-opacity cursor-pointer"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            <Download className="w-3 h-3" />
            INSTALL APP
          </button>
        </div>
        <button onClick={handleDismiss}
          className={`p-1 rounded-lg transition-colors cursor-pointer
            ${dark ? 'text-gray-600 hover:text-gray-400' : 'text-gray-400 hover:text-gray-600'}`}>
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
