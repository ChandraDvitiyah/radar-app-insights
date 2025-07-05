
import React from 'react';

const features = [
  {
    icon: '⚡',
    title: 'Reveal Frustration Fast',
    description: 'Instantly identify pain points from thousands of reviews with AI-powered sentiment analysis.',
    gradient: 'from-red-500/20 to-orange-500/20'
  },
  {
    icon: '💡',
    title: 'Extract Feature Requests',
    description: 'Discover what users actually want built, prioritized by demand and frequency.',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: '📈',
    title: 'Estimate Revenue & Build Better',
    description: 'Calculate potential MRR gains and opportunity scores to guide your product roadmap.',
    gradient: 'from-green-500/20 to-neon/20'
  }
];

const FeatureCards = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:neon-glow-strong transition-all duration-500 hover:scale-105 group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{feature.icon}</span>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 group-hover:gradient-text transition-all duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
