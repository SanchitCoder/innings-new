import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AppShowcase from './components/AppShowcase';
import WhyChoose from './components/WhyChoose';
import ContentSection from './components/ContentSection';
import Testimonials from './components/Testimonials';
import OfferBanner from './components/OfferBanner';
import Pricing from './components/Pricing';
import ResponsibleGaming from './components/ResponsibleGaming';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyButton from './components/StickyButton';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08 }
    );

    const elements = document.querySelectorAll(
      '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right'
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen min-h-[100dvh] w-full max-w-[100vw] overflow-x-hidden bg-dark-bg text-white font-poppins">
      <Navbar />
      <Hero />
      <Features />
      <AppShowcase />
      <WhyChoose />
      <OfferBanner />
      <ContentSection />
      <Testimonials />
      <Pricing />
      <ResponsibleGaming />
      <FAQ />
      <Footer />
      <StickyButton />
    </div>
  );
}

export default App;
