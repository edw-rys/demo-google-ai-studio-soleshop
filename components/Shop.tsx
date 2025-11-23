
import React, { useState, useEffect, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';
import { ProductCard } from './ProductCard';
import { Filter, ChevronDown, ChevronUp, Search, SlidersHorizontal, Home } from 'lucide-react';

interface ShopProps {
  initialSearchQuery?: string;
  onViewDetail: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const Shop: React.FC<ShopProps> = ({ initialSearchQuery = '', onViewDetail, onAddToCart }) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  
  // Filters
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [sortOrder, setSortOrder] = useState<'default' | 'price-asc' | 'price-desc' | 'rating'>('default');
  
  // Mobile Filter State
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setSearchQuery(initialSearchQuery);
  }, [initialSearchQuery]);

  // Unique Categories
  const categories = useMemo(() => Array.from(new Set(PRODUCTS.map(p => p.category))), []);

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    }).sort((a, b) => {
      if (sortOrder === 'price-asc') return a.price - b.price;
      if (sortOrder === 'price-desc') return b.price - a.price;
      if (sortOrder === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [searchQuery, selectedCategories, priceRange, sortOrder]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-sole-bg animate-fade-in">
      
      {/* Breadcrumb Banner */}
      <div className="bg-sole-pink/10 py-8 border-b border-sole-pink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <Home size={14} /> <span>/</span> <span className="font-bold text-sole-terra">Tienda</span>
            </div>
            <h1 className="font-serif text-4xl font-bold text-gray-900">Catálogo Completo</h1>
        </div>
      </div>

      <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section Controls */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-end md:items-center gap-4 pb-6">
            <p className="text-gray-500">{filteredProducts.length} productos encontrados</p>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
                {/* Mobile Filter Toggle */}
                <button 
                    className="md:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700"
                    onClick={() => setShowMobileFilters(!showMobileFilters)}
                >
                    <SlidersHorizontal size={16} /> Filtros
                </button>

                {/* Sort Dropdown */}
                <div className="relative group ml-auto">
                    <select 
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as any)}
                    className="appearance-none bg-white border border-gray-200 text-gray-700 py-2 pl-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-sole-terra/50 cursor-pointer"
                    >
                        <option value="default">Ordenar por</option>
                        <option value="price-asc">Precio: Menor a Mayor</option>
                        <option value="price-desc">Precio: Mayor a Menor</option>
                        <option value="rating">Mejor Valorados</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-3 pointer-events-none text-gray-400" />
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
            
            {/* Sidebar Filters (Desktop & Mobile) */}
            <aside className={`
                md:w-64 flex-shrink-0 space-y-8
                ${showMobileFilters ? 'block' : 'hidden md:block'}
            `}>
                {/* Search in Sidebar */}
                <div className="relative">
                    <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Buscar productos..."
                        className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-sole-terra outline-none"
                    />
                    <Search size={16} className="absolute left-3 top-3 text-gray-400" />
                </div>

                {/* Categories */}
                <div>
                    <h3 className="font-serif font-bold text-lg text-gray-900 mb-4">Categorías</h3>
                    <div className="space-y-2">
                        {categories.map(cat => (
                            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedCategories.includes(cat) ? 'bg-sole-terra border-sole-terra' : 'border-gray-300 bg-white'}`}>
                                    {selectedCategories.includes(cat) && <span className="text-white text-xs font-bold">✓</span>}
                                </div>
                                <input 
                                    type="checkbox" 
                                    className="hidden"
                                    checked={selectedCategories.includes(cat)}
                                    onChange={() => handleCategoryChange(cat)}
                                />
                                <span className={`text-sm ${selectedCategories.includes(cat) ? 'text-sole-terra font-bold' : 'text-gray-600 group-hover:text-gray-900'}`}>
                                    {cat}
                                </span>
                                <span className="text-xs text-gray-400 ml-auto">
                                    ({PRODUCTS.filter(p => p.category === cat).length})
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Price Filter */}
                <div>
                    <h3 className="font-serif font-bold text-lg text-gray-900 mb-4">Precio</h3>
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                    </div>
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full accent-sole-terra h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    </div>
                </div>

                {/* Active Filters Display */}
                {(selectedCategories.length > 0 || searchQuery || priceRange[1] < 100) && (
                    <button 
                        onClick={() => {
                            setSelectedCategories([]);
                            setSearchQuery('');
                            setPriceRange([0, 100]);
                        }}
                        className="text-sm text-red-500 hover:text-red-700 underline decoration-red-500/30"
                    >
                        Limpiar filtros
                    </button>
                )}
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
                {currentProducts.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {currentProducts.map(product => (
                                <ProductCard 
                                    key={product.id} 
                                    product={product} 
                                    onViewDetail={onViewDetail}
                                    onAddToCart={onAddToCart}
                                />
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="mt-12 flex justify-center gap-2">
                                <button 
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:border-sole-terra hover:text-sole-terra disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:text-gray-600 transition-colors"
                                >
                                    <ChevronDown className="rotate-90" size={16} />
                                </button>
                                
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i + 1}
                                        onClick={() => setCurrentPage(i + 1)}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm transition-all ${
                                            currentPage === i + 1
                                                ? 'bg-sole-terra text-white shadow-lg shadow-sole-terra/30'
                                                : 'bg-white border border-gray-200 text-gray-600 hover:border-sole-terra hover:text-sole-terra'
                                        }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}

                                <button 
                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:border-sole-terra hover:text-sole-terra disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:text-gray-600 transition-colors"
                                >
                                    <ChevronDown className="-rotate-90" size={16} />
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-3xl">
                        <p className="text-xl text-gray-400 font-serif mb-2">No encontramos productos</p>
                        <p className="text-gray-500 text-sm">Intenta ajustar tus filtros de búsqueda</p>
                        <button 
                            onClick={() => {
                                setSelectedCategories([]);
                                setSearchQuery('');
                                setPriceRange([0, 100]);
                            }}
                            className="mt-6 text-sole-terra font-bold underline"
                        >
                            Ver todos los productos
                        </button>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};
