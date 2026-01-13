'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const pricingPlans = [
  {
    name: 'Starter',
    price: { monthly: 0, annual: 0 },
    description: 'Perfect for trying out Onflow',
    features: [
      '10 agent sessions per month',
      'Basic persona templates',
      'Core testing reports',
      'Community support',
      'Email notifications',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: { monthly: 99, annual: 79 },
    description: 'For growing product teams',
    features: [
      '100 agent sessions per month',
      'Custom persona builder',
      'Advanced analytics dashboard',
      'Priority email support',
      'GitHub integration',
      'CI/CD webhooks',
      'Team collaboration (up to 5)',
      'Session recordings',
    ],
    cta: 'Start 14-Day Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: null, annual: null },
    description: 'For large-scale operations',
    features: [
      'Unlimited agent sessions',
      'White-label agents',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee (99.9% uptime)',
      'Advanced security & compliance',
      'Unlimited team members',
      'On-premise deployment option',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <Section id="pricing" className="bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="eyebrow">PRICING</p>
          <h2 className="text-h2 mb-6">Start free, scale as you grow</h2>
          <p className="text-body-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans include core features.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-gray-100 rounded-lg">
            <motion.button
              onClick={() => setBillingCycle('monthly')}
              whileTap={{ scale: 0.90 }}
              transition={{ type: "spring", stiffness: 600, damping: 15 }}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-text-dark shadow-sm'
                  : 'text-gray-600 hover:text-text-dark'
              }`}
            >
              Monthly
            </motion.button>
            <motion.button
              onClick={() => setBillingCycle('annual')}
              whileTap={{ scale: 0.90 }}
              transition={{ type: "spring", stiffness: 600, damping: 15 }}
              className={`px-6 py-2 rounded-md font-semibold transition-all flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-white text-text-dark shadow-sm'
                  : 'text-gray-600 hover:text-text-dark'
              }`}
            >
              Annual
              <span className="px-2 py-0.5 bg-success text-white text-xs rounded-full">
                Save 20%
              </span>
            </motion.button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.highlighted ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Highlighted Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1 px-4 py-1 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-full shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <Card
                className={`h-full flex flex-col ${
                  plan.highlighted
                    ? 'border-2 border-primary shadow-xl'
                    : 'border border-gray-200'
                }`}
                hover={false}
              >
                {/* Plan Name */}
                <div className="mb-6">
                  <h3 className="text-h4 mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  {plan.price[billingCycle] !== null ? (
                    <>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-text-dark">
                          ${plan.price[billingCycle]}
                        </span>
                        <span className="text-gray-500">/month</span>
                      </div>
                      {billingCycle === 'annual' && plan.price.monthly !== null && plan.price.monthly > 0 && (
                        <p className="mt-2 text-sm text-gray-500">
                          Billed annually (${plan.price.annual! * 12}/year)
                        </p>
                      )}
                    </>
                  ) : (
                    <div className="text-3xl font-bold text-text-dark">
                      Custom pricing
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan.highlighted ? 'primary' : 'secondary'}
                  size="lg"
                  className="w-full mb-8"
                >
                  {plan.cta}
                </Button>

                {/* Features List */}
                <div className="space-y-4 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-success" strokeWidth={3} />
                      </div>
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            All plans include SSL security, 99.9% uptime, and GDPR compliance.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Need a custom plan? <a href="#" className="text-primary font-semibold hover:underline cursor-pointer">Contact our sales team</a>
          </p>
        </motion.div>
      </div>
    </Section>
  );
};
