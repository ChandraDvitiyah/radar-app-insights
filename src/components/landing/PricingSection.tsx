
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    name: 'Freemium',
    price: { monthly: 0, yearly: 0 },
    description: 'Perfect for trying out ReviewRadar',
    features: [
      '1 app analysis per month',
      'Basic pain score insights',
      'Top 5 complaints',
      'Community support'
    ],
    cta: 'Start Free',
    popular: false
  },
  {
    name: 'Solo',
    price: { monthly: 29, yearly: 290 },
    description: 'For individual product builders',
    features: [
      '20 app analyses per month',
      'Full pain score breakdown',
      'Feature request extraction',
      'MRR estimation',
      'Export to CSV',
      'Email support'
    ],
    cta: 'Start Solo Plan',
    popular: true
  },
  {
    name: 'Team',
    price: { monthly: 99, yearly: 990 },
    description: 'For growing product teams',
    features: [
      'Unlimited app analyses',
      'Team collaboration tools',
      'Advanced analytics dashboard',
      'API access',
      'Custom reports',
      'Priority support',
      'Slack integration'
    ],
    cta: 'Start Team Plan',
    popular: false
  }
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose your{' '}
            <span className="gradient-text">advantage</span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`w-14 h-7 rounded-full transition-colors duration-300 ${
                isYearly ? 'bg-neon' : 'bg-gray-600'
              } relative`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform duration-300 ${
                  isYearly ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isYearly ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {isYearly && (
              <Badge className="bg-neon text-black font-semibold ml-2">
                Save 17%
              </Badge>
            )}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                  Most Popular
                </Badge>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold gradient-text">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-gray-400">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  )}
                </div>
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
