import Hero from "../components/Hero";
import FeaturedCampaigns from "../components/FeaturedCampaigns";
import HowItWorks from "../components/HowItWorks";
import WhyOpenFund from "../components/WhyOpenFund";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <FeaturedCampaigns />
      <HowItWorks />
      <WhyOpenFund />
    </main>
  );
}