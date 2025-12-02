
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
  hidden?:boolean;
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

export type LegalSection = 'TERMS' | 'FAQ' | 'SHIPPING';

export type ViewState = 'HOME' | 'SHOP' | 'ROUTINE' | 'ABOUT' | 'CONTACT' | 'LEGAL' | 'LOGIN' | 'ACCOUNT' | 'CHECKOUT';

export interface User {
  name: string;
  email: string;
}

export interface StoreContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  toggleCart: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  
  orders: Order[];
  addOrder: (order: Order) => void;
}