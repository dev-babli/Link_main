"use client";

import { SwissDesignNavbar } from "@/components/SwissDesignNavbar";

export default function NavbarDemo() {
    return (
        <div className="min-h-screen bg-slate-50">
            <SwissDesignNavbar />

            {/* Demo Content */}
            <main className="pt-16">
                {/* Hero Section */}
                <section className="bg-white py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold text-slate-900 mb-6">
                                Swiss Design Navbar
                            </h1>
                            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                                A modern, elegant navigation component that follows Swiss design principles
                                with clean typography, proper spacing, and minimalist aesthetics.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <button className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
                                    Get Started
                                </button>
                                <button className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                Swiss Design Principles
                            </h2>
                            <p className="text-lg text-slate-600">
                                Built with precision and attention to detail
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-2xl">📐</span>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                    Grid-Based Layout
                                </h3>
                                <p className="text-slate-600">
                                    Consistent 8px spacing system ensures perfect alignment and visual harmony across all elements.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-2xl">🔤</span>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                    Typography Hierarchy
                                </h3>
                                <p className="text-slate-600">
                                    Clean sans-serif fonts with proper weight, size, and spacing for optimal readability.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-2xl">🎨</span>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                    Minimalist Design
                                </h3>
                                <p className="text-slate-600">
                                    Essential elements only, with generous white space for a clean, uncluttered interface.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-2xl">📱</span>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                    Responsive Design
                                </h3>
                                <p className="text-slate-600">
                                    Mobile-first approach with adaptive layouts that work perfectly on all screen sizes.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-2xl">♿</span>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                    Accessibility
                                </h3>
                                <p className="text-slate-600">
                                    WCAG 2.1 AA compliant with proper ARIA labels, keyboard navigation, and screen reader support.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                    Performance
                                </h3>
                                <p className="text-slate-600">
                                    Optimized rendering with smooth animations and minimal bundle size for fast loading.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Typography Showcase */}
                <section className="py-24 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                Typography Scale
                            </h2>
                            <p className="text-lg text-slate-600">
                                Swiss design typography with perfect proportions
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="border-b border-slate-200 pb-8">
                                <h1 className="text-5xl font-bold text-slate-900 mb-4">
                                    Display Heading
                                </h1>
                                <p className="text-lg text-slate-600">
                                    Large display text for hero sections and major headings
                                </p>
                            </div>

                            <div className="border-b border-slate-200 pb-8">
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                    Section Heading
                                </h2>
                                <p className="text-lg text-slate-600">
                                    Section titles and important headings
                                </p>
                            </div>

                            <div className="border-b border-slate-200 pb-8">
                                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                                    Component Heading
                                </h3>
                                <p className="text-lg text-slate-600">
                                    Component titles and subsection headings
                                </p>
                            </div>

                            <div className="border-b border-slate-200 pb-8">
                                <h4 className="text-lg font-medium text-slate-900 mb-4">
                                    Navigation Item
                                </h4>
                                <p className="text-lg text-slate-600">
                                    Navigation links and menu items
                                </p>
                            </div>

                            <div className="border-b border-slate-200 pb-8">
                                <p className="text-base text-slate-900 mb-4">
                                    Body text for paragraphs and descriptions. This is the standard text size
                                    used throughout the interface for optimal readability.
                                </p>
                                <p className="text-sm text-slate-600">
                                    Small text for captions, labels, and secondary information.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Spacing System */}
                <section className="py-24 bg-slate-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                Spacing System
                            </h2>
                            <p className="text-lg text-slate-600">
                                8px base grid system for consistent spacing
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-slate-900 mb-4">Micro Spacing (4-8px)</h3>
                                <div className="flex items-center space-x-2">
                                    <div className="w-4 h-4 bg-slate-300 rounded"></div>
                                    <span className="text-sm text-slate-600">Icon to text spacing</span>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-slate-900 mb-4">Small Spacing (12-16px)</h3>
                                <div className="flex items-center space-x-4">
                                    <div className="w-4 h-4 bg-slate-300 rounded"></div>
                                    <span className="text-sm text-slate-600">Button padding, card padding</span>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-slate-900 mb-4">Medium Spacing (24-32px)</h3>
                                <div className="flex items-center space-x-8">
                                    <div className="w-4 h-4 bg-slate-300 rounded"></div>
                                    <span className="text-sm text-slate-600">Component gaps, section padding</span>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-slate-900 mb-4">Large Spacing (48-64px)</h3>
                                <div className="flex items-center space-x-12">
                                    <div className="w-4 h-4 bg-slate-300 rounded"></div>
                                    <span className="text-sm text-slate-600">Section separation, page margins</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-slate-900 text-white py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold mb-4">Swiss Design Navbar</h3>
                            <p className="text-slate-400 mb-8">
                                Modern, elegant, and functional navigation for your next project
                            </p>
                            <div className="flex justify-center space-x-6">
                                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                    Documentation
                                </a>
                                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                    GitHub
                                </a>
                                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                    Examples
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
