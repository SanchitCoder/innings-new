import { Facebook, Twitter, Youtube, Instagram, Mail, MessageCircle, MapPin, ExternalLink } from 'lucide-react';
import logoImg from '../assets/Innings_new_logo.png';
import { WHATSAPP_NUMBER, WHATSAPP_LINK, WHATSAPP_TEL_LINK, SUPPORT_EMAIL, ENQUIRY_EMAIL } from '../constants/contact';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#why' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Download App', href: '#app' },
  { label: 'Register', href: '#' },
];

const policyLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Refund Policy', href: '#' },
  { label: 'Responsible Gaming', href: '#' },
  { label: 'Fair Play Policy', href: '#' },
  { label: 'KYC Policy', href: '#' },
];

const sports = [
  'IPL Fantasy Cricket',
  'T20 International',
  'ODI Cricket',
  'Test Match Fantasy',
  'Kabaddi Fantasy',
  'Football Fantasy',
];

const seoKeywords = [
  'Innings', 'Innings App', 'Innings ID', 'Innings Gaming', 'Innings Fantasy Cricket',
  'Skill Gaming India', 'Fantasy Cricket App', 'Cricket Fantasy League', 'Innings Login',
  'Online Cricket Contest', 'Innings Download', 'Fantasy Sports India', 'Cricket Skill Game',
  'Innings Register', 'Innings Fantasy App', 'Innings Pro', 'Innings Elite', 'IPL Fantasy',
  'Innings Leaderboard', 'Cricket Rewards App', 'Win Real Money Cricket', 'Innings Wallet',
  'Innings Support', 'Cricket Gaming Platform India', 'Innings Official',
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-dark-border" style={{ background: '#080810' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="lg:col-span-1">
            <img 
              src={logoImg} 
              alt="Innings" 
              className="h-14 w-auto object-contain mb-4 rounded-xl border-2 border-green-primary/20 shadow-lg shadow-green-primary/10 transition-all duration-300 hover:border-green-primary/40 hover:shadow-green-primary/20 p-1.5 bg-dark-card/50 backdrop-blur-sm" 
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Welcome to Innings — India's premier skill gaming and sports engagement platform. Build your team, compete in live contests, and earn real rewards through your cricket knowledge and strategy.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: MessageCircle, href: WHATSAPP_LINK, label: 'WhatsApp' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Youtube, href: '#', label: 'YouTube' },
                { icon: Instagram, href: '#', label: 'Instagram' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-dark-border transition-all duration-200 hover:border-green-primary hover:bg-green-primary/10 hover:text-green-primary text-gray-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-green-primary transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 bg-green-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Legal & Policies</h4>
            <ul className="space-y-3 mb-8">
              {policyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-green-primary transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 bg-green-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Sports</h4>
            <ul className="space-y-2">
              {sports.map((s) => (
                <li key={s}>
                  <span className="text-gray-500 text-xs">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contact Us</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-green-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-500 text-xs mb-1">Support</p>
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="text-gray-300 text-sm hover:text-green-primary transition-colors break-all">
                    {SUPPORT_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-green-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-500 text-xs mb-1">Enquiries</p>
                  <a href={`mailto:${ENQUIRY_EMAIL}`} className="text-gray-300 text-sm hover:text-green-primary transition-colors break-all">
                    {ENQUIRY_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle size={16} className="text-green-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-500 text-xs mb-1">WhatsApp Support</p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-300 text-sm hover:text-green-primary transition-colors">
                    {WHATSAPP_NUMBER}
                  </a>
                  <span className="text-gray-500 text-xs mx-1">·</span>
                  <a href={WHATSAPP_TEL_LINK} className="text-gray-300 text-sm hover:text-green-primary transition-colors">
                    Call
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-green-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-500 text-xs mb-1">Head Office</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Innings Gaming Technologies Pvt. Ltd.<br />
                    Mumbai, Maharashtra — 400001, India
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-xl p-4 border border-green-primary/20"
              style={{ background: 'rgba(64,201,0,0.05)' }}
            >
              <p className="text-white text-sm font-semibold mb-1">Support Hours</p>
              <p className="text-gray-400 text-xs">24 hours / 7 days a week</p>
              <p className="text-green-primary text-xs font-medium mt-1">Always here to help</p>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-dark-border">
          <div className="flex flex-wrap gap-2 mb-4">
            {seoKeywords.map((kw) => (
              <a key={kw} href="#" className="text-gray-600 text-xs hover:text-gray-400 transition-colors">
                {kw}
              </a>
            ))}
          </div>
        </div>

        <div className="py-6 border-t border-dark-border flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-gray-500 text-xs sm:text-sm break-words">
            © 2026 Innings Gaming Technologies Pvt. Ltd. | All Rights Reserved
          </p>
          <p className="text-gray-600 text-xs text-center md:text-right max-w-sm">
            Innings is a skill-based gaming platform. Playing skill games may be addictive — please play responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
