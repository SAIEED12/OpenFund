import ExploreCampaigns from "../../components/ExploreCampaigns";

export const metadata = {
  title: "Explore Campaigns — OpenFund",
  description:
    "Browse active campaigns backed by the community. Every pledge is public, every payout verified.",
};

export default function CampaignsPage() {
  return (
    <main className="">
      <ExploreCampaigns />
    </main>
  );
}
