"use client";

import { useState } from "react";
import NextLink from "next/link";
import { ButtonRoot, ChipRoot, ChipLabel, AvatarRoot, AvatarFallback } from "@heroui/react";
import { CodeXml, Coins, Heart, LayoutDashboard, LogOut, Menu, Rocket, User, X } from "lucide-react";

import LogoMark from "./LogoMark";

// TODO: replace with client GitHub repository URL
const DEVELOPER_URL = "#";

const navLinks = [
  { label: "Explore", href: "/campaigns" },
  { label: "How It Works", href: "/how-it-works" },
];

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setMenuOpen(false);
    setAccountOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E3D9C2] bg-[#FAF6EF]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <NextLink href="/" className="flex shrink-0 items-center gap-2.5" aria-label="OpenFund home">
          <LogoMark />
          <span className="font-display text-[19px] font-semibold tracking-tight text-[#1C1917]">
            OpenFund
          </span>
        </NextLink>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NextLink
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[#78716C] transition-colors hover:bg-[#EDE6D6] hover:text-[#1C1917]"
            >
              {link.label}
            </NextLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <div className="relative flex items-center gap-2">
              <a
                href={DEVELOPER_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join as Developer on GitHub"
                className="hidden items-center gap-2 rounded-full border border-[#E3D9C2] bg-white px-4 py-2 text-sm font-semibold text-[#1C1917] transition-colors hover:bg-[#EDE6D6] lg:inline-flex"
              >
                <CodeXml className="size-4" />
                Join as Developer
              </a>
              <ChipRoot className="hidden items-center gap-1.5 rounded-full border border-[#E3D9C2] bg-[#EDE6D6] px-3 py-1.5 sm:inline-flex">
                <Coins className="size-3.5 text-[#4D7C0F]" />
                <ChipLabel className="font-mono text-xs text-[#1C1917]">250 credits</ChipLabel>
              </ChipRoot>
              <ButtonRoot
                onPress={() => setAccountOpen((v) => !v)}
                aria-label="Account menu"
                className="flex size-10 items-center justify-center rounded-full border border-[#E3D9C2] bg-white p-0"
              >
                <AvatarRoot className="size-8">
                  <AvatarFallback className="bg-[#C2410C] text-xs text-white">JD</AvatarFallback>
                </AvatarRoot>
              </ButtonRoot>
              {accountOpen && (
                <div className="absolute top-12 right-0 w-60 overflow-hidden rounded-2xl border border-[#E3D9C2] bg-white shadow-xl">
                  <div className="border-b border-[#EDE6D6] px-4 py-3">
                    <p className="text-sm font-medium text-[#1C1917]">Jordan Doe</p>
                    <p className="truncate text-xs text-[#78716C]">jordan@openfund.io</p>
                  </div>
                  <nav className="p-1.5" aria-label="Account">
                    {[
                      { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
                      { href: "/contributions", icon: Heart, label: "My Contributions" },
                      { href: "/profile", icon: User, label: "Profile" },
                    ].map(({ href, icon: Icon, label }) => (
                      <NextLink
                        key={href}
                        href={href}
                        onClick={() => setAccountOpen(false)}
                        className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-[#1C1917] hover:bg-[#FAF6EF]"
                      >
                        <Icon className="size-4 text-[#78716C]" />
                        {label}
                      </NextLink>
                    ))}
                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-sm text-red-700 hover:bg-red-50"
                    >
                      <LogOut className="size-4" />
                      Sign out
                    </button>
                  </nav>
                </div>
              )}
            </div>
          ) : (
            <>
              <NextLink
                href="/sign-in"
                className="hidden rounded-full px-4 py-2 text-sm font-medium text-[#78716C] hover:bg-[#EDE6D6] hover:text-[#1C1917] sm:inline-flex"
              >
                Sign In
              </NextLink>
              <a
                href={DEVELOPER_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join as Developer on GitHub"
                className="hidden items-center gap-2 rounded-full border border-[#E3D9C2] bg-white px-4 py-2 text-sm font-semibold text-[#1C1917] transition-colors hover:bg-[#EDE6D6] lg:inline-flex"
              >
                <CodeXml className="size-4" />
                Join as Developer
              </a>
              <ButtonRoot className="hidden items-center gap-2 rounded-full bg-[#C2410C] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#9A3412] sm:inline-flex">
                <NextLink href="/start" className="flex items-center gap-2">
                  <Rocket className="size-4" />
                  Start a Campaign
                </NextLink>
              </ButtonRoot>
            </>
          )}

          <ButtonRoot
            onPress={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            className="flex size-10 items-center justify-center rounded-full p-0 hover:bg-[#EDE6D6] md:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </ButtonRoot>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-[#E3D9C2] bg-[#FAF6EF] md:hidden">
          <div className="mx-auto w-full max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <NextLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#78716C] hover:bg-[#EDE6D6] hover:text-[#1C1917]"
                >
                  {link.label}
                </NextLink>
              ))}
            </nav>
            <div className="space-y-2 border-t border-[#E3D9C2] pt-4">
              {!isLoggedIn && (
                <NextLink
                  href="/sign-in"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-full border border-[#E3D9C2] bg-white px-4 py-2.5 text-center text-sm font-medium"
                >
                  Sign In
                </NextLink>
              )}
              <a
                href={DEVELOPER_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join as Developer on GitHub"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full border border-[#E3D9C2] bg-white px-4 py-2.5 text-center text-sm font-semibold text-[#1C1917]"
              >
                <CodeXml className="size-4" />
                Join as Developer
              </a>
              {!isLoggedIn && (
                <NextLink
                  href="/start"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#C2410C] px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <Rocket className="size-4" />
                  Start a Campaign
                </NextLink>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
