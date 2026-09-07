import NextLink from "next/link";

import AuthShell from "../../components/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata = {
  title: "Sign In | OpenFund",
  description: "Sign in to your OpenFund account.",
};

export default function SignInPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to keep backing great campaigns and track your own."
      footer={
        <>
          Don&apos;t have an account?{" "}
          <NextLink
            href="/sign-up"
            className="font-semibold text-mint-deep underline-offset-4 hover:underline"
          >
            Sign up
          </NextLink>
        </>
      }
    >
      <form className="space-y-5">
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
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <NextLink href="/sign-in" className="text-xs font-medium text-mint-deep hover:underline">
              Forgot password?
            </NextLink>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Your password"
            autoComplete="current-password"
            required
          />
        </div>

        <Button type="submit" size="lg" className="h-12 w-full rounded-full bg-ink text-[15px] font-semibold text-paper hover:bg-pine">
          Sign in
        </Button>
      </form>
    </AuthShell>
  );
}
