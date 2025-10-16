import {
  BatteryCharging,
  GitPullRequest,
  Layers,
  RadioTower,
  SquareKanban,
  WandSparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Feature {
  heading: string;
  description: string;
  icon: React.ReactNode;
}

interface Feature43Props {
  title?: string;
  features?: Feature[];
  buttonText?: string;
  buttonUrl?: string;
}

const Feature = ({
  title = "Why Choose Us?",
  features = [
    {
      heading: "Real-Time Rates",
      description:
        "Access live exchange rates updated every few seconds. Stay ahead with accurate and transparent data sourced from trusted global markets.",
      icon: <GitPullRequest className="size-6" />,
    },
    {
      heading: "Seamless Experience",
      description:
        "Enjoy a smooth and intuitive interface designed for effortless currency conversion. Whether on mobile or desktop, get instant results with zero hassle.",
      icon: <SquareKanban className="size-6" />,
    },
    {
      heading: "Reliable Data",
      description:
        "Our exchange rates are backed by verified market sources and financial APIs. You can trust every conversion to reflect real-world values accurately.",
      icon: <RadioTower className="size-6" />,
    },
    {
      heading: "Smart Insights",
      description:
        "Go beyond conversion — analyze trends, track rate history, and make informed exchange decisions with powerful insights and up-to-date analytics.",
      icon: <WandSparkles className="size-6" />,
    },
    {
      heading: "Global Coverage",
      description:
        "Convert Afghani to dozens of foreign currencies worldwide. From USD and EUR to INR and GBP, our platform covers all major and regional currencies.",
      icon: <Layers className="size-6" />,
    },
    {
      heading: "Speed & Efficiency",
      description:
        "Experience lightning-fast conversions optimized for performance. Our platform ensures quick responses and minimal load times for a flawless experience.",
      icon: <BatteryCharging className="size-6" />,
    },
  ],
  buttonText = "More Features",
  buttonUrl = "https://shadcnblocks.com",
}: Feature43Props) => {
  return (
    <section className="py-24">
      <div className="container">
        {title && (
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-pretty text-4xl font-bold lg:text-5xl">
              {title}
            </h2>
          </div>
        )}
        <div className="grid gap-10 overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.2 * i }}
              key={i}
              className="flex flex-col bg-white p-5 rounded-md shadow-xl"
            >
              <div className="text-white mb-5 bg-brand flex size-16 items-center justify-center rounded-full">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.heading}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        {buttonUrl && (
          <div className="mt-16 flex justify-center">
            <Button
              size="lg"
              variant="outline"
              className="rounded-none"
              asChild
            >
              <a href={buttonUrl}>{buttonText}</a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export { Feature };
