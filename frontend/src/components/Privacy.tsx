import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

const privacyPoints = [
  {
    icon: Database,
    title: 'Information We Collect',
    content: 'We collect information you provide when creating an account, such as your name, email address, phone number, and payment information. We also collect data about how you use our platform to improve your experience.'
  },
  {
    icon: Lock,
    title: 'How We Use Your Information',
    content: 'Your information is used to provide and improve our services, process transactions, communicate with you, ensure platform security, and comply with legal obligations. We never sell your personal data to third parties.'
  },
  {
    icon: Shield,
    title: 'Data Security',
    content: 'We implement industry-standard security measures including 256-bit encryption, secure servers, regular security audits, and access controls to protect your personal and financial information from unauthorized access.'
  },
  {
    icon: Eye,
    title: 'Information Sharing',
    content: 'We only share your information when necessary to provide our services (e.g., payment processors), comply with legal requirements, or with your explicit consent. Your data privacy is our priority.'
  },
  {
    icon: UserCheck,
    title: 'Your Rights',
    content: 'You have the right to access, update, or delete your personal information at any time. You can also request a copy of your data or opt-out of certain communications through your account settings.'
  },
  {
    icon: FileText,
    title: 'Policy Updates',
    content: 'We may update this privacy policy from time to time. We will notify you of any significant changes via email or through the platform. Your continued use of MoSave constitutes acceptance of any updates.'
  }
];

export function Privacy() {
  return (
    <section id="privacy" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full mb-6">
            <Shield size={16} style={{ color: 'var(--mosave-purple)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--mosave-purple)' }}>Your Privacy Matters</span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight"
            style={{ color: 'var(--mosave-neutral-900)' }}
          >
            Privacy{' '}
            <span 
              className="bg-gradient-to-r from-purple-700 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
            >
              Policy
            </span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--mosave-neutral-700)' }}>
            Last updated: February 4, 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-6 rounded-2xl" style={{ backgroundColor: 'var(--mosave-neutral-50)' }}>
          <p className="leading-relaxed" style={{ color: 'var(--mosave-neutral-700)' }}>
            At MoSave, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, store, and protect your data when you use our platform. 
            By using MoSave, you agree to the practices described in this policy.
          </p>
        </div>

        {/* Privacy Points */}
        <div className="space-y-8">
          {privacyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(135deg, var(--mosave-purple)20 0%, var(--mosave-purple)10 100%)`
                    }}
                  >
                    <Icon size={24} style={{ color: 'var(--mosave-purple)', opacity: 1 }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--mosave-neutral-900)' }}>
                      {point.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: 'var(--mosave-neutral-700)' }}>
                      {point.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact for Privacy Concerns */}
        <div 
          className="mt-12 p-8 rounded-2xl text-center"
          style={{ 
            background: `linear-gradient(135deg, var(--mosave-purple) 0%, var(--mosave-indigo) 100%)`
          }}
        >
          <h3 className="text-2xl font-semibold text-white mb-3">
            Questions About Privacy?
          </h3>
          <p className="text-white/90 mb-6">
            If you have any questions or concerns about our privacy practices, please contact us.
          </p>
          <a
            href="mailto:privacy@mosave.ng"
            className="inline-flex items-center px-6 py-3 bg-white rounded-lg transition-all hover:scale-105 shadow-lg font-medium"
            style={{ color: 'var(--mosave-purple)' }}
          >
            Contact Privacy Team
          </a>
        </div>
      </div>
    </section>
  );
}
