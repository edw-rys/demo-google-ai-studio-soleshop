import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQty: (id: number, qty: number) => void;
  onCheckout: () => void;
  total: number;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ 
  isOpen, 
  onClose, 
  cart, 
  onRemove, 
  onUpdateQty, 
  onCheckout,
  total
}) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-[70] transform transition-transform duration-500 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="px-6 py-6 border-b border-gray-100 flex justify-between items-center bg-sole-bg/30">
          <h2 className="font-serif text-2xl font-bold text-gray-900">Tu Carrito</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
            <X size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                <X size={40} className="opacity-20" />
              </div>
              <p className="text-lg font-medium">Tu carrito está vacío</p>
              <button onClick={onClose} className="text-sole-terra font-bold hover:underline">
                Comenzar a comprar
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 animate-slide-in">
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gray-50 border border-gray-100">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex items-center border border-gray-200 rounded-full px-2 py-1 bg-white">
                      <button 
                        onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="p-1 hover:text-sole-terra disabled:opacity-30 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="mx-3 text-sm font-bold w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                        className="p-1 hover:text-sole-terra transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <span className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                        <button 
                            onClick={() => onRemove(item.id)}
                            className="text-xs text-red-400 hover:text-red-600 flex items-center gap-1 transition-colors"
                        >
                            <Trash2 size={12} /> Eliminar
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-gray-100 p-6 bg-gray-50/50 space-y-4">
             <div className="flex justify-between items-center text-gray-600">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
             </div>
             <div className="flex justify-between items-center text-xl font-serif font-bold text-gray-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
             </div>
             <button 
                onClick={() => {
                    onClose();
                    onCheckout();
                }}
                className="w-full bg-sole-terra text-white py-4 rounded-full font-bold text-lg hover:bg-[#d06e2b] transition-all shadow-lg shadow-sole-terra/20"
             >
                Finalizar Compra
             </button>
          </div>
        )}
      </div>
    </>
  );
};