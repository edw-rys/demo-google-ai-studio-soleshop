
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, Search, User as UserIcon, X, LogOut, ChevronRight } from 'lucide-react';
import { ViewState, User } from '../types';

interface HeaderProps {
  cartCount: number;
  user: User | null;
  onToggleCart: () => void;
  onNavigate: (view: ViewState) => void;
  onSearch: (query: string) => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, user, onToggleCart, onNavigate, onSearch, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    setIsMenuOpen(false);
  };

  const handleNavClick = (view: ViewState) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  const handleUserClick = () => {
    if (user) {
        setShowUserMenu(!showUserMenu);
    } else {
        onNavigate('LOGIN');
    }
  };

  return (
    <>
    <header className="sticky top-0 z-50 w-full bg-sole-bg/95 backdrop-blur-sm shadow-sm border-b border-sole-pink/20 transition-all h-16 md:h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="relative flex items-center justify-between h-full">
          
          {/* Left Section: Nav & Mobile Menu */}
          <div className="flex-1 flex items-center justify-start">
              {/* Mobile Menu Button */}
              <div className="flex items-center md:hidden">
                <button 
                  className="text-sole-text hover:text-sole-terra p-2 -ml-2"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <Menu size={24} />
                </button>
              </div>

              {/* Desktop Navigation - Now on the Left */}
              <nav className="hidden md:flex space-x-6">
                <button onClick={() => handleNavClick('HOME')} className="text-sole-text hover:text-sole-terra font-medium transition-colors text-sm uppercase tracking-wide">Inicio</button>
                <button onClick={() => handleNavClick('SHOP')} className="text-sole-text hover:text-sole-terra font-medium transition-colors text-sm uppercase tracking-wide">Tienda</button>
                <button onClick={() => handleNavClick('ROUTINE')} className="text-sole-text hover:text-sole-terra font-medium transition-colors text-sm uppercase tracking-wide">Rutinas</button>
                <button onClick={() => handleNavClick('ABOUT')} className="text-sole-text hover:text-sole-terra font-medium transition-colors text-sm uppercase tracking-wide">Nosotros</button>
                <button onClick={() => handleNavClick('CONTACT')} className="text-sole-text hover:text-sole-terra font-medium transition-colors text-sm uppercase tracking-wide">Contacto</button>
              </nav>
          </div>

          {/* Center Section: Logo (Absolute Positioning) */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="cursor-pointer" onClick={() => handleNavClick('HOME')}>
                <img 
                  src="https://greenlife.com.ec/wp-content/uploads/2020/08/Logo-Sole@2x.png" 
                  alt="Sole Skin & Beauty" 
                  className="h-8 md:h-14 w-auto object-contain"
                />
              </div>
          </div>

          {/* Right Section: Icons */}
          <div className="flex-1 flex items-center justify-end space-x-2 md:space-x-4">
            <form onSubmit={handleSearchSubmit} className="hidden md:flex relative">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar..." 
                className="pl-3 pr-8 py-1 rounded-full bg-white/50 border-none focus:ring-1 focus:ring-sole-terra text-sm w-32 focus:w-48 transition-all duration-300 placeholder-gray-400"
              />
              <button type="submit" className="absolute right-2 top-1.5 text-gray-400 hover:text-sole-terra">
                <Search size={16} />
              </button>
            </form>
            
            <div className="relative">
              <button 
                onClick={handleUserClick}
                className={`flex items-center gap-2 transition-colors p-2 ${user ? 'text-sole-terra font-bold' : 'text-sole-text hover:text-sole-terra'}`}
              >
                <UserIcon size={22} className="md:w-6 md:h-6" />
                {user && <span className="hidden sm:block text-sm truncate max-w-[100px]">{user.name.split(' ')[0]}</span>}
              </button>

              {/* User Dropdown */}
              {showUserMenu && user && (
                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 animate-fade-in border border-gray-100 z-50">
                    <div className="px-4 py-2 border-b border-gray-50">
                        <p className="text-xs text-gray-500">Conectada como</p>
                        <p className="font-bold text-sm text-gray-900 truncate">{user.email}</p>
                    </div>
                    <button 
                        onClick={() => {
                            onNavigate('ACCOUNT');
                            setShowUserMenu(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sole-terra"
                    >
                        Mi Cuenta
                    </button>
                    <button 
                        onClick={() => {
                            onNavigate('ACCOUNT');
                            setShowUserMenu(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sole-terra"
                    >
                        Mis Pedidos
                    </button>
                    <div className="border-t border-gray-50 mt-1">
                        <button 
                            onClick={() => {
                                onLogout();
                                setShowUserMenu(false);
                            }}
                            className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-2"
                        >
                            <LogOut size={14} /> Cerrar Sesión
                        </button>
                    </div>
                 </div>
              )}
            </div>

            <button 
              onClick={onToggleCart}
              className="text-sole-text hover:text-sole-terra transition-colors relative p-2"
            >
              <ShoppingBag size={22} className="md:w-6 md:h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-sole-terra text-white text-[10px] md:text-xs font-bold rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>

    {/* Mobile Menu Side Drawer (Persistent in DOM for animations) */}
    <div className={`fixed inset-0 z-[100] flex md:hidden transition-visibility duration-300 ${isMenuOpen ? 'visible' : 'invisible'}`}>
            {/* Backdrop */}
            <div 
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsMenuOpen(false)}
            ></div>
            
            {/* Drawer */}
            <div className={`relative w-[85%] max-w-[300px] bg-sole-bg h-full shadow-2xl p-6 flex flex-col overflow-y-auto transform transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}> 
            <div className="flex justify-between items-center mb-8 border-b border-sole-pink/20 pb-4">
                <span className="font-serif text-2xl font-bold text-gray-900">Menú</span>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-white rounded-full text-gray-500 hover:text-sole-terra transition-colors">
                    <X size={20} />
                </button>
            </div>

            <form onSubmit={handleSearchSubmit} className="relative w-full mb-8">
                <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar..." 
                    className="w-full pl-3 pr-8 py-3 rounded-xl bg-white border border-sole-pink/20 focus:ring-1 focus:ring-sole-terra text-sm outline-none"
                />
                <button type="submit" className="absolute right-3 top-3 text-gray-400">
                    <Search size={18} />
                </button>
            </form>

            <div className="space-y-2">
                <button onClick={() => handleNavClick('HOME')} className="w-full text-left py-3 px-4 rounded-xl hover:bg-white text-lg font-medium text-sole-text flex justify-between items-center">
                    Inicio <ChevronRight size={16} />
                </button>
                <button onClick={() => handleNavClick('SHOP')} className="w-full text-left py-3 px-4 rounded-xl hover:bg-white text-lg font-medium text-sole-text flex justify-between items-center">
                    Tienda <ChevronRight size={16} />
                </button>
                <button onClick={() => handleNavClick('ROUTINE')} className="w-full text-left py-3 px-4 rounded-xl hover:bg-white text-lg font-medium text-sole-text flex justify-between items-center">
                    Rutinas <ChevronRight size={16} />
                </button>
                <button onClick={() => handleNavClick('ABOUT')} className="w-full text-left py-3 px-4 rounded-xl hover:bg-white text-lg font-medium text-sole-text flex justify-between items-center">
                    Nosotros <ChevronRight size={16} />
                </button>
                <button onClick={() => handleNavClick('CONTACT')} className="w-full text-left py-3 px-4 rounded-xl hover:bg-white text-lg font-medium text-sole-text flex justify-between items-center">
                    Contacto <ChevronRight size={16} />
                </button>
            </div>

            <div className="mt-auto border-t border-sole-pink/20 pt-6">
                {user ? (
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-sole-terra rounded-full flex items-center justify-center text-white font-bold">
                                {user.name.charAt(0)}
                            </div>
                            <div>
                                <p className="text-sm text-gray-900 font-bold">{user.name}</p>
                                <p className="text-xs text-gray-500">{user.email}</p>
                            </div>
                        </div>
                        <button onClick={() => handleNavClick('ACCOUNT')} className="w-full bg-white text-sole-text py-3 rounded-xl font-bold border border-gray-200">Mi Cuenta</button>
                        <button onClick={onLogout} className="w-full bg-red-50 text-red-500 py-3 rounded-xl font-bold">Cerrar Sesión</button>
                    </div>
                ) : (
                    <button onClick={() => handleNavClick('LOGIN')} className="w-full bg-sole-terra text-white py-4 rounded-xl font-bold shadow-lg">
                        Iniciar Sesión
                    </button>
                )}
            </div>
            </div>
    </div>
    </>
  );
};
