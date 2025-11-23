
import React, { useState, useEffect } from 'react';
import { CartItem, Address } from '../types';
import { CheckCircle, Loader2, CreditCard, Lock } from 'lucide-react';

interface CheckoutProps {
  cart: CartItem[];
  total: number;
  onComplete: (address: Address) => void;
  onCancel: () => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ cart, total, onComplete, onCancel }) => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
  
  // Form State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

  // Simulate processing
  useEffect(() => {
    if (step === 'processing') {
        const timer = setTimeout(() => {
            setStep('success');
        }, 3000);
        return () => clearTimeout(timer);
    }
    if (step === 'success') {
        const timer = setTimeout(() => {
            onComplete({
                firstName,
                lastName,
                address,
                city,
                zip
            });
        }, 3000);
        return () => clearTimeout(timer);
    }
  }, [step, onComplete, firstName, lastName, address, city, zip]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStep('processing');
  };

  if (step === 'success') {
      return (
          <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center animate-fade-in bg-white">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle size={48} className="text-green-600" />
              </div>
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">¡Gracias por tu compra!</h2>
              <p className="text-gray-600 text-lg mb-8">Tu pedido ha sido confirmado y está en camino.</p>
              <p className="text-sm text-gray-400">Redireccionando...</p>
          </div>
      );
  }

  if (step === 'processing') {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-white">
            <Loader2 size={64} className="text-sole-terra animate-spin mb-6" />
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">Procesando pago...</h2>
            <p className="text-gray-600">Por favor espera, estamos confirmando tus datos.</p>
        </div>
      );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white animate-fade-in">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Order Summary */}
        <div className="lg:order-2 bg-gray-50 p-8 rounded-3xl h-fit">
          <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Resumen de tu pedido</h3>
          <div className="space-y-4 mb-6 max-h-96 overflow-y-auto custom-scrollbar">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-white border border-gray-200">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">Cant: {item.quantity}</p>
                  </div>
                </div>
                <span className="font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 pt-4 space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Envío</span>
              <span>Gratis</span>
            </div>
            <div className="flex justify-between text-xl font-bold text-gray-900 pt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Checkout Form */}
        <div className="lg:order-1">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">Información de Envío y Pago</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                <input 
                  required 
                  type="text" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-sole-terra focus:border-transparent transition-all text-gray-900" 
                  placeholder="Tu nombre" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Apellido</label>
                <input 
                  required 
                  type="text" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-sole-terra focus:border-transparent transition-all text-gray-900" 
                  placeholder="Tu apellido" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Dirección de envío</label>
              <input 
                required 
                type="text" 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-sole-terra focus:border-transparent transition-all text-gray-900" 
                placeholder="Calle, número, depto..." 
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ciudad</label>
                <input 
                  required 
                  type="text" 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-sole-terra focus:border-transparent transition-all text-gray-900" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Código Postal</label>
                <input 
                  required 
                  type="text" 
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-sole-terra focus:border-transparent transition-all text-gray-900" 
                />
              </div>
            </div>

            <div className="pt-8">
              <div className="flex items-center gap-2 mb-6">
                 <CreditCard className="text-sole-terra" />
                 <h3 className="font-serif text-xl font-bold text-gray-900">Pago Seguro</h3>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-4">
                 <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Número de Tarjeta</label>
                    <div className="relative">
                        <input required type="text" placeholder="0000 0000 0000 0000" className="w-full px-4 py-3 pl-12 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-sole-terra transition-all font-mono text-gray-900" />
                        <Lock size={16} className="absolute left-4 top-4 text-gray-400" />
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Expiración</label>
                        <input required type="text" placeholder="MM/YY" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-sole-terra transition-all font-mono text-center text-gray-900" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">CVV</label>
                        <input required type="text" placeholder="123" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-sole-terra transition-all font-mono text-center text-gray-900" />
                    </div>
                 </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
               <button type="button" onClick={onCancel} className="w-full md:w-auto px-8 py-4 border border-gray-300 text-gray-700 font-bold rounded-full hover:bg-gray-50 transition-colors">
                 Volver
               </button>
               <button type="submit" className="flex-1 bg-sole-terra text-white py-4 rounded-full font-bold text-lg hover:bg-[#d06e2b] transition-all shadow-lg">
                 Pagar ${total.toFixed(2)}
               </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
