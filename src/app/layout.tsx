import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Orbitron, Exo_2 } from "next/font/google";
import "./globals.css";
import "../styles/color-system.css";
import "../styles/typography.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PageTransition from "@/components/PageTransition";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Link Innovations - Transform Ideas Into Digital Reality",
  description: "Leading digital innovation agency specializing in web development, mobile apps, AI solutions, and cloud services. We turn complex challenges into intelligent solutions that drive business growth.",
  keywords: ["web development", "mobile apps", "AI solutions", "cloud services", "digital transformation", "technology consulting"],
  authors: [{ name: "Link Innovations" }],
  creator: "Link Innovations",
  publisher: "Link Innovations",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://linkinnovations.ai",
    title: "Link Innovations - Transform Ideas Into Digital Reality",
    description: "Leading digital innovation agency specializing in web development, mobile apps, AI solutions, and cloud services.",
    siteName: "Link Innovations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Link Innovations - Transform Ideas Into Digital Reality",
    description: "Leading digital innovation agency specializing in web development, mobile apps, AI solutions, and cloud services.",
    creator: "@linkinnovations",
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable} ${exo2.variable} antialiased bg-black-100`}
      >
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "LinkInnovations", "version": "1.0.0", "greeting": "hi"}'
        />
        <LenisProvider>
          <PageTransition>
            {children}
          </PageTransition>
        </LenisProvider>
        <VisualEditsMessenger />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

