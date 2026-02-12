import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Search, Heart, ShoppingCart, Star, X, Sparkles, ChevronDown, Command, Layers, ChevronRight } from 'lucide-react';
import ImmersiveModal from '../assets/components/ImmersiveModal';

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

const ProductCard = ({ product, index, onOpen, isHero, isFavorite, onToggleFavorite }) => {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    cardRef.current.style.transform = `translate(${x * 0.03}px, ${y * 0.03}px) scale(1.02)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'translate(0px, 0px) scale(1)';
  }, []);

  const sizeClass = isHero 
    ? 'md:col-span-2 md:row-span-2' 
    : index % 5 === 0 
    ? 'md:col-span-2 md:row-span-1' 
    : '';

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); 
    onToggleFavorite(product.id);
  };

  return (
    <div
      ref={cardRef}
      onClick={() => onOpen(product)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden cursor-pointer transition-all duration-500 ease-out 
        w-full mb-4 md:mb-6 rounded-t-4xl md:rounded-none shadow-sm md:shadow-none
        ${sizeClass}`}
      style={{ backgroundColor: product.color }}
    >
      <div className={`relative h-full flex flex-col justify-end 
        h-[320px] md:h-[400px]
        ${isHero ? 'md:h-auto' : ''}`}>
        
       

        <div className="absolute inset-0 flex items-center justify-center py-4 md:p-8 transition-transform duration-700  group-hover:scale-110">
          <img 
            src={product.image} 
            alt={product.name} 
            loading={isHero ? "eager" : "lazy"}
            className="w-full h-full object-contain  drop-shadow-xl transition-all duration-500 max-h-[180px] md:max-h-none"
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
            
            <div className="flex items-center gap-1 text-xs text-white/80 md:hidden group-hover:text-white transition-colors">
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

// ==========================================
// 3. MAIN COMPONENT
// ==========================================

const ProductsRevolution = () => {
  const heroSlides = PRODUCTS.slice(0, 3);
  const gridProducts = PRODUCTS.slice(3);
  
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCommand, setShowCommand] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState(new Set());

  // Auto-advance Hero Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Persistence
  useEffect(() => {
    try {
      const stored = localStorage.getItem("techhaven_favorites");
      if (stored) setFavorites(new Set(JSON.parse(stored)));
    } catch (error) { console.error("Error loading favorites", error); }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("techhaven_favorites", JSON.stringify([...favorites]));
    } catch (error) { console.error("Error saving favorites", error); }
  }, [favorites]);

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && (setSelectedProduct(null) || setShowCommand(false));
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const toggleFavorite = useCallback((id) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
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

      {/* 1. DYNAMIC HERO SLIDER */}
      <div className="relative min-h-[85vh] md:h-screen w-full flex items-end md:items-center overflow-hidden bg-slate-50">
        
        {/* MOBILE: Background Image Layer */}
        <div className="absolute inset-0 md:hidden">
           {heroSlides.map((slide, index) => (
             <div 
               key={slide.id}
               className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentHeroSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
             >
                <img 
                  src={slide.image} 
                  alt={slide.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
             </div>
           ))}
        </div>

        {/* DESKTOP: Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-60 animate-pulse hidden md:block"></div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 p-6 md:p-16 max-w-7xl mx-auto w-full">
          
          {/* Text Content */}
          <div className="text-left pb-10 md:pb-0 text-white md:text-slate-900 relative h-[200px] md:h-auto">
            
            {heroSlides.map((slide, index) => (
              <div 
                key={slide.id}
                className={`transition-all duration-700 ease-in-out absolute inset-0 ${index === currentHeroSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur md:bg-white/50 md:border-slate-200 border border-white/20 rounded-full text-xs font-mono uppercase tracking-widest mb-4">
                  <Sparkles className="w-3 h-3 text-blue-400 md:text-blue-600" /> Featured Drop
                </span>
                <h1 className="text-4xl md:text-8xl font-heading font-bold tracking-tighter leading-none mb-2 md:mb-4">
                  {slide.name}
                </h1>
                <p className="text-base md:text-2xl text-slate-300 md:text-slate-500 mb-6 md:mb-8 max-w-md">
                  The pinnacle of technology. Designed for the future.
                </p>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setSelectedProduct(slide)}
                    className="px-6 md:px-8 py-3 md:py-4 bg-white text-slate-900 md:bg-slate-900 md:text-white font-heading font-bold uppercase tracking-wide hover:bg-blue-600 hover:text-white transition-colors rounded-full md:rounded-none"
                  >
                    Explore Now
                  </button>
                  <span className="text-2xl md:text-4xl font-heading font-bold">{formatPrice(slide.price)}</span>
                </div>
              </div>
            ))}

            <div className="absolute bottom-[-40px] left-0 flex gap-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHeroSlide(index)}
                  className={`transition-all duration-300 ${index === currentHeroSlide ? 'w-8 h-1 bg-blue-500' : 'w-1 h-1 bg-white/40 md:bg-slate-300 rounded-full'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* DESKTOP: Image Layer */}
          <div className="relative w-full h-[70vh] hidden md:flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-[600px] h-[600px] border border-slate-300 rounded-full"></div>
             </div>
             
             {heroSlides.map((slide, index) => (
               <div 
                 key={slide.id}
                 className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${index === currentHeroSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
               >
                 <img 
                   src={slide.image} 
                   alt={slide.name} 
                   className="w-4/5 h-4/5 object-contain drop-shadow-2xl"
                 />
               </div>
             ))}
          </div>
        </div>

        
      </div>

      {/* 2. PRODUCT GRID */}
      <div className="relative py-8 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6 md:mb-12 px-0 md:px-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tighter uppercase">Collection</h2>
              <p className="text-slate-500 mt-1 text-sm md:text-base">Handpicked for excellence.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(280px,auto)]">
            {filteredGrid.map((product, index) => (
              <ProductCard 
                key={product.id}
                product={product}
                index={index}
                onOpen={setSelectedProduct}
                isHero={false}
                isFavorite={favorites.has(product.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => setShowCommand(!showCommand)}
          className="w-14 h-14 md:w-16 md:h-16 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border-4 border-white"
          aria-label="Open command menu"
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

      {/* Modal Integration */}
      <ImmersiveModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default ProductsRevolution;