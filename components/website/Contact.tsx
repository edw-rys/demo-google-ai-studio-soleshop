
import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { RevealOnScroll } from '../layout/RevealOnScroll';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-sole-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll className="text-center mb-12 md:mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">Hablemos</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">Estamos aquí para responder tus dudas sobre piel, envíos o simplemente para saludar.</p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <RevealOnScroll delay={200} className="bg-sole-pink/20 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem]">
             <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-8">Información de contacto</h2>
             <div className="space-y-8">
                <div className="flex items-start gap-4">
                   <div className="bg-white p-3 rounded-full text-sole-terra shadow-sm shrink-0">
                      <Mail size={24} />
                   </div>
                   <div>
                      <h3 className="font-bold text-gray-900">Email</h3>
                      <p className="text-gray-600 break-all">hola@soleskin.com</p>
                      <p className="text-gray-600 break-all">soporte@soleskin.com</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="bg-white p-3 rounded-full text-sole-terra shadow-sm shrink-0">
                      <Phone size={24} />
                   </div>
                   <div>
                      <h3 className="font-bold text-gray-900">Teléfono</h3>
                      <p className="text-gray-600">+52 (55) 1234-5678</p>
                      <p className="text-gray-500 text-sm">Lun-Vie de 9am a 6pm</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="bg-white p-3 rounded-full text-sole-terra shadow-sm shrink-0">
                      <MapPin size={24} />
                   </div>
                   <div>
                      <h3 className="font-bold text-gray-900">Oficina</h3>
                      <p className="text-gray-600">Av. Reforma 123, Piso 10</p>
                      <p className="text-gray-600">Ciudad de México, CDMX</p>
                   </div>
                </div>
             </div>
             <div className="mt-12">
                <img 
                   src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80" 
                   alt="Office" 
                   className="w-full h-48 md:h-64 object-cover rounded-2xl opacity-80 hover:opacity-100 transition-opacity"
                />
             </div>
          </RevealOnScroll>

          <RevealOnScroll delay={400} className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-sole-pink/10">
             <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-8">Envíanos un mensaje</h2>
             <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Nombre</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-sole-terra focus:border-transparent transition-all text-gray-900" placeholder="Tu nombre" />
                   </div>
                   <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Apellido</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-sole-terra focus:border-transparent transition-all text-gray-900" placeholder="Tu apellido" />
                   </div>
                </div>

                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                   <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-sole-terra focus:border-transparent transition-all text-gray-900" placeholder="tucorreo@ejemplo.com" />
                </div>

                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">Asunto</label>
                   <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-sole-terra focus:border-transparent transition-all text-gray-900">
                      <option>Consulta sobre producto</option>
                      <option>Estado de mi pedido</option>
                      <option>Devoluciones</option>
                      <option>Prensa / Colaboraciones</option>
                      <option>Otro</option>
                   </select>
                </div>

                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
                   <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-sole-terra focus:border-transparent transition-all text-gray-900" placeholder="¿En qué podemos ayudarte?"></textarea>
                </div>

                <button type="submit" className="w-full bg-sole-terra text-white py-4 rounded-full font-bold text-lg hover:bg-[#d06e2b] transition-all flex items-center justify-center gap-2 shadow-lg">
                   Enviar Mensaje <Send size={18} />
                </button>
             </form>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
};
