"use client";

import InfiniteMenu from "./InfiniteMenu";

const serviceItems = [
    {
        image: "/images/services/li-service-web-development-dashboard-v1.webp",
        fallback: "/images/services/li-service-web-development-dashboard-v1.jpg",
        link: "/services/web-development",
        title: "Web Development",
        description: "Modern, responsive websites built with React, Next.js, and cutting-edge technologies"
    },
    {
        image: "/images/services/li-service-mobile-app-development-dashboard-v1.webp",
        fallback: "/images/services/li-service-mobile-app-development-dashboard-v1.jpg",
        link: "/services/mobile-apps",
        title: "Mobile Apps",
        description: "Native iOS & Android apps with seamless user experiences"
    },
    {
        image: "/images/services/li-service-ai-automation-dashboard-v1.webp",
        fallback: "/images/services/li-service-ai-automation-dashboard-v1.jpg",
        link: "/services/ai-automation",
        title: "AI & Machine Learning",
        description: "Intelligent automation and predictive analytics that transform operations"
    },
    {
        image: "/images/services/li-service-cloud-devops-dashboard-v1.webp",
        fallback: "/images/services/li-service-cloud-devops-dashboard-v1.jpg",
        link: "/services/cloud-devops",
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure on AWS, Azure, and GCP with DevOps excellence"
    },
    {
        image: "/images/services/li-service-cybersecurity-dashboard-v1.webp",
        fallback: "/images/services/li-service-cybersecurity-dashboard-v1.jpg",
        link: "/services/cybersecurity",
        title: "Cybersecurity",
        description: "Enterprise-grade security solutions and compliance management"
    }
];

export default function InfiniteMenuSection() {
    return (
        <section className="relative w-full bg-gradient-to-b from-black via-purple-950 to-black py-24 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_70%)]" />

            {/* Header */}
            <div className="container mx-auto px-6 mb-12 text-center relative z-10">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                    Explore Our Services
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Drag and spin to discover our comprehensive technology solutions
                </p>
            </div>

            {/* InfiniteMenu */}
            <div className="relative w-full" style={{ height: '600px' }}>
                <InfiniteMenu items={serviceItems} />
            </div>

            {/* Instructions */}
            <div className="container mx-auto px-6 mt-12 text-center">
                <p className="text-sm text-gray-400">
                    ↔️ Drag to rotate • Click the arrow to learn more
                </p>
            </div>
        </section>
    );
}


