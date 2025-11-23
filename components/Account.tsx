
import React, { useState } from 'react';
import { User, Order, ViewState } from '../types';
import { Package, User as UserIcon, LogOut, ChevronRight, MapPin, Calendar, ShoppingBag } from 'lucide-react';

interface AccountProps {
  user: User;
  orders: Order[];
  onLogout: () => void;
  onNavigate: (view: ViewState) => void;
}

export const Account: React.FC<AccountProps> = ({ user, orders, onLogout, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders'>('profile');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
  };

  const handleBackToOrders = () => {
    setSelectedOrder(null);
  };

  if (selectedOrder) {
      return (
          <div className="min-h-screen bg-sole-bg py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
              <div className="max-w-3xl mx-auto">
                  <button 
                    onClick={handleBackToOrders} 
                    className="flex items-center text-gray-600 hover:text-sole-terra mb-6 font-bold"
                  >
                      <ChevronRight className="rotate-180 mr-1" size={20} /> Volver a mis pedidos
                  </button>
                  
                  <div className="bg-white rounded-[2.5rem] p-8 shadow-xl">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-100 pb-8 gap-4">
                          <div>
                              <h2 className="font-serif text-3xl font-bold text-gray-900">Pedido #{selectedOrder.id.slice(-6)}</h2>
                              <p className="text-gray-500 flex items-center gap-2 mt-2">
                                  <Calendar size={16} /> {new Date(selectedOrder.date).toLocaleDateString()}
                              </p>
                          </div>
                          <span className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider ${
                              selectedOrder.status === 'delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                          }`}>
                              {selectedOrder.status === 'delivered' ? 'Entregado' : 'En proceso'}
                          </span>
                      </div>

                      <div className="space-y-6 mb-8">
                          {selectedOrder.items.map((item, idx) => (
                              <div key={idx} className="flex items-center gap-4">
                                  <div className="w-16 h-16 bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                  </div>
                                  <div className="flex-1">
                                      <h4 className="font-bold text-gray-900">{item.name}</h4>
                                      <p className="text-sm text-gray-500">Cant: {item.quantity}</p>
                                  </div>
                                  <p className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                              </div>
                          ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-6 rounded-2xl">
                          <div>
                              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                  <MapPin size={18} className="text-sole-terra" /> Dirección de Envío
                              </h4>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                  {selectedOrder.address.firstName} {selectedOrder.address.lastName}<br/>
                                  {selectedOrder.address.address}<br/>
                                  {selectedOrder.address.city}, CP {selectedOrder.address.zip}
                              </p>
                          </div>
                          <div className="flex flex-col justify-center items-end">
                               <div className="w-full max-w-xs space-y-2">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span>${selectedOrder.total.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Envío</span>
                                        <span>Gratis</span>
                                    </div>
                                    <div className="flex justify-between font-bold text-xl text-gray-900 border-t border-gray-200 pt-2">
                                        <span>Total</span>
                                        <span>${selectedOrder.total.toFixed(2)}</span>
                                    </div>
                               </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-sole-bg py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden min-h-[600px] flex flex-col md:flex-row">
            
            {/* Sidebar */}
            <div className="w-full md:w-1/4 bg-gray-50 p-8 border-r border-gray-100">
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-12 h-12 bg-sole-terra rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {user.name.charAt(0)}
                    </div>
                    <div>
                        <p className="font-bold text-gray-900 truncate max-w-[150px]">{user.name}</p>
                        <p className="text-xs text-gray-500 truncate max-w-[150px]">{user.email}</p>
                    </div>
                </div>

                <nav className="space-y-2">
                    <button 
                        onClick={() => setActiveTab('profile')}
                        className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 font-medium transition-colors ${activeTab === 'profile' ? 'bg-white shadow-sm text-sole-terra' : 'text-gray-600 hover:bg-white hover:text-gray-900'}`}
                    >
                        <UserIcon size={20} /> Mi Perfil
                    </button>
                    <button 
                        onClick={() => setActiveTab('orders')}
                        className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 font-medium transition-colors ${activeTab === 'orders' ? 'bg-white shadow-sm text-sole-terra' : 'text-gray-600 hover:bg-white hover:text-gray-900'}`}
                    >
                        <Package size={20} /> Mis Pedidos
                    </button>
                    <div className="pt-8">
                        <button 
                            onClick={onLogout}
                            className="w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 font-medium text-red-500 hover:bg-red-50 transition-colors"
                        >
                            <LogOut size={20} /> Cerrar Sesión
                        </button>
                    </div>
                </nav>
            </div>

            {/* Content */}
            <div className="flex-1 p-8 md:p-12">
                {activeTab === 'profile' && (
                    <div className="animate-fade-in">
                        <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">Mi Perfil</h2>
                        <div className="space-y-6 max-w-md">
                            <div>
                                <label className="block text-sm font-bold text-gray-500 mb-2">Nombre Completo</label>
                                <div className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-gray-900">
                                    {user.name}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-500 mb-2">Correo Electrónico</label>
                                <div className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-gray-900">
                                    {user.email}
                                </div>
                            </div>
                            <div className="pt-4">
                                <button className="text-sole-terra font-bold hover:underline">Cambiar contraseña</button>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'orders' && (
                    <div className="animate-fade-in">
                        <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">Mis Pedidos</h2>
                        {orders.length === 0 ? (
                            <div className="text-center py-20 bg-gray-50 rounded-3xl">
                                <ShoppingBag className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                                <p className="text-gray-500 mb-4">Aún no has realizado pedidos.</p>
                                <button 
                                    onClick={() => onNavigate('SHOP')}
                                    className="text-sole-terra font-bold hover:underline"
                                >
                                    Ir a la tienda
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {orders.map((order) => (
                                    <div key={order.id} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="font-bold text-lg text-gray-900">#{order.id.slice(-6)}</span>
                                                <span className={`px-2 py-0.5 rounded-full text-xs font-bold uppercase ${
                                                    order.status === 'delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                                }`}>
                                                    {order.status === 'delivered' ? 'Entregado' : 'En proceso'}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-500 flex items-center gap-2">
                                                <Calendar size={14} /> {new Date(order.date).toLocaleDateString()}
                                            </p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                {order.items.length} productos
                                            </p>
                                        </div>
                                        <div className="flex flex-col md:items-end gap-2 w-full md:w-auto">
                                            <span className="font-bold text-xl text-gray-900">${order.total.toFixed(2)}</span>
                                            <button 
                                                onClick={() => handleViewOrder(order)}
                                                className="bg-sole-bg text-sole-terra px-6 py-2 rounded-full font-bold text-sm hover:bg-sole-terra hover:text-white transition-colors w-full md:w-auto text-center"
                                            >
                                                Ver Detalles
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};
