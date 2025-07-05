
import React from 'react';

const DemoSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your unfair{' '}
            <span className="gradient-text">product advantage</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Watch how ReviewRadar transforms app store reviews into actionable insights
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-8 neon-glow animate-float">
            <div className="aspect-video bg-gradient-to-br from-dark-lighter to-dark-card rounded-xl border border-neon/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-neon/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-semibold gradient-text">
                  Interactive Dashboard Demo
                </h3>
                <p className="text-gray-400 max-w-md">
                  Live demo showing pain scores, feature requests, and MRR estimations in real-time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
