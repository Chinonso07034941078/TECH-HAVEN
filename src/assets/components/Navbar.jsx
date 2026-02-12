import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search, ShoppingCart } from 'lucide-react';


export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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

  const navHeight = scrolled ? 'h-[75px]' : 'h-[80px]';
  const navShadow = scrolled ? 'shadow-lg' : 'shadow-sm';

  return (
    <>
      {/* TYPOGRAPHY & STYLES */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Barlow:wght@300;400;500;600&family=Source+Code+Pro:wght@500&display=swap');
         .font-heading { font-family: 'Rajdhani', sans-serif; }
         .font-body { font-family: 'Barlow', sans-serif; }
         .font-mono { font-family: 'Source Code Pro', monospace; }
         .border-b-3 { border-bottom-width: 3px; }
        `}
      </style>

      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-slate-300 transition-all duration-300 ${navHeight} ${navShadow}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex justify-between items-center">
          
          {/* Logo Section - Replaced Text with Image */}
          <div className="flex items-center group cursor-pointer z-10">
            <Link to="/" className="flex items-center">
              <div className="relative overflow-hidden">
                <img 
                  src='https://res.cloudinary.com/dnvgl9k4i/image/upload/v1770907678/ONE_lrlott.jpg ' 
                  alt="TechHaven Logo" 
                  className="h-16 md:h-17 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center h-full gap-2">
            {navItems.map((item) => (
              <li key={item.name} className="h-full flex items-center">
                <Link
                  to={item.path}
                  className={`relative h-full flex items-center px-6 font-heading font-bold text-sm uppercase tracking-wider transition-all duration-200 border-b-3 ${
                    isActive(item.path) 
                      ? 'text-blue-600 border-blue-600 bg-blue-50/50' 
                      : 'text-slate-700 border-transparent hover:text-slate-900 hover:border-slate-400 hover:bg-slate-50'
                  }`}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button 
              onClick={() => navigate('/products')}
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Search Products"
            >
              <Search className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => navigate('/products')}
              className="relative w-10 h-10 bg-slate-800 hover:bg-slate-900 text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 border-2 border-white"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 bg-slate-800 hover:bg-slate-900 text-white flex items-center justify-center shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div className={`fixed top-[70px] left-0 right-0 z-40 md:hidden transition-all duration-300 transform ${
        isOpen 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-4 opacity-0 pointer-events-none'
      }`}>
        <div className="bg-white border-b-2 border-slate-300 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center justify-between p-4 transition-colors ${
                      isActive(item.path)
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-slate-700 hover:bg-slate-100'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="font-heading font-bold uppercase tracking-wide">{item.name}</span>
                    <span className={`text-xs font-mono ${isActive(item.path) ? 'text-blue-100' : 'text-slate-400'}`}>
                      /{item.name.toLowerCase()}
                    </span>
                  </Link>
                  {index < navItems.length - 1 && <div className="border-b border-slate-200"></div>}
                </li>
              ))}
            </ul>

            {/* Mobile Action Buttons */}
            <div className="mt-6 flex gap-3">
              <button 
                onClick={() => { navigate('/products'); setIsOpen(false); }}
                className="flex-1 p-4 bg-blue-600 text-white font-heading font-bold uppercase tracking-wide hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Search
              </button>
              <button 
                onClick={() => { navigate('/products'); setIsOpen(false); }}
                className="w-14 p-4 bg-slate-800 text-white hover:bg-slate-900 transition-colors shadow-md flex items-center justify-center"
                aria-label="Cart"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar height */}
      <div className="h-[80px]"></div>
    </>
  );
}