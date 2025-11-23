import React from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  { title: "Rutina Facial", color: "bg-sole-pink", img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=400&q=80" },
  { title: "Serums y Aceites", color: "bg-sole-light", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80" },
  { title: "Tratamientos", color: "bg-[#e8d4cd]", img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=400&q=80" }
];

export const Categories: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <div 
            key={idx} 
            className={`${cat.color} rounded-3xl p-8 h-64 sm:h-80 relative overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow`}
          >
             <div className="relative z-10 h-full flex flex-col justify-between">
                <h3 className="font-serif text-3xl font-bold text-gray-900">{cat.title}</h3>
                <button className="self-start bg-white/80 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 group-hover:bg-white transition-colors">
                  Explorar <ArrowRight size={14} />
                </button>
             </div>
             <img 
               src={cat.img} 
               alt={cat.title} 
               className="absolute bottom-0 right-0 w-48 h-48 object-contain transform translate-x-8 translate-y-8 rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0"
             />
          </div>
        ))}
      </div>
    </section>
  );
};