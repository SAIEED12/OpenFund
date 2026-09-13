"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  CardRoot,
  CardContent,
  ChipRoot,
  ChipLabel,
  AvatarRoot,
  AvatarFallback,
} from "@heroui/react";
import { ArrowUpRight, Search, SlidersHorizontal, XCircle } from "lucide-react";
import { Reveal, Stagger, Item } from "./MotionReveal";

const campaigns = [
  {
    title: "Solar Schools Initiative",
    description:
      "Rooftop solar for 12 underfunded schools — cutting energy costs and teaching kids the power of clean energy.",
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
    daysLeft: "5",
    tint: "from-[#C2410C] to-[#7C2D12]",
  },
  {
    title: "Community Mushroom Farm",
    description:
      "A regenerative micro-farm turning vacant lots into food sources for the neighborhood.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80",
    alt: "Volunteers tending lush community garden beds",
    badge: "Agriculture",
    raised: "$12,300",
    goal: "$25,000",
    percent: 49,
    backers: 187,
    avatarInitials: ["TM", "JB"],
    extraBackers: 185,
    daysLeft: "12",
    tint: "from-[#4D7C0F] to-[#365314]",
  },
  {
    title: "Open Source droneOS",
    description:
      "Flight-stack firmware anyone can audit, modify, and deploy on consumer-grade hardware.",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=900&q=80",
    alt: "Quadcopter drone flying at sunset",
    badge: "Technology",
    raised: "$34,200",
    goal: "$40,000",
    percent: 85,
    backers: 294,
    avatarInitials: ["KP", "LW", "NR"],
    extraBackers: 291,
    daysLeft: "8",
    tint: "from-[#78350F] to-[#1C1917]",
  },
  {
    title: "River Cleanup Crew",
    description:
      "Volunteer-led waterway restoration with real-time pollution tracking and community alerts.",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=80",
    alt: "Misty river valley at dawn with lush green banks",
    badge: "Community",
    raised: "$8,900",
    goal: "$15,000",
    percent: 59,
    backers: 143,
    avatarInitials: ["RJ", "KM"],
    extraBackers: 141,
    daysLeft: "18",
    tint: "from-[#0E7490] to-[#164E63]",
  },
  {
    title: "Digital Literacy for Seniors",
    description:
      "Free workshops teaching everyday tech skills — video calls, online banking, and scam awareness.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
    alt: "Seniors gathered around laptops in a bright classroom",
    badge: "Education",
    raised: "$5,600",
    goal: "$12,000",
    percent: 47,
    backers: 89,
    avatarInitials: ["DP"],
    extraBackers: 88,
    daysLeft: "24",
    tint: "from-[#7C3AED] to-[#4C1D95]",
  },
  {
    title: "Urban Beekeeping Network",
    description:
      "Rooftop hives across the city producing local honey while boosting urban pollinator populations.",
    image:
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=900&q=80",
    alt: "Beekeeper tending frames on a sunlit rooftop apiary",
    badge: "Agriculture",
    raised: "$18,750",
    goal: "$20,000",
    percent: 94,
    backers: 231,
    avatarInitials: ["SB", "AH", "WC"],
    extraBackers: 228,
    daysLeft: "3",
    tint: "from-[#CA8A04] to-[#854D0E]",
  },
  {
    title: "Clean Water Micro-Lab",
    description:
      "Portable water-testing kits for rural communities — identifying contaminants in under 30 minutes.",
    image:
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=900&q=80",
    alt: "Clear water being poured into a testing vial outdoors",
    badge: "Technology",
    raised: "$42,100",
    goal: "$60,000",
    percent: 70,
    backers: 356,
    avatarInitials: ["EN", "FY"],
    extraBackers: 354,
    daysLeft: "15",
    tint: "from-[#0284C7] to-[#0C4A6E]",
  },
  {
    title: "Neighborhood Tool Library",
    description:
      "Shared workshop with power tools, 3D printers, and sewing machines — borrow what you need, return when done.",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=80",
    alt: "Organized wall of hand tools in a bright workshop",
    badge: "Community",
    raised: "$3,200",
    goal: "$8,000",
    percent: 40,
    backers: 67,
    avatarInitials: ["GL", "TP", "MW"],
    extraBackers: 64,
    daysLeft: "30",
    tint: "from-[#B45309] to-[#78350F]",
  },
];

const allCategories = ["All", ...new Set(campaigns.map((c) => c.badge))];

const sortOptions = [
  { value: "trending", label: "Most Funded" },
  { value: "backers", label: "Most Backers" },
  { value: "ending", label: "Ending Soon" },
  { value: "newest", label: "Newest" },
];

const parseDays = (d) => parseInt(d, 10);

const ExploreCampaigns = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("trending");

  const filtered = useMemo(() => {
    let result = [...campaigns];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.badge.toLowerCase().includes(q),
      );
    }

    if (category !== "All") {
      result = result.filter((c) => c.badge === category);
    }

    switch (sort) {
      case "trending":
        result.sort((a, b) => b.percent - a.percent);
        break;
      case "backers":
        result.sort((a, b) => b.backers - a.backers);
        break;
      case "ending":
        result.sort((a, b) => parseDays(a.daysLeft) - parseDays(b.daysLeft));
        break;
      default:
        break;
    }

    return result;
  }, [search, category, sort]);

  const clearAll = () => {
    setSearch("");
    setCategory("All");
    setSort("trending");
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF6EF] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <ChipRoot className="inline-flex rounded-full border border-[#E3D9C2] bg-white px-3 py-1">
              <ChipLabel className="font-mono text-[11px] tracking-[0.14em] text-[#9A3412] uppercase">
                Explore
              </ChipLabel>
            </ChipRoot>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Find a campaign to back
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#78716C]">
              Browse active campaigns. Every pledge is public, every payout
              verified on-chain.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#A8A29E]" />
              <input
                type="text"
                placeholder="Search campaigns..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-11 w-full rounded-xl border border-[#D9CDB2] bg-white pr-10 pl-10 text-[15px] outline-none placeholder:text-[#A8A29E] hover:border-[#C2410C]/60 focus:border-[#C2410C]"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A8A29E] hover:text-[#78716C]"
                  aria-label="Clear search"
                >
                  <XCircle className="size-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    category === cat
                      ? "bg-[#C2410C] text-white"
                      : "border border-[#E3D9C2] bg-white text-[#78716C] hover:bg-[#EDE6D6]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-6 flex items-center justify-between border-b border-[#E3D9C2] pb-4">
            <p className="text-sm text-[#78716C]">
              <span className="font-semibold text-[#1C1917]">
                {filtered.length}
              </span>{" "}
              campaign{filtered.length !== 1 ? "s" : ""} found
            </p>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="size-3.5 text-[#A8A29E]" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="cursor-pointer appearance-none bg-transparent pr-6 text-sm text-[#78716C] outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <Stagger
              key={`${category}-${sort}-${search}`}
              className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((c) => (
                <Item key={c.title} className="h-full">
                  <CardRoot className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#E3D9C2] bg-white card-shadow transition-shadow duration-300 hover:lift-shadow">
                    <div
                      className={`relative h-44 overflow-hidden bg-gradient-to-br ${c.tint}`}
                    >
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
                        <ChipLabel className="text-[11px] font-semibold text-[#1C1917]">
                          {c.badge}
                        </ChipLabel>
                      </ChipRoot>
                      <span className="absolute top-4 right-4 rounded-full bg-black/35 px-2.5 py-1 font-mono text-[11px] text-white backdrop-blur-md">
                        {c.daysLeft} days left
                      </span>
                    </div>

                    <CardContent className="flex flex-1 flex-col p-6">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-[17px] font-semibold tracking-tight">
                          {c.title}
                        </h3>
                        <ArrowUpRight className="size-4 shrink-0 text-[#A8A29E] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C2410C]" />
                      </div>
                      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-pretty text-[#78716C]">
                        {c.description}
                      </p>

                      <div
                        className="mt-5"
                        role="progressbar"
                        aria-valuenow={c.percent}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${c.title} funding progress`}
                      >
                        <div className="h-1.5 overflow-hidden rounded-full bg-[#EDE6D6]">
                          <div
                            className="h-full rounded-full bg-[#C2410C] transition-all"
                            style={{ width: `${c.percent}%` }}
                          />
                        </div>
                        <div className="mt-2.5 flex items-center justify-between text-xs">
                          <span className="font-mono text-[13px] font-semibold">
                            {c.raised}
                          </span>
                          <span className="text-[#78716C]">
                            of {c.goal} · {c.percent}%
                          </span>
                        </div>
                      </div>

                      <div className="mt-5 flex items-center gap-3 border-t border-[#EDE6D6] pt-4">
                        <div className="flex -space-x-2">
                          {c.avatarInitials.map((initials) => (
                            <AvatarRoot
                              key={initials}
                              className="size-7 border-2 border-white bg-[#EDE6D6]"
                            >
                              <AvatarFallback className="bg-[#EDE6D6] text-[10px] text-[#1C1917]">
                                {initials}
                              </AvatarFallback>
                            </AvatarRoot>
                          ))}
                          <span className="flex size-7 items-center justify-center rounded-full border-2 border-white bg-[#1C1917] font-mono text-[9px] text-white">
                            +{c.extraBackers}
                          </span>
                        </div>
                        <p className="text-xs text-[#78716C]">
                          <span className="font-semibold text-[#1C1917]">
                            {c.backers.toLocaleString()} backers
                          </span>{" "}
                          · verified
                        </p>
                      </div>
                    </CardContent>
                  </CardRoot>
                </Item>
              ))}
            </Stagger>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="mt-16 flex flex-col items-center text-center"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-[#EDE6D6]">
                <Search className="size-7 text-[#A8A29E]" />
              </div>
              <h3 className="font-display mt-5 text-lg font-semibold tracking-tight">
                No campaigns found
              </h3>
              <p className="mt-1.5 text-sm text-[#78716C]">
                Try adjusting your search or filters.
              </p>
              <button
                onClick={clearAll}
                className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-[#E3D9C2] bg-white px-4 py-2 text-sm font-medium text-[#78716C] transition-colors hover:bg-[#EDE6D6]"
              >
                <XCircle className="size-3.5" />
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ExploreCampaigns;
