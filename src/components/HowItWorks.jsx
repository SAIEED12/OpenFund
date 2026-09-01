import { Coins, Rocket, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";

const steps = [
  {
    icon: Rocket,
    title: "Create your campaign",
    description:
      "Set a goal, tell your story, and set reward tiers — it takes just a few minutes to go live.",
  },
  {
    icon: Users,
    title: "Rally your backers",
    description:
      "Share your page, build momentum, and watch your community rally behind the idea.",
  },
  {
    icon: Coins,
    title: "Get funded & launch",
    description:
      "Hit your goal, collect funds, and turn your vision into something real for the world.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-muted py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4 rounded-full px-3 py-1">
            Simple process
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How OpenFund works
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Three steps between you and the project you&apos;ve been dreaming of.
          </p>
        </div>

        <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-7 hidden h-px bg-border lg:block"
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex size-14 items-center justify-center rounded-full border border-border bg-background shadow-sm">
                  <Icon className="size-6 text-foreground" strokeWidth={1.5} />
                </div>
                <span className="mt-4 text-sm font-semibold text-muted-foreground">
                  Step {i + 1}
                </span>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground text-pretty">
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
