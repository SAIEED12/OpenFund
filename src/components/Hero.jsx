import NextLink from "next/link";
import { Globe, Heart, Rocket, Zap } from "lucide-react";

import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "$2.4M+", label: "raised" },
  { value: "8,200+", label: "backers" },
  { value: "1,300", label: "campaigns" },
];

const backers = ["AL", "MK", "RS", "JT"];

const Underline = () => (
  <svg
    viewBox="0 0 180 12"
    fill="none"
    aria-hidden="true"
    className="absolute -bottom-2 left-0 h-3 w-full text-primary"
    preserveAspectRatio="none"
  >
    <path
      d="M2 9C40 3 90 2 178 7"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,var(--primary)/5%,transparent)]"
      />
      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-4 pt-16 pb-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:pt-24 lg:pb-32">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Badge variant="outline" className="gap-1.5 rounded-full px-3 py-1">
            <Heart className="size-3 text-primary" />
            Backed by open-source values
          </Badge>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Fund the ideas that{" "}
            <span className="relative whitespace-nowrap">
              shape tomorrow
              <Underline />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty">
            OpenFund gives everyone a stake in the projects that matter — from
            community solar to open hardware. Back what you believe in, or turn
            your own idea into reality.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button asChild size="lg" className="h-11 gap-2 px-6 text-base">
              <NextLink href="/start">
                <Rocket />
                Start a Campaign
              </NextLink>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 gap-2 px-6 text-base"
            >
              <NextLink href="/campaigns">Explore Campaigns</NextLink>
            </Button>
          </div>

          <dl className="mt-12 grid w-full max-w-md grid-cols-3 divide-x divide-border">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center px-4 lg:items-start">
                <dt className="order-2 text-sm text-muted-foreground">{stat.label}</dt>
                <dd className="order-1 text-2xl font-semibold tracking-tight">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-2xl"
          />
          <article className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-primary/5">
            <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-primary to-primary/70">
              <Globe className="size-14 text-primary-foreground" strokeWidth={1.5} />
              <Badge
                variant="secondary"
                className="absolute top-4 left-4 gap-1 rounded-full text-primary"
              >
                <Zap className="size-3" />
                Energy
              </Badge>
              <Badge className="absolute top-4 right-4 rounded-full bg-background/20 text-primary-foreground backdrop-blur-sm">
                Ending in 5 days
              </Badge>
            </div>

            <div className="p-6">
              <h2 className="text-lg font-semibold tracking-tight">Solar Schools Initiative</h2>
              <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
                Rooftop solar for 12 underfunded schools — cutting energy costs and
                teaching kids the power of clean energy.
              </p>

              <div className="mt-5">
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[78%] rounded-full bg-primary" />
                </div>
                <div className="mt-2.5 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">$86,400</span>
                  <span>of $110,000 goal</span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <div className="flex items-center gap-3">
                  <AvatarGroup>
                    {backers.map((initials) => (
                      <Avatar key={initials}>
                        <AvatarFallback>{initials}</AvatarFallback>
                      </Avatar>
                    ))}
                    <AvatarGroupCount>+389</AvatarGroupCount>
                  </AvatarGroup>
                  <div className="text-xs leading-tight">
                    <p className="font-medium text-foreground">412 backers</p>
                    <p className="text-muted-foreground">supported this campaign</p>
                  </div>
                </div>
                <Heart className="size-5 shrink-0 text-muted-foreground" />
              </div>
            </div>
          </article>

          <div className="absolute -top-4 -right-3 flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-xs font-medium shadow-md sm:-right-6">
            <Heart className="size-3.5 fill-primary text-primary" />
            New pledge: +$250
          </div>
          <div className="absolute -bottom-4 -left-3 flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-xs font-medium shadow-md sm:-left-6">
            <span className="size-2 rounded-full bg-emerald-500" />
            Funding verified
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;