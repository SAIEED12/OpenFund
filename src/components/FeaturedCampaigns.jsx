import NextLink from "next/link";
import Image from "next/image";
import { ButtonRoot, ChipRoot, ChipLabel, CardRoot, CardContent, AvatarRoot, AvatarFallback } from "@heroui/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const campaigns = [
  {
    title: "Solar Schools Initiative",
    description:
      "Rooftop solar for 12 underfunded schools — cutting energy costs and teaching kids the power of clean energy.",
    // Photo: solar panel array (Unsplash)
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
    alt: "Rows of solar panels under a blue sky",
    badge: "Energy",
    raised: "$86,400",
    goal: "$110,000",
    percent: 78,
    backers: 412,
    avatarInitials: ["AL", "MK", "RS"],
    extraBackers: 409,
    daysLeft: "5 days left",
    tint: "from-[#C2410C] to-[#7C2D12]",
  },
  {
    title: "Community Mushroom Farm",
    description:
      "A regenerative micro-farm turning vacant lots into food sources for the neighborhood.",
    // Photo: community garden beds (Unsplash)
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80",
    alt: "Volunteers tending lush community garden beds",
    badge: "Agriculture",
    raised: "$34,200",
    goal: "$45,000",
    percent: 76,
    backers: 187,
    avatarInitials: ["TM", "JB"],
    extraBackers: 185,
    daysLeft: "12 days left",
    tint: "from-[#4D7C0F] to-[#365314]",
  },
  {
    title: "Open Source droneOS",
    description:
      "Flight-stack firmware anyone can audit, modify, and deploy on consumer-grade hardware.",
    // Photo: quadcopter drone in flight (Unsplash)
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=900&q=80",
    alt: "Quadcopter drone flying at sunset",
    badge: "Technology",
    raised: "$12,800",
    goal: "$20,000",
    percent: 64,
    backers: 93,
    avatarInitials: ["KP", "LW", "NR"],
    extraBackers: 90,
    daysLeft: "21 days left",
    tint: "from-[#78350F] to-[#1C1917]",
  },
];

const FeaturedCampaigns = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAF6EF] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <ChipRoot className="inline-flex rounded-full border border-[#E3D9C2] bg-white px-3 py-1">
              <ChipLabel className="font-mono text-[11px] tracking-[0.14em] text-[#9A3412] uppercase">Trending now</ChipLabel>
            </ChipRoot>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Campaigns gaining momentum
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#78716C]">
              The community is backing these right now. Every pledge is public
              — momentum you can verify.
            </p>
          </div>
          <ButtonRoot className="hidden items-center gap-2 rounded-full border border-[#E3D9C2] bg-white px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[#EDE6D6] sm:inline-flex">
            <NextLink href="/campaigns" className="flex items-center gap-2">
              View All Campaigns
              <ArrowRight className="size-4" />
            </NextLink>
          </ButtonRoot>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((c) => {
            return (
              <CardRoot
                key={c.title}
                className="group flex flex-col overflow-hidden rounded-3xl border border-[#E3D9C2] bg-white card-shadow transition-all duration-300 hover:-translate-y-1.5 hover:lift-shadow"
              >
                <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${c.tint}`}>
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent"
                  />
                  <ChipRoot className="absolute top-4 left-4 inline-flex rounded-full bg-white/95 px-3 py-1">
                    <ChipLabel className="text-[11px] font-semibold text-[#1C1917]">{c.badge}</ChipLabel>
                  </ChipRoot>
                  <span className="absolute top-4 right-4 rounded-full bg-black/35 px-2.5 py-1 font-mono text-[11px] text-white backdrop-blur-md">
                    {c.daysLeft}
                  </span>
                </div>

                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-[17px] font-semibold tracking-tight">{c.title}</h3>
                    <ArrowUpRight className="size-4 shrink-0 text-[#A8A29E] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C2410C]" />
                  </div>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-[#78716C] text-pretty">
                    {c.description}
                  </p>

                  <div className="mt-5" role="progressbar" aria-valuenow={c.percent} aria-valuemin={0} aria-valuemax={100} aria-label={`${c.title} funding progress`}>
                    <div className="h-1.5 overflow-hidden rounded-full bg-[#EDE6D6]">
                      <div
                        className="h-full rounded-full bg-[#C2410C] transition-all"
                        style={{ width: `${c.percent}%` }}
                      />
                    </div>
                    <div className="mt-2.5 flex items-center justify-between text-xs">
                      <span className="font-mono text-[13px] font-semibold">{c.raised}</span>
                      <span className="text-[#78716C]">of {c.goal} · {c.percent}%</span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3 border-t border-[#EDE6D6] pt-4">
                    <div className="flex -space-x-2">
                      {c.avatarInitials.map((initials) => (
                        <AvatarRoot key={initials} className="size-7 border-2 border-white bg-[#EDE6D6]">
                          <AvatarFallback className="bg-[#EDE6D6] text-[10px] text-[#1C1917]">{initials}</AvatarFallback>
                        </AvatarRoot>
                      ))}
                      <span className="flex size-7 items-center justify-center rounded-full border-2 border-white bg-[#1C1917] font-mono text-[9px] text-white">
                        +{c.extraBackers}
                      </span>
                    </div>
                    <p className="text-xs text-[#78716C]">
                      <span className="font-semibold text-[#1C1917]">{c.backers.toLocaleString()} backers</span>
                      {" "}· verified
                    </p>
                  </div>
                </CardContent>
              </CardRoot>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
