import { useState } from 'react';
import { ChevronRight, ChevronDown, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_LINK, SUPPORT_EMAIL, ENQUIRY_EMAIL } from '../constants/contact';

const faqs = [
  {
    question: 'What is Innings?',
    answer: 'Innings is an online skill-based gaming and sports engagement platform that allows users to participate in fantasy cricket leagues, live match interactions, and skill-based contests. Users can create an Innings ID to access hundreds of daily contests across cricket, kabaddi, football, and more, and win real cash prizes based on their sports knowledge and strategy.',
  },
  {
    question: 'What is the Innings ID and how do I create one?',
    answer: 'Your Innings ID is your unique player profile on the platform. It\'s created during registration and serves as your identity for all contests, transactions, and leaderboards. To create your Innings ID, simply download the app or visit the website, enter your mobile number, complete a quick OTP verification, and finish your KYC — the entire process takes under 5 minutes.',
  },
  {
    question: 'What is the Innings profile and what does it include?',
    answer: 'Your Innings profile is your personalized gaming hub. It displays your contest history, win statistics, skill rating, current leaderboard rank, wallet balance, transaction records, and any rewards or badges you have earned. You can also customize your profile name and avatar to stand out in the community.',
  },
  {
    question: 'Is Innings a legal and safe gaming platform?',
    answer: 'Yes, Innings is completely legal and operates as a skill-based gaming platform in compliance with applicable Indian laws. Skill-based games are clearly differentiated from games of chance under Indian law and have been upheld as legal by multiple High Courts. Innings uses industry-grade 256-bit encryption, two-factor authentication, and maintains PCI-DSS compliance for all financial transactions.',
  },
  {
    question: 'How does Innings work?',
    answer: 'Innings works in three simple steps: First, create your Innings ID and complete KYC. Second, explore the contest lobby, select a live or upcoming match, and use your cricket knowledge to build a fantasy team or join a skill-based contest. Third, once the match is live, your performance is tracked in real time, and prize winnings are credited to your Innings Wallet based on your final ranking.',
  },
  {
    question: 'What is the Innings App and how do I download it?',
    answer: 'The Innings App is the official mobile application available on both Android (Google Play) and iOS (App Store). It offers the complete platform experience on your smartphone — including live match tracking, contest participation, leaderboards, wallet management, and 24/7 customer support — all in a fast, secure, and beautifully designed interface.',
  },
  {
    question: 'What is the minimum deposit required to join paid contests?',
    answer: 'The minimum deposit amount on Innings is ₹10. You can add funds via UPI, Net Banking, debit cards, or popular wallets. Free contests are also available every day that require no deposit at all — these are perfect for new players who want to practice and get comfortable before joining paid contests.',
  },
  {
    question: 'What types of contests are available on Innings?',
    answer: 'Innings offers a wide range of contest formats: Fantasy Cricket (T20, ODI, Test), Head-to-Head contests, Mega Prize Pool tournaments (up to ₹1 Cr+), Mini-League contests, Free Practice contests, and Pro-only Exclusive contests for premium members. You can filter contests by sport, entry fee, team size, and prize pool to find the perfect match for your skill level.',
  },
  {
    question: 'How quickly are winnings credited to my account?',
    answer: 'Contest winnings are credited to your Innings Wallet within minutes of the final match results being confirmed. From your Innings Wallet, you can withdraw to your registered bank account instantly (for verified players) or within 24 hours. Elite members enjoy VIP instant withdrawals with no queue. There is no minimum withdrawal limit.',
  },
  {
    question: 'How do I contact Innings customer support?',
    answer: `You can reach our 24/7 support team via live chat on the app or website, email at ${SUPPORT_EMAIL} (support) or ${ENQUIRY_EMAIL} (enquiries), or WhatsApp at +19123423273. Pro and Elite members receive priority support with faster response times. We typically respond to all queries within 30 minutes during peak hours and within 2 hours during off-peak times.`,
  },
  {
    question: 'What sports are available on the Innings platform?',
    answer: 'Cricket is our primary sport, with comprehensive coverage of IPL, international T20s, ODIs, and Test matches. We also offer skill gaming contests for Kabaddi (PKL season), Football (ISL and major international leagues), and we continue to expand our sports portfolio. New sports are added regularly based on community demand.',
  },
  {
    question: 'Who owns and operates Innings?',
    answer: 'Innings is operated by Innings Gaming Technologies Pvt. Ltd., a registered company headquartered in India. We are committed to providing a fair, transparent, and responsible gaming environment for all our players. Our team includes cricket enthusiasts, technology experts, and gaming professionals who are passionate about building the best sports engagement platform in India.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-dark-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-primary/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="section-subtitle">Got Questions?</p>
          <h2 className="section-title mb-4">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Everything you need to know about Innings. Can't find your answer here? Reach out to our 24/7 support team.
          </p>
        </div>

        <div className="space-y-3 animate-on-scroll">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border transition-all duration-200"
              style={{
                background: openIndex === i ? 'rgba(64,201,0,0.06)' : '#12121f',
                borderColor: openIndex === i ? 'rgba(64,201,0,0.3)' : '#1e1e30',
              }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center gap-3 px-4 sm:px-6 py-4 sm:py-5 text-left group min-h-[44px] touch-manipulation"
              >
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center transition-all duration-200"
                  style={{
                    background: openIndex === i ? '#40C900' : 'rgba(64,201,0,0.12)',
                    border: '1px solid rgba(64,201,0,0.3)',
                  }}
                >
                  {openIndex === i ? (
                    <ChevronDown size={14} className="text-dark-bg" />
                  ) : (
                    <ChevronRight size={14} className="text-green-primary" />
                  )}
                </div>
                <span className={`font-semibold text-sm md:text-base transition-colors ${openIndex === i ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                  {faq.question}
                </span>
              </button>

              {openIndex === i && (
                <div className="px-4 sm:px-6 pb-6 pt-0 pl-4 sm:pl-16">
                  <p className="text-gray-400 text-sm leading-relaxed break-words">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className="mt-12 rounded-2xl p-5 sm:p-8 text-center animate-on-scroll border border-dark-border"
          style={{ background: '#12121f' }}
        >
          <h3 className="text-white font-bold text-lg sm:text-xl mb-3">Still have questions?</h3>
          <p className="text-gray-400 text-xs sm:text-sm mb-6 break-words">Our support team is available 24/7 to help you. Reach us on WhatsApp at {WHATSAPP_NUMBER}, or by email: {SUPPORT_EMAIL} (support) and {ENQUIRY_EMAIL} (enquiries).</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto"
            >
              <MessageCircle size={18} />
              <span className="truncate">WhatsApp {WHATSAPP_NUMBER}</span>
            </a>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="btn-outline inline-flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto break-all text-center"
            >
              Support: {SUPPORT_EMAIL}
            </a>
            <a
              href={`mailto:${ENQUIRY_EMAIL}`}
              className="btn-outline inline-flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto break-all text-center"
            >
              Enquiry: {ENQUIRY_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
