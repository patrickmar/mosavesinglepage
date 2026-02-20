import { HelpCircle, Mail, MessageCircle, Book, Phone, Clock } from 'lucide-react';

const helpResources = [
  {
    icon: Book,
    title: 'Documentation',
    description: 'Comprehensive guides and tutorials to help you get started with MoSave.',
    action: 'Browse Docs',
    color: 'var(--mosave-purple)'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our support team in real-time for immediate assistance.',
    action: 'Start Chat',
    color: 'var(--mosave-cyan)'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us an email and we\'ll get back to you within 24 hours.',
    action: 'Send Email',
    color: 'var(--mosave-indigo)'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our support team during business hours.',
    action: 'Call Us',
    color: 'var(--mosave-red)'
  }
];

export function HelpCenter() {
  return (
    <section id="help" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full mb-6">
            <HelpCircle size={16} style={{ color: 'var(--mosave-purple)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--mosave-purple)' }}>We're Here to Help</span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight"
            style={{ color: 'var(--mosave-neutral-900)' }}
          >
            Help{' '}
            <span 
              className="bg-gradient-to-r from-purple-700 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
            >
              Center
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--mosave-neutral-700)' }}>
            Get the support you need, when you need it. Our team is ready to assist you.
          </p>
        </div>

        {/* Help Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {helpResources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-100"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${resource.color}20 0%, ${resource.color}10 100%)`
                  }}
                >
                  <Icon size={28} style={{ color: resource.color, opacity: 1 }} />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--mosave-neutral-900)' }}>
                  {resource.title}
                </h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--mosave-neutral-700)' }}>
                  {resource.description}
                </p>
                <button 
                  className="text-sm font-medium hover:underline"
                  style={{ color: resource.color }}
                >
                  {resource.action} →
                </button>
              </div>
            );
          })}
        </div>

        {/* Contact Info Card */}
        <div 
          className="max-w-3xl mx-auto p-8 rounded-2xl"
          style={{ 
            background: `linear-gradient(135deg, rgba(91, 33, 182, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)`,
            border: '2px solid rgba(91, 33, 182, 0.1)'
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Clock size={24} style={{ color: 'var(--mosave-purple)' }} />
            <h3 className="text-xl font-semibold" style={{ color: 'var(--mosave-neutral-900)' }}>
              Support Hours
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm" style={{ color: 'var(--mosave-neutral-700)' }}>
            <div>
              <div className="font-semibold mb-1">Weekdays</div>
              <div>Monday - Friday: 8:00 AM - 6:00 PM WAT</div>
            </div>
            <div>
              <div className="font-semibold mb-1">Weekends</div>
              <div>Saturday - Sunday: 10:00 AM - 4:00 PM WAT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
