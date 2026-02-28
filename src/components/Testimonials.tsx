import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Arjun Mehta',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    text: 'Innings completely changed the way I watch cricket. I used to just be a spectator, but now every match feels personal. I\'ve won over ₹35,000 in the past three months purely through skill and my cricket knowledge.',
    avatar: 'AM',
    color: '#40C900',
    tag: 'Fantasy Pro',
  },
  {
    name: 'Priya Sharma',
    location: 'Bengaluru, Karnataka',
    rating: 5,
    text: 'The platform is incredibly intuitive and the live match engagement feature is something else. I love how the AI insights help me pick the right players. The withdrawals are genuinely instant — I never have to wait.',
    avatar: 'PS',
    color: '#7A001E',
    tag: 'Elite Member',
  },
  {
    name: 'Rohan Gupta',
    location: 'Delhi, NCR',
    rating: 5,
    text: 'I\'ve tried many fantasy platforms before, but Innings stands apart because it actually rewards skill. The data dashboard gives you everything you need to make informed decisions. Highly recommend to any serious cricket fan.',
    avatar: 'RG',
    color: '#F4C542',
    tag: 'Skill Gamer',
  },
  {
    name: 'Sneha Patel',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    text: 'The customer support at Innings is outstanding. I had a payment query at 2 AM and they resolved it within minutes. That level of care is rare. Plus, the Innings community is so helpful and engaging.',
    avatar: 'SP',
    color: '#40C900',
    tag: 'Pro Member',
  },
  {
    name: 'Vikram Singh',
    location: 'Jaipur, Rajasthan',
    rating: 5,
    text: 'Finally a platform that takes security seriously. I feel completely confident adding money and making transactions. The wallet is smooth, the contests are fair, and the prize payouts are exactly as promised every time.',
    avatar: 'VS',
    color: '#7A001E',
    tag: 'Verified Player',
  },
  {
    name: 'Kavitha Nair',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    text: 'The Innings app is beautifully designed and super fast. I manage my fantasy teams during breaks at work and the experience is flawless. It\'s become a daily habit for me — the leaderboards keep me motivated!',
    avatar: 'KN',
    color: '#F4C542',
    tag: 'Daily Player',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden" style={{ background: '#0d0d1a' }}>
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #40C900 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="section-subtitle">Player Stories</p>
          <h2 className="section-title mb-4">
            What Our Players{' '}
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From first-time users to seasoned skill gamers, here's what the Innings community has to say about their experience on our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="animate-on-scroll group relative rounded-2xl p-6 border border-dark-border transition-all duration-300 hover:-translate-y-2 hover:border-green-primary/30 hover:shadow-xl hover:shadow-green-primary/5"
              style={{ background: '#12121f', transitionDelay: `${i * 70}ms` }}
            >
              <div className="absolute top-4 right-4 opacity-20">
                <Quote size={32} className="text-green-primary" />
              </div>

              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.location}</p>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium mt-1 inline-block"
                    style={{ background: `${t.color}20`, color: t.color, border: `1px solid ${t.color}30` }}
                  >
                    {t.tag}
                  </span>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-gold fill-gold" />
                ))}
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 animate-on-scroll">
          <div className="text-center">
            <p className="text-4xl font-black text-green-primary">4.8/5</p>
            <div className="flex justify-center gap-1 my-1">
              {[1,2,3,4,5].map((i) => <Star key={i} size={14} className="text-gold fill-gold" />)}
            </div>
            <p className="text-gray-400 text-sm">App Store Rating</p>
          </div>
          <div className="w-px h-12 bg-dark-border hidden md:block" />
          <div className="text-center">
            <p className="text-4xl font-black text-white">2.4L+</p>
            <p className="text-gray-400 text-sm mt-2">Total Reviews</p>
          </div>
          <div className="w-px h-12 bg-dark-border hidden md:block" />
          <div className="text-center">
            <p className="text-4xl font-black text-gold">98%</p>
            <p className="text-gray-400 text-sm mt-2">Satisfaction Rate</p>
          </div>
          <div className="w-px h-12 bg-dark-border hidden md:block" />
          <div className="text-center">
            <p className="text-4xl font-black text-maroon-light">10L+</p>
            <p className="text-gray-400 text-sm mt-2">Happy Players</p>
          </div>
        </div>
      </div>
    </section>
  );
}
