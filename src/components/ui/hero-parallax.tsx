"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );
    return (
        <div
            ref={ref}
            className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
            style={{ position: 'relative' }}
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                    alt="Technology background"
                    fill
                    className="object-cover opacity-20"
                    priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.15),transparent_50%)]"></div>
            </div>

            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className="relative z-10"
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-20 space-x-20">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 z-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                        Our Portfolio of <br /> Innovation
                    </span>
                </h1>
                <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
                <p className="max-w-3xl text-base md:text-xl text-gray-300 leading-relaxed">
                    Delivering excellence across industries with cutting-edge technology solutions.
                    We are a team of passionate developers and designers that love to build
                    amazing products that drive real business results.
                </p>
            </motion.div>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-96 w-[30rem] relative flex-shrink-0"
        >
            <Link
                href={product.link}
                className="block group-hover/product:shadow-2xl group-hover/product:shadow-blue-500/20 transition-all duration-300"
            >
                <div className="relative h-full w-full overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900">
                    <Image
                        src={product.thumbnail}
                        height="600"
                        width="600"
                        className="object-cover object-center absolute h-full w-full inset-0 group-hover/product:scale-110 transition-transform duration-500"
                        alt={product.title}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover/product:opacity-80 transition-opacity duration-300"></div>

                    {/* Blue/Purple Gradient on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300"></div>
                </div>
            </Link>

            {/* Title - Always visible at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
                <h2 className="text-white text-xl md:text-2xl font-bold mb-2 transform translate-y-2 group-hover/product:translate-y-0 transition-transform duration-300">
                    {product.title}
                </h2>
                <div className="w-0 group-hover/product:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"></div>
            </div>
        </motion.div>
    );
};

// Link Innovations Portfolio Data
export const portfolioProducts = [
    {
        title: "E-Commerce Platform",
        link: "/portfolio/ecommerce-platform",
        thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    },
    {
        title: "Healthcare Management System",
        link: "/portfolio/healthcare-system",
        thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    },
    {
        title: "FinTech Mobile App",
        link: "/portfolio/fintech-app",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
        title: "AI-Powered Analytics Dashboard",
        link: "/portfolio/ai-dashboard",
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    },
    {
        title: "Real Estate Platform",
        link: "/portfolio/real-estate",
        thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    },
    {
        title: "EdTech Learning Platform",
        link: "/portfolio/edtech-platform",
        thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    },
    {
        title: "Cloud Migration Solution",
        link: "/portfolio/cloud-migration",
        thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    },
    {
        title: "Supply Chain Management",
        link: "/portfolio/supply-chain",
        thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    },
    {
        title: "IoT Monitoring System",
        link: "/portfolio/iot-monitoring",
        thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
    },
    {
        title: "Blockchain Wallet",
        link: "/portfolio/blockchain-wallet",
        thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    },
    {
        title: "Social Media Analytics",
        link: "/portfolio/social-analytics",
        thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    },
    {
        title: "Video Conferencing Platform",
        link: "/portfolio/video-conferencing",
        thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
    },
    {
        title: "Project Management Tool",
        link: "/portfolio/project-management",
        thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    },
    {
        title: "CRM System",
        link: "/portfolio/crm-system",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
        title: "Cybersecurity Dashboard",
        link: "/portfolio/cybersecurity-dashboard",
        thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    },
];
