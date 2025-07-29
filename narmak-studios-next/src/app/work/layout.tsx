import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Creative Work & Showreel",
  description: "Watch Studio Narmak's creative reel featuring brand campaigns, original content, and animation work.",
  openGraph: {
    title: "Our Creative Work & Showreel – Studio Narmak",
    description: "Watch Studio Narmak's creative reel featuring brand campaigns, original content, and animation work.",
    url: "https://studionarmak.com/work",
  },
  twitter: {
    title: "Our Creative Work & Showreel – Studio Narmak",
    description: "Watch Studio Narmak's creative reel featuring brand campaigns, original content, and animation work.",
  }
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}