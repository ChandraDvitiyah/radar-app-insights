import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    name: 'Starter Pack',
    price: 19,
    credits: 50,
    description: 'Perfect for indie developers and small apps',
    features: [
      '50 review analysis credits',
      'Full pain score breakdown',
      'Feature request extraction',
      'MRR estimation',
      'Export to CSV',
      'Email support'
    ],
    cta: 'Get 50 Credits',
    popular: false
  },
  {
    name: 'Growth Pack',
    price: 49,
    credits: 150,
    description: 'Best value for growing products',
    features: [
      '150 review analysis credits',
      'Full pain score breakdown',
      'Feature request extraction',
      'MRR estimation',
      'Export to CSV',
      'Priority email support',
      'Slack notifications'
    ],
    cta: 'Get 150 Credits',
    popular: true
  }
];

const PricingSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple{' '}
            <span className="gradient-text">Credit-Based</span>
            {' '}Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            1 credit = 1 comprehensive app analysis report. Purchase credits that never expire.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card p-8 relative transition-all duration-500 hover:scale-105 ${
                plan.popular 
                  ? 'neon-glow-strong border-neon/50' 
                  : 'hover:neon-glow'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-neon text-black font-semibold px-4 py-1">
                  Best Value
                </Badge>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold gradient-text">
                    ${plan.price}
                  </span>
                  <span className="text-gray-400">
                    /{plan.credits} credits
                  </span>
                </div>
                <p className="text-neon text-sm">
                  ${(plan.price / plan.credits).toFixed(2)} per report
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <span className="text-neon">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full h-12 font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-neon hover:bg-neon-bright text-black neon-glow'
                    : 'bg-dark-lighter hover:bg-dark-card border border-neon/30 hover:border-neon text-white'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
