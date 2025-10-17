"use client";

import React from 'react';
import Image from 'next/image';
import { MapPin, Calendar, Circle } from 'lucide-react';

const IdpconEventSection = () => {
  return (
    <section className="bg-background-primary py-12 lg:py-20">
      <div className="container flex flex-col items-center gap-8">
        <h3 className="text-center text-4xl font-semibold leading-[1.3] tracking-[-0.01em] text-text-primary md:text-5xl">
          Join the engineering excellence movement
        </h3>
        <div className="relative mt-4 w-full max-w-7xl">
          <div className="lg:grid lg:grid-cols-2">
            <div
              className="relative flex flex-col justify-center gap-8 rounded-t-2xl border border-b-0 border-border-subtle bg-background-secondary p-6 text-center lg:items-start lg:gap-6 lg:rounded-l-2xl lg:rounded-tr-none lg:border-b lg:border-r-0 lg:p-8 lg:text-left"
              style={{
                backgroundImage: 'radial-gradient(ellipse at center, #1A1A1F, #0A0A0B)',
              }}
            >
              <div className="absolute left-6 top-6 rounded-full bg-background-tertiary px-3 py-1.5">
                <p className="font-monospace text-xs font-medium uppercase tracking-[0.05em] text-text-secondary">
                  main event of the year
                </p>
              </div>

              <div className="flex w-full flex-col items-center gap-8 pt-12 lg:items-start lg:gap-6 lg:pt-0">
                <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
                  <div className="flex items-center gap-2 font-monospace text-sm text-text-secondary">
                    <MapPin className="h-4 w-4" />
                    <span>NYC, Convene</span>
                  </div>
                  <div className="flex items-center gap-2 font-monospace text-sm text-text-secondary">
                    <Calendar className="h-4 w-4" />
                    <span>October 9, 2025</span>
                  </div>
                </div>

                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/ipdcon-logo-23.svg?"
                  alt="IDPCON logo"
                  width={423}
                  height={61}
                  className="h-auto w-full max-w-[423px] self-center lg:self-start"
                />

                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-start">
                  <span className="text-base text-text-secondary">New York City</span>
                  <Circle className="h-1 w-1 fill-current text-text-secondary/50" />
                  <span className="text-base text-text-secondary">250+ Engineering Leaders</span>
                  <Circle className="h-1 w-1 fill-current text-text-secondary/50" />
                  <span className="text-base text-text-secondary">12 Sessions</span>
                  <Circle className="h-1 w-1 fill-current text-text-secondary/50" />
                  <span className="text-base text-text-secondary">20 Roundtables</span>
                </div>
              </div>

              <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="https://idpcon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[46px] items-center justify-center gap-2 whitespace-nowrap rounded-md border border-border-subtle bg-secondary px-5 py-3 text-base font-semibold text-text-primary transition-colors hover:bg-accent"
                >
                  Learn more
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/arrow-up-right-white-24.svg?"
                    alt="arrow up right"
                    width={16}
                    height={16}
                  />
                </a>
                <a
                  href="https://web.cvent.com/event/8fce8225-b8d9-49c5-a758-fd1dd55cf9a3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[46px] items-center justify-center gap-2 whitespace-nowrap rounded-md bg-text-primary px-5 py-3 text-base font-semibold text-background-primary transition-colors hover:bg-gray-200"
                >
                  Register now
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/arrow-right-up-black-25.svg?"
                    alt="arrow right up"
                    width={16}
                    height={16}
                  />
                </a>
              </div>
            </div>

            <a
              href="#"
              aria-label="Watch 2024 Recap"
              className="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-b-2xl border border-t-0 border-border-subtle lg:aspect-auto lg:rounded-bl-none lg:rounded-r-2xl lg:border-t lg:border-l-0"
            >
              <video
                src="https://a-us.storyblok.com/f/1021527/x/0a2f34c7e1/idpcon-highlights.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-background-primary/50 transition-opacity duration-300 group-hover:bg-background-primary/70" />
              <div className="pointer-events-none absolute bottom-6 left-6 flex items-center gap-4">
                <p className="text-xl font-semibold text-text-primary">2024 Recap</p>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-text-primary">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/play-26.svg?"
                    alt="Play icon"
                    width={16}
                    height={16}
                    className="ml-1"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdpconEventSection;