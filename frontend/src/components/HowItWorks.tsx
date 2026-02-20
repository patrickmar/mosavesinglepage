import { UserPlus, Users, CreditCard, BarChart3, FileCheck, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: UserPlus,
    title: 'Register',
    description: 'Create your MoSave account in minutes.',
    color: 'var(--mosave-purple)'
  },
  {
    number: 2,
    icon: Users,
    title: 'Create or Join a Group',
    description: 'Start a new savings group or join an existing cooperative.',
    color: 'var(--mosave-cyan)'
  },
  {
    number: 3,
    icon: CreditCard,
    title: 'Contribute Digitally',
    description: 'Make savings contributions easily and securely.',
    color: 'var(--mosave-indigo)'
  },
  {
    number: 4,
    icon: BarChart3,
    title: 'Track Progress',
    description: 'View balances, contributions, and group performance in real time.',
    color: 'var(--mosave-red)'
  },
  {
    number: 5,
    icon: FileCheck,
    title: 'Access Reports',
    description: 'Download statements and reports whenever you need them.',
    color: 'var(--mosave-cyan)'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: 'var(--mosave-neutral-50)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 opacity-5" style={{
          background: `radial-gradient(circle, var(--mosave-purple) 0%, transparent 70%)`
        }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5" style={{
          background: `radial-gradient(circle, var(--mosave-cyan) 0%, transparent 70%)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
            <Rocket size={16} style={{ color: 'var(--mosave-cyan)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--mosave-purple)' }}>Simple Process</span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight"
            style={{ color: 'var(--mosave-neutral-900)' }}
          >
            How{' '}
            <span 
              className="bg-gradient-to-r from-purple-700 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
            >
              MoSave
            </span>{' '}
            Works
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--mosave-neutral-700)' }}>
            Get started in 5 simple steps. From registration to accessing reports, we've made it seamless.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
                  {/* Icon Circle */}
                  <div className="flex-shrink-0 relative">
                    {/* Outer glow ring */}
                    <div 
                      className="absolute inset-0 rounded-full animate-pulse"
                      style={{ 
                        background: `${step.color}30`,
                        filter: 'blur(8px)',
                        transform: 'scale(1.2)'
                      }}
                    ></div>
                    
                    <div 
                      className="w-24 h-24 rounded-full flex items-center justify-center relative z-10 shadow-lg"
                      style={{ 
                        background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}DD 100%)`
                      }}
                    >
                      <Icon size={36} className="text-white" />
                    </div>

                    {/* Step number badge */}
                    <div 
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md z-20"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 group">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3" style={{ color: 'var(--mosave-neutral-900)' }}>
                          {step.title}
                        </h3>
                        <p className="text-lg leading-relaxed" style={{ color: 'var(--mosave-neutral-700)' }}>
                          {step.description}
                        </p>
                      </div>
                      <ArrowRight 
                        size={24} 
                        className="hidden md:block ml-4 group-hover:translate-x-2 transition-transform duration-300" 
                        style={{ color: step.color }} 
                      />
                    </div>

                    {/* Progress bar */}
                    <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${(step.number / steps.length) * 100}%`,
                          backgroundColor: step.color
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                {!isLast && (
                  <div 
                    className="absolute left-12 top-24 w-0.5 h-12 md:h-12"
                    style={{ 
                      background: `linear-gradient(to bottom, ${step.color} 0%, ${steps[index + 1].color} 100%)`,
                      opacity: 0.3
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div 
            className="inline-block p-8 rounded-2xl max-w-2xl mx-auto"
            style={{ 
              background: `linear-gradient(135deg, var(--mosave-purple) 0%, var(--mosave-indigo) 100%)`
            }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Start Your Savings Journey?
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              Join thousands of Nigerians saving smarter with MoSave
            </p>
            <a
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-xl transition-all hover:scale-105 shadow-lg font-medium"
              style={{ color: 'var(--mosave-purple)' }}
            >
              Get Started Now
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}