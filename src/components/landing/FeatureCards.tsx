import React from 'react';

const features = [
  {
    icon: '⚡',
    title: 'Reveal Frustration Fast',
    description: 'Instantly identify pain points from thousands of reviews with AI-powered sentiment analysis. Our advanced algorithms process reviews in real-time, highlighting critical issues and emerging patterns that could impact your app success.',
    gradient: 'from-red-500/20 to-orange-500/20'
  },
  {
    icon: '💡',
    title: 'Extract Feature Requests',
    description: 'Discover what users actually want built, prioritized by demand and frequency. Turn user feedback into your product roadmap.',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: '📈',
    title: 'Estimate Revenue & Build Better',
    description: 'Calculate potential MRR gains and opportunity scores to guide your product roadmap. Make data-driven decisions.',
    gradient: 'from-green-500/20 to-neon/20'
  }
];

const FeatureCards = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8">
          {/* First Row - Full Width Card */}
          <div
            className="glass-card p-8 hover:neon-glow-strong transition-all duration-500 hover:scale-105 group cursor-pointer"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${features[0].gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                <span className="text-4xl">{features[0].icon}</span>
              </div>
              
              <div>
                <h3 className="text-3xl font-semibold mb-4 group-hover:gradient-text transition-all duration-300">
                  {features[0].title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-lg">
                  {features[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Second Row - Two Half Width Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.slice(1).map((feature, index) => (
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
      </div>
    </section>
  );
};

export default FeatureCards;
