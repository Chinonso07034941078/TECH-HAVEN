import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const navigate = useNavigate();
  
 const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

  return (
    <footer className="relative bg-black text-white font-body overflow-hidden border-t border-blue-500/10">
      
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      {/* Decorative Accent Lines */}
      <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-blue-500/50 to-transparent"></div>

      <div className="relative container mx-auto px-6 py-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              {/* Logo Style Matching Revolution Theme */}
              <div className="relative">
                <h1 className="text-3xl md:text-4xl font-heading font-bold tracking-tighter uppercase text-white">
                  TECH<span className="text-blue-500">-</span>HAVEN
                </h1>
                <div className="absolute -bottom-1 left-0 w-full h-px bg-blue-500/50"></div>
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm text-sm">
              Your ultimate destination for cutting-edge technology. Precision-engineered gadgets for the modern era.
            </p>
            
            {/* Tech Specs / Tags */}
            <div className="flex flex-wrap gap-2">
              {['Electronics', 'Gadgets', 'Audio', 'Mobile'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

         {/* Navigation Links */}
<div className="md:col-span-3 md:col-start-7">
  <h3 className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-6 flex items-center gap-2">
    <span className="w-2 h-2 bg-blue-500 animate-pulse"></span>
    Navigation
  </h3>
  <ul className="space-y-3">
    {quickLinks.map((link, index) => (
      <li key={index}>
        <Link
          to={link.path}
          className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-150 cursor-pointer"
        >
          <span className="w-1.5 h-px bg-slate-600 group-hover:w-3 group-hover:bg-blue-500 transition-all duration-300"></span>
          <span className="text-sm font-body">{link.name}</span>
        </Link>
      </li>
    ))}
  </ul>
</div> {/* Navigation Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 animate-pulse"></span>
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    onClick={() => navigate(link.path)}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-150 cursor-pointer"
                  >
                    <span className="w-1.5 h-px bg-slate-600 group-hover:w-3 group-hover:bg-blue-500 transition-all duration-300"></span>
                    <span className="text-sm font-body">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 animate-pulse"></span>
              Connect
            </h3>
            
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-3 group">
                <div className="p-2 border border-slate-700 group-hover:border-blue-500 transition-colors">
                  <Mail className="w-4 h-4 text-slate-500 group-hover:text-blue-500 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-mono">Email</p>
                  <a href="mailto:Techhaven00@gmail.com" className="text-sm text-white hover:text-blue-400 transition-colors">
                    Techhaven00@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 group">
                <div className="p-2 border border-slate-700 group-hover:border-blue-500 transition-colors">
                  <Phone className="w-4 h-4 text-slate-500 group-hover:text-blue-500 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-mono">Hotline</p>
                  <a href="tel:+2349032848688" className="text-sm text-white hover:text-blue-400 transition-colors">
                    +234 903 284 8688
                  </a>
                </div>
              </div>
            </div>

         {/* Social Links - Blueprint Style */}
<div className="flex gap-3 mt-6 pt-6 border-t border-slate-800">
  {[
    { 
      icon: Facebook, 
      label: 'Facebook', 
      href: 'https://www.facebook.com/okorie.favour.796' 
    },
    { 
      icon: Instagram, 
      label: 'Instagram', 
      href: 'https://www.instagram.com/techhaven_gadgets?igsh=eWE5eHQ1MmRxbDNw' 
    },
    { 
      // Custom TikTok Icon Component (Lucide doesn't have one built-in)
      icon: (props) => (
        <svg 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          {...props}
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      label: 'TikTok', 
      href: 'https://vm.tiktok.com/ZS9J9ka75t24D-V0R7c/' 
    }
  ].map((social, index) => (
    <a
      key={index}
      href={social.href}
      target="_blank" // Opens in new tab
      rel="noopener noreferrer" // Security best practice
      className="w-8 h-8 border border-slate-700 flex items-center justify-center text-slate-500 hover:text-blue-500 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
      aria-label={social.label}
    >
      <social.icon className="w-4 h-4" />
    </a>
  ))}
</div>
          </div>
        </div>

        {/* Divider with Tech Accents */}
        <div className="relative mb-8 py-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-slate-800"></div>
            <div className="w-2 h-2 border border-blue-500/50 rotate-45"></div>
            <div className="flex-1 h-px bg-slate-800"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 border border-blue-500/50"></div>
             <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
               System Status: <span className="text-green-500">Operational</span>
             </p>
          </div>

          <div className="text-xs text-slate-600 font-mono">
            © {new Date().getFullYear()} TECH-HAVEN. All rights reserved. // Designed for the future.
          </div>
          
          <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <span className="text-slate-700">/</span>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}