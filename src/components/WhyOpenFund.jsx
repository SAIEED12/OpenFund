import {
  BadgeCheck,
  Code2,
  HeartHandshake,
  Percent,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const pledges = [
  { initials: "AL", name: "Ayesha", project: "Solar Schools", amount: "$1,250", hash: "0x8f3a…c21d" },
  { initials: "MK", name: "Marcus", project: "Open Source droneOS", amount: "$840", hash: "0xb71e…9a04" },
  { initials: "RS", name: "Rina", project: "Community Mushroom Farm", amount: "$1,100", hash: "0x42cd…77f1" },
  { initials: "JT", name: "Jonas", project: "River Cleanup Crew", amount: "$360", hash: "0x9aa0…3e88" },
];

const values = [
  {
    icon: HeartHandshake,
    title: "Community ownership",
    description:
      "Backers hold a real stake — recognition, updates, and a place on the project's ledger.",
  },
  {
    icon: Code2,
    title: "Open source at heart",
    description:
      "Campaigns, code, and results are open for anyone to audit, reuse, and improve.",
  },
  {
    icon: Users,
    title: "No gatekeepers",
    description:
      "Anyone can launch. The community decides what gets funded, not a committee.",
  },
];

const WhyOpenFund = () => {
  return (
    <section className="ink-panel relative overflow-hidden py-20 text-[#F6F8F5] sm:py-24">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <Badge className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs text-white/80">
            <ShieldCheck className="mr-1.5 size-3 text-[#3DDC97]" />
            Why OpenFund
          </Badge>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Crowdfunding, built for the commons
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-white/60">
            Cheap to run, visible by default, open by design — for creators and backers alike.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-6">
          <article className="overflow-hidden rounded-3xl border border-white/12 bg-white/[0.05] backdrop-blur-xl lg:col-span-4">
            <div className="flex h-full flex-col p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#3DDC97]/15">
                    <ShieldCheck className="size-5 text-[#3DDC97]" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-white">Radical transparency</h3>
                    <p className="text-sm text-white/55">
                      Every pledge is public and verifiable
                    </p>
                  </div>
                </div>
                <span className="mt-1 hidden items-center gap-1.5 font-mono text-[11px] text-white/50 sm:flex">
                  <span className="size-2 rounded-full bg-[#C9A86A] animate-pulse-dot" />
                  Updating live
                </span>
              </div>

              <ul className="mt-6 divide-y divide-white/8 rounded-2xl border border-white/10 bg-black/25">
                {pledges.map((pledge) => (
                  <li key={pledge.initials} className="flex items-center gap-3 px-4 py-3">
                    <Avatar className="border-white/10">
                      <AvatarFallback className="bg-white/10 text-xs text-white">{pledge.initials}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-white">{pledge.name} <span className="font-normal text-white/45">→ {pledge.project}</span></p>
                      <p className="truncate font-mono text-[11px] text-white/40">{pledge.hash}</p>
                    </div>
                    <span className="font-mono text-sm font-semibold text-white">{pledge.amount}</span>
                    <BadgeCheck className="size-4 shrink-0 text-[#3DDC97]" aria-label="Verified" />
                  </li>
                ))}
              </ul>

              <p className="mt-4 font-mono text-[11px] tracking-wide text-white/40 uppercase">
                Public ledger · traced from pledge to delivery
              </p>
            </div>
          </article>

          <article className="flex flex-col rounded-3xl bg-[#3DDC97] p-6 text-[#0B1210] sm:p-8 lg:col-span-2">
            <div className="flex h-full flex-col justify-between">
              <div>
                <span className="flex size-11 items-center justify-center rounded-2xl bg-[#0B1210]/10">
                  <Percent className="size-5" strokeWidth={2} />
                </span>
                <h3 className="font-display mt-4 text-lg font-semibold tracking-tight">Near-zero fees</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#0B1210]/70 text-pretty">
                  One flat rate covers processing, payouts, and the platform itself.
                </p>
              </div>
              <div className="mt-8">
                <p className="font-display text-6xl font-semibold tracking-tight">5%</p>
                <p className="mt-1 font-mono text-xs tracking-wide uppercase opacity-60">
                  flat · no hidden charges
                </p>
              </div>
            </div>
          </article>

          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article
                key={value.title}
                className="flex flex-col rounded-3xl border border-white/12 bg-white/[0.05] backdrop-blur-xl lg:col-span-2"
              >
                <div className="flex h-full flex-col p-6 sm:p-7">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-white/8">
                    <Icon className="size-5 text-[#C9A86A]" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display mt-4 text-lg font-semibold tracking-tight text-white">{value.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60 text-pretty">
                    {value.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyOpenFund;
