import { CheckCircle2, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants/contact';

const contentBlocks = [
  {
    tag: 'About Innings',
    title: 'India\'s Most Trusted Skill Gaming & Sports Engagement Platform',
    content: `Innings is a next-generation skill gaming and sports engagement platform built exclusively for passionate cricket fans and sports enthusiasts across India. Founded with a singular vision — to transform how fans interact with the sports they love — Innings blends deep cricket analytics, live match engagement, fantasy gaming, and real-money skill contests into one seamless experience.

Unlike conventional platforms that rely purely on chance, Innings is built on the foundation of skill, strategy, and knowledge. Every contest, every game mode, and every reward mechanism on our platform is designed to celebrate and reward players who invest in understanding the sport, studying player performances, and making informed decisions.

Our platform is fully certified, legally compliant, and operates under the highest standards of data security and financial integrity. With over 10 lakh registered players, ₹50 crore+ in distributed rewards, and 500+ daily contests, Innings has established itself as the gold standard in skill-based cricket gaming in India.`,
    points: [
      'Fully skill-based — no element of chance',
      'Certified and legally compliant platform',
      'Industry-grade data encryption and security',
      '10L+ strong community of players',
    ],
    imageAlt: 'About Innings Platform',
    imageContent: 'about',
    imageLeft: false,
  },
  {
    tag: 'How It Works',
    title: 'Create Your Innings ID and Start Winning in 3 Simple Steps',
    content: `Getting started on Innings is incredibly simple. In just a few minutes, you can set up your Innings ID, explore hundreds of active contests, and begin your journey toward becoming a top-ranked skill gamer in the country.

Step 1 — Create Your ID: Register with your mobile number, complete a quick KYC verification, and set up your secure Innings ID. Your account is instantly protected with two-factor authentication and biometric login support.

Step 2 — Add Funds & Join Contests: Top up your Innings Wallet using UPI, Net Banking, or your preferred payment method. Browse through our extensive lobby of live and upcoming contests — from free-to-play options to high-stakes tournaments — and join the ones that match your skill level.

Step 3 — Play, Win & Withdraw: Build your fantasy team using your cricket knowledge and our AI-powered insights, compete against players from across India, and withdraw your winnings directly to your bank account in under 2 seconds. It's that simple.`,
    points: [
      'Register and verify KYC in under 5 minutes',
      'Multiple payment options including UPI & Net Banking',
      'Free contests available every day',
      'Instant withdrawal to your bank account',
    ],
    imageAlt: 'How Innings Works',
    imageContent: 'howto',
    imageLeft: true,
  },
  {
    tag: 'Platform Security',
    title: 'Your Safety Is Our Top Priority at Every Step',
    content: `At Innings, we take the security of your data, your funds, and your overall experience extremely seriously. We have built our platform from the ground up with security-first architecture to ensure that every player on our platform can engage with complete peace of mind.

Our platform employs 256-bit AES encryption for all data transmissions, PCI-DSS compliant payment processing infrastructure, and multi-factor authentication across all account actions. Regular third-party security audits ensure that our defences remain up-to-date against emerging threats.

Financially, we maintain segregated escrow accounts for all user funds, ensuring that your wallet balance is always available and never co-mingled with operational funds. All withdrawals are processed through verified banking channels, and every transaction is monitored by our 24/7 fraud detection system.

Innings is committed to responsible gaming. We provide tools for players to set deposit limits, session time limits, and self-exclusion options to ensure that gaming remains a fun, controlled activity.`,
    points: [
      '256-bit AES data encryption',
      'PCI-DSS compliant payment processing',
      'Segregated escrow for all user funds',
      'Responsible gaming tools available',
    ],
    imageAlt: 'Platform Security',
    imageContent: 'security',
    imageLeft: false,
  },
];

function IllustrationCard({ type }: { type: string }) {
  if (type === 'about') {
    return (
      <div className="rounded-2xl p-8 border border-dark-border" style={{ background: '#12121f' }}>
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: 'rgba(64,201,0,0.08)' }}>
            <div className="w-10 h-10 bg-green-primary rounded-xl flex items-center justify-center text-white font-bold">IN</div>
            <div>
              <p className="text-white font-semibold text-sm">Innings Platform</p>
              <p className="text-gray-400 text-xs">Skill Gaming & Fantasy</p>
            </div>
            <span className="ml-auto text-green-primary text-xs font-bold">LIVE</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Total Players', value: '10,00,000+' },
              { label: 'Daily Contests', value: '500+' },
              { label: 'Prize Pool/Day', value: '₹2Cr+' },
              { label: 'Sports', value: '5+' },
            ].map((item) => (
              <div key={item.label} className="p-3 rounded-lg border border-dark-border text-center">
                <p className="text-green-primary font-bold text-lg">{item.value}</p>
                <p className="text-gray-500 text-xs">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'howto') {
    return (
      <div className="rounded-2xl p-8 border border-dark-border" style={{ background: '#12121f' }}>
        <div className="space-y-4">
          {[
            { step: 1, title: 'Create Innings ID', sub: 'Register & KYC in 5 mins', done: true },
            { step: 2, title: 'Add Funds & Join', sub: 'UPI, NetBanking & more', done: true },
            { step: 3, title: 'Win & Withdraw', sub: 'Instant bank transfer', done: false },
          ].map((s) => (
            <div key={s.step} className={`flex items-center gap-4 p-4 rounded-xl border ${s.done ? 'border-green-primary/30' : 'border-dark-border'}`}
              style={{ background: s.done ? 'rgba(64,201,0,0.06)' : 'rgba(18,18,31,0.8)' }}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm ${s.done ? 'bg-green-primary text-white' : 'bg-dark-bg border border-dark-border text-gray-400'}`}>
                {s.step}
              </div>
              <div>
                <p className={`font-semibold text-sm ${s.done ? 'text-white' : 'text-gray-400'}`}>{s.title}</p>
                <p className="text-gray-500 text-xs">{s.sub}</p>
              </div>
              {s.done && <CheckCircle2 size={18} className="ml-auto text-green-primary" />}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl p-8 border border-dark-border" style={{ background: '#12121f' }}>
      <div className="space-y-4">
        <div className="p-4 rounded-xl border border-green-primary/20" style={{ background: 'rgba(64,201,0,0.06)' }}>
          <p className="text-green-primary font-bold text-sm mb-3">Security Layers</p>
          {['256-bit AES Encryption', 'Two-Factor Auth', 'PCI-DSS Compliance', 'Fraud Detection AI', 'Escrow Wallet'].map((item) => (
            <div key={item} className="flex items-center gap-2 py-1.5 border-b border-dark-border/50 last:border-0">
              <CheckCircle2 size={14} className="text-green-primary" />
              <span className="text-gray-300 text-sm">{item}</span>
            </div>
          ))}
        </div>
        <div className="p-3 rounded-xl border border-gold/20 text-center" style={{ background: 'rgba(244,197,66,0.06)' }}>
          <p className="text-gold font-bold text-sm">Certified Safe Platform</p>
          <p className="text-gray-500 text-xs mt-1">Audited & Verified</p>
        </div>
      </div>
    </div>
  );
}

export default function ContentSection() {
  return (
    <section className="py-12 sm:py-16 bg-dark-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {contentBlocks.map((block, i) => (
          <div
            key={block.tag}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center min-w-0 ${block.imageLeft ? 'lg:grid-flow-dense' : ''}`}
          >
            <div className={`min-w-0 ${block.imageLeft ? 'lg:col-start-2 animate-on-scroll-right' : 'animate-on-scroll-left'}`}>
              <p className="section-subtitle">{block.tag}</p>
              <h2 className="section-title mb-4 sm:mb-6 break-words">{block.title}</h2>
              <div className="text-gray-400 text-sm sm:text-base leading-relaxed space-y-4 mb-6 sm:mb-8 break-words">
                {block.content.split('\n\n').map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
              <div className="space-y-3 mb-8">
                {block.points.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-green-primary flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 btn-primary min-h-[44px] w-full sm:w-auto">
                Get Started <ArrowRight size={16} />
              </a>
            </div>

            <div className={`${block.imageLeft ? 'lg:col-start-1 lg:row-start-1 animate-on-scroll-left' : 'animate-on-scroll-right'}`}>
              <IllustrationCard type={block.imageContent} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
