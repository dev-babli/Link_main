'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MixedObserverProps {
    children: React.ReactNode;
    className?: string;
    items: Array<{
        id: string;
        title: string;
        description: string;
        image: string;
        type: 'horizontal' | 'vertical';
    }>;
}

export default function MixedObserver({
    children,
    className = '',
    items
}: MixedObserverProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const itemsElements = containerRef.current.querySelectorAll('.mixed-item');

        itemsElements.forEach((item, index) => {
            const itemElement = item as HTMLElement;
            const itemData = items[index];

            if (itemData.type === 'horizontal') {
                // Horizontal scroll animation
                ScrollTrigger.create({
                    trigger: itemElement,
                    start: "left right",
                    end: "right left",
                    scrub: 1,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        gsap.set(itemElement, {
                            x: progress * (window.innerWidth - itemElement.offsetWidth)
                        });
                    }
                });
            } else {
                // Vertical scroll animation
                gsap.fromTo(itemElement,
                    {
                        opacity: 0,
                        y: 100,
                        scale: 0.8
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: itemElement,
                            start: "top 80%",
                            end: "bottom 20%",
                            scrub: 1
                        }
                    }
                );
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [items]);

    return (
        <div ref={containerRef} className={`mixed-observer-container ${className}`}>
            {items.map((item, index) => (
                <div
                    key={item.id}
                    className={`mixed-item ${item.type === 'horizontal' ? 'horizontal-item' : 'vertical-item'} ${item.type === 'horizontal' ? 'flex items-center h-screen' : 'py-20'
                        }`}
                >
                    <div className={`${item.type === 'horizontal' ? 'flex-shrink-0 w-96' : 'max-w-4xl mx-auto'} text-center`}>
                        <img
                            src={item.image}
                            alt={item.title}
                            className={`${item.type === 'horizontal' ? 'w-full h-64' : 'w-full h-80'} object-cover rounded-lg mb-6`}
                        />
                        <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                        <p className="text-lg">{item.description}</p>
                    </div>
                </div>
            ))}
            {children}
        </div>
    );
}

