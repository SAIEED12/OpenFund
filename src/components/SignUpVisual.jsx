"use client";

import { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  ButtonRoot,
  FormRoot,
  TextFieldRoot,
  LabelRoot,
  InputRoot,
} from "@heroui/react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Eye,
  EyeOff,
  Heart,
  Lock,
  Mail,
  Rocket,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";
import AuthShell from "./AuthShell";
import LogoMark from "./LogoMark";

const EASE = [0.22, 1, 0.36, 1];

const ROLES = [
  {
    id: "supporter",
    icon: Heart,
    title: "Supporter",
    desc: "Back campaigns",
    bonus: "+50 credits",
  },
  {
    id: "creator",
    icon: Rocket,
    title: "Creator",
    desc: "Launch ideas",
    bonus: "+20 credits",
  },
];

const LEDGER_ROWS = [
  ["$86,400 → Solar Schools", "0x8f3a…c21d confirmed"],
  ["$1,100 → Mushroom Farm", "0x42cd…77f1 confirmed"],
  ["$840 → droneOS", "0xb71e…9a04 confirmed"],
];

function scorePassword(pw) {
  if (!pw) return 0;
  let score = 0;
  if (pw.length >= 8) score += 1;
  if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) score += 1;
  if (/\d/.test(pw)) score += 1;
  if (/[^A-Za-z0-9]/.test(pw) || pw.length >= 12) score += 1;
  return Math.min(score, 4);
}

const STRENGTH_LABEL = ["Add 8+ characters", "Weak", "Okay", "Strong", "Solid"];
const STRENGTH_BAR = [
  "bg-[#DC2626]",
  "bg-[#D97706]",
  "bg-[#4D7C0F]/70",
  "bg-[#4D7C0F]",
];

function SignUpAside({ role }) {
  const active = ROLES.find((r) => r.id === role) ?? ROLES[0];
  return (
    <>
      <Image
        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80"
        alt=""
        aria-hidden="true"
        fill
        loading="lazy"
        sizes="450px"
        className="object-cover opacity-25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1C1917]/30 via-[#1C1917]/70 to-[#1C1917]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_80%_10%,rgb(194_65_12/0.35),transparent_60%)]"
      />
      <NextLink href="/" className="relative flex items-center gap-2.5">
        <LogoMark />
        <span className="font-display text-lg font-semibold tracking-tight">
          OpenFund
        </span>
      </NextLink>

      <div className="relative">
        <p className="font-mono text-[11px] tracking-[0.18em] text-[#E7A87B] uppercase">
          Public ledger · live
        </p>
        <p className="font-display mt-3 text-[2rem] leading-[1.05] font-semibold tracking-tight text-balance">
          Back it. Or build it. Prove where it went.
        </p>

        <div
          key={active.id}
          className="mt-5 flex items-center gap-3 rounded-2xl border border-[#C2410C]/50 bg-[#C2410C]/15 px-4 py-3"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#C2410C]">
            <active.icon className="size-4 text-white" />
          </span>
          <div className="min-w-0">
            <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
              <Sparkles className="size-3.5 text-[#E7A87B]" />
              {active.bonus} welcome bonus
            </p>
            <p className="truncate text-xs text-white/60">
              Join as {active.title} — {active.desc.toLowerCase()} from day one.
            </p>
          </div>
        </div>

        <ul className="mt-4 space-y-2.5">
          {LEDGER_ROWS.map(([line, hash]) => (
            <li
              key={hash}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5"
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
    </>
  );
}

export default function SignUpVisual() {
  const [role, setRole] = useState("supporter");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const reduce = useReducedMotion();
  const score = scorePassword(password);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  };

  return (
    <AuthShell
      eyebrow="Join 8,204 verified backers"
      title="Create your account"
      subtitle="Pick your path, claim your welcome bonus. Every pledge traced on the public ledger."
      aside={<SignUpAside role={role} />}
      footer={
        <>
          Already have an account?{" "}
          <NextLink
            href="/sign-in"
            className="font-semibold text-[#9A3412] underline-offset-4 hover:underline"
          >
            Sign in
          </NextLink>
        </>
      }
    >
      <motion.div
        variants={reduce ? undefined : container}
        initial={reduce ? false : "hidden"}
        animate={reduce ? undefined : "show"}
      >
        {/* Mobile bonus strip (aside is hidden below lg) */}
        <motion.div
          variants={reduce ? undefined : item}
          className="mb-6 flex items-center gap-3 rounded-2xl border border-[#E3D9C2] bg-[#FAF6EF] px-4 py-3 lg:hidden"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#C2410C]">
            <Sparkles className="size-4 text-white" />
          </span>
          <p className="text-[13px] leading-snug text-[#1C1917]">
            <span className="font-semibold">+50 credits</span> for Supporters ·{" "}
            <span className="font-semibold">+20</span> for Creators. No card
            needed.
          </p>
        </motion.div>

        {/* Role chooser */}
        <motion.div variants={reduce ? undefined : item}>
          <p id="role-label" className="text-sm font-medium">
            I&apos;m joining as
          </p>
          <div
            role="radiogroup"
            aria-labelledby="role-label"
            className="mt-2.5 grid grid-cols-2 gap-3"
          >
            {ROLES.map((r) => {
              const selected = role === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setRole(r.id)}
                  className={`relative rounded-2xl border p-4 text-left transition-all outline-none focus-visible:ring-2 focus-visible:ring-[#C2410C] active:scale-[0.98] ${
                    selected
                      ? "border-[#C2410C] bg-[#C2410C]/[0.06] shadow-[0_8px_24px_-12px_rgb(194_65_12/0.45)]"
                      : "border-[#E3D9C2] bg-white hover:border-[#C2410C]/50 hover:bg-[#FAF6EF]"
                  }`}
                >
                  {selected && (
                    <span className="absolute top-3 right-3 flex size-5 items-center justify-center rounded-full bg-[#C2410C]">
                      <Check className="size-3 text-white" strokeWidth={3} />
                    </span>
                  )}
                  <r.icon
                    className={`size-5 ${selected ? "text-[#C2410C]" : "text-[#78716C]"}`}
                  />
                  <span className="mt-2.5 block text-[15px] font-semibold">
                    {r.title}
                  </span>
                  <span className="block text-xs text-[#78716C]">{r.desc}</span>
                  <span
                    className={`mt-2.5 inline-block rounded-full px-2.5 py-1 font-mono text-[11px] font-medium ${
                      selected
                        ? "bg-[#C2410C] text-white"
                        : "bg-[#EDE6D6] text-[#9A3412]"
                    }`}
                  >
                    {r.bonus}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Google */}
        <motion.div variants={reduce ? undefined : item} className="mt-5">
          <ButtonRoot
            type="button"
            className="flex h-12 w-full items-center justify-center gap-2.5 rounded-full border border-[#E3D9C2] bg-white text-[15px] font-medium text-[#1C1917] transition-all hover:-translate-y-px hover:bg-[#EDE6D6] active:translate-y-0 active:scale-[0.99]"
          >
            <svg viewBox="0 0 24 24" className="size-4.5" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M23.5 12.3c0-.9-.1-1.5-.3-2.3H12v4.5h6.5c-.1 1.1-.8 2.7-2.4 3.8l-.1.3 3.4 2.7.3.1c2.1-2 3.8-4.9 3.8-9.1z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.8-2.9c-1 .7-2.4 1.2-4.1 1.2-3.1 0-5.8-2.1-6.8-5.1l-.3.1-3.5 2.7-.1.3C2.5 21.5 6.9 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.2 14.3c-.2-.7-.4-1.5-.4-2.3s.1-1.6.4-2.3l-.1-.3-3.5-2.7-.1.1C.5 8.9 0 10.3 0 12s.5 3.1 1.5 4.4l3.7-2.1z"
              />
              <path
                fill="#EA4335"
                d="M12 4.7c1.8 0 3 .8 3.7 1.4l3.3-3.2C17.9 1.1 15.2 0 12 0 6.9 0 2.5 2.5 1.5 6.6l3.7 2.9c1-2.9 3.7-4.8 6.8-4.8z"
              />
            </svg>
            Continue with Google
          </ButtonRoot>
          <div
            aria-hidden="true"
            className="my-5 flex items-center gap-3 text-xs text-[#A8A29E]"
          >
            <span className="h-px flex-1 bg-[#EDE6D6]" />
            <span className="font-mono tracking-widest uppercase">or</span>
            <span className="h-px flex-1 bg-[#EDE6D6]" />
          </div>
        </motion.div>

        <FormRoot className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <motion.div variants={reduce ? undefined : item}>
            <TextFieldRoot name="name" isRequired className="grid gap-2">
              <LabelRoot className="text-sm font-medium">Full name</LabelRoot>
              <span className="relative block">
                <User className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-[#A8A29E]" />
                <InputRoot
                  name="name"
                  type="text"
                  placeholder="Jordan Doe"
                  autoComplete="name"
                  className="h-12 w-full rounded-xl border border-[#D9CDB2] bg-white pr-4 pl-11 text-[15px] text-[#1C1917] outline-none placeholder:text-[#A8A29E] hover:border-[#C2410C]/60 focus:border-[#C2410C]"
                />
              </span>
            </TextFieldRoot>
          </motion.div>

          <motion.div variants={reduce ? undefined : item}>
            <TextFieldRoot name="email" type="email" isRequired className="grid gap-2">
              <LabelRoot className="text-sm font-medium">Email</LabelRoot>
              <span className="relative block">
                <Mail className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-[#A8A29E]" />
                <InputRoot
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="h-12 w-full rounded-xl border border-[#D9CDB2] bg-white pr-4 pl-11 text-[15px] text-[#1C1917] outline-none placeholder:text-[#A8A29E] hover:border-[#C2410C]/60 focus:border-[#C2410C]"
                />
              </span>
            </TextFieldRoot>
          </motion.div>

          <motion.div variants={reduce ? undefined : item}>
            <TextFieldRoot
              name="password"
              type="password"
              isRequired
              minLength={8}
              className="grid gap-2"
            >
              <LabelRoot className="text-sm font-medium">Password</LabelRoot>
              <span className="relative block">
                <Lock className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-[#A8A29E]" />
                <InputRoot
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 8 characters"
                  autoComplete="new-password"
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-describedby="password-strength"
                  className="h-12 w-full rounded-xl border border-[#D9CDB2] bg-white pr-12 pl-11 text-[15px] text-[#1C1917] outline-none placeholder:text-[#A8A29E] hover:border-[#C2410C]/60 focus:border-[#C2410C]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                  className="absolute top-1/2 right-3 flex size-8 -translate-y-1/2 items-center justify-center rounded-full text-[#78716C] transition-colors hover:bg-[#EDE6D6] hover:text-[#1C1917]"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </span>
              <span
                id="password-strength"
                aria-live="polite"
                className="flex items-center gap-2 pt-1"
              >
                <span className="flex flex-1 gap-1.5" aria-hidden="true">
                  {[0, 1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-colors ${
                        i < score
                          ? STRENGTH_BAR[Math.max(score - 1, 0)]
                          : "bg-[#EDE6D6]"
                      }`}
                    />
                  ))}
                </span>
                <span className="font-mono text-[11px] text-[#78716C]">
                  {STRENGTH_LABEL[score]}
                </span>
              </span>
            </TextFieldRoot>
          </motion.div>

          <motion.div variants={reduce ? undefined : item} className="pt-1">
            <ButtonRoot
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#C2410C] text-[15px] font-semibold text-white shadow-[0_8px_30px_-6px_rgb(194_65_12/0.5)] transition-all hover:-translate-y-px hover:bg-[#9A3412] active:translate-y-0 active:scale-[0.99]"
            >
              Create account
              <ArrowRight className="size-4" />
            </ButtonRoot>
            <div className="mt-4 flex items-center justify-between gap-3">
              <span className="flex items-center gap-2">
                <span className="flex -space-x-2" aria-hidden="true">
                  {["AL", "MK", "RS"].map((initials) => (
                    <span
                      key={initials}
                      className="flex size-6 items-center justify-center rounded-full border-2 border-white bg-[#EDE6D6] text-[9px] font-semibold text-[#1C1917]"
                    >
                      {initials}
                    </span>
                  ))}
                </span>
                <span className="text-xs text-[#78716C]">412 backed this week</span>
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-[#4D7C0F]">
                <ShieldCheck className="size-3.5" />
                Verified payouts
              </span>
            </div>
            <p className="mt-3 text-center text-xs leading-relaxed text-[#78716C]">
              By continuing you agree to the Terms. Payouts are verified on the
              public ledger.
            </p>
          </motion.div>
        </FormRoot>
      </motion.div>
    </AuthShell>
  );
}
