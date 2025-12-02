
import React, { useState } from 'react';
import { ArrowRight, Mail, Lock, User as UserIcon, Loader2 } from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

export const Auth: React.FC = () => {
  const { login } = useStore();
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      login({
        name: isRegistering ? name : email.split('@')[0],
        email: email
      });
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sole-bg px-4 py-12 animate-fade-in">
      <div className="w-full max-w-5xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        <div className="hidden md:block w-1/2 relative">
          <img 
            src={isRegistering 
              ? "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80" 
              : "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
            } 
            alt="Auth Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-end p-12">
            <div className="text-white">
              <h2 className="font-serif text-4xl font-bold mb-4">
                {isRegistering ? "Únete a nuestra comunidad" : "Bienvenida de nuevo"}
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative">
          <button 
             onClick={() => navigate('/')}
             className="absolute top-8 right-8 text-gray-400 hover:text-sole-terra transition-colors font-bold text-sm"
          >
            Cerrar
          </button>

          <div className="max-w-sm mx-auto w-full">
            <div className="flex mb-8 border-b border-gray-100">
              <button 
                onClick={() => setIsRegistering(false)}
                className={`pb-4 px-4 text-lg font-bold transition-all relative ${!isRegistering ? 'text-sole-terra' : 'text-gray-400'}`}
              >
                Iniciar Sesión
                {!isRegistering && <span className="absolute bottom-0 left-0 w-full h-1 bg-sole-terra rounded-t-full"></span>}
              </button>
              <button 
                onClick={() => setIsRegistering(true)}
                className={`pb-4 px-4 text-lg font-bold transition-all relative ${isRegistering ? 'text-sole-terra' : 'text-gray-400'}`}
              >
                Registrarse
                {isRegistering && <span className="absolute bottom-0 left-0 w-full h-1 bg-sole-terra rounded-t-full"></span>}
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {isRegistering && (
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Nombre Completo</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      required 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border-transparent focus:bg-white focus:border-sole-terra/30 focus:ring-4 focus:ring-sole-terra/10 rounded-2xl transition-all outline-none" 
                      placeholder="María Pérez"
                    />
                    <UserIcon className="absolute left-4 top-4 text-gray-400" size={20} />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Correo Electrónico</label>
                <div className="relative">
                  <input 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-transparent focus:bg-white focus:border-sole-terra/30 focus:ring-4 focus:ring-sole-terra/10 rounded-2xl transition-all outline-none" 
                    placeholder="nombre@ejemplo.com"
                  />
                  <Mail className="absolute left-4 top-4 text-gray-400" size={20} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Contraseña</label>
                <div className="relative">
                  <input 
                    type="password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-transparent focus:bg-white focus:border-sole-terra/30 focus:ring-4 focus:ring-sole-terra/10 rounded-2xl transition-all outline-none" 
                    placeholder="••••••••"
                  />
                  <Lock className="absolute left-4 top-4 text-gray-400" size={20} />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-sole-terra text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#d06e2b] transition-all shadow-lg shadow-sole-terra/20 flex items-center justify-center gap-2 mt-4 disabled:opacity-70"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    {isRegistering ? 'Crear Cuenta' : 'Acceder'} <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
