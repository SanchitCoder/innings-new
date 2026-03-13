import { Shield, Zap, Trophy, Users, TrendingUp, Headphones } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_LINK } from '../constants/contact';

const reasons = [
  {
    icon: Shield,
    title: 'Certified & Legally Compliant',
    description: 'Innings is a fully compliant skill gaming platform operating within all applicable laws and regulations. Your account, data, and funds are safeguarded under the highest security standards.',
    highlight: '100% Legal',
    color: '#40C900',
  },
  {
    icon: Zap,
    title: 'Instant Transactions',
    description: 'Deposit funds and withdraw your winnings in seconds. Our lightning-fast payment infrastructure supports UPI, Net Banking, and major wallets for seamless money movement.',
    highlight: '<2 Sec',
    color: '#F4C542',
  },
  {
    icon: Trophy,
    title: 'Massive Prize Pools',
    description: 'Compete for prize pools ranging from ₹100 to ₹1 Crore+ across daily, weekly, and season-long tournaments. The more skill you bring, the more you earn.',
    highlight: '₹1Cr+ Pools',
    color: '#40C900',
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven Insights',
    description: 'Access advanced player performance data, pitch reports, weather conditions, and AI-powered recommendations to help you craft the winning team every time.',
    highlight: 'AI-Powered',
    color: '#F4C542',
  },
  {
    icon: Users,
    title: 'Thriving Community',
    description: 'Be part of a passionate community of 10 lakh+ skill gamers. Share strategies, compete in leagues, participate in community events, and rise through the ranks together.',
    highlight: '10L+ Players',
    color: '#40C900',
  },
  {
    icon: Headphones,
    title: '24/7 Dedicated Support',
    description: `Our expert support team is available around the clock via live chat, email, and WhatsApp (${WHATSAPP_NUMBER}) to resolve any issues and ensure your experience on Innings is always smooth.`,
    highlight: 'Always On',
    color: '#7A001E',
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="py-16 sm:py-24 bg-dark-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="section-subtitle">Why Innings</p>
          <h2 className="section-title mb-4">
            The Smarter Way to{' '}
            <span className="gradient-text">Play & Win</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Millions of cricket fans choose Innings for one simple reason — we combine the thrill of sports with the science of skill gaming to create a truly rewarding experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="animate-on-scroll group relative rounded-2xl p-5 sm:p-8 border border-dark-border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-green-primary/30"
                style={{ background: '#12121f', transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${reason.color}, transparent)` }}
                />
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-5"
                  style={{ background: reason.color }}
                />

                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${reason.color}20`, border: `1px solid ${reason.color}40` }}
                  >
                    <Icon size={26} style={{ color: reason.color }} />
                  </div>
                  <div>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block"
                      style={{ background: `${reason.color}20`, color: reason.color, border: `1px solid ${reason.color}30` }}
                    >
                      {reason.highlight}
                    </span>
                    <h3 className="text-white font-bold text-base leading-snug">{reason.title}</h3>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div
          className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center animate-on-scroll"
          style={{
            background: 'linear-gradient(135deg, rgba(64,201,0,0.12) 0%, rgba(122,0,30,0.12) 100%)',
            border: '1px solid rgba(64,201,0,0.2)',
          }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 break-words">
            Ready to Start Your <span className="gradient-text">Innings</span>?
          </h3>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Join over 10 lakh players who are already winning on India's most trusted skill gaming platform. Create your free account in under 2 minutes.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base sm:text-lg py-3 sm:py-4 px-6 sm:px-10 inline-block min-h-[44px] flex items-center justify-center"
            style={{ boxShadow: '0 0 30px rgba(64,201,0,0.3)' }}
          >
            Get Innings ID — Free
          </a>
        </div>
      </div>
    </section>
  );
}
