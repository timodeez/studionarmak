import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Our Creative Team",
  description: "Join Studio Narmak's passionate team of creators, animators, and storytellers. Explore career opportunities.",
  openGraph: {
    title: "Join Our Creative Team – Studio Narmak",
    description: "Join Studio Narmak's passionate team of creators, animators, and storytellers. Explore career opportunities.",
    url: "https://studionarmak.com/careers",
  },
  twitter: {
    title: "Join Our Creative Team – Studio Narmak",
    description: "Join Studio Narmak's passionate team of creators, animators, and storytellers. Explore career opportunities.",
  }
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}