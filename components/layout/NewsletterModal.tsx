
import React, { useState, useEffect } from 'react';
import { Mail, X } from 'lucide-react';

export const NewsletterModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('sole-newsletter-seen');
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000); 
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('sole-newsletter-seen', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-fade-in">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={handleClose}
      ></div>

      <div className="relative bg-sole-text rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
        
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-gray-400 hover:text-white transition-colors z-20"
        >
          <X size={20} />
        </button>

        <div className="p-10 text-center relative z-10">
             {isSubmitted ? (
                <div className="py-8 animate-fade-in">
                    <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                        <Mail size={32} />
                    </div>
                    <h3 className="font-serif text-3xl text-white font-bold mb-3">¡Bienvenida!</h3>
                    <p className="text-gray-300 text-lg">Tu código de descuento ha sido enviado a tu correo.</p>
                </div>
             ) : (
                <div className="animate-fade-in">
                    <div className="w-16 h-16 bg-sole-pink/20 text-sole-pink rounded-full flex items-center justify-center mx-auto mb-6">
                        <Mail size={32} />
                    </div>
                    <div className="inline-block bg-sole-pink text-sole-text text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                        Oferta Limitada
                    </div>
                    <h2 className="font-serif text-4xl font-bold text-white mb-2">10% OFF</h2>
                    <h3 className="text-xl text-white/90 mb-6 font-light">En tu primera compra</h3>
                    <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-xs mx-auto">
                        Únete al <b>Sole Beauty Club</b> y recibe rutinas personalizadas, acceso anticipado a ofertas y tu descuento de bienvenida.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input 
                            type="email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Tu correo electrónico" 
                            className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:bg-white/10 focus:border-sole-pink transition-all text-center"
                        />
                        <button 
                            type="submit"
                            className="w-full bg-sole-terra text-white py-4 rounded-xl font-bold hover:bg-white hover:text-sole-terra transition-all shadow-lg text-sm uppercase tracking-widest hover:shadow-sole-terra/20"
                        >
                            Obtener mi descuento
                        </button>
                    </form>
                    <button onClick={handleClose} className="mt-6 text-xs text-gray-600 underline hover:text-gray-400 transition-colors">
                        No gracias, prefiero pagar precio completo
                    </button>
                </div>
             )}
        </div>
      </div>
    </div>
  );
};
