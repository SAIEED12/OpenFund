import NextLink from "next/link";
import { ArrowRight, Globe, Heart, Rocket, ShieldCheck, Zap } from "lucide-react";

import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "$2.4M", label: "routed via ledger" },
  { value: "8,204", label: "verified backers" },
  { value: "1,312", label: "campaigns live" },
];

const backers = ["AL", "MK", "RS", "JT"];

const Hero = () => {
  return (
    <section className="ink-panel relative overflow-hidden text-[#F6F8F5]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3DDC97]/60 to-transparent"
      />
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 pt-14 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:px-8 lg:pt-20 lg:pb-24">
        <div className="flex flex-col items-start text-left animate-rise">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-[#3DDC97]" />
              Ledger live · $2.4M routed
            </Badge>
            <Badge className="gap-1.5 rounded-full border border-[#C9A86A]/30 bg-[#C9A86A]/10 px-3 py-1.5 font-mono text-[11px] text-[#C9A86A]">
              5% flat fee
            </Badge>
          </div>

          <h1 className="font-display mt-6 max-w-xl text-4xl leading-[1.04] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[4.2rem]">
            Fund the ideas that{" "}
            <span className="text-[#3DDC97]">shape tomorrow.</span>
          </h1>

          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/65 text-pretty">
            OpenFund is crowdfunding with receipts. Back solar schools, open
            hardware, and neighborhood farms — every pledge public, every payout
            verified.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 gap-2 rounded-full bg-[#3DDC97] px-7 text-[15px] font-semibold text-[#0B1210] shadow-[0_8px_30px_-6px_rgb(61_220_151/0.5)] transition-all hover:-translate-y-px hover:bg-[#5ce8ab] hover:text-[#0B1210]"
            >
              <NextLink href="/start">
                <Rocket />
                Start a Campaign
              </NextLink>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 gap-2 rounded-full border-white/20 bg-transparent px-7 text-[15px] font-medium text-white hover:bg-white/10 hover:text-white"
            >
              <NextLink href="/campaigns">
                Explore Campaigns
                <ArrowRight className="size-4" />
              </NextLink>
            </Button>
          </div>

          <dl className="mt-10 grid w-full max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-6">
            {stats.map((stat, i) => (
              <div key={stat.label} className={i > 0 ? "border-l border-white/10 pl-6" : ""}>
                <dd className="font-display text-2xl font-semibold tracking-tight text-white sm:text-[1.7rem]">
                  {stat.value}
                </dd>
                <dt className="mt-1 font-mono text-[11px] tracking-wide text-white/50 uppercase">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <article className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.06] shadow-[0_32px_80px_-24px_rgb(0_0_0/0.6)] backdrop-blur-xl">
            <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-[#14342B] via-[#0B1210] to-[#14342B]">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(60%_80%_at_70%_20%,rgb(61_220_151/0.22),transparent_60%)]"
              />
              <Globe className="relative size-14 text-[#3DDC97]" strokeWidth={1.25} />
              <Badge className="absolute top-4 left-4 gap-1 rounded-full border-0 bg-[#3DDC97] px-3 py-1 text-xs font-semibold text-[#0B1210]">
                <Zap className="size-3" />
                Energy
              </Badge>
              <Badge className="absolute top-4 right-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 font-mono text-[11px] text-white backdrop-blur-md">
                Ending in 5 days
              </Badge>
            </div>

            <div className="p-6 sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-display text-xl font-semibold tracking-tight text-white">
                  Solar Schools Initiative
                </h2>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#3DDC97]/25 bg-[#3DDC97]/10 px-2.5 py-1 text-[11px] font-medium text-[#3DDC97]">
                  <ShieldCheck className="size-3.5" />
                  Verified
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/60 text-pretty">
                Rooftop solar for 12 underfunded schools — cutting energy costs
                and teaching kids the power of clean energy.
              </p>

              <div className="mt-5">
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#0E9F6E] to-[#3DDC97]" />
                </div>
                <div className="mt-2.5 flex items-center justify-between text-xs">
                  <span className="font-mono text-sm font-semibold text-white">$86,400</span>
                  <span className="text-white/50">of $110,000 goal · 78%</span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
                <div className="flex items-center gap-3">
                  <AvatarGroup>
                    {backers.map((initials) => (
                      <Avatar key={initials} className="border-[#0B1210]">
                        <AvatarFallback className="bg-white/10 text-[11px] text-white">
                          {initials}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                    <AvatarGroupCount className="border-[#0B1210] bg-white/10 text-white">
                      +389
                    </AvatarGroupCount>
                  </AvatarGroup>
                  <div className="text-xs leading-tight">
                    <p className="font-semibold text-white">412 backers</p>
                    <p className="text-white/50">pledged this week</p>
                  </div>
                </div>
                <Heart className="size-5 shrink-0 text-white/40 transition-colors hover:fill-[#3DDC97] hover:text-[#3DDC97]" />
              </div>
            </div>
          </article>

          <div className="absolute -top-4 -right-2 flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-xs font-semibold text-foreground card-shadow animate-float-soft sm:-right-5">
            <Heart className="size-3.5 fill-[#0E9F6E] text-[#0E9F6E]" />
            New pledge: +$250
          </div>
          <div className="absolute -bottom-4 -left-2 flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 font-mono text-xs text-muted-foreground card-shadow sm:-left-5">
            <span className="size-2 rounded-full bg-[#0E9F6E]" />
            0x8f3a…c21d confirmed
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
