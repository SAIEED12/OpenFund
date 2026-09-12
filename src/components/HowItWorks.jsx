"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ChipRoot, ChipLabel, CardRoot, CardContent } from "@heroui/react";
import { Coins, Rocket, Users } from "lucide-react";
import { Reveal, Stagger, Item } from "./MotionReveal";

const steps = [
  {
    n: "01",
    icon: Rocket,
    title: "Create your campaign",
    description:
      "Set a goal, tell your story, and add reward tiers — live in minutes, no approval committee.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    alt: "Creator planning a campaign at a laptop with notes",
  },
  {
    n: "02",
    icon: Users,
    title: "Rally your backers",
    description:
      "Share one link. Momentum is public, so every pledge pulls the next one in.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    alt: "Diverse group of backers celebrating together outdoors",
  },
  {
    n: "03",
    icon: Coins,
    title: "Get funded & launch",
    description:
      "Hit your goal and payouts release on a verifiable trail, 5% flat, nothing hidden.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    alt: "Team launching a project together in a workshop",
  },
];

const HowItWorks = () => {
  return (
    <section className="warm-band relative overflow-hidden border-y border-[#E3D9C2] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <ChipRoot className="inline-flex rounded-full border border-[#E3D9C2] bg-white px-3 py-1">
                <ChipLabel className="font-mono text-[11px] tracking-[0.14em] text-[#9A3412] uppercase">Simple process</ChipLabel>
              </ChipRoot>
              <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Three steps to funded
              </h2>
            </div>
            <p className="max-w-md text-[15px] leading-relaxed text-[#78716C]">
              No gatekeepers. The community — not a committee — decides what gets built.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-12">
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-12 top-16 hidden h-px bg-[#1C1917]/10 md:block"
            style={{ originX: 0 }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />

          <Stagger className="grid gap-5 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <Item key={step.n} className="h-full">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="h-full"
                  >
                    <CardRoot
                      className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#E3D9C2] bg-white card-shadow"
                    >
                    <div className="relative h-36 overflow-hidden bg-[#EDE6D6]">
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                      />
                      <span className="absolute bottom-3 left-4 flex size-10 items-center justify-center rounded-xl bg-white/95 text-[#C2410C] shadow-sm">
                        <Icon className="size-5" strokeWidth={1.75} />
                      </span>
                      <span className="absolute top-3 right-4 rounded-full bg-black/35 px-2.5 py-1 font-mono text-[11px] text-white backdrop-blur-md">
                        {step.n}
                      </span>
                    </div>
                    <CardContent className="flex flex-col p-7 pt-5">
                      <p className="mt-6 font-mono text-[11px] tracking-[0.16em] text-[#9A3412] uppercase">
                        Step {step.n}
                      </p>
                      <h3 className="font-display mt-1.5 text-xl font-semibold tracking-tight">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#78716C] text-pretty">
                        {step.description}
                      </p>
                    </CardContent>
                    </CardRoot>
                  </motion.div>
                </Item>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
