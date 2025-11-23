
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Botulcare Ampoule Serum",
    category: "Rutina Facial",
    price: 30.00,
    rating: 4.8,
    image: "https://greenlife.com.ec/wp-content/uploads/2020/08/Producto-1@2x.png", 
    description: "Un suero concentrado que revitaliza la piel cansada, suaviza las líneas de expresión y aporta una luminosidad instantánea. Ideal para uso diario.",
    benefits: ["Efecto lifting natural", "Hidratación profunda", "Luminosidad inmediata"],
    ingredients: "Ácido Hialurónico, Péptidos, Extracto de Rosa"
  },
  {
    id: 2,
    name: "Super Collagen Sleeping Mask",
    category: "Tratamientos",
    price: 25.00,
    rating: 5.0,
    image: "https://greenlife.com.ec/wp-content/uploads/2020/08/Producto-3@2x.png",
    description: "Mascarilla nocturna enriquecida con colágeno marino para restaurar la elasticidad de tu piel mientras duermes. Despierta con piel de cristal.",
    benefits: ["Restauración nocturna", "Mayor elasticidad", "Suavidad extrema"],
    ingredients: "Colágeno hidrolizado, Centella Asiática, Niacinamida"
  },
  {
    id: 3,
    name: "Hyaluronic Moisture Cream",
    category: "Rutina Facial",
    price: 28.00,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=800&auto=format&fit=crop", 
    description: "Crema hidratante ligera que se absorbe al instante. Crea una barrera protectora que retiene la humedad por 24 horas.",
    benefits: ["No grasa", "Base perfecta de maquillaje", "Hidratación 24h"],
    ingredients: "Ceramidas, Vitamina E, Agua de Glaciar"
  },
  {
    id: 4,
    name: "Glow Tonic Exfoliante",
    category: "Limpieza",
    price: 22.00,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=800&auto=format&fit=crop",
    description: "Tónico suave con ácidos AHA/BHA que elimina células muertas y revela una piel radiante y uniforme.",
    benefits: ["Exfoliación suave", "Poros menos visibles", "Tono uniforme"],
    ingredients: "Ácido Glicólico, Aloe Vera, Ginseng"
  },
  {
    id: 5,
    name: "Silk Eye Cream",
    category: "Ojos",
    price: 35.00,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop",
    description: "Tratamiento específico para el contorno de ojos que reduce bolsas y ojeras con un aplicador refrescante.",
    benefits: ["Reduce hinchazón", "Ilumina la mirada", "Combate patas de gallo"],
    ingredients: "Cafeína, Retinol suave, Pepino"
  },
  {
    id: 6,
    name: "Rose Hydrating Mist",
    category: "Hidratación",
    price: 18.00,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=800&auto=format&fit=crop",
    description: "Bruma facial refrescante con extracto de rosas reales. Ideal para rehidratar la piel durante el día.",
    benefits: ["Refresco instantáneo", "Fijador de maquillaje", "Aroma relajante"],
    ingredients: "Agua de Rosas, Glicerina vegetal"
  },
  {
    id: 7,
    name: "Vitamin C Radiance Serum",
    category: "Rutina Facial",
    price: 32.00,
    rating: 4.7,
    image: "https://greenlife.com.ec/wp-content/uploads/2020/08/Producto-2@2x.png",
    description: "Suero antioxidante potente que ilumina la piel y reduce manchas solares. Un must para las mañanas.",
    benefits: ["Antimanchas", "Iluminador", "Protección ambiental"],
    ingredients: "Vitamina C pura, Ácido Ferúlico"
  },
  {
    id: 8,
    name: "Gentle Foam Cleanser",
    category: "Limpieza",
    price: 19.00,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800&auto=format&fit=crop",
    description: "Espuma limpiadora suave que elimina impurezas sin resecar la piel. pH balanceado.",
    benefits: ["Limpieza profunda", "pH balanceado", "Suave con piel sensible"],
    ingredients: "Té verde, Camomila"
  },
  {
    id: 9,
    name: "Luminous Face Oil",
    category: "Serums y Aceites",
    price: 45.00,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=800&auto=format&fit=crop",
    description: "Aceite facial seco con destellos dorados para una piel nutrida y radiante sin sensación grasa.",
    benefits: ["Hidratación intensa", "Acabado glow", "Antioxidante"],
    ingredients: "Aceite de Jojoba, Rosa Mosqueta, Vitamina E"
  },
  {
    id: 10,
    name: "Night Repair Balm",
    category: "Tratamientos",
    price: 55.00,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=800&auto=format&fit=crop",
    description: "Bálsamo rico y fundente para pieles muy secas o maduras. Reparación intensiva nocturna.",
    benefits: ["Nutrición intensa", "Reparación barrera", "Calma rojeces"],
    ingredients: "Manteca de Karité, Escualano"
  },
  {
    id: 11,
    name: "Berry Lip Mask",
    category: "Tratamientos",
    price: 15.00,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1571781535009-2b9e46223139?q=80&w=800&auto=format&fit=crop",
    description: "Tratamiento intensivo para labios secos. Úsala de noche para despertar con labios suaves.",
    benefits: ["Labios suaves", "Hidratación profunda", "Sabor frutos rojos"],
    ingredients: "Cera de abejas, Aceite de coco"
  },
  {
    id: 12,
    name: "Detox Clay Mask",
    category: "Tratamientos",
    price: 24.00,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1597169722592-37490037eb7a?q=80&w=800&auto=format&fit=crop",
    description: "Mascarilla de arcilla rosa que purifica los poros y controla el brillo sin resecar.",
    benefits: ["Purificante", "Control de grasa", "Minimiza poros"],
    ingredients: "Arcilla Rosa, Caolín"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ana G.",
    text: "La Super Collagen Mask cambió mi piel por completo. Me despierto con la cara súper suave y luminosa.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Carla M.",
    text: "Tengo piel sensible y el Gentle Cleanser es lo único que no me irrita. Amo que sea vegano.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Lucía R.",
    text: "El servicio al cliente es increíble y el packaging es hermoso. Se siente muy premium.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  }
];
