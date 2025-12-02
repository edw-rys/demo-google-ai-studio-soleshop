
import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { ProductDetail } from './components/ProductDetail';
import { CartSidebar } from './components/CartSidebar';
import { Checkout } from './components/Checkout';
import { Footer } from './components/Footer';
import { Shop } from './components/Shop';
import { About } from './components/About';
import { Routine } from './components/Routine';
import { Contact } from './components/Contact';
import { Legal } from './components/Legal';
import { Auth } from './components/Auth';
import { Account } from './components/Account';
import { NewsletterModal } from './components/NewsletterModal';
import { Product, CartItem, ViewState, LegalSection, User, Order, Address } from './types';

const App: React.FC = () => {
  // View State
  const [view, setView] = useState<ViewState>('HOME');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [legalSection, setLegalSection] = useState<LegalSection>('TERMS');

  // User State
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('sole-user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Order State
  const [orders, setOrders] = useState<Order[]>(() => {
    const savedOrders = localStorage.getItem('sole-orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  // Cart State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('sole-cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Persist Data
  useEffect(() => {
    localStorage.setItem('sole-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (user) {
        localStorage.setItem('sole-user', JSON.stringify(user));
    } else {
        localStorage.removeItem('sole-user');
    }
  }, [user]);

  useEffect(() => {
      localStorage.setItem('sole-orders', JSON.stringify(orders));
  }, [orders]);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view, legalSection]); 

  // Cart Actions
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('sole-cart');
  };

  // Derived State
  const cartTotal = useMemo(() => cart.reduce((sum, item) => sum + (item.price * item.quantity), 0), [cart]);
  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  // Navigation Handlers
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setView('PRODUCT_DETAIL');
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setView('CHECKOUT');
  };

  const handleCheckoutComplete = (address: Address) => {
    const newOrder: Order = {
        id: Math.random().toString(36).substr(2, 9).toUpperCase(),
        date: new Date().toISOString(),
        items: [...cart],
        total: cartTotal,
        status: 'processing',
        address: address
    };

    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    
    setTimeout(() => {
        if (user) {
            setView('ACCOUNT');
        } else {
            setView('HOME');
        }
    }, 1000);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setView('SHOP');
  };

  const handleNavigate = (newView: ViewState) => {
    if (newView !== 'SHOP') {
        setSearchQuery('');
    }
    setView(newView);
  };

  const handleLegalNavigate = (section: LegalSection) => {
      setLegalSection(section);
      setView('LEGAL');
  };

  // Auth Handlers
  const handleLogin = (loggedInUser: User) => {
      setUser(loggedInUser);
      setView('HOME');
  };

  const handleLogout = () => {
      setUser(null);
      setView('HOME');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-sole-text bg-sole-bg selection:bg-sole-terra selection:text-white">
      <Header 
        cartCount={cartCount} 
        user={user}
        onToggleCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
        onSearch={handleSearch}
        onLogout={handleLogout}
      />

      <main className="flex-grow">
        {view === 'HOME' && (
            <Home 
                onNavigate={handleNavigate}
                onViewDetail={handleProductClick}
                onAddToCart={addToCart}
            />
        )}

        {view === 'SHOP' && (
            <Shop 
                initialSearchQuery={searchQuery}
                onViewDetail={handleProductClick}
                onAddToCart={addToCart}
            />
        )}

        {view === 'ABOUT' && <About />}
        {view === 'ROUTINE' && (
            <Routine 
                onAddToCart={addToCart}
                onViewDetail={handleProductClick}
            />
        )}
        {view === 'CONTACT' && <Contact />}
        {view === 'LEGAL' && <Legal activeSection={legalSection} />}
        
        {view === 'LOGIN' && (
            <Auth 
                onLogin={handleLogin}
                onCancel={() => setView('HOME')}
            />
        )}

        {view === 'ACCOUNT' && user && (
            <Account 
                user={user}
                orders={orders}
                onLogout={handleLogout}
                onNavigate={handleNavigate}
            />
        )}

        {view === 'PRODUCT_DETAIL' && selectedProduct && (
          <ProductDetail 
            product={selectedProduct} 
            onBack={() => setView('SHOP')} 
            onAddToCart={addToCart}
          />
        )}

        {view === 'CHECKOUT' && (
          <Checkout 
            cart={cart}
            total={cartTotal}
            onComplete={handleCheckoutComplete}
            onCancel={() => setView('HOME')}
          />
        )}
      </main>

      <Footer 
        onNavigate={handleNavigate}
        onLegalNavigate={handleLegalNavigate}
      />

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart} 
        onRemove={removeFromCart}
        onUpdateQty={updateQuantity}
        onCheckout={handleCheckout}
        total={cartTotal}
      />

      <NewsletterModal />
    </div>
  );
};

export default App;
