import React, { useState, useEffect } from "react";
import { ChevronRight, Zap, Cpu, Smartphone, Monitor, Headphones, Mail, Check, Clock, User, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



export default function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const heroSlides = [
    {
      title: "Revolutionary Smartphones",
      subtitle: "Experience the Future Today",
      description: "Discover cutting-edge technology with AI-powered cameras, lightning-fast processors, and stunning displays.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&h=600&fit=crop",
      cta: "Shop Phones",
      gradient: "from-blue-600/20 to-purple-600/20"
    },
    {
      title: "Smart Accessories",
      subtitle: "Power Up Your Lifestyle",
      description: "From wireless chargers to premium headphones, elevate your tech experience with our curated accessories.",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&h=600&fit=crop",
      cta: "Explore Accessories",
      gradient: "from-sky-600/20 to-cyan-600/20"
    },
    {
      title: "Next-Gen Gadgets",
      subtitle: "Innovation Without Limits",
      description: "Discover the latest in smart home, wearables, and cutting-edge devices that define tomorrow.",
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cta: "View Gadgets",
      gradient: "from-violet-600/20 to-indigo-600/20"
    }
  ];

  const navigate = useNavigate();

 const [showImageModal, setShowImageModal] = useState(false);
 const [selectedImageProduct, setSelectedImageProduct] = useState(null);

  const featuredProducts = [
    {
      name: "iPhone 15 Pro Max",
      price: "₦1,400,000",
      originalPrice: "$1,299",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      rating: 4.9,
      badge: "Best Seller"
    },
    {
      name: "Samsung Galaxy S24 Ultra",
      price: "₦1,600,000",
      originalPrice: "$1,199",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
      rating: 4.8,
      badge: "New"
    },
    {
      name: "AirPods Pro (3rd Gen)",
      price: "₦25,000",
      originalPrice: "$279",
      image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop",
      rating: 4.7,
      badge: "Popular"
    },
    {
      name: "DELL 5400 Touch screen",
      price: "₦380,000",
      originalPrice: "$1,799",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop",
      rating: 4.9,
      badge: "Featured"
    }
  ];

  const categories = [
    {
      name: "Smartphones",
      iconImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop",
      count: "150+ Products",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=300&fit=crop",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Laptops",
      iconImage: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=100&h=100&fit=crop",
      count: "80+ Products", 
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
      gradient: "from-sky-500 to-blue-500"
    },
    {
      name: "Audio",
      iconImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
      count: "120+ Products",
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=300&fit=crop", 
      gradient: "from-cyan-500 to-sky-500"
    },
    {
      name: "Accessories",
      iconImage: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=100&h=100&fit=crop",
      count: "200+ Products",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop",
      gradient: "from-blue-600 to-slate-600"
    }
  ];


   

  const handleCategoryClick = (categoryName) => {
    console.log('Category clicked:', categoryName); // Debug log
    navigate(`/products?category=${categoryName.toLowerCase()}`);
  };


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };


  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [email, setEmail] = useState('');
  const [subscribers, setSubscribers] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [message, setMessage] = useState('');
  const [showDemo, setShowDemo] = useState(false);

  // Simulate email validation
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle subscription
  const handleSubscribe = () => {
    
    if (!email) {
      setMessage('Please enter your email address');
      return;
    }
    
    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address');
      return;
    }
    
    // Check if already subscribed
    const existingSubscriber = subscribers.find(sub => sub.email === email);
    if (existingSubscriber) {
      setMessage('This email is already subscribed!');
      return;
    }
    
    // Add new subscriber
    const newSubscriber = {
      email: email,
      subscribedAt: new Date(),
      lastEmailSent: null,
      emailsSent: 0
    };
    
    setSubscribers([...subscribers, newSubscriber]);
    setIsSubscribed(true);
    setMessage('Successfully subscribed! You\'ll receive weekly reminders about our latest tech deals.');
    setEmail('');
  };

  // Simulate sending weekly emails
  const sendWeeklyEmails = () => {
    const updatedSubscribers = subscribers.map(subscriber => ({
      ...subscriber,
      lastEmailSent: new Date(),
      emailsSent: subscriber.emailsSent + 1
    }));
    
    setSubscribers(updatedSubscribers);
    setMessage(`Weekly reminder emails sent to ${subscribers.length} subscriber(s)!`);
  };

  // Generate sample email content
  const generateEmailContent = () => {
    const deals = [
      'Gaming Laptops - Up to 40% off',
      'Smartphones - Latest models available',
      'Wireless Headphones - Premium sound quality',
      'Smart Watches - Fitness & productivity features'
    ];

  const currentSlideData = heroSlides[currentSlide];
    return {
      subject: '🛒 Weekly Tech Deals at Tech Haven - Don\'t Miss Out!',
      content: `
        Hi there!
        
        Hope you're having a great week! 
        
        We've got some amazing tech deals lined up for you this week:
        
        ${deals.map(deal => `• ${deal}`).join('\n        ')}
        
        🔥 EXCLUSIVE: Use code WEEKLY15 for an additional 15% off your order!
        
        Visit Tech Haven now and upgrade your tech game:
        👉 Shop Now: tech-haven.com
        
        Happy shopping!
        The Tech Haven Team
        
        ---
        Unsubscribe | Update Preferences | Contact Us
      `
    };
  };

const sampleEmail = generateEmailContent();

// Add state for favorites
const [favorites, setFavorites] = useState(new Set());

// Add toggle function
const toggleFavorite = (productId) => {
  setFavorites(prev => {
    const newFavorites = new Set(prev);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    return newFavorites;
  });
};
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Hero Section with Background Slider */}
<section className="pt-16 relative min-h-screen bg-slate-950 overflow-hidden flex items-center justify-center">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} backdrop-blur-[1px]`}></div>
              <div className="absolute inset-0 bg-slate-950/70"></div>
            </div>
          ))}
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-5 hidden md:block">
          <div 
            className="absolute w-96 h-96 border border-blue-500/20 rounded-full animate-spin"
            style={{
              top: '10%',
              left: `${10 + mousePos.x * 0.02}%`,
              animationDuration: '20s'
            }}
          ></div>
          <div 
            className="absolute w-64 h-64 bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-full animate-pulse"
            style={{
              bottom: '20%',
              right: `${15 + mousePos.y * 0.01}%`,
              animationDuration: '4s'
            }}
          ></div>
          <div 
            className="absolute w-32 h-32 border-2 border-cyan-500/30 rotate-45"
            style={{
              top: '30%',
              right: '20%',
              animation: 'float 6s ease-in-out infinite'
            }}
          ></div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 md:space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-blue-400 w-6 md:w-8' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 py-8 md:py-0">
          <div className="mb-6 md:mb-8">
            {/* Animated Title */}
            <div className="overflow-hidden mb-4 md:mb-6">
              <h1 
                key={currentSlide}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-tight animate-slide-up leading-tight"
                style={{ animationDelay: '0.2s' }}
              >
                TECH<span className="text-blue-400">-</span>HAVEN
              </h1>
            </div>
            
            {/* Dynamic Subtitle */}
            <div className="overflow-hidden mb-3 md:mb-4">
              <h2 
                key={`subtitle-${currentSlide}`}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-sky-300 animate-slide-up"
                style={{ animationDelay: '0.4s' }}
              > 
               { heroSlides[currentSlide].subtitle }    
              </h2>
            </div>
            
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent w-16 sm:w-24 md:w-64"></div>
              <div className="mx-2 sm:mx-4 md:mx-6 px-3 sm:px-4 md:px-6 py-1 md:py-2 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm">
                <span className="text-blue-300 font-semibold text-xs sm:text-sm md:text-base">PREMIUM TECH DESTINATION</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent w-16 sm:w-24 md:w-64"></div>
            </div>
            
            {/* Dynamic Description */}
            <div className="overflow-hidden mb-6 md:mb-8">
              <p 
                key={`desc-${currentSlide}`}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed animate-slide-up"
                style={{ animationDelay: '0.6s' }}
              >
                {heroSlides[currentSlide].description }
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8">
            <div 
              className="group bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-blue-400/40 hover:bg-slate-900/70 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: '0.8s' }}
            >
              <Cpu className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-400 mb-3 md:mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Latest Hardware</h3>
              <p className="text-slate-400 text-xs sm:text-sm md:text-base">Cutting-edge processors and components</p>
            </div>
            
            <div 
              className="group bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-blue-400/40 hover:bg-slate-900/70 transition-all duration-500 sm:scale-105 md:scale-110 animate-fade-in"
              style={{ animationDelay: '1s' }}
            >
              <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-400 mb-3 md:mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Smart Devices</h3>
              <p className="text-slate-400 text-xs sm:text-sm md:text-base">Connected technology for every need</p>
            </div>
            
            <div 
              className="group bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-blue-400/40 hover:bg-slate-900/70 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: '1.2s' }}
            >
              <Monitor className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-400 mb-3 md:mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Displays</h3>
              <p className="text-slate-400 text-xs sm:text-sm md:text-base">Crystal clear visual experiences</p>
            </div>
          </div>

          {/* Dynamic CTA Button */}
          <button 
            key={`cta-${currentSlide}`}
            className="px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 rounded-xl md:rounded-2xl text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white hover:from-blue-500 hover:via-blue-400 hover:to-sky-400 transition-all duration-500 shadow-2xl shadow-blue-500/30 hover:scale-105 transform animate-slide-up"
            style={{ animationDelay: '1.4s' }}
          >
            {currentSlide.cta}
          </button>
        </div>
      </section>

      {/* Categories Section */}
       <section className="py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-sky-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/20 rounded-full text-sky-300 text-sm font-medium backdrop-blur-sm">
              Premium Collection
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-sky-200 to-blue-300 bg-clip-text text-transparent leading-tight">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium tech products, 
            designed for those who demand excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.name}
              onClick={(e) => {
                e.stopPropagation();
                handleCategoryClick(category.name);
              }}
              className="group relative overflow-hidden rounded-3xl cursor-pointer transform hover:scale-[1.02] transition-all duration-700 hover:shadow-2xl hover:shadow-sky-500/20"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Enhanced gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient}/60 via-transparent to-black/20 group-hover:${category.gradient}/80 transition-all duration-500`}></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-sky-400/50 transition-colors duration-500"></div>
                
                {/* Glowing edge effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-sky-400/20 to-transparent blur-xl"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                {/* Top section with floating element */}
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom content */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold group-hover:text-sky-200 transition-colors duration-500 leading-tight">
                      {category.name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <div className="h-px bg-gradient-to-r from-sky-400 to-transparent flex-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                      <p className="text-sky-200/80 text-sm font-medium">{category.count}</p>
                    </div>
                  </div>
                  
                  <div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/20 hover:border-sky-400/50 transition-all duration-300 flex items-center gap-3 group/btn">
                      <span>Explore Collection</span>
                      <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Subtle floating particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-sky-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-sky-300 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-16">
          <div 
            onClick={(e) => {
              e.stopPropagation();
              navigate('/products');
            }}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-sky-300 transition-colors duration-300 cursor-pointer group"
          >
            <span 
              onClick={(e) => {
                e.stopPropagation();
                navigate('/products');
              }}
              className="text-sm font-medium cursor-pointer"
            >
              View all categories
            </span>
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>

      {/* Featured Products */}
   <section className="py-20 px-6 bg-slate-800/50">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
        Featured Products
      </h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Hand-picked favorites from our premium collection
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {featuredProducts.map((product, index) => (
        <div
         onClick={() => {
    setSelectedImageProduct(product);
    setShowImageModal(true);
  }}
          key={product.name}
          className="bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-sky-500/20 hover:border-sky-500/40 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {product.badge}
              </span>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                <span className="text-white text-lg">♡</span>
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-lg ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-600'}`}
                >
                  ★
                </span>
              ))}
              <span className="text-gray-400 text-sm ml-2">({product.rating})</span>
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-sky-300 transition-colors duration-300">
              {product.name}
            </h3>

            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-2xl font-bold text-sky-400">{product.price}</span>
                <span className="text-gray-500 line-through ml-2">{product.originalPrice}</span>
              </div>
            </div>

            <button
              className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-sky-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-sky-500/25 transform hover:scale-105"
              onClick={() => {
                // Show modal logic; you can replace with your state/modal handler
                setSelectedProduct(product);
                setShowModal(true);
              }}
            >
              Purchase
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Popout Modal */}
    {showModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
        <div className="bg-slate-900 rounded-3xl p-8 max-w-md w-full shadow-2xl border border-blue-600/20 relative animate-fadeIn">
          <button
            className="absolute top-3 right-4 text-white text-2xl hover:text-sky-400 transition"
            onClick={() => setShowModal(false)}
            aria-label="Close"
          >
            &times;
          </button>
          <div className="text-center">
            <div className="mb-5">
              <svg
                className="mx-auto mb-4"
                width={64}
                height={64}
                viewBox="0 0 64 64"
                fill="none"
              >
                <circle cx="32" cy="32" r="32" fill="#1e293b" />
                <path
                  d="M45 29L29 45L19 35"
                  stroke="#38bdf8"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h4 className="text-2xl font-bold text-white mb-2">Contact to Purchase</h4>
              <p className="text-gray-300 mb-6">
                To purchase <span className="text-sky-400 font-semibold">{selectedProduct?.name}</span>, please contact us on WhatsApp or email.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <a
                href="https://wa.me/2349032848688"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 py-2 px-5 rounded-full text-white font-bold shadow-lg hover:from-sky-400 hover:to-blue-500 transition-all duration-300"
              >
                {/* WhatsApp Icon (SVG) */}
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block"
                >
                  <circle cx="16" cy="16" r="16" fill="#25D366" />
                  <path
                    d="M23.8 19.2c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.4 0 1.4 1 2.7 1.2 2.8.2.2 2 2.9 5 4 3 .9 3 .6 3.5.6.5 0 1.7-.7 2-.1.3.6 1.6 2.2 1.8 2.5.2.3.3.3.5.2.2-.1 1.3-.5 2-1.2.7-.7.8-1.1.7-1.3-.1-.2-.4-.2-.7-.4z"
                    fill="#fff"
                  />
                </svg>
                <span className="underline underline-offset-2">09032848688</span>
              </a>
              <a
                href="mailto:your@email.com"
                className="flex items-center gap-2 bg-slate-800 hover:bg-blue-900 py-2 px-5 rounded-full text-white font-bold shadow-lg transition-all duration-300"
              >
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  className="inline-block"
                >
                  <path
                    d="M2 6.75A2.75 2.75 0 014.75 4h14.5A2.75 2.75 0 0122 6.75v10.5A2.75 2.75 0 0119.25 20H4.75A2.75 2.75 0 012 17.25V6.75zm2.75-.25A.75.75 0 004 6.75v.342l8 5.333 8-5.333V6.75a.75.75 0 00-.75-.75H4.75zm15.25 2.424l-7.293 4.866a1 1 0 01-1.114 0L4 8.924V17.25c0 .414.336.75.75.75h14.5a.75.75 0 00.75-.75V8.924z"
                    fill="#38bdf8"
                  />
                </svg>
                <a
  href="mailto:Techhaven00@gmail.com"
  className="underline underline-offset-2"
>
  Techhaven00@gmail.com
</a>
              </a>
            </div>
            <p className="mt-6 text-gray-500 text-xs">
              We’ll respond promptly and guide you through your purchase.
            </p>
          </div>
        </div>
      </div>
    )}
  </div>
</section>
{/* Image Modal */}
{/* Image Modal */}
{showImageModal && selectedImageProduct && (
  <div 
    className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-in fade-in duration-300"
    onClick={() => setShowImageModal(false)}
  >
    <div 
      className="relative max-w-4xl max-h-[90vh] w-full bg-slate-900/95 backdrop-blur-xl border border-sky-600/50 rounded-2xl overflow-hidden shadow-2xl shadow-sky-600/20 animate-in zoom-in-95 duration-300 ease-out"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setShowImageModal(false)}
        className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center z-10 transition-all duration-200 hover:scale-105"
      >
        ✕
      </button>
      
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3 aspect-square lg:aspect-auto overflow-hidden">
          <img
            src={selectedImageProduct.image}
            alt={selectedImageProduct.name}
            className="w-full h-full object-cover animate-in slide-in-from-left duration-500 ease-out"
          />
        </div>
        
        <div className="lg:w-1/3 p-6 lg:p-8 space-y-6 animate-in slide-in-from-right duration-500 ease-out delay-100">
          <div className="animate-in fade-in slide-in-from-bottom duration-400 delay-200">
            <div className="inline-block mb-3">
              <span className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {selectedImageProduct.badge}
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">{selectedImageProduct.name}</h2>
          </div>
          
          <div className="flex items-center gap-2 animate-in fade-in slide-in-from-bottom duration-400 delay-300">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-xl ${i < Math.floor(selectedImageProduct.rating) ? 'text-yellow-400' : 'text-gray-600'}`}
              >
                ★
              </span>
            ))}
            <span className="text-yellow-400 text-lg font-semibold ml-1">({selectedImageProduct.rating})</span>
          </div>
          
          <div className="animate-in fade-in slide-in-from-bottom duration-400 delay-400">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold text-sky-400">{selectedImageProduct.price}</span>
              <span className="text-gray-500 line-through text-lg">{selectedImageProduct.originalPrice}</span>
            </div>
          </div>
          
          {selectedImageProduct.description && (
            <p className="text-gray-300 leading-relaxed animate-in fade-in slide-in-from-bottom duration-400 delay-500">
              {selectedImageProduct.description}
            </p>
          )}
          
          <div className="flex gap-3 pt-4 animate-in fade-in slide-in-from-bottom duration-400 delay-600">
            <button
              onClick={() => toggleFavorite(selectedImageProduct.id || selectedImageProduct.name)}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 ${
                favorites.has(selectedImageProduct.id || selectedImageProduct.name)
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'bg-gray-700 hover:bg-gray-600 text-white'
              }`}
            >
              <span className={`text-lg transition-transform duration-200 ${
                favorites.has(selectedImageProduct.id || selectedImageProduct.name) ? 'scale-110' : ''
              }`}>
                {favorites.has(selectedImageProduct.id || selectedImageProduct.name) ? '♥' : '♡'}
              </span>
              {favorites.has(selectedImageProduct.id || selectedImageProduct.name) ? 'Favorited' : 'Add to Favorites'}
            </button>
            
            <button
              className="flex-1 py-3 px-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
              onClick={() => {
                setSelectedProduct(selectedImageProduct);
                setShowModal(true);
                setShowImageModal(false);
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l1.5 6m0 0h9" />
              </svg>
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: "🚚",
                title: "Fast Delivery",
                description: "Free shipping on orders over $50. Get your tech delivered in 24-48 hours."
              },
              {
                icon: "🔒",
                title: "Secure Payments",
                description: "Your payment information is protected with bank-level encryption."
              },
              {
                icon: "🎧",
                title: "Premium Support",
                description: "24/7 customer support with expert tech advice and warranty service."
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="text-center group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-sky-300 transition-colors duration-300">
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
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Subscription Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-sky-500/10 to-blue-600/10 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest tech news, exclusive deals, and product launches delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4 mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-slate-800/80 backdrop-blur-sm border border-sky-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-sky-400 transition-colors duration-300"
            />
            <button 
              onClick={handleSubscribe}
              className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl font-semibold hover:from-sky-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-sky-500/25 hover:scale-105"
            >
              Subscribe
            </button>
          </div>
          
          {message && (
            <div className={`p-4 rounded-lg mb-4 ${isSubscribed ? 'bg-green-500/20 border border-green-500/30 text-green-300' : 'bg-red-500/20 border border-red-500/30 text-red-300'}`}>
              <div className="flex items-center justify-center gap-2">
                {isSubscribed ? <Check size={20} /> : <Mail size={20} />}
                {message}
              </div>
            </div>
          )}
          
          <button
            onClick={() => setShowDemo(!showDemo)}
            className="text-sky-400 hover:text-sky-300 transition-colors underline"
          >
            {showDemo ? 'Hide' : 'Show'} Admin Dashboard
          </button>
        </div>
      </section>

      {/* Admin Dashboard */}
      {showDemo && (
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Subscriber Management */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-6">
                  <User className="text-sky-400" size={24} />
                  <h3 className="text-2xl font-bold text-white">Subscribers ({subscribers.length})</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  {subscribers.length === 0 ? (
                    <p className="text-gray-400 text-center py-8">No subscribers yet</p>
                  ) : (
                    subscribers.map((subscriber, index) => (
                      <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-white font-medium">{subscriber.email}</p>
                            <p className="text-gray-400 text-sm">
                              Subscribed: {subscriber.subscribedAt.toLocaleDateString()}
                            </p>
                            <p className="text-gray-400 text-sm">
                              Emails sent: {subscriber.emailsSent}
                            </p>
                            {subscriber.lastEmailSent && (
                              <p className="text-gray-400 text-sm">
                                Last email: {subscriber.lastEmailSent.toLocaleDateString()}
                              </p>
                            )}
                          </div>
                          <div className="text-green-400">
                            <Check size={20} />
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                
                {subscribers.length > 0 && (
                  <button
                    onClick={sendWeeklyEmails}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  >
                    <Clock size={20} className="inline mr-2" />
                    Send Weekly Reminders
                  </button>
                )}
              </div>

              {/* Email Preview */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="text-sky-400" size={24} />
                  <h3 className="text-2xl font-bold text-white">Email Preview</h3>
                </div>
                
                <div className="bg-white rounded-lg p-6 text-gray-800 max-h-96 overflow-y-auto">
                  <div className="border-b pb-3 mb-4">
                    <p className="font-semibold text-sm text-gray-600">Subject:</p>
                    <p className="text-lg font-bold">{sampleEmail.subject}</p>
                  </div>
                  
                  <div className="whitespace-pre-line text-sm leading-relaxed">
                    {sampleEmail.content}
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <p className="text-blue-300 text-sm">
                    💡 This email would be automatically sent every week to all subscribers, 
                    reminding them to check out Tech Haven's latest deals and products.
                  </p>
                </div>
              </div>
            </div>
            
            {/* System Info */}
            <div className="mt-8 bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-4">📧 Email System Features</h4>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <h5 className="font-semibold text-sky-400 mb-2">Automatic Weekly Emails</h5>
                  <p className="text-sm">Subscribers receive personalized emails every week with latest deals, new products, and exclusive discount codes.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-sky-400 mb-2">Smart Content</h5>
                  <p className="text-sm">Emails include curated tech deals, trending products, and personalized recommendations based on browsing history.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-sky-400 mb-2">Email Validation</h5>
                  <p className="text-sm">Robust email validation prevents invalid emails and duplicate subscriptions.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-sky-400 mb-2">Analytics & Tracking</h5>
                  <p className="text-sm">Track subscription dates, email delivery rates, and engagement metrics for optimization.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </section>


   


      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}