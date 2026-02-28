import { useState, useEffect } from 'react';
import { X, UserPlus } from 'lucide-react';

export default function StickyButton() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !dismissed) {
        setVisible(true);
      } else if (window.scrollY <= 400) {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative flex items-center gap-3">
        <a
          href="#pricing"
          className="flex items-center gap-2 font-bold text-sm py-3.5 px-6 rounded-full text-dark-bg transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #40C900, #2fa000)',
            boxShadow: '0 0 30px rgba(64,201,0,0.5), 0 4px 20px rgba(0,0,0,0.3)',
          }}
        >
          <UserPlus size={18} />
          Get Innings ID
        </a>
        <button
          onClick={() => { setDismissed(true); setVisible(false); }}
          className="w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors border border-dark-border bg-dark-card hover:bg-dark-border"
          aria-label="Dismiss"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
