import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "@/components/ui/hero-gallery-scroll-animation"
import { Button } from "@/components/ui/button"

// High-quality technology and business images for Link Innovations
const IMAGES = [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Team collaboration
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Data analytics dashboard
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Mobile app development
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // AI and machine learning
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Cloud computing
]

const LinkInnovationsHeroDemo = () => {
    return (
        <ContainerScroll className="h-[350vh] bg-gradient-to-b from-black to-gray-900">
            <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
                {IMAGES.map((imageUrl, index) => (
                    <BentoCell
                        key={index}
                        className="overflow-hidden rounded-xl shadow-2xl border border-gray-800/50"
                    >
                        <img
                            className="size-full object-cover object-center transition-transform duration-700 hover:scale-105"
                            src={imageUrl}
                            alt={`Link Innovations technology showcase ${index + 1}`}
                        />
                    </BentoCell>
                ))}
            </BentoGrid>

            <ContainerScale className="relative z-10 text-center">
                <h1 className="max-w-4xl text-5xl md:text-7xl font-bold tracking-tight text-white font-orbitron">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                        Digital Innovation
                    </span>
                    <br />
                    <span className="text-white">
                        Redefined
                    </span>
                </h1>
                <p className="my-8 max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
                    Transform your business with cutting-edge technology solutions.
                    From AI automation to cloud infrastructure, we deliver excellence
                    that drives real results.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        size="lg"
                    >
                        Start Your Project
                    </Button>
                    <Button
                        variant="outline"
                        className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                        size="lg"
                    >
                        View Our Work
                    </Button>
                </div>
            </ContainerScale>
        </ContainerScroll>
    )
}

const LinkInnovationsHeroDemo2 = () => {
    return (
        <ContainerScroll className="h-[350vh] bg-gradient-to-b from-gray-900 to-black">
            <BentoGrid
                variant={"fourCells"}
                className="sticky left-0 top-0 h-svh w-full p-4"
            >
                {IMAGES.filter((_, index) => index <= 3).map((imageUrl, index) => (
                    <BentoCell
                        key={index}
                        className="overflow-hidden rounded-xl shadow-2xl border border-gray-800/50"
                    >
                        <img
                            className="size-full object-cover object-center transition-transform duration-700 hover:scale-105"
                            width="100%"
                            height="100%"
                            src={imageUrl}
                            alt={`Link Innovations service ${index + 1}`}
                        />
                    </BentoCell>
                ))}
            </BentoGrid>
            <ContainerScale className="text-center">
                <h1 className="max-w-4xl text-5xl md:text-7xl font-bold tracking-tight text-white font-orbitron">
                    <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Technology
                    </span>
                    <br />
                    <span className="text-white">
                        That Works
                    </span>
                </h1>
                <p className="my-8 max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
                    Experience the power of modern development. Our solutions are built
                    for scale, performance, and user experience that converts.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        size="lg"
                    >
                        Get Started
                    </Button>
                    <Button
                        variant="outline"
                        className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                        size="lg"
                    >
                        Learn More
                    </Button>
                </div>
            </ContainerScale>
        </ContainerScroll>
    )
}

const LinkInnovationsHeroDemo3 = () => {
    return (
        <ContainerScroll className="h-[350vh] bg-gradient-to-b from-black via-gray-900 to-black">
            <BentoGrid
                variant={"threeCells"}
                className="sticky left-0 top-0 h-svh w-full p-4"
            >
                {IMAGES.filter((_, index) => index <= 2).map((imageUrl, index) => (
                    <BentoCell
                        key={index}
                        className="overflow-hidden rounded-xl shadow-2xl border border-gray-800/50"
                    >
                        <img
                            className="size-full object-cover object-center transition-transform duration-700 hover:scale-105"
                            width="100%"
                            height="100%"
                            src={imageUrl}
                            alt={`Link Innovations innovation ${index + 1}`}
                        />
                    </BentoCell>
                ))}
            </BentoGrid>
            <ContainerScale className="text-center">
                <h1 className="max-w-4xl text-5xl md:text-7xl font-bold tracking-tight text-white font-orbitron">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Innovation
                    </span>
                    <br />
                    <span className="text-white">
                        Unleashed
                    </span>
                </h1>
                <p className="my-8 max-w-2xl text-lg md:text-xl text-gray-300/80 leading-relaxed">
                    Push boundaries with technology that adapts, scales, and delivers.
                    Your vision, our expertise, exceptional results.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        size="lg"
                    >
                        Start Building
                    </Button>
                    <Button
                        variant="outline"
                        className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                        size="lg"
                    >
                        Explore Solutions
                    </Button>
                </div>
            </ContainerScale>
        </ContainerScroll>
    )
}

export { LinkInnovationsHeroDemo, LinkInnovationsHeroDemo2, LinkInnovationsHeroDemo3 }
