import React, { useState, useEffect, useMemo, useRef } from "react";
import { Search, Heart, ShoppingCart, Star, X, Sparkles, ChevronDown, Command, Layers, ChevronRight } from 'lucide-react';
import HomeHero from "../assets/components/HomeHero";
import HomeCategories from "../assets/components/Categories";
import HomeNewsletter from "../assets/components/NewsLetter";

// ==========================================
// 1. HELPERS & SUB-COMPONENTS
// ==========================================

const formatPrice = (price) =>
  new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(price);

const ProductCard = ({ product, index, onOpen }) => {
  const cardRef = useRef(null);

  // Desktop Magnetic Effect
  const handleMouseMove = (e) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    cardRef.current.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'translate(0px, 0px) scale(1)';
  };

  return (
    <div
      ref={cardRef}
      onClick={() => onOpen(product)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden cursor-pointer transition-all duration-500 ease-out w-full mb-4 md:mb-6 rounded-none md:rounded-none"
      style={{ backgroundColor: product.color || '#f3f4f6' }}
    >
      <div className="relative h-full flex flex-col justify-end h-[320px] md:h-[400px]">
        
        <button 
          className="absolute top-3 right-3 z-20 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg md:hidden active:scale-90 transition-transform"
          onClick={(e) => { e.stopPropagation(); alert('Favorited!'); }}
        >
          <Heart className="w-4 h-4 text-slate-700" />
        </button>

        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8 transition-transform duration-700 group-hover:scale-110">
          <img 
            src={product.image} 
            alt={product.name} 
            loading="lazy"
            className="w-full h-full object-contain drop-shadow-xl transition-all duration-500 max-h-[180px] md:max-h-none"
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none"></div>

        <div className="relative z-10 text-white p-4 md:p-6">
          <span className="inline-block px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-[9px] font-mono uppercase tracking-wider mb-1">
            {product.badge || 'Featured'}
          </span>
          <h3 className="font-heading font-bold leading-tight tracking-tighter text-shadow text-lg md:text-3xl">
            {product.name}
          </h3>
          
          <div className="flex items-center justify-between mt-1">
            <p className="font-heading font-bold text-base md:text-xl">
              {product.price}
            </p>
            <div className="flex items-center gap-1 text-xs text-white/80 md:hidden">
              View <ChevronRight className="w-3 h-3" />
            </div>
            <div className="hidden md:flex items-center gap-1">
               <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImmersiveModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col md:flex-row md:items-center md:justify-center p-0 md:p-8 bg-white md:bg-black/95 transition-all duration-300"
      onClick={onClose}
    >
      <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mt-4 mb-2 md:hidden"></div>
      
      <div 
        className="relative w-full h-full md:max-w-6xl md:h-[90vh] grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 overflow-y-auto md:overflow-visible"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-slate-50 h-1/2 md:h-full flex items-center justify-center p-4">
          <button 
            onClick={onClose} 
            className="absolute top-4 left-4 md:top-0 md:right-0 md:left-auto w-10 h-10 bg-slate-100 md:bg-white/10 rounded-full flex items-center justify-center hover:bg-slate-200 z-20"
          >
            <X className="w-5 h-5 text-slate-600 md:text-white" />
          </button>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-4/5 h-4/5 object-contain transition-transform duration-1000"
          />
        </div>

        <div className="relative flex flex-col justify-end md:justify-center h-1/2 md:h-auto bg-white p-6 md:bg-transparent rounded-t-3xl -mt-8 z-10 shadow-2xl md:shadow-none">
          <div className="overflow-y-auto">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest">{product.badge || 'Product'}</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4 tracking-tighter uppercase text-slate-900 md:text-white">
              {product.name}
            </h2>
            
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 ${i < 4 ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`} />)}
              <span className="text-sm text-slate-500 md:text-slate-300 ml-2">4.0 Rating</span>
            </div>

            <p className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-900 md:text-white">
              {product.price}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 md:bg-white/5 p-4 rounded-xl">
                <span className="text-xs text-slate-400 block mb-1">Status</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> In Stock
                </span>
              </div>
              <div className="bg-slate-50 md:bg-white/5 p-4 rounded-xl">
                <span className="text-xs text-slate-400 block mb-1">Warranty</span>
                <span className="font-bold text-slate-900 md:text-white">1 Year</span>
              </div>
            </div>

            <div className="space-y-3">
                <a
                  href="https://wa.me/2349032848688"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-500 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact via WhatsApp
                </a>
                <a
                  href="mailto:Techhaven00@gmail.com"
                  className="flex items-center justify-center gap-2 w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Send an Email
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. MAIN COMPONENT
// ==========================================

export default function Homepage() {
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCommand, setShowCommand] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const featuredProducts = [
    { id: 1, name: "iPhone 15 Pro Max", price: "₦1,400,000", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop", badge: "Best Seller", color: "#1a1a1a" },
    { id: 2, name: "Samsung Galaxy S24 Ultra", price: "₦1,600,000", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop", badge: "New", color: "#f0f9ff" },
    { id: 3, name: "AirPods Pro (3rd Gen)", price: "₦25,000", image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&h=600&fit=crop", badge: "Popular", color: "#faf5ff" },
    { id: 4, name: "DELL 5400 Touch", price: "₦380,000", image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=600&fit=crop", badge: "Featured", color: "#f5f5f4" },
  ];

  const features = [
    { icon: "🚚", title: "Fast Delivery", description: "Free shipping on orders over $50. Get your tech delivered in 24-48 hours." },
    { icon: "🔒", title: "Secure Payments", description: "Your payment information is protected with bank-level encryption." },
    { icon: "🎧", title: "Premium Support", description: "24/7 customer support with expert tech advice and warranty service." }
  ];

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setShowImageModal(true);
  };

  // Filter logic for command bar (optional, keeping it functional)
  const filteredGrid = useMemo(() => 
    featuredProducts.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())),
  [searchQuery]);

  // Close modal on ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && (setSelectedProduct(null) || setShowCommand(false));
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-body overflow-x-hidden">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Barlow:wght@300;400;500;600&display=swap');
         .font-heading { font-family: 'Rajdhani', sans-serif; }
         .font-body { font-family: 'Barlow', sans-serif; }
        `}
      </style>

      {/* Hero Section */}
      <HomeHero />

      {/* Categories Section */}
      <HomeCategories />

      {/* REVOLUTIONARY PRODUCT GRID */}
      <div className="relative py-8 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6 md:mb-12 px-0 md:px-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tighter uppercase text-slate-900">Collection</h2>
              <p className="text-slate-500 mt-1 text-sm md:text-base">Handpicked for excellence.</p>
            </div>
          </div>

          {/* Mobile: 2 Column Grid / Desktop: 4 Column Fluid Grid */}
          <div className="grid grid-cols-2 rounded-none md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(280px,auto)]">
            {filteredGrid.map((product, index) => (
              <ProductCard 
                key={product.id}
                product={product}
                index={index}
                onOpen={handleOpenModal}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section (Adapted to Dark Theme) */}
      <section className="py-20 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature) => (
              <div key={feature.title} className="text-center group">
              
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-300 transition-colors duration-300 font-heading">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <HomeNewsletter />

      {/* FLOATING ORB NAVIGATION */}
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => setShowCommand(!showCommand)}
          className="w-14 h-14 md:w-16 md:h-16 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border-4 border-white"
        >
          {showCommand ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Command className="w-5 h-5 md:w-6 md:h-6" />}
        </button>
      </div>

      {/* Command Bar Overlay */}
      {showCommand && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 flex items-start justify-center pt-[15vh] md:pt-[20vh]" onClick={() => setShowCommand(false)}>
          <div 
            className="w-[90%] md:w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-slate-100 flex items-center gap-4">
              <Search className="w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search or type command..." 
                className="w-full text-lg focus:outline-none font-body text-slate-900"
                autoFocus
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="p-2 max-h-[40vh] overflow-y-auto">
              <p className="px-4 py-2 text-xs font-mono text-slate-400 uppercase">Quick Actions</p>
              <button className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg text-left text-slate-700">
                <Layers className="w-5 h-5 text-slate-400" />
                <span>View All Categories</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg text-left text-slate-700">
                <Heart className="w-5 h-5 text-slate-400" />
                <span>View Wishlist</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Immersive Modal */}
      <ImmersiveModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}