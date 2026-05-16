import type { Metadata } from "next";
import { Fraunces, Syne } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Cursor from "@/components/ui/Cursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://starwebdesign.in"
  ),
  title: {
    default: "STAR Web Design Agency — Premium Websites for Indian Businesses",
    template: "%s · STAR Web Design Agency",
  },
  description:
    "STAR builds premium, conversion-focused websites for architects, wedding planners, and Indian businesses — zero upfront cost. Based in Jaipur.",
  keywords: [
    "web design Jaipur",
    "website designer India",
    "architect website",
    "wedding planner website",
    "STAR Web Design Agency",
  ],
  openGraph: {
    title: "STAR Web Design Agency",
    description:
      "Premium web design for Indian businesses — websites that make you impossible to ignore.",
    type: "website",
    locale: "en_IN",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "STAR Web Design Agency",
    description: "Premium web design for Indian businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${syne.variable}`}>
      <body>
        <SmoothScroll>
          <Cursor />
          <Navbar />
          <main id="main-content" tabIndex={-1} style={{ paddingTop: 64 }}>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
