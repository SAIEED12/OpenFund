import { Fraunces, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  opticalSize: [9, 144],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OpenFund — Fund the ideas that shape tomorrow",
  description:
    "OpenFund is community crowdfunding with a public ledger. Back solar schools, open hardware, and neighborhood farms — or launch your own campaign.",
  openGraph: {
    title: "OpenFund — Fund the ideas that shape tomorrow",
    description:
      "Community crowdfunding with a public ledger. Every pledge traced from checkout to delivery.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Rooftop solar panels powering a school building",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenFund — Fund the ideas that shape tomorrow",
    description:
      "Community crowdfunding with a public ledger. Back solar schools, open hardware, and neighborhood farms.",
    images: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
