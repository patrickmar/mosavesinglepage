import { Target, Heart, Zap } from 'lucide-react';
import { ImageWithFallback } from '@/src/components/figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5" style={{
        background: `radial-gradient(circle at top right, var(--mosave-purple) 0%, transparent 70%)`
      }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full mb-6">
              <Heart size={16} style={{ color: 'var(--mosave-purple)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--mosave-purple)' }}>Our Story</span>
            </div>

            <h2 
              className="text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight"
              style={{ color: 'var(--mosave-neutral-900)' }}
            >
              What is{' '}
              <span 
                className="bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
              >
                MoSave
              </span>?
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed mb-8" style={{ color: 'var(--mosave-neutral-700)' }}>
              <p>
                MoSave is a <strong style={{ color: 'var(--mosave-neutral-900)' }}>digital savings and cooperative management platform</strong> designed to help individuals and groups save better, manage contributions transparently, and build financial discipline with ease.
              </p>
              
              <p>
                Whether you're saving alone, running a cooperative society, or managing a traditional savings group <em>(ajo, esusu, adashi)</em>, MoSave gives you the tools to collect contributions, track balances, and keep clear records—all in one secure online platform.
              </p>
            </div>

            {/* Mission Statement */}
            <div 
              className="p-6 rounded-2xl relative overflow-hidden"
              style={{ 
                background: `linear-gradient(135deg, var(--mosave-purple) 0%, var(--mosave-indigo) 100%)`
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Target size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2 text-lg">Our Mission</h3>
                  <p className="text-white/90">
                    To make saving more accessible, transparent, and reliable for communities and organizations across Nigeria and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1548782033-3ac3a62ece8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29tbXVuaXR5JTIwc2F2aW5ncyUyMGNvb3BlcmF0aXZlJTIwZ3JvdXB8ZW58MXx8fHwxNzcwMTIwNDE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Community savings and financial inclusion"
                className="w-full h-auto"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
            </div>

            {/* Floating stats card */}
            <div 
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs"
              style={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)' }}>
                  <Zap size={24} style={{ color: 'var(--mosave-cyan)' }} />
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ color: 'var(--mosave-purple)' }}>10,000+</div>
                  <div className="text-sm" style={{ color: 'var(--mosave-neutral-600)' }}>Active Savers</div>
                </div>
              </div>
              <p className="text-sm" style={{ color: 'var(--mosave-neutral-700)' }}>
                Join thousands building their financial future together
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}