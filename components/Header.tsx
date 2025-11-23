
import React, { useState } from 'react';
import { ShoppingBag, Menu, Search, User as UserIcon, X, LogOut } from 'lucide-react';
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

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
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
    <header className="sticky top-0 z-50 w-full bg-sole-bg/95 backdrop-blur-sm shadow-sm border-b border-sole-pink/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              className="text-sole-text hover:text-sole-terra p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('HOME')}>
            <div className="flex flex-col items-center md:items-start">
              <span className="font-serif text-3xl font-bold text-red-900 tracking-wide">Sole</span>
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-sole-terra font-bold">Skin & Beauty</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => handleNavClick('HOME')} className="text-sole-text hover:text-sole-terra font-medium transition-colors">Inicio</button>
            <button onClick={() => handleNavClick('SHOP')} className="text-sole-text hover:text-sole-terra font-medium transition-colors">Tienda</button>
            <button onClick={() => handleNavClick('ABOUT')} className="text-sole-text hover:text-sole-terra font-medium transition-colors">Nosotros</button>
            <button onClick={() => handleNavClick('ROUTINE')} className="text-sole-text hover:text-sole-terra font-medium transition-colors">Rutina Facial</button>
            <button onClick={() => handleNavClick('CONTACT')} className="text-sole-text hover:text-sole-terra font-medium transition-colors">Contacto</button>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearchSubmit} className="hidden md:flex relative">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar..." 
                className="pl-3 pr-8 py-1 rounded-full bg-white/50 border-none focus:ring-1 focus:ring-sole-terra text-sm w-32 focus:w-48 transition-all duration-300"
              />
              <button type="submit" className="absolute right-2 top-1.5 text-gray-400 hover:text-sole-terra">
                <Search size={16} />
              </button>
            </form>
            
            <div className="relative">
              <button 
                onClick={handleUserClick}
                className={`flex items-center gap-2 transition-colors ${user ? 'text-sole-terra font-bold' : 'text-sole-text hover:text-sole-terra'}`}
              >
                <UserIcon size={24} />
                {user && <span className="hidden sm:block text-sm truncate max-w-[100px]">{user.name.split(' ')[0]}</span>}
              </button>

              {/* User Dropdown */}
              {showUserMenu && user && (
                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 animate-fade-in border border-gray-100">
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
              className="text-sole-text hover:text-sole-terra transition-colors relative p-1"
            >
              <ShoppingBag size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-sole-terra text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-sole-bg border-b border-sole-pink/20 shadow-lg py-4 px-4 flex flex-col space-y-4 animate-fade-in z-40">
          <form onSubmit={handleSearchSubmit} className="relative w-full mb-4">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar..." 
                className="w-full pl-3 pr-8 py-2 rounded-full bg-white/50 border-none focus:ring-1 focus:ring-sole-terra text-sm"
              />
              <button type="submit" className="absolute right-3 top-2 text-gray-400">
                <Search size={16} />
              </button>
          </form>
          <button onClick={() => handleNavClick('HOME')} className="text-left text-lg font-medium text-sole-text">Inicio</button>
          <button onClick={() => handleNavClick('SHOP')} className="text-left text-lg font-medium text-sole-text">Tienda</button>
          <button onClick={() => handleNavClick('ABOUT')} className="text-left text-lg font-medium text-sole-text">Nosotros</button>
          <button onClick={() => handleNavClick('ROUTINE')} className="text-left text-lg font-medium text-sole-text">Rutinas</button>
          <button onClick={() => handleNavClick('CONTACT')} className="text-left text-lg font-medium text-sole-text">Contacto</button>
          {user ? (
             <div className="border-t border-sole-pink/20 pt-4">
                <p className="text-sm text-sole-terra font-bold mb-2">Hola, {user.name}</p>
                <button onClick={() => handleNavClick('ACCOUNT')} className="text-left text-lg font-medium text-sole-text mb-2">Mi Cuenta</button>
                <button onClick={onLogout} className="text-left text-lg font-medium text-red-500">Cerrar Sesión</button>
             </div>
          ) : (
             <button onClick={() => handleNavClick('LOGIN')} className="text-left text-lg font-medium text-sole-terra">Iniciar Sesión</button>
          )}
        </div>
      )}
    </header>
  );
};
