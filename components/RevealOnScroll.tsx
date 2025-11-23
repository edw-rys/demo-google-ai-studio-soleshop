import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children, className = "", delay = 0 }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                // Small delay to ensure it doesn't flash if near top
                setTimeout(() => setIsVisible(true), delay);
                observer.disconnect();
            }
        }, { 
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is fully in view
        });

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [delay]);

    return (
        <div 
            ref={ref} 
            className={`${className} transition-all duration-1000 transform ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            {children}
        </div>
    );
};