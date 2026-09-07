import NextLink from "next/link";

import LogoMark from "../../components/LogoMark";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export const metadata = {
  title: "Sign Up | OpenFund",
  description: "Create an OpenFund account to back campaigns and fund your own ideas.",
};

export default function SignUpPage() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,var(--primary)/5%,transparent)]"
      />

      <div className="relative w-full max-w-md">
        <div className="rounded-2xl border border-border bg-card shadow-lg shadow-primary/5">
          <div className="p-8 sm:p-10">
            <div className="flex flex-col items-center text-center">
              <NextLink href="/" className="flex items-center gap-2">
                <LogoMark />
                <span className="text-lg font-bold tracking-tight">
                  Open<span className="text-primary">Fund</span>
                </span>
              </NextLink>

              <h1 className="mt-6 text-2xl font-bold tracking-tight">
                Create your account
              </h1>
              <p className="mt-2 text-sm text-muted-foreground text-pretty">
                Join OpenFund to back the projects you believe in and raise funds
                for your own ideas.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              <div className="grid gap-2">
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jordan Doe"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="At least 8 characters"
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="h-11 w-full text-base cursor-pointer">
                Create account
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}