
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  benefits: string[];
  ingredients: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Address {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zip: string;
}

export interface Order {
  id: string;
  date: string; 
  items: CartItem[];
  total: number;
  status: 'processing' | 'shipped' | 'delivered';
  address: Address;
}

export type ViewState = 'HOME' | 'PRODUCT_DETAIL' | 'CHECKOUT' | 'SUCCESS' | 'SHOP' | 'ABOUT' | 'ROUTINE' | 'CONTACT' | 'LEGAL' | 'LOGIN' | 'ACCOUNT';

export type LegalSection = 'TERMS' | 'FAQ' | 'SHIPPING';

export interface User {
  name: string;
  email: string;
}

export interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  toggleCart: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}
