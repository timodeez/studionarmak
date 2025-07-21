import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Narmak Studios - Animation & Creative Studio",
  description: "We create animated worlds for brands and our own original stories. A dual-engine creative house: we partner with visionary brands to move their audience, and we craft original worlds to build our own.",
  keywords: "animation, creative studio, brand animation, original content, video production, motion graphics, advertising",
  authors: [{ name: "Narmak Studios" }],
  creator: "Narmak Studios",
  publisher: "Narmak Studios",
  openGraph: {
    title: "Narmak Studios - Animation & Creative Studio",
    description: "We create animated worlds for brands and our own original stories.",
    url: "https://narmakstudios.com",
    siteName: "Narmak Studios",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Narmak Studios",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Narmak Studios - Animation & Creative Studio",
    description: "We create animated worlds for brands and our own original stories.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {/* Preload critical video resources */}
        <link
          rel="preload"
          href="/website_reel_1-mobile.webm"
          as="video"
          type="video/webm"
          media="(max-width: 768px)"
        />
        <link
          rel="preload"
          href="/website_reel_1-web.webm"
          as="video"
          type="video/webm"
          media="(min-width: 769px)"
        />
        <link
          rel="preload"
          href="/website_reel_1-mobile.mp4"
          as="video"
          type="video/mp4"
          media="(max-width: 768px)"
        />
        <link
          rel="preload"
          href="/website_reel_1-web.mp4"
          as="video"
          type="video/mp4"
          media="(min-width: 769px)"
        />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//player.vimeo.com" />
        {/* Viewport meta tag for mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased bg-charcoal text-off-white`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
