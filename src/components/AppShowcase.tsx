import { Download, Star, CheckCircle2 } from 'lucide-react';

const appScreens = [
  {
    title: 'Home Dashboard',
    bg: 'from-green-primary/20 to-dark-card',
    content: (
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <p className="text-white font-bold text-sm">Good Morning, Rahul!</p>
          <span className="text-green-primary text-xs bg-green-primary/15 px-2 py-0.5 rounded-full">Pro</span>
        </div>
        <div className="bg-green-primary/10 border border-green-primary/20 rounded-xl p-3">
          <p className="text-xs text-gray-400 mb-1">Wallet Balance</p>
          <p className="text-2xl font-black text-white">₹4,250</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-dark-bg rounded-lg p-2 text-center">
            <p className="text-green-primary font-bold text-sm">12</p>
            <p className="text-gray-500 text-xs">Contests Joined</p>
          </div>
          <div className="bg-dark-bg rounded-lg p-2 text-center">
            <p className="text-gold font-bold text-sm">₹1,200</p>
            <p className="text-gray-500 text-xs">Won Today</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Live Match',
    bg: 'from-maroon-primary/20 to-dark-card',
    content: (
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <p className="text-red-400 text-xs font-semibold">LIVE</p>
          <p className="text-gray-400 text-xs">IND vs AUS — Over 14.3</p>
        </div>
        <div className="flex justify-between items-center bg-dark-bg rounded-xl p-3">
          <div className="text-center">
            <p className="text-white font-black text-xl">IND</p>
            <p className="text-green-primary font-bold text-sm">186/4</p>
          </div>
          <div className="text-center">
            <p className="text-gray-500 text-xs">vs</p>
            <p className="text-gray-500 text-xs">T20</p>
          </div>
          <div className="text-center">
            <p className="text-white font-black text-xl">AUS</p>
            <p className="text-gray-400 font-bold text-sm">Yet to bat</p>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">Virat Kohli</span>
            <span className="text-gold font-semibold">72* (48)</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">KL Rahul</span>
            <span className="text-white font-semibold">34 (28)</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Contest Lobby',
    bg: 'from-gold/10 to-dark-card',
    content: (
      <div className="p-4 space-y-2">
        <p className="text-white font-bold text-sm mb-3">Top Contests</p>
        {[
          { name: 'Mega Prize Pool', prize: '₹10,00,000', spots: '50K', tag: 'hot' },
          { name: 'Head to Head', prize: '₹500', spots: '2', tag: 'quick' },
          { name: 'Pro League', prize: '₹2,50,000', spots: '10K', tag: 'pro' },
        ].map((c) => (
          <div key={c.name} className="bg-dark-bg rounded-lg p-2.5 flex items-center justify-between">
            <div>
              <p className="text-white text-xs font-semibold">{c.name}</p>
              <p className="text-gray-500 text-xs">{c.spots} spots</p>
            </div>
            <div className="text-right">
              <p className="text-gold font-bold text-xs">{c.prize}</p>
              <span className={`text-xs px-2 py-0.5 rounded-full ${c.tag === 'hot' ? 'bg-red-500/20 text-red-400' : c.tag === 'pro' ? 'bg-maroon-primary/20 text-maroon-light' : 'bg-green-primary/20 text-green-primary'}`}>
                {c.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Leaderboard',
    bg: 'from-green-primary/10 to-dark-card',
    content: (
      <div className="p-4 space-y-2">
        <p className="text-white font-bold text-sm mb-3">Top Players</p>
        {[
          { rank: 1, name: 'CricketKing', points: '2,450', prize: '₹50K' },
          { rank: 2, name: 'StrikeRate99', points: '2,210', prize: '₹25K' },
          { rank: 3, name: 'SixHitter', points: '2,100', prize: '₹10K' },
        ].map((p) => (
          <div key={p.rank} className="bg-dark-bg rounded-lg p-2.5 flex items-center gap-3">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${p.rank === 1 ? 'bg-gold text-dark-bg' : p.rank === 2 ? 'bg-gray-500 text-white' : 'bg-amber-700 text-white'}`}>
              {p.rank}
            </span>
            <div className="flex-1">
              <p className="text-white text-xs font-semibold">{p.name}</p>
              <p className="text-gray-500 text-xs">{p.points} pts</p>
            </div>
            <p className="text-green-primary text-xs font-bold">{p.prize}</p>
          </div>
        ))}
      </div>
    ),
  },
];

export default function AppShowcase() {
  return (
    <section id="app" className="py-24 relative overflow-hidden" style={{ background: '#0d0d1a' }}>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #40C900 0%, transparent 50%), radial-gradient(circle at 80% 50%, #7A001E 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll-left">
            <p className="section-subtitle">Mobile App</p>
            <h2 className="section-title mb-6">
              Download the{' '}
              <span className="gradient-text">Innings App</span>{' '}
              &amp; Start Winning
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              The Innings mobile app gives you everything you need — live match tracking, instant contest joining, real-time leaderboards, and instant withdrawals — all in your pocket. Available on Android and iOS.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Instant contest registration & team creation',
                'Live score updates and ball-by-ball commentary',
                'One-tap deposits & instant withdrawals',
                'Personalized match recommendations',
                'Biometric-secured wallet access',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-green-primary flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-8">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={18} className="text-gold fill-gold" />
                ))}
              </div>
              <span className="text-white font-semibold">4.8/5</span>
              <span className="text-gray-400 text-sm">from 2.4L+ reviews</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="flex items-center gap-3 btn-primary py-4 px-6 rounded-xl"
                style={{ boxShadow: '0 0 25px rgba(64,201,0,0.25)' }}
              >
                <Download size={20} />
                <div className="text-left">
                  <p className="text-xs opacity-80">Get it on</p>
                  <p className="font-bold text-sm">Google Play</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-dark-card border border-dark-border hover:border-green-primary/40 py-4 px-6 rounded-xl transition-all duration-300"
              >
                <Download size={20} className="text-white" />
                <div className="text-left">
                  <p className="text-xs text-gray-400">Available on</p>
                  <p className="font-bold text-sm text-white">App Store</p>
                </div>
              </a>
            </div>
          </div>

          <div className="animate-on-scroll-right">
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="absolute inset-0 rounded-3xl blur-3xl opacity-15"
                style={{ background: 'radial-gradient(circle, #40C900, transparent)' }}
              />
              {appScreens.map((screen, i) => (
                <div
                  key={screen.title}
                  className={`rounded-2xl overflow-hidden border border-dark-border/60 hover:border-green-primary/30 transition-all duration-300 hover:-translate-y-1 ${i % 2 === 1 ? 'mt-6' : ''}`}
                  style={{ background: '#12121f' }}
                >
                  <div className={`bg-gradient-to-br ${screen.bg} px-4 pt-3 pb-1`}>
                    <div className="flex gap-1 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-500/60" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                      <div className="w-2 h-2 rounded-full bg-green-500/60" />
                    </div>
                    <p className="text-white text-xs font-semibold">{screen.title}</p>
                  </div>
                  {screen.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
