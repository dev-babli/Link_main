/**
 * 🎨 Link Innovations - Magic Effects Demo
 * 
 * This component demonstrates all the available magic effects
 * from your best styling system. Use this as a reference!
 */

"use client";

import { useState } from 'react';

export default function MagicEffectsDemo() {
    const [activeEffect, setActiveEffect] = useState('');

    const effects = [
        {
            name: 'Glass Card',
            className: 'glass-card',
            description: 'Realistic glass effect with proper lighting'
        },
        {
            name: 'Glass Purple',
            className: 'glass-purple',
            description: 'Purple-tinted glass with brand colors'
        },
        {
            name: 'Glass Blue',
            className: 'glass-blue',
            description: 'Blue-tinted glass for tech elements'
        },
        {
            name: 'Glass Cyan',
            className: 'glass-cyan',
            description: 'Cyan-tinted glass for accent elements'
        },
        {
            name: 'Neon Glow',
            className: 'neon-glow',
            description: 'Glowing text with pulsing effect'
        },
        {
            name: 'Holographic',
            className: 'holographic',
            description: 'Rainbow gradient text effect'
        },
        {
            name: 'Magic Reveal',
            className: 'animate-magic-reveal',
            description: 'Smooth entrance with blur and scale'
        },
        {
            name: 'Shimmer Magic',
            className: 'animate-shimmer-magic',
            description: 'Shimmer animation across element'
        },
        {
            name: 'Pulse Glow',
            className: 'animate-pulse-glow-magic',
            description: 'Pulsing glow effect'
        },
        {
            name: 'Magnetic Hover',
            className: 'magnetic-hover',
            description: 'Interactive hover with scale and brightness'
        },
        {
            name: 'Particle Trail',
            className: 'particle-trail',
            description: 'Particle effect on hover'
        },
        {
            name: 'Bounce Glow',
            className: 'animate-bounce-glow',
            description: 'Bouncing with glow effect'
        }
    ];

    return (
        <div className="min-h-screen bg-black py-phi-3xl">
            <div className="container-phi-lg mx-auto px-phi-lg">

                {/* Header */}
                <div className="text-center mb-phi-3xl">
                    <h1 className="text-phi-5xl neon-glow mb-phi-lg">
                        ✨ Magic Effects Demo
                    </h1>
                    <p className="text-phi-xl text-white/80">
                        Experience the power of your best styling system
                    </p>
                </div>

                {/* Golden Ratio Spacing Demo */}
                <section className="mb-phi-3xl">
                    <h2 className="text-phi-3xl holographic mb-phi-xl">
                        🎯 Golden Ratio Spacing
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-phi-lg">
                        <div className="phi-spacing-sm glass-card">
                            <p className="text-phi-sm">Small Spacing (φ⁻²)</p>
                        </div>
                        <div className="phi-spacing-md glass-card">
                            <p className="text-phi-base">Medium Spacing (φ)</p>
                        </div>
                        <div className="phi-spacing-lg glass-card">
                            <p className="text-phi-lg">Large Spacing (φ²)</p>
                        </div>
                    </div>
                </section>

                {/* Magic Effects Grid */}
                <section className="mb-phi-3xl">
                    <h2 className="text-phi-3xl holographic mb-phi-xl">
                        🎨 Magic Effects Showcase
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-phi-lg">
                        {effects.map((effect, index) => (
                            <div
                                key={effect.name}
                                className={`glass-card magnetic-hover scroll-reveal-stagger cursor-pointer transition-all duration-300 ${activeEffect === effect.name ? 'ring-2 ring-purple-400' : ''
                                    }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => setActiveEffect(effect.name)}
                            >
                                <div className={`p-phi-lg text-center ${effect.className}`}>
                                    <h3 className="text-phi-xl mb-phi-sm font-semibold">
                                        {effect.name}
                                    </h3>
                                    <p className="text-phi-sm text-white/70">
                                        {effect.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Typography Scale Demo */}
                <section className="mb-phi-3xl">
                    <h2 className="text-phi-3xl holographic mb-phi-xl">
                        📝 Golden Ratio Typography
                    </h2>
                    <div className="glass-card p-phi-xl">
                        <h1 className="text-phi-5xl neon-glow mb-phi-lg">Heading 1 (φ⁵)</h1>
                        <h2 className="text-phi-4xl holographic mb-phi-md">Heading 2 (φ⁴)</h2>
                        <h3 className="text-phi-3xl mb-phi-sm">Heading 3 (φ³)</h3>
                        <h4 className="text-phi-2xl mb-phi-sm">Heading 4 (φ²)</h4>
                        <p className="text-phi-lg mb-phi-sm">Large body text (φ)</p>
                        <p className="text-phi-base mb-phi-sm">Base body text (1)</p>
                        <p className="text-phi-sm">Small text (φ⁻¹)</p>
                    </div>
                </section>

                {/* Interactive Demo */}
                <section className="mb-phi-3xl">
                    <h2 className="text-phi-3xl holographic mb-phi-xl">
                        🎮 Interactive Elements
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-phi-lg">

                        {/* Glass Button */}
                        <div className="glass-card p-phi-lg text-center">
                            <h3 className="text-phi-xl mb-phi-md">Glass Button</h3>
                            <button className="glass-button animate-pulse-glow-magic magnetic-hover px-phi-lg py-phi-sm">
                                <span className="neon-glow">Click Me!</span>
                            </button>
                        </div>

                        {/* Particle Trail Card */}
                        <div className="glass-card p-phi-lg text-center">
                            <h3 className="text-phi-xl mb-phi-md">Particle Trail</h3>
                            <div className="particle-trail glass-purple p-phi-lg rounded-lg">
                                <p className="text-phi-base">Hover for particles!</p>
                            </div>
                        </div>

                        {/* Shimmer Card */}
                        <div className="glass-card p-phi-lg text-center">
                            <h3 className="text-phi-xl mb-phi-md">Shimmer Effect</h3>
                            <div className="animate-shimmer-magic glass-blue p-phi-lg rounded-lg">
                                <p className="text-phi-base">Watch the shimmer!</p>
                            </div>
                        </div>

                        {/* Bounce Glow */}
                        <div className="glass-card p-phi-lg text-center">
                            <h3 className="text-phi-xl mb-phi-md">Bounce Glow</h3>
                            <div className="animate-bounce-glow glass-cyan p-phi-lg rounded-lg">
                                <p className="text-phi-base">Bouncing with glow!</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Container System Demo */}
                <section className="mb-phi-3xl">
                    <h2 className="text-phi-3xl holographic mb-phi-xl">
                        📦 Container System
                    </h2>
                    <div className="space-y-phi-lg">
                        <div className="container-phi-sm glass-card p-phi-lg">
                            <p className="text-phi-base">Small Container (38.2rem)</p>
                        </div>
                        <div className="container-phi-md glass-card p-phi-lg">
                            <p className="text-phi-base">Medium Container (61.8rem)</p>
                        </div>
                        <div className="container-phi-lg glass-card p-phi-lg">
                            <p className="text-phi-base">Large Container (100rem)</p>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="text-center py-phi-2xl">
                    <p className="text-phi-lg holographic">
                        🚀 Your best styling system is ready to use!
                    </p>
                    <p className="text-phi-sm text-white/60 mt-phi-sm">
                        All effects are optimized for performance and accessibility
                    </p>
                </footer>
            </div>
        </div>
    );
}
