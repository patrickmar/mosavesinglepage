import { User, Building, Coins, Briefcase, Users2 } from 'lucide-react';

const audiences = [
  {
    icon: User,
    title: 'Individuals',
    description: 'Personal savers building financial discipline and tracking their goals.',
    color: 'var(--mosave-purple)',
    gradient: 'from-purple-500 to-purple-700'
  },
  {
    icon: Building,
    title: 'Cooperatives',
    description: 'Formal cooperative societies managing member contributions and loans.',
    color: 'var(--mosave-cyan)',
    gradient: 'from-cyan-500 to-cyan-700'
  },
  {
    icon: Coins,
    title: 'Savings Groups',
    description: 'Traditional ajo, esusu, or adashi groups going digital.',
    color: 'var(--mosave-indigo)',
    gradient: 'from-indigo-500 to-indigo-700'
  },
  {
    icon: Briefcase,
    title: 'Organizations',
    description: 'Businesses and institutions running staff savings schemes.',
    color: 'var(--mosave-red)',
    gradient: 'from-red-500 to-red-700'
  }
];

export function WhoItsFor() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-5">
        <Users2 size={800} style={{ color: 'var(--mosave-purple)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full mb-6">
            <Users2 size={16} style={{ color: 'var(--mosave-purple)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--mosave-purple)' }}>For Everyone</span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight"
            style={{ color: 'var(--mosave-neutral-900)' }}
          >
            Who is{' '}
            <span 
              className="bg-gradient-to-r from-purple-700 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
            >
              MoSave For
            </span>?
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--mosave-neutral-700)' }}>
            Whether you're an individual saver or managing a large cooperative, MoSave adapts to your needs.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div 
                key={index}
                className="group text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden bg-white shadow-lg hover:shadow-2xl"
              >
                {/* Gradient background on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-white/20"
                    style={{ backgroundColor: `${audience.color}15` }}
                  >
                    <Icon size={40} className="transition-colors duration-300 group-hover:text-white" style={{ color: audience.color, opacity: 1 }} />
                  </div>
                  <h3 className="mb-3 font-semibold text-xl transition-colors duration-300 group-hover:text-white" style={{ color: 'var(--mosave-neutral-900)' }}>
                    {audience.title}
                  </h3>
                  <p className="leading-relaxed transition-colors duration-300 group-hover:text-white/90" style={{ color: 'var(--mosave-neutral-700)' }}>
                    {audience.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div 
                  className="absolute top-0 right-0 w-20 h-20 opacity-10"
                  style={{ 
                    background: `radial-gradient(circle at top right, ${audience.color} 0%, transparent 70%)`
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center">
          <div 
            className="inline-block p-8 rounded-2xl max-w-3xl mx-auto"
            style={{ 
              background: `linear-gradient(135deg, rgba(91, 33, 182, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)`,
              border: '2px solid rgba(91, 33, 182, 0.1)'
            }}
          >
            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--mosave-neutral-900)' }}>
              Built for African Communities
            </h3>
            <p className="text-lg" style={{ color: 'var(--mosave-neutral-700)' }}>
              MoSave understands the unique savings culture in Nigeria and across Africa. We're here to digitize trust-based savings traditions while maintaining the transparency and accountability you expect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}