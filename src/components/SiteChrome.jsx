"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HIDE_CHROME_PREFIXES = ["/sign-up"];

export default function SiteChrome({ children }) {
  const pathname = usePathname() ?? "";
  const hide = HIDE_CHROME_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );

  if (hide) {
    return <div className="flex-1 flex flex-col">{children}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="flex-1 flex flex-col">{children}</div>
      <Footer />
    </>
  );
}
