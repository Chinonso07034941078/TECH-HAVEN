import React, { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";
import ONE from '../assets/components/ONE.jpg'; 

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const router = typeof useNavigate === 'function' ? useNavigate() : null;


const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // CEO info only
  const teamMembers = [
    {
      name: "Amarachi Favour Okorie",
      role: "CEO & Founder",
      image: "🛍️",
      bio: "Founder of Tech-Haven. Passionate about making quality gadgets accessible across Nigeria.",
      specialty: "Customer Experience & Logistics"
    }
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation First",
      description: "Bringing you the latest phones, laptops, audio devices and gadgets at the cutting edge of technology.",
      color: "from-sky-400 to-blue-600"
    },
    {
      icon: "🔒",
      title: "Trust & Reliability",
      description: "Genuine products, secure transactions, and a promise to deliver anywhere in Nigeria.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: "⚡",
      title: "Fast Nationwide Delivery",
      description: "Get your gadgets delivered swiftly to all parts of Nigeria, including via waybill. Speak with us for flexible delivery options.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: "🌟",
      title: "Customer-Centered",
      description: "We prioritize your satisfaction—expect honest advice, responsive service, and friendly communication.",
      color: "from-pink-500 to-sky-500"
    }
  ];

  const stats = [
    { number: "2,500+", label: "Happy Customers", icon: "👥" },
    { number: "36", label: "States Covered", icon: "🌍" },
    { number: "99.9%", label: "Delivery Success Rate", icon: "⚡" },
    { number: "24/7", label: "Support", icon: "🛠️" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${-scrollY * 0.15}px)`, animationDelay: '2s' }}
        ></div>
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-sky-300 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div 
            className="text-center"
            data-animate
            id="hero"
          >
            <div className={`transition-all duration-1000 transform ${
              isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-sky-300 via-white to-blue-400 bg-clip-text text-transparent leading-tight">
                About Tech-Haven
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Tech-Haven is your trusted store for phones, laptops, audio devices, and all gadgets. We deliver across Nigeria, so no matter where you are, we bring technology to your doorstep.
              </p>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-sky-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-sky-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div 
            className="grid md:grid-cols-2 gap-16 items-center"
            data-animate
            id="mission"
          >
            <div className={`transition-all duration-1000 transform delay-200 ${
              isVisible.mission ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Our mission is to make quality technology accessible and affordable for everyone in Nigeria. Whether you need the latest phone, a high-performance laptop, awesome audio gear, or any gadget, Tech-Haven is here to help.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                We are committed to delivering to all locations in Nigeria—including through waybill if we speak well on the phone! Your satisfaction and convenience are our top priorities.
              </p>
              <div className="mt-6 text-sky-300 font-bold">
                Visit us: 104 Tetlow Road, Owerri, Imo State, Nigeria
              </div>
            </div>
            <div className={`transition-all duration-1000 transform delay-400 ${
              isVisible.mission ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-3xl border border-sky-500/30 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                  <img 
                    src={ONE} 
                    alt="Mission illustration" 
                    className="w-70 h-70 object-cover rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-400/0 via-sky-400/20 to-sky-400/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            data-animate
            id="stats"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center p-6 bg-slate-800/50 rounded-2xl border border-sky-500/20 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-500 hover:scale-110 hover:border-sky-400/40 group ${
                  isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-sky-300 mb-2 group-hover:text-sky-200 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div 
            className="text-center mb-16"
            data-animate
            id="values-header"
          >
            <h2 className={`text-5xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent transition-all duration-1000 transform ${
              isVisible['values-header'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              Our Values
            </h2>
          </div>
          <div 
            className="grid md:grid-cols-2 gap-8"
            data-animate
            id="values"
          >
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`group p-8 bg-slate-800/30 rounded-3xl border border-sky-500/20 backdrop-blur-sm hover:bg-slate-700/40 transition-all duration-500 hover:scale-105 hover:border-sky-400/40 ${
                  isVisible.values ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className={`p-4 bg-gradient-to-br ${value.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <span className="text-3xl">{value.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-sky-200 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div 
            className="text-center mb-16"
            data-animate
            id="team-header"
          >
            <h2 className={`text-5xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent transition-all duration-1000 transform ${
              isVisible['team-header'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              Meet Our CEO
            </h2>
          </div>
          <div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-animate
            id="team"
          >
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`group text-center p-8 bg-slate-800/30 rounded-3xl border border-sky-500/20 backdrop-blur-sm hover:bg-slate-700/40 transition-all duration-500 hover:scale-105 hover:border-sky-400/40 ${
                  isVisible.team ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25 group-hover:shadow-sky-400/40 group-hover:scale-110 transition-all duration-300">
                  <span className="text-4xl">{member.image}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-sky-200 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sky-400 font-medium mb-3 group-hover:text-sky-300 transition-colors duration-300">
                  {member.role}
                </p>
                <p className="text-slate-400 text-sm mb-3 group-hover:text-slate-300 transition-colors duration-300">
                  {member.bio}
                </p>
                <div className="text-xs text-sky-300 bg-sky-500/20 px-3 py-1 rounded-full inline-block group-hover:bg-sky-400/30 transition-colors duration-300">
                  {member.specialty}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div 
            className="text-center p-12 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-3xl border border-sky-500/30 backdrop-blur-sm"
            data-animate
            id="cta"
          >
<div className={`transition-all duration-1000 transform ${
  isVisible.cta ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
}`}>
  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sky-300 via-white to-blue-400 bg-clip-text text-transparent">
    Ready to Shop With Us?
  </h2>
  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
    Get the gadgets you love, delivered to your door. Let's make tech easy!
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <button
      className="relative px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl hover:from-sky-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-sky-500/25 hover:scale-105 group font-medium"
       onClick={() => {
                     console.time('Navigation');
                     navigate('/products');
                     console.timeEnd('Navigation');
                   }}
    >
      <span className="relative z-10">Get Started</span>
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
    </button>
    <button
      className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-sky-300 rounded-xl transition-all duration-300 hover:scale-105 border border-sky-500/30 hover:border-sky-400/50 font-medium"
       onClick={() => {
                     console.time('Navigation');
                     navigate('/products');
                     console.timeEnd('Navigation');
                   }}
    >
      Contact Us
    </button>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-12px) rotate(120deg); }
          66% { transform: translateY(6px) rotate(240deg); }
        }
      `}</style>
    </div>
  );
}