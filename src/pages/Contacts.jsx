import React, { useState, useEffect, useRef } from 'react';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef(null);

  // Track mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

 const contactMethods = [
  {
    icon: '📧',
    title: 'Email Us',
    info: 'Techhaven00@gmail.com',
    description: 'Get a response within 24 hours'
  },
  {
    icon: '📞',
    title: 'Call Amarachi Okorie (CEO)',
    info: '09032848688',
    description: 'Mon-Sat, 8AM-8PM'
  },
 {
  icon: '📱',
  title: 'WhatsApp Chat',
  info: '09032848688',
  description: 'Message us on WhatsApp'
},
  {
    icon: '📍',
    title: 'Visit Us',
    info: '104 Tetlow Road, Owerri, Imo State, Nigeria',
    description: 'Mon-Sat, 9AM-6PM'
  }
];


  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Dynamic background with mouse interaction */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-sky-400/20 to-blue-500/20 rounded-full blur-3xl transition-all duration-700 ease-out"
          style={{
            left: `${mousePosition.x - 20}%`,
            top: `${mousePosition.y - 20}%`,
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-l from-blue-600/20 to-sky-300/20 rounded-full blur-2xl transition-all duration-1000 ease-out"
          style={{
            right: `${100 - mousePosition.x - 10}%`,
            bottom: `${100 - mousePosition.y - 10}%`,
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-sky-300/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-300 via-white to-sky-400 bg-clip-text text-transparent animate-pulse">
            Get In Touch
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto mb-8 rounded-full"></div>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
  Tech-Haven is your trusted store for phones, laptops, and all gadgets. We deliver to all parts of Nigeria through waybilling.<br />
  {/* <span className="block mt-2 text-sky-300 font-medium">
    CEO: Amarachi Okorie &mdash; <a href="tel:09032848688" className="underline hover:text-sky-200">09032848688</a> &mdash; <a href="mailto:Techhaven00@gmail.com" className="underline hover:text-sky-200">Techhaven00@gmail.com</a>
  </span> */}
  <span className="block mt-2 text-sky-300 font-medium">
    Visit us: 104 Tetlow Road, Owerri, Imo State, Nigeria.
  </span>
</p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="relative">
            <div className="bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-blue-500/10 border border-sky-500/20 relative overflow-hidden group">
              {/* Form background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-sky-400/10 to-blue-500/10 rounded-full blur-2xl"></div>
              

              {/* send us a message */}
          <div className="relative z-10">
  <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
    <span className="mr-3 text-4xl">✨</span>
    Send us a Message
  </h2>

  <form
  className="space-y-6"
  onSubmit={(e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:cokorie158@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  }}
>
    {/* Name Field */}
    <div className="relative group">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        onFocus={() => setFocusedField('name')}
        onBlur={() => setFocusedField('')}
        required
        className="w-full px-6 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:bg-slate-700/70 transition-all duration-300 peer"
        placeholder="Your Name"
      />
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400/20 to-blue-500/20 -z-10 blur-lg transition-opacity duration-300 ${focusedField === 'name' ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-l-xl transition-all duration-300 peer-focus:w-1"></div>
    </div>

    {/* Email Field */}
    <div className="relative group">
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        onFocus={() => setFocusedField('email')}
        onBlur={() => setFocusedField('')}
        required
        className="w-full px-6 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:bg-slate-700/70 transition-all duration-300 peer"
        placeholder="your.email@example.com"
      />
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400/20 to-blue-500/20 -z-10 blur-lg transition-opacity duration-300 ${focusedField === 'email' ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-l-xl transition-all duration-300 peer-focus:w-1"></div>
    </div>

    {/* Subject Field */}
    <div className="relative group">
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleInputChange}
        onFocus={() => setFocusedField('subject')}
        onBlur={() => setFocusedField('')}
        required
        className="w-full px-6 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:bg-slate-700/70 transition-all duration-300 peer"
        placeholder="What's this about?"
      />
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400/20 to-blue-500/20 -z-10 blur-lg transition-opacity duration-300 ${focusedField === 'subject' ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-l-xl transition-all duration-300 peer-focus:w-1"></div>
    </div>

    {/* Message Field */}
    <div className="relative group">
      <textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        onFocus={() => setFocusedField('message')}
        onBlur={() => setFocusedField('')}
        rows="6"
        required
        className="w-full px-6 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:bg-slate-700/70 transition-all duration-300 resize-none peer"
        placeholder="Tell us more about your project or inquiry..."
      ></textarea>
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400/20 to-blue-500/20 -z-10 blur-lg transition-opacity duration-300 ${focusedField === 'message' ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-l-xl transition-all duration-300 peer-focus:w-1"></div>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl hover:from-sky-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-sky-500/25 hover:scale-105 relative group overflow-hidden"
    >
      <span className="relative z-10 flex items-center justify-center">
        {isSubmitted ? (
          <>
            <span className="mr-2">✅</span>
            Message Sent Successfully!
          </>
        ) : (
          <>
            <span className="mr-2">🚀</span>
            Send Message
          </>
        )}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
    </button>
  {/* ...your fields and button remain the same... */}
</form>
</div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="mr-3 text-4xl">🌟</span>
              Other Ways to Reach Us
            </h2>

            <div className="grid gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="group bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 shadow-xl shadow-blue-500/5 border border-sky-500/20 hover:border-sky-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/10 cursor-pointer relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Card background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -top-5 -right-5 w-20 h-20 bg-gradient-to-br from-sky-400/10 to-blue-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex items-start space-x-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-sky-300 transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-sky-300 font-medium mb-1">
                        {method.info}
                      </p>
                      <p className="text-slate-400 text-sm">
                        {method.description}
                      </p>
                    </div>
                    <div className="w-2 h-2 bg-sky-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-ping"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Map Placeholder */}
            <div className="mt-12 bg-slate-800/60 backdrop-blur-xl rounded-2xl p-8 shadow-xl shadow-blue-500/5 border border-sky-500/20 group hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                  <span className="mr-2 text-3xl">🗺️</span>
                  Find Us
                </h3>
                <div className="w-full h-40 bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl flex items-center justify-center group-hover:from-slate-600 group-hover:to-slate-500 transition-all duration-300">
                  <div className="text-center">
                    <p className="text-sky-300 text-lg font-semibold mb-2">Interactive Map</p>
                    <p className="text-slate-400">123 Tech Street, Digital City</p>
                    <div className="mt-4 inline-flex items-center text-sky-400 hover:text-sky-300 cursor-pointer">
                      <span className="mr-2">📍</span>
                      <span>Get Directions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-sky-500/10 to-blue-600/10 rounded-3xl p-12 border border-sky-500/20 backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-4">
                Ready to Transform Your Tech Experience?
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who've discovered the future of technology with Tech-Haven.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl hover:from-sky-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-sky-500/25 hover:scale-105">
                  🛍️ Browse Products
                </button>
                <button className="px-8 py-4 bg-slate-800 border border-sky-500/50 text-sky-300 font-semibold rounded-xl hover:bg-slate-700 hover:border-sky-400 transition-all duration-300 hover:scale-105">
                  📖 Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success notification */}
      {isSubmitted && (
        <div className="fixed top-24 right-6 z-50 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-xl shadow-2xl shadow-green-500/25 animate-bounce">
          <div className="flex items-center">
            <span className="mr-2 text-xl">🎉</span>
            <span className="font-semibold">Message sent successfully!</span>
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.4;
          }
          33% { 
            transform: translateY(-20px) rotate(120deg) scale(1.1); 
            opacity: 0.8;
          }
          66% { 
            transform: translateY(10px) rotate(240deg) scale(0.9); 
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}