'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Section } from '@/components/ui/Section';

const faqs = [
  {
    question: 'How is Onflow different from traditional QA?',
    answer:
      'Traditional QA relies on manual testing or basic automation scripts that follow predefined paths. Onflow uses AI agents with Computer Vision that see and interact with your product like real users do. Our agents adapt to UI changes, get confused by poor UX (just like humans), and provide behavioral insights—not just pass/fail results.',
  },
  {
    question: 'What types of products can be tested?',
    answer:
      'Onflow works with any web-based application, including SaaS platforms, e-commerce sites, dashboards, and progressive web apps. Our agents can test both public-facing and authenticated experiences. We support React, Vue, Angular, vanilla JavaScript, and any other frontend framework.',
  },
  {
    question: 'Do I need technical knowledge to use Onflow?',
    answer:
      'Not at all! Our platform is designed for both technical and non-technical users. Product managers can create personas and run tests without writing code. For developers, we provide advanced features like custom scripts, API access, and GitHub integration for seamless workflow automation.',
  },
  {
    question: 'How long does a typical test session take?',
    answer:
      'Most test sessions complete in 5-15 minutes, depending on the complexity of your product and the number of personas deployed. You can run multiple sessions in parallel to get comprehensive feedback quickly. Results are available in real-time as agents complete their tasks.',
  },
  {
    question: 'Can Onflow integrate with our CI/CD pipeline?',
    answer:
      'Yes! Onflow provides webhooks, REST API, and native integrations with popular CI/CD tools like GitHub Actions, GitLab CI, CircleCI, and Jenkins. You can automatically trigger tests on every pull request, deployment, or custom event.',
  },
  {
    question: 'What about data security and privacy?',
    answer:
      'Security is our top priority. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We\'re SOC 2 Type II certified and GDPR compliant. Your test sessions are isolated, and we never store sensitive user data. Enterprise plans include on-premise deployment options for maximum control.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-h2 mb-6">Frequently asked questions</h2>
          <p className="text-body-lg text-gray-600">
            Everything you need to know about Onflow. Can't find what you're
            looking for? <a href="#" className="text-primary font-semibold hover:underline">Chat with our team</a>.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-primary hover:shadow-md transition-all cursor-pointer"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-blue-50/50 transition-all cursor-pointer group"
              >
                <span className="text-lg font-semibold text-text-dark pr-8 group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <div className="w-8 h-8 rounded-full bg-blue-50 group-hover:bg-primary flex items-center justify-center transition-all flex-shrink-0">
                  <ChevronDown
                    className={`w-5 h-5 text-primary group-hover:text-white transition-all duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl">
            <h3 className="text-xl font-bold text-text-dark">
              Still have questions?
            </h3>
            <p className="text-gray-600">
              Our team is here to help you get started with Onflow.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="px-6 py-2 bg-white border border-gray-200 rounded-lg font-semibold text-text-dark hover:border-primary hover:text-primary hover:shadow-md transition-all cursor-pointer"
              >
                View Documentation
              </a>
              <a
                href="#"
                className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Contact Support
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
