import { Shield, Trophy, Zap, Star } from 'lucide-react';
import logoImg from '../assets/Innings_new_logo.png';
import { WHATSAPP_LINK } from '../constants/contact';

const stats = [
  { value: '10L+', label: 'Active Players' },
  { value: '500+', label: 'Daily Matches' },
  { value: '₹50Cr+', label: 'Rewards Given' },
  { value: '99.9%', label: 'Uptime' },
];

const badges = [
  { icon: Shield, label: 'Secure Platform' },
  { icon: Trophy, label: 'Skill Gaming' },
  { icon: Zap, label: 'Live Matches' },
  { icon: Star, label: 'Top Rated' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0B0B16 0%, #0d1a08 40%, #0B0B16 100%)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #40C900 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #7A001E 0%, transparent 70%)' }}
        />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 40px,
              rgba(64,201,0,0.3) 40px,
              rgba(64,201,0,0.3) 41px
            ), repeating-linear-gradient(
              90deg,
              transparent,
              transparent 40px,
              rgba(64,201,0,0.3) 40px,
              rgba(64,201,0,0.3) 41px
            )`
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16 relative z-10 w-full min-w-0">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center min-w-0">
          <div className="text-center lg:text-left min-w-0">
            <div className="inline-flex items-center gap-2 bg-green-primary/10 border border-green-primary/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-green-primary rounded-full animate-pulse flex-shrink-0" />
              <span className="text-green-primary text-xs sm:text-sm font-medium text-center">India's #1 Skill Gaming Platform</span>
            </div>

            <div className="mb-4">
              <img 
                src={logoImg} 
                alt="Innings" 
                className="h-16 md:h-20 w-auto object-contain mx-auto lg:mx-0 rounded-2xl border-2 border-green-primary/20 shadow-xl shadow-green-primary/15 transition-all duration-300 hover:border-green-primary/40 hover:shadow-green-primary/25 p-2 bg-dark-card/50 backdrop-blur-sm" 
              />
            </div>

            <h1 className="text-2xl min-[480px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 break-words">
              Your All-In-One{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #40C900, #5ddc1a)' }}
              >
                Skill Gaming
              </span>{' '}
              &amp; Sports Engagement Platform
            </h1>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 break-words">
              Join millions of sports fans on Innings — where your cricket knowledge, game skills, and passion transform into real rewards. Compete, engage, and win every day.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base sm:text-lg py-3 sm:py-4 px-6 sm:px-8 animate-pulse-green text-center min-h-[44px] flex items-center justify-center"
                style={{ boxShadow: '0 0 30px rgba(64,201,0,0.3)' }}
              >
                Get Innings ID
              </a>
              <a
                href="#app"
                className="btn-outline text-base sm:text-lg py-3 sm:py-4 px-6 sm:px-8 text-center min-h-[44px] flex items-center justify-center"
              >
                Download App
              </a>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {badges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-dark-card border border-dark-border rounded-full px-4 py-2">
                  <Icon size={14} className="text-green-primary" />
                  <span className="text-gray-300 text-xs font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end min-w-0 w-full">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #40C900 0%, transparent 70%)' }}
              />
              <div className="relative grid grid-cols-2 gap-2 sm:gap-4 min-w-0">
                <div
                  className="col-span-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-green-primary/20 min-w-0"
                  style={{ background: 'linear-gradient(135deg, rgba(64,201,0,0.15) 0%, rgba(64,201,0,0.05) 100%)' }}
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 min-w-0">
                    <div className="w-10 h-10 bg-green-primary rounded-xl flex items-center justify-center">
                      <Trophy size={20} className="text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-white font-bold text-sm sm:text-base truncate">Live Fantasy Match</p>
                      <p className="text-gray-400 text-xs sm:text-sm truncate">IND vs AUS — T20 Series</p>
                    </div>
                    <div className="ml-auto">
                      <span className="bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded-full border border-red-500/30 animate-pulse">LIVE</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Prize Pool</span>
                    <span className="text-gold font-bold text-lg">₹10,00,000</span>
                  </div>
                </div>

                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="card-dark text-center"
                    style={{ background: 'rgba(18,18,31,0.9)' }}
                  >
                    <p className="text-xl sm:text-2xl md:text-3xl font-black text-green-primary">{stat.value}</p>
                    <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20"
        style={{ background: 'linear-gradient(to top, #0B0B16, transparent)' }}
      />
    </section>
  );
}
