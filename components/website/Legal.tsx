
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LegalSection } from '../../types';

export const Legal: React.FC = () => {
    const [searchParams] = useSearchParams();
    const sectionParam = searchParams.get('section') as LegalSection;
    const [activeSection, setActiveSection] = useState<LegalSection>('TERMS');

    useEffect(() => {
        if (sectionParam) {
            setActiveSection(sectionParam);
        }
    }, [sectionParam]);

    const renderContent = () => {
        switch (activeSection) {
            case 'FAQ':
                return (
                    <div className="space-y-8">
                        <h1 className="font-serif text-4xl font-bold text-gray-900 mb-8">Preguntas Frecuentes</h1>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm">
                                <h3 className="font-bold text-xl text-gray-900 mb-2">¿Sus productos son cruelty-free?</h3>
                                <p className="text-gray-600">Sí, absolutamente. En Sole Skin & Beauty amamos a los animales y ninguno de nuestros productos o ingredientes es testeado en ellos.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm">
                                <h3 className="font-bold text-xl text-gray-900 mb-2">¿Hacen envíos internacionales?</h3>
                                <p className="text-gray-600">Por el momento solo realizamos envíos a todo el país. Estamos trabajando para expandirnos pronto.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm">
                                <h3 className="font-bold text-xl text-gray-900 mb-2">¿Cuánto tarda en llegar mi pedido?</h3>
                                <p className="text-gray-600">Los pedidos estándar tardan entre 3 a 5 días hábiles. Los envíos express llegan en 24-48 horas.</p>
                            </div>
                        </div>
                    </div>
                );
            case 'SHIPPING':
                return (
                    <div className="space-y-6">
                        <h1 className="font-serif text-4xl font-bold text-gray-900 mb-8">Envíos y Devoluciones</h1>
                        <div className="prose prose-lg text-gray-600">
                            <h3 className="font-bold text-gray-900">Política de Envíos</h3>
                            <p>Procesamos los pedidos dentro de las 24 horas siguientes a la confirmación del pago. Recibirás un correo con tu número de seguimiento una vez que tu paquete haya sido despachado.</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Envío Estándar (3-5 días): $99 MXN (Gratis en compras mayores a $899)</li>
                                <li>Envío Express (1-2 días): $150 MXN</li>
                            </ul>
                            
                            <h3 className="font-bold text-gray-900 mt-8">Devoluciones</h3>
                            <p>Queremos que ames tus productos Sole. Si no estás 100% satisfecha, aceptamos devoluciones dentro de los 30 días posteriores a la compra, siempre que el producto esté en su empaque original y con menos del 20% de uso.</p>
                            <p>Para iniciar una devolución, contáctanos a devoluciones@soleskin.com.</p>
                        </div>
                    </div>
                );
            case 'TERMS':
            default:
                return (
                    <div className="space-y-6">
                        <h1 className="font-serif text-4xl font-bold text-gray-900 mb-8">Términos y Condiciones</h1>
                        <div className="bg-white p-8 rounded-3xl text-gray-600 space-y-4 text-sm md:text-base">
                            <p>Bienvenido a Sole Skin & Beauty. Al acceder a nuestro sitio web y utilizar nuestros servicios, aceptas cumplir con los siguientes términos y condiciones.</p>
                            <h4 className="font-bold text-gray-900 pt-4">1. Uso del Sitio</h4>
                            <p>El contenido de este sitio es para tu información general y uso personal. Está sujeto a cambios sin previo aviso.</p>
                            <h4 className="font-bold text-gray-900 pt-4">2. Productos</h4>
                            <p>Hacemos todo lo posible para mostrar con la mayor precisión posible los colores e imágenes de nuestros productos. No podemos garantizar que la visualización en tu monitor sea exacta.</p>
                            <h4 className="font-bold text-gray-900 pt-4">3. Privacidad</h4>
                            <p>Tu privacidad es importante para nosotros. Revisa nuestra Política de Privacidad para entender cómo recolectamos y usamos tu información.</p>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-sole-bg py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
            <div className="max-w-3xl mx-auto">
                <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                    <button onClick={() => setActiveSection('TERMS')} className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'TERMS' ? 'bg-sole-terra text-white' : 'bg-white text-gray-600'}`}>Términos</button>
                    <button onClick={() => setActiveSection('FAQ')} className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'FAQ' ? 'bg-sole-terra text-white' : 'bg-white text-gray-600'}`}>Preguntas</button>
                    <button onClick={() => setActiveSection('SHIPPING')} className={`px-4 py-2 rounded-full whitespace-nowrap ${activeSection === 'SHIPPING' ? 'bg-sole-terra text-white' : 'bg-white text-gray-600'}`}>Envíos</button>
                </div>
                {renderContent()}
            </div>
        </div>
    );
};
