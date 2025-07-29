import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Narmak Originals – Viral Series & Shorts",
  description: "Original shorts and music videos with 500 M+ views and #1 trending on YouTube.",
  openGraph: {
    title: "Narmak Originals – Viral Series & Shorts – Studio Narmak",
    description: "Original shorts and music videos with 500 M+ views and #1 trending on YouTube.",
    url: "https://studionarmak.com/portfolio/originals",
  },
  twitter: {
    title: "Narmak Originals – Viral Series & Shorts – Studio Narmak",
    description: "Original shorts and music videos with 500 M+ views and #1 trending on YouTube.",
  }
};

export default function OriginalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}