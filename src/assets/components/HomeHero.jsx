import React from "react";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden font-body">
      {/* Static Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1600&h=900&fit=crop"
          alt="Tech background"
          className="w-full h-full object-cover"
        />
        {/* Enhanced Gradient Overlay for Mobile Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent md:bg-slate-950/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        
        {/* Badge - Matching "Featured Drop" style */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur border border-white/20 rounded-full text-xs font-mono uppercase tracking-widest text-slate-300 mb-6 animate-fade-in">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          Premium Tech Destination
        </div>

        {/* Main Heading - "Revolution" Typography */}
        <h1 
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white tracking-tighter leading-none mb-4 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          TECH<span className="text-blue-400">-</span>HAVEN
        </h1>

        {/* Subheading - "Revolution" Typography */}
        <h2 className="text-lg md:text-2xl font-heading font-semibold text-slate-300 mb-6 tracking-wide animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Experience the Future Today
        </h2>

        {/* Decorative Line */}
        <div className="flex justify-center mb-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>

        {/* Description */}
        <p className="text-sm md:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          Discover cutting-edge technology with AI-powered cameras, lightning-fast processors, and stunning displays.
        </p>

        {/* CTA Button - Matching "Explore Now" style */}
        <button 
          className="px-6 md:px-8 py-3 md:py-4 bg-white text-slate-900 md:bg-slate-900 md:text-white font-heading font-bold uppercase tracking-wide rounded-full md:rounded-none hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg animate-fade-in"
          style={{ animationDelay: '1s' }}
        >
          Shop Phones
        </button>
      </div>

      {/* Global Styles & Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Barlow:wght@300;400;500;600&display=swap');
        
        .font-heading { font-family: 'Rajdhani', sans-serif; }
        .font-body { font-family: 'Barlow', sans-serif; }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}