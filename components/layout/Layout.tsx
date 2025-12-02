
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { NewsletterModal } from './NewsletterModal';
import { CartSidebar } from '../shop/CartSidebar';
import { useStore } from '../../context/StoreContext';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
    const { isCartOpen, toggleCart, cart, removeFromCart, updateQuantity, cartTotal } = useStore();

    return (
        <div className="min-h-screen flex flex-col font-sans text-sole-text bg-sole-bg selection:bg-sole-terra selection:text-white">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <CartSidebar 
                isOpen={isCartOpen} 
                onClose={toggleCart} 
                cart={cart}
                onRemove={removeFromCart}
                onUpdateQty={updateQuantity}
                total={cartTotal}
            />
            <NewsletterModal />
        </div>
    );
};
