import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PerformanceDashboard from "@/components/PerformanceDashboard";
import ConditionalBottomCTA from "@/components/ConditionalBottomCTA";
import MobileOptimizer from "@/components/MobileOptimizer";
import SplashWrapper from "@/components/SplashWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Studio Narmak | Imagination in Motion",
  description: "We create animated worlds for brands and our own original stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Resource hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
        <link rel="dns-prefetch" href="https://vercel.com" />
        {/* Preload critical resources */}
        <link rel="preload" as="video" href="/website_reel_1-mobile.mp4" media="(max-width: 768px)" />
        <link rel="preload" as="video" href="/website_reel_1-web.mp4" media="(min-width: 769px)" />
      </head>
      <body
        className={`${ibmPlexSans.variable} ${inter.variable} bg-charcoal text-off-white font-sans antialiased`}
      >
        <SplashWrapper>
          <MobileOptimizer>
            <Header />
            <main>
              {children}
            </main>
            <ConditionalBottomCTA />
            <Footer />
            {process.env.NODE_ENV === 'development' && <PerformanceDashboard />}
            <SpeedInsights />
          </MobileOptimizer>
        </SplashWrapper>
      </body>
    </html>
  );
}
