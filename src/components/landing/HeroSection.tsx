
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [appUrl, setAppUrl] = useState('');
  const navigate = useNavigate();

  const handleAnalyze = () => {
    if (appUrl.trim()) {
      navigate('/dashboard');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-in-up">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            See What They{' '}
            <span className="gradient-text">Hate</span>.
            <br />
            Build What They{' '}
            <span className="gradient-text">Want</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Paste any App Store or Play Store link to uncover user pain points and MRR insights.
          </p>
          
          <div className="max-w-2xl mx-auto mt-12">
            <div className="glass-card p-8 neon-glow-strong">
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  type="url"
                  placeholder="https://apps.apple.com/app/..."
                  value={appUrl}
                  onChange={(e) => setAppUrl(e.target.value)}
                  className="flex-1 h-14 text-lg bg-dark-lighter border-neon/30 focus:border-neon focus:ring-neon focus:ring-2 text-white placeholder-gray-500"
                />
                <Button
                  onClick={handleAnalyze}
                  className="h-14 px-8 text-lg font-semibold bg-neon hover:bg-neon-bright text-black transition-all duration-300 hover:scale-105 neon-glow"
                >
                  🔮 Analyze App
                </Button>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            Your unfair product advantage starts here
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
