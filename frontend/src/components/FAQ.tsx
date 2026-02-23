"use client"


import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is MoSave?',
    answer: 'MoSave is a digital savings and cooperative management platform designed to help individuals and groups save better, manage contributions transparently, and build financial discipline with ease. Whether you\'re saving alone or managing a cooperative society, MoSave gives you the tools you need.'
  },
  {
    question: 'Is MoSave free to use?',
    answer: 'Yes! Creating an account and joining MoSave is completely free. We offer various features at no cost, with premium features available for cooperatives and organizations that need advanced management tools.'
  },
  {
    question: 'How secure is my money on MoSave?',
    answer: 'Your security is our top priority. MoSave uses bank-level 256-bit encryption to protect all your data and transactions. We implement multiple layers of security including secure authentication, data privacy protocols, and transparent audit trails to keep your savings safe.'
  },
  {
    question: 'Can I use MoSave for my savings group (ajo, esusu, adashi)?',
    answer: 'Absolutely! MoSave is specifically designed to digitize traditional savings groups. You can create or join groups, track contributions, manage members, and maintain transparent records all in one secure platform.'
  },
  {
    question: 'How do I make contributions?',
    answer: 'Making contributions is easy. Simply log into your MoSave account, select your savings group or personal wallet, and follow the prompts to make a digital contribution. All transactions are tracked automatically with clear records.'
  },
  {
    question: 'Can I withdraw my savings?',
    answer: 'Yes, you can withdraw your savings according to the terms set by your savings group or personal savings plan. For cooperative groups, withdrawal terms are determined by the group\'s rules and are clearly displayed in your dashboard.'
  },
  {
    question: 'How do I create a cooperative or savings group?',
    answer: 'Creating a group is simple! Register for an account, navigate to the "Create Group" section, fill in your group details, invite members, and set your contribution schedule. You\'ll have full admin controls to manage your cooperative.'
  },
  {
    question: 'Can I access MoSave on mobile?',
    answer: 'Yes! MoSave is accessible via web browsers on all devices including smartphones, tablets, and computers. We\'re also working on dedicated mobile apps for iOS and Android.'
  },
  {
    question: 'What reports can I generate?',
    answer: 'MoSave provides comprehensive reporting including contribution history, member balances, group performance, transaction statements, and custom reports. All reports can be downloaded and exported for your records.'
  },
  {
    question: 'How do I get support if I have issues?',
    answer: 'We offer multiple support channels including live chat, email support (support@mosave.ng), phone support, and comprehensive documentation. Our support team is available during business hours to assist you with any questions or concerns.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--mosave-neutral-50)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
            <HelpCircle size={16} style={{ color: 'var(--mosave-cyan)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--mosave-purple)' }}>Got Questions?</span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight"
            style={{ color: 'var(--mosave-neutral-900)' }}
          >
            Frequently Asked{' '}
            <span 
              className="bg-gradient-to-r from-purple-700 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
            >
              Questions
            </span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--mosave-neutral-700)' }}>
            Find answers to common questions about MoSave
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-purple-50/50 transition-colors"
                >
                  <h3 className="font-semibold text-lg pr-4" style={{ color: 'var(--mosave-neutral-900)' }}>
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    size={24} 
                    className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    style={{ color: 'var(--mosave-purple)' }}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="leading-relaxed" style={{ color: 'var(--mosave-neutral-700)' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg mb-4" style={{ color: 'var(--mosave-neutral-700)' }}>
            Still have questions?
          </p>
          <a
            href="/help"
            className="inline-flex items-center px-6 py-3 rounded-lg text-white transition-all hover:scale-105 shadow-md font-medium"
            style={{ 
              background: `linear-gradient(135deg, var(--mosave-purple) 0%, var(--mosave-indigo) 100%)`
            }}
          >
            Visit Help Center
          </a>
        </div>
      </div>
    </section>
  );
}