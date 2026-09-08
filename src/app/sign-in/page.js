import NextLink from "next/link";
import { ButtonRoot, FormRoot, TextFieldRoot, LabelRoot, InputRoot } from "@heroui/react";

import AuthShell from "../../components/AuthShell";

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
            className="font-semibold text-[#9A3412] underline-offset-4 hover:underline"
          >
            Sign up
          </NextLink>
        </>
      }
    >
      <FormRoot className="space-y-5">
        <TextFieldRoot name="email" type="email" isRequired className="grid gap-2">
          <LabelRoot className="text-sm font-medium">Email</LabelRoot>
          <InputRoot
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className="h-11 w-full rounded-xl border border-[#D9CDB2] bg-white px-4 text-[15px] outline-none placeholder:text-[#A8A29E] hover:border-[#C2410C]/60 focus:border-[#C2410C]"
          />
        </TextFieldRoot>

        <TextFieldRoot name="password" type="password" isRequired className="grid gap-2">
          <div className="flex items-center justify-between">
            <LabelRoot className="text-sm font-medium">Password</LabelRoot>
            <NextLink href="/sign-in" className="text-xs font-medium text-[#9A3412] hover:underline">
              Forgot password?
            </NextLink>
          </div>
          <InputRoot
            name="password"
            type="password"
            placeholder="Your password"
            autoComplete="current-password"
            className="h-11 w-full rounded-xl border border-[#D9CDB2] bg-white px-4 text-[15px] outline-none placeholder:text-[#A8A29E] hover:border-[#C2410C]/60 focus:border-[#C2410C]"
          />
        </TextFieldRoot>

        <ButtonRoot
          type="submit"
          className="flex h-12 w-full items-center justify-center rounded-full bg-[#C2410C] text-[15px] font-semibold text-white transition-colors hover:bg-[#9A3412]"
        >
          Sign in
        </ButtonRoot>
      </FormRoot>
    </AuthShell>
  );
}
