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
          <div className="glass-card p-8 neon-glow">
            <div className="aspect-video rounded-xl overflow-hidden border border-neon/20">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0"
                title="ReviewRadar Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
