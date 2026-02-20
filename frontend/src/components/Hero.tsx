import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/src/components/figma/ImageWithFallback';
import { Shield, Lock, Users, CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Premium gradient background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, 
            var(--mosave-purple) 0%, 
            var(--mosave-indigo) 50%, 
            var(--mosave-purple) 100%)`
        }}
      />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
            <Shield size={16} className="text-white" />
            <span className="text-white text-sm">Bank-Level Security</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
            <Lock size={16} className="text-white" />
            <span className="text-white text-sm">256-bit Encrypted</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
            <Users size={16} className="text-white" />
            <span className="text-white text-sm">10,000+ Users</span>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          {/* Premium Headline with brand accent */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30 mb-6">
              <span className="text-white text-sm">Powered by MoLoyal</span>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--mosave-cyan)' }}></span>
            </div>
          </div>

          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight text-white"
          >
            Save Smarter.{' '}
            <span 
              className="inline-block bg-gradient-to-r from-red-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent"
            >
              Grow Together.
            </span>
          </h1>
          
          {/* Enhanced Subheadline */}
          <p 
            className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed"
          >
            Empowering individuals, cooperatives, and savings groups across Africa with secure digital savings and transparent cooperative management.
          </p>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/register"
              className="group w-full sm:w-auto px-10 py-5 rounded-xl text-lg transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-2xl relative overflow-hidden"
              style={{ 
                backgroundColor: 'white',
                color: 'var(--mosave-purple)'
              }}
            >
              <span className="relative z-10 font-semibold">Create Free Account</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/login"
              className="group w-full sm:w-auto px-10 py-5 rounded-xl text-lg transition-all hover:bg-white/10 flex items-center justify-center gap-3 backdrop-blur-sm"
              style={{ 
                color: 'white', 
                border: '2px solid rgba(255, 255, 255, 0.5)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }}
            >
              <span>Login to MoSave</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} style={{ color: 'var(--mosave-cyan)' }} />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} style={{ color: 'var(--mosave-cyan)' }} />
              <span>Free to join</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} style={{ color: 'var(--mosave-cyan)' }} />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Premium Hero Visual - Dashboard Preview */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="relative">
            {/* Floating card effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-red-500/20 rounded-3xl blur-2xl"></div>
            
            <div 
              className="relative rounded-2xl shadow-2xl overflow-hidden bg-white transform hover:scale-[1.02] transition-transform duration-300"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1570894808314-677b57f25e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwJTIwbW9kZXJuJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MDY1MjkxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="MoSave Platform Dashboard - Secure Digital Savings Management"
                className="w-full h-auto"
              />
            </div>

            {/* Floating feature badges */}
            <div className="hidden lg:block absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(91, 33, 182, 0.1)' }}>
                  <Shield size={24} style={{ color: 'var(--mosave-purple)' }} />
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--mosave-neutral-900)' }}>Secure Savings</div>
                  <div className="text-xs" style={{ color: 'var(--mosave-neutral-600)' }}>Protected 24/7</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute -right-8 top-2/3 bg-white rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)' }}>
                  <Users size={24} style={{ color: 'var(--mosave-cyan)' }} />
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--mosave-neutral-900)' }}>Group Savings</div>
                  <div className="text-xs" style={{ color: 'var(--mosave-neutral-600)' }}>Build together</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof section */}
        <div className="mt-16 text-center">
          <p className="text-white/70 text-sm mb-6">Trusted by savings groups and cooperatives across Africa</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-white">
            <div>
              <div className="text-3xl font-bold">10,000+</div>
              <div className="text-white/70 text-sm">Active Users</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-white/70 text-sm">Cooperatives</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <div>
              <div className="text-3xl font-bold">₦2M+</div>
              <div className="text-white/70 text-sm">Saved Monthly</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--mosave-neutral-50)"/>
        </svg>
      </div>
    </section>
  );
}