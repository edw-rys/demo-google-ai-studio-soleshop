
import React from 'react';
import { Heart, Leaf, ShieldCheck, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-sole-bg animate-fade-in">
      
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
         <img 
            src="https://greenlife.com.ec/wp-content/uploads/2020/08/Mesa-de-trabajo-13.webp" 
            alt="About Sole" 
            className="w-full h-full object-cover opacity-90"
         />
         <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-center px-4">
             <div className="max-w-3xl animate-slide-in">
                 <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Nuestra Historia</span>
                 <h1 className="font-serif text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    La belleza que nace <br/> de la calma
                 </h1>
                 <p className="text-white/90 text-lg md:text-xl font-light">
                    Redefiniendo el cuidado de la piel para la mujer moderna.
                 </p>
             </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        
        {/* Story Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-32">
             <div className="space-y-6 text-center md:text-left">
                 <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
                     No es solo skincare, <br/> <span className="text-sole-terra">es amor propio.</span>
                 </h2>
                 <div className="w-20 h-1 bg-sole-terra rounded-full mx-auto md:mx-0"></div>
                 <p className="text-gray-600 leading-relaxed text-lg">
                     Fundada en 2024, Sole Skin & Beauty nació de una necesidad simple: encontrar productos que fueran efectivos pero gentiles, lujosos pero accesibles. 
                     En un mundo lleno de rutinas complejas, queríamos volver a lo esencial.
                 </p>
                 <p className="text-gray-600 leading-relaxed text-lg">
                     Nuestras fórmulas están diseñadas pensando en pieles jóvenes y semi-maduras que buscan prevención y luminosidad sin químicos agresivos.
                 </p>
             </div>
             <div className="relative">
                 <div className="absolute inset-0 bg-sole-pink rounded-3xl rotate-6 transform hidden md:block"></div>
                 <img 
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80" 
                    alt="Founder" 
                    className="relative rounded-3xl shadow-xl w-full object-cover h-[400px] md:h-[500px]"
                 />
             </div>
        </div>

        {/* Values */}
        <div className="mb-20 md:mb-32">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
                <p className="text-gray-500">Cada producto que creamos está guiado por cuatro pilares fundamentales.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
                {[
                    { icon: Leaf, title: "Natural", text: "Ingredientes de origen botánico, sin parabenos ni sulfatos." },
                    { icon: ShieldCheck, title: "Seguro", text: "Testeado dermatológicamente para pieles sensibles." },
                    { icon: Heart, title: "Cruelty Free", text: "Amamos a los animales. Nunca testeamos en ellos." },
                    { icon: Sparkles, title: "Eficaz", text: "Concentraciones activas que realmente transforman tu piel." }
                ].map((val, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center border border-sole-pink/10">
                        <div className="w-16 h-16 bg-sole-light rounded-full flex items-center justify-center mx-auto mb-6 text-sole-terra">
                            <val.icon size={32} />
                        </div>
                        <h3 className="font-serif font-bold text-xl text-gray-900 mb-3">{val.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{val.text}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Quote Parallax-ish */}
        <div className="relative bg-sole-terra rounded-[2rem] md:rounded-[3rem] overflow-hidden text-center py-16 md:py-24 px-6 md:px-8 text-white mb-16 md:mb-24">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
             <div className="relative z-10 max-w-3xl mx-auto">
                <p className="font-serif text-2xl md:text-5xl italic leading-snug mb-8">
                    "La verdadera belleza comienza el momento en que decides ser tú misma."
                </p>
                <span className="text-sm uppercase tracking-widest font-bold opacity-80">— Coco Chanel</span>
             </div>
        </div>

        {/* Team/Showcase */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-64 md:h-96">
            <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover rounded-2xl hover:opacity-90 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover rounded-2xl hover:opacity-90 transition-opacity translate-y-0 md:translate-y-8" />
            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover rounded-2xl hover:opacity-90 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover rounded-2xl hover:opacity-90 transition-opacity translate-y-0 md:translate-y-8" />
        </div>

      </div>
    </div>
  );
};
