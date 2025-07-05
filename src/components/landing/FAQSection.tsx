import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate are the review insights?",
    answer: "Our AI model has been trained on millions of app reviews and achieves over 95% accuracy in sentiment analysis and feature request extraction. We continuously improve our models based on user feedback."
  },
  {
    question: "How many credits do I need per app?",
    answer: "One credit equals one comprehensive report. Each report includes sentiment analysis, feature requests, and MRR impact estimation. The report remains accessible for 30 days after generation."
  },
  {
    question: "Can I analyze competitor apps?",
    answer: "Yes! You can analyze any public app on the App Store or Google Play Store. This helps you understand competitor weaknesses and identify market opportunities."
  },
  {
    question: "Do unused credits expire?",
    answer: "No, your purchased credits never expire. You can use them whenever you need insights for your apps or competitor research."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Yes, we offer a 100% satisfaction guarantee. If you're not happy with the insights provided, we'll refund your unused credits no questions asked."
  }
];

const FAQSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 py-2 hover:neon-glow transition-all duration-300"
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-neon">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 