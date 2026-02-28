import { Gift, ArrowRight, Star } from 'lucide-react';

export default function OfferBanner() {
  return (
    <section className="py-16 relative overflow-hidden" style={{ background: '#0d0d1a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl p-10 md:p-14 relative overflow-hidden animate-on-scroll"
          style={{
            background: 'linear-gradient(135deg, #7A001E 0%, #5a0016 40%, #0d1508 100%)',
            border: '1px solid rgba(122,0,30,0.4)',
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #40C900 0%, transparent 50%)' }}
          />
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5"
            style={{ background: '#40C900', transform: 'translate(30%, -30%)' }}
          />

          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-2 mb-6">
                <Gift size={16} className="text-gold" />
                <span className="text-gold text-sm font-semibold">Limited Time Welcome Bonus</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                Get{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #F4C542, #ffda6a)' }}
                >
                  ₹200 Free
                </span>{' '}
                Bonus on First Deposit
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                New to Innings? Register today, make your first deposit, and we'll match it with a ₹200 bonus credit added instantly to your Innings Wallet. Use it to join any contest, completely on us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#pricing"
                  className="flex items-center justify-center gap-2 font-bold py-4 px-8 rounded-xl text-dark-bg transition-all duration-300 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #F4C542, #f0b800)' }}
                >
                  Claim Bonus Now <ArrowRight size={18} />
                </a>
                <a
                  href="#faq"
                  className="flex items-center justify-center gap-2 font-semibold py-4 px-8 rounded-xl text-white border border-white/20 hover:border-white/50 transition-all duration-300"
                >
                  See Terms
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div
                className="relative rounded-2xl p-8 text-center"
                style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(244,197,66,0.3)' }}
              >
                <div className="mb-4">
                  <p className="text-gray-400 text-sm mb-1">New Player Offer</p>
                  <p
                    className="text-6xl font-black"
                    style={{ background: 'linear-gradient(135deg, #F4C542, #ffda6a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                  >
                    ₹200
                  </p>
                  <p className="text-white font-bold text-xl">FREE Bonus</p>
                </div>
                <div className="space-y-2 text-left mb-6">
                  {[
                    'Min. ₹100 first deposit',
                    'Valid for 7 days',
                    'Use in any contest',
                    'Instant credit',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Star size={12} className="text-gold fill-gold" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#pricing" className="block btn-primary text-center py-3 text-sm">
                  Get Innings ID Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
