'use client';

import React from 'react';
import '../../styles/themes/cyber-purple.css';
import PinnedImageReplace from '@/components/gsap/PinnedImageReplace';
import HorizontalScroll from '@/components/gsap/HorizontalScroll';
import MixedObserver from '@/components/gsap/MixedObserver';
import PreventOverlaps from '@/components/gsap/PreventOverlaps';

const heroImages = [
    {
        id: 'hero-1',
        src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop',
        alt: 'Digital Innovation',
        title: 'Digital Innovation',
        description: 'Transforming businesses through cutting-edge technology solutions.'
    },
    {
        id: 'hero-2',
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
        alt: 'AI & Machine Learning',
        title: 'AI & Machine Learning',
        description: 'Intelligent automation and predictive analytics solutions.'
    },
    {
        id: 'hero-3',
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop',
        alt: 'Cloud Solutions',
        title: 'Cloud Solutions',
        description: 'Scalable, secure, and reliable cloud infrastructure.'
    }
];

const horizontalSections = [
    {
        id: 'web-dev',
        title: 'Web Development',
        description: 'Modern, responsive web applications built with the latest technologies.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        width: 800
    },
    {
        id: 'mobile-dev',
        title: 'Mobile Development',
        description: 'Native iOS and Android apps, plus cross-platform solutions.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
        width: 800
    },
    {
        id: 'cloud-arch',
        title: 'Cloud Architecture',
        description: 'Scalable cloud solutions using AWS, Azure, and Google Cloud.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
        width: 800
    },
    {
        id: 'ai-ml',
        title: 'AI Integration',
        description: 'Intelligent automation and machine learning solutions.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
        width: 800
    }
];

const mixedItems = [
    {
        id: 'innovation',
        title: 'Innovation First',
        description: 'We believe in pushing the boundaries of what\'s possible with technology.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
        type: 'horizontal' as const
    },
    {
        id: 'excellence',
        title: 'Excellence in Delivery',
        description: 'Every project is delivered with precision, quality, and attention to detail.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        type: 'vertical' as const
    },
    {
        id: 'partnership',
        title: 'Partnership Approach',
        description: 'We work as an extension of your team, not just a vendor.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
        type: 'horizontal' as const
    }
];

const overlapSections = [
    {
        id: 'about',
        title: 'About Link Innovations',
        description: 'We are a team of passionate technologists, designers, and innovators dedicated to transforming complex challenges into intelligent solutions. Our mission is to accelerate business success through cutting-edge technology.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop'
    },
    {
        id: 'mission',
        title: 'Our Mission',
        description: 'To transform ideas into digital reality by providing innovative technology solutions that drive business growth and technological advancement.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
    {
        id: 'vision',
        title: 'Our Vision',
        description: 'To be the leading digital innovation agency that empowers businesses to thrive in the digital age through cutting-edge technology solutions.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
    }
];

export default function Homepage4() {
    return (
        <div className="cyber-purple-theme min-h-screen">
            {/* Hero Section with Pinned Image Replace */}
            <PinnedImageReplace images={heroImages}>
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
                    <div className="text-center text-white p-8 max-w-4xl">
                        <h1 className="text-6xl font-bungee mb-6">Transform Ideas Into Digital Reality</h1>
                        <p className="text-xl leading-relaxed">
                            Leading digital innovation agency specializing in cutting-edge technology solutions
                            that drive business growth and technological advancement.
                        </p>
                    </div>
                </div>
            </PinnedImageReplace>

            {/* Services with Horizontal Scroll */}
            <div className="min-h-screen bg-bg py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-5xl font-bungee text-center text-text mb-16">
                        Our Services
                    </h2>
                    <HorizontalScroll sections={horizontalSections}>
                        <div className="text-center mt-12">
                            <p className="text-lg text-text max-w-2xl mx-auto">
                                Discover our comprehensive range of technology services designed
                                to accelerate your digital transformation journey.
                            </p>
                        </div>
                    </HorizontalScroll>
                </div>
            </div>

            {/* About with Mixed Observer */}
            <div className="min-h-screen bg-gradient-to-br from-secondary to-accent py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-5xl font-bungee text-center text-white mb-16">
                        Our Approach
                    </h2>
                    <MixedObserver items={mixedItems}>
                        <div className="text-center mt-12">
                            <p className="text-lg text-white max-w-2xl mx-auto">
                                We combine technical expertise with creative innovation to deliver
                                solutions that exceed expectations and drive real business value.
                            </p>
                        </div>
                    </MixedObserver>
                </div>
            </div>

            {/* CTA with Prevent Overlaps */}
            <PreventOverlaps sections={overlapSections}>
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent to-primary">
                    <div className="text-center text-white p-8 max-w-4xl">
                        <h2 className="text-5xl font-bungee mb-6">Ready to Transform?</h2>
                        <p className="text-xl mb-8">
                            Let's discuss how we can help you achieve your digital transformation goals
                            and create innovative solutions that drive business success.
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
            </PreventOverlaps>

            {/* Navigation to other homepages */}
            <div className="fixed bottom-8 right-8 z-50">
                <div className="flex flex-col space-y-2">
                    <a
                        href="/homepage-1"
                        className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/80 transition-colors text-sm"
                    >
                        Purple Mystic
                    </a>
                    <a
                        href="/homepage-2"
                        className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors text-sm"
                    >
                        Teal Tech
                    </a>
                    <a
                        href="/homepage-3"
                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors text-sm"
                    >
                        Electric Blue
                    </a>
                </div>
            </div>
        </div>
    );
}

