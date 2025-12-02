
import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { Droplets, Sun, Moon, Sparkles, Plus, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface RoutineProps {
    onAddToCart: (product: Product) => void;
    onViewDetail: (product: Product) => void;
}

export const Routine: React.FC<RoutineProps> = ({ onAddToCart, onViewDetail }) => {
  // Mapping steps to specific Product IDs from constants
  const steps = [
    {
      id: 1,
      title: "Limpieza Profunda",
      desc: "Elimina impurezas y restos de maquillaje sin alterar la barrera natural de tu piel. El primer paso para un rostro radiante.",
      icon: Sparkles,
      productId: 8 // Gentle Foam Cleanser
    },
    {
      id: 2,
      title: "Tonificación y Balance",
      desc: "Equilibra el pH de tu piel y exfolia suavemente para revelar una textura más uniforme y luminosa.",
      icon: Droplets,
      productId: 4 // Glow Tonic
    },
    {
      id: 3,
      title: "Tratamiento Activo",
      desc: "Potencia tu piel con ingredientes concentrados. La Vitamina C es ideal para iluminar y proteger durante el día.",
      icon: Sun,
      productId: 7 // Vitamin C Serum
    },
    {
      id: 4,
      title: "Nutrición Nocturna",
      desc: "Aprovecha el descanso para reparar. Nuestras cremas sellan la hidratación y regeneran tejidos.",
      icon: Moon,
      productId: 2 // Super Collagen Mask
    }
  ];

  return (
    <div className="min-h-screen bg-sole-bg pb-20 animate-fade-in">
      
      {/* Improved Hero Banner */}
      <div className="relative h-[600px] overflow-hidden">
         <img 
            src="https://greenlife.com.ec/wp-content/uploads/2020/08/Mesa-de-trabajo-12.webp" 
            alt="Skincare Routine" 
            className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
         <div className="absolute inset-0 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="max-w-2xl text-white">
                 <span className="bg-sole-terra text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block animate-fade-in">
                    Guía Experta
                 </span>
                 <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-in">
                    El arte de la <br/> Rutina Facial
                 </h1>
                 <p className="text-xl md:text-2xl text-white/90 font-light mb-8 animate-slide-in" style={{animationDelay: '0.2s'}}>
                    4 pasos simples. Resultados transformadores. <br/>
                    Descubre el orden correcto para aplicar tus productos.
                 </p>
                 <button onClick={() => window.scrollTo({top: 700, behavior: 'smooth'})} className="bg-white text-sole-terra px-8 py-4 rounded-full font-bold hover:bg-sole-light transition-colors shadow-lg animate-fade-in" style={{animationDelay: '0.4s'}}>
                    Comenzar rutina
                 </button>
             </div>
         </div>
      </div>

      {/* Intro Text */}
      <RevealOnScroll className="max-w-4xl mx-auto px-4 py-20 text-center">
         <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">Menos es más</h2>
         <p className="text-lg text-gray-600 leading-relaxed">
            En Sole creemos que no necesitas 10 pasos para tener una piel increíble. 
            Nuestra filosofía se basa en la constancia y en elegir los ingredientes correctos 
            para tu tipo de piel. Aquí te presentamos nuestra rutina esencial validada por dermatólogos.
         </p>
      </RevealOnScroll>

      {/* Routine Steps */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-0 relative">
         {/* Vertical Line for Desktop */}
         <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-sole-terra/20 -translate-x-1/2 z-0"></div>

         {steps.map((step, idx) => {
            // Find the product associated with this step
            const product = PRODUCTS.find(p => p.id === step.productId);
            if (!product) return null;

            return (
               <RevealOnScroll key={step.id} className={`relative z-10 flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-24 py-16`}>
                  
                  {/* Text Content */}
                  <div className={`flex-1 space-y-4 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sole-light text-sole-terra mb-4 shadow-sm ${idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                         <step.icon size={32} />
                      </div>
                      <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
                         <span className="text-sole-terra block text-lg font-sans uppercase tracking-widest mb-1">Paso 0{step.id}</span>
                         {step.title}
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
                         {step.desc}
                      </p>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-sole-terra border-4 border-white shadow-md shrink-0 relative z-20"></div>

                  {/* Product Card Integration */}
                  <div className="flex-1 w-full md:w-auto">
                      <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-sole-pink/20 group max-w-sm mx-auto">
                         <div 
                            className="relative aspect-square rounded-xl overflow-hidden mb-4 cursor-pointer bg-gray-50"
                            onClick={() => onViewDetail(product)}
                         >
                            <img 
                               src={product.image} 
                               alt={product.name} 
                               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                                <span className="text-white font-bold">${product.price.toFixed(2)}</span>
                            </div>
                         </div>
                         <div className="text-center md:text-left">
                            <h3 
                                className="font-serif font-bold text-xl text-gray-900 mb-1 cursor-pointer hover:text-sole-terra"
                                onClick={() => onViewDetail(product)}
                            >
                                {product.name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">{product.category}</p>
                            
                            <div className="flex gap-2">
                                <button 
                                    onClick={() => onViewDetail(product)}
                                    className="flex-1 py-2 px-4 rounded-full border border-gray-200 text-gray-600 font-bold text-sm hover:border-sole-terra hover:text-sole-terra transition-colors"
                                >
                                    Ver detalles
                                </button>
                                <button 
                                    onClick={() => onAddToCart(product)}
                                    className="w-12 h-10 flex items-center justify-center bg-sole-terra text-white rounded-full hover:bg-sole-text transition-colors shadow-lg shadow-sole-terra/20"
                                >
                                    <Plus size={20} />
                                </button>
                            </div>
                         </div>
                      </div>
                  </div>

               </RevealOnScroll>
            );
         })}
      </div>
    </div>
  );
};
