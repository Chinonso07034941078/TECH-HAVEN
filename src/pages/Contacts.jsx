import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle, Send, ArrowRight, Clock } from 'lucide-react';

export default function Contacts() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:cokorie158@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Transmission',
      info: 'Techhaven00@gmail.com',
      description: 'Response time: < 24 hours'
    },
    {
      icon: Phone,
      title: 'Voice Connect',
      info: '09032848688',
      description: 'Mon-Sat, 08:00 - 20:00'
    },
    {
      icon: MessageCircle,
      title: 'Wireless Chat',
      info: '09032848688',
      description: 'WhatsApp Protocol'
    },
    {
      icon: MapPin,
      title: 'Physical Location',
      info: '104 Tetlow Road, Owerri',
      description: 'Mon-Sat, 09:00 - 18:00'
    }
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
            src="https://res.cloudinary.com/dnvgl9k4i/image/upload/v1769613221/photo-1523966211575-eb4a01e7dd51_drixec.avif"
            alt="Tech Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-700 via-slate-900/20 to-transparent opacity-90"></div>
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
              Communication Hub
            </span>
            <div className="w-12 h-px bg-blue-500/50"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter uppercase leading-none mb-4 text-white">
            GET IN <span className="text-blue-500">TOUCH</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed border-l border-r border-blue-500/20 px-6">
            Need assistance? Initialize a support ticket or connect via direct channels.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10">
          <span className="text-xs font-mono uppercase text-slate-400">Scroll</span>
          <ArrowRight className="w-4 h-4 text-blue-500 rotate-90" />
        </div>
      </section>

      {/* 2. MAIN CONTENT (WHITE BACKGROUND) */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="relative bg-white border border-slate-200 p-8 md:p-10 shadow-xl shadow-slate-200/50 group">
              
              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-blue-500 -translate-x-px -translate-y-px"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-blue-500 translate-x-px -translate-y-px"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-blue-500 -translate-x-px translate-y-px"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-blue-500 translate-x-px translate-y-px"></div>

              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-8 flex items-center gap-3 uppercase tracking-wide">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Transmit Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">User Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors font-mono text-sm"
                      placeholder="Enter_Name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors font-mono text-sm"
                      placeholder="Enter_Email"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Subject Line</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors font-mono text-sm"
                    placeholder="Inquiry_Type"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Message Body</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none font-mono text-sm"
                    placeholder="Type_Message_Here..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-slate-900 text-white font-heading font-bold uppercase tracking-wide hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center gap-3 border border-slate-900 hover:border-blue-600"
                >
                  {isSubmitted ? (
                    <>
                      <span>Signal Sent</span>
                      <Send className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Execute Send</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            
            <h2 className="text-xl font-heading font-bold text-slate-900 uppercase tracking-wide mb-6 flex items-center gap-3">
              <span className="flex-1 h-px bg-slate-200"></span>
              <span>Direct Channels</span>
              <span className="flex-1 h-px bg-slate-200"></span>
            </h2>

            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="group bg-slate-50 border border-slate-100 p-5 hover:border-blue-500 hover:bg-white transition-all duration-300 flex items-start gap-4 cursor-pointer"
                >
                  <div className="flex-shrink-0 w-10 h-10 border border-slate-200 bg-white flex items-center justify-center text-slate-500 group-hover:border-blue-500 group-hover:text-blue-500 transition-colors">
                    <method.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-bold uppercase tracking-wide text-slate-900 mb-1">
                      {method.title}
                    </h3>
                    <p className="text-blue-600 text-sm font-medium mb-1 font-mono">
                      {method.info}
                    </p>
                    <p className="text-slate-400 text-xs flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" />
                      {method.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-4 border border-slate-200 overflow-hidden bg-slate-100 relative group">
               <div className="aspect-video w-full relative">
                 <img 
                   src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
                   alt="Location map" 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80"
                 />
                 <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/0 transition-colors">
                   <div className="bg-white px-4 py-2 shadow-lg text-xs font-mono text-slate-700 flex items-center gap-2 border border-slate-200">
                     <MapPin className="w-4 h-4 text-blue-600" />
                     Owerri, Imo State
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA section */}
        <div className="mt-20 bg-slate-900 rounded-2xl p-12 text-center text-white relative overflow-hidden max-w-6xl mx-auto border border-slate-800">
          
          {/* Grid Background for CTA */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
            backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight mb-4">
              Ready to <span className="text-blue-500">Upgrade</span>?
            </h3>
            <p className="text-slate-400 text-sm mb-8 max-w-xl mx-auto font-mono">
              Join the network. Discover the future of technology with Tech-Haven.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/products')}
                className="px-8 py-3 bg-blue-500 text-white font-heading font-bold uppercase tracking-wide hover:bg-white hover:text-slate-900 transition-colors flex items-center justify-center gap-2 border border-blue-500"
              >
                Browse Products
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => navigate('/categories')}
                className="px-8 py-3 border border-slate-600 text-white font-heading font-bold uppercase tracking-wide hover:border-white transition-colors flex items-center justify-center gap-2"
              >
                View Categories
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}