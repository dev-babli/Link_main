"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CaseStudyCards = () => {
  const letsGetCheckedStats = [
    { value: '67%', label: 'MTTR reduction' },
    { value: '2x', label: 'Deployment frequency' },
  ];

  const rapid7Stats = [
    { value: '3,000', label: 'RDS instances migrated in < 2 weeks' },
  ];

  const CaseStudyCard = ({
    company,
    stats,
    href,
  }: {
    company: string;
    stats: { value: string; label: string }[];
    href: string;
  }) => (
    <Link href={href} className="group block max-w-[170px] sm:max-w-[235px]">
      <div className="flex cursor-pointer flex-col justify-between gap-5 text-left">
        <div className="flex w-full items-center justify-start gap-3">
          <div className="h-7 w-fit text-lg font-semibold text-text-secondary">{company}</div>
          <div className="flex h-5 min-w-5 items-center justify-center rounded-full border border-zinc-700 transition-colors group-hover:border-transparent group-hover:bg-white">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.33398 4.66667L4.66732 1.33333" stroke="#8A8A93" strokeWidth="1.2" strokeLinecap="round" className="group-hover:stroke-black" />
              <path d="M1.33398 1.33333H4.66732V4.66667" stroke="#8A8A93" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-black" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-row items-center gap-2 sm:flex-col sm:items-start sm:gap-2">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="max-w-[120px] text-xs !leading-tight text-text-tertiary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );

  return (
    <>
      <div className="hidden lg:mb-4 lg:mt-3 lg:flex lg:gap-5">
        <CaseStudyCard company="LetsGetChecked" stats={letsGetCheckedStats} href="/case-studies/letsgetchecked" />
        <div className="h-full w-px bg-border"></div>
        <CaseStudyCard company="Rapid7" stats={rapid7Stats} href="/case-studies/rapid7" />
      </div>
      <div className="mt-7 flex items-center justify-center gap-4 lg:hidden">
        <CaseStudyCard company="LetsGetChecked" stats={letsGetCheckedStats} href="/case-studies/letsgetchecked" />
        <div className="h-full w-px self-stretch bg-border"></div>
        <CaseStudyCard company="Rapid7" stats={rapid7Stats} href="/case-studies/rapid7" />
      </div>
    </>
  );
};


const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black pt-16 lg:pt-32">
       <div className="absolute inset-x-0 top-0 z-0 h-full w-full bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.15)_0%,_transparent_50%)]"></div>
       <div className="absolute inset-0 z-0 animate-[float_60s_linear_infinite]">
         <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-354620-stars.26f29084.png?"
          alt="Stars background"
          layout="fill"
          objectFit="cover"
          quality={75}
          className="opacity-20"
         />
       </div>

      <div className="container relative z-10 mx-auto flex flex-col justify-center gap-9 px-6 text-center sm:gap-10 lg:flex-row lg:items-stretch lg:text-left">
        <div className="flex flex-col justify-between gap-6 sm:w-[600px] lg:w-auto lg:flex-1">
          <div className="flex w-full flex-col items-center gap-6 lg:items-start">
            <p className="text-lg text-text-tertiary">
              Ship reliable, secure, and efficient software, faster, with Cortex.
            </p>
            <h1 className="relative z-10 w-[300px] text-4xl font-bold leading-tight tracking-tighter text-white sm:w-full md:text-5xl lg:text-[72px]">
              Don’t let{' '}
              <span className="relative inline-block">
                <span className="relative z-50">vibe coding</span>
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/vibe-coding-shadow.42132b6b-2.svg?"
                  alt=""
                  width={575}
                  height={223}
                  className="pointer-events-none absolute left-1/2 top-1/2 z-20 min-w-[350px] -translate-x-1/2 -translate-y-1/2 sm:min-h-[223px] sm:min-w-[575px]"
                />
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-354620-stars.26f29084.png?"
                  alt=""
                  width={293}
                  height={152}
                  className="pointer-events-none absolute bottom-2 left-1/2 z-10 min-h-[152px] min-w-[293px] -translate-x-1/2"
                />
              </span>{' '}
              turn into{' '}
              <span className="relative inline-block">
                <span className="relative z-50 bg-gradient-to-b from-white to-[#e76363] bg-clip-text text-transparent">
                  bad vibes.
                </span>
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/bad-vibes-shadow.8ca5239d-3.svg?"
                  alt=""
                  width={404}
                  height={171}
                  className="pointer-events-none absolute left-1/2 top-1/2 z-30 min-w-[180px] -translate-x-1/2 -translate-y-1/2 translate-y-3 sm:min-h-[171px] sm:min-w-[404px]"
                />
              </span>
            </h1>
            <p className="max-w-xl text-lg text-text-secondary md:text-xl">
              The internal developer portal that uses AI to make sense of your data, figure out the next unlock for your team, and solve it. All in one place.
            </p>
            <div className="mt-4 flex flex-col items-center gap-2 sm:mx-auto sm:flex-row lg:mx-0">
              <Link
                href="/demo"
                className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
              >
                Book a live demo
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/caretright-4.svg?"
                  alt="Arrow right"
                  width={13}
                  height={12}
                />
              </Link>
              <Link
                href="https://app.demo.cortex.io/admin/home?userpilot=ZXhwZXJpZW5jZTpZY2laRGNYdEdX&utm_source=demo-trial"
                className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md border border-border bg-secondary/10 px-5 py-3 font-semibold text-white backdrop-blur-[10px] transition-colors hover:bg-white/10 sm:w-auto"
              >
                See it in action
              </Link>
            </div>
          </div>
          <CaseStudyCards />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;