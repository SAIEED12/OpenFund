import NextLink from "next/link";

import AuthShell from "../../components/AuthShell";
import SignInForm from "../../components/SignInForm";

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
      <SignInForm />
    </AuthShell>
  );
}
