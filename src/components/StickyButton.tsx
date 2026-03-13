import { useState, useEffect } from 'react';
import { X, UserPlus, MessageCircle, Bot } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants/contact';

export default function StickyButton() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);

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
    <>
      {/* Chatbot panel placeholder - replace with your chatbot widget/iframe */}
      {chatbotOpen && (
        <div
          className="fixed z-40 left-4 right-4 sm:left-auto sm:right-6 sm:w-80 bottom-24 sm:bottom-24 rounded-2xl border border-dark-border shadow-2xl overflow-hidden transition-all duration-300 max-h-[70vh] flex flex-col"
          style={{ background: '#12121f' }}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-dark-border bg-dark-card/80">
            <div className="flex items-center gap-2">
              <Bot size={20} className="text-green-primary" />
              <span className="font-semibold text-white text-sm">Chat with us</span>
            </div>
            <button
              onClick={() => setChatbotOpen(false)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-dark-border transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>
          <div className="min-h-48 h-64 p-4 flex items-center justify-center text-gray-500 text-sm text-center overflow-y-auto">
            Chat widget can be embedded here. Connect your preferred chatbot (e.g. Tawk.to, Intercom) or custom solution.
          </div>
        </div>
      )}

      <div
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 transition-all duration-500 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative flex flex-col-reverse sm:flex-row items-end sm:items-center gap-2 sm:gap-3 max-w-[calc(100vw-2rem)]">
          <button
            type="button"
            onClick={() => setChatbotOpen((prev) => !prev)}
            className="flex items-center gap-1.5 sm:gap-2 font-bold text-xs sm:text-sm py-2.5 px-3 sm:py-3.5 sm:px-5 rounded-full text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg border border-dark-border min-h-[44px] touch-manipulation"
            style={{
              background: 'linear-gradient(135deg, #1e1e30 0%, #2a2a40 100%)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
            aria-label="Open chatbot"
          >
            <Bot size={18} className="text-green-primary flex-shrink-0" />
            Chatbot
          </button>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 sm:gap-2 font-bold text-xs sm:text-sm py-2.5 px-3 sm:py-3.5 sm:px-5 rounded-full bg-[#25D366] text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-[#25D366]/40 min-h-[44px] touch-manipulation"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={18} className="flex-shrink-0" />
            WhatsApp
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 sm:gap-2 font-bold text-xs sm:text-sm py-2.5 px-3 sm:py-3.5 sm:px-6 rounded-full text-dark-bg transition-all duration-300 hover:scale-105 active:scale-95 min-h-[44px] touch-manipulation"
            style={{
              background: 'linear-gradient(135deg, #40C900, #2fa000)',
              boxShadow: '0 0 30px rgba(64,201,0,0.5), 0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            <UserPlus size={18} className="flex-shrink-0" />
            Get Innings ID
          </a>
          <button
            onClick={() => { setDismissed(true); setVisible(false); }}
            className="w-9 h-9 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors border border-dark-border bg-dark-card hover:bg-dark-border flex-shrink-0 touch-manipulation"
            aria-label="Dismiss"
            type="button"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </>
  );
}
