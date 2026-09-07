import NextLink from "next/link";
import { ArrowRight, ArrowUpRight, Globe, Leaf, Monitor } from "lucide-react";

import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const campaigns = [
  {
    title: "Solar Schools Initiative",
    description:
      "Rooftop solar for 12 underfunded schools — cutting energy costs and teaching kids the power of clean energy.",
    icon: Globe,
    badge: "Energy",
    raised: "$86,400",
    goal: "$110,000",
    percent: 78,
    backers: 412,
    avatarInitials: ["AL", "MK", "RS"],
    extraBackers: 409,
    daysLeft: "5 days left",
    tint: "from-[#14342B] to-[#0B1210]",
    accent: "text-[#3DDC97]",
  },
  {
    title: "Community Mushroom Farm",
    description:
      "A regenerative micro-farm turning vacant lots into food sources for the neighborhood.",
    icon: Leaf,
    badge: "Agriculture",
    raised: "$34,200",
    goal: "$45,000",
    percent: 76,
    backers: 187,
    avatarInitials: ["TM", "JB"],
    extraBackers: 185,
    daysLeft: "12 days left",
    tint: "from-[#1d3a2a] to-[#0e241b]",
    accent: "text-[#3DDC97]",
  },
  {
    title: "Open Source droneOS",
    description:
      "Flight-stack firmware anyone can audit, modify, and deploy on consumer-grade hardware.",
    icon: Monitor,
    badge: "Technology",
    raised: "$12,800",
    goal: "$20,000",
    percent: 64,
    backers: 93,
    avatarInitials: ["KP", "LW", "NR"],
    extraBackers: 90,
    daysLeft: "21 days left",
    tint: "from-[#1c2b33] to-[#0b1210]",
    accent: "text-[#C9A86A]",
  },
];

const FeaturedCampaigns = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Badge variant="outline" className="rounded-full border-border bg-card px-3 py-1 font-mono text-[11px] tracking-[0.14em] text-mint-deep uppercase">
              Trending now
            </Badge>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Campaigns gaining momentum
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              The community is backing these right now. Every pledge is public
              — momentum you can verify.
            </p>
          </div>
          <Button asChild variant="outline" className="hidden gap-2 rounded-full sm:inline-flex">
            <NextLink href="/campaigns">
              View All Campaigns
              <ArrowRight className="size-4" />
            </NextLink>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card card-shadow transition-all duration-300 hover:-translate-y-1.5 hover:lift-shadow"
              >
                <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${c.tint}`}>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(55%_75%_at_70%_20%,rgb(61_220_151/0.18),transparent_60%)]"
                  />
                  <Icon className="relative size-13 text-white/90 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.25} />
                  <Badge className="absolute top-4 left-4 rounded-full border-0 bg-white/95 px-3 py-1 text-[11px] font-semibold text-ink">
                    {c.badge}
                  </Badge>
                  <span className="absolute top-4 right-4 rounded-full border border-white/20 bg-black/35 px-2.5 py-1 font-mono text-[11px] text-white/85 backdrop-blur-md">
                    {c.daysLeft}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-[17px] font-semibold tracking-tight">{c.title}</h3>
                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-mint-deep" />
                  </div>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {c.description}
                  </p>

                  <div className="mt-5">
                    <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-mint-deep to-mint transition-all"
                        style={{ width: `${c.percent}%` }}
                      />
                    </div>
                    <div className="mt-2.5 flex items-center justify-between text-xs">
                      <span className="font-mono text-[13px] font-semibold text-foreground">{c.raised}</span>
                      <span className="text-muted-foreground">of {c.goal} · {c.percent}%</span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                    <AvatarGroup>
                      {c.avatarInitials.map((initials) => (
                        <Avatar key={initials}>
                          <AvatarFallback className="text-[11px]">{initials}</AvatarFallback>
                        </Avatar>
                      ))}
                      <AvatarGroupCount>+{c.extraBackers}</AvatarGroupCount>
                    </AvatarGroup>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">{c.backers.toLocaleString()} backers</span>
                      {" "}· verified
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Button asChild variant="outline" size="lg" className="gap-2 rounded-full px-6">
            <NextLink href="/campaigns">
              View All Campaigns
              <ArrowRight className="size-4" />
            </NextLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
