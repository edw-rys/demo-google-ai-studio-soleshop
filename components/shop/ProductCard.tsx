
import React from 'react';
import { Star, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../../types';
import { useStore } from '../../context/StoreContext';
import { Link, useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  onViewDetail?: (product: Product) => void; // Optional compatibility prop
  onAddToCart?: (product: Product) => void; // Optional compatibility prop
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useStore();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
      e.preventDefault(); // Prevent navigation if clicked on button
      e.stopPropagation();
      addToCart(product);
  };

  const handleQuickView = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      navigate(`/product/${product.id}`);
  };

  return (
    <div className="group relative bg-white rounded-[2rem] p-4 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-sole-pink/10 flex flex-col h-full border border-transparent hover:border-sole-pink/30 overflow-hidden">
      
      {/* Image Container wrapped in Link for SEO */}
      <Link to={`/product/${product.id}`} className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-[#f8f8f8] mb-5 block">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[1px]">
            <button 
                onClick={handleQuickView}
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-sole-text hover:text-sole-terra hover:scale-110 transition-all shadow-xl transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 ease-out delay-75"
                title="Ver detalles"
            >
                <Eye size={22} />
            </button>
            <button 
                onClick={handleAddToCart}
                className="w-14 h-14 bg-sole-terra rounded-full flex items-center justify-center text-white hover:bg-[#d06e2b] hover:scale-110 transition-all shadow-xl transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 ease-out delay-150"
                title="Añadir al carrito"
            >
                <ShoppingBag size={22} />
            </button>
        </div>

        {/* Tags */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.category === 'Tratamientos' && (
                <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-bold text-sole-terra tracking-widest uppercase shadow-sm">
                    Best Seller
                </span>
            )}
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-grow px-2 relative z-10">
        <div className="mb-2 text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase hover:text-sole-terra transition-colors">{product.category}</div>
        
        <Link to={`/product/${product.id}`} className="block">
            <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-sole-terra transition-colors">
            {product.name}
            </h3>
        </Link>

        <div className="flex items-center gap-1 mb-4">
          <Star size={14} className="fill-sole-terra text-sole-terra" />
          <span className="text-sm font-medium text-gray-600">{product.rating}</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50 group-hover:border-sole-pink/20 transition-colors">
          <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button 
            onClick={handleAddToCart}
            className="text-sm font-bold text-gray-400 hover:text-sole-terra transition-colors border-b border-transparent hover:border-sole-terra pb-0.5 transform translate-x-0 group-hover:-translate-x-1 duration-300"
          >
             Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
