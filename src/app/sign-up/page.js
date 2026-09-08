import NextLink from "next/link";
import { ButtonRoot, FormRoot, TextFieldRoot, LabelRoot, InputRoot } from "@heroui/react";

import AuthShell from "../../components/AuthShell";

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
            className="font-semibold text-[#9A3412] underline-offset-4 hover:underline"
          >
            Sign in
          </NextLink>
        </>
      }
    >
      <FormRoot className="space-y-5">
        <TextFieldRoot name="name" isRequired className="grid gap-2">
          <LabelRoot className="text-sm font-medium">Full name</LabelRoot>
          <InputRoot
            name="name"
            type="text"
            placeholder="Jordan Doe"
            autoComplete="name"
            className="h-11 w-full rounded-xl border border-[#D9CDB2] bg-white px-4 text-[15px] outline-none placeholder:text-[#A8A29E] hover:border-[#C2410C]/60 focus:border-[#C2410C]"
          />
        </TextFieldRoot>

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

        <TextFieldRoot name="password" type="password" isRequired minLength={8} className="grid gap-2">
          <LabelRoot className="text-sm font-medium">Password</LabelRoot>
          <InputRoot
            name="password"
            type="password"
            placeholder="At least 8 characters"
            autoComplete="new-password"
            minLength={8}
            className="h-11 w-full rounded-xl border border-[#D9CDB2] bg-white px-4 text-[15px] outline-none placeholder:text-[#A8A29E] hover:border-[#C2410C]/60 focus:border-[#C2410C]"
          />
        </TextFieldRoot>

        <ButtonRoot
          type="submit"
          className="flex h-12 w-full items-center justify-center rounded-full bg-[#C2410C] text-[15px] font-semibold text-white transition-colors hover:bg-[#9A3412]"
        >
          Create account
        </ButtonRoot>

        <p className="text-center text-xs leading-relaxed text-[#78716C]">
          By continuing you agree to the Terms. Payouts are verified on the public ledger.
        </p>
      </FormRoot>
    </AuthShell>
  );
}
