import React, { useState } from 'react';
import { Star, Check, ChevronLeft, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart }) => {
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients'>('description');

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-8 flex items-center text-gray-600 hover:text-sole-terra transition-colors font-medium"
        >
          <ChevronLeft size={20} className="mr-1" />
          Volver a la tienda
        </button>

        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-sole-pink/10 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Product Image */}
            <div className="relative h-96 md:h-[600px] bg-gray-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>

            {/* Product Info */}
            <div className="p-8 md:p-16 flex flex-col justify-center bg-white">
              <div className="flex items-center space-x-2 text-sole-terra font-bold tracking-wider text-sm uppercase mb-4">
                <span>{product.category}</span>
                <span>&bull;</span>
                <span className="flex items-center"><Star size={14} className="fill-current mr-1"/> {product.rating} Rating</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {product.name}
              </h1>
              
              <p className="text-2xl font-light text-gray-600 mb-8">
                ${product.price.toFixed(2)} USD
              </p>

              <div className="prose prose-stone mb-8">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              {/* Tabs */}
              <div className="mb-8 border-b border-gray-100">
                <div className="flex space-x-8">
                  <button 
                    onClick={() => setActiveTab('description')}
                    className={`pb-4 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${activeTab === 'description' ? 'border-sole-terra text-sole-terra' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
                  >
                    Beneficios
                  </button>
                  <button 
                    onClick={() => setActiveTab('ingredients')}
                    className={`pb-4 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${activeTab === 'ingredients' ? 'border-sole-terra text-sole-terra' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
                  >
                    Ingredientes
                  </button>
                </div>
              </div>

              <div className="min-h-[100px] mb-10">
                {activeTab === 'description' ? (
                   <ul className="space-y-3">
                     {product.benefits.map((benefit, idx) => (
                       <li key={idx} className="flex items-start text-gray-600">
                         <div className="mr-3 mt-1 bg-sole-light p-1 rounded-full">
                            <Check size={12} className="text-sole-terra" />
                         </div>
                         {benefit}
                       </li>
                     ))}
                   </ul>
                ) : (
                  <p className="text-gray-600 italic leading-relaxed bg-gray-50 p-4 rounded-xl">
                    {product.ingredients}
                  </p>
                )}
              </div>

              <div className="mt-auto">
                <button 
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-sole-terra text-white py-5 px-8 rounded-full font-bold text-lg hover:bg-[#d06e2b] transition-all transform hover:scale-[1.01] hover:shadow-lg flex items-center justify-center gap-3"
                >
                  <ShoppingBag />
                  Añadir al Carrito - ${product.price.toFixed(2)}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};