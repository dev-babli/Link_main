'use client';

import React from 'react';
import '../../styles/themes/purple-mystic.css';
import PinnedZoomSection from '@/components/gsap/PinnedZoomSection';
import GrowCircle from '@/components/gsap/GrowCircle';
import ParallaxSection from '@/components/gsap/ParallaxSection';
import FallingBack from '@/components/gsap/FallingBack';

const services = [
    {
        id: 'ai-ml',
        title: 'AI & Machine Learning',
        description: 'Transform your business with intelligent automation and predictive analytics.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop'
    },
    {
        id: 'cloud-services',
        title: 'Cloud Solutions',
        description: 'Scalable, secure, and reliable cloud infrastructure for modern businesses.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop'
    },
    {
        id: 'mobile-apps',
        title: 'Mobile Development',
        description: 'Native and cross-platform mobile applications that engage your users.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop'
    }
];

const parallaxImages = [
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
];

const fallingPanels = [
    {
        id: 'innovation',
        title: 'Innovation First',
        content: 'We believe in pushing the boundaries of what\'s possible with technology.'
    },
    {
        id: 'excellence',
        title: 'Excellence in Delivery',
        content: 'Every project is delivered with precision, quality, and attention to detail.'
    },
    {
        id: 'partnership',
        title: 'Partnership Approach',
        content: 'We work as an extension of your team, not just a vendor.'
    }
];

export default function Homepage1() {
    return (
        <div className="purple-mystic-theme min-h-screen">
            {/* Hero Section with Pinned Zoom */}
            <div className="description panel hr-bottom">
                <div>
                    <h1 className="text-6xl font-playfair font-bold text-center mb-8">
                        Transform Ideas Into Digital Reality
                    </h1>
                    <p className="text-xl text-center max-w-3xl mx-auto">
                        Leading digital innovation agency specializing in cutting-edge technology solutions
                        that drive business growth and technological advancement.
                    </p>
                </div>
                <div className="scroll-down text-center mt-12">
                    <div className="text-lg mb-2">Scroll down</div>
                    <div className="arrow w-6 h-6 border-r-2 border-b-2 border-white transform rotate-45 mx-auto"></div>
                </div>
            </div>

            <PinnedZoomSection sections={services}>
                {/* Services Showcase with Grow Circle */}
                <GrowCircle
                    title="Our Services"
                    markText="Innovation"
                    className="min-h-screen flex items-center justify-center"
                >
                    <div className="text-center text-white">
                        <h2 className="text-4xl font-playfair font-bold mb-6">Discover Our Capabilities</h2>
                        <p className="text-lg max-w-2xl mx-auto">
                            From AI and machine learning to cloud solutions and mobile development,
                            we provide comprehensive technology services that transform businesses.
                        </p>
                    </div>
                </GrowCircle>

                {/* About Section with Parallax */}
                <ParallaxSection
                    images={parallaxImages}
                    className="min-h-screen"
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white p-8 max-w-4xl">
                            <h2 className="text-5xl font-playfair font-bold mb-6">About Link Innovations</h2>
                            <p className="text-xl leading-relaxed">
                                We are a team of passionate technologists, designers, and innovators
                                dedicated to transforming complex challenges into intelligent solutions.
                                Our mission is to accelerate business success through cutting-edge technology.
                            </p>
                        </div>
                    </div>
                </ParallaxSection>

                {/* CTA Section with Falling Back */}
                <FallingBack panels={fallingPanels}>
                    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
                        <div className="text-center text-white p-8 max-w-4xl">
                            <h2 className="text-5xl font-playfair font-bold mb-6">Ready to Transform?</h2>
                            <p className="text-xl mb-8">
                                Let's discuss how we can help you achieve your digital transformation goals.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                                    Start Your Project
                                </button>
                                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </FallingBack>
            </PinnedZoomSection>

            {/* Navigation to other homepages */}
            <div className="fixed bottom-8 right-8 z-50">
                <div className="flex flex-col space-y-2">
                    <a
                        href="/homepage-2"
                        className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/80 transition-colors text-sm"
                    >
                        Teal Tech
                    </a>
                    <a
                        href="/homepage-3"
                        className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors text-sm"
                    >
                        Electric Blue
                    </a>
                    <a
                        href="/homepage-4"
                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors text-sm"
                    >
                        Cyber Purple
                    </a>
                </div>
            </div>
        </div>
    );
}

