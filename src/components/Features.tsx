import { Activity, BarChart2, Gamepad2, Users, Wallet, HeadphonesIcon, Bell, Award, Lock, Globe } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Live Match Engagement',
    description: 'Follow every ball, wicket, and boundary with real-time match updates and interactive engagement features that keep you in the heart of the action.',
    color: 'green',
  },
  {
    icon: BarChart2,
    title: 'Insights Dashboard',
    description: 'Access deep player analytics, match statistics, and predictive insights to sharpen your decision-making and build winning strategies.',
    color: 'maroon',
  },
  {
    icon: Gamepad2,
    title: 'Skill Gaming Arena',
    description: 'Participate in skill-based contests that reward your cricket knowledge and strategic thinking across multiple game formats.',
    color: 'green',
  },
  {
    icon: Users,
    title: 'Fantasy Leagues',
    description: 'Create or join fantasy cricket leagues with friends or compete against thousands of players nationally for massive prize pools.',
    color: 'maroon',
  },
  {
    icon: Wallet,
    title: 'Secure Wallet',
    description: 'Manage your funds with a fully encrypted, RBI-compliant wallet supporting instant deposits and lightning-fast withdrawals.',
    color: 'green',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Our dedicated support team is always available to assist you with any queries, ensuring a seamless and enjoyable experience.',
    color: 'maroon',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Never miss a moment with intelligent push notifications for match alerts, team announcements, and prize distribution updates.',
    color: 'green',
  },
  {
    icon: Award,
    title: 'Rewards & Leaderboards',
    description: 'Earn points, climb leaderboards, and unlock exclusive rewards as you showcase your skills and consistency on the platform.',
    color: 'maroon',
  },
  {
    icon: Lock,
    title: 'Safe & Certified',
    description: 'Innings operates under strict legal compliance with industry-grade security protocols to protect every user and transaction.',
    color: 'green',
  },
  {
    icon: Globe,
    title: 'Multi-Sport Coverage',
    description: 'Beyond cricket, explore skill gaming contests across kabaddi, football, and more — all in one unified sports engagement platform.',
    color: 'maroon',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-12 sm:py-20 bg-dark-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="section-subtitle">Platform Features</p>
          <h2 className="section-title mb-4">
            Everything You Need to{' '}
            <span className="gradient-text">Win Big</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Innings brings together skill gaming, live sports interaction, fantasy leagues, and secure payments all on one powerful platform built for serious cricket enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isGreen = feature.color === 'green';
            return (
              <div
                key={feature.title}
                className="animate-on-scroll card-dark group cursor-default"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                    isGreen
                      ? 'bg-green-primary/15 border border-green-primary/30'
                      : 'bg-maroon-primary/15 border border-maroon-primary/30'
                  }`}
                >
                  <Icon
                    size={22}
                    className={isGreen ? 'text-green-primary' : 'text-maroon-light'}
                  />
                </div>
                <h3 className="text-white font-bold text-sm mb-2 leading-snug">{feature.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed break-words">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
          <div
            className="animate-on-scroll rounded-2xl p-6 sm:p-8 border border-green-primary/20 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(64,201,0,0.1) 0%, rgba(64,201,0,0.03) 100%)' }}
          >
            <p className="text-4xl sm:text-5xl font-black text-green-primary mb-2">500+</p>
            <p className="text-white font-semibold text-lg mb-1">Daily Contests</p>
            <p className="text-gray-400 text-sm">New skill games and fantasy contests launched every single day</p>
          </div>
          <div
            className="animate-on-scroll rounded-2xl p-6 sm:p-8 border border-gold/20 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(244,197,66,0.1) 0%, rgba(244,197,66,0.03) 100%)' }}
          >
            <p className="text-4xl sm:text-5xl font-black text-gold mb-2">₹50Cr+</p>
            <p className="text-white font-semibold text-lg mb-1">Rewards Distributed</p>
            <p className="text-gray-400 text-sm">Real cash prizes paid out to skilled players across India</p>
          </div>
          <div
            className="animate-on-scroll rounded-2xl p-6 sm:p-8 border border-maroon-primary/20 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(122,0,30,0.15) 0%, rgba(122,0,30,0.05) 100%)' }}
          >
            <p className="text-4xl sm:text-5xl font-black text-maroon-light mb-2">10L+</p>
            <p className="text-white font-semibold text-lg mb-1">Registered Players</p>
            <p className="text-gray-400 text-sm">A thriving community of passionate skill gamers across the nation</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />
    </section>
  );
}
