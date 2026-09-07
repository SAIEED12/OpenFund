"use client";

import { useState } from "react";
import NextLink from "next/link";
import { Coins, Heart, LayoutDashboard, LogOut, Menu, Rocket, User, X } from "lucide-react";

import { cn } from "@/lib/utils";
import LogoMark from "./LogoMark";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Explore", href: "/campaigns" },
  { label: "How It Works", href: "/how-it-works" },
];

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <NextLink href="/" className="flex shrink-0 items-center gap-2.5" aria-label="OpenFund home">
          <LogoMark />
          <span className="font-display text-[19px] font-semibold tracking-tight">
            OpenFund
          </span>
        </NextLink>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NextLink
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </NextLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              <Badge
                variant="secondary"
                className="hidden gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5 font-mono text-xs sm:inline-flex"
              >
                <Coins className="size-3.5 text-mint-deep" />
                250 credits
              </Badge>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full border border-border"
                    aria-label="Account menu"
                  >
                    <Avatar>
                      <AvatarFallback className="bg-ink text-paper text-xs">JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="min-w-56">
                  <DropdownMenuLabel>
                    <span className="block font-medium text-foreground">Jordan Doe</span>
                    <span className="block truncate text-xs font-normal text-muted-foreground">
                      jordan@openfund.io
                    </span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <NextLink href="/dashboard">
                      <LayoutDashboard />
                      Dashboard
                    </NextLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <NextLink href="/contributions">
                      <Heart />
                      My Contributions
                    </NextLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <NextLink href="/profile">
                      <User />
                      Profile
                    </NextLink>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive" onSelect={handleSignOut}>
                    <LogOut />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button asChild variant="ghost" className="hidden rounded-full sm:inline-flex">
                <NextLink href="/sign-in">Sign In</NextLink>
              </Button>
              <Button
                asChild
                className="hidden rounded-full bg-ink px-5 text-paper shadow-sm hover:bg-pine hover:text-paper sm:inline-flex"
              >
                <NextLink href="/start">
                  <Rocket />
                  Start a Campaign
                </NextLink>
              </Button>
            </>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto w-full max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <NextLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  )}
                >
                  {link.label}
                </NextLink>
              ))}
            </nav>

            {isLoggedIn ? (
              <div className="space-y-2 border-t border-border pt-4">
                <div className="flex items-center gap-2 px-1 py-1">
                  <Badge variant="secondary" className="gap-1.5 rounded-full font-mono">
                    <Coins className="size-3" />
                    250 credits
                  </Badge>
                  <span className="text-sm text-muted-foreground">Jordan Doe</span>
                </div>
                <Button variant="outline" className="w-full rounded-full" asChild>
                  <NextLink href="/dashboard" onClick={() => setMenuOpen(false)}>
                    <LayoutDashboard />
                    Dashboard
                  </NextLink>
                </Button>
                <Button variant="outline" className="w-full rounded-full" asChild>
                  <NextLink href="/contributions" onClick={() => setMenuOpen(false)}>
                    <Heart />
                    My Contributions
                  </NextLink>
                </Button>
                <Button variant="ghost" className="w-full rounded-full" onClick={handleSignOut}>
                  <LogOut />
                  Sign out
                </Button>
              </div>
            ) : (
              <div className="space-y-2 border-t border-border pt-4">
                <Button variant="outline" className="w-full rounded-full" asChild>
                  <NextLink href="/sign-in" onClick={() => setMenuOpen(false)}>
                    Sign In
                  </NextLink>
                </Button>
                <Button className="w-full rounded-full bg-ink text-paper" asChild>
                  <NextLink href="/start" onClick={() => setMenuOpen(false)}>
                    <Rocket />
                    Start a Campaign
                  </NextLink>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
