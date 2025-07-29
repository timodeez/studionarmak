import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animation & Creative Services",
  description: "Professional animation and creative services including brand animation, original content production, strategy, design, and graphic design subscriptions.",
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: "Animation & Creative Services – Studio Narmak",
    description: "Professional animation and creative services including brand animation, original content production, strategy, design, and graphic design subscriptions.",
    url: "https://studionarmak.com/services",
  },
  twitter: {
    title: "Animation & Creative Services – Studio Narmak",
    description: "Professional animation and creative services including brand animation, original content production, strategy, design, and graphic design subscriptions.",
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}