
import React, { useState, useEffect } from 'react';
import { Leaf, ArrowRight, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface HeroProps {
    onAddToCart: (product: Product) => void;
}

const HERO_SLIDES = [
  {
    id: 1,
    title: "Glow Natural",
    subtitle: "Tu piel, más radiante que nunca con el poder de la vitamina C.",
    productId: 7, // Vitamin C Radiance Serum
    color: "bg-[#ebdad3]", // Default beige
    accent: "#e48035",
  },
  {
    id: 2,
    title: "Hidratación Pura",
    subtitle: "Ácido hialurónico concentrado para una piel jugosa y rellena.",
    productId: 1, // Botulcare
    color: "bg-[#dbeafe]", // Light blueish
    accent: "#3b82f6",
  },
  {
    id: 3,
    title: "Calma Total",
    subtitle: "Repara tu barrera cutánea mientras duermes con colágeno marino.",
    productId: 2, // Collagen Mask
    color: "bg-[#fce7f3]", // Pinkish
    accent: "#ec4899",
  }
];

export const Hero: React.FC<HeroProps> = ({ onAddToCart }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[activeSlide];
  const currentProduct = PRODUCTS.find(p => p.id === currentSlide.productId) || PRODUCTS[0];

  return (
    <section className="relative w-full h-[700px] md:h-[800px] overflow-hidden bg-sole-bg flex items-center justify-center">
      
      {/* Nature Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         {/* Rotating Leaves Ring */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] rounded-full border-[1px] border-sole-terra/10 animate-spin-slow">
            <Leaf className="absolute top-0 left-1/2 text-sole-terra/20 w-12 h-12 -translate-x-1/2 -translate-y-6 rotate-0" />
            <Leaf className="absolute bottom-0 left-1/2 text-sole-terra/20 w-12 h-12 -translate-x-1/2 translate-y-6 rotate-180" />
            <Leaf className="absolute left-0 top-1/2 text-sole-terra/20 w-12 h-12 -translate-x-6 -translate-y-1/2 -rotate-90" />
            <Leaf className="absolute right-0 top-1/2 text-sole-terra/20 w-12 h-12 translate-x-6 -translate-y-1/2 rotate-90" />
         </div>

         {/* Floating Leaves */}
         <Leaf className="absolute top-20 left-[5%] text-green-800/20 w-16 h-16 animate-float" />
         <Leaf className="absolute bottom-32 right-[10%] text-green-700/20 w-20 h-20 animate-float-delayed rotate-45" />
         <Leaf className="absolute top-1/3 right-[5%] text-green-600/10 w-10 h-10 animate-float rotate-12" />
         <Leaf className="absolute bottom-10 left-[20%] text-sole-terra/20 w-14 h-14 animate-float-delayed -rotate-12" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 h-full">
        
        {/* Left: Text Content */}
        <div className="text-center md:text-left order-2 md:order-1">
            <div key={currentSlide.id + "-text"} className="animate-fade-in">
                <span className="inline-block px-4 py-1 rounded-full bg-white/60 backdrop-blur-sm text-sole-terra font-bold text-xs uppercase tracking-widest mb-6 shadow-sm border border-white">
                    Novedades Botánicas
                </span>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
                    {currentSlide.title}
                </h1>
                <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed max-w-lg mx-auto md:mx-0">
                    {currentSlide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start">
                    <button 
                        onClick={() => onAddToCart(currentProduct)}
                        className="bg-sole-terra text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl shadow-sole-terra/30 hover:bg-[#d06e2b] hover:-translate-y-1 flex items-center gap-3"
                    >
                        Comprar Ahora <ShoppingBag size={20} />
                    </button>
                    <p className="font-serif text-2xl font-bold text-gray-900 animate-fade-in">
                        ${currentProduct.price.toFixed(2)}
                    </p>
                </div>
            </div>
            
            {/* Indicators */}
            <div className="flex items-center justify-center md:justify-start gap-3 mt-16">
                {HERO_SLIDES.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveSlide(idx)}
                        className={`h-2 rounded-full transition-all duration-500 ${idx === activeSlide ? 'w-8 bg-sole-terra' : 'w-2 bg-gray-400/50 hover:bg-sole-terra/50'}`}
                    />
                ))}
            </div>
        </div>

        {/* Right: Circular Product Showcase */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-full">
             {HERO_SLIDES.map((slide, index) => {
                 const product = PRODUCTS.find(p => p.id === slide.productId);
                 if (!product) return null;

                 return (
                    <div 
                        key={slide.id}
                        className={`absolute transition-all duration-1000 ease-in-out transform ${
                            index === activeSlide 
                            ? 'opacity-100 scale-100 translate-x-0 rotate-0 pointer-events-auto' 
                            : 'opacity-0 scale-75 translate-x-20 rotate-6 pointer-events-none'
                        }`}
                    >
                        {/* Large Background Circle */}
                        <div className={`relative w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-full transition-colors duration-1000 ${slide.color} shadow-2xl flex items-center justify-center`}>
                             
                             {/* Inner Rotating Rings */}
                             <div className="absolute inset-4 border border-white/40 rounded-full animate-spin-slow"></div>
                             <div className="absolute inset-12 border border-white/20 rounded-full animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
                             
                             {/* Product Image */}
                             <img 
                                src={product.image} 
                                alt={product.name} 
                                className="relative z-10 w-[60%] h-[60%] object-contain drop-shadow-2xl animate-float"
                             />

                             {/* Floating Product Name Badge */}
                             <div className="absolute -bottom-4 bg-white/90 backdrop-blur-md py-3 px-6 rounded-2xl shadow-lg animate-bounce-slow border border-white/50 hidden md:block">
                                 <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Producto Estrella</p>
                                 <p className="text-lg font-serif font-bold text-gray-900">{product.name}</p>
                             </div>
                        </div>
                    </div>
                 );
             })}
        </div>

      </div>
    </section>
  );
};
