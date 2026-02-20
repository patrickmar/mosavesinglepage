import { FileText, CheckCircle, AlertCircle, Scale, UserCheck, XCircle } from 'lucide-react';

const termsPoints = [
  {
    icon: UserCheck,
    title: 'Account Registration',
    content: 'To use MoSave, you must create an account with accurate information. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must be at least 18 years old to create an account.'
  },
  {
    icon: CheckCircle,
    title: 'Acceptable Use',
    content: 'You agree to use MoSave only for lawful purposes and in accordance with these terms. You will not use the platform to engage in fraudulent activities, violate any laws, or harm other users. Cooperative groups must operate transparently and in good faith.'
  },
  {
    icon: Scale,
    title: 'Platform Responsibilities',
    content: 'MoSave provides a platform for savings management but does not act as a bank or financial institution. We facilitate digital record-keeping and contribution tracking but are not responsible for the financial decisions made by users or cooperative groups.'
  },
  {
    icon: AlertCircle,
    title: 'Fees and Payments',
    content: 'Basic MoSave services are free. Premium features for cooperatives and organizations may incur fees, which will be clearly communicated. All payments are processed securely, and transaction fees (if any) will be disclosed before confirmation.'
  },
  {
    icon: XCircle,
    title: 'Termination',
    content: 'We reserve the right to suspend or terminate accounts that violate these terms, engage in fraudulent activities, or pose security risks. You may close your account at any time through your account settings, subject to settling any outstanding obligations.'
  },
  {
    icon: FileText,
    title: 'Changes to Terms',
    content: 'We may modify these terms from time to time. We will provide notice of significant changes via email or platform notifications. Your continued use of MoSave after changes take effect constitutes acceptance of the updated terms.'
  }
];

export function Terms() {
  return (
    <section id="terms" className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--mosave-neutral-50)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
            <FileText size={16} style={{ color: 'var(--mosave-cyan)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--mosave-purple)' }}>Legal Information</span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight"
            style={{ color: 'var(--mosave-neutral-900)' }}
          >
            Terms of{' '}
            <span 
              className="bg-gradient-to-r from-purple-700 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
            >
              Service
            </span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--mosave-neutral-700)' }}>
            Last updated: February 4, 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-6 rounded-2xl bg-white shadow-sm">
          <p className="leading-relaxed" style={{ color: 'var(--mosave-neutral-700)' }}>
            Welcome to MoSave! These Terms of Service ("Terms") govern your use of the MoSave platform and services. 
            By creating an account or using our platform, you agree to be bound by these terms. 
            Please read them carefully before using our services.
          </p>
        </div>

        {/* Terms Points */}
        <div className="space-y-8">
          {termsPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border-2 border-transparent hover:border-purple-100 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(135deg, var(--mosave-cyan)20 0%, var(--mosave-cyan)10 100%)`
                    }}
                  >
                    <Icon size={24} style={{ color: 'var(--mosave-cyan)', opacity: 1 }} />
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

        {/* Additional Terms */}
        <div className="mt-12 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--mosave-neutral-900)' }}>
              Limitation of Liability
            </h3>
            <p className="leading-relaxed" style={{ color: 'var(--mosave-neutral-700)' }}>
              MoSave provides the platform "as is" and makes no warranties about the completeness, reliability, or accuracy of the services. 
              We are not liable for any losses arising from your use of the platform, disputes between cooperative members, or third-party actions.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--mosave-neutral-900)' }}>
              Governing Law
            </h3>
            <p className="leading-relaxed" style={{ color: 'var(--mosave-neutral-700)' }}>
              These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these terms 
              or your use of MoSave will be resolved in the courts of Nigeria.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div 
          className="mt-12 p-8 rounded-2xl text-center"
          style={{ 
            background: `linear-gradient(135deg, rgba(91, 33, 182, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)`,
            border: '2px solid rgba(91, 33, 182, 0.2)'
          }}
        >
          <h3 className="text-2xl font-semibold mb-3" style={{ color: 'var(--mosave-neutral-900)' }}>
            Questions About Our Terms?
          </h3>
          <p className="mb-6" style={{ color: 'var(--mosave-neutral-700)' }}>
            If you have any questions about these terms, please reach out to our legal team.
          </p>
          <a
            href="mailto:legal@mosave.ng"
            className="inline-flex items-center px-6 py-3 rounded-lg text-white transition-all hover:scale-105 shadow-md font-medium"
            style={{ 
              background: `linear-gradient(135deg, var(--mosave-purple) 0%, var(--mosave-indigo) 100%)`
            }}
          >
            Contact Legal Team
          </a>
        </div>
      </div>
    </section>
  );
}
