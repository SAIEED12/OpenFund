import NextLink from "next/link";
import LogoMark from "./LogoMark";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "All campaigns", href: "/campaigns" },
      { label: "Trending", href: "/campaigns" },
      { label: "How it works", href: "/how-it-works" },
    ],
  },
  {
    title: "Create",
    links: [
      { label: "Start a campaign", href: "/start" },
      { label: "Fee structure", href: "/how-it-works" },
      { label: "Creator guide", href: "/how-it-works" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Sign in", href: "/sign-in" },
      { label: "Sign up", href: "/sign-up" },
      { label: "Dashboard", href: "/dashboard" },
    ],
  },
];

const Footer = () => (
  <footer className="ink-panel text-[#F6F8F5]">
    <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <NextLink href="/" className="flex items-center gap-2.5">
            <LogoMark />
            <span className="font-display text-xl font-semibold tracking-tight">
              OpenFund
            </span>
          </NextLink>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            Community crowdfunding with a public ledger. Every pledge traced
            from checkout to delivery.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-xs text-white/70">
            <span className="size-2 rounded-full bg-[#C9A86A] animate-pulse-dot" />
            $2.4M routed · ledger live
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-mono text-[11px] font-medium tracking-[0.18em] text-white/45 uppercase">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <NextLink
                      href={link.href}
                      className="text-sm text-white/75 transition-colors hover:text-[#3DDC97]"
                    >
                      {link.label}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 OpenFund. Built for the commons.</p>
        <p className="font-mono">5% flat · no hidden charges · verified payouts</p>
      </div>
    </div>
  </footer>
);

export default Footer;
