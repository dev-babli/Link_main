"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-285291-64f0b289db8f59708c9bcee5_javier-de-vega-ruiz.webp?",
    name: "Javier de Vega Ruiz",
    title: "Chief Software Engineer",
    quote: "\"One of the biggest improvements we've seen since implementing Cortex is in our Mean Time to Restore- which we reduced by 67%. Being able to quickly find service information is a small operational change that has enormous impact.\"",
    companyLogoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/frame-1723498396-27.svg?",
    companyLogoAlt: "LetsGetChecked Logo",
  },
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-077535-franz-relias-bg.png?",
    name: "Franz Hemmer",
    title: "Principal Software Engineer",
    quote: "\"With Cortex, we’re not just managing services better; we’re fundamentally changing the way we work and collaborate to support the healthcare organizations who rely on us every day.\"",
    companyLogoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/relias-28.svg?",
    companyLogoAlt: "Relias Logo",
  },
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-700114-662bb585c4a3de5c98953d3b_shaun-mccormick-photo-1.webp?",
    name: "Shaun McCormick",
    title: "Principal Software Engineer",
    quote: "“We know if an engineer gets pulled out of what they’re doing, it takes 30 minutes to re-engage, Cortex lets us reduce noise and keep our team focused on the highest priority work.”",
    companyLogoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/press-center-_-bigcommerce-6-1-29.svg?",
    companyLogoAlt: "BigCommerce Logo",
  },
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-329039-amanda-jackson.png?",
    name: "Amanda Jackson",
    title: "Technical Program Manager, Rapid7",
    quote: "“Walk away from a spreadsheet for a minute, and it’s already stale. With Cortex, we never have that issue. I can just trust that information is always up to date, and we can leave devs alone that have already done what they need to do.”",
    companyLogoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/rapid7-30.svg?",
    companyLogoAlt: "Rapid7 Logo",
  },
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-355667-sven-diebold.png?",
    name: "Sven Diebold",
    title: "Manager of Platform Engineering",
    quote: "\"Cortex gives us the clarity and control we need to meet our goals without slowing down. It’s helped us move faster and build correctly from the start, and become an essential part of how we operate in a lot of different ways.\"",
    companyLogoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/workleap-dark-31.svg?",
    companyLogoAlt: "Workleap Logo",
  },
];

export default function TestimonialsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="bg-background-secondary py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center text-text-primary max-w-4xl mx-auto mb-12 lg:mb-16">
          Accelerating engineering excellence at world class organizations
        </h2>

        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="basis-full md:basis-5/6 lg:basis-4/5 xl:basis-3/4">
                <div className="p-1">
                  <div className="flex flex-col items-center text-center bg-background-tertiary p-8 rounded-xl border border-border-subtle shadow-md min-h-[450px] sm:min-h-[400px] md:min-h-[380px] lg:min-h-[420px] justify-between">
                    <div className="flex flex-col items-center">
                      <Image
                        src={testimonial.imageSrc}
                        alt={`Photo of ${testimonial.name}`}
                        width={88}
                        height={88}
                        className="rounded-full object-cover mb-6"
                      />
                      <blockquote className="mb-6">
                        <h4 className="text-xl md:text-2xl font-medium leading-normal text-text-primary">
                          {testimonial.quote}
                        </h4>
                      </blockquote>
                    </div>
                    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto pt-6">
                      <div className="text-center sm:text-left">
                        <p className="font-semibold text-text-primary">{testimonial.name}</p>
                        <p className="text-sm text-text-tertiary">{testimonial.title}</p>
                      </div>
                      <Image
                        src={testimonial.companyLogoSrc}
                        alt={testimonial.companyLogoAlt}
                        width={120}
                        height={28}
                        className="h-7 w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex items-center justify-center gap-2.5 pt-8">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                current === index ? "bg-primary" : "bg-muted hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="px-6 py-3 h-auto">
            <Link href="/demo">
              Schedule a demo
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/monitorplay-32.svg?"
                alt=""
                width={16}
                height={16}
                className="ml-2"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}