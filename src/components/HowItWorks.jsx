import { Coins, Rocket, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";

const steps = [
  {
    n: "01",
    icon: Rocket,
    title: "Create your campaign",
    description:
      "Set a goal, tell your story, and add reward tiers — live in minutes, no approval committee.",
  },
  {
    n: "02",
    icon: Users,
    title: "Rally your backers",
    description:
      "Share one link. Momentum is public, so every pledge pulls the next one in.",
  },
  {
    n: "03",
    icon: Coins,
    title: "Get funded & launch",
    description:
      "Hit your goal and payouts release on a verifiable trail, 5% flat, nothing hidden.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[#EDEFEA] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge variant="outline" className="rounded-full bg-card px-3 py-1 font-mono text-[11px] tracking-[0.14em] text-mint-deep uppercase">
              Simple process
            </Badge>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Three steps to funded
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
            No gatekeepers. The community — not a committee — decides what gets built.
          </p>
        </div>

        <div className="relative mt-12 grid gap-5 md:grid-cols-3">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-12 top-16 hidden h-px bg-ink/10 md:block"
          />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.n}
                className="relative flex flex-col rounded-3xl border border-border bg-card p-7 card-shadow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-ink text-[#3DDC97]">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-sm font-medium text-muted-foreground/70">
                    {step.n}
                  </span>
                </div>
                <p className="mt-6 font-mono text-[11px] tracking-[0.16em] text-mint-deep uppercase">
                  Step {step.n}
                </p>
                <h3 className="font-display mt-1.5 text-xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
