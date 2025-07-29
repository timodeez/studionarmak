import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConditionalBottomCTA from "@/components/ConditionalBottomCTA";
import SplashWrapper from "@/components/SplashWrapper";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL('https://studionarmak.com'),
  title: {
    template: 'Studio Narmak – %s',
    default: 'Studio Narmak – Imagination in Motion'
  },
  description: "Animated worlds for visionary brands and our own original stories—one team, end‑to‑end.",
  keywords: "animation, creative studio, brand animation, original content, video production, motion graphics, advertising",
  authors: [{ name: "Studio Narmak" }],
  creator: "Studio Narmak",
  publisher: "Studio Narmak",
  openGraph: {
    title: "Studio Narmak – Imagination in Motion",
    description: "Animated worlds for visionary brands and our own original stories—one team, end‑to‑end.",
    url: "https://studionarmak.com",
    siteName: "Studio Narmak",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Studio Narmak Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Narmak – Imagination in Motion",
    description: "Animated worlds for visionary brands and our own original stories—one team, end‑to‑end.",
    images: ["/og-image.png"],
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
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#2D2D2D" />
        <meta name="msapplication-TileColor" content="#2D2D2D" />
        {/* Favicon for browser and preview */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Studio Narmak",
              "url": "https://studionarmak.com",
              "logo": "https://studionarmak.com/og-image.png",
              "email": "hello@studionarmak.com",
              "description": "Animated worlds for visionary brands and our own original stories—one team, end‑to‑end.",
              "sameAs": [
                "https://www.youtube.com/@studionarmak",
                "https://www.instagram.com/studionarmak",
                "https://twitter.com/studionarmak"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased bg-charcoal text-off-white`}
      >
        <SplashWrapper>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <ConditionalBottomCTA />
          <Footer />
        </SplashWrapper>
        <Analytics />
      </body>
    </html>
  );
}
