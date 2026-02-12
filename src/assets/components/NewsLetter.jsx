import React, { useState } from "react";
import { Check, Mail, Clock, User, Sparkles } from 'lucide-react';

export default function HomeNewsletter() {
  const [email, setEmail] = useState('');
  const [subscribers, setSubscribers] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [message, setMessage] = useState('');
  const [showDemo, setShowDemo] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubscribe = () => {
    if (!email) { setMessage('Please enter your email address'); setIsSubscribed(false); return; }
    if (!validateEmail(email)) { setMessage('Please enter a valid email address'); setIsSubscribed(false); return; }
    
    if (subscribers.find(sub => sub.email === email)) {
      setMessage('This email is already subscribed!'); setIsSubscribed(false); return;
    }

    setSubscribers([...subscribers, { email, subscribedAt: new Date(), lastEmailSent: null, emailsSent: 0 }]);
    setIsSubscribed(true);
    setMessage('Successfully subscribed! You will receive weekly reminders.');
    setEmail('');
  };

  const sendWeeklyEmails = () => {
    setSubscribers(subscribers.map(s => ({ ...s, lastEmailSent: new Date(), emailsSent: s.emailsSent + 1 })));
    setMessage(`Weekly emails sent to ${subscribers.length} subscribers!`);
  };

  const sampleEmail = {
    subject: '🛒 Weekly Tech Deals - Don\'t Miss Out!',
    content: `Hi there! Check out this week's top deals:\n\n• Gaming Laptops - 40% off\n• Smartphones - New Arrivals\n• Audio Gear - Premium Sound\n\nUse code TECH15 for extra savings.`
  };

  return (
    <section className="relative bg-black text-white font-body overflow-hidden border-t border-b border-blue-500/20">
      
      {/* TECHNICAL GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      {/* DECORATIVE ACCENT LINES */}
      <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-blue-500 to-transparent"></div>
      <div className="absolute top-1/2 left-0 w-16 h-px bg-blue-500 transform -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-16 h-px bg-blue-500 transform -translate-y-1/2"></div>

      <div className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Label with Line Accents */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-blue-500/50"></div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-blue-400 border border-blue-500/30 px-4 py-1 rounded-full bg-blue-500/5">
              System Transmission
            </span>
            <div className="w-12 h-px bg-blue-500/50"></div>
          </div>

          {/* Typography */}
          <h2 className="text-5xl md:text-8xl font-heading font-bold tracking-tighter uppercase mb-6 text-white">
            STAY <span className="text-blue-500">UPDATED</span>
          </h2>
          
          <p className="text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed border-l border-r border-blue-500/20 px-6">
            Direct access to the latest tech drops, firmware updates, and exclusive deals.
          </p>

          {/* Input Group - Strict Lines */}
          <div className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto mb-6 border border-blue-500/30 rounded-none overflow-hidden">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER_EMAIL_ADDRESS"
              className="flex-1 px-6 py-4 bg-transparent text-white placeholder-slate-600 focus:outline-none border-none font-mono text-sm tracking-wide"
            />
            <button
              onClick={handleSubscribe}
              className="px-8 py-4 bg-blue-500 text-black font-heading font-bold uppercase tracking-wide border-l border-blue-500 hover:bg-white transition-colors duration-150"
            >
              Connect
            </button>
          </div>

          {/* Status Message */}
          {message && (
            <div className={`max-w-xl mx-auto p-3 border ${isSubscribed ? 'border-green-500/30 text-green-400' : 'border-red-500/30 text-red-400'} mt-4 bg-black/50 flex items-center justify-center gap-2 font-mono text-xs`}>
              {isSubscribed ? <Check size={14} /> : <Mail size={14} />}
              <span>{message.toUpperCase()}</span>
            </div>
          )}

          <button
            onClick={() => setShowDemo(!showDemo)}
            className="mt-10 text-xs font-mono text-slate-500 hover:text-blue-400 transition-colors border-b border-slate-800 hover:border-blue-500 pb-1"
          >
            {showDemo ? '[ CLOSE ADMIN VIEW ]' : '[ ACCESS ADMIN VIEW ]'}
          </button>
        </div>
      </div>

      {/* ADMIN DASHBOARD - BLUEPRINT STYLE */}
      {showDemo && (
        <div className="relative z-10 border-t border-blue-500/20 bg-black/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto p-8">
            
            {/* Section Marker */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-blue-500 animate-pulse"></div>
              <h3 className="font-mono text-xs text-blue-400 tracking-widest uppercase">Admin Dashboard // v1.0.5</h3>
              <div className="flex-1 h-px bg-blue-500/20"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-blue-500/10 border border-blue-500/10">
              
              {/* Subscriber List */}
              <div className="bg-black p-6">
                <div className="flex items-center justify-between border-b border-blue-500/20 pb-4 mb-4">
                  <h4 className="font-heading text-xl uppercase tracking-tight flex items-center gap-3">
                    <User size={18} className="text-blue-500" />
                    Users
                  </h4>
                  <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-1 border border-blue-500/20">
                    COUNT: {subscribers.length}
                  </span>
                </div>

                <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar mb-6 pr-2">
                  {subscribers.length === 0 ? (
                    <div className="text-center py-8 border border-dashed border-blue-500/20 text-slate-500 text-xs font-mono uppercase">
                      No data available
                    </div>
                  ) : (
                    subscribers.map((sub, i) => (
                      <div key={i} className="group flex items-center justify-between p-2 border-l-2 border-blue-500/0 hover:border-blue-500 hover:bg-blue-500/5 transition-all pl-3">
                        <div>
                          <p className="text-sm text-white font-medium">{sub.email}</p>
                          <p className="text-xs text-slate-500 font-mono">ID_{i} // Joined {sub.subscribedAt.toLocaleDateString()}</p>
                        </div>
                        <Check size={14} className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))
                  )}
                </div>

                {subscribers.length > 0 && (
                  <button
                    onClick={sendWeeklyEmails}
                    className="w-full py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-black font-heading font-bold uppercase text-sm tracking-wide transition-all duration-150"
                  >
                    Execute Broadcast
                  </button>
                )}
              </div>

              {/* Email Preview */}
              <div className="bg-black p-6 border-l border-blue-500/10">
                <div className="flex items-center justify-between border-b border-blue-500/20 pb-4 mb-4">
                  <h4 className="font-heading text-xl uppercase tracking-tight flex items-center gap-3">
                    <Mail size={18} className="text-blue-500" />
                    Template
                  </h4>
                  <span className="text-xs font-mono text-slate-500">PREVIEW_MODE</span>
                </div>

                <div className="bg-slate-950 border border-blue-500/10 p-4 h-64 overflow-y-auto custom-scrollbar text-slate-300">
                  <div className="border-b border-slate-800 pb-2 mb-3">
                    <span className="text-xs text-slate-500 block font-mono">SUBJECT:</span>
                    <span className="text-sm font-bold text-white">{sampleEmail.subject}</span>
                  </div>
                  <div className="text-xs whitespace-pre-line leading-relaxed font-mono text-slate-400">
                    {sampleEmail.content}
                  </div>
                </div>
              </div>
            </div>

            {/* System Specs */}
            <div className="grid grid-cols-4 border border-blue-500/10 mt-px divide-x divide-blue-500/10">
              {['Automation Engine', 'Smart Content', 'Validation Layer', 'Analytics'].map((title, i) => (
                <div key={i} className="p-4 bg-black group hover:bg-blue-500/5 transition-colors">
                  <h5 className="font-mono text-[10px] text-blue-400 uppercase tracking-wider mb-1">{title}</h5>
                  <p className="text-xs text-slate-500">System Active</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Barlow:wght@300;400;500;600&display=swap');
        
        .font-heading { font-family: 'Rajdhani', sans-serif; }
        .font-body { font-family: 'Barlow', sans-serif; }

        .custom-scrollbar::-webkit-scrollbar { width: 2px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(59, 130, 246, 0.3); }
      `}</style>
    </section>
  );
}