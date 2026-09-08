import NextLink from "next/link";
import { BadgeCheck, ShieldCheck } from "lucide-react";
import LogoMark from "./LogoMark";

const AuthShell = ({ title, subtitle, children, footer }) => (
  <main className="flex flex-1 items-stretch justify-center bg-[#FAF6EF] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-[#E3D9C2] bg-white card-shadow lg:grid-cols-[0.95fr_1.05fr]">
      <aside className="relative hidden flex-col justify-between overflow-hidden bg-[#1C1917] p-9 text-[#FAF6EF] lg:flex">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_80%_10%,rgb(194_65_12/0.35),transparent_60%)]"
        />
        <NextLink href="/" className="relative flex items-center gap-2.5">
          <LogoMark />
          <span className="font-display text-lg font-semibold tracking-tight">OpenFund</span>
        </NextLink>
        <div className="relative">
          <p className="font-mono text-[11px] tracking-[0.18em] text-[#E7A87B] uppercase">
            Public ledger · live
          </p>
          <p className="font-display mt-3 text-3xl leading-tight font-semibold tracking-tight text-balance">
            Back what you believe in. Prove where it went.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              ["$86,400 → Solar Schools", "0x8f3a…c21d confirmed"],
              ["$1,100 → Mushroom Farm", "0x42cd…77f1 confirmed"],
              ["$840 → droneOS", "0xb71e…9a04 confirmed"],
            ].map(([line, hash]) => (
              <li
                key={hash}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <BadgeCheck className="size-4 shrink-0 text-[#A3C26A]" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-white">{line}</p>
                  <p className="font-mono text-[11px] text-white/50">{hash}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="relative flex items-center gap-2 text-xs text-white/60">
          <ShieldCheck className="size-4 text-[#E7A87B]" />
          5% flat fee · verified payouts · open by design
        </p>
      </aside>

      <div className="flex flex-col justify-center p-7 sm:p-10">
        <NextLink href="/" className="flex items-center gap-2 lg:hidden">
          <LogoMark />
          <span className="font-display text-lg font-semibold tracking-tight">OpenFund</span>
        </NextLink>
        <h1 className="font-display mt-6 text-[1.75rem] font-semibold tracking-tight lg:mt-0">{title}</h1>
        <p className="mt-2 text-sm leading-relaxed text-[#78716C]">{subtitle}</p>
        <div className="mt-7">{children}</div>
        {footer ? <div className="mt-6 text-center text-sm text-[#78716C]">{footer}</div> : null}
      </div>
    </div>
  </main>
);

export default AuthShell;
