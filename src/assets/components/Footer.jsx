import React from "react";
import { useNavigate } from "react-router-dom";



export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="relative bg-slate-900 text-white py-12 mt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-6">
              {/* Exact Brand Logo matching navbar */}
              <div className="relative mr-4">
                <div className="w-14 h-14 bg-blue-700 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 relative overflow-hidden">
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
                <span className="text-lg font-black text-white tracking-[0.3em] uppercase -mt-1">
                  GADGETS
                </span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Your ultimate destination for cutting-edge technology. Discover the latest gadgets, electronics, and accessories that shape the future.
            </p>
            
            {/* Category pills */}
            <div className="flex flex-wrap gap-3">
              {['Electronics', 'Gadgets', 'Accessories'].map((category, index) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-medium rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-700 mb-6">Quick Links</h3>
            {['Shop Now', 'New Arrivals', 'Best Sellers', 'Support', 'About Us'].map((link, index) => (
              <a
                onClick={() => navigate(`/products`)}
                key={link}
                href="#"
                className="block text-gray-300 hover:text-blue-700 transition-all duration-300 hover:translate-x-2 hover:scale-105"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-700 mb-6">Connect</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-700 transition-colors duration-300 cursor-pointer group">
                <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <span className="text-sm">📧</span>
                </div>
                <span className="text-sm">Techhaven00@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-700 transition-colors duration-300 cursor-pointer group">
                <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <span className="text-sm">📱</span>
                </div>
                <span className="text-sm">+234 903 284 8688</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {['📘', '📷', '🐦', '📺'].map((icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-800 rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <span className="text-lg">{icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider with animation */}
        <div className="relative mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Techhaven Gadgets. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Crafted with ❤️ for tech enthusiasts worldwide
            </p>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
            <span className="text-gray-600">•</span>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
            <span className="text-gray-600">•</span>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
      `}</style>
    </footer>
  );
}