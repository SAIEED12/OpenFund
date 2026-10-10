"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ButtonRoot, FormRoot, TextFieldRoot, LabelRoot, InputRoot } from "@heroui/react";
import NextLink from "next/link";

import { authClient } from "@/lib/auth-client";

export default function SignInForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    const { error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      callbackURL: "/",
    });

    setLoading(false);

    if (error) {
      setError(error.message || "Invalid email or password.");
      return;
    }

    router.push("/");
  };

  return (
    <div className="space-y-5">
      {error && (
        <p
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error}
        </p>
      )}

      <FormRoot className="space-y-5" onSubmit={onSubmit}>
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
          isDisabled={loading}
          className="flex h-12 w-full items-center justify-center rounded-full bg-[#C2410C] text-[15px] font-semibold text-white transition-colors hover:bg-[#9A3412] disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign in"}
        </ButtonRoot>
      </FormRoot>
    </div>
  );
}
