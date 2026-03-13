import { ShieldCheck, AlertTriangle, Phone, Heart } from 'lucide-react';

const partners = [
  { name: 'GameCare', icon: Heart },
  { name: 'SafePlay', icon: ShieldCheck },
  { name: 'ResponsibleGaming', icon: AlertTriangle },
  { name: 'GamAware', icon: Phone },
];

export default function ResponsibleGaming() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden" style={{ background: '#0a0a15' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
        <div
          className="rounded-2xl p-5 sm:p-8 border border-dark-border"
          style={{ background: '#12121f' }}
        >
          <AlertTriangle size={32} className="text-gold mx-auto mb-4" />
          <h3 className="text-white font-bold text-xl mb-3">Play Responsibly</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-2xl mx-auto break-words">
            Innings is committed to responsible skill gaming. If you feel that gaming is affecting your daily life, finances, or relationships, please take a break. We provide self-exclusion tools, deposit limits, and session controls to help you stay in control. There is always assistance available for those who need it.
          </p>
          <p className="text-white font-semibold text-sm mb-6">Support Partners:</p>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {partners.map(({ name, icon: Icon }) => (
              <div key={name} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-border">
                <Icon size={16} className="text-green-primary" />
                <span className="text-gray-400 text-sm">{name}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs">
            Innings promotes safe, responsible, and conscious gaming — because your well-being is what counts the most.
          </p>
        </div>
      </div>
    </section>
  );
}
