import Image from 'next/image';
import { BarChartBig, ListChecks, ShieldCheck } from 'lucide-react';

const copilotsData = [
  {
    icon: BarChartBig,
    title: 'AI Impact Analysis',
    description: 'How much is AI impacting your business? Prove it with numbers, not vibes.',
    subDescription: 'Our OOTB AI Impact Dashboard shows how your AI tools impact not just your velocity, but incidents, code quality, and more.',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-765206-ai-section-image-1.png?',
    alt: 'AI Impact Analysis Dashboard',
  },
  {
    icon: ListChecks,
    title: 'AI Maturity Framework',
    description: 'Don’t get left behind. \nMake the most of your AI tools.',
    subDescription: 'Optimize how teams use AI across your organization with Scorecards. Track adoption of AI prompts, cursor.md files and agent instructions, review processes, and more.',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-572699-ai-section-image-2.png?',
    alt: 'AI Maturity Framework Dashboard',
  },
  {
    icon: ShieldCheck,
    title: 'AI Readiness Framework',
    description: 'Are you ready for what could go wrong with AI coding assistants?',
    subDescription: 'Adopt AI on a stable foundation, not a broken one. Ensure your organization has the ownership, testing, and security processes needed before AI accelerates everything.',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-122524-ai-section-image-3.png?',
    alt: 'AI Readiness Framework Dashboard',
  },
];

const AiCopilotsSection = () => {
  return (
    <section className="relative mt-16 flex !max-w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-purple-light to-primary-purple px-0 pb-20 pt-20 md:pb-[90px] md:pt-28 xl:pb-[130px] xl:pt-[130px]">
      <Image
        alt="Wavy lines background"
        width={564}
        height={280.5}
        className="pointer-events-none absolute -left-[5%] top-0 h-auto w-1/2 min-w-[564px] opacity-70"
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/images/next-277670-wavy-lines.cc82dd52.png?"
      />
      <div className="z-10 w-full px-7 text-center">
        <div className="relative mx-auto mb-4 h-[30px] w-[30px]">
          <Image
            alt="Sparkle icon"
            fill
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1709bbb6-f316-4d92-9d04-5fe8ad61ac79-cortex-io/assets/svgs/spark-icon.934f8ab1-22.svg?"
            className="!relative"
          />
        </div>
        <h2 className="mx-auto max-w-[800px] text-4xl font-bold tracking-tight text-text-primary md:text-5xl">
          AI Copilots are writing more of your code.
          <br />
          What does that mean for your customers?
        </h2>
        <p className="mx-auto mt-4 max-w-[55ch] text-lg text-text-secondary md:mt-2">
          Lead your organization's AI transformation with confidence
        </p>
      </div>

      <div className="z-10 mt-20 flex w-full flex-col justify-between gap-16 px-6 md:px-12 xl:mt-[100px] xl:flex-row xl:gap-8">
        {copilotsData.map((item, index) => (
          <div key={index} className="group relative flex w-full flex-col xl:w-1/3">
            <div className="relative w-full rounded-2xl border-border-subtle border border-b-0 transition-all duration-300 xl:group-hover:-translate-y-5">
              <Image
                alt={item.alt}
                width={401}
                height={182}
                className="w-full rounded-t-2xl"
                src={item.imageSrc}
              />
            </div>
            <div className="relative z-10 -mt-1 rounded-b-2xl rounded-t-lg bg-card p-6 pb-8 transition-all duration-300 xl:rounded-t-none xl:group-hover:-translate-y-5 xl:group-hover:rounded-t-lg">
              <div className="flex items-center gap-3">
                <item.icon className="h-[25px] w-[25px] text-purple-light" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-text-primary">{item.title}</h3>
              </div>
              <p className="mt-4 whitespace-pre-line text-base text-text-secondary">{item.description}</p>
              <p className="mt-2 text-sm text-text-tertiary">{item.subDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AiCopilotsSection;