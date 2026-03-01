import { Shield, Trophy, Zap, Star } from 'lucide-react';
import logoImg from '../assets/Innings_new_logo.png';

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-green-primary/10 border border-green-primary/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-green-primary rounded-full animate-pulse" />
              <span className="text-green-primary text-sm font-medium">India's #1 Skill Gaming Platform</span>
            </div>

            <div className="mb-4">
              <img src={logoImg} alt="Innings" className="h-16 md:h-20 w-auto object-contain mx-auto lg:mx-0 rounded" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Your All-In-One{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #40C900, #5ddc1a)' }}
              >
                Skill Gaming
              </span>{' '}
              &amp; Sports Engagement Platform
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Join millions of sports fans on Innings — where your cricket knowledge, game skills, and passion transform into real rewards. Compete, engage, and win every day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#pricing"
                className="btn-primary text-lg py-4 px-8 animate-pulse-green text-center"
                style={{ boxShadow: '0 0 30px rgba(64,201,0,0.3)' }}
              >
                Get Innings ID
              </a>
              <a
                href="#app"
                className="btn-outline text-lg py-4 px-8 text-center"
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

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-20"
                style={{ background: 'radial-gradient(circle, #40C900 0%, transparent 70%)' }}
              />
              <div className="relative grid grid-cols-2 gap-4">
                <div
                  className="col-span-2 rounded-2xl p-6 border border-green-primary/20"
                  style={{ background: 'linear-gradient(135deg, rgba(64,201,0,0.15) 0%, rgba(64,201,0,0.05) 100%)' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-primary rounded-xl flex items-center justify-center">
                      <Trophy size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Live Fantasy Match</p>
                      <p className="text-gray-400 text-sm">IND vs AUS — T20 Series</p>
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
                    <p className="text-2xl md:text-3xl font-black text-green-primary">{stat.value}</p>
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
