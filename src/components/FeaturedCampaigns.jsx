import NextLink from "next/link";
import { ArrowRight, Globe, Leaf, Monitor, Rocket } from "lucide-react";

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
    badgeVariant: "secondary",
    raised: "$86,400",
    goal: "$110,000",
    percent: 78,
    backers: 412,
    avatarInitials: ["AL", "MK", "RS"],
    extraBackers: 409,
    color: "from-primary to-primary/70",
  },
  {
    title: "Community Mushroom Farm",
    description:
      "A regenerative micro-farm turning vacant lots into food sources for the neighborhood.",
    icon: Leaf,
    badge: "Agriculture",
    badgeVariant: "secondary",
    raised: "$34,200",
    goal: "$45,000",
    percent: 76,
    backers: 187,
    avatarInitials: ["TM", "JB"],
    extraBackers: 185,
    color: "from-emerald-600 to-emerald-500",
  },
  {
    title: "Open Source droneOS",
    description:
      "Flight-stack firmware anyone can audit, modify, and deploy on consumer-grade hardware.",
    icon: Monitor,
    badge: "Technology",
    badgeVariant: "secondary",
    raised: "$12,800",
    goal: "$20,000",
    percent: 64,
    backers: 93,
    avatarInitials: ["KP", "LW", "NR"],
    extraBackers: 90,
    color: "from-violet-600 to-violet-500",
  },
];

const FeaturedCampaigns = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-4 rounded-full px-3 py-1">
            <Rocket className="mr-1.5 size-3" />
            Trending
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Campaigns gaining momentum
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Discover projects the community is backing right now. Every pledge
            brings an idea one step closer to reality.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-primary/5 transition-shadow hover:shadow-xl"
              >
                <div
                  className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${c.color}`}
                >
                  <Icon className="size-14 text-primary-foreground" strokeWidth={1.5} />
                  <Badge
                    variant="secondary"
                    className="absolute top-4 left-4 gap-1 rounded-full text-primary"
                  >
                    {c.badge}
                  </Badge>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
                    {c.description}
                  </p>

                  <div className="mt-5">
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${c.percent}%` }}
                      />
                    </div>
                    <div className="mt-2.5 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">{c.raised}</span>
                      <span>of {c.goal} goal</span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <div className="flex items-center gap-3">
                      <AvatarGroup>
                        {c.avatarInitials.map((initials) => (
                          <Avatar key={initials}>
                            <AvatarFallback>{initials}</AvatarFallback>
                          </Avatar>
                        ))}
                        <AvatarGroupCount>+{c.extraBackers}</AvatarGroupCount>
                      </AvatarGroup>
                      <div className="text-xs leading-tight">
                        <p className="font-medium text-foreground">
                          {c.backers.toLocaleString()} backers
                        </p>
                        <p className="text-muted-foreground">supported this campaign</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg" className="gap-2 px-6">
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
