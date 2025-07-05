import React from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/landing/HeroSection';
import DemoSection from '@/components/landing/DemoSection';
import FeatureCards from '@/components/landing/FeatureCards';
import PricingSection from '@/components/landing/PricingSection';
import FAQSection from '@/components/landing/FAQSection';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white relative overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <DemoSection />
      <FeatureCards />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Landing;
