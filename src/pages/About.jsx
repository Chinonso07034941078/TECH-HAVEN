import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowRight, MapPin, Cpu, Shield, Truck, Heart } from 'lucide-react';
import ONE from '../assets/components/ONE.jpg'; 

export default function About() {
  const [isVisible, setIsVisible] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // CEO info
  const teamMembers = [
    {
      name: "Amarachi Favour Okorie",
      role: "CEO & Founder",
      image: 'https://res.cloudinary.com/dnvgl9k4i/image/upload/v1770919779/138118836_231369845141705_6139008080191436482_n_mhz8oe.jpg', // Using the imported image
      bio: "Founder of Tech-Haven. Passionate about making quality gadgets accessible across Nigeria.",
      specialty: "Customer Experience & Logistics"
    }
  ];

  const values = [
    {
      icon: Cpu,
      title: "Innovation First",
      description: "Bringing you the latest phones, laptops, audio devices and gadgets at the cutting edge of technology."
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Genuine products, secure transactions, and a promise to deliver anywhere in Nigeria."
    },
    {
      icon: Truck,
      title: "Fast Nationwide Delivery",
      description: "Get your gadgets delivered swiftly to all parts of Nigeria. Flexible delivery options available."
    },
    {
      icon: Heart,
      title: "Customer-Centered",
      description: "We prioritize your satisfaction—expect honest advice, responsive service, and friendly communication."
    }
  ];

  const stats = [
    { number: "200+", label: "Happy Customers" },
    { number: "1", label: "State Covered" },
    { number: "99.9%", label: "Delivery Success" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-white font-body text-slate-900 overflow-x-hidden">
      
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Barlow:wght@300;400;500;600&display=swap');
         .font-heading { font-family: 'Rajdhani', sans-serif; }
         .font-body { font-family: 'Barlow', sans-serif; }
        `}
      </style>

      {/* 1. HERO SECTION WITH IMAGE OVERLAY */}
      <section className="relative h-[70vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1470&auto=format&fit=crop"
            alt="Tech Background"
            className="w-full h-full object-cover opacity-30"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-700 via-slate-900/20 to-transparent opacity-90"></div> */}
        </div>

        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-blue-500/50"></div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-blue-400 border border-blue-500/30 px-4 py-1 rounded-none bg-blue-500/10 backdrop-blur-sm">
              Company Profile
            </span>
            <div className="w-12 h-px bg-blue-500/50"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter uppercase leading-none mb-4 text-white">
            ABOUT <span className="text-blue-500">US</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed border-l border-r border-blue-500/20 px-6">
            Tech-Haven is your trusted store for phones, laptops, audio devices, and all gadgets. We deliver across Nigeria.
          </p>
        </div>

       
      </section>

      {/* 2. MISSION SECTION (WHITE BG) */}
      <section className="relative py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div 
            className="grid md:grid-cols-2 gap-16 items-center"
            data-animate
            id="mission"
          >
            {/* Text Content */}
            <div className={`transition-all duration-1000 transform ${isVisible.mission ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight uppercase mb-6">
                Our <span className="text-blue-500">Mission</span>
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                Our mission is to make quality technology accessible and affordable for everyone in Nigeria. Whether you need the latest phone, a high-performance laptop, awesome audio gear, or any gadget, Tech-Haven is here to help.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We are committed to delivering to all locations in Nigeria—including through waybill if we speak well on the phone! Your satisfaction and convenience are our top priorities.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-mono text-sm border-l-2 border-blue-500 pl-4">
                <MapPin className="w-4 h-4" />
                <span>104 Tetlow Road, Owerri, Imo State</span>
              </div>
            </div>

            {/* Image with Accents */}
            <div className={`transition-all duration-1000 transform delay-200 ${isVisible.mission ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative group">
                {/* Background Accent */}
                <div className="absolute -inset-4 border border-blue-500/20 rounded-none transform rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative overflow-hidden border border-slate-200 shadow-xl">
                  <img 
                    src={ONE} 
                    alt="Mission Illustration" 
                    className="w-full h-80 object-cover grayscale-0 transition-all duration-700"
                  />
                  {/* Overlay Grid */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.2) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS SECTION (LIGHT GREY BG) */}
      <section className="relative py-20 px-6 bg-slate-50 border-t border-b border-slate-100">
        <div className="container mx-auto max-w-6xl">
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            data-animate
            id="stats"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center p-6 bg-white border border-slate-200 hover:border-blue-500 transition-all duration-500 group ${isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl font-heading font-bold text-blue-500 mb-1 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VALUES SECTION (WHITE BG) */}
      <section className="relative py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16" data-animate id="values-header">
            <div className={`transition-all duration-1000 transform ${isVisible['values-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-2 block">Core Principles</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight uppercase">
                Our <span className="text-blue-500">Values</span>
              </h2>
            </div>
          </div>

          <div 
            className="grid md:grid-cols-2 gap-px bg-slate-100 border border-slate-100"
            data-animate
            id="values"
          >
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`group p-8 bg-white hover:bg-slate-50 transition-all duration-500 ${isVisible.values ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="p-3 border border-slate-200 text-blue-500 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold uppercase tracking-wide mb-2 text-slate-900">
                      {value.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM SECTION (LIGHT GREY BG) */}
      <section className="relative py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16" data-animate id="team-header">
            <div className={`transition-all duration-1000 transform ${isVisible['team-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-2 block">Leadership</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight uppercase">
                Meet The <span className="text-blue-500">CEO</span>
              </h2>
            </div>
          </div>

          <div data-animate id="team">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`relative group bg-white border border-slate-200 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 transition-all duration-500 ${isVisible.team ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-blue-500 -translate-x-px -translate-y-px"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-blue-500 translate-x-px translate-y-px"></div>

                <div className="relative w-32 h-32 flex-shrink-0 border border-slate-200 rounded-full overflow-hidden shadow-lg">
                   <img 
                     src={member.image} 
                     alt={member.name}
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                   />
                </div>
                
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 uppercase tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-blue-500 font-mono text-sm mb-4 uppercase tracking-wider">{member.role}</p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="inline-block text-xs font-mono uppercase tracking-wider text-slate-500 border border-slate-200 px-3 py-1">
                    {member.specialty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION (DARK BG) */}
      <section className="relative py-20 px-6 bg-slate-900 text-white">
         {/* Grid Background */}
         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
          
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center" data-animate id="cta">
            <div className={`transition-all duration-1000 transform ${isVisible.cta ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-4">
                Ready to <span className="text-blue-500">Shop</span>?
              </h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                Get the gadgets you love, delivered to your door. Let's make tech easy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="px-8 py-3 bg-blue-500 text-white font-heading font-bold uppercase tracking-wide hover:bg-white hover:text-slate-900 transition-colors flex items-center justify-center gap-2 border border-blue-500"
                  onClick={() => navigate('/products')}
                >
                  Browse Products
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  className="px-8 py-3 border border-slate-600 text-white font-heading font-bold uppercase tracking-wide hover:border-white transition-colors flex items-center justify-center gap-2"
                  onClick={() => navigate('/contact')}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}