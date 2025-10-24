'use client';

import React from 'react';
import '../../styles/themes/teal-tech.css';
import SplitHeader from '@/components/gsap/SplitHeader';
import StackingHeaders from '@/components/gsap/StackingHeaders';
import ImageMarquee from '@/components/gsap/ImageMarquee';
import KeyholeReveal from '@/components/gsap/KeyholeReveal';

const techServices = [
    {
        id: 'web-development',
        title: 'Web Development',
        content: 'Modern, responsive web applications built with the latest technologies and frameworks.'
    },
    {
        id: 'mobile-development',
        title: 'Mobile Development',
        content: 'Native iOS and Android apps, plus cross-platform solutions for maximum reach.'
    },
    {
        id: 'cloud-architecture',
        title: 'Cloud Architecture',
        content: 'Scalable cloud solutions using AWS, Azure, and Google Cloud Platform.'
    },
    {
        id: 'ai-integration',
        title: 'AI Integration',
        content: 'Intelligent automation and machine learning solutions for business optimization.'
    }
];

const portfolioImages = [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop'
];

export default function Homepage2() {
    return (
        <div className="teal-tech-theme min-h-screen">
            {/* Hero Section with Split Header */}
            <SplitHeader
                heroImage="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop"
                title="Tech Innovation Excellence"
                subtitle="Building the future with cutting-edge technology solutions"
            >
                {/* Services Grid with Stacking Headers */}
                <StackingHeaders headers={techServices}>
                    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
                        <div className="text-center text-white p-8 max-w-4xl">
                            <h2 className="text-5xl font-righteous mb-6">Our Technology Stack</h2>
                            <p className="text-xl leading-relaxed">
                                We leverage the latest technologies and frameworks to deliver
                                exceptional digital experiences that drive business growth.
                            </p>
                        </div>
                    </div>
                </StackingHeaders>

                {/* Portfolio Section with Image Marquee */}
                <div className="min-h-screen bg-bg py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-5xl font-righteous text-center text-text mb-16">
                            Our Portfolio
                        </h2>
                        <ImageMarquee images={portfolioImages}>
                            <div className="text-center mt-12">
                                <p className="text-lg text-text max-w-2xl mx-auto">
                                    Explore our diverse portfolio of successful projects across various industries,
                                    showcasing our expertise in web development, mobile apps, and cloud solutions.
                                </p>
                            </div>
                        </ImageMarquee>
                    </div>
                </div>

                {/* Footer with Keyhole Animation */}
                <KeyholeReveal
                    title="Ready to Build Something Amazing?"
                    description="Let's collaborate to create innovative technology solutions that transform your business and exceed your expectations."
                >
                    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent to-primary">
                        <div className="text-center text-white p-8 max-w-4xl">
                            <h2 className="text-5xl font-righteous mb-6">Get Started Today</h2>
                            <p className="text-xl mb-8">
                                Contact our team of experts to discuss your project requirements
                                and discover how we can help you achieve your goals.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                                    Start Your Project
                                </button>
                                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors">
                                    View Our Work
                                </button>
                            </div>
                        </div>
                    </div>
                </KeyholeReveal>
            </SplitHeader>

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

