import { Shield, Lock, CheckCircle, Eye, Database, ShieldCheck } from 'lucide-react';

const securityFeatures = [
  {
    icon: Lock,
    title: '256-Bit Encryption',
    description: 'Bank-grade encryption protects all your data and transactions.',
    color: 'var(--mosave-purple)'
  },
  {
    icon: ShieldCheck,
    title: 'Secure Authentication',
    description: 'Multi-layer security verification keeps your account protected.',
    color: 'var(--mosave-cyan)'
  },
  {
    icon: Database,
    title: 'Data Privacy',
    description: 'Your information is stored securely and never shared without consent.',
    color: 'var(--mosave-indigo)'
  },
  {
    icon: Eye,
    title: 'Transparent Operations',
    description: 'Full audit trails and activity logs for complete accountability.',
    color: 'var(--mosave-red)'
  }
];

export function Security() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Premium gradient background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, 
            rgba(91, 33, 182, 0.03) 0%, 
            rgba(6, 182, 212, 0.03) 100%)`
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10" style={{
        background: `radial-gradient(circle, var(--mosave-purple) 0%, transparent 70%)`
      }}></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10" style={{
        background: `radial-gradient(circle, var(--mosave-cyan) 0%, transparent 70%)`
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full mb-6">
            <Shield size={16} style={{ color: 'var(--mosave-purple)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--mosave-purple)' }}>Security & Trust</span>
          </div>

          {/* Hero Shield Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Outer glow rings */}
              <div 
                className="absolute inset-0 rounded-full animate-pulse"
                style={{ 
                  background: `radial-gradient(circle, var(--mosave-purple) 0%, transparent 70%)`,
                  filter: 'blur(20px)',
                  transform: 'scale(1.5)'
                }}
              ></div>
              
              <div 
                className="w-28 h-28 rounded-full flex items-center justify-center relative z-10 shadow-2xl"
                style={{ 
                  background: `linear-gradient(135deg, var(--mosave-purple) 0%, var(--mosave-indigo) 100%)`
                }}
              >
                <Shield size={56} className="text-white" strokeWidth={1.5} />
              </div>

              {/* Corner badges */}
              <div 
                className="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: 'var(--mosave-cyan)' }}
              >
                <CheckCircle size={20} className="text-white" />
              </div>
            </div>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight"
            style={{ color: 'var(--mosave-neutral-900)' }}
          >
            Your Savings are{' '}
            <span 
              className="bg-gradient-to-r from-purple-700 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
            >
              Safe & Secure
            </span>
          </h2>

          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--mosave-neutral-700)' }}>
            We take security seriously. MoSave uses industry-leading security measures to protect your data, your money, and your trust. Our platform is built with multiple layers of protection to ensure your peace of mind.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-100"
              >
                <div className="flex items-start gap-6">
                  <div 
                    className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${feature.color}20 0%, ${feature.color}10 100%)`
                    }}
                  >
                    <Icon size={32} style={{ color: feature.color, opacity: 1 }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--mosave-neutral-900)' }}>
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: 'var(--mosave-neutral-700)' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div 
          className="max-w-4xl mx-auto p-8 rounded-2xl"
          style={{ 
            background: `linear-gradient(135deg, var(--mosave-purple) 0%, var(--mosave-indigo) 100%)`
          }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Trusted by Thousands Across Nigeria
            </h3>
            <p className="text-white/90 text-lg">
              Join the community of savers who trust MoSave with their financial future
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: 'Secure Platform', value: '100%' },
              { icon: CheckCircle, label: 'Uptime', value: '99.9%' },
              { icon: Lock, label: 'Encrypted', value: '256-bit' },
              { icon: Eye, label: 'Transparent', value: 'Always' }
            ].map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Icon size={32} className="text-white mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{badge.value}</div>
                  <div className="text-sm text-white/80">{badge.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Trust Message */}
        <div className="text-center mt-12">
          <p className="text-lg" style={{ color: 'var(--mosave-neutral-700)' }}>
            Have questions about our security?{' '}
            <a href="/login" className="font-semibold hover:underline" style={{ color: 'var(--mosave-purple)' }}>
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}