import NextLink from "next/link";
import {
  ButtonRoot,
  ChipRoot,
  ChipLabel,
  CardRoot,
  CardContent,
  AvatarRoot,
  AvatarFallback,
} from "@heroui/react";
import { ArrowRight, Globe, Heart, Rocket, ShieldCheck, Zap } from "lucide-react";

const stats = [
  { value: "$2.4M", label: "routed via ledger" },
  { value: "8,204", label: "verified backers" },
  { value: "1,312", label: "campaigns live" },
];

const backers = ["AL", "MK", "RS", "JT"];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAF6EF] text-[#1C1917]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C2410C]/50 to-transparent"
      />
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 pt-14 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:px-8 lg:pt-20 lg:pb-24">
        <div className="flex flex-col items-start text-left animate-rise">
          <div className="flex flex-wrap items-center gap-2">
            <ChipRoot className="inline-flex items-center gap-1.5 rounded-full border border-[#E3D9C2] bg-white px-3 py-1.5">
              <span className="size-1.5 rounded-full bg-[#4D7C0F]" />
              <ChipLabel className="text-xs font-medium text-[#1C1917]">Ledger live · $2.4M routed</ChipLabel>
            </ChipRoot>
            <ChipRoot className="inline-flex items-center rounded-full bg-[#C2410C]/10 px-3 py-1.5">
              <ChipLabel className="font-mono text-[11px] text-[#9A3412]">5% flat fee</ChipLabel>
            </ChipRoot>
          </div>

          <h1 className="font-display mt-6 max-w-xl text-4xl leading-[1.04] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[4.2rem]">
            Fund the ideas that <em className="text-[#C2410C] not-italic underline decoration-[#C2410C]/30 decoration-4 underline-offset-8">shape tomorrow.</em>
          </h1>

          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[#78716C] text-pretty">
            OpenFund is crowdfunding with receipts. Back solar schools, open
            hardware, and neighborhood farms — every pledge public, every payout
            verified.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonRoot className="inline-flex h-12 items-center gap-2 rounded-full bg-[#C2410C] px-7 text-[15px] font-semibold text-white shadow-[0_8px_30px_-6px_rgb(194_65_12/0.5)] transition-all hover:-translate-y-px hover:bg-[#9A3412]">
              <NextLink href="/start" className="flex items-center gap-2">
                <Rocket className="size-4" />
                Start a Campaign
              </NextLink>
            </ButtonRoot>
            <ButtonRoot className="inline-flex h-12 items-center gap-2 rounded-full border border-[#E3D9C2] bg-white px-7 text-[15px] font-medium text-[#1C1917] transition-colors hover:bg-[#EDE6D6]">
              <NextLink href="/campaigns" className="flex items-center gap-2">
                Explore Campaigns
                <ArrowRight className="size-4" />
              </NextLink>
            </ButtonRoot>
          </div>

          <dl className="mt-10 grid w-full max-w-lg grid-cols-3 gap-6 border-t border-[#E3D9C2] pt-6">
            {stats.map((stat, i) => (
              <div key={stat.label} className={i > 0 ? "border-l border-[#E3D9C2] pl-6" : ""}>
                <dd className="font-display text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
                  {stat.value}
                </dd>
                <dt className="mt-1 font-mono text-[11px] tracking-wide text-[#78716C] uppercase">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <CardRoot className="relative overflow-hidden rounded-3xl border border-[#E3D9C2] bg-white card-shadow">
            <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-[#C2410C] via-[#9A3412] to-[#431407]">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(60%_80%_at_70%_20%,rgb(255_255_255/0.22),transparent_60%)]"
              />
              <Globe className="relative size-14 text-white" strokeWidth={1.25} />
              <ChipRoot className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1">
                <Zap className="size-3 text-[#C2410C]" />
                <ChipLabel className="text-xs font-semibold text-[#1C1917]">Energy</ChipLabel>
              </ChipRoot>
              <ChipRoot className="absolute top-4 right-4 inline-flex rounded-full bg-black/30 px-3 py-1">
                <ChipLabel className="font-mono text-[11px] text-white">Ending in 5 days</ChipLabel>
              </ChipRoot>
            </div>

            <CardContent className="p-6 sm:p-7">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-display text-xl font-semibold tracking-tight">
                  Solar Schools Initiative
                </h2>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#4D7C0F]/10 px-2.5 py-1 text-[11px] font-medium text-[#4D7C0F]">
                  <ShieldCheck className="size-3.5" />
                  Verified
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#78716C] text-pretty">
                Rooftop solar for 12 underfunded schools — cutting energy costs
                and teaching kids the power of clean energy.
              </p>

              <div className="mt-5" role="progressbar" aria-valuenow={78} aria-valuemin={0} aria-valuemax={100} aria-label="Funding progress">
                <div className="h-2 overflow-hidden rounded-full bg-[#EDE6D6]">
                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#9A3412] to-[#C2410C]" />
                </div>
                <div className="mt-2.5 flex items-center justify-between text-xs">
                  <span className="font-mono text-sm font-semibold">$86,400</span>
                  <span className="text-[#78716C]">of $110,000 goal · 78%</span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-[#EDE6D6] pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {backers.map((initials) => (
                      <AvatarRoot key={initials} className="size-8 border-2 border-white bg-[#EDE6D6]">
                        <AvatarFallback className="bg-[#EDE6D6] text-[11px] text-[#1C1917]">{initials}</AvatarFallback>
                      </AvatarRoot>
                    ))}
                    <span className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-[#1C1917] font-mono text-[10px] text-white">
                      +389
                    </span>
                  </div>
                  <div className="text-xs leading-tight">
                    <p className="font-semibold">412 backers</p>
                    <p className="text-[#78716C]">pledged this week</p>
                  </div>
                </div>
                <Heart className="size-5 shrink-0 text-[#D6CDB4] transition-colors hover:fill-[#C2410C] hover:text-[#C2410C]" />
              </div>
            </CardContent>
          </CardRoot>

          <div className="absolute -top-4 -right-2 flex items-center gap-2 rounded-full border border-[#E3D9C2] bg-white px-3.5 py-2 text-xs font-semibold card-shadow animate-float-soft sm:-right-5">
            <Heart className="size-3.5 fill-[#C2410C] text-[#C2410C]" />
            New pledge: +$250
          </div>
          <div className="absolute -bottom-4 -left-2 flex items-center gap-2 rounded-full border border-[#E3D9C2] bg-white px-3.5 py-2 font-mono text-xs text-[#78716C] card-shadow sm:-left-5">
            <span className="size-2 rounded-full bg-[#4D7C0F]" />
            0x8f3a…c21d confirmed
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
