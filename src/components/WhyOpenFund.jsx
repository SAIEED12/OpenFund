import { ChipRoot, ChipLabel, CardRoot, CardContent, AvatarRoot, AvatarFallback } from "@heroui/react";
import {
  BadgeCheck,
  Code2,
  HeartHandshake,
  Percent,
  ShieldCheck,
  Users,
} from "lucide-react";

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
    <section className="relative overflow-hidden bg-[#FAF6EF] py-20 sm:py-24">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <ChipRoot className="inline-flex items-center gap-1.5 rounded-full border border-[#E3D9C2] bg-white px-3 py-1">
            <ShieldCheck className="size-3 text-[#C2410C]" />
            <ChipLabel className="text-xs text-[#1C1917]">Why OpenFund</ChipLabel>
          </ChipRoot>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Crowdfunding, built for the commons
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#78716C]">
            Cheap to run, visible by default, open by design — for creators and backers alike.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-6">
          <CardRoot className="overflow-hidden rounded-3xl border border-[#E3D9C2] bg-white card-shadow lg:col-span-4">
            <CardContent className="flex h-full flex-col p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#C2410C]/10">
                    <ShieldCheck className="size-5 text-[#C2410C]" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight">Radical transparency</h3>
                    <p className="text-sm text-[#78716C]">
                      Every pledge is public and verifiable
                    </p>
                  </div>
                </div>
                <span className="mt-1 hidden items-center gap-1.5 font-mono text-[11px] text-[#78716C] sm:flex">
                  <span className="size-2 rounded-full bg-[#4D7C0F] animate-pulse-dot" />
                  Updating live
                </span>
              </div>

              <ul className="mt-6 divide-y divide-[#EDE6D6] rounded-2xl border border-[#EDE6D6] bg-[#FAF6EF]">
                {pledges.map((pledge) => (
                  <li key={pledge.initials} className="flex items-center gap-3 px-4 py-3">
                    <AvatarRoot className="size-9 bg-[#EDE6D6]">
                      <AvatarFallback className="bg-[#EDE6D6] text-xs text-[#1C1917]">{pledge.initials}</AvatarFallback>
                    </AvatarRoot>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{pledge.name} <span className="font-normal text-[#78716C]">→ {pledge.project}</span></p>
                      <p className="truncate font-mono text-[11px] text-[#A8A29E]">{pledge.hash}</p>
                    </div>
                    <span className="font-mono text-sm font-semibold">{pledge.amount}</span>
                    <BadgeCheck className="size-4 shrink-0 text-[#4D7C0F]" aria-label="Verified" />
                  </li>
                ))}
              </ul>

              <p className="mt-4 font-mono text-[11px] tracking-wide text-[#A8A29E] uppercase">
                Public ledger · traced from pledge to delivery
              </p>
            </CardContent>
          </CardRoot>

          <CardRoot className="flex flex-col rounded-3xl border-0 bg-[#C2410C] p-6 text-white sm:p-8 lg:col-span-2">
            <CardContent className="flex h-full flex-col justify-between p-0">
              <div>
                <span className="flex size-11 items-center justify-center rounded-2xl bg-white/15">
                  <Percent className="size-5" strokeWidth={2} />
                </span>
                <h3 className="font-display mt-4 text-lg font-semibold tracking-tight">Near-zero fees</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/80 text-pretty">
                  One flat rate covers processing, payouts, and the platform itself.
                </p>
              </div>
              <div className="mt-8">
                <p className="font-display text-6xl font-semibold tracking-tight">5%</p>
                <p className="mt-1 font-mono text-xs tracking-wide uppercase opacity-70">
                  flat · no hidden charges
                </p>
              </div>
            </CardContent>
          </CardRoot>

          {values.map((value) => {
            const Icon = value.icon;
            return (
              <CardRoot
                key={value.title}
                className="flex flex-col rounded-3xl border border-[#E3D9C2] bg-white card-shadow lg:col-span-2"
              >
                <CardContent className="flex h-full flex-col p-6 sm:p-7">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-[#EDE6D6]">
                    <Icon className="size-5 text-[#9A3412]" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display mt-4 text-lg font-semibold tracking-tight">{value.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#78716C] text-pretty">
                    {value.description}
                  </p>
                </CardContent>
              </CardRoot>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyOpenFund;
