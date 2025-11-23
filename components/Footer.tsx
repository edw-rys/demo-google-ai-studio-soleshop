
import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { ViewState, LegalSection } from '../types';

interface FooterProps {
    onNavigate: (view: ViewState) => void;
    onLegalNavigate: (section: LegalSection) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onLegalNavigate }) => {
  const handleLegalClick = (e: React.MouseEvent, section: LegalSection) => {
      e.preventDefault();
      onLegalNavigate(section);
  };

  const handleNavClick = (e: React.MouseEvent, view: ViewState) => {
      e.preventDefault();
      onNavigate(view);
  };

  return (
    <footer className="bg-white pt-20 pb-10 rounded-t-[3rem] mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col items-start mb-6 cursor-pointer" onClick={(e) => handleNavClick(e, 'HOME')}>
              <img 
                src="https://greenlife.com.ec/wp-content/uploads/2020/08/Logo-Sole@2x.png" 
                alt="Sole Skin & Beauty" 
                className="h-12 w-auto object-contain mb-2"
              />
            </div>
            <p className="text-gray-500 leading-relaxed">
              Cuidando tu piel con ingredientes conscientes y amor por la naturaleza. Tu belleza, tu ritual.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-wider">Tienda</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" onClick={(e) => handleNavClick(e, 'SHOP')} className="hover:text-sole-terra transition-colors">Lo nuevo</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'SHOP')} className="hover:text-sole-terra transition-colors">Más vendidos</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'SHOP')} className="hover:text-sole-terra transition-colors">Sets de regalo</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'SHOP')} className="hover:text-sole-terra transition-colors">Tarjetas de regalo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-wider">Ayuda</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" onClick={(e) => handleLegalClick(e, 'SHIPPING')} className="hover:text-sole-terra transition-colors">Envíos y Devoluciones</a></li>
              <li><a href="#" onClick={(e) => handleLegalClick(e, 'FAQ')} className="hover:text-sole-terra transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'CONTACT')} className="hover:text-sole-terra transition-colors">Contacto</a></li>
              <li><a href="#" onClick={(e) => handleLegalClick(e, 'TERMS')} className="hover:text-sole-terra transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-wider">Síguenos</h4>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-sole-bg flex items-center justify-center text-sole-terra hover:bg-sole-terra hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-sole-bg flex items-center justify-center text-sole-terra hover:bg-sole-terra hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-sole-bg flex items-center justify-center text-sole-terra hover:bg-sole-terra hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
                <Mail size={16} />
                <span>hola@soleskin.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Sole Skin & Beauty. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
