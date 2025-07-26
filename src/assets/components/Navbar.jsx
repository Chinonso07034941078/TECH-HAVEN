    import React, { useState, useEffect } from "react";
    import { Link, useLocation, useNavigate } from "react-router-dom";

    export default function Navbar() {
      const navigate = useNavigate();
      const [isOpen, setIsOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);
      const location = useLocation();

      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
      ];

      const isActive = (path) => location.pathname === path;

      return (
        <>
          <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled 
              ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl shadow-blue-500/10' 
              : 'bg-slate-900/90 backdrop-blur-sm'
          }`}>
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-blue-600/10 to-transparent animate-pulse"></div>
              <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-blue-500/10 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 4}s`
                  }}
                />
              ))}
            </div>

            <div className="relative container mx-auto px-6 py-4">
              <div className="flex justify-between items-center">
                {/* Exact Brand Logo */}
                <div className="flex items-center group cursor-pointer">
                  <Link to="/" className="flex items-center">
                    {/* Blue house icon with exact styling */}
                    <div className="relative mr-4">
                      <div className="w-14 h-14 bg-blue-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-105 relative overflow-hidden">
                        {/* House base */}
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                        </svg>
                        
                        {/* Small smile detail like in the image */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                          <div className="w-3 h-1.5 border-b-2 border-white rounded-full opacity-60"></div>
                        </div>
                      </div>
                      
                      {/* Decorative squares matching the exact image */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-700"></div>
                      <div className="absolute -top-2 -right-3 w-1.5 h-1.5 bg-blue-600"></div>
                      <div className="absolute -top-1 -right-5 w-1 h-1 bg-blue-500"></div>
                      <div className="absolute -top-3 -right-2 w-1 h-1 bg-blue-800"></div>
                    </div>
                    
                    {/* Exact text styling */}
                    <div className="flex flex-col">
                     <h1 className="text-3xl font-black bg-gradient-to-t from-blue-200 via-blue-500 to-blue-800 bg-clip-text text-transparent leading-none tracking-tight">
                  Techhaven
                </h1>
                      <span className="text-lg font-black text-white tracking-[0.3em] uppercase -mt-1 group-hover:text-gray-800 transition-colors duration-300">
                        GADGETS
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8">
                  {navItems.map((item, index) => (
                    <li key={item.name} className="relative group">
                      <Link
                        to={item.path}
                        className={`cursor-pointer transition-all duration-300 text-lg font-medium relative z-10 group-hover:scale-110 inline-block px-3 py-2 rounded-lg ${
                          isActive(item.path)
                            ? 'text-blue-700 bg-gradient-to-r from-blue-100/20 to-blue-200/20'
                            : 'text-white hover:text-blue-300'
                        }`}
                        style={{animationDelay: `${index * 0.1}s`}}
                      >
                        {item.name}
                      </Link>
                      
                      {/* Hover background effect */}
                      {!isActive(item.path) && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-0"></div>
                      )}
                      
                      {/* Active indicator dot */}
                      <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-700 rounded-full transition-transform duration-300 ${
                        isActive(item.path) ? 'scale-100' : 'scale-0 group-hover:scale-100'
                      }`}></div>
                      
                      {/* Magical glow on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                  <button className="relative px-5 py-2.5 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105 group font-medium">
                    <span
                     onClick={() => {
                     console.time('Navigation');
                     navigate('/products');
                     console.timeEnd('Navigation');
                   }}
                    className="relative z-10">Search Products</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </button>
                  
                  <button className="relative p-3 bg-slate-800 hover:bg-gradient-to-br hover:from-slate-700 hover:to-slate-600 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/20 hover:scale-110 group">
                    <span 
                     onClick={() => {
                     console.time('Navigation');
                     navigate('/products');
                     console.timeEnd('Navigation');
                   }}
                    className="text-blue-700 text-xl group-hover:rotate-12 inline-block transition-transform duration-300">🛒</span>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold"></span>
                    </div>
                  </button>
                </div>

                {/* Enhanced Mobile Menu Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden relative p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 focus:outline-none group hover:scale-110"
                >
                  <div className="w-6 h-6 relative flex flex-col justify-center items-center">
                    <div className={`w-5 h-0.5 bg-blue-700 transition-all duration-300 ${
                      isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                    }`}></div>
                    <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}></div>
                    <div className={`w-5 h-0.5 bg-blue-700 transition-all duration-300 ${
                      isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1.5'
                    }`}></div>
                  </div>
                </button>
              </div>
            </div>

            {/* Animated border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-700 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent animate-pulse"></div>
          </nav>

          {/* Enhanced Mobile Dropdown */}
          <div className={`fixed top-20 left-0 right-0 z-40 md:hidden transition-all duration-500 transform ${
            isOpen 
              ? 'translate-y-0 opacity-100' 
              : '-translate-y-full opacity-0 pointer-events-none'
          }`}>
            <div className="bg-slate-900/95 backdrop-blur-lg mx-4 rounded-2xl shadow-2xl shadow-blue-500/20 border border-blue-700/20 overflow-hidden">
              {/* Mobile menu background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700/5 to-blue-800/5"></div>
              
              <div className="relative p-6">
                <ul className="space-y-4">
                  {navItems.map((item, index) => (
                    <li
                      key={item.name}
                      className="group"
                      style={{
                        animation: `slideIn 0.3s ease-out ${index * 0.1}s both`
                      }}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-300 group-hover:scale-105 group-hover:translate-x-2 ${
                          isActive(item.path)
                            ? 'bg-gradient-to-r from-blue-700/20 to-blue-600/20 text-blue-400'
                            : 'hover:bg-gradient-to-r hover:from-blue-700/10 hover:to-blue-600/10 text-white hover:text-blue-300'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-lg font-medium">{item.name}</span>
                        <div className={`w-2 h-2 bg-blue-700 rounded-full transition-opacity duration-300 ${
                          isActive(item.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}></div>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Mobile action buttons */}
                <div className="mt-6 pt-6 border-t border-blue-700/20 space-y-3">
                  <button 
                   onClick={() => {
        console.time('Navigation');
        navigate('/products');
        console.timeEnd('Navigation');
      }}
                  className="w-full p-4 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105 font-medium">
                    Search Products
                  </button>
                  <button className="w-full p-4 bg-slate-800 hover:bg-slate-700 text-blue-700 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 font-medium">
                    <span>Cart</span>
                    <span 
                     onClick={() => {
        console.time('Navigation');
        navigate('/products');
        console.timeEnd('Navigation');
      }}
                    className="text-lg">🛒</span>
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full flex items-center justify-center ml-2">
                      <span className="text-white text-xs font-bold"></span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer for fixed navbar */}
          <div className="h-20"></div>

          {/* Custom CSS for animations */}
          <style jsx>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              33% { transform: translateY(-8px) rotate(120deg); }
              66% { transform: translateY(4px) rotate(240deg); }
            }
            
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateX(-20px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}</style>
        </>
      );
    }