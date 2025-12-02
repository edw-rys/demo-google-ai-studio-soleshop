
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from './Hero';
import { ProductCard } from '../shop/ProductCard';
import { RevealOnScroll } from '../layout/RevealOnScroll';
import { ArrowRight, Star, Sparkles, Droplets, ShieldCheck, Sun, Zap, Clock } from 'lucide-react';
import { PRODUCTS } from '../../constants';
import { useStore } from '../../context/StoreContext';
import { Link, useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
    const { addToCart } = useStore();
    const navigate = useNavigate();
    const spotlightProduct = PRODUCTS.find(p => p.id === 2) || PRODUCTS[1]; 
    const trendingProducts = PRODUCTS.slice(0, 3); 

    return (
        <div className="animate-fade-in overflow-hidden">
            <Helmet>
                <title>Inicio | Sole Skin & Beauty</title>
                <meta name="description" content="Descubre productos de cuidado de la piel conscientes y efectivos para resaltar tu belleza natural. Envíos a todo el país." />
            </Helmet>

            <Hero />

            {/* Trust Marquee */}
            <div className="bg-white text-sole-text py-3 border-b border-sole-pink/20 overflow-hidden relative whitespace-nowrap">
                <div className="inline-block animate-[slideIn_40s_linear_infinite]">
                    {[...Array(8)].map((_, i) => (
                        <span key={i} className="mx-8 font-bold text-xs tracking-[0.2em] uppercase inline-flex items-center gap-3 text-gray-800">
                            <Sparkles size={14} className="text-sole-terra" /> COMPRA $50 
                            <span className="w-1 h-1 rounded-full bg-sole-pink"></span> Y ENVÍO GRATIS
                            <span className="w-1 h-1 rounded-full bg-sole-pink"></span> 
                        </span>
                    ))}
                </div>
            </div>
            
            {/* Shop by Concern */}
            <RevealOnScroll className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full text-sole-terra font-bold text-xs uppercase tracking-widest mb-4 inline-block shadow-sm">
                        Diagnóstico Rápido
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        ¿Qué necesita tu rostro hoy?
                    </h2>
                    <p className="text-gray-600 text-lg font-light">
                        Soluciones específicas para cada necesidad de tu piel.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {[
                        { title: "Hidratación", icon: Droplets, color: "bg-[#ffbfbf]", img: "https://greenlife.com.ec/wp-content/uploads/2020/08/Hidratacion.png" },
                        { title: "Anti-Edad", icon: Clock, color: "bg-[#f8a3c0]", img: "https://greenlife.com.ec/wp-content/uploads/2020/08/Anti-edad.png" },
                        { title: "Poros / Acné", icon: ShieldCheck, color: "bg-[#ebdad3]", img: "https://greenlife.com.ec/wp-content/uploads/2020/08/Poros-Acne.png" },
                        { title: "Luminosidad", icon: Sun, color: "bg-[#ebdad3]", img: "https://greenlife.com.ec/wp-content/uploads/2020/08/Luminosidad.png" },
                        { title: "Manchas", icon: Sparkles, color: "bg-[#ffbfbf]", img: "https://greenlife.com.ec/wp-content/uploads/2020/08/Manchas.png" }
                    ].map((item, idx) => (
                        <Link 
                            key={idx} 
                            to="/shop"
                            className="group relative h-64 rounded-[2rem] overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
                        >
                            <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className={`absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-300 ${item.color} mix-blend-multiply`}></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-sole-terra mb-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg">
                                    <item.icon size={20} />
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-white drop-shadow-md">{item.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </RevealOnScroll>

            {/* Trending Section */}
            <div className="bg-sole-pink py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-sole-terra/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <RevealOnScroll>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                            <div>
                                <div className="flex items-center gap-2 text-sole-terra font-bold mb-2 bg-white/80 w-fit px-3 py-1 rounded-full backdrop-blur-sm">
                                    <Zap size={16} fill="currentColor" /> TENDENCIA
                                </div>
                                <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">Lo más Viral</h2>
                                <p className="text-white/90 text-lg">Los favoritos de Instagram y TikTok esta semana.</p>
                            </div>
                            <Link 
                                to="/shop"
                                className="bg-white text-sole-terra px-8 py-3 rounded-full font-bold hover:bg-sole-terra hover:text-white transition-all shadow-lg flex items-center gap-2"
                            >
                                Ver todo <ArrowRight size={18} />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {trendingProducts.map((product, idx) => (
                                <div key={product.id} className={`transform transition-all duration-500 hover:-translate-y-2 ${idx === 1 ? 'md:-mt-8' : ''}`}>
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </div>

            {/* Science Section */}
            <RevealOnScroll className="py-32 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-[3rem] my-12 shadow-sm border border-sole-pink/10">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-sole-light rounded-full opacity-30 blur-3xl animate-pulse"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop" 
                                alt="Science" 
                                className="relative z-10 w-full rounded-[2.5rem] shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-full shadow-xl z-20 animate-bounce-slow border border-sole-pink/20">
                                <div className="text-center">
                                    <span className="block text-3xl font-bold text-sole-terra">95%</span>
                                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Natural</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-8">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Ciencia Botánica <br/> para tu Rostro
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Combinamos lo mejor de la naturaleza con la eficacia clínica. Fórmulas limpias, libres de parabenos y diseñadas para respetar el microbioma de tu piel.
                        </p>
                        
                        <div className="space-y-6">
                            {[
                                { title: "Ácido Hialurónico", desc: "Hidratación multicapa instantánea." },
                                { title: "Niacinamida", desc: "Mejora la textura y reduce manchas." },
                                { title: "Péptidos", desc: "Estimula la producción natural de colágeno." }
                            ].map((ing, i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-sole-light/50 flex items-center justify-center text-sole-terra shrink-0 group-hover:bg-sole-terra group-hover:text-white transition-colors">
                                        <Sparkles size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-serif font-bold text-xl text-gray-900">{ing.title}</h4>
                                        <p className="text-gray-500">{ing.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link 
                            to="/about"
                            className="mt-8 border-b-2 border-sole-terra text-sole-terra font-bold pb-1 hover:text-[#d06e2b] hover:border-[#d06e2b] transition-colors inline-block"
                        >
                            Conoce nuestra filosofía
                        </Link>
                    </div>
                </div>
            </RevealOnScroll>

            {/* Spotlight Product */}
            <div className="bg-sole-light/30 py-24 overflow-hidden mb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">El Favorito del Mes</h2>
                        <p className="text-gray-600">Miles de mujeres han transformado su rutina nocturna con nuestra mascarilla de colágeno.</p>
                    </div>

                    <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-sole-pink/10 flex flex-col md:flex-row items-center gap-12 border border-white/50 backdrop-blur-sm">
                        <div className="w-full md:w-1/2 order-2 md:order-1 space-y-6">
                            <div className="inline-block bg-sole-pink/20 text-sole-terra px-4 py-1 rounded-full font-bold text-xs uppercase tracking-wider">
                                Best Seller
                            </div>
                            <h3 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
                                {spotlightProduct.name}
                            </h3>
                            <div className="flex gap-1 text-yellow-400">
                                {[...Array(5)].map((_,i) => <Star key={i} size={20} fill="currentColor" />)}
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Despierta con una piel visiblemente más elástica, suave y luminosa. Su fórmula de memoria de forma se adapta a tu rostro para una absorción máxima.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button 
                                    onClick={() => addToCart(spotlightProduct)}
                                    className="bg-sole-terra text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#d06e2b] transition-all shadow-lg shadow-sole-terra/20"
                                >
                                    Comprar por ${spotlightProduct.price}
                                </button>
                                <button 
                                    onClick={() => navigate(`/product/${spotlightProduct.id}`)}
                                    className="px-10 py-4 rounded-full font-bold text-lg text-gray-600 border border-gray-300 hover:border-sole-terra hover:text-sole-terra transition-all bg-white"
                                >
                                    Ver Detalles
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
                             <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px]">
                                 <div className="absolute inset-0 bg-sole-pink/20 rounded-full animate-pulse"></div>
                                 <img 
                                    src={spotlightProduct.image} 
                                    alt="Spotlight" 
                                    className="absolute inset-0 w-full h-full object-cover rounded-full border-8 border-white shadow-2xl animate-[float_6s_ease-in-out_infinite]" 
                                 />
                                 <div className="absolute top-10 right-0 bg-sole-terra text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl shadow-lg rotate-12 border-4 border-white">
                                     ${spotlightProduct.price}
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
