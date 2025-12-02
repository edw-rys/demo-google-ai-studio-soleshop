
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Product, CartItem, User, Order, StoreContextType } from '../types';

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

  // Persistence
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

  // Cart Logic
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

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  // User Logic
  const login = (newUser: User) => setUser(newUser);
  const logout = () => setUser(null);

  // Order Logic
  const addOrder = (order: Order) => setOrders(prev => [order, ...prev]);

  const cartTotal = useMemo(() => cart.reduce((sum, item) => sum + (item.price * item.quantity), 0), [cart]);
  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  return (
    <StoreContext.Provider value={{
      cart, isCartOpen, toggleCart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount,
      user, login, logout,
      orders, addOrder
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
