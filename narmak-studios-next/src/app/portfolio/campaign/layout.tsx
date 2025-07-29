import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Campaigns",
  description: "Products become characters. Messages become moments. View our creative campaign portfolio.",
  alternates: {
    canonical: '/portfolio/campaign',
  },
  openGraph: {
    title: "Client Campaigns – Studio Narmak",
    description: "Products become characters. Messages become moments. View our creative campaign portfolio.",
    url: "https://studionarmak.com/portfolio/campaign",
  },
  twitter: {
    title: "Client Campaigns – Studio Narmak", 
    description: "Products become characters. Messages become moments. View our creative campaign portfolio.",
  }
};

export default function CampaignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}