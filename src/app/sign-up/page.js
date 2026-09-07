import NextLink from "next/link";

import AuthShell from "../../components/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata = {
  title: "Sign Up | OpenFund",
  description: "Create an OpenFund account to back campaigns and fund your own ideas.",
};

export default function SignUpPage() {
  return (
    <AuthShell
      title="Create your account"
      subtitle="Join OpenFund to back the projects you believe in — every pledge on the public ledger."
      footer={
        <>
          Already have an account?{" "}
          <NextLink
            href="/sign-in"
            className="font-semibold text-mint-deep underline-offset-4 hover:underline"
          >
            Sign in
          </NextLink>
        </>
      }
    >
      <form className="space-y-5">
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

        <Button type="submit" size="lg" className="h-12 w-full rounded-full bg-ink text-[15px] font-semibold text-paper hover:bg-pine">
          Create account
        </Button>

        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          By continuing you agree to the Terms. Payouts are verified on the public ledger.
        </p>
      </form>
    </AuthShell>
  );
}
