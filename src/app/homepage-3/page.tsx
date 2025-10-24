'use client';

import React from 'react';
import '../../styles/themes/electric-blue.css';
import ZoomBySection from '@/components/gsap/ZoomBySection';
import InfiniteCards from '@/components/gsap/InfiniteCards';
import ConsecutiveFlips from '@/components/gsap/ConsecutiveFlips';
import ParallaxSection from '@/components/gsap/ParallaxSection';

const zoomSections = [
    {
        id: 'hero',
        title: 'Digital Innovation Leader',
        description: 'Transforming businesses through cutting-edge technology solutions and strategic digital implementation.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop',
        zoomData: { scale: 1, origin: [0.5, 0.5] }
    },
    {
        id: 'services',
        title: 'Comprehensive Services',
        description: 'From AI and machine learning to cloud solutions and mobile development.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
        zoomData: { scale: 3, origin: [0.6, 1] }
    },
    {
        id: 'about',
        title: 'Expert Team',
        description: 'Passionate technologists dedicated to delivering exceptional results.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop',
        zoomData: { scale: 1, origin: [0.5, 0.5] }
    },
    {
        id: 'contact',
        title: 'Ready to Transform?',
        description: 'Let\'s discuss how we can help you achieve your digital goals.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop',
        zoomData: { scale: 2, origin: [0.8, 0.4] }
    }
];

const serviceCards = [
    {
        id: 'ai-ml',
        title: 'AI & Machine Learning',
        description: 'Intelligent automation and predictive analytics solutions.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop'
    },
    {
        id: 'cloud-services',
        title: 'Cloud Solutions',
        description: 'Scalable, secure, and reliable cloud infrastructure.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop'
    },
    {
        id: 'mobile-apps',
        title: 'Mobile Development',
        description: 'Native and cross-platform mobile applications.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop'
    },
    {
        id: 'web-development',
        title: 'Web Development',
        description: 'Modern, responsive web applications.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
        id: 'data-analytics',
        title: 'Data Analytics',
        description: 'Transform data into actionable business insights.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
    }
];

const techStack = [
    {
        id: 'react',
        title: 'React & Next.js',
        description: 'Modern frontend development with React ecosystem.',
        icon: '⚛️'
    },
    {
        id: 'node',
        title: 'Node.js & Express',
        description: 'Scalable backend solutions with Node.js.',
        icon: '🟢'
    },
    {
        id: 'python',
        title: 'Python & Django',
        description: 'AI/ML solutions and web applications.',
        icon: '🐍'
    },
    {
        id: 'aws',
        title: 'AWS & Cloud',
        description: 'Cloud infrastructure and deployment.',
        icon: '☁️'
    },
    {
        id: 'mobile',
        title: 'React Native',
        description: 'Cross-platform mobile development.',
        icon: '📱'
    },
    {
        id: 'database',
        title: 'Database Solutions',
        description: 'PostgreSQL, MongoDB, and Redis.',
        icon: '🗄️'
    }
];

const parallaxImages = [
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
];

export default function Homepage3() {
    return (
        <div className="electric-blue-theme min-h-screen">
            {/* Hero Section with Zoom by Section */}
            <ZoomBySection sections={zoomSections}>
                {/* Services Cards with Infinite Scrolling */}
                <div className="min-h-screen bg-bg py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-5xl font-russo-one text-center text-text mb-16">
                            Our Services
                        </h2>
                        <InfiniteCards cards={serviceCards}>
                            <div className="text-center mt-12">
                                <p className="text-lg text-text max-w-2xl mx-auto">
                                    Discover our comprehensive range of technology services designed
                                    to accelerate your digital transformation journey.
                                </p>
                            </div>
                        </InfiniteCards>
                    </div>
                </div>

                {/* Tech Stack with Consecutive Flips */}
                <div className="min-h-screen bg-gradient-to-br from-primary to-secondary py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-5xl font-russo-one text-center text-white mb-16">
                            Technology Stack
                        </h2>
                        <ConsecutiveFlips items={techStack}>
                            <div className="text-center mt-12">
                                <p className="text-lg text-white max-w-2xl mx-auto">
                                    We leverage cutting-edge technologies and frameworks to deliver
                                    exceptional digital experiences that drive business growth.
                                </p>
                            </div>
                        </ConsecutiveFlips>
                    </div>
                </div>

                {/* Contact Section with Parallax */}
                <ParallaxSection
                    images={parallaxImages}
                    className="min-h-screen"
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white p-8 max-w-4xl">
                            <h2 className="text-5xl font-russo-one mb-6">Ready to Get Started?</h2>
                            <p className="text-xl leading-relaxed mb-8">
                                Let's discuss your project requirements and discover how our team
                                can help you achieve your digital transformation goals.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition-colors">
                                    Start Your Project
                                </button>
                                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors">
                                    Schedule Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </ParallaxSection>
            </ZoomBySection>

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

