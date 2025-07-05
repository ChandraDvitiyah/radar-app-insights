
import React from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/landing/HeroSection';
import DemoSection from '@/components/landing/DemoSection';
import FeatureCards from '@/components/landing/FeatureCards';
import PricingSection from '@/components/landing/PricingSection';
import Footer from '@/components/landing/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white relative overflow-x-hidden">
      <ParticleBackground />
      <HeroSection />
      <DemoSection />
      <FeatureCards />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Landing;
