import { CheckCircle2, Star, Zap, Crown } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants/contact';

const plans = [
  {
    name: 'Starter',
    icon: Star,
    price: 'Free',
    priceNote: 'No deposit required',
    description: 'Perfect for cricket fans who are just getting started with skill gaming on Innings.',
    color: '#40C900',
    popular: false,
    features: [
      'Free Innings ID creation',
      'Access to free contests daily',
      'Basic player insights dashboard',
      'Live match score tracking',
      'Standard wallet (₹10 min deposit)',
      'Email & chat support',
      'Up to 5 fantasy teams per match',
      'Community leaderboard access',
    ],
    cta: 'Get Started Free',
  },
  {
    name: 'Pro',
    icon: Zap,
    price: '₹299',
    priceNote: 'per month',
    description: 'For dedicated skill gamers who want every competitive edge and premium features.',
    color: '#40C900',
    popular: true,
    features: [
      'Everything in Starter',
      'Advanced AI player insights',
      'Priority contest access (early entry)',
      'Up to 20 fantasy teams per match',
      'Pro-only exclusive contests',
      'Cashback on entry fees (5%)',
      'Priority customer support',
      'Detailed performance analytics',
      'Contest win probability predictor',
      'Monthly Pro bonus (₹100 credits)',
    ],
    cta: 'Go Pro Today',
  },
  {
    name: 'Elite',
    icon: Crown,
    price: '₹799',
    priceNote: 'per month',
    description: 'For serious players who compete at the highest levels and demand the ultimate Innings experience.',
    color: '#F4C542',
    popular: false,
    features: [
      'Everything in Pro',
      'Unlimited fantasy teams per match',
      'Elite-exclusive mega prize contests',
      'Dedicated account manager',
      'Cashback on entry fees (12%)',
      'VIP withdrawal (instant, no queue)',
      'Early access to new features',
      'Custom team name & badge',
      'Monthly Elite bonus (₹500 credits)',
      'Invite-only leaderboard seasons',
      '1-on-1 strategy sessions monthly',
    ],
    cta: 'Join Elite',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-dark-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-primary/40 to-transparent" />
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, #40C900 0%, transparent 50%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="section-subtitle">Membership Plans</p>
          <h2 className="section-title mb-4">
            Choose Your{' '}
            <span className="gradient-text">Innings Plan</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Whether you're a casual fan or a professional skill gamer, Innings has a membership plan designed to maximize your winning potential and platform experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`animate-on-scroll relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular ? 'md:scale-105 shadow-2xl' : ''
                }`}
                style={{
                  background: '#12121f',
                  border: plan.popular ? `2px solid ${plan.color}` : '1px solid #1e1e30',
                  transitionDelay: `${i * 100}ms`,
                  boxShadow: plan.popular ? `0 0 40px ${plan.color}25` : 'none',
                }}
              >
                {plan.popular && (
                  <div
                    className="absolute top-0 left-0 right-0 py-2 text-center text-sm font-bold text-dark-bg"
                    style={{ background: plan.color }}
                  >
                    Most Popular
                  </div>
                )}

                <div className={`p-5 sm:p-8 ${plan.popular ? 'pt-10 sm:pt-12' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${plan.color}20`, border: `1px solid ${plan.color}40` }}
                    >
                      <Icon size={24} style={{ color: plan.color }} />
                    </div>
                    <h3 className="text-white font-black text-xl">{plan.name}</h3>
                  </div>

                  <div className="mb-4">
                    <span className="text-4xl font-black" style={{ color: plan.color }}>{plan.price}</span>
                    <span className="text-gray-400 text-sm ml-2">{plan.priceNote}</span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{plan.description}</p>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center font-bold py-3 px-6 rounded-xl transition-all duration-300 mb-8"
                    style={{
                      background: plan.popular ? plan.color : 'transparent',
                      color: plan.popular ? '#0B0B16' : plan.color,
                      border: `2px solid ${plan.color}`,
                    }}
                    onMouseEnter={(e) => {
                      if (!plan.popular) {
                        (e.target as HTMLAnchorElement).style.background = plan.color;
                        (e.target as HTMLAnchorElement).style.color = '#0B0B16';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!plan.popular) {
                        (e.target as HTMLAnchorElement).style.background = 'transparent';
                        (e.target as HTMLAnchorElement).style.color = plan.color;
                      }
                    }}
                  >
                    {plan.cta}
                  </a>

                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle2
                          size={16}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: plan.color }}
                        />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="mt-16 rounded-2xl p-6 text-center animate-on-scroll border border-dark-border"
          style={{ background: '#12121f' }}
        >
          <p className="text-gray-400 text-sm">
            All plans include secure KYC, certified skill-based gameplay, and 24/7 access.
            No hidden charges. Cancel membership anytime.{' '}
            <a href="#faq" className="text-green-primary hover:underline">See FAQ for details.</a>
          </p>
        </div>
      </div>
    </section>
  );
}
