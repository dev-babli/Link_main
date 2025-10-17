"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionItems = [
  {
    title: "Developer Onboarding",
    heading: "Get new developers up to speed, faster",
    description:
      "Automate onboarding tasks like account creation or secrets allocation. Speed information discovery with Catalogs, Plugins, and CQL. Make status clear and action obvious with Scorecards, Catalogs, and the Developer Homepage.",
    buttonText: "Onboard devs faster",
    buttonLink: "/solutions/developer-productivity",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-923774-home_acc_01.png?",
  },
  {
    title: "Modernization / Migrations",
    heading: "Shave months off major framework changes",
    description:
      "Define your ideal state for software or teams, and use live feeds from connected tools to track progress against any dimension. Target alerts to only those developers that need to take action to bring software or actions into alignment, speeding transition time.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-671672-home_acc_02.png?",
  },
  {
    title: "Production Readiness",
    heading: "Set standards and stay aligned",
    description:
      "Define production requirements for services, resources, APIs, models, and more. Supply templates to reduce risk and time to code, and track on-going alignment to standards with real-time scorecards and reporting that devs can also monitor themselves.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-929233-home_acc_03.png?",
  },
  {
    title: "Incident Response",
    heading: "Find owners, fix faster",
    description:
      "On-call information is only as good as ownership information, accessibility of context, and presence of runbooks. Ensure always-up-to-date ownership and enforce incident preparedness best practice to centralize critical information and cut response time.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-162518-home_acc_04.png?",
  },
  {
    title: "Self - Service",
    heading: "Unlock self-service that stays on the rails",
    description:
      "Make it easy for developers to build better from the start, without slowing them down. Software scaffolding, workflow automations, and one-click approvals ensure consistency across teams while reducing rote work for developers that need to move quickly.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-528406-home_acc_05.png?",
  },
  {
    title: "Backstage Migration",
    heading: "Ditch the chaos, keep your catalogs",
    description:
      "Define workflows that spin up accounts and allocate secrets. Make it easy to find information about anything. And make action obvious.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-330725-home_acc_06.png?",
  },
];

export default function UseCasesAccordion() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Accelerate any engineering excellence initiative
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-text-secondary">
            Spend less time building the basics, and more time capturing value.
            Learn how Cortex is driving measurable business outcomes for 100+
            enterprise customers.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="mt-16 w-full"
        >
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={item.title}
              value={`item-${index}`}
              className="border-b border-border-subtle"
            >
              <AccordionTrigger className="group py-8 text-left hover:no-underline [&_svg]:hidden">
                <div className="flex w-full items-start gap-6 md:items-center">
                  <span className="font-monospace text-xl text-text-tertiary transition-colors group-data-[state=open]:text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-12 pl-12 md:pl-14">
                <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-16">
                  <div className="flex flex-col gap-4 lg:w-1/2">
                    <h4 className="text-3xl font-semibold text-white">
                      {item.heading}
                    </h4>
                    <p className="text-body-lg text-text-secondary">
                      {item.description}
                    </p>
                    {item.buttonText && item.buttonLink && (
                      <Link
                        href={item.buttonLink}
                        className="mt-4 inline-block w-fit rounded-md bg-primary px-5 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        {item.buttonText}
                      </Link>
                    )}
                  </div>
                  <div className="w-full lg:w-1/2">
                    <Image
                      src={item.imageSrc}
                      alt={item.heading}
                      width={991}
                      height={912}
                      className="h-auto w-full rounded-lg"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}