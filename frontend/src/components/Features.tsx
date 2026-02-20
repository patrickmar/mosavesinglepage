import { Wallet, Users, UserCog, TrendingUp, FileText, Shield, LayoutDashboard, Smartphone, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Wallet,
    title: 'Digital Savings Wallets',
    description: 'Save digitally and track your balances in real time.',
    color: 'var(--mosave-purple)'
  },
  {
    icon: Users,
    title: 'Group & Cooperative Savings',
    description: 'Create or join savings groups and cooperatives with ease.',
    color: 'var(--mosave-cyan)'
  },
  {
    icon: UserCog,
    title: 'Member Management',
    description: 'Add members, manage roles, and keep everyone accountable.',
    color: 'var(--mosave-indigo)'
  },
  {
    icon: TrendingUp,
    title: 'Contribution Tracking',
    description: 'Track who paid, when they paid, and how much was contributed.',
    color: 'var(--mosave-red)'
  },
  {
    icon: FileText,
    title: 'Automated Records & Reports',
    description: 'Generate savings reports and statements without manual bookkeeping.',
    color: 'var(--mosave-cyan)'
  },
  {
    icon: Shield,
    title: 'Secure Transactions',
    description: 'Your data and transactions are protected with secure technology.',
    color: 'var(--mosave-purple)'
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Dashboards',
    description: 'Powerful tools for cooperative leaders and group admins.',
    color: 'var(--mosave-indigo)'
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Access',
    description: 'Access MoSave anytime, anywhere from your device.',
    color: 'var(--mosave-red)'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: 'var(--mosave-neutral-50)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full opacity-5" style={{
          background: `radial-gradient(circle, var(--mosave-cyan) 0%, transparent 70%)`
        }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full opacity-5" style={{
          background: `radial-gradient(circle, var(--mosave-purple) 0%, transparent 70%)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
            <Sparkles size={16} style={{ color: 'var(--mosave-cyan)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--mosave-purple)' }}>Powerful Features</span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight"
            style={{ color: 'var(--mosave-neutral-900)' }}
          >
            Everything You Need to{' '}
            <span 
              className="bg-gradient-to-r from-purple-700 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
            >
              Save Smarter
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--mosave-neutral-700)' }}>
            Built for individuals, cooperatives, and savings groups who want transparency, security, and control.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Gradient accent on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${feature.color} 0%, transparent 100%)` }}
                ></div>

                <div className="relative z-10">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      backgroundColor: `${feature.color}15`,
                    }}
                  >
                    <Icon size={28} style={{ color: feature.color, opacity: 1 }} />
                  </div>
                  <h3 className="mb-2 font-semibold" style={{ color: 'var(--mosave-neutral-900)' }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--mosave-neutral-700)' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg mb-6" style={{ color: 'var(--mosave-neutral-700)' }}>
            Ready to experience these features?
          </p>
          <a
            href="/register"
            className="inline-flex items-center px-8 py-4 rounded-xl text-white transition-all hover:scale-105 shadow-lg font-medium"
            style={{ 
              background: `linear-gradient(135deg, var(--mosave-purple) 0%, var(--mosave-indigo) 100%)`,
              boxShadow: '0 10px 25px -5px rgba(91, 33, 182, 0.4)'
            }}
          >
            Get Started for Free
          </a>
        </div>
      </div>
    </section>
  );
}