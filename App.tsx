
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { StoreProvider } from './context/StoreContext';
import { Layout } from './components/layout/Layout';
import { Home } from './components/website/Home';
import { Shop } from './components/shop/Shop';
import { About } from './components/website/About';
import { Routine } from './components/website/Routine';
import { Contact } from './components/website/Contact';
import { Legal } from './components/website/Legal';
import { Auth } from './components/users/Auth';
import { Account } from './components/users/Account';
import { ProductDetail } from './components/shop/ProductDetail';
import { Checkout } from './components/shop/Checkout';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <StoreProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="about" element={<About />} />
              <Route path="routine" element={<Routine />} />
              <Route path="contact" element={<Contact />} />
              <Route path="legal" element={<Legal />} />
              <Route path="account" element={<Account />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
            <Route path="/login" element={<Auth />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </StoreProvider>
    </HelmetProvider>
  );
};

export default App;
