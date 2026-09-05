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
  { initials: "AL", name: "Ayesha", project: "Solar Schools", amount: "$1,250" },
  { initials: "MK", name: "Marcus", project: "Open Source droneOS", amount: "$840" },
  { initials: "RS", name: "Rina", project: "Community Mushroom Farm", amount: "$1,100" },
  { initials: "JT", name: "Jonas", project: "River Cleanup Crew", amount: "$360" },
];

const values = [
  {
    icon: HeartHandshake,
    title: "Community ownership",
    description:
      "Backers hold a real stake in what they fund — recognition, updates, and a place on the project's ledger.",
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
      "Anyone can start a campaign. The community — not an approval committee — decides what gets funded.",
  },
];

const WhyOpenFund = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,var(--primary)/5%,transparent)]"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="rounded-full px-3 py-1">
            <ShieldCheck className="mr-1.5 size-3" />
            Why OpenFund
          </Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Crowdfunding, built for the commons
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            OpenFund keeps backing good ideas cheap, visible, and open — for
            creators and backers alike.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-primary/5 sm:col-span-2 lg:col-span-4">
            <div className="flex h-full flex-col p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <ShieldCheck className="size-5 text-foreground" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">Radical transparency</h3>
                    <p className="text-sm text-muted-foreground">
                      Every pledge is public and verifiable
                    </p>
                  </div>
                </div>
                <span className="mt-1 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  Updating live
                </span>
              </div>

              <ul className="mt-6 divide-y divide-border rounded-xl border border-border bg-background/60">
                {pledges.map((pledge) => (
                  <li key={pledge.initials} className="flex items-center gap-3 px-4 py-3">
                    <Avatar>
                      <AvatarFallback>{pledge.initials}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{pledge.name}</p>
                      <p className="truncate text-xs text-muted-foreground">{pledge.project}</p>
                    </div>
                    <span className="text-sm font-semibold">{pledge.amount}</span>
                    <BadgeCheck className="size-4 shrink-0 text-emerald-500" aria-label="Verified" />
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-xs text-muted-foreground">
                Public ledger · every payment traced from pledge to delivery
              </p>
            </div>
          </article>

          <article className="flex flex-col rounded-2xl border border-border bg-card shadow-lg shadow-primary/5 sm:col-span-2 lg:col-span-2">
            <div className="flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <span className="flex size-10 items-center justify-center rounded-full bg-secondary">
                  <Percent className="size-5 text-foreground" strokeWidth={1.5} />
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">Near-zero fees</h3>
                <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
                  A flat 5% covers everything: payment processing, payouts, and
                  the platform itself.
                </p>
              </div>
              <div className="mt-8">
                <p className="text-6xl font-bold tracking-tight">5%</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  flat, no hidden charges
                </p>
              </div>
            </div>
          </article>

          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <article
                key={value.title}
                className={`flex flex-col rounded-2xl border border-border bg-card shadow-lg shadow-primary/5 lg:col-span-2 ${
                  i === values.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex h-full flex-col p-6 sm:p-8">
                  <span className="flex size-10 items-center justify-center rounded-full bg-secondary">
                    <Icon className="size-5 text-foreground" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">{value.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
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