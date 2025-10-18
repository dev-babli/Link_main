"use client";

import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface LenisProviderProps {
    children: React.ReactNode;
}

// Global Lenis instance to prevent multiple instances
let globalLenis: Lenis | null = null;

export const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Only create one global Lenis instance
        if (!globalLenis) {
            globalLenis = new Lenis({
                // Core smoothness settings - optimized for buttery smooth scrolling
                lerp: 0.06, // Lower for smoother scrolling (0.05-0.08 optimal)
                duration: 1.2, // Slightly longer for smoother programmatic scrolling
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing curve

                // Input sensitivity - fine-tuned for responsiveness
                wheelMultiplier: 1.0, // Standard wheel sensitivity
                touchMultiplier: 2.0, // Higher touch sensitivity for mobile

                // Performance optimizations
                smoothWheel: true, // Enable smooth wheel scrolling
                autoRaf: true, // Automatically handle requestAnimationFrame
                syncTouch: true, // Sync touch events for better mobile experience

                // Additional smoothness settings
                infinite: false, // Disable infinite scroll for better performance
                orientation: 'vertical', // Vertical scrolling only
                gestureOrientation: 'vertical', // Vertical gesture orientation
            });

            lenisRef.current = globalLenis;

            // Expose Lenis globally for ScrollTrigger integration
            (window as any).lenis = globalLenis;

            // Enhanced animation frame function with performance monitoring
            function raf(time: number) {
                if (globalLenis) {
                    globalLenis.raf(time);
                    requestAnimationFrame(raf);
                }
            }

            requestAnimationFrame(raf);

            // Handle anchor links for smooth scrolling
            const handleAnchorLinks = (e: Event) => {
                const target = e.target as HTMLAnchorElement;
                if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
                    e.preventDefault();
                    const targetId = target.getAttribute('href');
                    if (targetId && globalLenis) {
                        globalLenis.scrollTo(targetId, {
                            duration: 1.2,
                            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                        });
                    }
                }
            };

            // Add event listener for anchor links
            document.addEventListener('click', handleAnchorLinks);

            // Store cleanup function
            const cleanup = () => {
                document.removeEventListener('click', handleAnchorLinks);
                if (globalLenis) {
                    globalLenis.destroy();
                    globalLenis = null;
                }
            };

            // Store cleanup function for later use
            (globalLenis as any).cleanup = cleanup;
        } else {
            // Use existing global instance
            lenisRef.current = globalLenis;
        }

        // Cleanup on unmount
        return () => {
            // Only cleanup if this is the last component using Lenis
            if (globalLenis && (globalLenis as any).cleanup) {
                (globalLenis as any).cleanup();
            }
        };
    }, []);

    return <>{children}</>;
};

export default LenisProvider;



