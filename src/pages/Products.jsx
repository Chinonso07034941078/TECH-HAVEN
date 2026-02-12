import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, Heart, ShoppingCart, Star, X, Sparkles, ChevronDown, Command, Layers, ChevronRight } from 'lucide-react';

// ==========================================
// 1. DATA & CONFIGURATION
// ==========================================

const PRODUCTS = [
  { id: 1, name: "iPhone 15 Pro Max", category: "Phones", price: 1600000, rating: 4.9, image: "https://images.unsplash.com/photo-1695822822491-d92cee704368?q=80&w=880&auto=format&fit=crop", color: "#1a1a1a" },
  { id: 2, name: "iPhone 15 Pro", category: "Phones", price: 1400000, rating: 4.8, image: "https://images.unsplash.com/photo-1710023038502-ba80a70a9f53?q=80&w=764&auto=format&fit=crop", color: "#f3f4f6" },
  { id: 3, name: "iPhone 14", category: "Phones", price: 1200000, rating: 4.7, image: "https://images.unsplash.com/photo-1663314326611-9e2fd4f11b1b?q=80&w=1025&auto=format&fit=crop", color: "#eef2ff" },
  { id: 4, name: "Samsung Galaxy S24 Ultra", category: "Phones", price: 1600000, rating: 4.8, image: "https://www.phonemart.ng/wp-content/uploads/2024/06/s24u-gra-5.jpeg", color: "#f0f9ff" },
  { id: 5, name: "HP 840G5", category: "Laptops", price: 375000, rating: 4.9, image: "https://hewlettcomputersolution.co.ke/wp-content/uploads/2022/09/57430622_0480913806.png-scaled-1.jpg", color: "#f5f5f4" },
  { id: 6, name: "DELL Latitude 5400", category: "Laptops", price: 380000, rating: 4.8, image: "https://images.pcliquidations.com/images/isaac/147/147785t550.jpg", color: "#ece7dd" },
  { id: 7, name: "Oraimo 30,000mAh", category: "Power Banks", price: 29000, rating: 4.9, image: "https://www-konga-com-res.cloudinary.com/f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/J/P/234293_1724402065.jpg", color: "#faf5ff"},
  { id: 8, name: "BISUS 20,000 mAH", category: "Power Banks", price: 19500, rating: 4.8, image: "https://dirigible.com.ng/wp-content/uploads/2022/06/47.-Baseus-BIPOW-digital-display-20000mAh-15W-powerbank-1-600x600-1.jpg", color: "#fff1f2" },
  { id: 9, name: "Top Mouse", category: "Other Devices", price: 7000, rating: 4.8, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&q=80", color: "#f0fdf4" },
  { id: 10, name: "Laptop Stand", category: "Other Devices", price: 12000, rating: 4.7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQFL1y68uzmyAMvIxUiahxtyiodzTstOF7qw&s", color: "#fff7ed" },
];

const formatPrice = (price) =>
  new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(price);

// ==========================================
// 2. SUB-COMPONENTS
// ==========================================

const ProductCard = ({ product, index, onOpen, isHero }) => {
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

  // Dynamic sizing for desktop
  const sizeClass = isHero 
    ? 'md:col-span-2 md:row-span-2' 
    : index % 5 === 0 
    ? 'md:col-span-2 md:row-span-1' 
    : '';

  return (
    <div
      ref={cardRef}
      onClick={() => onOpen(product)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden cursor-pointer transition-all duration-500 ease-out 
        w-full mb-4 md:mb-6  md:rounded-none 
        ${sizeClass}`}
      style={{ backgroundColor: product.color }}
    >
      {/* Mobile Layout: Adjusted height for 2-column grid */}
      <div className={`relative h-full flex flex-col justify-end 
        h-[320px] md:h-[400px]
        ${isHero ? 'md:h-auto' : ''}`}>
        
        {/* Floating Action Button (Mobile) */}
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
            {product.category}
          </span>
          <h3 className={`font-heading font-bold leading-tight tracking-tighter text-shadow 
            text-lg md:text-3xl 
            ${isHero ? 'md:text-6xl' : ''}`}>
            {product.name}
          </h3>
          
          <div className="flex items-center justify-between mt-1">
            <p className={`font-heading font-bold text-base md:text-xl`}>
              {formatPrice(product.price)}
            </p>
            
            {/* Mobile: Explicit View Button */}
            <div className="flex items-center gap-1 text-xs text-white/80 md:hidden">
              View <ChevronRight className="w-3 h-3" />
            </div>
            
            {/* Desktop: Star Rating */}
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
      {/* Mobile: Slide Up Handle */}
      <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mt-4 mb-2 md:hidden"></div>
      
      <div 
        className="relative w-full h-full md:max-w-6xl md:h-[90vh] grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 overflow-y-auto md:overflow-visible"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top/Left: Visual */}
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

        {/* Bottom/Right: Info */}
        <div className="relative flex flex-col justify-end md:justify-center h-1/2 md:h-auto bg-white p-6 md:bg-transparent rounded-t-3xl -mt-8 z-10 shadow-2xl md:shadow-none">
          
          {/* Mobile friendly scrollable content */}
          <div className="overflow-y-auto">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest">{product.category}</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4 tracking-tighter uppercase text-slate-900 md:text-white">
              {product.name}
            </h2>
            
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`} />)}
              <span className="text-sm text-slate-500 md:text-slate-300 ml-2">{product.rating} Rating</span>
            </div>

            <p className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-900 md:text-white">
              {formatPrice(product.price)}
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

            <button className="w-full py-4 bg-slate-900 md:bg-white text-white md:text-slate-900 font-heading font-bold text-lg rounded-full hover:bg-blue-600 hover:text-white transition-colors shadow-lg flex items-center justify-center gap-2 active:scale-95">
              <ShoppingCart className="w-5 h-5" /> Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. MAIN COMPONENT
// ==========================================

const ProductsRevolution = () => {
  const [heroProduct] = useState(PRODUCTS[0]);
  const [gridProducts] = useState(PRODUCTS.slice(1));
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCommand, setShowCommand] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && (setSelectedProduct(null) || setShowCommand(false));
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const filteredGrid = useMemo(() => 
    gridProducts.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())),
  [gridProducts, searchQuery]);

  return (
    <div className="min-h-screen bg-white font-body text-slate-900 overflow-x-hidden">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Barlow:wght@300;400;500;600&display=swap');
         .font-heading { font-family: 'Rajdhani', sans-serif; }
         .font-body { font-family: 'Barlow', sans-serif; }
        `}
      </style>

      {/* 1. MOBILE-OPTIMIZED HERO */}
      <div className="relative min-h-[85vh] md:h-screen w-full flex items-end md:items-center overflow-hidden bg-slate-50">
        
        {/* MOBILE: Background Image Overlay (Behind Text) */}
        <div className="absolute inset-0 md:hidden">
          <img 
            src={heroProduct.image} 
            alt={heroProduct.name} 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        </div>

        {/* DESKTOP: Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-60 animate-pulse hidden md:block"></div>
        
        {/* Main Content Container */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 p-6 md:p-16 max-w-7xl mx-auto w-full">
          
          {/* Text Content */}
          {/* MOBILE: White text over image / DESKTOP: Dark text */}
          <div className="text-left pb-10 md:pb-0 text-white md:text-slate-900">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur md:bg-white/50 md:border-slate-200 border border-white/20 rounded-full text-xs font-mono uppercase tracking-widest mb-4">
              <Sparkles className="w-3 h-3 text-blue-400 md:text-blue-600" /> Featured Drop
            </span>
            <h1 className="text-4xl md:text-8xl font-heading font-bold tracking-tighter leading-none mb-2 md:mb-4">
              {heroProduct.name}
            </h1>
            <p className="text-base md:text-2xl text-slate-300 md:text-slate-500 mb-6 md:mb-8 max-w-md">
              The pinnacle of technology. Designed for the future.
            </p>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSelectedProduct(heroProduct)}
                className="px-6 md:px-8 py-3 md:py-4 bg-white text-slate-900 md:bg-slate-900 md:text-white font-heading font-bold uppercase tracking-wide hover:bg-blue-600 hover:text-white transition-colors rounded-full md:rounded-none"
              >
                Explore Now
              </button>
              <span className="text-2xl md:text-4xl font-heading font-bold">{formatPrice(heroProduct.price)}</span>
            </div>
          </div>

          {/* DESKTOP: Image Right */}
          <div className="relative w-full h-[70vh] hidden md:flex items-center justify-center">
             <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-[600px] h-[600px] border border-slate-300 rounded-full"></div>
             </div>
             <img 
               src={heroProduct.image} 
               alt={heroProduct.name} 
               className="w-4/5 h-4/5 object-contain drop-shadow-2xl transition-transform duration-1000 hover:scale-105"
             />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-10 flex flex-col items-center gap-2 animate-bounce z-20">
          <span className="text-xs font-mono uppercase tracking-widest text-white/60 md:text-slate-400">Scroll</span>
          <ChevronDown className="w-5 h-5 text-white/60 md:text-slate-400" />
        </div>
      </div>

      {/* 2. MOBILE FEED GRID (2 Columns) */}
      <div className="relative py-8 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6 md:mb-12 px-0 md:px-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tighter uppercase">Collection</h2>
              <p className="text-slate-500 mt-1 text-sm md:text-base">Handpicked for excellence.</p>
            </div>
          </div>

          {/* Mobile: 2 Column Grid / Desktop: 4 Column Fluid Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(280px,auto)]">
            {filteredGrid.map((product, index) => (
              <ProductCard 
                key={product.id}
                product={product}
                index={index}
                onOpen={setSelectedProduct}
                isHero={false}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3. FLOATING ORB NAVIGATION */}
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
                className="w-full text-lg focus:outline-none font-body"
                autoFocus
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="p-2 max-h-[40vh] overflow-y-auto">
              <p className="px-4 py-2 text-xs font-mono text-slate-400 uppercase">Quick Actions</p>
              <button className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg text-left">
                <Layers className="w-5 h-5 text-slate-400" />
                <span>View All Categories</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg text-left">
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
};

export default ProductsRevolution;