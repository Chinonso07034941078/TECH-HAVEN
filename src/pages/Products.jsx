import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, Star } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [favorites, setFavorites] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

const products = [
 // ==================== PHONES ====================
{ id: 1,  name: "iPhone 15 Pro Max",   category: "Phones", price: "₦1,600,000", rating: 4.9, image: "https://images.unsplash.com/photo-1695822822491-d92cee704368?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
{ id: 2,  name: "iPhone 15 Pro",       category: "Phones", price: "₦1,400,000", rating: 4.8, image: "https://images.unsplash.com/photo-1710023038502-ba80a70a9f53?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
{ id: 3,  name: "iPhone 14",           category: "Phones", price: "₦1,200,000",   rating: 4.7, image: "https://images.unsplash.com/photo-1663314326611-9e2fd4f11b1b?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
{ id: 4,  name: "iPhone 15",           category: "Phones", price: "₦1,000,000", rating: 4.6, image: "https://images.unsplash.com/photo-1695048132853-026f93f40f7f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
{ id: 5,  name: "Tecno Camon 40",      category: "Phones", price: "₦365,000",   rating: 4.3, image: "https://img.kwcdn.com/product/fancy/87e45a85-8b65-46c2-b458-b97f1b4daf55.jpg?imageView2/2/w/800/q/70/format/webp" },
{ id: 6,  name: "Galaxy S24 Ultra",    category: "Phones", price: "₦1,600,000", rating: 4.8, image: "https://www.phonemart.ng/wp-content/uploads/2024/06/s24u-gra-5.jpeg"},
{ id: 7,  name: "Galaxy S24",          category: "Phones", price: "₦950,000", rating: 4.7, image: "https://img.kwcdn.com/product/open/4a6542a7bba94c85a5c232b5279622c5-goods.jpeg?imageView2/2/w/800/q/70/format/webp" },
{ id: 8,  name: "Redmi Note 13 Pro Plus",   category: "Phones", price: "₦770,000",   rating: 4.4, image: "https://img.kwcdn.com/product/fancy/a359d83f-a89a-4d4b-8ed1-a53360c90232.jpg?imageView2/2/w/800/q/70/format/webp" },
{ id: 9,  name: "Redmi Note 13",    category: "Phones", price: "₦342,800",   rating: 4.2, image: "https://img.kwcdn.com/product/fancy/9a978caa-e548-4eb4-9fd2-6340d4e5bca2.jpg?imageView2/2/w/800/q/70/format/webp" },
{ id: 10, name: "Redmi 14C",        category: "Phones", price: "₦180,000", rating: 4.8, image: "https://img.kwcdn.com/product/fancy/0fc9f111-ad24-4853-af16-c04ef6ea7c07.jpg?imageView2/2/w/800/q/70/format/webp" },
{ id: 11, name: "Samsung A16",      category: "Phones", price: "₦290,000", rating: 4.7, image: "https://img.kwcdn.com/product/fancy/b000a8e9-d657-46d6-b98d-62b9d4beba65.jpg?imageView2/2/w/800/q/70/format/webp" },
{ id: 12, name: "Samsug S25 Ultra", category: "Phones", price: "₦1,900,000",   rating: 4.3, image: "https://img.kwcdn.com/product/fancy/000ae9ae-1d19-4956-bc2e-14442a240d4f.jpg?imageView2/2/w/800/q/70/format/webp" },
{ id: 13, name: "Infinix Note 50 ", category: "Phones", price: "₦330,000",   rating: 4.1, image: "https://img.kwcdn.com/product/algo_check/auto/1ca01b30fcab1c5afded6ae76545ac43_1752584452621.jpg?imageView2/2/w/800/q/70/format/webp" },
{ id: 14, name: "Infinix Note 40",      category: "Phones", price: "₦315,000", rating: 4.4, image: "https://img.kwcdn.com/product/open/2024-10-09/1728489089999-93c9ee54ccb7446e862975aea40e1d43-goods.jpeg?imageView2/2/w/800/q/70/format/webp" },
{ id: 15, name: "Infinix Hot 50i",     category: "Phones", price: "₦220,000",   rating: 4.1, image: "https://img.kwcdn.com/product/open/352b8e0f66144c5b9fc799c07ae82ee5-goods.jpeg?imageView2/2/w/800/q/70/format/webp" },

  // ==================== LAPTOPS ====================
  { id: 21, name: 'HP 840G5',     category: "Laptops", price: "₦375,000", rating: 4.9, image: "https://hewlettcomputersolution.co.ke/wp-content/uploads/2022/09/57430622_0480913806.png-scaled-1.jpg" },
  { id: 22, name: "DELL Latitude 5400 Touch screen",         category: "Laptops", price: "₦380,000", rating: 4.8, image: "https://images.pcliquidations.com/images/isaac/147/147785t550.jpg" },
  { id: 23, name: "DELL 5400 Non-Touch screen",            category: "Laptops", price: "₦350,000", rating: 4.7, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80" },
  { id: 24, name: "DELL 7390 Touch screen",        category: "Laptops", price: "₦375,000", rating: 4.6, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80" },
  { id: 25, name: "DELL 7490 Touch screen 16GB/512GB",     category: "Laptops", price: "₦460,000", rating: 4.8, image: "https://www.psero.com/wp-content/uploads/2020/07/images-2020-07-14T164359.919.jpeg" },
  { id: 26, name: "HP 840G3 Touch screen",       category: "Laptops", price: "₦280,000", rating: 4.6, image: "https://mombasacomputers.b-cdn.net/wp-content/uploads/2020/06/Hp-Elitebook-840-G3-Intel-Core-i5-6th-Gen-8GB-RAM-256GB-SSD-14-Inches-FHD-Display-f.jpg"},
  { id: 27, name: "HP 840G3 Non-Touch screen",      category: "Laptops", price: "₦260,000", rating: 4.7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTiraiyKaXLR1t66i3x-oa6NZfV0Gp9oj4yA&s" },
  { id: 28, name: "HP 9470 8GB/500GB",           category: "Laptops", price: "₦200,000", rating: 4.4, image: "https://i0.wp.com/samstecks.com/wp-content/uploads/2021/11/IMG_20211114_064454_427.jpg?fit=800%2C600&ssl=1" },
  { id: 29, name: "HP 840G2",         category: "Laptops", price: "₦200,000", rating: 4.5, image: "https://laptopmedia.com/wp-content/uploads/2017/11/HP-EliteBook-840-G2-3.jpg" },
  { id: 30, name: "HP 7370 Touch Screen",        category: "Laptops", price: "₦300,000", rating: 4.6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHH6rB70w8jrjYUGCHN5VdAoWojc1XHuP0w&s" },
  { id: 31, name: 'HP 15 CORE i3 12th Generation',     category: "Laptops", price: "₦450,000", rating: 4.8, image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/1608243/1.jpg?2870" },
  { id: 32, name: "DELL Latitude 3380 Touch screen ",            category: "Laptops", price: "₦200,000", rating: 4.7, image: "https://control.spop.com.ng/pages/uploads/product/2024-08-02-i8L1Jn0K2qexQ5ZPcT3u/IMG-20240731-WA0014.jpg" },
  { id: 33, name: "DELL 3330 CORE i3",        category: "Laptops", price: "₦120,000", rating: 4.6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8fswgGG76v1higPdbh5P3qrRR4mxtwZMTbg&s" },
  { id: 34, name: "HP 820 G3",   category: "Laptops", price: "₦245,000", rating: 4.4, image: "https://www.jamiebalfour.scot/reviews/assets/2019/07/hp-elitebook-820-g3/banner.jpg" },
  { id: 35, name: "Lenovo Thinkpad T490S",         category: "Laptops", price: "₦400,000", rating: 4.7, image: "https://techsourcesng.com/storage/2024/05/441573612_412944041593824_4651051463363558937_n.jpg" },

  // ==================== Power Banks ====================
  { id: 36, name: "Oraimo 30,000mAh Power Bank",    category: "Power Banks", price: "₦29,000",   rating: 4.9, image: "https://www-konga-com-res.cloudinary.com/f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/J/P/234293_1724402065.jpg"},
{ id: 37, name: "BISUS 20,000 mAH Power Bank",       category: "Power Banks", price: "₦19,500",   rating: 4.8, image: "https://dirigible.com.ng/wp-content/uploads/2022/06/47.-Baseus-BIPOW-digital-display-20000mAh-15W-powerbank-1-600x600-1.jpg" },
{ id: 38, name: "Itel 10,000 mAH Power Bank",     category: "Power Banks", price: "₦14,000",   rating: 4.7, image: "data:image/jpeg;base64,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" },
{ id: 39, name: "Itel 20,000 mAH Power Bank",    category: "Power Banks", price: "₦18,000",   rating: 4.6, image: "https://kultra.com.ng/wp-content/uploads/2022/08/power-bank.jpg" },
{ id: 40, name: "Itel 30,000 mAH Power Bank", category: "Power Banks", price: "₦28,000",   rating: 4.4, image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/8448963/1.jpg?7807" },
{ id: 41, name: "Oraimo 30,000mAh Power Bank",    category: "Power Banks", price: "₦29,000",   rating: 4.9, image: "https://cdn-img.oraimo.com/fit-in/600x600/EG/product/2024/03/14/OPB-1301-680-2.jpg"},
{ id: 42, name: "BISUS 20,000 mAH Power Bank",      category: "Power Banks", price: "₦20,000",   rating: 4.3, image: "https://kceedevices.com/wp-content/uploads/2024/01/51sQAPGOkES._AC_SL1200_.jpg"},
{ id: 43, name: "Itel 10,000 mAH Power Bank",        category: "Power Banks", price: "₦14,000",   rating: 4.2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjcneTQ2V3RvZUb7jgsbPRvmoMVkIrEW3GA&s" },
{ id: 44, name: "Itel 20,000 mAH Power Bank",     category: "Power Banks", price: "₦18,000",   rating: 4.4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxRqdQKX-aoh08eiMqW_eL56liiDQgNrlcg&s" },
{ id: 45, name: "Itel 30,000 mAH Power Bank",      category: "Power Banks", price: "₦29,000",   rating: 4.6, image: "https://www.itel-life.com/fileadmin/assets/img/plp/A1161-PowerPulse_20C/PowerPulseI20000mAh_Built-In_Cables.png" },
{ id: 46, name: "Oraimo 30,000mAh Power Bank",   category: "Power Banks", price: "₦29,000",  rating: 4.7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcWBV3j52XLptco4V5X_e8rDlLQmCFIhm8ZA&s" },
{ id: 47, name: "BISUS 20,000 mAH Power Bank",    category: "Power Banks", price: "₦20,000",  rating: 4.6, image: "https://www-konga-com-res.cloudinary.com/f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/M/H/180272_1686053625.jpg"},
{ id: 48, name: "Itel 10,000 mAH Power Bank",      category: "Power Banks", price: "₦14,000",   rating: 4.5, image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/6118573/2.jpg?4253" },
{ id: 49, name: "Itel 20,000 mAH Power Bank",     category: "Power Banks", price: "₦18,000",   rating: 4.5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy2v_OzyJeUKoUzQy3CowWX1Tc3tumc33Igg&s" },
{ id: 50, name: "Itel 30,000 mAH Power Bank",     category: "Power Banks", price: "₦28,000",   rating: 4.4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLpWdMLRgF5_xAkkZ8JbBT_h-4lKw1ujssJw&s" },
  // ==================== OTHER DEVICES ====================
  { id: 51, name: "Top Mouse",                category: "Other Devices", price: "₦7,000",  rating: 4.8, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&q=80" },
  { id: 52, name: 'Laptop Stand',           category: "Other Devices", price: "₦12,000",rating: 4.7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQFL1y68uzmyAMvIxUiahxtyiodzTstOF7qw&s" },
  { id: 53, name: "Second Hand Mouse",      category: "Other Devices", price: "₦3,000",rating: 4.6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-eVTgIvNvHwX4mnvUlEVAxLIiIrdgkQWgsw&s" },
  { id: 54, name: "Itels Bud Ace",   category: "Other Devices", price: "₦15,000",  rating: 4.6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrgE-5LlpNM_3tiAUVVlmN673RYzLJCmGBzw&s" },
  { id: 55, name: "Samsung 45W PD Adapter",  category: "Other Devices", price: "₦10,000",  rating: 4.5, image: "https://bnbkwt.com/images/thumbs/0008575_samsung-45w-pd-power-adapter-usb-c-to-usb-c-cable-black_510.jpeg" },
  { id: 56, name: "Samsung 35W PD Adapter",  category: "Other Devices", price: "₦9,500",  rating: 4.7, image: "https://m.media-amazon.com/images/I/618EhBkPduL._UF1000,1000_QL80_.jpg" },
  { id: 57, name: "SHPLUS Super fast charger", category: "Other Devices", price: "₦7,000",  rating: 4.3, image: "https://friimarket.com/public/uploads/all/oRHq9bh5HpY2P0D29Tcj1aaSIa9xvem9sH2UYtKk.jpg" },
  { id: 58, name: "BUDI magnetic wireless charger",  category: "Other Devices", price: "₦25,000",  rating: 4.5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi55quq_oPc_ISMt3HuzNDxd_tdrLHQcWkIQ&s" },
  { id: 59, name: "USB-C to Lightning",     category: "Other Devices", price: "₦2,000",   rating: 4.4, image: "https://www.mcsteve.com/wp-content/uploads/2020/12/type-c-to-lighning-3.jpg" },
  { id: 60, name: "Phone Stand Mobile",   category: "Other Devices", price: "₦6,000",   rating: 4.2, image: "https://image.made-in-china.com/365f3j00VtzvrYdGVacl/Adjustable-Foldable-Tablet-Phone-Holder-360-Degree-Rotating-Aluminum-Cell-Phone-Stand-for-Desk.webp" },
  { id: 61, name: "32gb Flash",  category: "Other Devices", price: "₦7,500",  rating: 4.4, image: "https://s.alicdn.com/@sc04/kf/Hdba91c7a0353470699dc51109b6091d0V.jpg" },
  { id: 62, name: "Oraimo Earphones",           category: "Other Devices", price: "₦3,000",  rating: 4.1, image: "https://i0.wp.com/givtmobile.com/wp-content/uploads/2021/03/61yAq1lFpRL._SL1200_.jpg?fit=1200%2C1200&ssl=1" },
  { id: 63, name: "64gb Flash",         category: "Other Devices", price: "₦9,500",  rating: 4.5, image: "https://s.alicdn.com/@sc04/kf/He05076d7ddeb4b2fa285d6c329c13631D/Wholesale-USB-Flash-Drive-2Gb-Pendrive-Disk-8GB-16GB-Keychain-Memory-Flash-64-Gb-Pendrive-Price-Usb-Stick-4gb-Memoria-Usb-3.0.jpg_300x300.jpg" },
  { id: 64, name: "BudsFit 5",       category: "Other Devices", price: "₦30,000",  rating: 4.4, image: "https://www.itel-life.com/fileadmin/assets/img/plp/BudsFit_5/budsfit5.jpg" },
  { id: 65, name: "PS-4 Wireless controller",     category: "Other Devices", price: "₦18,000",   rating: 4.0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ZwtzlxZ73J9kd9L1tfKgVHIi2VvTCyyVfg&s" },
];

const [showImageModal, setShowImageModal] = useState(false);
const [selectedImageProduct, setSelectedImageProduct] = useState(null);

  const categories = ['All', 'Phones', 'Laptops', 'Power Banks', 'Other Devices'];
  const filteredProducts = products.filter(p =>
    (activeCategory === 'All' || p.category === activeCategory) &&
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFavorite = (id) => setFavorites(prev => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  return (
    <div className="min-h-screen">
      <div className=" border-b border-blue-800/30">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent mb-4">
            TECH-HAVEN STORE
          </h1>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-blue-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800/70 border border-blue-700/50 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-800/50 text-blue-200 hover:bg-slate-700/50 border border-blue-800/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {filteredProducts.map(product => (
    <div key={product.id} className="bg-slate-800/40 backdrop-blur border border-blue-800/30 rounded-xl overflow-hidden hover:border-blue-600/50 hover:shadow-xl hover:shadow-blue-600/20 transition-all duration-300 group">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={() => {
            setSelectedImageProduct(product);
            setShowImageModal(true);
          }}
        />
        <button
          onClick={() => toggleFavorite(product.id)}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur flex items-center justify-center transition-all ${
            favorites.has(product.id) ? 'bg-red-500 text-white' : 'bg-black/30 text-white hover:bg-black/50'
          }`}
        >
          <Heart className={`w-4 h-4 ${favorites.has(product.id) ? 'fill-current' : ''}`} />
        </button>
      </div>
      <div className="p-4 space-y-3">
        <div className="text-sm text-blue-400">{product.category}</div>
        <h3 className="font-semibold text-white group-hover:text-blue-200 transition-colors">{product.name}</h3>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
          ))}
          <span className="text-yellow-400 text-sm ml-1">{product.rating}</span>
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-white">{product.price}</span>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1"
            onClick={() => {
              setSelectedProduct(product);
              setShowModal(true);
            }}
          >
            <ShoppingCart className="w-4 h-4" />
            Contact Us
          </button>
        </div>
      </div>
    </div>
  ))}

  {/* Image Modal */}
  {showImageModal && selectedImageProduct && (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-in fade-in duration-300"
      onClick={() => setShowImageModal(false)}
    >
      <div 
        className="relative max-w-4xl max-h-[90vh] w-full bg-slate-800/95 backdrop-blur-xl border border-blue-600/50 rounded-2xl overflow-hidden shadow-2xl shadow-blue-600/20 animate-in zoom-in-95 duration-300 ease-out"
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
            <div>
              <div className="text-blue-400 font-medium mb-2 animate-in fade-in slide-in-from-bottom duration-400 delay-200">{selectedImageProduct.category}</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 animate-in fade-in slide-in-from-bottom duration-400 delay-300">{selectedImageProduct.name}</h2>
            </div>
            
            <div className="flex items-center gap-2 animate-in fade-in slide-in-from-bottom duration-400 delay-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.floor(selectedImageProduct.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
              ))}
              <span className="text-yellow-400 text-lg font-semibold ml-1">{selectedImageProduct.rating}</span>
            </div>
            
            <div className="text-3xl font-bold text-white animate-in fade-in slide-in-from-bottom duration-400 delay-500">{selectedImageProduct.price}</div>
            
            {selectedImageProduct.description && (
              <p className="text-gray-300 leading-relaxed animate-in fade-in slide-in-from-bottom duration-400 delay-600">{selectedImageProduct.description}</p>
            )}
            
            <div className="flex gap-3 pt-4 animate-in fade-in slide-in-from-bottom duration-400 delay-700">
              <button
                onClick={() => toggleFavorite(selectedImageProduct.id)}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 ${
                  favorites.has(selectedImageProduct.id) 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}
              >
                <Heart className={`w-5 h-5 transition-transform duration-200 ${favorites.has(selectedImageProduct.id) ? 'fill-current scale-110' : ''}`} />
                {favorites.has(selectedImageProduct.id) ? 'Favorited' : 'Add to Favorites'}
              </button>
              
              <button
                className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
                onClick={() => {
                  setSelectedProduct(selectedImageProduct);
                  setShowModal(true);
                  setShowImageModal(false);
                }}
              >
                <ShoppingCart className="w-5 h-5" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-blue-200 text-lg">No products found matching your criteria.</p>
          </div>
        )}

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
                    href="mailto:Techhaven00@gmail.com"
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
                    <span className="underline underline-offset-2">Techhaven00@gmail.com</span>
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
    </div>
  );
};

export default Products;