'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface InfiniteCardsProps {
    children: React.ReactNode;
    className?: string;
    cards: Array<{
        id: string;
        title: string;
        description: string;
        image: string;
    }>;
}

export default function InfiniteCards({
    children,
    className = '',
    cards
}: InfiniteCardsProps) {
    const galleryRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLUListElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const prevRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!galleryRef.current || !cardsRef.current) return;

        let iteration = 0;
        const spacing = 0.1;
        const snapTime = gsap.utils.snap(spacing);
        const cardElements = cardsRef.current.querySelectorAll('li');

        const animateFunc = (element: Element) => {
            const tl = gsap.timeline();
            tl.fromTo(element,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false }
            )
                .fromTo(element,
                    { xPercent: 400 },
                    { xPercent: -400, duration: 1, ease: "none", immediateRender: false }, 0
                );
            return tl;
        };

        const buildSeamlessLoop = (items: NodeListOf<Element>, spacing: number, animateFunc: (element: Element) => gsap.core.Timeline) => {
            const rawSequence = gsap.timeline({ paused: true });
            const seamlessLoop = gsap.timeline({
                paused: true,
                repeat: -1,
                onRepeat() {
                    this._time === this._dur && (this._tTime += this._dur - 0.01);
                },
                onReverseComplete() {
                    this.totalTime(this.rawTime() + this.duration() * 100);
                }
            });

            const cycleDuration = spacing * items.length;
            let dur: number;

            items.forEach((item, i) => {
                const anim = animateFunc(items[i % items.length]);
                rawSequence.add(anim, i * spacing);
                dur || (dur = anim.duration());
            });

            seamlessLoop.fromTo(rawSequence, {
                time: cycleDuration + dur / 2
            }, {
                time: "+=" + cycleDuration,
                duration: cycleDuration,
                ease: "none"
            });

            return seamlessLoop;
        };

        const seamlessLoop = buildSeamlessLoop(cardElements, spacing, animateFunc);
        const playhead = { offset: 0 };
        const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());

        const scrub = gsap.to(playhead, {
            offset: 0,
            onUpdate() {
                seamlessLoop.time(wrapTime(playhead.offset));
            },
            duration: 0.5,
            ease: "power3",
            paused: true
        });

        const trigger = ScrollTrigger.create({
            start: 0,
            onUpdate(self) {
                const scroll = self.scroll();
                if (scroll > self.end - 1) {
                    wrap(1, 2);
                } else if (scroll < 1 && self.direction < 0) {
                    wrap(-1, self.end - 2);
                } else {
                    scrub.vars.offset = (iteration + self.progress) * seamlessLoop.duration();
                    scrub.invalidate().restart();
                }
            },
            end: "+=3000",
            pin: galleryRef.current
        });

        const progressToScroll = (progress: number) => gsap.utils.clamp(1, trigger.end - 1, gsap.utils.wrap(0, 1, progress) * trigger.end);

        const wrap = (iterationDelta: number, scrollTo: number) => {
            iteration += iterationDelta;
            trigger.scroll(scrollTo);
            trigger.update();
        };

        const scrollToOffset = (offset: number) => {
            const snappedTime = snapTime(offset);
            const progress = (snappedTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration();
            const scroll = progressToScroll(progress);
            if (progress >= 1 || progress < 0) {
                return wrap(Math.floor(progress), scroll);
            }
            trigger.scroll(scroll);
        };

        ScrollTrigger.addEventListener("scrollEnd", () => scrollToOffset(scrub.vars.offset));

        if (nextRef.current) {
            nextRef.current.addEventListener("click", () => scrollToOffset(scrub.vars.offset + spacing));
        }
        if (prevRef.current) {
            prevRef.current.addEventListener("click", () => scrollToOffset(scrub.vars.offset - spacing));
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [cards]);

    return (
        <div ref={galleryRef} className="gallery relative h-screen overflow-hidden">
            <ul ref={cardsRef} className="cards absolute inset-0 flex">
                {cards.map((card, index) => (
                    <li key={card.id} className="flex-shrink-0 w-80 h-96 mx-4 bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                            <p className="text-gray-600">{card.description}</p>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <button ref={prevRef} className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors">
                    Previous
                </button>
                <button ref={nextRef} className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors">
                    Next
                </button>
            </div>

            {children}
        </div>
    );
}

