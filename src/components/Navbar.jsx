"use client";

import { useState } from "react";
import NextLink from "next/link";
import { Link as HeroLink } from "@heroui/react";
import { Coins, Heart, LayoutDashboard, LogOut, Menu, Rocket, User, X } from "lucide-react";

import { cn } from "@/lib/utils";
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

const LogoMark = () => (
  <svg viewBox="0 0 32 32" className="size-7 shrink-0" aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="var(--primary)" />
    <path
      d="M9 19.5l4.5-4.5 3.5 3.5L24 11.5"
      fill="none"
      stroke="var(--primary-foreground)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 11.5h5v5"
      fill="none"
      stroke="var(--primary-foreground)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setMenuOpen(false);
  };

  const renderNavLink = ({ label, href }) => (
    <HeroLink
      key={href}
      href={href}
      render={(props) => (
        <NextLink
          {...props}
          className={cn(
            "px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
            props.className
          )}
        >
          {label}
        </NextLink>
      )}
    />
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <NextLink href="/" className="flex shrink-0 items-center gap-2">
          <LogoMark />
          <span className="text-lg font-bold tracking-tight">
            Open<span className="text-primary">Fund</span>
          </span>
        </NextLink>

        <nav className="hidden items-center md:flex" aria-label="Main navigation">
          {navLinks.map(renderNavLink)}
        </nav>

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              <Badge variant="secondary" className="hidden gap-1 sm:inline-flex">
                <Coins className="size-3" />
                250 credits
              </Badge>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    aria-label="Account menu"
                  >
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
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
              <Button asChild variant="ghost" className="hidden sm:inline-flex">
                <NextLink href="/sign-in">Sign In</NextLink>
              </Button>
              <Button asChild className="hidden sm:inline-flex">
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
            className="md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border md:hidden">
          <div className="mx-auto w-full max-w-7xl space-y-1 px-4 py-3 sm:px-6 lg:px-8">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <HeroLink
                  key={link.href}
                  href={link.href}
                  render={(props) => (
                    <NextLink
                      {...props}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                        props.className
                      )}
                    >
                      {link.label}
                    </NextLink>
                  )}
                />
              ))}
            </nav>

            {isLoggedIn ? (
              <div className="space-y-1 border-t border-border pt-3">
                <div className="flex items-center gap-2 px-3 py-2">
                  <Badge variant="secondary" className="gap-1">
                    <Coins className="size-3" />
                    250 credits
                  </Badge>
                  <span className="text-sm text-muted-foreground">Jordan Doe</span>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <NextLink href="/dashboard" onClick={() => setMenuOpen(false)}>
                    <LayoutDashboard />
                    Dashboard
                  </NextLink>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <NextLink href="/contributions" onClick={() => setMenuOpen(false)}>
                    <Heart />
                    My Contributions
                  </NextLink>
                </Button>
                <Button variant="ghost" className="w-full" onClick={handleSignOut}>
                  <LogOut />
                  Sign out
                </Button>
              </div>
            ) : (
              <div className="space-y-1 border-t border-border pt-3">
                <Button variant="outline" className="w-full" asChild>
                  <NextLink href="/sign-in" onClick={() => setMenuOpen(false)}>
                    Sign In
                  </NextLink>
                </Button>
                <Button className="w-full" asChild>
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
