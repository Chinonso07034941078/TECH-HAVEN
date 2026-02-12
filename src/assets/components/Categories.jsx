import React from "react";
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HomeCategories() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Smartphones",
      count: "150+ Units",
      image: "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1770900991/photo-1706300896423-7d08346e8dbb_icqwmx.avif",
    },
    {
      name: "Laptops",
      count: "80+ Units", 
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=600&fit=crop",
    },
    {
      name: "Audio",
      count: "120+ Units",
      image: "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1770901471/photo-1606741965326-cb990ae01bb2_dltmhd.avif", 
    },
    {
      name: "Accessories",
      count: "200+ Units",
      image: "https://res.cloudinary.com/dnvgl9k4i/image/upload/v1770901942/premium_photo-1671611822374-4719df5c89bb_iwz3oz.avif",
    }
  ];

  const handleCategoryClick = (categoryName) => {
    navigate(`/products?category=${categoryName.toLowerCase()}`);
  };

  return (
    <section className="relative py-24 px-6 bg-black text-white font-body overflow-hidden border-t border-b border-blue-500/10">
      
      {/* TECHNICAL GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      {/* DECORATIVE CORNER LINES */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-blue-500/30 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-blue-500/30 pointer-events-none"></div>
      
      {/* DECORATIVE ACCENT LINES */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header - Blueprint Style */}
        <div className="text-center mb-16">
          {/* Label with Line Accents */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-blue-500/50"></div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-blue-400 border border-blue-500/30 px-4 py-1 rounded-none bg-blue-500/5">
              Inventory Selection
            </span>
            <div className="w-16 h-px bg-blue-500/50"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter uppercase mb-6 text-white">
            SHOP BY <span className="text-blue-500">CATEGORY</span>
          </h2>
          
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed border-l border-r border-blue-500/20 px-6">
            Browse our curated technical collections. Precision engineered for performance.
          </p>
        </div>

        {/* Category Grid - Technical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px  border border-blue-500/20">
          {categories.map((category, index) => (
            <div
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className="group relative m-4 cursor-pointer transition-all duration-300 hover:bg-slate-950"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                
                {/* Background Image - Desaturated on Base */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 grayscale group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-500 scale-100 group-hover:scale-105"
                />
                
                {/* Overlay Grid */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90"></div>

                {/* Technical Lines Overlay */}
                <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
                  {/* Top Corner Brackets */}
                  <div className="flex justify-between items-start">
                    <div className="w-4 h-4 border-l border-t border-blue-500/50 group-hover:border-blue-500 transition-colors"></div>
                    <div className="w-4 h-4 border-r border-t border-blue-500/50 group-hover:border-blue-500 transition-colors"></div>
                  </div>

                  {/* Bottom Corner Brackets */}
                  <div className="flex justify-between items-end">
                    <div className="w-4 h-4 border-l border-b border-blue-500/50 group-hover:border-blue-500 transition-colors"></div>
                    <div className="w-4 h-4 border-r border-b border-blue-500/50 group-hover:border-blue-500 transition-colors"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  
                  {/* Count Label */}
                  <div className="mb-2">
                    <span className="text-[10px] font-mono text-blue-400 tracking-wider border border-blue-500/30 px-2 py-0.5 bg-black/50 backdrop-blur-sm">
                      {category.count}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-3xl font-heading font-bold text-white uppercase tracking-tight leading-none mb-2">
                    {category.name}
                  </h3>

                  {/* Action Line */}
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 group-hover:text-blue-400 transition-colors">
                    <span className="w-4 h-px bg-slate-600 group-hover:w-8 group-hover:bg-blue-500 transition-all duration-300"></span>
                    <span className="uppercase">Explore</span>
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                  </div>
                </div>
              </div>

              {/* Index Marker - Technical Style */}
              <div className="absolute bottom-4 right-4 text-[10px] font-mono text-slate-700 group-hover:text-blue-500/50 transition-colors z-20">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-3 text-sm font-mono text-slate-400 hover:text-blue-400 transition-colors border border-slate-800 hover:border-blue-500 px-6 py-3 rounded-none group"
          >
            <span className="uppercase tracking-wider">View All Categories</span>
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Global Styles & Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Barlow:wght@300;400;500;600&display=swap');
        
        .font-heading { font-family: 'Rajdhani', sans-serif; }
        .font-body { font-family: 'Barlow', sans-serif; }
      `}</style>
    </section>
  );
}