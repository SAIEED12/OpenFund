# OpenFund Client — Agent Context

## What is this?
Crowdfunding platform where Creators raise platform credits for projects/causes/products, Supporters browse and contribute credits, Creators withdraw funds once approved by Admin.

## Roles (summary)
- **Supporter:** discover campaigns, contribute credits, track contributions, purchase credits, receive notifications.
- **Creator:** launch/manage campaigns, track supporters & contributions, post updates, request withdrawals, report issues.
- **Admin:** approve campaigns, manage roles, process withdrawals, resolve reports.

Details: `docs/00-overview-roles.md`

## Stack
Next.js 16.3 (App Router in `src/app/`), React 19, Tailwind CSS 4, HeroUI + Radix + shadcn, `clsx`/`tailwind-merge`/`cva`, `lucide-react`. Path alias `@/*` -> `./*`. Scripts: `dev / build / start / lint`.

## Structure
- `src/app/page.js`: Home composes `Hero`, `FeaturedCampaigns`, `HowItWorks`, `WhyOpenFund`
- `src/app/layout.js`: fonts (Inter/Fraunces/Geist_Mono), Navbar/Footer shell, metadata
- `src/app/sign-in/`, `sign-up/`: auth routes (via `AuthShell.jsx`)
- `src/components/`: `Navbar, Footer, Hero, FeaturedCampaigns, HowItWorks, WhyOpenFund, AuthShell, LogoMark`
- `lib/utils.js`: shared utils (`cn`)

## Business rules (do not change without spec update)
- Register bonus (once): Supporter +50 credits, Creator +20 credits.
- Purchase: 10 credits = $1. Withdraw: 20 credits = $1. Min withdraw: 200 credits ($10).
- Campaign flow: `pending` on create -> Admin `approved` (visible to Supporters) / `rejected`.
- Contribution flow: `pending` on create -> Creator `approved` (adds to raised) / `rejected` (refund to Supporter).
- Withdrawal flow: `pending` on request -> Admin `approved` (decrement raised credits).

## Spec index (load on demand, do not load all at once)
- `docs/00-overview-roles.md` — platform + roles
- `docs/01-layout-navigation.md` — Basic/Dashboard layouts, Navbar, Footer
- `docs/02-home-auth.md` — Home page + auth system
- `docs/03-creator.md` — Creator dashboard
- `docs/04-supporter.md` — Supporter dashboard
- `docs/05-admin-challenges.md` — Admin dashboard + RBAC, notifications, imgBB, extras

## Conventions for agents
- App Router only, Server Components by default; add `"use client"` only for interactivity.
- Keep landing copy tone from `layout.js`: public ledger / trace pledge to delivery.
- Use existing UI libs before adding deps. Use Swiper / React-Responsive Carousel for sliders.
- Auth token in `localStorage`; role-guard Dashboard routes with middleware.
