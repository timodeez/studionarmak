import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PerformanceDashboard from "@/components/PerformanceDashboard";
import ConditionalBottomCTA from "@/components/ConditionalBottomCTA";
import MobileOptimizer from "@/components/MobileOptimizer";
import SplashWrapper from "@/components/SplashWrapper";

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
        {/* Font links moved to _document.tsx */}
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
          </MobileOptimizer>
        </SplashWrapper>
      </body>
    </html>
  );
}
