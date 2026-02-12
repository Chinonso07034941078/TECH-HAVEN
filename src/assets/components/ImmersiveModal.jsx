import { useEffect } from 'react';
import { X, Star } from 'lucide-react';

const ImmersiveModal = ({ product, onClose }) => {

  // Scroll Lock (Proper + Reactive)
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [product]);

  if (!product) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center md:justify-center bg-black/60 md:bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >

      {/* Mobile pull indicator */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full md:hidden" />

      {/* Desktop Close */}
      <button
        onClick={onClose}
        className="hidden md:flex absolute top-6 right-6 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full items-center justify-center transition-all duration-200 backdrop-blur-sm z-50 group"
        aria-label="Close modal"
      >
        <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-200" />
      </button>

      <div
        className="relative w-full md:w-auto md:max-w-6xl bg-white md:bg-zinc-900 rounded-t-[2rem] md:rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] md:max-h-[85vh] flex flex-col md:grid md:grid-cols-2 animate-in slide-in-from-bottom md:slide-in-from-bottom-0 md:zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Image Section */}
        <div className="relative bg-gradient-to-br from-zinc-50 to-zinc-100 md:from-zinc-800 md:to-zinc-900 flex items-center justify-center p-8 md:p-12 min-h-[45vh] md:min-h-0">

          {/* Mobile Close */}
          <button
            onClick={onClose}
            className="md:hidden absolute top-4 right-4 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 text-zinc-700" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full max-w-md max-h-[400px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col p-6 md:p-10 overflow-y-auto">
          <div className="flex-1 space-y-5">

            {/* Category */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 md:bg-blue-500/10 rounded-full">
              <span className="text-xs font-semibold text-blue-600 md:text-blue-400 uppercase tracking-wider">
                {product.category}
              </span>
            </div>

            {/* Title */}
            <h2
              id="product-modal-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 md:text-white leading-tight"
            >
              {product.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-zinc-300 md:text-zinc-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-zinc-600 md:text-zinc-400">
                {product.rating} <span className="text-zinc-400 md:text-zinc-500">/ 5.0</span>
              </span>
            </div>

            {/* Price */}
            <div className="pt-2">
              <p className="text-4xl md:text-5xl font-bold text-zinc-900 md:text-white">
                {formatPrice(product.price)}
              </p>
              <p className="text-sm text-zinc-500 md:text-zinc-400 mt-1">
                Free shipping on orders over $50
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              {['Available', '1 Year', '2-3 Days'].map((value, i) => (
                <div
                  key={i}
                  className="bg-zinc-50 md:bg-white/5 p-4 rounded-2xl border border-zinc-100 md:border-white/10"
                >
                  <span className="text-xs text-zinc-500 md:text-zinc-400 block mb-0.5">
                    {i === 0 ? 'Stock' : i === 1 ? 'Warranty' : 'Delivery'}
                  </span>
                  <span className="text-sm font-semibold text-zinc-900 md:text-white">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href={`https://wa.me/2349032848688?text=${encodeURIComponent(
              `Hi, I'd like to order: ${product.name} - ${formatPrice(product.price)}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="mt-6 w-full py-4 bg-emerald-600 md:bg-emerald-500 text-white font-semibold text-base rounded-2xl hover:bg-emerald-700 md:hover:bg-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 active:scale-[0.98] group"
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImmersiveModal;
